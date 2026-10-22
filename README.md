# MotoLink 🏍️⚡
> **“Your Bike. Our Responsibility.”**

MotoLink is an AI-powered two-wheeler service and genuine spare-parts platform designed for India. The platform bridges the gap in the fragmented motorcycle service industry by connecting bike owners with verified mechanics, certified workshops, 100% genuine OEM spare parts, and 24/7 instant emergency roadside assistance with real-time tracking and AI diagnostics.

---

## 🎨 Visual Identity & Brand Styling
- **Primary Brand Colors**:
  - Electric Orange (`#FF6500` / `#FF6B00`) – Action CTAs, active states, highlights, and alerts
  - Deep Navy Blue (`#071827`) – Headers, hero backgrounds, and high-contrast surfaces
  - Clean Light Gray (`#F5F6F8`) – Backgrounds and cards
  - Crisp White (`#FFFFFF`) – Card backgrounds and modals
- **Design Philosophy**:
  - 16–20px rounded cards (`rounded-2xl`)
  - Soft layered elevation shadows
  - Modern typography (*Plus Jakarta Sans* & *Inter*)
  - Minimal line icons via Lucide React
  - Dual Mode: Full Desktop Web Experience + Interactive **Mobile App Preview Frame**

---

## 🚀 Key Features & 19 Core Pages

1. **Landing & Cinematic Splash**: Hero banner with motorcycle visuals, key metrics (45,000+ bikes serviced, 4.9★ rating), and primary call-to-actions.
2. **Onboarding & Value Proposition**: 6 core benefits (Trusted Experts, Genuine Parts, Quick 60-Min Turnaround, AI Diagnostics, Hyperlocal Discovery, Transparent Pricing).
3. **Login / Register with OTP**: 10-digit mobile number login, 4-digit mock OTP (`5824`), Google & Apple authentication options.
4. **Home Dashboard**: Location picker across Indian cities (Coimbatore, Chennai, Bengaluru, Hyderabad, Pune, Mumbai, Delhi), 20% OFF festive promo banner (`MOTONEW20`), quick action tiles, and AI predictive maintenance alerts.
5. **Services Catalog (12 Categories)**:
   - General Bike Service (₹899)
   - Puncture Repair (₹149)
   - Doorstep Van Service (₹999)
   - Expert Mechanic Visit (₹299)
   - Foam Wash & Detailing (₹249)
   - Battery Health & Jumpstart (₹199)
   - Emergency Towing (₹799)
   - Tyre Replacement & Fitting (₹349)
   - Wheel Alignment & Truing (₹399)
   - Roadside Breakdown SOS (₹499)
   - Cashless Insurance Claims (₹0)
   - Custom Mods & Accessories (₹599)
6. **Nearby Mechanics Discovery**: Radius-based workshop discovery, ratings, open hours, distance, and simulated interactive GPS radar map.
7. **Workshop / Center Details**: Cover photos, lead mechanic details, customer reviews, opening hours, verified team badges, direct phone dialer, and chat.
8. **Book Service Flow**: 4-step wizard: Service selection → Vehicle selection → Workshop visit vs Doorstep van → Date & slot selection → Confirmation with celebratory confetti.
9. **Spare Parts Marketplace**: Genuine parts from Motul, Brembo, MRF, Amaron, Bosch, NGK, Rolon, and Maddog with bike compatibility filters.
10. **Product Details**: Photo gallery, technical specifications, OEM warranty badges, seller verification, and quantity stepper.
11. **Cart & Checkout**: Multi-item cart, promo coupons (`MOTONEW20`, `BIKER50`), delivery addresses, and payment gateways (UPI, Cards, Net Banking, COD).
12. **Live Order Tracking**: Shipment timeline milestones (Placed → Confirmed → On The Way → Delivered), delivery partner info, and live courier GPS route tracking.
13. **MotoAI Bike Assistant**: Intelligent diagnostic chat that triages noises, engine overheating, spongy brakes, and battery issues with direct 1-click booking/ordering links.
14. **Roadside Assistance (SOS)**: 1-tap emergency dispatch, live GPS coordinates beacon, 14-min ETA countdown, technician dispatch details, and direct phone link.
15. **Bookings Management**: Upcoming, active, completed, and cancelled bookings with rescheduling, cancellation, and digital invoice downloads.
16. **Orders Management**: Spare parts order history with real-time status and 1-click reorder.
17. **Profile & Rewards**: User profile, saved addresses, payment methods, notifications, and 🪙 MotoCoins reward balance.
18. **Vehicle Garage**: Multi-bike management with real-time wear-and-tear health meters (Engine Oil Viscosity, Brake Pad Life, Battery Cranking Voltage) and maintenance reminders.
19. **Partner / Workshop Portal**: Dedicated mechanic dashboard with daily revenue (₹6,450), ramp status stepper, incoming request queue with AI issue summaries, and online/offline toggle.

---

## 🛠️ Technology Stack
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS + Custom Brand Tokens
- **Icons**: Lucide React
- **Animations**: Canvas Confetti & Tailwind Micro-Animations
- **State Management**: React Context (`AppContext.jsx`) with live data persistence

---

## 📦 Getting Started (Local Setup)

### 1. Extract the Zip file
Extract `motolink.zip` to your desired folder.

### 2. Install Dependencies
```bash
cd motolink
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser.

### 4. Build for Production
```bash
npm run build
```

---

## 🚢 Publishing to GitHub

```bash
git init
git add .
git commit -m "Initial commit of MotoLink AI-powered bike service platform"
git branch -M main
git remote add origin https://github.com/<your-username>/motolink.git
git push -u origin main
```

---

## 📄 License
MIT License. Created for MotoLink India.
