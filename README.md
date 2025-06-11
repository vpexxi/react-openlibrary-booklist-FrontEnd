# React OpenLibrary BookList

A **React** single‐page application that fetches and displays a list of books from the Open Library API. This project demonstrates live search, click‐to‐select highlighting with reordering, and a responsive, Flexbox‐powered layout with a fixed header.

---

## 🚀 Features

* **Fetch & Display Books**: GET `https://openlibrary.org/subjects/world.json`, render title & authors in cards.
* **Live Search**: Filter by book title or author name as you type.
* **Selection & Reordering**: Click a card to highlight (red border) and move it to the top; click again to deselect.
* **Fixed Header & Scroll**: Header (icon, title, search) stays pinned at top; book list scrolls independently.
* **Responsive Design**: Uses Flexbox to center content and adapt to any viewport size.

---

## 📂 Project Structure

```
react-openlibrary-booklist/
├── public/
│   └── index.html           # HTML template
├── src/
│   ├── components/
│   │   ├── BookCard.jsx     # Single book presentation
│   │   └── SearchBar.jsx    # Controlled search input
│   ├── App.jsx              # Main component: fetch, filter, render
│   ├── App.css              # Layout & styling (Flexbox, fixed header, cards)
│   └── main.jsx             # Bootstraps React into index.html
├── .gitignore               # Ignore node_modules, build files
├── package.json             # Dependencies & scripts
├── vite.config.js           # Vite dev & build configuration
└── README.md                # Project documentation
```

---

## ⚙️ Getting Started

### Prerequisites

* **Node.js** v14+
* **npm** v6+ (or **Yarn**)

### Installation

```bash
git clone https://github.com/your-username/react-openlibrary-booklist.git
cd react-openlibrary-booklist
npm install
```

### Run Locally

```bash
npm run dev
```

Open your browser at [http://localhost:5173](http://localhost:5173).

---

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

Static files output to `dist/`.

### Deploying

#### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` and follow the prompts.

#### Netlify

1. Connect your GitHub repo in Netlify dashboard.
2. Set **Build command** to `npm run build` and **Publish directory** to `dist/`.

#### GitHub Pages

1. Add to `package.json`:

   ```jsonc
   {
     "homepage": "https://your-username.github.io/react-openlibrary-booklist",
     "scripts": {
       "predeploy": "npm run build",
       "deploy":   "gh-pages -d dist"
     }
   }
   ```
2. Install `gh-pages`: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

---

## 🛠️ Testing

*No automated tests included.*
Manual verification:

1. Search filters results in real time.
2. Clicking cards toggles red highlight and reorders to the top.
3. Header and search bar remain fixed & centered while scrolling the list.

---

## 🔑 Skills & Technologies

* **React 18** (Vite)
* **Axios** for HTTP requests
* **Flexbox** & CSS for responsive layout
* **JavaScript (ES6+)**
* **HTML5 & CSS3**
* **Deployment**: Vercel, Netlify, GitHub Pages
