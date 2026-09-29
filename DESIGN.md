# Design System: HarvestFlow (ហាវេសហ្វ្លូ)
Cambodia Agricultural Cooperative Management & Wholesale Buyer Platform

## Overview
HarvestFlow connects local agricultural cooperatives in Cambodia (such as Battambang, Takeo, and Kandal) directly with commercial buyers, restaurants, and hotels. The system provides real-time digital scale intake, automated inventory deduction, freshness & shelf-life tracking, emergency spoilage flash-sales, Bakong KHQR instant payouts, and order fulfillment.

## Color Palette
- **Primary Green (Forest Harvest)**: `#0D631B` (Deep Emerald), `#005F22` (Cooperative Dark Green), `#19722B` (Vibrant Leaf)
- **Secondary / Accent Green**: `#9CF49C` (Light Mint), `#D1F2D1` (Soft Sage), `#E8F5E9` (Mint Surface)
- **Neutral Dark**: `#121D26` (Midnight), `#191C1B` (Charcoal), `#40493D` (Deep Olive Slate)
- **Neutral Light & Surfaces**: `#FFFFFF` (Pure White), `#F8FAF8` (Clean Canvas), `#F2F4F2` (Card Background), `#ECEEEC` (Border Gray)
- **Status & Alerts**:
  - Urgent Spoilage / Flash Sale Red: `#BA1A1A`
  - High Freshness / Grade A: `#0D631B`
  - Warning / 24h Remaining: `#D97706`
  - Bakong KHQR Brand Blue: `#005A9C`

## Typography
- **Khmer Heading & Body**: "Noto Sans Khmer", "Kantumruy Pro", sans-serif
- **English / Latin & Numerics**: "Plus Jakarta Sans", "Inter", -apple-system, sans-serif
- **Scale / Weight Monospace**: "SF Mono", "Courier New", monospace for scale readouts and lot codes

## Core UI Components
1. **Top Bar & Global Controls**:
   - Bilingual language selector (`🇰🇭 ខ្មែរ` | `🇬🇧 EN`)
   - Role switcher (`សហករណ៍ (Seller/Coop)` ↔ `អ្នកទិញ (Wholesale Buyer)` ↔ `កសិករ (Farmer)`)
   - Live synchronization status badge and cold-storage climate pill (4°C | 88% Humidity)
2. **Cooperative / Seller Modules**:
   - **Intake & Bluetooth Scale Pairing**: Digital tare (-2.50kg crate), live weight stabilizer, farmer lookup, Grade A/B/C assignment, and printable Intake Slip with QR code.
   - **Live Stock & Freshness Ledger**: Batch expiry countdown, days on shelf, auto-deduction ledger.
   - **Emergency Spoilage Flash Sale**: One-click markdown broadcast (-20% to -50%) to nearby commercial buyers to eliminate food waste.
   - **Order Dispatch & Proof of Delivery (POD)**: Packing checklist, route status, digital signature pad.
   - **Farmer Payouts via Bakong KHQR**: Member ledger, one-tap NBC Bakong QR code generation, instant transaction settlement.
3. **Buyer Wholesale Modules**:
   - **Fresh Deals Spotlight**: Flash sale banners, price-drop alerts, cooperative farm profiles.
   - **Produce Catalog & Transparency**: Origin farm verification, harvest date, freshness rating, bulk discount tiers.
   - **Multi-Shop Procurement Cart**: Grouped by agricultural cooperative with volume discounts.
   - **Bakong KHQR Checkout**: Delivery address, morning delivery window selection, instant scan-to-pay.
   - **Live Order Tracking & Receiving**: Step-by-step dispatch timeline, digital goods receiving checklist.
