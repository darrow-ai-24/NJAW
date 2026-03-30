// ============================================================
//  pfas_data.js
//  Single source of truth for all shared data.
//  Loaded FIRST by pfas_dashboard.html — every other JS file
//  reads from the constants defined here.
// ============================================================


// ============================================================
//  EPA MCL LIMITS (ng/L)
//  Contaminants not listed here have no federal MCL.
// ============================================================
const MCL_LIMITS = {
  PFOA:      4,
  PFOS:      4,
  PFNA:     10,
  PFHxS:    10,
  "HFPO-DA": 10,
};


// ============================================================
//  CSV FILE PATH
//  Used by pfas_charts.js to fetch the UCMR5 data file.
// ============================================================
const CSV_PATH = "./NJ_American_Water_utilities_UCMR5_all.csv";


// ============================================================
//  ALL 36 UTILITIES
//
//  Fields:
//    name      — display name
//    id        — PWSID (public water system ID)
//    county    — NJ county
//    pop       — estimated population served
//    approx    — true if population is an estimate (~)
//    source    — "UCMR5" or "CCR 2024"
//    panelId   — matches the sidebar button and panel div id
//    lat / lng — coordinates for the map
//
//  UCMR5 utilities also have:
//    mx        — max detected concentration (ng/L)
//    ch        — contaminant with highest reading
//    status    — "exceeds" | "detected" | "none"
//
//  CCR utilities also have:
//    ccrPFOA   — reported PFOA range string (e.g. "ND – 9.0")
//    ccrPFOS   — reported PFOS range string
//    ccrPFNA   — reported PFNA range string
//    ccrMaxVal — numeric max of reported range (for sorting)
//    ccrStatus — "exceeds" | "detected" | "nd" | "nodata"
// ============================================================
const UTILITIES = [

  // ==========================================================
  //  UCMR5 — Exceeds MCL (13 utilities)
  // ==========================================================
  {
    name:"Camden City Water Dept (NJAW)", id:"NJ0408001",
    county:"Camden",            pop:71000,   approx:true,
    source:"UCMR5", panelId:"camden",
    lat:39.934,  lng:-75.1278,
    mx:12.9, ch:"PFOS", status:"exceeds",
  },
  {
    name:"NJAW — Atlantic County",        id:"NJ0119002",
    county:"Atlantic",          pop:112076,  approx:false,
    source:"UCMR5", panelId:"atlantic",
    lat:39.3814, lng:-74.5760,
    mx:10.9, ch:"PFOA", status:"exceeds",
  },
  {
    name:"NJAW — Short Hills",            id:"NJ0712001",
    county:"Essex",             pop:217230,  approx:false,
    source:"UCMR5", panelId:"shorthills",
    lat:40.7429, lng:-74.3538,
    mx:9.1,  ch:"PFOA", status:"exceeds",
  },
  {
    name:"NJAW — Coastal North",          id:"NJ1345001",
    county:"Monmouth/Ocean",    pop:375857,  approx:false,
    source:"UCMR5", panelId:"coastalnorth",
    lat:40.3258, lng:-74.0714,
    mx:7.5,  ch:"PFOA", status:"exceeds",
  },
  {
    name:"NJAW — Raritan",                id:"NJ2004002",
    county:"Somerset/Middlesex",pop:736791,  approx:false,
    source:"UCMR5", panelId:"raritan",
    lat:40.5479, lng:-74.5634,
    mx:7.5,  ch:"PFOA", status:"exceeds",
  },
  {
    name:"NJAW — ITC (Mt. Olive)",        id:"NJ1427017",
    county:"Morris",            pop:1750,    approx:true,
    source:"UCMR5", panelId:"itc",
    lat:40.8773, lng:-74.7222,
    mx:7.3,  ch:"PFOA", status:"exceeds",
  },
  {
    name:"NJAW — Washington / Oxford",    id:"NJ2121001",
    county:"Warren",            pop:10133,   approx:false,
    source:"UCMR5", panelId:"washox",
    lat:40.7568, lng:-74.9829,
    mx:7.1,  ch:"PFOS", status:"exceeds",
  },
  {
    name:"NJAW — Shorelands",             id:"NJ1339001",
    county:"Monmouth",          pop:31908,   approx:false,
    source:"UCMR5", panelId:"shorelands",
    lat:40.1749, lng:-74.1652,
    mx:6.5,  ch:"PFOA", status:"exceeds",
  },
  {
    name:"NJAW — Union Beach",            id:"NJ1350001",
    county:"Monmouth",          pop:5380,    approx:false,
    source:"UCMR5", panelId:"unionbeach",
    lat:40.4394, lng:-74.1793,
    mx:6.2,  ch:"PFOA", status:"exceeds",
  },
  {
    name:"NJAW — Mount Holly",            id:"NJ0323001",
    county:"Burlington",        pop:34733,   approx:false,
    source:"UCMR5", panelId:"mountholly",
    lat:39.9932, lng:-74.7856,
    mx:4.8,  ch:"PFOA", status:"exceeds",
  },
  {
    name:"NJAW — Liberty (Elizabeth)",    id:"NJ2004001",
    county:"Union",             pop:128124,  approx:false,
    source:"UCMR5", panelId:"liberty",
    lat:40.6640, lng:-74.2107,
    mx:4.5,  ch:"PFOA", status:"exceeds",
  },
  {
    name:"NJAW — Little Falls",           id:"NJ1605001",
    county:"Passaic",           pop:16675,   approx:false,
    source:"UCMR5", panelId:"littlefalls",
    lat:40.8787, lng:-74.2126,
    mx:4.5,  ch:"PFOA", status:"exceeds",
  },
  {
    name:"NJAW — Logan",                  id:"NJ0809002",
    county:"Gloucester",        pop:3762,    approx:false,
    source:"UCMR5", panelId:"logan",
    lat:39.7373, lng:-75.2732,
    mx:4.2,  ch:"PFOA", status:"exceeds",
  },

  // ==========================================================
  //  UCMR5 — Detected but does NOT exceed MCL (1 utility)
  // ==========================================================
  {
    name:"NJAW — Delaware / Western",     id:"NJ0327001",
    county:"Burlington/Camden", pop:314046,  approx:false,
    source:"UCMR5", panelId:"western",
    lat:39.9500, lng:-74.9000,
    mx:3.1,  ch:"PFHxA", status:"detected",
  },

  // ==========================================================
  //  UCMR5 — No PFAS detected (5 utilities)
  // ==========================================================
  {
    name:"NJAW — Harrison",               id:"NJ0808001",
    county:"Hudson",            pop:18000,   approx:true,
    source:"UCMR5", panelId:"harrison",
    lat:40.7450, lng:-74.1550,
    mx:0, ch:"—", status:"none",
  },
  {
    name:"NJAW — Cape May Court House",   id:"NJ0506010",
    county:"Cape May",          pop:10000,   approx:true,
    source:"UCMR5", panelId:"capemay",
    lat:39.0840, lng:-74.8230,
    mx:0, ch:"—", status:"none",
  },
  {
    name:"NJAW — Ocean City",             id:"NJ0508001",
    county:"Cape May",          pop:25000,   approx:true,
    source:"UCMR5", panelId:"oceancity",
    lat:39.2776, lng:-74.5746,
    mx:0, ch:"—", status:"none",
  },
  {
    name:"NJAW — Penns Grove",            id:"NJ1707001",
    county:"Salem",             pop:10843,   approx:false,
    source:"UCMR5", panelId:"pennsgrove",
    lat:39.7268, lng:-75.4635,
    mx:0, ch:"—", status:"none",
  },
  {
    name:"NJAW — Roxbury",                id:"NJ1436002",
    county:"Morris",            pop:14135,   approx:false,
    source:"UCMR5", panelId:"roxbury",
    lat:40.8579, lng:-74.6496,
    mx:0, ch:"—", status:"none",
  },

  // ==========================================================
  //  CCR 2024 — Exceeds MCL (6 utilities)
  //  Values are ranges from annual water quality reports.
  //  ccrMaxVal = numeric max of range — used for sorting.
  // ==========================================================
  {
    name:"NJAW — Four Seasons at Chester",id:"NJ1407001",
    county:"Morris",            pop:500,     approx:true,
    source:"CCR 2024", panelId:"fourseasons",
    lat:40.7785, lng:-74.6879,
    ccrPFOA:"ND – 9.0", ccrPFOS:"ND – 8.0",
    ccrMaxVal:9.0, ccrStatus:"exceeds",
  },
  {
    name:"NJAW — West Jersey",            id:"NJ1427009",
    county:"Morris",            pop:2000,    approx:true,
    source:"CCR 2024", panelId:"westjersey",
    lat:40.8650, lng:-74.7300,
    ccrPFOA:"ND – 9.0", ccrPFOS:"ND – 8.0",
    ccrMaxVal:9.0, ccrStatus:"exceeds",
  },
  {
    name:"NJAW — Shrewsbury - AVMA",      id:"NJ1346001",
    county:"Monmouth",          pop:1000,    approx:true,
    source:"CCR 2024", panelId:"shrewsbury",
    lat:40.3274, lng:-74.0643,
    ccrPFOA:"4.5 – 6.8", ccrPFOS:"2.5 – 2.7",
    ccrMaxVal:6.8, ccrStatus:"exceeds",
  },
  {
    name:"NJAW — South Orange Village",   id:"NJ0719001",
    county:"Essex",             pop:16587,   approx:false,
    source:"CCR 2024", panelId:"southorange",
    lat:40.7501, lng:-74.2607,
    ccrPFOA:"ND – 6.0", ccrPFOS:"ND – 3.0",
    ccrMaxVal:6.0, ccrStatus:"exceeds",
  },
  {
    name:"NJAW — Twin Lakes",             id:"NJ1803002",
    county:"Somerset",          pop:120,     approx:false,
    source:"CCR 2024", panelId:"twinlakes",
    lat:41.0750, lng:-74.5700,
    ccrPFOA:"ND – 6.0", ccrPFOS:"ND – 5.0",
    ccrMaxVal:6.0, ccrStatus:"exceeds",
  },
  {
    name:"NJAW — Salem",                  id:"NJ1712001",
    county:"Salem",             pop:5000,    approx:true,
    source:"CCR 2024", panelId:"salem",
    lat:39.5718, lng:-75.4688,
    ccrPFOA:"4.1 – 5.6", ccrPFNA:"2.9 – 5.1",
    ccrMaxVal:5.6, ccrStatus:"exceeds",
  },

  // ==========================================================
  //  CCR 2024 — Detected but below MCL (2 utilities)
  // ==========================================================
  {
    name:"NJAW — Bridgeport",             id:"NJ0809001",
    county:"Gloucester",        pop:500,     approx:true,
    source:"CCR 2024", panelId:"bridgeport",
    lat:39.8200, lng:-75.3600,
    ccrPFOA:"ND – 3.9",
    ccrMaxVal:3.9, ccrStatus:"detected",
  },
  {
    name:"NJAW — Frenchtown",             id:"NJ1011001",
    county:"Hunterdon",         pop:1500,    approx:true,
    source:"CCR 2024", panelId:"frenchtown",
    lat:40.5290, lng:-75.0620,
    ccrPFOA:"ND – 3.0", ccrPFOS:"ND – 2.0",
    ccrMaxVal:3.0, ccrStatus:"detected",
  },

  // ==========================================================
  //  CCR 2024 — Not detected / Not applicable (2 utilities)
  // ==========================================================
  {
    name:"NJAW — Belvidere",              id:"NJ2103001",
    county:"Warren",            pop:2644,    approx:false,
    source:"CCR 2024", panelId:"belvidere",
    lat:40.8290, lng:-75.0780,
    ccrPFOA:"NA",
    ccrMaxVal:0, ccrStatus:"nd",
  },
  {
    name:"NJAW — Crossroads at Oldwick",  id:"NJ1024001",
    county:"Hunterdon",         pop:200,     approx:true,
    source:"CCR 2024", panelId:"crossroads",
    lat:40.6670, lng:-74.7280,
    ccrPFOA:"NA",
    ccrMaxVal:0, ccrStatus:"nd",
  },

  // ==========================================================
  //  CCR 2024 — No PFAS data available (7 utilities)
  // ==========================================================
  {
    name:"NJAW — Deep Run",               id:"NJ1523002",
    county:"Ocean",             pop:300,     approx:true,
    source:"CCR 2024", panelId:"deeprun",
    ccrMaxVal:0, ccrStatus:"nodata",
  },
  {
    name:"NJAW — Egg Harbor City",        id:"NJ0107001",
    county:"Atlantic",          pop:3180,    approx:false,
    source:"CCR 2024", panelId:"eggharbor",
    ccrMaxVal:0, ccrStatus:"nodata",
  },
  {
    name:"NJAW — Homestead",              id:"NJ0318002",
    county:"Burlington",        pop:1765,    approx:false,
    source:"CCR 2024", panelId:"homestead",
    ccrMaxVal:0, ccrStatus:"nodata",
  },
  {
    name:"NJAW — New Egypt",              id:"NJ1523003",
    county:"Ocean",             pop:704,     approx:false,
    source:"CCR 2024", panelId:"newegypt",
    ccrMaxVal:0, ccrStatus:"nodata",
  },
  {
    name:"NJAW — Strathmere",             id:"NJ0511001",
    county:"Cape May",          pop:400,     approx:true,
    source:"CCR 2024", panelId:"strathmere",
    ccrMaxVal:0, ccrStatus:"nodata",
  },
  {
    name:"NJAW — Sunbury",                id:"NJ0329006",
    county:"Burlington",        pop:200,     approx:true,
    source:"CCR 2024", panelId:"sunbury",
    ccrMaxVal:0, ccrStatus:"nodata",
  },
  {
    name:"NJAW — Vincentown",             id:"NJ0333004",
    county:"Burlington",        pop:132,     approx:false,
    source:"CCR 2024", panelId:"vincentown",
    ccrMaxVal:0, ccrStatus:"nodata",
  },

];


// ============================================================
//  CONVENIENCE HELPERS
//  Small utility functions used by multiple JS files.
// ============================================================

// Get the sort value for any utility (highest detected value)
function getMaxVal(u) {
  if (u.source === "UCMR5")    return u.mx      ?? 0;
  if (u.source === "CCR 2024") return u.ccrMaxVal ?? 0;
  return 0;
}

// Get only the 19 utilities that exceed MCL (for map + MCL table)
function getExceedingUtilities() {
  return UTILITIES.filter(u =>
    u.status === "exceeds" || u.ccrStatus === "exceeds"
  ).sort((a, b) => getMaxVal(b) - getMaxVal(a));
}

// Format population display ("~71,000" or "112,076")
function formatPop(u) {
  return (u.approx ? "~" : "") + u.pop.toLocaleString();
}
