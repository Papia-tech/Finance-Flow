# 💸 FinanceFlow

> **FinanceFlow** is a minimalist, mobile-first Progressive Web App (PWA) and full-stack expense tracking platform designed to help users manage their personal finances effortlessly.

![License](https://img.shields.io/badge/license-MIT-green.svg)
![Node.js](https://img.shields.io/badge/node-%3E%3D14.0.0-blue.svg)
![Express](https://img.shields.io/badge/express-4.x-lightgrey.svg)
![SQLite3](https://img.shields.io/badge/sqlite-3.x-blue.svg)
![PWA](https://img.shields.io/badge/PWA-Ready-brightgreen.svg)

---

## ✨ Features

- 📱 **Mobile-First & PWA Support:** Native-like installable web app experience with offline readiness (`manifest.json` and service worker integration).
- 🔐 **JWT Authentication:** Secure user registration, password hashing using `bcrypt`, and persistent session management.
- 💳 **Expense & Income Tracking:** Categorize transactions (Food, Transport, Utilities, Salary, etc.) with intuitive visual indicators.
- 📊 **Real-time Overview:** Instant calculation of balance, total income, and total expenses.
- 🔍 **Interactive History & Filtering:** Fast transaction search and category breakdown.
- ⚠️ **System Reset ("Danger Zone"):** Password-authenticated feature to wipe and reset financial histories.

---

## 🛠️ Tech Stack

### **Frontend**
- **HTML5 & CSS3:** Mobile-first layout with CSS variables, custom bottom sheets, and view animations.
- **JavaScript (Vanilla ES6+):** Dynamic rendering and REST API communications (`fetch`).
- **Icons & UI Utilities:** [Lucide Icons](https://lucide.dev/).
- **PWA:** Web App Manifest and Service Workers (`sw.js`).

### **Backend**
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** SQLite3
- **Authentication:** JSON Web Tokens (`jsonwebtoken`) & `bcrypt` password hashing.
- **Security & Utilities:** `dotenv`, `cors`.

---

## 📁 Repository Structure

```text
FINANCEFLOW/
├── backend/                      # Node.js / Express server
│   ├── middleware/
│   │   └── authMiddleware.js     # JWT verification middleware
│   ├── routes/
│   │   ├── auth.js               # Auth routes (/api/auth/register, /api/auth/login, /api/auth/me)
│   │   └── transactions.js       # Transaction CRUD & reset routes (/api/transactions)
│   ├── database.js               # SQLite connection and schema setup
│   ├── financeflow.db            # SQLite database file
│   ├── package.json              # Node dependencies
│   └── server.js                 # Express application entry point
│
├── frontend/                     # Client-side files
│   ├── assets/
│   │   ├── icons/                # PWA app icons (192x192, 512x512)
│   │   └── images/               # App UI illustrations & cards
│   ├── css/
│   │   ├── global.css            # Base variables, resets, and typography
│   │   ├── index.css             # Onboarding styling
│   │   ├── login.css             # Auth view styling
│   │   └── dashboard.css         # Dashboard view and modal sheet styling
│   ├── js/                       # Client JS scripts
│   ├── pages/                    # Sub-pages
│   │   ├── login.html            # Authentication view
│   │   └── dashboard.html        # Main dashboard & transaction management view
│   ├── index.html                # PWA landing / onboarding entry point
│   ├── manifest.json             # Web application manifest
│   └── sw.js                     # Service worker
│
├── .env.example                  # Environment variable configuration template
├── .gitignore                    # Git tracking exemptions
├── LICENSE                       # MIT License
└── README.md                     # Documentation
```

## Author

Made with <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Revolving%20Hearts.png" alt="Revolving Hearts" width="25" height="25" /> by Papia


> 🔗 **Live Demo:** [https://papia-tech.github.io/Finance-Flow](https://papia-tech.github.io/Finance-Flow)