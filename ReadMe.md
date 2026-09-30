# TradeSphere

TradeSphere is a full-stack trading platform prototype that combines a brokerage-style landing page, a user sign-up/login flow, and an authenticated dashboard for viewing portfolio data. The project is split into three main parts:

- Frontend: public marketing site and account onboarding pages
- Dashboard: trading dashboard UI for portfolio, orders, holdings, positions, and funds
- Backend: Express + MongoDB API with authentication, protected routes, and portfolio data endpoints

This repository is designed as a learning/demo application for building a stock trading experience with React, Vite, Express, and MongoDB.

---

## Project Overview

TradeSphere demonstrates a simplified investment platform where users can:

- Visit a product-focused landing page
- Sign up / log in to an account
- Access a secured trading dashboard
- View holdings and positions
- Browse their orders and account funds
- Interact with a backend API that stores user and portfolio data

The project currently focuses on the application structure, authentication flow, and portfolio dashboard UI rather than a fully production-ready brokerage backend.

---

## Tech Stack

### Frontend (marketing site)
- React 19
- Vite
- React Router DOM

### Dashboard
- React 19
- Vite
- React Router DOM
- MUI components
- Chart.js + react-chartjs-2
- Axios

### Backend
- Node.js
- Express 5
- MongoDB with Mongoose
- JWT-based authentication
- Cookie-based session handling
- bcryptjs for password hashing
- CORS and dotenv support

---

## Repository Structure

```text
TradeSphere/
├── backend/
│   ├── index.js
│   ├── package.json
│   ├── model/
│   │   ├── HoldingsModel.js
│   │   ├── OrdersModel.js
│   │   ├── PositionsModel.js
│   │   └── UsersModel.js
│   ├── schemas/
│   │   ├── HoldingsSchema.js
│   │   ├── OrdersSchema.js
│   │   ├── PositionsSchema.js
│   │   └── UsersSchema.js
│   └── .env.example (if added locally)
├── dashboard/
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   └── src/
│       ├── App.jsx
│       ├── App.css
│       ├── components/
│       │   ├── Apps.jsx
│       │   ├── BuyActionWindow.jsx
│       │   ├── Dashboard.jsx
│       │   ├── DoughnoutChart.jsx
│       │   ├── Funds.jsx
│       │   ├── GeneralContext.jsx
│       │   ├── Holdings.jsx
│       │   ├── Home.jsx
│       │   ├── Menu.jsx
│       │   ├── Orders.jsx
│       │   ├── Positions.jsx
│       │   ├── Summary.jsx
│       │   ├── TopBar.jsx
│       │   ├── VerticalGraph.jsx
│       │   └── WatchList.jsx
│       └── data/
│           └── data.js
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   └── src/
│       ├── App.jsx
│       ├── Footer.jsx
│       ├── Navbar.jsx
│       ├── NotFound.jsx
│       ├── OpenAccount.jsx
│       ├── landingPage/
│       │   ├── about/
│       │   ├── home/
│       │   ├── pricing/
│       │   ├── products/
│       │   ├── signup/
│       │   └── support/
│       └── assets/
├── ReadMe.md
└── package.json (if present at root, if not, this repo is module-based by folder)
```

---

## Application Modules

### 1. Public frontend
The frontend app is the public-facing website and includes pages such as:

- Home
- About
- Products
- Pricing
- Support
- Sign up

This area is intended to market the platform and guide users into the onboarding flow.

### 2. Dashboard app
The dashboard app is the authenticated trading interface. It includes views for:

- Summary
- Orders
- Holdings
- Positions
- Funds
- Apps
- Watchlist

The dashboard uses routing to switch between these sections and includes chart-based portfolio visualization.

### 3. Backend API
The backend handles:

- User registration and login
- JWT creation and cookie-based authentication
- Protected requests using middleware
- Fetching holdings and positions for the logged-in user
- Saving new orders
- MongoDB integration for user and portfolio data

---

## Data Model

The backend uses Mongoose models for the core entities.

### Users
Stored in the `User` collection.

Fields include:
- `name`
- `email`
- `password` (hashed before save)
- `createdAt`

### Holdings
Stored in the `holding` collection.

Fields include:
- `userId`
- `name`
- `qty`
- `avg`
- `price`
- `net`
- `day`

### Positions
Used to represent open or active positions. The schema includes an associated `userId` and trade details such as product, qty, avg, price, net, and day.

### Orders
Used to save trade orders created by the user.

Fields include:
- `userId`
- `name`
- `qty`
- `price`
- `mode`

---

## Authentication Flow

The backend uses JWT-based authentication and stores the token in a cookie named `authToken`.

### Signup
Endpoint:
- `POST /auth/signup`

Flow:
1. Validate name, email, and password
2. Check if the user already exists
3. Hash the password
4. Create the user in MongoDB
5. Return success response with the new user metadata

### Login
Endpoint:
- `POST /auth/login`

Flow:
1. Find the user by email
2. Compare the supplied password to the stored hash
3. Create a JWT
4. Set `authToken` cookie
5. Return the authenticated user session

### Current user
Endpoint:
- `GET /auth/me`

Requires authentication via middleware and reads the user from the JWT payload.

### Logout
Endpoint:
- `POST /auth/logout`

Clears the `authToken` cookie.

---

## Protected Routes

The backend uses `requireAuth` middleware to guard access to user-specific data.

### Portfolio endpoints
- `GET /allHoldings`
- `GET /allPositions`
- `POST /newOrder`

These routes require the user to be authenticated and return data scoped to the logged-in `userId`.

---

## Environment Variables

Create a `.env` file inside the `backend` folder with the following values:

```env
PORT=8080
MONGO_URL=mongodb://127.0.0.1:27017/tradesphere
JWT_SECRET=your_super_secret_key_here
```

Notes:
- The backend listens on port `8080` by default
- The app is configured to accept CORS requests from `http://localhost:5173` and `http://localhost:5174`
- MongoDB must be running locally or you should provide a cloud MongoDB connection string

---

## Local Setup

### 1. Install backend dependencies
```bash
cd backend
npm install
```

### 2. Start the backend server
```bash
npm start
```

This starts the Express app with nodemon.

### 3. Install frontend dependencies
```bash
cd ../frontend
npm install
```

### 4. Run the marketing site
```bash
npm run dev
```

The frontend app typically runs on:
- `http://localhost:5173`

### 5. Install dashboard dependencies
```bash
cd ../dashboard
npm install
```

### 6. Run the dashboard app
```bash
npm run dev
```

The dashboard app typically runs on:
- `http://localhost:5174`

---

## Running the Full Project

To use the app end-to-end:

1. Start MongoDB
2. Start the backend from the `backend` folder
3. Start the public frontend from the `frontend` folder
4. Start the dashboard app from the `dashboard` folder
5. Sign up and log in through the frontend or dashboard flow
6. Access portfolio and orders data through authenticated API requests

---

## Notes on the Current Implementation

This codebase is a strong prototype and includes a few important implementation patterns:

- Authentication uses cookies and JWTs
- Data is scoped by `userId`
- The dashboard is modular and split into route-based sections
- The frontend and dashboard are separate Vite apps rather than a single SPA
- The backend contains trade and user data models, but some production concerns still need to be completed (for example, validation, broader error handling, and robust API versioning)

---

## Development Recommendations

To make this project more production-ready, the following improvements are recommended:

- Add automated tests with Vitest, React Testing Library, and MSW
- Add validation and sanitization for all API inputs
- Introduce proper route guards on the frontend side
- Add real market data integration or a stock API wrapper
- Improve error handling and global UI states
- Add order placement logic, trade execution simulation, or live portfolio updates
- Add environment-based config management for multiple deployments

---

## Example Future Enhancements

- Buy/sell order placement with validation
- Watchlist stock search and filtering
- Real-time portfolio performance charts
- Investment analytics and P&L summaries
- User profile and account settings
- Admin or broker-side dashboards

---

## License

This project currently does not include a formal license file. If this repo is intended for public distribution, it is recommended to add an appropriate open-source license such as MIT.

---

## Summary

TradeSphere is a trading platform prototype built across multiple React apps and a Node.js backend. It demonstrates portfolio-focused UI, user authentication, and MongoDB-backed data storage in a structure that is easy to extend into a more complete investing or brokerage product.

If you are continuing development on this project, the best next steps are to harden the API, add tests, and connect the dashboard to real trading data or an order-processing workflow.

    