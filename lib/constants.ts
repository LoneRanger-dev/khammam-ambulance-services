// ─── Business Identity ─────────────────────────────────────────────────────
export const BUSINESS_NAME = "Khammam Ambulance Services (Mahesh)";
export const SHORT_NAME = "Khammam Ambulance Services";
export const SITE_URL = "https://www.khammamambulanceservicesmahesh.com";
export const EMAIL = "khammamambulanceservice@gmail.com";

// ─── Phone & WhatsApp ──────────────────────────────────────────────────────
export const PHONE_NUMBER = "+919640894489";      // E.164 for tel: links
export const PHONE_DISPLAY = "096408 94489";       // Primary display phone number
export const SECONDARY_PHONE_NUMBER = "+919666415799";
export const SECONDARY_PHONE_DISPLAY = "96664 15799";
export const WHATSAPP_NUMBER = "919640894489";    // wa.me format (no +)
export const WHATSAPP_MESSAGE = "Hello, I urgently need an ambulance in Khammam area! Please send details.";

// ─── Location & Address ───────────────────────────────────────────────────
export const ADDRESS = {
  street: "743Q+4XF, Station Rd, Mayuri Center",
  city: "Mamillagudaem, Khammam",
  district: "Khammam",
  state: "Telangana",
  postalCode: "507001",
  country: "IN",
  display: "Station Rd, Mayuri Center, Mamillagudaem, Khammam, Telangana 507001",
  plusCode: "743Q+4XF",
};

export const GEO = {
  latitude: 17.2474,
  longitude: 80.1514,
};

export const GOOGLE_MAPS_URL = "https://maps.google.com/?q=Station+Rd+Mayuri+Center+Mamillagudaem+Khammam+Telangana+507001";
export const GOOGLE_MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=Station+Rd+Mayuri+Center+Mamillagudaem+Khammam+Telangana+507001&output=embed&z=15";

// ─── Business Hours & Ratings ─────────────────────────────────────────────
export const BUSINESS_HOURS = {
  display: "Open 24 Hours, 365 Days",
  short: "24/7",
  opens: "00:00",
  closes: "23:59",
};

export const GOOGLE_RATING = 5.0;
export const GOOGLE_REVIEW_COUNT = 48;

// ─── Services List ───────────────────────────────────────────────────────
export const SERVICES_LIST = [
  "24/7 Emergency Ambulance",
  "ICU Ambulance with Ventilator",
  "Oxygen Support Ambulance",
  "Dead Body Freezer Box Service",
  "Emergency Patient Transport",
  "Hospital Transfer Ambulance",
  "Inter-State Ambulance Transfer",
  "Advanced Life Support (ALS)",
  "Basic Life Support (BLS)",
];

// ─── Medical Equipment ───────────────────────────────────────────────────
export const MEDICAL_EQUIPMENT = [
  "Advanced Ventilator System",
  "Continuous Oxygen Supply",
  "Cardiac Monitor & Defibrillator",
  "Emergency ICU Medical Setup",
  "Infusion & Syringe Pumps",
  "Emergency Resuscitation Kit",
  "Trained Paramedic & Driver Staff",
];

// ─── Schema.org Area Served (30 km Radius + Regional) ────────────────────
export const AREA_SERVED = [
  "Khammam",
  "Mamillagudaem",
  "Mayuri Center",
  "Station Road",
  "Wyra",
  "Nelakondapalli",
  "Kalluru",
  "Kusumanchi",
  "Mudigonda",
  "Thallada",
  "Bonakal",
  "Enkoor",
  "Sathupalli",
  "Penuballi",
  "Khammam Rural",
  "Khammam Urban",
  "Palvancha",
  "Kothagudem",
  "Suryapet",
  "Vijayawada",
  "Hyderabad",
  "Warangal",
  "Telangana",
  "Andhra Pradesh",
  "India",
];

// ─── Primary 30 km Service Areas (Local) ──────────────────────────────────
export const PRIMARY_AREAS = [
  { name: "Mamillagudaem", distance: "Primary Base (0-5 min)" },
  { name: "Mayuri Center & Station Rd", distance: "Primary Base (0-5 min)" },
  { name: "Khammam Town / City Center", distance: "~5-10 min" },
  { name: "Wyra", distance: "~15-20 min (30 km Zone)" },
  { name: "Nelakondapalli", distance: "~15-20 min (30 km Zone)" },
  { name: "Kusumanchi", distance: "~20 min (30 km Zone)" },
  { name: "Mudigonda", distance: "~20 min (30 km Zone)" },
  { name: "Kalluru", distance: "~25 min (30 km Zone)" },
  { name: "Thallada", distance: "~25 min (30 km Zone)" },
  { name: "Bonakal", distance: "~25 min (30 km Zone)" },
  { name: "Enkoor", distance: "~30 min (30 km Zone)" },
  { name: "Kothagudem Road / Palvancha", distance: "Outstation Corridor" },
];

export const LONG_DISTANCE_AREAS = [
  { name: "Hyderabad", state: "Telangana", distance: "~190 km (Superfast Highway Transit)" },
  { name: "Vijayawada", state: "Andhra Pradesh", distance: "~120 km (Direct Highway Transit)" },
  { name: "Warangal", state: "Telangana", distance: "~110 km" },
  { name: "Suryapet", state: "Telangana", distance: "~60 km" },
  { name: "Visakhapatnam", state: "Andhra Pradesh", distance: "Interstate Route" },
  { name: "Chennai", state: "Tamil Nadu", distance: "Interstate Emergency Transport" },
  { name: "Bengaluru", state: "Karnataka", distance: "Interstate Emergency Transport" },
];

export const FOOTER_AREAS = [
  "Mamillagudaem",
  "Mayuri Center",
  "Station Road",
  "Khammam City",
  "Wyra",
  "Nelakondapalli",
  "Kusumanchi",
  "Kalluru",
  "Mudigonda",
  "Thallada",
];

// ─── Image Paths ───────────────────────────────────────────────────────────
export const IMAGES = {
  hero: "/images/hero_ambulance.png",
  interior: "/images/icu_interior.jpg",
  oxygen: "/images/oxygen_support.jpg",
  ventilator: "/images/ventilator_support.jpg",
  freezerBox: "/images/freezer_box.jpg",
  fleet: "/images/ambulance_fleet.jpg",
};

// ─── Derived Links ─────────────────────────────────────────────────────────
export const CALL_LINK = `tel:${PHONE_NUMBER}`;
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
