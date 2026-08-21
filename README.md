# 💸 FinanceFlow

<p align="center">
  <img src="./frontend/assets/images/Preview.png" alt="FinanceFlow Preview" width="100%">
</p>

A minimalist, mobile-first Progressive Web App (PWA) and full-stack expense tracking platform designed to help users manage their personal finances effortlessly.

## ✨ Highlights

* **Mobile-First & PWA Support:** Installable web app experience with offline readiness.
* **JWT Authentication:** Secure user registration, password hashing, and persistent sessions.
* **Expense & Income Tracking:** Categorize transactions with visual status indicators.
* **Real-time Overview:** Instant calculation of balance, total income, and total expenses.
* **Interactive History & Filtering:** Fast transaction search and category breakdown.
* **System Reset ("Danger Zone"):** Password-authenticated feature to wipe financial history.

## 📂 Folder Structure

Based on your project workspace layout, here is the directory tree:

```text
Finance-Flow/
├── backend/                      # Node.js / Express server
│   ├── middleware/
│   │   └── authMiddleware.js     # JWT verification middleware
│   ├── routes/
│   │   ├── auth.js               # Auth routes
│   │   └── transactions.js       # Transaction CRUD & reset routes
│   ├── database.js               # SQLite connection and schema setup
│   ├── financeflow.db            # SQLite database file
│   ├── package.json              # Node dependencies
│   └── server.js                 # Express application entry point
├── frontend/                     # Client-side files
│   ├── assets/
│   │   ├── icons/                # PWA app icons and favicon
│   │   └── images/               # App UI illustrations (Back.png, Preview.png, loaded.png)
│   ├── css/
│   │   ├── dashboard.css
│   │   ├── index.css
│   │   └── login.css
│   ├── pages/
│   │   ├── dashboard.html
│   │   └── login.html
│   ├── index.html                # PWA landing / onboarding entry point
│   ├── manifest.json             # Web application manifest
│   └── sw.js                     # Service worker
├── .gitignore
└── README.md
```

## 🛠️ Tech Stack

HTML5 • CSS3 • JavaScript (ES6) • Node.js • Express.js • SQLite3 • Lucide Icons • PWA

## 🚀 Run Locally

Clone the project repository to your machine:

```bash
git clone https://github.com/Papia-tech/Finance-Flow.git
cd Finance-Flow
```

Install backend dependencies and run the server:

```bash
cd backend
npm install
node server.js
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## ✍ Author

Made with <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Revolving%20Hearts.png" alt="Revolving Hearts" width="25" height="25" /> by Papia Karmakar

## 🔒 License
MIT License. Copyright © 2026 Papia Karmakar. All rights reserved.