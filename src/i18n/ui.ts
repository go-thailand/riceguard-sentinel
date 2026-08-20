// RiceGuard Sentinel — i18n dictionary (single source of truth).
// TH = original copy. EN/ZH extracted from the team's translated builds
// ("RiceGuard Sentinel Website (EN/ZH).html"). Resolved at build time per URL
// locale (Astro.currentLocale) via the helpers below — each language gets its
// own server-rendered page (/, /en/, /zh/). The map labels (rg-map.js) read
// the same copy from a JSON island (ProvinceData.astro).
export const languages = ["th", "en", "zh"] as const;
export type Lang = (typeof languages)[number];

export const ui = {
  // ---- Nav ----
  "nav.story": { th: "เรื่องราว", en: "Story", zh: "故事" },
  "nav.how": { th: "ทำงานอย่างไร", en: "How", zh: "原理" },
  "nav.device": { th: "อุปกรณ์", en: "Device", zh: "设备" },
  "nav.knowledge": { th: "ฐานความรู้", en: "Knowledge", zh: "知识库" },
  "nav.contact": { th: "ติดต่อ", en: "Contact", zh: "联系" },
  "brand.th": { th: "ไรซ์การ์ด เซ็นทินัล", en: "RiceGuard Sentinel", zh: "水稻卫士哨兵" },

  // ---- Hero ----
  "hero.title": {
    th: 'เกษตรอัจฉริยะ<br>เพื่อชาวนาไทย<br><span class="rg-accent">ด้วย AI</span>',
    en: 'Smart farming<br>for Thai rice growers<br><span class="rg-accent">with AI</span>',
    zh: '智慧农业<br>助力泰国稻农<br><span class="rg-accent">以 AI 驱动</span>',
  },
  "hero.eyebrow": { th: "งานวิจัยและพัฒนา", en: "Ongoing R&D", zh: "研发进行中" },
  "hero.desc": {
    th: "RiceGuard Sentinel คือการทดลองนำ IoT และ AI มาช่วยชาวนาไทย ให้ใช้น้ำ ปุ๋ย และการดูแลศัตรูพืชอย่างแม่นยำ",
    en: "RiceGuard Sentinel brings IoT and AI to Thai farmers for precise use of water, fertiliser, and pest care",
    zh: "RiceGuard Sentinel 是一项将物联网与人工智能带给泰国稻农的探索——让灌溉、施肥与病虫害防治更精准",
  },
  "hero.cta1": { th: "อ่านเรื่องราว", en: "Read the story", zh: "阅读故事" },
  "hero.cta2": { th: "ฐานความรู้เปิด", en: "Open Knowledge Base", zh: "打开知识库" },
  "hero.badge": {
    th: "ออกแบบและพัฒนาในประเทศไทย",
    en: "Designed & engineered in Thailand",
    zh: "在泰国设计与研发",
  },
  "hero.stat0.th": { th: "ประหยัดน้ำ", en: "Water saved", zh: "节水" },
  "hero.stat1.th": { th: "ผลผลิตเพิ่ม", en: "Yield increase", zh: "增产" },
  "hero.stat2.th": { th: "ประหยัดปูน", en: "Lime saved", zh: "节省石灰" },
  "hero.stat3.th": { th: "ลดก๊าซมีเทน", en: "Methane cut", zh: "减少甲烷" },
  "hero.impactnote": {
    th: "ตัวเลขจากการทดลองภาคสนาม อยู่ระหว่างการวิจัยเพิ่มเติม",
    en: "Figures from field trials, under continued research",
    zh: "数据来自田间试验，仍在持续研究中",
  },

  // ---- 01 Story ----
  "story.label": { th: "เรื่องราวจากภาคสนาม", en: "The R&D Story", zh: "研发故事" },
  "story.h2": {
    th: "จากแปลงนาจริง สู่การออกแบบใหม่",
    en: "From a real field to a redesign",
    zh: "从真实稻田到全新设计",
  },
  "story.lead": {
    th: "นี่ไม่ใช่ผลิตภัณฑ์จากห้องแล็บ ทุกการเปลี่ยนแปลงของรุ่นที่ 4 มาจากปัญหาที่พบจริงในนาข้าวสงขลา",
    en: "This isn't a lab product",
    zh: "这不是实验室里的产品",
  },
  "story.gen3.h3": { th: "สิ่งที่ข้อมูลบอกเรา", en: "What the data told us", zh: "数据告诉我们的事" },
  "story.gen4.h3": {
    th: "ออกแบบใหม่จากหลักฐาน",
    en: "Redesigned from the evidence",
    zh: "以证据为本的重新设计",
  },

  // ---- 02 How ----
  "how.label": { th: "เส้นทางข้อมูล 4 ชั้น", en: "How it works", zh: "工作原理" },
  "how.h2": {
    th: "จากต้นข้าว ถึงมือชาวนา ใน 4 ขั้น",
    en: "From the field to the farmer's hand",
    zh: "从稻田到农民手中",
  },
  "how.step0.th": { th: "เก็บข้อมูลที่ขอบ", en: "Edge acquisition", zh: "边缘采集" },
  "how.step1.th": { th: "ประมวลผลที่เครื่อง", en: "Edge inference", zh: "边缘推理" },
  "how.step2.th": { th: "วิเคราะห์บนคลาวด์", en: "Cloud & fusion", zh: "云端与融合" },
  "how.step3.th": { th: "ถึงมือชาวนา", en: "Presentation", zh: "呈现给农民" },

  // ---- 03 Device ----
  "device.label": { th: "อุปกรณ์รุ่นที่ 4", en: "The Gen 4 Device", zh: "第 4 代设备" },
  "device.h2": {
    th: "สถานีเฝ้าระวังครบในหนึ่งเดียว",
    en: "One all-in-one field station",
    zh: "一体化田间监测站",
  },
  "device.lead": {
    th: "สูง 4 เมตร พลังงานแสงอาทิตย์ กันน้ำท่วม พร้อมคอมพิวเตอร์ประมวลผลที่ขอบและเครือข่าย LoRa",
    en: "4 metres tall, solar-powered and flood-proof, with edge computing and a LoRa network",
    zh: "高 4 米、太阳能供电、防洪涝，配备边缘计算与 LoRa 网络",
  },
  "device.spec0.th": { th: "ความสูง", en: "Height", zh: "高度" },
  "device.spec1.th": { th: "โซลาร์ 2 หน้า", en: "Bifacial solar", zh: "双面太阳能" },
  "device.spec2.th": { th: "สำรองไฟ", en: "Battery backup", zh: "电池续航" },
  "device.spec3.th": { th: "การวัด", en: "Measurements", zh: "测量项" },
  "device.spec4.th": { th: "กันน้ำ", en: "Waterproof", zh: "防水" },
  "device.spec5.th": { th: "AI ที่ขอบ", en: "Edge AI", zh: "边缘 AI" },

  // ---- 04 Sensors ----
  "sensors.label": {
    th: "เซ็นเซอร์และการหลอมรวมข้อมูล",
    en: "Sensing & Data Fusion",
    zh: "传感与数据融合",
  },
  "sensors.h2": {
    th: "ตัวเลขจากดิน · ภาพจากต้นข้าว",
    en: "Numbers from the soil, images from the crop",
    zh: "来自土壤的数据，来自稻株的影像",
  },
  "sensors.lead": {
    th: "18 การวัด หลอมรวมกับภาพการเจริญเติบโตและศัตรูพืช เพื่อให้คำแนะนำที่แม่นยำ",
    en: "18 measurements fused with growth-stage and pest imagery for precise advice",
    zh: "18 项测量数据与生长阶段及病虫害影像融合，给出精准建议",
  },
  "sensors.data.title": { th: "ข้อมูลเซ็นเซอร์", en: "Sensor data", zh: "传感器数据" },
  "sensors.fusion": { th: "หลอมรวม", en: "Fusion", zh: "数据融合" },
  "sensors.image.title": { th: "ภาพต้นข้าวและศัตรูพืช", en: "Crop & pest images", zh: "稻株与病虫害影像" },

  // ---- 05 Pest ----
  "pest.label": {
    th: "การจัดการศัตรูพืชอย่างชาญฉลาด",
    en: "Smart Pest Management",
    zh: "智能病虫害管理",
  },
  "pest.h2": {
    th: "ใช้สารเคมีเท่าที่จำเป็น",
    en: "Only the pesticide that's actually needed",
    zh: "只用真正必要的农药",
  },
  "pest.lead": {
    th: "ด้วยฐานภาพศัตรูพืชกว่า 7,000 ชนิด RiceGuard ช่วยตรวจจับชนิดที่ถูกต้องและแจ้งปริมาณสารที่เหมาะสม",
    en: "With an image library of over 7,000 pests, RiceGuard identifies the right species and recommends the right dose",
    zh: "凭借超过 7,000 种害虫的图像库，RiceGuard 能识别正确的害虫种类并给出合适的用药量",
  },
  "pest.tool0.th": { th: "ตรวจจับด้วยภาพ", en: "Image detection", zh: "图像识别" },
  "pest.tool1.th": { th: "คลื่นอัลตราโซนิก", en: "Ultrasonic waves", zh: "超声波" },
  "pest.tool2.th": { th: "กับดักฟีโรโมนอัจฉริยะ", en: "Smart pheromone trap", zh: "智能信息素诱捕器" },
  "pest.tool3.th": { th: "เสียงไล่นก AI", en: "AI bird deterrent", zh: "AI 驱鸟声" },
  "pest.notestrip": {
    th: "ระบบป้องกัน ไม่ใช่แค่ตรวจจับ",
    en: "A prevention system, not just detection",
    zh: "集成的预防系统，而不仅是检测",
  },

  // ---- 06 Knowledge ----
  "knowledge.label": { th: "รางวัลสูงสุด", en: "The Ultimate Prize", zh: "终极目标" },
  "knowledge.h2": {
    th: "ฐานความรู้ที่เปิดให้ชาวนาทุกคน ทุกที่",
    en: "An open Knowledge Base — free, for every farmer, everywhere",
    zh: "向每一位农民、每一个角落开放的知识库",
  },
  "knowledge.lead": {
    th: "ความรู้เรื่องพันธุ์ข้าวไทย ตารางปุ๋ย โรคและศัตรูพืช ที่เติบโตขึ้นทุกวัน และไหลกลับสู่อุปกรณ์ในทุกภูมิภาค",
    en: "Thai rice varieties, fertiliser schedules, diseases and pests — expanding every day",
    zh: "涵盖泰国稻种、施肥方案、病害与虫害的知识库，每天都在扩充",
  },
  "knowledge.tier0.th": { th: "ระดับแปลง", en: "Plot level", zh: "田块级" },
  "knowledge.tier1.th": { th: "ระดับภูมิภาค", en: "Regional level", zh: "区域级" },
  "knowledge.tier2.th": { th: "ระดับประเทศ", en: "National level", zh: "国家级" },

  // ---- 07 Green ----
  "green.label": { th: "เทคโนโลยีสีเขียว", en: "Green Technology", zh: "绿色科技" },
  "green.h2": {
    th: "ไม่ทิ้งรอยเท้าคาร์บอน",
    en: "Leaving no carbon footprint behind",
    zh: "不留碳足迹",
  },
  "green.lead": {
    th: "พลังงานแสงอาทิตย์ล้วน และช่วยลดการปล่อยก๊าซมีเทนจากการจัดการน้ำที่แม่นยำ",
    en: "Solar-powered, and it helps cut methane through smarter water management",
    zh: "全太阳能供电，并通过精准的水分管理帮助减少甲烷排放",
  },
  "green.stat0.th": {
    th: "รอยเท้าคาร์บอนจากอุปกรณ์",
    en: "Carbon footprint from the device",
    zh: "设备碳足迹",
  },
  "green.stat1.th": { th: "พลังงานแสงอาทิตย์", en: "Solar-powered", zh: "太阳能供电" },
  "green.stat2.th": { th: "ลดการใช้สารเคมี", en: "Less chemical use", zh: "减少化学品使用" },
  "green.stat3.th": { th: "ประหยัดปุ๋ย", en: "Fertiliser saved", zh: "节省肥料" },

  // ---- 08 Trial ----
  "trial.label": { th: "ผลการทดลองภาคสนาม", en: "Field Trial Results", zh: "田间试验结果" },
  "trial.h2": {
    th: "ระโนด สงขลา — บทเรียนจริง",
    en: "Ranot, Songkhla — what the soil revealed",
    zh: "宋卡府拉诺县 — 土壤揭示的真相",
  },
  "trial.lead": {
    th: "เซ็นเซอร์พบดินกรดจัดถึง pH 4.7 ซึ่งมองไม่เห็นด้วยตาเปล่า การใส่ปูนแบบเฉพาะจุดประหยัดได้ 57%",
    en: "Sensors found soil as acidic as pH 4.7 — invisible to the naked eye. Targeted, spot-specific liming cut lime use by 57%.",
    zh: "传感器测得土壤 pH 低至 4.7（强酸性），肉眼无法察觉。分点精准施用石灰，用量节省 57%。",
  },
  "trial.stat0.th": { th: "จุดที่กรดจัดที่สุด", en: "Most acidic spot", zh: "最酸点" },
  "trial.stat1.th": { th: "ประหยัดปูนโดโลไมต์", en: "Dolomite lime saved", zh: "节省白云石石灰" },
  "trial.stat2.th": { th: "พื้นที่ทดลอง", en: "Trial area", zh: "试验面积" },

  // ---- 09 Expansion ----
  "expansion.label": { th: "การขยายผล 4 ภูมิภาค", en: "4-Region Expansion", zh: "四大区域推广" },
  "expansion.h2": {
    th: "ทดสอบทั่วประเทศ ในทุกสภาพนา",
    en: "Testing across every Thai growing condition",
    zh: "覆盖全国、适应各种稻田环境的测试",
  },
  "expansion.lead": {
    th: "เหนือ · อีสาน · กลาง · ใต้ — เปรียบเทียบแปลงแบบดั้งเดิมกับแปลงที่ใช้ Sentinel ทั้งฤดูฝนและฤดูแล้ง",
    en: "North · Northeast · Central · South — comparing conventional plots with Sentinel plots across both the rainy and dry seasons.",
    zh: "北部 · 东北部 · 中部 · 南部——在雨季与旱季对比传统田块与使用 Sentinel 的田块。",
  },

  // ---- 10 System ----
  "system.label": { th: "ภาพรวมระบบ AI", en: "AI System Overview", zh: "AI 系统总览" },
  "system.h2": {
    th: "เส้นทางข้อมูล ตั้งแต่ต้นข้าวถึงคลาวด์",
    en: "From crop to cloud",
    zh: "数据之旅：从稻株到云端",
  },
  "system.lead": {
    th: "แผนภาพระบบตั้งแต่การเก็บข้อมูลที่ขอบ การประมวลผล การส่งข้อมูล จนถึงฐานความรู้และการแสดงผล",
    en: "A system diagram from edge acquisition and processing to transport, the knowledge base and presentation",
    zh: "从边缘数据采集、处理、传输，到知识库与结果呈现的系统全图",
  },

  // ---- 11 Contact ----
  "contact.label": { th: "เกี่ยวกับเรา", en: "About & Contact", zh: "关于我们与联系方式" },
  "contact.h2": {
    th: "บริษัท โมบาย เอไอ จำกัด",
    en: "Mobile AI Company Co., Ltd.",
    zh: "Mobile AI 有限公司",
  },
  "contact.desc": {
    th: "ผู้พัฒนา RiceGuard Sentinel — งานวิจัยและพัฒนาที่ยังดำเนินอยู่ เพื่อการเกษตรไทย",
    en: "The developer of RiceGuard Sentinel — ongoing research and development for Thai agriculture.",
    zh: "RiceGuard Sentinel 的研发方——为泰国农业持续进行的研究与开发。",
  },
  "contact.address": {
    th: "348 สุขุมวิท 101/1 แขวงบางนาเหนือ เขตบางนา กรุงเทพฯ 10260",
    en: "348 Sukhumvit 101/1, Bangna Nuea, Bangna, Bangkok 10260",
    zh: "曼谷挽那区北挽那分区素坤逸 101/1 巷 348 号，邮编 10260",
  },
  "contact.tax": { th: "เลขภาษี", en: "Tax ID", zh: "税号" },

  // ---- Footer ----
  "footer.rd": {
    th: "งานวิจัยและพัฒนา อยู่ระหว่างดำเนินการ",
    en: "Ongoing R&D",
    zh: "研发进行中",
  },

  // ================= Tier 2 =================

  // ---- Regions ----
  "region.north": { th: "เหนือ", en: "North", zh: "北部" },
  "region.northeast": { th: "อีสาน", en: "Northeast", zh: "东北部" },
  "region.central": { th: "กลาง", en: "Central", zh: "中部" },
  "region.south": { th: "ใต้", en: "South", zh: "南部" },

  // ---- Rollout statuses ----
  "status.live": { th: "กำลังเก็บข้อมูล", en: "Collecting data", zh: "采集数据中" },
  "status.soon": { th: "เตรียมติดตั้ง", en: "Installing soon", zh: "即将安装" },
  "status.plan": { th: "วางแผน", en: "Planned", zh: "规划中" },
  "status.live.desc": {
    th: "สถานี Sentinel ทำงานอยู่ในแปลง กำลังเก็บข้อมูลจริงต่อเนื่อง",
    en: "A Sentinel station is live in the field, continuously collecting real data",
    zh: "Sentinel 监测站已在田间运行，持续采集真实数据",
  },
  "status.soon.desc": {
    th: "อยู่ระหว่างเตรียมพื้นที่และติดตั้งอุปกรณ์ในฤดูปลูกถัดไป",
    en: "Site preparation and equipment installation are underway for the next growing season",
    zh: "正在为下一个种植季进行场地准备与设备安装",
  },
  "status.plan.desc": {
    th: "อยู่ในแผนขยายผล ยังไม่เริ่มติดตั้ง",
    en: "In the expansion roadmap; installation has not started yet",
    zh: "列入推广计划，尚未开始安装",
  },

  // ---- Province names ----
  "province.chiang-rai.name": { th: "เชียงราย", en: "Chiang Rai", zh: "清莱" },
  "province.chiang-mai.name": { th: "เชียงใหม่", en: "Chiang Mai", zh: "清迈" },
  "province.nan.name": { th: "น่าน", en: "Nan", zh: "楠府" },
  "province.amnat-charoen.name": { th: "อำนาจเจริญ", en: "Amnat Charoen", zh: "安纳乍能" },
  "province.ubon-ratchathani.name": { th: "อุบลราชธานี", en: "Ubon Ratchathani", zh: "乌汶" },
  "province.roi-et.name": { th: "ร้อยเอ็ด", en: "Roi Et", zh: "黎逸" },
  "province.suphan-buri.name": { th: "สุพรรณบุรี", en: "Suphan Buri", zh: "素攀武里" },
  "province.pathum-thani.name": { th: "ปทุมธานี", en: "Pathum Thani", zh: "巴吞他尼" },
  "province.phichit.name": { th: "พิจิตร", en: "Phichit", zh: "披集" },
  "province.songkhla.name": { th: "สงขลา", en: "Songkhla", zh: "宋卡" },
  "province.phatthalung.name": { th: "พัทลุง", en: "Phatthalung", zh: "博他仑" },
  "province.nakhon-si-thammarat.name": {
    th: "นครศรีธรรมราช",
    en: "Nakhon Si Thammarat",
    zh: "那空是贪玛叻",
  },

  // ---- Province field notes ----
  "province.chiang-rai.note": {
    th: "นาปีบนที่สูง ทดสอบการจัดการน้ำในฤดูฝนหนัก",
    en: "Highland wet-season rice — testing water management through heavy monsoon rains",
    zh: "高地雨季稻作——测试强降雨季节的水分管理",
  },
  "province.chiang-mai.note": {
    th: "แปลงขั้นบันได เปรียบเทียบการใช้ปุ๋ยแม่นยำ",
    en: "Terraced plots — comparing precision fertiliser application",
    zh: "梯田田块——对比精准施肥效果",
  },
  "province.nan.note": {
    th: "พื้นที่ลาดชัน เตรียมติดตั้งสถานีเฝ้าระวังดินถล่ม",
    en: "Steep terrain — preparing to install landslide-monitoring stations",
    zh: "陡坡地带——筹备安装滑坡监测站",
  },
  "province.amnat-charoen.note": {
    th: "ดินทราย ทดสอบการกักเก็บความชื้นและ NPK",
    en: "Sandy soil — testing moisture and NPK retention",
    zh: "沙质土壤——测试水分与氮磷钾的保持",
  },
  "province.ubon-ratchathani.note": {
    th: "ที่ราบลุ่มแม่น้ำมูล เตรียมทดสอบระบบเตือนน้ำท่วม",
    en: "Mun River floodplain — preparing to test flood-warning systems",
    zh: "蒙河冲积平原——筹备测试洪水预警系统",
  },
  "province.roi-et.note": {
    th: "ทุ่งกุลาร้องไห้ วางแผนแปลงข้าวหอมมะลิ",
    en: "Thung Kula Ronghai — planning jasmine rice plots",
    zh: "库拉哭泣平原——规划茉莉香米田块",
  },
  "province.suphan-buri.note": {
    th: "นาชลประทาน เปรียบเทียบผลผลิตพันธุ์ปทุมธานี 1",
    en: "Irrigated paddies — comparing Pathum Thani 1 variety yields",
    zh: "灌溉稻田——对比帕吞他尼 1 号品种产量",
  },
  "province.pathum-thani.note": {
    th: "แปลงต้นแบบใกล้ศูนย์วิจัย เตรียมติดตั้งเซ็นเซอร์ชุดใหม่",
    en: "Pilot plots near the research centre — preparing to install a new sensor set",
    zh: "研究中心附近的示范田——筹备安装新一组传感器",
  },
  "province.phichit.note": {
    th: "ที่ราบภาคกลางตอนบน วางแผนทดสอบฤดูแล้ง",
    en: "Upper central plains — planning dry-season trials",
    zh: "中部上游平原——规划旱季试验",
  },
  "province.songkhla.note": {
    th: "ระโนด — แปลงต้นกำเนิด พบดินกรด pH 4.7 ประหยัดปูน 57%",
    en: "Ranot — the origin plot; found acidic soil at pH 4.7 and cut lime use by 57%",
    zh: "拉诺——发源田块；测得土壤 pH 4.7 强酸性，石灰用量节省 57%",
  },
  "province.phatthalung.note": {
    th: "ลุ่มทะเลสาบสงขลา เตรียมทดสอบดินเปรี้ยว",
    en: "Songkhla Lake basin — preparing to test acid-sulfate soils",
    zh: "宋卡湖流域——筹备测试酸性硫酸盐土壤",
  },
  "province.nakhon-si-thammarat.note": {
    th: "ที่ราบชายฝั่ง วางแผนแปลงข้าวพื้นเมืองภาคใต้",
    en: "Coastal plains — planning southern native rice plots",
    zh: "沿海平原——规划南部本地稻田块",
  },

  // ---- Map UI ----
  "map.legend.title": {
    th: "พื้นที่วิจัย 12 จังหวัด · 4 ภูมิภาค",
    en: "12 research provinces · 4 regions",
    zh: "12 个研究府 · 4 大区域",
  },
  "map.expand": { th: "ขยายแผนที่", en: "Expand map", zh: "放大地图" },
  "map.hint": {
    th: "คลิกจุดบนแผนที่เพื่อดูรายละเอียด หรือกดขยายแผนที่",
    en: "Click a point on the map for details, or expand the map",
    zh: "点击地图上的点查看详情，或放大地图",
  },
  "map.modal.eyebrow": { th: "การขยายผล 4 ภูมิภาค", en: "4-Region Expansion", zh: "四大区域推广" },
  "map.modal.title": {
    th: "แผนที่พื้นที่วิจัย 12 จังหวัด",
    en: "Research area map · 12 provinces",
    zh: "研究区域地图 · 12 个府",
  },
  "map.fullscreen": { th: "ขยายเต็มจอ", en: "Fullscreen", zh: "全屏" },
  "map.back": { th: "กลับสู่หน้าหลัก", en: "Back to home", zh: "返回主页" },

  // ---- Province detail page ----
  "province.back": {
    th: "กลับไปแผนที่พื้นที่วิจัย",
    en: "Back to the research map",
    zh: "返回研究地图",
  },
  "province.pageLabel": { th: "หน้าแปลง", en: "Field page", zh: "田块页面" },
  "map.viewDashboard": { th: "ดูข้อมูลหน้าแปลง", en: "View Field Dashboard", zh: "查看田块数据" },
  "unit.rai": { th: "ไร่", en: "Rai", zh: "莱" },
  "province.stat.area": { th: "พื้นที่ทดลอง", en: "Trial area", zh: "试验面积" },
  "province.stat.ph": { th: "pH ดินเฉลี่ย", en: "Average soil pH", zh: "平均土壤 pH" },
  "province.stat.moisture": { th: "ความชื้นดิน", en: "Soil moisture", zh: "土壤湿度" },
  "province.stat.station": { th: "สถานี Sentinel", en: "Sentinel station", zh: "Sentinel 监测站" },
  "province.station.online": { th: "ออนไลน์", en: "Online", zh: "在线" },
  "province.coords": { th: "พิกัดสถานี", en: "Station coordinates", zh: "监测站坐标" },
  "province.note.realtime": {
    th: "ข้อมูลรายแปลงแบบเรียลไทม์ (เซ็นเซอร์ดิน ภาพศัตรูพืช และคำแนะนำ) อยู่ระหว่างการเชื่อมต่อสำหรับพื้นที่นี้",
    en: "Real-time per-plot data (soil sensors, pest imagery, and advice) is being connected for this area",
    zh: "该地区的实时田块数据（土壤传感器、病虫害影像与建议）正在接入中",
  },

  // ---- 01 Story placeholder UI ----
  "story.gen3.tag": { th: "Gen 3 · สงขลา 2569", en: "Gen 3 · Songkhla 2026", zh: "第 3 代 · 宋卡 2026" },
  "story.gen4.pill": { th: "Gen 4 · Redesigned", en: "Gen 4 · Redesigned", zh: "第 4 代 · 重新设计" },
  "story.uptime.label": {
    th: "Uptime เฉลี่ยของ Gen 3<br>ตลอดฤดูฝนแรก",
    en: "Gen 3 average uptime<br>across the first wet season",
    zh: "第 3 代平均正常运行率<br>整个首个雨季",
  },
  "story.prob0": {
    th: "อุปกรณ์ไฟฟ้าจมน้ำเมื่อระดับน้ำในแปลงสูงขึ้น",
    en: "Electronics flooded as water levels rose in the paddy",
    zh: "田间水位上升时电子设备被淹",
  },
  "story.prob1": {
    th: "แบตเตอรี่หมดไฟช่วงฝนตกต่อเนื่องหลายวัน",
    en: "Battery ran flat during several days of continuous rain",
    zh: "连续多日降雨导致电池耗尽",
  },
  "story.prob2": {
    th: "ข้อมูลขาดหายเป็นช่วง ทำให้วิเคราะห์ไม่ต่อเนื่อง",
    en: "Intermittent data gaps broke the continuity of analysis",
    zh: "数据间歇性缺失，导致分析无法连续",
  },
  "story.baa.problem": { th: "ปัญหา Gen 3", en: "Gen 3 problem", zh: "第 3 代问题" },
  "story.baa.fix": { th: "ทางแก้ Gen 4", en: "Gen 4 fix", zh: "第 4 代解决方案" },
  "story.baa.was0": {
    th: "อุปกรณ์ไฟฟ้าจมน้ำ",
    en: "Electronics submerged in floodwater",
    zh: "电子设备被洪水淹没",
  },
  "story.baa.now0": {
    th: "ยกกล่องควบคุม IP68 สูง 1.2 ม.",
    en: "Control box raised to 1.2 m, IP68-sealed",
    zh: "控制箱抬高至 1.2 米，IP68 密封",
  },
  "story.baa.was1": {
    th: "แบตเตอรี่หมดไฟช่วงฝนต่อเนื่อง",
    en: "Battery drained during prolonged rains",
    zh: "连续降雨期间电池耗尽",
  },
  "story.baa.now1": {
    th: "โซลาร์สองหน้า + สำรอง 5–11 วัน",
    en: "Bifacial solar + 5–11 days of backup",
    zh: "双面太阳能 + 5–11 天备用电力",
  },
  "story.baa.was2": { th: "Uptime เพียง 9.1%", en: "Uptime of just 9.1%", zh: "正常运行率仅 9.1%" },
  "story.baa.now2": {
    th: "สถาปัตยกรรมพลังงานสำรองใหม่",
    en: "Redesigned power-backup architecture",
    zh: "全新的备用电力架构",
  },
  "story.tl0.when": { th: "2569 · Q1", en: "2026 · Q1", zh: "2026 · 第一季度" },
  "story.tl0.title": {
    th: "ติดตั้ง Gen 3 ที่ระโนด สงขลา",
    en: "Gen 3 deployed at Ranot, Songkhla",
    zh: "在宋卡府拉诺县部署第 3 代",
  },
  "story.tl0.desc": {
    th: "สถานีต้นแบบ 36 ไร่ เก็บข้อมูลจริงฤดูฝนแรก",
    en: "A 36-rai prototype station collecting real data through the first wet season",
    zh: "36 莱示范站，采集首个雨季的真实数据",
  },
  "story.tl1.when": { th: "ปัญหาที่พบ", en: "Problems found", zh: "发现的问题" },
  "story.tl1.title": {
    th: "น้ำท่วมขัง · ไฟฟ้าจมน้ำ · แบตหมด",
    en: "Flooding · submerged electronics · dead battery",
    zh: "洪涝 · 电子设备被淹 · 电池耗尽",
  },
  "story.tl1.desc": {
    th: "Uptime ตกเหลือ 9.1% — ข้อมูลหลายช่วงขาดหาย",
    en: "Uptime dropped to 9.1% — data lost across many periods",
    zh: "正常运行率降至 9.1%——多个时段数据缺失",
  },
  "story.tl2.when": { th: "ทางแก้", en: "The fix", zh: "解决方案" },
  "story.tl2.title": {
    th: "ออกแบบเสาปริซึมหกเหลี่ยม + ยกฐานราก",
    en: "Hexagonal prism mast + raised foundation",
    zh: "六棱柱塔架 + 抬高基座",
  },
  "story.tl2.desc": {
    th: "แยกงานไฟฟ้าขึ้นสูง กันน้ำระดับ IP68 ทั้งระบบ",
    en: "Electronics moved up high, IP68-sealed throughout",
    zh: "将电子设备移至高处，全系统 IP68 防水",
  },
  "story.tl3.when": { th: "2569 · Q4", en: "2026 · Q4", zh: "2026 · 第四季度" },
  "story.tl3.title": {
    th: "Gen 4 ผ่านการตรวจรับโดยวิศวกร (PE-signed)",
    en: "Gen 4 certified by a professional engineer (PE-signed)",
    zh: "第 4 代通过专业工程师认证（PE 签署）",
  },
  "story.tl3.desc": {
    th: "โครงสร้างและระบบไฟฟ้ารับรองโดยวิศวกรวิชาชีพ",
    en: "Structure and electrical systems certified by a licensed engineer",
    zh: "结构与电气系统由持证工程师认证",
  },
  "story.cert": {
    th: "ตรวจรับและรับรองโดยวิศวกรวิชาชีพ (PE-signed)",
    en: "Inspected and certified by a professional engineer (PE-signed)",
    zh: "由专业工程师检验并认证（PE 签署）",
  },
  "story.more": {
    th: "อ่านบทเรียนภาคสนามฉบับเต็ม",
    en: "Read the full field lessons",
    zh: "阅读完整的田间经验",
  },
  "story.modal.eyebrow": { th: "เรื่องราวจากภาคสนาม", en: "The R&D Story", zh: "研发故事" },
  "story.modal.title": {
    th: "บทเรียนจากระโนด สงขลา",
    en: "Lessons from Ranot, Songkhla",
    zh: "来自宋卡府拉诺县的经验",
  },
  "story.modal.p1": {
    th: "Gen 3 คือต้นแบบที่เราติดตั้งจริงในนาข้าว 36 ไร่ ที่อำเภอระโนด จังหวัดสงขลา ในปี 2569 — และมันสอนบทเรียนที่ห้องแล็บให้ไม่ได้",
    en: "Gen 3 was a prototype we deployed in a real 36-rai paddy in Ranot, Songkhla, in 2026 — and it taught us lessons no lab could.",
    zh: "第 3 代是我们于 2026 年在宋卡府拉诺县 36 莱真实稻田中部署的原型——它教给我们实验室无法给予的经验。",
  },
  "story.modal.p2": {
    th: "ตลอดฤดูฝนแรก uptime ของระบบตกลงเหลือเพียง 9.1% น้ำท่วมขังทำให้อุปกรณ์ไฟฟ้าจมน้ำ และแบตเตอรี่หมดไฟในช่วงที่ฝนตกต่อเนื่องหลายวันจนแผงโซลาร์ผลิตไฟไม่พอ",
    en: "Through the first wet season, system uptime fell to just 9.1%. Flooding submerged the electronics, and the battery ran flat during days of continuous rain when the solar panels couldn't keep up.",
    zh: "在首个雨季，系统正常运行率降至仅 9.1%。洪涝淹没了电子设备，连续多日降雨期间太阳能板发电不足，电池随之耗尽。",
  },
  "story.modal.p3": {
    th: "ทุกปัญหาถูกบันทึกเป็นข้อกำหนดการออกแบบใหม่ของ Gen 4 — ยกงานไฟฟ้าขึ้นสูง กันน้ำทั้งระบบระดับ IP68 เปลี่ยนมาใช้โซลาร์สองหน้าพร้อมแบตเตอรี่สำรอง 5–11 วัน และผ่านการตรวจรับโดยวิศวกรวิชาชีพ (PE-signed) ทั้งด้านโครงสร้างและระบบไฟฟ้า",
    en: "Every problem became a design requirement for Gen 4 — electronics raised up high, the whole system IP68-sealed, switched to bifacial solar with 5–11 days of battery backup, and certified by a professional engineer (PE-signed) for both structure and electrical systems.",
    zh: "每个问题都成为第 4 代的设计要求——将电子设备抬高、整机 IP68 防水、改用双面太阳能并配备 5–11 天备用电池，且结构与电气系统均通过专业工程师认证（PE 签署）。",
  },

  // ---- 03 Device placeholder UI ----
  "device.feat0.title": { th: "ช่องซ่อมบำรุงล่าง", en: "Lower service hatch", zh: "下部检修口" },
  "device.feat0.desc": {
    th: "เข้าถึงแบตเตอรี่และตัวควบคุมไฟได้จากพื้น โดยไม่ต้องรื้อเสา",
    en: "Reach the battery and power controller from the ground, without dismantling the mast",
    zh: "无需拆卸塔架即可从地面接触电池与电源控制器",
  },
  "device.feat1.title": { th: "ช่องซ่อมบำรุงบน", en: "Upper service hatch", zh: "上部检修口" },
  "device.feat1.desc": {
    th: "เปลี่ยนกล้องและเซ็นเซอร์ส่วนบนได้อย่างปลอดภัย",
    en: "Safely replace the upper camera and sensors",
    zh: "安全更换上部摄像头与传感器",
  },
  "device.feat2.title": { th: "สายล่อฟ้า", en: "Lightning rod", zh: "避雷针" },
  "device.feat2.desc": {
    th: "ป้องกันฟ้าผ่าตามมาตรฐาน ปกป้องอุปกรณ์อิเล็กทรอนิกส์",
    en: "Standards-compliant lightning protection for the electronics",
    zh: "符合标准的防雷保护，护佑电子设备",
  },
  "device.feat3.title": { th: "ฐานรากคอนกรีต", en: "Concrete foundation", zh: "混凝土基座" },
  "device.feat3.desc": {
    th: "ยึดเสาให้มั่นคงในดินนาที่อ่อนนุ่มและมีน้ำขัง",
    en: "Anchors the mast firmly in soft, waterlogged paddy soil",
    zh: "在松软积水的稻田土壤中稳固塔架",
  },
  "device.more": { th: "ดูสเปกทั้งหมด", en: "View full specs", zh: "查看完整规格" },
  "device.modal.title": {
    th: "สเปกอุปกรณ์ RiceGuard Sentinel",
    en: "RiceGuard Sentinel device specs",
    zh: "RiceGuard Sentinel 设备规格",
  },
  "device.full.height.l": { th: "ความสูงรวม", en: "Overall height", zh: "总高度" },
  "device.full.height.v": { th: "4 เมตร", en: "4 m", zh: "4 米" },
  "device.full.solar.l": { th: "โซลาร์เซลล์", en: "Solar cells", zh: "太阳能板" },
  "device.full.solar.v": { th: "2 × 200W (สองหน้า)", en: "2 × 200W (bifacial)", zh: "2 × 200W（双面）" },
  "device.full.battery.l": { th: "แบตเตอรี่สำรอง", en: "Battery backup", zh: "电池续航" },
  "device.full.battery.v": { th: "5–11 วัน", en: "5–11 days", zh: "5–11 天" },
  "device.full.measure.l": { th: "จำนวนการวัด", en: "Measurements", zh: "测量项" },
  "device.full.measure.v": { th: "18 พารามิเตอร์", en: "18 parameters", zh: "18 项参数" },
  "device.full.ip.l": { th: "มาตรฐานกันน้ำ", en: "Waterproof rating", zh: "防水等级" },
  "device.full.ai.l": { th: "หน่วยประมวลผล AI", en: "AI processor", zh: "AI 处理器" },
  "device.full.net.l": { th: "เครือข่าย", en: "Network", zh: "网络" },
  "device.full.net.v": { th: "LoRa + 4G สำรอง", en: "LoRa + 4G backup", zh: "LoRa + 4G 备用" },
  "device.full.struct.l": { th: "โครงสร้าง", en: "Structure", zh: "结构" },
  "device.full.struct.v": {
    th: "เสาปริซึมหกเหลี่ยมบิด · PE-signed",
    en: "Twisted hexagonal prism mast · PE-signed",
    zh: "扭转六棱柱塔架 · PE 签署",
  },

  // ---- 04 Sensors placeholder UI ----
  "sensors.readout.ph": { th: "pH ดิน", en: "Soil pH", zh: "土壤 pH" },
  "sensors.readout.ec": { th: "EC", en: "EC", zh: "EC" },
  "sensors.readout.moisture": { th: "ความชื้นดิน", en: "Soil moisture", zh: "土壤湿度" },
  "sensors.readout.npk": { th: "NPK", en: "NPK", zh: "NPK" },
  "sensors.readout.npk.value": { th: "สมดุล", en: "Balanced", zh: "均衡" },
  "sensors.readout.water": { th: "ระดับน้ำ", en: "Water level", zh: "水位" },
  "sensors.readout.temp": { th: "อุณหภูมิ", en: "Temperature", zh: "温度" },
  "sensors.stage.seedling": { th: "ระยะกล้า", en: "Seedling", zh: "秧苗期" },
  "sensors.stage.tillering": { th: "แตกกอ", en: "Tillering", zh: "分蘖期" },
  "sensors.stage.booting": { th: "ตั้งท้อง", en: "Booting", zh: "孕穗期" },
  "sensors.stage.heading": { th: "ออกรวง", en: "Heading", zh: "抽穗期" },
  "sensors.stage.ripening": { th: "สุกแก่", en: "Ripening", zh: "成熟期" },
  "sensors.bbox": { th: "หนอนกอ · 92%", en: "Stem borer · 92%", zh: "螟虫 · 92%" },

  // ---- 05 Pest placeholder UI ----
  "pest.substat0.label": { th: "ชนิดศัตรูพืช", en: "Pest species", zh: "害虫种类" },
  "pest.substat1.label": { th: "ความแม่นยำ", en: "Accuracy", zh: "准确率" },
  "pest.substat2.value": { th: "รายวัน", en: "Daily", zh: "每日" },
  "pest.substat2.label": { th: "ข้อมูลเพิ่มขึ้น", en: "Data added", zh: "数据新增" },
  "pest.dataset.label": {
    th: "ภาพศัตรูพืชในฐานข้อมูล — และเพิ่มขึ้นทุกวัน",
    en: "pest images in the database — and growing every day",
    zh: "数据库中的害虫图像——且每天都在增加",
  },

  // ---- 06 Knowledge placeholder UI ----
  "knowledge.variety0.name": { th: "กข43", en: "RD43", zh: "RD43" },
  "knowledge.variety0.meta": {
    th: "อายุสั้น 95 วัน · น้ำตาลต่ำ",
    en: "Short 95-day cycle · low glycaemic",
    zh: "95 天短周期 · 低升糖",
  },
  "knowledge.variety1.name": { th: "ขาวดอกมะลิ 105", en: "Hom Mali 105", zh: "茉莉香米 105" },
  "knowledge.variety1.meta": {
    th: "หอม · ทนแล้ง · นาปี",
    en: "Fragrant · drought-tolerant · wet-season",
    zh: "芳香 · 耐旱 · 雨季稻",
  },
  "knowledge.variety2.name": { th: "ปทุมธานี 1", en: "Pathum Thani 1", zh: "帕吞他尼 1 号" },
  "knowledge.variety2.meta": {
    th: "ผลผลิตสูง · นาชลประทาน",
    en: "High-yield · irrigated",
    zh: "高产 · 灌溉稻",
  },
  "knowledge.variety3.name": { th: "กข6", en: "RD6", zh: "RD6" },
  "knowledge.variety3.meta": {
    th: "ข้าวเหนียว · ภาคเหนือ/อีสาน",
    en: "Glutinous rice · North/Northeast",
    zh: "糯米 · 北部/东北部",
  },
  "knowledge.search": {
    th: "ค้นหาพันธุ์ข้าว เช่น หอมมะลิ, กข43…",
    en: "Search rice varieties, e.g. Hom Mali, RD43…",
    zh: "搜索稻种，例如茉莉香米、RD43…",
  },
  "knowledge.dl": { th: "ส่งลงอุปกรณ์", en: "Push to device", zh: "推送到设备" },
  "knowledge.step0.title": {
    th: "เลือกพันธุ์ที่เหมาะกับพื้นที่",
    en: "Pick the variety that fits your plot",
    zh: "选择适合田块的品种",
  },
  "knowledge.step0.desc": {
    th: "ระบบแนะนำจากชนิดดิน ภูมิอากาศ และฤดูปลูกของแปลง",
    en: "The system recommends based on soil type, climate, and the plot's growing season",
    zh: "系统根据土壤类型、气候与田块的种植季给出推荐",
  },
  "knowledge.step1.title": {
    th: "ดาวน์โหลดโปรไฟล์ลงอุปกรณ์",
    en: "Download the profile to the device",
    zh: "将配置下载到设备",
  },
  "knowledge.step1.desc": {
    th: "ตารางปุ๋ย น้ำ และศัตรูพืชเฉพาะพันธุ์ ไหลลงสถานีในแปลง",
    en: "Variety-specific fertiliser, water, and pest schedules flow down to the field station",
    zh: "该品种专属的施肥、灌溉与病虫害方案下发到田间监测站",
  },
  "knowledge.step2.title": {
    th: "อุปกรณ์ปรับคำแนะนำอัตโนมัติ",
    en: "The device adjusts advice automatically",
    zh: "设备自动调整建议",
  },
  "knowledge.step2.desc": {
    th: "คำแนะนำเปลี่ยนตามระยะการเจริญเติบโตของข้าว",
    en: "Advice adapts to the rice's growth stage",
    zh: "建议随水稻生长阶段而变化",
  },

  // ---- 08 Trial placeholder UI ----
  "trial.compare.title": {
    th: "เปรียบเทียบแปลงควบคุมกับแปลง Sentinel",
    en: "Control plot vs. Sentinel plot",
    zh: "对照田块与 Sentinel 田块对比",
  },
  "trial.compare.metric": { th: "ตัวชี้วัด", en: "Metric", zh: "指标" },
  "trial.compare.control": { th: "แปลงควบคุม", en: "Control plot", zh: "对照田块" },
  "trial.compare.sentinel": { th: "แปลง Sentinel", en: "Sentinel plot", zh: "Sentinel 田块" },
  "trial.cmp0.metric": { th: "ปูนโดโลไมต์ที่ใช้", en: "Dolomite lime used", zh: "白云石石灰用量" },
  "trial.cmp1.metric": { th: "วิธีการใส่ปูน", en: "Liming method", zh: "施灰方式" },
  "trial.cmp1.control": { th: "ทั้งแปลงเท่ากัน", en: "Uniform across the plot", zh: "全田均匀" },
  "trial.cmp1.sentinel": { th: "เฉพาะจุดที่กรดจัด", en: "Only the acidic spots", zh: "仅酸性点位" },
  "trial.cmp2.metric": { th: "ความสม่ำเสมอ pH", en: "pH uniformity", zh: "pH 均匀度" },
  "trial.cmp2.control": { th: "ต่ำ", en: "Low", zh: "低" },
  "trial.cmp2.sentinel": { th: "สูง", en: "High", zh: "高" },
  "trial.ph.title": {
    th: "การกระจายค่า pH ใน 8 โซน",
    en: "pH distribution across 8 zones",
    zh: "8 个区域的 pH 分布",
  },
  "trial.ph.note": {
    th: "แถบสีส้มคือโซนที่กรดจัด (pH < 5.5) ซึ่งได้รับปูนแบบเฉพาะจุด · หมายเหตุ: uptime ภาคสนามช่วง Gen 3 อยู่ที่ 9.1% ตามจริง",
    en: "Orange bars mark acidic zones (pH < 5.5) that received spot-specific liming · Note: Gen 3 field uptime was 9.1% in practice",
    zh: "橙色柱表示酸性区域（pH < 5.5），这些区域进行了分点施灰 · 注：第 3 代田间正常运行率实际为 9.1%",
  },

  // ---- 10 System placeholder UI (7-layer strip) ----
  "system.layer0.title": { th: "เก็บข้อมูลที่ขอบ", en: "Edge acquisition", zh: "边缘采集" },
  "system.layer1.title": { th: "ประมวลผลที่เครื่อง", en: "Inference", zh: "推理" },
  "system.layer2.title": { th: "ส่งข้อมูล", en: "Transport", zh: "数据传输" },
  "system.layer3.title": { th: "คลาวด์", en: "Cloud", zh: "云端" },
  "system.layer4.title": { th: "หลอมรวมข้อมูล", en: "Fusion", zh: "数据融合" },
  "system.layer5.title": { th: "ฐานความรู้", en: "Knowledge", zh: "知识库" },
  "system.layer6.title": { th: "แสดงผล", en: "Presentation", zh: "结果呈现" },
  "system.scrollhint": {
    th: "เลื่อนแนวนอนเพื่อดูทุกชั้น",
    en: "Scroll horizontally to see every layer",
    zh: "横向滚动以查看每一层",
  },

  // ---- Captions (English gloss for TH/EN; Chinese for ZH) ----
  "cap.hero.sub": {
    th: "Advancing Thai rice farming with AI",
    en: "Advancing Thai rice farming with AI",
    zh: "以 AI 推进泰国水稻种植",
  },
  "cap.story": {
    th: "From a real field to a redesign — Gen 3 → Gen 4",
    en: "From a real field to a redesign — Gen 3 → Gen 4",
    zh: "从真实稻田到全新设计 · 第 3 代 → 第 4 代",
  },
  "cap.how": {
    th: "From the field to the farmer's hand, in four steps",
    en: "From the field to the farmer's hand, in four steps",
    zh: "从稻田到农民手中，共四个步骤",
  },
  "cap.device": {
    th: "One all-in-one field station",
    en: "One all-in-one field station",
    zh: "一体化田间监测站",
  },
  "cap.sensors": {
    th: "Numbers from the soil, images from the crop",
    en: "Numbers from the soil, images from the crop",
    zh: "来自土壤的数据，来自稻株的影像",
  },
  "cap.pest": {
    th: "Only the pesticide that's actually needed",
    en: "Only the pesticide that's actually needed",
    zh: "只用真正必要的农药",
  },
  "cap.knowledge": {
    th: "An open Knowledge Base — free, for every farmer, everywhere",
    en: "An open Knowledge Base — free, for every farmer, everywhere",
    zh: "开放知识库——免费，面向每一位农民、每一个角落",
  },
  "cap.green": {
    th: "Leaving no carbon footprint behind",
    en: "Leaving no carbon footprint behind",
    zh: "不留碳足迹",
  },
  "cap.trial": {
    th: "Ranot, Songkhla — what the soil revealed",
    en: "Ranot, Songkhla — what the soil revealed",
    zh: "宋卡府拉诺县 · 土壤揭示的真相",
  },
  "cap.expansion": {
    th: "Testing across every Thai growing condition",
    en: "Testing across every Thai growing condition",
    zh: "覆盖全国、适应各种稻田环境的测试",
  },
  "cap.system": {
    th: "The full data journey, layer by layer",
    en: "The full data journey, layer by layer",
    zh: "完整的数据之旅，逐层展开",
  },
  "cap.contact": {
    th: "Mobile AI Company Co., Ltd.",
    en: "Mobile AI Company Co., Ltd.",
    zh: "Mobile AI 有限公司",
  },
} satisfies Record<string, Record<Lang, string>>;

export type UiKey = keyof typeof ui;

export function t(key: string, lang: Lang = "th"): string {
  const entry = (ui as Record<string, Record<Lang, string>>)[key];
  return entry ? entry[lang] ?? entry.th : key;
}

// ============================================================================
// i18n ROUTING HELPERS (URL-per-language — RIC-44x)
// The page's language now comes from the URL (Astro.currentLocale), not from
// localStorage. These helpers let .astro components render in the active
// language server-side and build the language-switcher links.
// ============================================================================

// Resolve the active language from Astro's currentLocale (falls back to th).
export function getLang(astro: { currentLocale?: string }): Lang {
  const l = astro.currentLocale ?? "";
  return (languages as readonly string[]).includes(l) ? (l as Lang) : "th";
}

// URL prefix for a language: "" for the default (th), otherwise "/en", "/zh".
export function localePrefix(lang: Lang): string {
  return lang === "th" ? "" : `/${lang}`;
}

// Locale-bound translator for use in .astro frontmatter:
//   const t = useTranslate(Astro);   →   t("key") renders in the page's language.
// Keeps every existing t("key") call site working — only the import changes.
export function useTranslate(astro: { currentLocale?: string }): (key: string) => string {
  const lang = getLang(astro);
  return (key: string) => t(key, lang);
}

// Rewrite the current path to its equivalent in `target` language, so the
// language switcher links to the same page in another language.
//   ("/en/province/nan", "en", "zh") → "/zh/province/nan"
//   ("/en/province/nan", "en", "th") → "/province/nan"
export function switchLocalePath(pathname: string, current: Lang, target: Lang): string {
  const cur = localePrefix(current);
  let rest = pathname;
  if (cur && (rest === cur || rest.startsWith(cur + "/"))) rest = rest.slice(cur.length);
  if (!rest.startsWith("/")) rest = "/" + rest;
  return (localePrefix(target) + rest) || "/";
}

// The three switcher links for the current page (label + href + active flag).
export function localeUrls(astro: { url: URL; currentLocale?: string }) {
  const current = getLang(astro);
  return languages.map((lang) => ({
    lang,
    label: LANG_LABEL[lang],
    href: switchLocalePath(astro.url.pathname, current, lang),
    active: lang === current,
  }));
}

export const LANG_LABEL: Record<Lang, string> = { th: "ไทย", en: "EN", zh: "中文" };

// ============================================================================
// IMAGE LOCALIZATION HELPER (translated diagrams — EN/ZH)
// The translated diagrams live entirely inside
// public/assets/img/img-translate-EN-ZH/ as "<base>_<lang>.png" — there is NO
// copy in the /assets/img root. Not every base has all three languages, so each
// entry declares exactly which locales exist on disk; a missing locale falls
// back to TH, then to whatever copy is present, so a page never 404s. Any path
// whose base isn't listed here is returned untouched (photos, logo, …).
// ============================================================================

// Folder holding the translated diagrams.
const IMG_TRANSLATE_DIR = "/assets/img/img-translate-EN-ZH";

// base filename → { ext, locales that actually have a file on disk }.
// Update this when new translated diagrams are added or completed.
const TRANSLATED_IMG: Record<string, { ext: string; locales: Lang[] }> = {
  "01": { ext: ".webp", locales: ["th", "en", "zh"] },
  "02_info": { ext: ".webp", locales: ["th", "en", "zh"] },
  "04": { ext: ".webp", locales: ["th", "en", "zh"] },
  "05": { ext: ".webp", locales: ["th", "en", "zh"] },
  "06_arch": { ext: ".webp", locales: ["th", "en", "zh"] },
  "07": { ext: ".webp", locales: ["th", "en", "zh"] },
  "story-gen3": { ext: ".webp", locales: ["th", "en", "zh"] },
};

// Resolve an image path to the copy for `currentLocale`. For a listed diagram it
// returns the file in IMG_TRANSLATE_DIR, falling back requested → th → any when
// the exact locale is missing. Non-diagram paths pass through unchanged.
//   getLocalizedImg("/assets/img/06_arch.png", "zh") → "/assets/img/img-translate-EN-ZH/06_arch_zh.png"
//   getLocalizedImg("/assets/img/06_arch.png", "en") → "/assets/img/img-translate-EN-ZH/06_arch_th.png"  (no _en → th)
//   getLocalizedImg("/assets/img/hero-device.webp", "en") → "/assets/img/hero-device.webp"  (not a diagram)
export function getLocalizedImg(originalPath: string, currentLocale: string): string {
  const filename = originalPath.split("/").pop() ?? originalPath;
  const dot = filename.lastIndexOf(".");
  const stem = dot === -1 ? filename : filename.slice(0, dot);
  const base = stem.replace(/_(th|en|zh)$/i, ""); // strip any language suffix

  const entry = TRANSLATED_IMG[base];
  if (!entry) return originalPath; // not a translated diagram → leave as-is

  const lang: Lang = (languages as readonly string[]).includes(currentLocale)
    ? (currentLocale as Lang)
    : "th";

  // Prefer the requested language; else TH; else whatever copy exists.
  const pick = entry.locales.includes(lang)
    ? lang
    : entry.locales.includes("th")
      ? "th"
      : entry.locales[0];

  return `${IMG_TRANSLATE_DIR}/${base}_${pick}${entry.ext}`;
}
