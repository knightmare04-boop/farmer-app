/**
 * HarvestFlow Reactive Application State
 */
const AppState = globalThis.AppState = {
  lang: localStorage.getItem('hf_lang') || 'km',
  role: localStorage.getItem('hf_role') || 'seller', // 'seller', 'buyer', 'farmer'
  currentTab: 'dashboard', // depending on role
  buyerTab: 'home',

  // Digital Scale State
  scale: {
    connected: true,
    tare: 0,
    gross: 0,
    net: 0,
    isStabilized: false
  },

  // Farmers List (Registered in Cooperative)
  farmers: [
    {
      id: "FARM-001",
      nameKm: "លោក វ៉ាន់ សុខា",
      nameEn: "Lok Van Sokha",
      phone: "012 884 921",
      locationKm: "ឃុំត្រពាំងក្រញូង ស្រុកត្រាំកក់ តាកែវ",
      locationEn: "Trapeang Kranhung, Tram Kak, Takeo",
      cropsKm: "ប៉េងប៉ោះ, ម្ទេសហាវៃ, ត្រប់វែង",
      cropsEn: "Tomatoes, Bell Peppers, Long Eggplant",
      bakongId: "vansokha@aclb",
      pendingUSD: 174.36,
      pendingKHR: 714800,
      avatar: "assets/avatar-farmer.jpg"
    },
    {
      id: "FARM-002",
      nameKm: "លោក ម៉ៅ ចាន់ដារ៉ា",
      nameEn: "Lok Mao Chandara",
      phone: "097 554 120",
      locationKm: "ស្រុកសំឡូត ខេត្តបាត់ដំបង",
      locationEn: "Samlout District, Battambang",
      cropsKm: "ស្វាយកែវរមៀត, ស្ពៃក្តោប",
      cropsEn: "Keo Romeat Mango, Cabbage",
      bakongId: "chandara_m@wing",
      pendingUSD: 245.50,
      pendingKHR: 1006500,
      avatar: "assets/avatar-farmer2.jpg"
    },
    {
      id: "FARM-003",
      nameKm: "អ្នកស្រី ជា សោភា",
      nameEn: "Mrs. Chea Sophea",
      phone: "088 901 342",
      locationKm: "ស្រុកស្អាង ខេត្តកណ្តាល",
      locationEn: "Saang District, Kandal",
      cropsKm: "ត្រកួនធម្មជាតិ, ស្ពៃបូកគោ, ខាត់ណា",
      cropsEn: "Morning Glory, Bok Choy, Chinese Kale",
      bakongId: "cheasophea@abaa",
      pendingUSD: 98.20,
      pendingKHR: 402600,
      avatar: "assets/profile-sokha.jpg"
    },
    {
      id: "FARM-004",
      nameKm: "លោក ហេង វិបុល",
      nameEn: "Mr. Heng Vibol",
      phone: "015 672 399",
      locationKm: "ស្រុកបាទី ខេត្តតាកែវ",
      locationEn: "Bati District, Takeo",
      cropsKm: "ពោតផ្អែម, ខ្ញីស្រស់",
      cropsEn: "Sweet Corn, Fresh Ginger",
      bakongId: "vibol_heng@cani",
      pendingUSD: 142.00,
      pendingKHR: 582200,
      avatar: "assets/avatar-buyer.jpg"
    }
  ],

  // Produce Master Catalog
  produceCatalog: [
    {
      id: "PROD-TOM",
      nameKm: "ប៉េងប៉ោះធម្មជាតិ (Tomato)",
      nameEn: "Organic Table Tomatoes",
      category: "fruit",
      image: "assets/produce-tomato.png",
      basePriceUSD: 1.20,
      basePriceKHR: 4900,
      farmerKm: "លោក វ៉ាន់ សុខា (តាកែវ)",
      farmerEn: "Lok Van Sokha (Takeo)",
      coopKm: "សហគមន៍កសិកម្ម តាសីសាមគ្គី",
      coopEn: "Tasey Samaki Agricultural Cooperative",
      harvestDate: "2026-09-29 05:30 AM",
      shelfLifeDays: 5,
      grade: "Grade A",
      unit: "kg",
      stockKg: 650,
      descriptionKm: "ប៉េងប៉ោះស្រស់បេះពីព្រលឹម ពណ៌ក្រហមឆ្អៅ សាច់ណែន គ្មានសារធាតុគីមី ស្តង់ដារភោជនីយដ្ឋាន។",
      descriptionEn: "Vine-ripened fresh table tomatoes harvested at dawn. Firm flesh, high brix, ideal for restaurant culinary use."
    },
    {
      id: "PROD-BOK",
      nameKm: "ស្ពៃបូកគោស្រស់ (Organic Bok Choy)",
      nameEn: "Crisp Organic Bok Choy",
      category: "leafy",
      image: "assets/produce-bokchoy.png",
      basePriceUSD: 0.95,
      basePriceKHR: 3900,
      flashDiscountPriceUSD: 0.65,
      flashDiscountPriceKHR: 2600,
      farmerKm: "អ្នកស្រី ជា សោភា (កណ្តាល)",
      farmerEn: "Mrs. Chea Sophea (Kandal)",
      coopKm: "សហគមន៍កសិកម្ម ស្អាងបៃតង",
      coopEn: "Sa'ang Green Agricultural Cooperative",
      harvestDate: "2026-09-28 06:00 AM",
      shelfLifeDays: 2,
      hoursRemaining: 8,
      isFlashSale: true,
      grade: "Grade A",
      unit: "kg",
      stockKg: 180,
      descriptionKm: "ស្ពៃបូកគោដាំក្នុងផ្ទះសំណាញ់ ស្រស់ស្រួយ គ្មានថ្នាំពុល។ បញ្ចុះតម្លៃ ៣៥% ពិសេសព្រោះសល់ ៨ ម៉ោងទៀត!",
      descriptionEn: "Net-house grown crisp Bok Choy. Chemical-free. 35% Spoilage reduction flash markdown due to 8h remaining shelf-life."
    },
    {
      id: "PROD-CAB",
      nameKm: "ស្ពៃក្តោបបាត់ដំបង (Battambang Cabbage)",
      nameEn: "Battambang Round Cabbage",
      category: "leafy",
      image: "assets/produce-cabbage.jpg",
      basePriceUSD: 0.80,
      basePriceKHR: 3300,
      farmerKm: "លោក ម៉ៅ ចាន់ដារ៉ា (សំឡូត)",
      farmerEn: "Lok Mao Chandara (Samlout)",
      coopKm: "សហគមន៍កសិកម្ម បាត់ដំបងមានជ័យ",
      coopEn: "Battambang Meanchey Agri-Coop",
      harvestDate: "2026-09-28 10:00 AM",
      shelfLifeDays: 6,
      grade: "Grade A",
      unit: "kg",
      stockKg: 920,
      descriptionKm: "ស្ពៃក្តោបមូលណែនល្អ ពីតំបន់ខ្ពង់រាបសំឡូត រសជាតិផ្អែមធម្មជាតិ ធន់នឹងការដឹកជញ្ជូន។",
      descriptionEn: "Dense highland round cabbage from Samlout plateau. Naturally sweet and travels with supreme crispness."
    },
    {
      id: "PROD-CHL",
      nameKm: "ម្ទេសអាចម៍សត្វហិរក្រអូប (Bird's Eye Chili)",
      nameEn: "Cambodian Hot Bird's Eye Chili",
      category: "fruit",
      image: "assets/produce-chili.jpg",
      basePriceUSD: 2.80,
      basePriceKHR: 11500,
      farmerKm: "លោក វ៉ាន់ សុខា (តាកែវ)",
      farmerEn: "Lok Van Sokha (Takeo)",
      coopKm: "សហគមន៍កសិកម្ម តាសីសាមគ្គី",
      coopEn: "Tasey Samaki Agricultural Cooperative",
      harvestDate: "2026-09-29 06:15 AM",
      shelfLifeDays: 8,
      grade: "Grade A",
      unit: "kg",
      stockKg: 140,
      descriptionKm: "ម្ទេសហិរក្រអូបពិសេស គុណភាពខ្ពស់ ពណ៌ក្រហមស្រស់ ស័ក្តិសមសម្រាប់ទឹកជ្រលក់ និងម្ហូបខ្មែរគ្រប់ប្រភេទ។",
      descriptionEn: "Fiery, aromatic authentic Cambodian bird's eye chilies. Hand-sorted premium red pods for restaurant seasoning."
    },
    {
      id: "PROD-CRN",
      nameKm: "ពោតផ្អែមធម្មជាតិ (Sweet Corn)",
      nameEn: "Fresh Sweet Golden Corn",
      category: "fruit",
      image: "assets/produce-corn.jpg",
      basePriceUSD: 0.70,
      basePriceKHR: 2900,
      farmerKm: "លោក ហេង វិបុល (តាកែវ)",
      farmerEn: "Mr. Heng Vibol (Takeo)",
      coopKm: "សហគមន៍កសិកម្ម បាទីសាមគ្គី",
      coopEn: "Bati Samaki Agri-Cooperative",
      harvestDate: "2026-09-29 07:00 AM",
      shelfLifeDays: 4,
      grade: "Grade A",
      unit: "kg",
      stockKg: 450,
      descriptionKm: "ពោតផ្អែមគ្រាប់ពេញ ស្រស់ផ្អែមឆ្ងាញ់ បេះភ្លាមដឹកភ្លាម គុណភាពខ្ពស់។",
      descriptionEn: "Juicy golden sweet corn cobs harvested at peak milk stage. Packed in insulated crates for fresh delivery."
    },
    {
      id: "PROD-GIN",
      nameKm: "ខ្ញីស្រស់កសិដ្ឋាន (Fresh Farm Ginger)",
      nameEn: "Fresh Aromatic Ginger",
      category: "root",
      image: "assets/cat-ginger.png",
      basePriceUSD: 1.60,
      basePriceKHR: 6600,
      farmerKm: "លោក ហេង វិបុល (តាកែវ)",
      farmerEn: "Mr. Heng Vibol (Takeo)",
      coopKm: "សហគមន៍កសិកម្ម បាទីសាមគ្គី",
      coopEn: "Bati Samaki Agri-Cooperative",
      harvestDate: "2026-09-27 08:00 AM",
      shelfLifeDays: 14,
      grade: "Grade A",
      unit: "kg",
      stockKg: 320,
      descriptionKm: "ខ្ញីមើមធំ សាច់ណែន ក្រអូបប្រហើរ គ្មានជាតិគីមី ទុកបានយូរ។",
      descriptionEn: "Plump organic ginger roots with intense aroma and spice. Cleaned, soil-free, and graded for commercial kitchens."
    }
  ],

  // Live Inventory Lots in Cold Storage
  inventoryLots: [
    {
      lotId: "#LOT-TOM-884",
      produceId: "PROD-TOM",
      produceNameKm: "ប៉េងប៉ោះធម្មជាតិ (Tomato)",
      produceNameEn: "Organic Table Tomatoes",
      farmerKm: "លោក វ៉ាន់ សុខា",
      farmerEn: "Lok Van Sokha",
      intakeDate: "2026-09-29 06:15 AM",
      qtyKg: 350,
      bin: "BIN-A04",
      grade: "Grade A",
      freshnessPercent: 96,
      daysLeft: 5,
      hoursLeft: 120,
      status: "fresh",
      unitPriceUSD: 1.20,
      unitPriceKHR: 4900
    },
    {
      lotId: "#LOT-BOK-092",
      produceId: "PROD-BOK",
      produceNameKm: "ស្ពៃបូកគោស្រស់ (Bok Choy)",
      produceNameEn: "Crisp Organic Bok Choy",
      farmerKm: "អ្នកស្រី ជា សោភា",
      farmerEn: "Mrs. Chea Sophea",
      intakeDate: "2026-09-28 07:00 AM",
      qtyKg: 180,
      bin: "BIN-B02",
      grade: "Grade A",
      freshnessPercent: 24,
      daysLeft: 0,
      hoursLeft: 8,
      status: "critical", // Flash sale candidate!
      unitPriceUSD: 0.95,
      unitPriceKHR: 3900,
      flashPriceUSD: 0.65,
      flashPriceKHR: 2600,
      isFlashSaleActive: true
    },
    {
      lotId: "#LOT-CAB-310",
      produceId: "PROD-CAB",
      produceNameKm: "ស្ពៃក្តោបបាត់ដំបង (Cabbage)",
      produceNameEn: "Battambang Round Cabbage",
      farmerKm: "លោក ម៉ៅ ចាន់ដារ៉ា",
      farmerEn: "Lok Mao Chandara",
      intakeDate: "2026-09-28 11:30 AM",
      qtyKg: 520,
      bin: "BIN-A02",
      grade: "Grade A",
      freshnessPercent: 78,
      daysLeft: 4,
      hoursLeft: 96,
      status: "good",
      unitPriceUSD: 0.80,
      unitPriceKHR: 3300
    },
    {
      lotId: "#LOT-CHL-105",
      produceId: "PROD-CHL",
      produceNameKm: "ម្ទេសអាចម៍សត្វ (Bird's Eye Chili)",
      produceNameEn: "Cambodian Hot Chili",
      farmerKm: "លោក វ៉ាន់ សុខា",
      farmerEn: "Lok Van Sokha",
      intakeDate: "2026-09-29 06:45 AM",
      qtyKg: 140,
      bin: "BIN-C01",
      grade: "Grade A",
      freshnessPercent: 98,
      daysLeft: 8,
      hoursLeft: 192,
      status: "fresh",
      unitPriceUSD: 2.80,
      unitPriceKHR: 11500
    },
    {
      lotId: "#LOT-CRN-502",
      produceId: "PROD-CRN",
      produceNameKm: "ពោតផ្អែម (Sweet Corn)",
      produceNameEn: "Sweet Golden Corn",
      farmerKm: "លោក ហេង វិបុល",
      farmerEn: "Mr. Heng Vibol",
      intakeDate: "2026-09-29 07:30 AM",
      qtyKg: 450,
      bin: "BIN-B05",
      grade: "Grade A",
      freshnessPercent: 88,
      daysLeft: 3,
      hoursLeft: 72,
      status: "good",
      unitPriceUSD: 0.70,
      unitPriceKHR: 2900
    }
  ],

  // Active Orders (Restaurant / Wholesale Buyers)
  orders: [
    {
      orderId: "#ORD-2026-089",
      buyerNameKm: "ភោជនីយដ្ឋាន Green Garden (បឹងកេងកង)",
      buyerNameEn: "Green Garden Restaurant (BKK1, Phnom Penh)",
      buyerContact: "012 345 678",
      orderDate: "2026-09-29 06:30 AM",
      deliveryWindowKm: "ព្រឹកព្រលឹម (០៥:០០ - ០៧:០០ ព្រឹក)",
      deliveryWindowEn: "Early Morning (05:00 - 07:00 AM)",
      status: "packing", // 'incoming', 'packing', 'dispatched', 'delivered'
      items: [
        { nameKm: "ប៉េងប៉ោះធម្មជាតិ (Grade A)", nameEn: "Table Tomatoes (Grade A)", qtyKg: 50, lotId: "#LOT-TOM-884", priceUSD: 1.20 },
        { nameKm: "ស្ពៃក្តោបបាត់ដំបង (Grade A)", nameEn: "Round Cabbage (Grade A)", qtyKg: 40, lotId: "#LOT-CAB-310", priceUSD: 0.80 },
        { nameKm: "ម្ទេសអាចម៍សត្វ (Grade A)", nameEn: "Hot Bird's Eye Chili", qtyKg: 5, lotId: "#LOT-CHL-105", priceUSD: 2.80 }
      ],
      totalUSD: 106.00,
      totalKHR: 434600,
      paymentMethodKm: "Bakong KHQR (បានទូទាត់រួច)",
      paymentMethodEn: "Bakong KHQR (Pre-paid / Verified)",
      packingChecklist: {
        cratesInspected: true,
        tempChecked: true,
        qualityApproved: false,
        qrLabeled: false
      },
      driver: {
        name: "សុខ ចិន្តា (Sok Chenda)",
        phone: "089 992 110",
        vehicle: "ឡានត្រជាក់ Van 3D-8892 (Temp 4.5°C)"
      },
      podSignature: null,
      podRecipient: null,
      podTimestamp: null
    },
    {
      orderId: "#ORD-2026-090",
      buyerNameKm: "ភោជនីយដ្ឋាន Malis Phnom Penh (មហាវិថីនរោត្តម)",
      buyerNameEn: "Malis Fine Dining (Norodom Blvd, Phnom Penh)",
      buyerContact: "023 221 022",
      orderDate: "2026-09-29 07:10 AM",
      deliveryWindowKm: "ព្រឹក (០៨:០០ - ១០:០០ ព្រឹក)",
      deliveryWindowEn: "Morning (08:00 - 10:00 AM)",
      status: "dispatched",
      items: [
        { nameKm: "ស្ពៃបូកគោស្រស់ (Flash Deal)", nameEn: "Organic Bok Choy (Flash Deal)", qtyKg: 60, lotId: "#LOT-BOK-092", priceUSD: 0.65 },
        { nameKm: "ខ្ញីស្រស់កសិដ្ឋាន", nameEn: "Fresh Farm Ginger", qtyKg: 15, lotId: "#LOT-GIN-102", priceUSD: 1.60 }
      ],
      totalUSD: 63.00,
      totalKHR: 258300,
      paymentMethodKm: "Bakong KHQR (បានទូទាត់រួច)",
      paymentMethodEn: "Bakong KHQR (Pre-paid)",
      packingChecklist: {
        cratesInspected: true,
        tempChecked: true,
        qualityApproved: true,
        qrLabeled: true
      },
      driver: {
        name: "សេង វិចិត្រ (Seng Vicheth)",
        phone: "096 881 229",
        vehicle: "ឡានត្រជាក់ Isuzu 3C-4410 (Temp 3.8°C)"
      },
      podSignature: null,
      podRecipient: null,
      podTimestamp: null
    }
  ],

  // Buyer Shopping Cart
  cart: [
    {
      produceId: "PROD-TOM",
      qtyKg: 30,
      note: "សូមរើសផ្លែទុំល្មម ពណ៌ក្រហមស្មើ"
    },
    {
      produceId: "PROD-BOK",
      qtyKg: 25,
      note: "សម្រាប់ធ្វើស៊ុប និងឆាប្រចាំថ្ងៃ"
    }
  ],

  // Market Wholesale Reference Prices (Cambodia)
  marketIntel: [
    {
      cropKm: "ប៉េងប៉ោះ (Tomato)",
      cropEn: "Table Tomato",
      marketKm: "ផ្សារដើមគ (ភ្នំពេញ)",
      marketEn: "Deum Kor (Phnom Penh)",
      gradeA_USD: 1.25,
      gradeA_KHR: 5100,
      gradeB_USD: 0.90,
      gradeB_KHR: 3700,
      trend: "up",
      change: "+5.2%",
      recKm: "តម្រូវការខ្ពស់ គួរពន្លឿនការបញ្ចេញស្តុក",
      recEn: "Strong restaurant demand; favorable selling window"
    },
    {
      cropKm: "ស្ពៃក្តោប (Cabbage)",
      cropEn: "Round Cabbage",
      marketKm: "ផ្សារនាគមាស (ភ្នំពេញ)",
      marketEn: "Neak Meas (Phnom Penh)",
      gradeA_USD: 0.85,
      gradeA_KHR: 3500,
      gradeB_USD: 0.65,
      gradeB_KHR: 2700,
      trend: "stable",
      change: "0.0%",
      recKm: "តម្លៃមានស្ថិរភាពល្អ",
      recEn: "Stable wholesale index; maintain regular supply"
    },
    {
      cropKm: "ស្ពៃបូកគោ (Bok Choy)",
      cropEn: "Bok Choy",
      marketKm: "ផ្សារបាត់ដំបង",
      marketEn: "Battambang Central",
      gradeA_USD: 1.00,
      gradeA_KHR: 4100,
      gradeB_USD: 0.70,
      gradeB_KHR: 2900,
      trend: "down",
      change: "-8.0%",
      recKm: "ស្តុកច្រើននៅចម្ការ គួរលក់បន្ទាន់ចៀសវាងជន់ជោរ",
      recEn: "Regional surplus; flash sale recommendation active"
    },
    {
      cropKm: "ម្ទេសអាចម៍សត្វ (Bird's Eye Chili)",
      cropEn: "Bird's Eye Chili",
      marketKm: "ផ្សារដើមគ (ភ្នំពេញ)",
      marketEn: "Deum Kor (Phnom Penh)",
      gradeA_USD: 2.90,
      gradeA_KHR: 11900,
      gradeB_USD: 2.10,
      gradeB_KHR: 8600,
      trend: "up",
      change: "+12.4%",
      recKm: "ខ្វះខាតលើទីផ្សារ តម្លៃខ្ពស់បំផុតក្នុងខែ",
      recEn: "Peak monthly price due to high national demand"
    }
  ]
};

if (typeof module !== 'undefined') {
  module.exports = AppState;
}
