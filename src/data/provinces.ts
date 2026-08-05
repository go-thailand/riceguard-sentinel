// RiceGuard Sentinel — 12 research provinces across the 4 regions.
// Single source of truth: consumed by the Expansion map/list, the map's
// client-side JSON data island, and the /province/[slug] detail pages.

export type ProvinceStatus = "live" | "soon" | "plan";

export interface Province {
  slug: string;
  name: string; // Thai name
  nameEn: string;
  region: string; // Thai region name (เหนือ / อีสาน / กลาง / ใต้)
  status: ProvinceStatus;
  lat: number;
  lng: number;
  note: string;
}

export const provinces: Province[] = [
  { slug: "chiang-rai", name: "เชียงราย", nameEn: "Chiang Rai", region: "เหนือ", status: "live", lat: 19.91, lng: 99.83, note: "นาปีบนที่สูง ทดสอบการจัดการน้ำในฤดูฝนหนัก" },
  { slug: "chiang-mai", name: "เชียงใหม่", nameEn: "Chiang Mai", region: "เหนือ", status: "live", lat: 18.79, lng: 98.98, note: "แปลงขั้นบันได เปรียบเทียบการใช้ปุ๋ยแม่นยำ" },
  { slug: "nan", name: "น่าน", nameEn: "Nan", region: "เหนือ", status: "soon", lat: 18.78, lng: 100.77, note: "พื้นที่ลาดชัน เตรียมติดตั้งสถานีเฝ้าระวังดินถล่ม" },
  { slug: "amnat-charoen", name: "อำนาจเจริญ", nameEn: "Amnat Charoen", region: "อีสาน", status: "live", lat: 15.86, lng: 104.63, note: "ดินทราย ทดสอบการกักเก็บความชื้นและ NPK" },
  { slug: "ubon-ratchathani", name: "อุบลราชธานี", nameEn: "Ubon Ratchathani", region: "อีสาน", status: "soon", lat: 15.24, lng: 104.85, note: "ที่ราบลุ่มแม่น้ำมูล เตรียมทดสอบระบบเตือนน้ำท่วม" },
  { slug: "roi-et", name: "ร้อยเอ็ด", nameEn: "Roi Et", region: "อีสาน", status: "plan", lat: 16.05, lng: 103.65, note: "ทุ่งกุลาร้องไห้ วางแผนแปลงข้าวหอมมะลิ" },
  { slug: "suphan-buri", name: "สุพรรณบุรี", nameEn: "Suphan Buri", region: "กลาง", status: "live", lat: 14.47, lng: 100.12, note: "นาชลประทาน เปรียบเทียบผลผลิตพันธุ์ปทุมธานี 1" },
  { slug: "pathum-thani", name: "ปทุมธานี", nameEn: "Pathum Thani", region: "กลาง", status: "soon", lat: 14.02, lng: 100.53, note: "แปลงต้นแบบใกล้ศูนย์วิจัย เตรียมติดตั้งเซ็นเซอร์ชุดใหม่" },
  { slug: "phichit", name: "พิจิตร", nameEn: "Phichit", region: "กลาง", status: "plan", lat: 16.44, lng: 100.35, note: "ที่ราบภาคกลางตอนบน วางแผนทดสอบฤดูแล้ง" },
  { slug: "songkhla", name: "สงขลา", nameEn: "Songkhla", region: "ใต้", status: "live", lat: 7.19, lng: 100.6, note: "ระโนด — แปลงต้นกำเนิด พบดินกรด pH 4.7 ประหยัดปูน 57%" },
  { slug: "phatthalung", name: "พัทลุง", nameEn: "Phatthalung", region: "ใต้", status: "soon", lat: 7.62, lng: 100.08, note: "ลุ่มทะเลสาบสงขลา เตรียมทดสอบดินเปรี้ยว" },
  { slug: "nakhon-si-thammarat", name: "นครศรีธรรมราช", nameEn: "Nakhon Si Thammarat", region: "ใต้", status: "plan", lat: 8.43, lng: 99.96, note: "ที่ราบชายฝั่ง วางแผนแปลงข้าวพื้นเมืองภาคใต้" },
];

export const statusLabel: Record<ProvinceStatus, string> = {
  live: "กำลังเก็บข้อมูล",
  soon: "เตรียมติดตั้ง",
  plan: "วางแผน",
};

export const statusDesc: Record<ProvinceStatus, string> = {
  live: "สถานี Sentinel ทำงานอยู่ในแปลง กำลังเก็บข้อมูลจริงต่อเนื่อง",
  soon: "อยู่ระหว่างเตรียมพื้นที่และติดตั้งอุปกรณ์ในฤดูปลูกถัดไป",
  plan: "อยู่ในแผนขยายผล ยังไม่เริ่มติดตั้ง",
};

// Region label anchors (approx centroid lat/lng) for the map watermark.
export const regionAnchors: { region: string; lat: number; lng: number }[] = [
  { region: "เหนือ", lat: 19.4, lng: 98.7 },
  { region: "อีสาน", lat: 16.4, lng: 104.6 },
  { region: "กลาง", lat: 15.1, lng: 99.2 },
  { region: "ใต้", lat: 8.2, lng: 99.0 },
];
