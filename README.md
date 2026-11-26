<div align="center">

# 🌴 Goa Government Exam Prep Studio 🚀

### *GPSC • GSSC • LDC • MTS • Talathi — practice, mock tests and revision in one place*

**A study platform built for Goa state competitive exam aspirants.**

[![Live App](https://img.shields.io/badge/Live%20App-GitHub%20Pages-10b981?style=for-the-badge&logo=github)](https://dr-week.github.io/GOA-govt-EXAM-PREP/)
[![Repository](https://img.shields.io/badge/GitHub-GOA--govt--EXAM--PREP-6366f1?style=for-the-badge&logo=github)](https://github.com/dr-week/GOA-govt-EXAM-PREP)
[![Questions](https://img.shields.io/badge/Question%20Bank-2%2C056%20records-06b6d4?style=for-the-badge)](data/db_export.json)
[![Stack](https://img.shields.io/badge/Stack-React%2019%20%2B%20TypeScript%20%2B%20Vite-61dafb?style=for-the-badge&logo=react)](frontend)
[![Android](https://img.shields.io/badge/Android-Capacitor%20Ready-f59e0b?style=for-the-badge&logo=android)](build_apk.bat)

**Built and maintained by [DANGER.LABS](https://github.com/Danger-Labs)**

</div>

---

## 📖 What is this?

**Goa Government Exam Prep Studio** is an offline-first question bank and exam simulator for **Goa Public Service Commission (GPSC)**, **Goa Staff Selection Commission (GSSC)**, **Lower Division Clerk (LDC)**, **Multi-Tasking Staff (MTS)** and **Talathi** aspirants.

It ships with **2,056 indexed question records** across **23 subject banks** — Goa history, geography, polity, current affairs, Konkani/RTI, aptitude, reasoning and general studies — plus a full **100-question OMR exam hall** with a 30-minute countdown, a **50:50 lifeline**, instant explanations and XP-based progress tracking.

Everything is plain web technology: no account, no server and no paid API. The React app reads a single JSON file, and the question banks are compiled from Markdown into SQLite and JSON by a small Python toolchain.

---

## ✨ Features

### 🏛️ Official OMR Exam Arena
- Full **100-question paper** drawn at random from every subject bank.
- **30-minute countdown** with an auto-submit guard.
- **OMR answer palette** — jump to any question, see answered/unanswered state at a glance.
- **🔥 50:50 lifeline** removes two wrong options per question.
- **Double randomizer**: question order *and* option order are shuffled each attempt.
- Post-exam **score modal** with score, accuracy and XP earned.

### 📚 Subject Practice Studio
- Pick any of the **23 topic banks** for a focused drill.
- Instant answer feedback with a written explanation for every question.
- XP, levels (Novice Aspirant → GPSC Master), streaks and an optional sound toggle.
- Interface available in **English and Konkani (कोंकणी)**.

### 🔖 Revision Bank
- Search the whole question bank by keyword.
- Filter by subject or by saved bookmarks.
- Bookmark tricky questions for revision before exam day.

### 🧠 Brain Arcade
- **60-Second Speed Math Trainer** — rapid quantitative calculation.
- **Memory Match** — card-matching game for visual memory.

### 📱 Mobile & Android
- Responsive glassmorphic UI with a native-style bottom navigation bar.
- Capacitor build scripts to wrap the web app as an Android APK.

### 🗃️ Data Pipeline
- Questions authored in readable **Markdown** (`data/*.md`).
- Compiled to **SQLite** (`data/questions.db`) **and JSON** (`data/db_export.json`).
- Duplicate detection and formatting audit before every release.
- **Pytest** suite for the data/backend side and **Vitest** for the React frontend.

---

## 🏝️ Question Banks

| Icon | Bank | Questions |
| :---: | :--- | ---: |
| 🆕 | Goa Current Affairs 2026 | 10 |
| 🏝️ | Goa Special GK | 12 |
| ⛰️ | Goa Geography — Rivers & Estuaries | 105 |
| 🎭 | Goa Culture & Schemes | 5 |
| 🚩 | Goa Freedom Struggle | 105 |
| 🏛️ | Goa Heritage & Architecture | 100 |
| 🛕 | Goa Panchayat & Municipal Administration | 100 |
| 🗺️ | Goa Polity & Service Rules | 105 |
| 🌿 | Goa Wildlife, Fauna & Sanctuaries | 100 |
| 🏗️ | Goa Schemes & Infrastructure | 100 |
| 📜 | Goa History Gazetteer (Advanced) | 100 |
| 🎓 | GPSC Advanced / Hard | 10 |
| 📜 | Konkani & RTI | 5 |
| 💻 | Computer Awareness | 5 |
| ⚖️ | Indian Polity (Goa focus) | 5 |
| 🔢 | Quantitative Aptitude & DI | 106 |
| 🧩 | Logical Reasoning | 5 |
| 🔥 | General Studies — India | 50 |
| 🎲 | Randomized Mock Exam Compilation | 1,028 |
| | **Total** | **2,056** |

> The 1,028-question *Randomized Mock Exam* bank is a shuffled compilation of the subject banks, used by the full-length exam simulator. The remaining records are the source question banks.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| Frontend | React 19, TypeScript, Vite 8 |
| Styling | Tailwind CSS 4, glassmorphic UI |
| Animation & icons | Framer Motion, Lucide React |
| Effects | canvas-confetti |
| Data pipeline | Python 3, SQLite, Markdown |
| Testing | Pytest (data/backend), Vitest + Testing Library (frontend) |
| Packaging | Capacitor (Android APK) |
| Hosting | GitHub Pages via GitHub Actions |

---

## 🚀 Quick Start

### Option A — Play online

👉 **[Open the live app](https://dr-week.github.io/GOA-govt-EXAM-PREP/)**

### Option B — Run the React app locally

```bash
git clone https://github.com/dr-week/GOA-govt-EXAM-PREP.git
cd GOA-govt-EXAM-PREP/frontend
npm install
npm run dev
```

Vite prints a local URL (usually `http://localhost:5173/`). The app loads the question bank from `frontend/public/db_export.json`, so make sure that file is up to date (see the data pipeline below).

### Option C — Run the legacy static studio

The original zero-dependency build (`index.html`, `exam.html`, `js/`, `style.css`) still works:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/` for the studio and `http://localhost:8000/exam.html` for the standalone exam hall.

### Option D — Build an Android APK

With Node.js and the Android SDK installed:

```bash
build_apk.bat
```

The script installs Capacitor, creates the native Android project, syncs the web assets and points you to `android/app/build/outputs/apk/debug/app-debug.apk`.

---

## 🗃️ Question Bank CLI

All data operations go through one entry point:

```bash
python src/manage_db.py audit      # Check Markdown banks for duplicates and formatting errors
python src/manage_db.py compile    # Rebuild questions.db + db_export.json from data/*.md
python src/manage_db.py seed-bulk  # Generate 500+ additional Goa Q&A records
python src/manage_db.py test       # Run the Pytest suite
python src/manage_db.py ci         # audit → compile → pytest → vitest → production build
```

After changing any Markdown bank, run `compile` and copy the new export into the frontend:

```bash
python src/manage_db.py compile
cp data/db_export.json frontend/public/db_export.json
```

### Question format

Each question is a Markdown block in `data/<bank>.md`:

```markdown
### Question 1
**Mormugao Port, the major seaport of Goa, is situated at the mouth of which river?**
- A) Mandovi River
- B) Zuari River
- C) Chapora River
- D) Sal River

**Answer:** B) Zuari River
**Explanation:** Mormugao Port is a major natural harbor in South Goa located at the mouth of the Zuari River.
```

The compiler reads these blocks and writes the SQLite database plus the JSON export consumed by the web apps.

---

## 📁 Project Structure

```text
GOA-govt-EXAM-PREP/
├── frontend/                    # React 19 + TypeScript + Vite application
│   ├── src/
│   │   ├── components/          # Home, ExamArena, BrainArcade, RevisionBank, Navbar…
│   │   ├── utils/               # cn(), audio, i18n (English + Konkani)
│   │   ├── tests/               # Vitest suite
│   │   └── App.tsx              # Tab routing, XP/level/bookmark state
│   ├── public/
│   │   └── db_export.json       # Question bank served to the app
│   └── vite.config.ts
├── src/                         # Python data pipeline
│   ├── manage_db.py             # Unified CLI (audit / compile / test / ci)
│   ├── compile_db.py            # Markdown → SQLite + JSON
│   ├── deep_audit_md.py         # Duplicate & formatting audit
│   ├── create_500_goa.py        # Bulk question generator
│   └── randomizer_engine.py     # Exam shuffling helpers
├── data/                        # 23 Markdown question banks
│   ├── questions.db             # Compiled SQLite database
│   └── db_export.json           # Compiled JSON export
├── tests/                       # Pytest suite
├── js/                          # Legacy vanilla JS engine
├── index.html                   # Legacy studio entry point
├── exam.html                    # Legacy standalone OMR exam hall
├── style.css
├── build_apk.bat                # Capacitor Android build helper
└── .github/workflows/           # Pages deploy + APK build workflows
```

---

## 🧪 Testing

```bash
# Python: data integrity, exam rules, frontend schema
python -m pytest tests/

# React: components, state, i18n, audio
cd frontend
npm test

# Production build
npm run build
```

---

## ☁️ Deployment

The React app is built and published to **GitHub Pages** by `.github/workflows/deploy.yml` on every push to `master`:

1. `npm ci` and `npm run build` inside `frontend/`
2. Upload `frontend/dist` as the Pages artifact
3. Deploy with `actions/deploy-pages`

`.github/workflows/static.yml` can publish the legacy static studio from the repository root, and `.github/workflows/build_apk.yml` builds a debug APK on demand.

To deploy from your own fork, enable **Settings → Pages → Source: GitHub Actions**.

---

## 🤝 Credits

**Created and maintained by [DANGER.LABS](https://github.com/Danger-Labs).**

This project builds on the work of the open-source community:

- [React](https://react.dev/) · [Vite](https://vite.dev/) · [TypeScript](https://www.typescriptlang.org/) · [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) · [Lucide Icons](https://lucide.dev/) · [canvas-confetti](https://github.com/catdad/canvas-confetti)
- [Capacitor](https://capacitorjs.com/) for Android packaging
- Aptitude question inspiration: [ratneshmaurya/Aptitude_Practice_Questions](https://github.com/ratneshmaurya/Aptitude_Practice_Questions), [drsarveshwarbharti/Aptitude-For-Placements](https://github.com/drsarveshwarbharti/Aptitude-For-Placements), [rohanmistry231/CSE-Aptitude-Test-Practice-Hub](https://github.com/rohanmistry231/CSE-Aptitude-Test-Practice-Hub)
- Memory-game pattern: [kubowania/memory-game](https://github.com/kubowania/memory-game)

---

## ⚠️ Disclaimer

This is an independent, unofficial study tool. It is **not affiliated with, endorsed by, or connected to** the Goa Public Service Commission, the Goa Staff Selection Commission, or any government body.

Question content is compiled for practice and revision. Exam patterns, syllabus details, schemes and current-affairs facts change over time — always verify against the latest official notification before relying on them for an actual exam.

---

## 📄 License

Released under the **MIT License**.

<div align="center">
  <sub>Made for Goa's exam aspirants with ❤️ by <a href="https://github.com/Danger-Labs">DANGER.LABS</a></sub>
</div>
