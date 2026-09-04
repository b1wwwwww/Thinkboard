# ThinkBoard

A full-stack note-taking application built with the MERN stack.

## Features

- Create, read, update, and delete notes
- Responsive React interface
- REST API with Express
- MongoDB Atlas persistence
- Optional Upstash rate limiting

## Tech Stack

- Frontend: React, Vite, Axios, React Router, Tailwind CSS, DaisyUI
- Backend: Node.js, Express, MongoDB, Mongoose
- Optional service: Upstash Redis

## Project Structure

```text
MERN-THINKBOARD/
├── api/                 # Vercel serverless API entrypoint
├── Backend/             # Express API for local development
│   └── src/
├── Frontend/            # React and Vite application
│   └── src/
├── package.json         # Root build script for Vercel
└── vercel.json          # Vercel routing and build configuration
```

## Requirements

- Node.js 18 or newer
- npm
- A MongoDB Atlas connection string

Upstash Redis is optional. The application works without it, but rate limiting will be disabled.

## Installation

Clone the repository and enter the project directory:

```bash
git clone https://github.com/b1wwwwww/mern-Thinkboard.git
cd mern-Thinkboard
```

Install dependencies for both applications:

```bash
npm install --prefix Backend
npm install --prefix Frontend
```

## Environment Variables

Create `Backend/.env` from `Backend/.env.example` and set at least `MONGO_URI`:

```dotenv
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>/<database>
PORT=5001
NODE_ENV=development
```

To enable the optional rate limiter, also add:

```dotenv
UPSTASH_REDIS_REST_URL=https://<your-upstash-url>
UPSTASH_REDIS_REST_TOKEN=<your-upstash-token>
```

Never commit `.env` files or real credentials. MongoDB Atlas must allow connections from your development machine.

## Run Locally

Run the backend and frontend in two separate terminals.

Terminal 1:

```bash
npm run dev --prefix Backend
```

The backend runs at `http://localhost:5001`.

Terminal 2:

```bash
npm run dev --prefix Frontend
```

Open `http://localhost:5173` in your browser.

## Useful Commands

Build the frontend from the repository root:

```bash
npm run build
```

Lint the frontend:

```bash
npm run lint --prefix Frontend
```

## Deploy To Vercel

This repository is configured for one Vercel project containing the frontend and serverless API.

1. Import the repository in Vercel.
2. Set Root Directory to the repository root (`.`).
3. Set Framework Preset to `Other`.
4. Set Build Command to `npm run build`.
5. Set Install Command to `npm install`.
6. Leave Output Directory empty; `vercel.json` sets it to `Frontend/dist`.
7. Add `MONGO_URI` as a production environment variable.
8. Optionally add the two `UPSTASH_REDIS_*` variables.
9. Deploy and test `/api/health` on the generated Vercel domain.

`NODE_ENV=production` may be added as a Vercel configuration variable. Do not add `PORT` on Vercel.

## Author

Nabil Yusra Azura Pratama

GitHub: https://github.com/b1wwwwww
