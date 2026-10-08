# OctoFit Tracker

OctoFit Tracker is split into a React presentation tier, an Express API tier,
and a MongoDB data tier.

| Tier | Port | Start command |
| --- | ---: | --- |
| Frontend (Vite) | 5173 | `npm run dev --prefix octofit-tracker/frontend` |
| Backend (Express) | 8000 | `npm run dev --prefix octofit-tracker/backend` |
| MongoDB | 27017 | Start the local MongoDB service |

The backend connects to `mongodb://127.0.0.1:27017/octofit_db` by default. Set
`MONGODB_URI` to override the connection string. The API health endpoint is
`/api/health`.

Install dependencies with:

```bash
npm install --prefix octofit-tracker/frontend
npm install --prefix octofit-tracker/backend
```

Build the frontend with `npm run build --prefix octofit-tracker/frontend` and
the backend with `npm run build --prefix octofit-tracker/backend`.
