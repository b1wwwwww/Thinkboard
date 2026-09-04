<div align="center">

# 📝 ThinkBoard

A modern full-stack note-taking application built with the MERN Stack.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=20232A)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Express](https://img.shields.io/badge/Express-4-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

### [View Live Demo](https://thinkboard-note.vercel.app/)

</div>

---

## ✨ Features

- Create, read, update, and delete notes
- Clean and responsive user interface
- REST API powered by Express
- Persistent data with MongoDB Atlas
- Optional request rate limiting with Upstash Redis
- Frontend and serverless API deployed in one Vercel project

---

## 📸 Preview

<div align="center">

<img width="959" height="474" alt="ThinkBoard application preview" src="https://github.com/user-attachments/assets/1325ec48-9893-4f73-a608-04f5d6a5c3f6" />

</div>

---

## 🛠 Tech Stack

### Frontend

- React
- Vite
- Axios
- React Router
- Tailwind CSS
- DaisyUI

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

### Optional Services

- Upstash Redis for rate limiting
- Vercel for hosting the frontend and API

---

## 📂 Project Structure

```text
MERN-THINKBOARD/
├── api/
│   └── index.js              # Vercel serverless API entrypoint
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js         # Local Express server
│   ├── .env.example
│   └── package.json
├── Frontend/
│   ├── src/
│   └── package.json
├── package.json
└── vercel.json
```

---

## ⚙️ Getting Started

### Requirements

- Node.js 18 or newer
- npm
- MongoDB Atlas connection string

### 1. Clone the repository

```bash
git clone https://github.com/b1wwwwww/mern-Thinkboard.git
cd mern-Thinkboard
```

### 2. Install dependencies

```bash
npm install --prefix Backend
npm install --prefix Frontend
```

### 3. Configure environment variables

Create `Backend/.env` by copying `Backend/.env.example`.

```bash
# macOS/Linux
cp Backend/.env.example Backend/.env

# Windows PowerShell
Copy-Item Backend/.env.example Backend/.env
```

Update `Backend/.env` with your own MongoDB Atlas credentials:

```dotenv
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>/<database>
PORT=5001
NODE_ENV=development
```

Upstash Redis is optional. Add these variables only if you want rate limiting:

```dotenv
UPSTASH_REDIS_REST_URL=https://<your-upstash-url>
UPSTASH_REDIS_REST_TOKEN=<your-upstash-token>
```

Never commit `.env` files or real credentials. Your MongoDB Atlas network access must allow your development machine.

### 4. Run the application

Run the backend and frontend in two separate terminals.

**Terminal 1: Backend**

```bash
npm run dev --prefix Backend
```

The API runs at `http://localhost:5001`.

**Terminal 2: Frontend**

```bash
npm run dev --prefix Frontend
```

Open `http://localhost:5173` in your browser.

---

## 🚀 Deploy To Vercel

The project is configured to deploy the React frontend and serverless API in one Vercel project.

1. Import this repository into Vercel.
2. Set **Root Directory** to the repository root (`.`).
3. Set **Framework Preset** to `Other`.
4. Set **Build Command** to `npm run build`.
5. Set **Install Command** to `npm install`.
6. Leave **Output Directory** empty. The repository configuration uses `Frontend/dist`.
7. Add `MONGO_URI` as a production environment variable.
8. Optionally add `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`.
9. Deploy and test `https://your-domain.vercel.app/api/health`.

Do not add `PORT` on Vercel. Add `NODE_ENV=production` if needed.

---

## 🧪 Useful Commands

Build the frontend:

```bash
npm run build
```

Lint the frontend:

```bash
npm run lint --prefix Frontend
```

Check the API syntax:

```bash
node --check api/index.js
```

---

## 👨‍💻 Author

**Nabil Yusra Azura Pratama**

GitHub: [b1wwwwww](https://github.com/b1wwwwww)
