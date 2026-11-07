# ⚡ Battery ON

**Battery ON** is a mobile and iPad-optimized cockpit companion web app designed for **Microsoft Flight Simulator 2024**. It guides virtual pilots through realistic, sim-actionable cold-and-dark startup flows and checklists for standard commercial airliners.

---

## ✈️ Supported Aircraft (MSFS 2024 Standard)

1. **Airbus A320neo (v2)** — *iniBuilds* (CFM LEAP-1A)
2. **Boeing 737 MAX 8** — *Asobo* (CFM LEAP-1B)
3. **Airbus A330-300** — *iniBuilds* (Trent 700 / CF6)
4. **Boeing 747-8 Intercontinental** — *Asobo* (GEnx-2B 4-engine synchronized start)
5. **Airbus A310-300** — *iniBuilds* (Classic widebody hybrid analog/FMS)

---

## 🧭 Flow Phases (100% Sim-Actionable)

Every step corresponds directly to clickable buttons, knobs, or CDU pages inside MSFS 2024:

1. **Electrical Power-Up** — Batteries, ground power cart connection, cockpit lighting.
2. **Cockpit Preparation & Overhead Scan** — IRS/ADIRU alignment, fuel pumps, emergency lights, packs.
3. **FMS / MCDU Initialization** — Flight plan, route activation, performance weights (ZFW/ZFWCG), takeoff V-speeds (V1, Vr, V2).
4. **APU & Pushback Preparation** — APU start, APU bleed, altimeter baro setting, squawk code, beacon ON.
5. **Pushback & Engine Start** — Start switches, fuel cutoff levers / engine masters, N2/N1 spool verification.
6. **After Start & Taxi Clearance** — Generator transfer, APU shutdown, flaps, pitch trim, flight control deflection check, taxi lights.

---

## ✨ Features

- **Hangar Card Grid**: Visual aircraft tiles showing manufacturer badges, engine counts, FMS type, and active flight progress.
- **iPad / Tablet Optimized**: Large touch targets, dark mode cockpit aesthetics (`#090d16`), prevent accidental double-tap zoom.
- **Accidental Tap Protection**: Tap any item to toggle done/undone; batch **Clear Phase** and **Unclear Phase** buttons for quick resets.
- **Panel Location Badges**: Instant visual hints (`[OVHD - ELEC]`, `[PEDESTAL]`, `[GLARESHIELD]`, `[MCDU]`).
- **Collapsible POH Notes**: Guidance and tips from actual flight crew operating manuals tailored for MSFS simmers.
- **Offline & Local Storage Persistence**: State persists automatically across page reloads.

---

## 🛠️ Development & Running Locally

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build production bundle
npm run build
```
