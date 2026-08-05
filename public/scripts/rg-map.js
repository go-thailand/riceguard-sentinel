/* RiceGuard Sentinel — shared map renderer (classic script, no bundler).
   Loaded via <script is:inline src="/scripts/rg-map.js"> after d3 + topojson.
   Draws the same Thailand + neighbours map in three places (home small map,
   Map Modal big map, /research-map full-screen) from one code path.

   Language-aware: province/region text is stored per language in the JSON data
   island; labels re-render on the "rg:langchange" event fired by i18n.js.

   window.RGMap.draw({ svg, data, width, height, pad, interactive, onProvinceClick, onReady })
     data = { provinces:[{slug,status,lat,lng,name:{th,en,zh},note,region,statusLabel}], regions:[...] }
   window.RGMap.openProvinceModal(province) */
(function () {
  var WORLD_URL = "https://unpkg.com/world-atlas@2.0.2/countries-50m.json";
  var THAI_ID = "764";
  var NEIGHBOR_IDS = ["104", "116", "418", "458"]; // Myanmar, Cambodia, Laos, Malaysia
  var STATUS_COLOR = { live: "#8FB43A", soon: "#C9A227", plan: "#C67139" };
  var REGION_COLOR = {
    เหนือ: "#5A7326",
    อีสาน: "#8FB43A",
    กลาง: "#C9A227",
    ใต้: "#C67139",
  };

  var _cache = null;
  var _queue = null;
  var _lastProvince = null; // for refilling the modal on language change

  function currentLang() {
    try {
      return localStorage.getItem("rg-lang") || "th";
    } catch (e) {
      return "th";
    }
  }

  // Region marker colour keyed off its Thai label (stable across languages).
  function regionColor(regionTri) {
    return REGION_COLOR[regionTri && regionTri.th] || "#5A7326";
  }

  function load(cb) {
    if (_cache) {
      cb(_cache);
      return;
    }
    if (_queue) {
      _queue.push(cb);
      return;
    }
    _queue = [cb];
    d3.json(WORLD_URL)
      .then(function (world) {
        _cache = world;
        var q = _queue;
        _queue = null;
        q.forEach(function (fn) {
          fn(world);
        });
      })
      .catch(function (err) {
        console.error("RGMap: world-atlas load failed:", err);
      });
  }

  function draw(opts) {
    var W = opts.width || 520;
    var H = opts.height || 700;
    var PAD = opts.pad != null ? opts.pad : 26;
    var svg = d3.select(opts.svg);
    if (svg.empty() || typeof topojson === "undefined") return;

    var provinces = (opts.data && opts.data.provinces) || [];
    var regions = (opts.data && opts.data.regions) || [];

    load(function (world) {
      var countries = topojson.feature(world, world.objects.countries).features;
      var thai = countries.filter(function (f) {
        return String(f.id) === THAI_ID;
      });
      var neighbors = countries.filter(function (f) {
        return NEIGHBOR_IDS.indexOf(String(f.id)) >= 0;
      });

      var projection = d3.geoMercator().fitExtent(
        [
          [PAD, PAD],
          [W - PAD, H - PAD],
        ],
        { type: "FeatureCollection", features: thai }
      );
      var path = d3.geoPath(projection);
      var lang = currentLang();

      svg.attr("viewBox", "0 0 " + W + " " + H).attr("preserveAspectRatio", "xMidYMid meet");
      svg.selectAll("*").remove();

      // Layer 1 — neighbours
      svg
        .append("g")
        .selectAll("path")
        .data(neighbors)
        .join("path")
        .attr("d", path)
        .attr("fill", "#e7dcc6")
        .attr("stroke", "#d8cbb0")
        .attr("stroke-width", 0.7);

      // Layer 2 — Thailand
      svg
        .append("g")
        .selectAll("path")
        .data(thai)
        .join("path")
        .attr("d", path)
        .attr("fill", "#fbf6ec")
        .attr("stroke", "#5A7326")
        .attr("stroke-width", 1.4);

      // Region watermarks
      svg
        .append("g")
        .selectAll("text.rg-map-region")
        .data(regions)
        .join("text")
        .attr("class", "rg-map-region")
        .attr("x", function (d) {
          return projection([d.lng, d.lat])[0];
        })
        .attr("y", function (d) {
          return projection([d.lng, d.lat])[1];
        })
        .text(function (d) {
          return d.label[lang] || d.label.th;
        });

      // Province markers
      var g = svg
        .append("g")
        .selectAll("g.rg-map-pin")
        .data(provinces)
        .join("g")
        .attr("class", "rg-map-pin")
        .attr("transform", function (d) {
          var xy = projection([d.lng, d.lat]);
          return "translate(" + xy[0] + "," + xy[1] + ")";
        })
        .attr("aria-label", function (d) {
          return d.name[lang] || d.name.th;
        });

      if (opts.interactive) {
        g.attr("tabindex", 0)
          .attr("role", "button")
          .on("click", function (event, d) {
            event.stopPropagation();
            if (opts.onProvinceClick) opts.onProvinceClick(d);
          })
          .on("keydown", function (event, d) {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              event.stopPropagation();
              if (opts.onProvinceClick) opts.onProvinceClick(d);
            }
          });
      } else {
        g.classed("is-static", true);
      }

      g.append("title").text(function (d) {
        return d.name[lang] || d.name.th;
      });

      // Blinking ring with the required <animate> tags
      g.each(function (d) {
        var color = STATUS_COLOR[d.status] || regionColor(d.region);
        var ring = d3
          .select(this)
          .append("circle")
          .attr("class", "rg-map-blink")
          .attr("r", 6.5)
          .attr("fill", "none")
          .attr("stroke", color)
          .attr("stroke-width", 1.6)
          .attr("opacity", 0.5);
        ring
          .append("animate")
          .attr("attributeName", "r")
          .attr("values", "6.5;13;6.5")
          .attr("dur", "2.6s")
          .attr("repeatCount", "indefinite");
        ring
          .append("animate")
          .attr("attributeName", "opacity")
          .attr("values", "0.5;0;0.5")
          .attr("dur", "2.6s")
          .attr("repeatCount", "indefinite");
      });

      g.append("circle")
        .attr("class", "rg-map-dot")
        .attr("r", 6.5)
        .attr("fill", function (d) {
          return STATUS_COLOR[d.status] || regionColor(d.region);
        })
        .attr("stroke", "#fff")
        .attr("stroke-width", 1.4);

      if (opts.interactive) {
        g.append("circle").attr("class", "rg-map-hit").attr("r", 15);
      }

      g.append("text")
        .attr("class", "rg-map-label")
        .attr("y", 20)
        .text(function (d) {
          return d.name[lang] || d.name.th;
        });

      // Re-label this map whenever the language changes
      document.addEventListener("rg:langchange", function (e) {
        var l = (e.detail && e.detail.lang) || currentLang();
        svg.selectAll("text.rg-map-region").text(function (d) {
          return d.label[l] || d.label.th;
        });
        svg.selectAll("g.rg-map-pin").attr("aria-label", function (d) {
          return d.name[l] || d.name.th;
        });
        svg.selectAll("text.rg-map-label").text(function (d) {
          return d.name[l] || d.name.th;
        });
      });

      if (typeof opts.onReady === "function") opts.onReady(svg, projection);
    });
  }

  function openProvinceModal(p) {
    _lastProvince = p;
    var modal = document.getElementById("modal-province");
    if (!modal) return;
    fillProvinceModal(modal, p, currentLang());
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    var closeBtn = modal.querySelector("[data-modal-close]");
    if (closeBtn) closeBtn.focus();
  }

  function fillProvinceModal(modal, p, lang) {
    var pick = function (o) {
      return (o && (o[lang] || o.th)) || "";
    };
    modal.querySelector("#rg-prov-name").textContent = pick(p.name);
    modal.querySelector("#rg-prov-region").textContent = pick(p.region);
    var statusEl = modal.querySelector("#rg-prov-status");
    statusEl.textContent = pick(p.statusLabel);
    statusEl.className = "rg-status rg-status-" + p.status;
    modal.querySelector("#rg-prov-desc").textContent = pick(p.note);
    modal.querySelector("#rg-prov-link").setAttribute("href", "/province/" + p.slug);
  }

  // Keep an open province modal in sync when the language switches.
  document.addEventListener("rg:langchange", function (e) {
    var modal = document.getElementById("modal-province");
    if (!modal || !modal.classList.contains("is-open") || !_lastProvince) return;
    fillProvinceModal(modal, _lastProvince, (e.detail && e.detail.lang) || currentLang());
  });

  window.RGMap = {
    load: load,
    draw: draw,
    openProvinceModal: openProvinceModal,
    currentLang: currentLang,
  };
})();
