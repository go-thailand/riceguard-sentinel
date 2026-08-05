/* RiceGuard Sentinel — shared map renderer (classic script, no bundler).
   Loaded via <script is:inline src="/scripts/rg-map.js"> after d3 + topojson.
   Draws the same Thailand + neighbours map in three places (home small map,
   Map Modal big map, /research-map full-screen) from one code path.

   window.RGMap.draw({ svg, provinces, width, height, pad, interactive, onProvinceClick, onReady })
   window.RGMap.openProvinceModal(province)   // fills + shows #modal-province */
(function () {
  var WORLD_URL = "https://unpkg.com/world-atlas@2.0.2/countries-50m.json";
  var THAI_ID = "764";
  var NEIGHBOR_IDS = ["104", "116", "418", "458"]; // Myanmar, Cambodia, Laos, Malaysia
  var REGION_COLOR = {
    เหนือ: "#5A7326",
    อีสาน: "#8FB43A",
    กลาง: "#C9A227",
    ใต้: "#C67139",
  };

  var _cache = null; // fetched topojson, reused across every draw()
  var _queue = null; // callbacks waiting for the first fetch

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

    load(function (world) {
      var countries = topojson.feature(world, world.objects.countries).features;
      var thai = countries.filter(function (f) {
        return String(f.id) === THAI_ID;
      });
      var neighbors = countries.filter(function (f) {
        return NEIGHBOR_IDS.indexOf(String(f.id)) >= 0;
      });

      // Fit the projection to Thailand; neighbours bleed to the clipped edges.
      var projection = d3.geoMercator().fitExtent(
        [
          [PAD, PAD],
          [W - PAD, H - PAD],
        ],
        { type: "FeatureCollection", features: thai }
      );
      var path = d3.geoPath(projection);

      svg.attr("viewBox", "0 0 " + W + " " + H).attr("preserveAspectRatio", "xMidYMid meet");
      svg.selectAll("*").remove();

      // Layer 1 — neighbours (drawn first so Thailand sits on top)
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

      // Province markers — one <g> per province (blink ring + dot + label)
      var g = svg
        .append("g")
        .selectAll("g.rg-map-pin")
        .data(opts.provinces)
        .join("g")
        .attr("class", "rg-map-pin")
        .attr("transform", function (d) {
          var xy = projection([d.lng, d.lat]);
          return "translate(" + xy[0] + "," + xy[1] + ")";
        })
        .attr("aria-label", function (d) {
          return d.name;
        });

      if (opts.interactive) {
        g.attr("tabindex", 0)
          .attr("role", "button")
          // stopPropagation: keep the province click from bubbling to the map
          // background (which opens the Map Modal on the home page).
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
        return d.name;
      });

      // Hollow blinking ring with the required <animate> tags
      g.each(function (d) {
        var color = REGION_COLOR[d.region] || "#5A7326";
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

      // Solid dot
      g.append("circle")
        .attr("class", "rg-map-dot")
        .attr("r", 6.5)
        .attr("fill", function (d) {
          return REGION_COLOR[d.region] || "#5A7326";
        })
        .attr("stroke", "#fff")
        .attr("stroke-width", 1.4);

      // Transparent hit target (only where clicking matters)
      if (opts.interactive) {
        g.append("circle").attr("class", "rg-map-hit").attr("r", 15);
      }

      // Label
      g.append("text")
        .attr("class", "rg-map-label")
        .attr("y", 20)
        .text(function (d) {
          return d.name;
        });

      if (typeof opts.onReady === "function") opts.onReady(svg, projection);
    });
  }

  function openProvinceModal(p) {
    var modal = document.getElementById("modal-province");
    if (!modal) return;
    modal.querySelector("#rg-prov-name").textContent = p.name;
    modal.querySelector("#rg-prov-region").textContent = "ภาค" + p.region + " · " + p.nameEn;
    var statusEl = modal.querySelector("#rg-prov-status");
    statusEl.textContent = p.statusLabel;
    statusEl.className = "rg-status rg-status-" + p.status;
    modal.querySelector("#rg-prov-desc").textContent = p.note;
    modal.querySelector("#rg-prov-link").setAttribute("href", "/province/" + p.slug);
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    var closeBtn = modal.querySelector("[data-modal-close]");
    if (closeBtn) closeBtn.focus();
  }

  window.RGMap = { load: load, draw: draw, openProvinceModal: openProvinceModal, REGION_COLOR: REGION_COLOR };
})();
