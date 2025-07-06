# 🧠 Micro-Quiz Platform

A modern quiz application built with **Next.js 14 App Router** that lets users take short, topic-specific quizzes.

## 🚀 Live Demo

> [Live Preview](https://quizz-eta-ecru.vercel.app/)

---

## 📸 Features

- ✅ Home page with quiz categories (SSG)
- ✅ Dynamic routing per category and quiz
- ✅ Server-side rendering for category and quiz pages
- ✅ Quiz state management with feedback and scoring
- ✅ Mock API routes using Next.js `app/api`
- ✅ Responsive, clean UI with Tailwind CSS
- ✅ Optimized images with `next/image`
- ✅ SEO-friendly with dynamic `generateMetadata()`

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** JavaScript (ES6+)
- **Styling:** Tailwind CSS
- **State:** React `useState`
- **API:** Mocked with `app/api/`
- **Hosting:** Vercel

---

## 📂 Folder Structure

```bash
.
├── eslint.config.mjs
├── jsconfig.json
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── images
│   │   ├── arts.jpeg
│   │   ├── geography.jpg
│   │   ├── history.jpeg
│   │   ├── literature.jpeg
│   │   ├── math.jpg
│   │   ├── movies.jpeg
│   │   ├── programming.jpg
│   │   ├── science.jpg
│   │   ├── sports.jpeg
│   │   └── technology.jpeg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── README.md
├── src
│   ├── app
│   │   ├── api
│   │   │   ├── categories
│   │   │   │   └── route.js
│   │   │   ├── quiz
│   │   │   │   └── [id]
│   │   │   │       └── route.js
│   │   │   └── quizzes
│   │   │       └── route.js
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.js
│   │   ├── page.js
│   │   ├── quiz
│   │   │   └── [id]
│   │   │       ├── loading.js
│   │   │       └── page.js
│   │   └── quizzes
│   │       └── [category]
│   │           ├── loading.js
│   │           └── page.js
│   ├── components
│   │   ├── layouts
│   │   │   └── Navbar.jsx
│   │   └── ui
│   │       ├── CategoryCard.jsx
│   │       ├── HomePage.jsx
│   │       ├── LoaderUi.jsx
│   │       ├── QuestionCard.jsx
│   │       ├── QuizCard.jsx
│   │       ├── QuizList.jsx
│   │       ├── QuizRunner.jsx
│   │       └── ScoreCard.jsx
│   └── data
│       └── mockData.js
└── tsconfig.json

```



---

## 🧪 Run Locally

```bash
# Clone repo
git clone https://github.com/gauravkesh/quizz.git
cd quizz

```
# Install dependencies
npm install

# Create .env.local
```bash
echo "NEXT_PUBLIC_BASE_URL=http://localhost:3000" > .env.local
```

# Run dev server
```bash
npm run dev
```
Open http://localhost:3000


### 📘 API Endpoints

| Endpoint               | Method | Description                            |
|------------------------|--------|----------------------------------------|
| `/api/categories`      | GET    | Returns list of quiz categories        |
| `/api/quizzes?category=x` | GET | Returns quizzes in the specified category `x` |
| `/api/quiz/:id`        | GET    | Returns quiz details with questions    |


## 🧠 Implementation Highlights
✅ Static Site Generation (SSG)
Home page uses static data and pre-renders at build time.

✅ Server-Side Rendering (SSR)
Category and quiz pages fetch fresh data on each request.

✅ Dynamic Routes
Fully dynamic URLs via App Router ([category], [id]).

✅ SEO
generateMetadata() used in all dynamic pages.

### 🤖 AI Tooling
Used ChatGPT 4 and Claude occasionally to brainstorm structure and patterns. Most of the implementation , including business logic, API design, and state management  was written and refined manually. AI was mainly used to speed up repetitive tasks or resolve minor issues.

### ✅ Future Enhancements
⬜ Add timer per question

⬜ Persist user scores to local storage

⬜ Leaderboard page

⬜ Quiz creation form (admin)

