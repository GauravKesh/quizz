# 🧠 Micro-Quiz Platform

A modern quiz application built with **Next.js 14 App Router** that lets users take short, topic-specific quizzes.

## 🚀 Live Demo

> Coming soon – Deployed via [Vercel](https://vercel.com)

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

src/
├── app/
│ ├── page.js (Home)
│ ├── quizzes/[category]/page.js (Category SSR)
│ ├── quiz/[id]/page.js (Quiz SSR)
│ └── api/... (Mock API routes)
├── components/ (Reusable UI)
├── data/mockData.js (Static quiz data)
├── styles/globals.css

yaml
Copy
Edit

---

## 🧪 Run Locally

```bash
# Clone repo
git clone https://github.com/your-username/micro-quiz-platform.git
cd micro-quiz-platform

# Install dependencies
npm install

# Create .env.local
echo "NEXT_PUBLIC_BASE_URL=http://localhost:3000" > .env.local

# Run dev server
npm run dev
Open http://localhost:3000

🔐 API Endpoints (Mocked)
Endpoint	Method	Description
/api/categories	GET	Returns list of quiz categories
/api/quizzes?category=x	GET	Returns quizzes in a category
/api/quiz/:id	GET	Returns quiz details with questions

🧠 Implementation Highlights
✅ Static Site Generation (SSG)
Home page uses static data and pre-renders at build time.

✅ Server-Side Rendering (SSR)
Category and quiz pages fetch fresh data on each request.

✅ Dynamic Routes
Fully dynamic URLs via App Router ([category], [id]).

✅ SEO
generateMetadata() used in all dynamic pages.

🤖 AI Tooling
Used ChatGPT 4 for scaffolding code patterns, API shape, and state logic recommendations. All logic was customized and structured manually.

✅ Future Enhancements
✅ Add timer per question

⬜ Persist user scores to local storage

⬜ Leaderboard page

⬜ Quiz creation form (admin)

📄 License
MIT

yaml
Copy
Edit

---

Would you like me to generate a `vercel.json` (custom rewrite or base config), or push ins