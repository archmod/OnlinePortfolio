# Online Portfolio

A personal portfolio/resume website built with **React + TypeScript** (frontend) and **Express + TypeScript** (backend).

## Project Structure

```
OnlinePortfolio/
├── client/          React + TypeScript frontend (Vite)
│   └── src/
│       ├── components/   Hero, Skills, Experience, Projects
│       ├── hooks/        usePortfolio data-fetching hook
│       └── types/        shared TypeScript interfaces
├── server/          Express + TypeScript backend
│   └── src/
│       ├── data/         portfolio data & types
│       └── routes/       API route handlers
└── package.json     root scripts to run both
```

## Tech Stack

- **Frontend:** React 19, TypeScript, Vite
- **Backend:** Express 5, TypeScript, Node.js
- **Dev tools:** Nodemon, ts-node, ESLint

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Install Dependencies

```bash
# Server
cd server && npm install

# Client
cd client && npm install
```

### Run in Development

```bash
# Start both frontend and backend
npm run dev

# Or individually
npm run dev:server   # Express on http://localhost:4000
npm run dev:client   # Vite on http://localhost:5173
```

The Vite dev server proxies `/api` requests to the Express backend automatically.

### Build for Production

```bash
npm run build
```

This compiles the server TypeScript to `server/dist/` and builds the client to `client/dist/`.

## API Endpoints

| Method | Endpoint          | Description              |
| ------ | ----------------- | ------------------------ |
| GET    | `/api/health`     | Health check             |
| GET    | `/api/portfolio`  | Returns all portfolio data |

## Customizing Your Portfolio

Edit `server/src/data/portfolio.ts` to update your name, bio, skills, experience, and projects. The frontend fetches this data on load.

## License

ISC
