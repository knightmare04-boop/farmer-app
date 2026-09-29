# HarvestFlow (ហាវេសហ្វ្លូ)
### Exact Mobile Screen Replica from `Untitled.fig`

[![Bilingual](https://img.shields.io/badge/Language-Khmer%20%7C%20English-0D631B)](#bilingual-support)
[![Figma Exact Match](https://img.shields.io/badge/Figma-Exact%20Match%20(390px)-005F22)](#figma-mobile-screens)
[![Stitch MCP](https://img.shields.io/badge/Stitch%20MCP-Integrated-005A9C)](#stitch-mcp-integration)

HarvestFlow is an exact replica of the mobile application screens in `Untitled.fig`. It reproduces the exact icons, cards, color palette, layouts, and typography across both the Agricultural Cooperative (Seller) and Wholesale Buyer flows, with full bilingual Khmer (`ខ្មែរ`) and English (`EN`) support.

---

## 🌟 Key Capabilities

### 1. Bilingual Support (ភាសាខ្មែរ / English)
- **Instant Language Toggle**: One-click switching (`🇰🇭 ខ្មែរ` ↔ `🇬🇧 EN`) in the top navigation bar with persistent preference.
- **Authentic Terminology**: Native Khmer terms tailored to Cambodian agriculture and commerce (e.g., ថ្លឹងទម្ងន់, កាត់ទម្ងន់កន្ត្រក (Tare), ក្រិតជញ្ជីង, និទ្ទេស A (Grade A), ផ្សាយលក់បន្ទាន់ (Flash Sale), បាគង KHQR, វិក្កយបត្រ, ឃ្លាំងត្រជាក់).

### 2. Multi-Role Portals
- **🏪 Agricultural Cooperative (អ្នកលក់ / សហករណ៍)**:
  - **Operations Dashboard**: Real-time hub metrics (Today's intake, cold inventory value in USD & KHR, urgent spoilage alerts, settled Bakong payouts).
  - **Visual Digital Scale Intake**: Bluetooth scale pairing (`SmartScale Pro-500`), live weight readout, zero/tare deduction (`-2.50 kg` standard crate), farmer member assignment, Grade A/B/C classification, and instant printable intake lot slip (`#LOT-TOM-884`).
  - **Live Produce Stock & Shelf-Life Tracker**: Multi-category ledger with real-time freshness progress bars and expiration alerts (`8h critical`, `24h warning`, `5 days fresh`).
  - **Emergency Spoilage Flash Sale**: One-click broadcast of near-expiry lots at `-20%`, `-35%`, or `-50%` markdown to 48 registered commercial kitchens in Phnom Penh to prevent food loss.
  - **Order Packing & Step-by-Step Dispatch**: Real-time order fulfillment with automated cold storage stock deduction, packing QC checklist, and digital signature Proof of Delivery (POD).
  - **Farmer Member Payouts via Bakong KHQR**: 48 member accounts ledger with instant NBC Bakong KHQR code generation and settlement verification.
  - **Cambodia Wholesale Market Intel**: Daily wholesale commodity benchmark prices (Deum Kor, Neak Meas, Battambang, Takeo) with trend indicators.

- **🛒 Wholesale Buyer / Restaurant (អ្នកទិញបោះដុំ / ភោជនីយដ្ឋាន)**:
  - **Buyer Home & Fresh Deals Spotlight**: Flash-sale markdown specials, partner cooperative highlights.
  - **Produce Procurement Catalog**: Filter by leafy greens, fruits, root veggies, and discounts with farm origin traceability.
  - **Procurement Cart**: Multi-shop crate calculator with volume discounts.
  - **Checkout & Logistics**: Scheduled early morning cold-chain delivery slots (05:00 - 07:00 AM) and Bakong KHQR payment.
  - **Live Delivery Tracking**: Real-time cargo temperature monitoring (`4.5°C`) and delivery driver progress stepper.
  - **Goods Receiving & Quality Inspection**: Crate weight & freshness checklist with one-tap digital sign-off.

---

## 🛠️ Stitch MCP Integration

The application integrates with the **Stitch MCP Server**:
1. **Project Container**: Created Stitch project `projects/13183440078009144728` (`HarvestFlow - Agriculture Cooperative & Buyer Platform`).
2. **Design Specification Upload (`upload_design_md`)**: Encoded and uploaded `DESIGN.md` defining color tokens, typography (`Noto Sans Khmer` & `Plus Jakarta Sans`), and component hierarchy.
3. **Design System Creation (`create_design_system_from_design_md`)**: Generated asset `59827d18757a4fc692a876c2ffc9391f` specifying elevation, tonal layers, and responsive fluid grid rules.
4. **AI Screen Generation (`generate_screen_from_text`)**: Synthesized high-fidelity dashboard screens adhering to the cooperative design system.

---

## 📂 Project Structure

```
d:/moni/
├── assets/                    # Extracted and curated Figma assets (logos, produce photos, avatars)
│   ├── logo.png               # HarvestFlow brand emblem
│   ├── produce-tomato.png     # Table tomatoes
│   ├── produce-bokchoy.png    # Bok choy
│   ├── produce-cabbage.jpg    # Round cabbage
│   ├── produce-chili.jpg      # Bird's eye chili
│   ├── produce-corn.jpg       # Sweet corn
│   └── avatar-*.jpg           # Farmer and buyer profile avatars
├── css/
│   └── style.css              # Custom CSS design system, typography, animations & print styles
├── js/
│   ├── translations.js        # Comprehensive Khmer and English bilingual dictionary
│   ├── state.js               # Reactive centralized state store
│   ├── views.js               # Modular screen view templates for all flows
│   └── app.js                 # Global controller, scale simulation, Bakong KHQR, and event handlers
├── index.html                 # Main web application entry point
├── test.html                  # Direct preview mirror for IDE testing
├── DESIGN.md                  # HarvestFlow design system specification
├── package.json               # NPM scripts and dependencies
└── test_app_logic.js          # Unit and integration test suite
```

---

## 🚀 Running Locally

1. **Start the local server**:
   ```bash
   npm start
   ```
   Or via Python:
   ```bash
   python -m http.server 3000
   ```

2. **Open in Browser**:
   Navigate to:
   ```
   http://localhost:3000/
   ```

3. **Run Test Suite**:
   ```bash
   npm test
   ```
