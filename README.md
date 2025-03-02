# payON Backend

The server-side application for payON - a modern digital payment platform designed to provide secure, reliable, and efficient payment processing services.

## Overview

payON Backend handles the core business logic, data management, and API services that power the payON payment platform. It provides secure authentication, transaction processing, account management, and integration with financial services.

## Features

- **User Authentication & Authorization**: Secure user registration, login, and role-based access control
- **Account Management**: Create and manage user payment accounts
- **Transaction Processing**: Handle money transfers, payments, and financial operations
- **Payment Gateway Integration**: Connect with external payment providers and banking systems
- **Security**: Implement encryption, data protection, and fraud prevention
- **Notifications**: Send transaction alerts and account updates
- **Data Analytics**: Track and analyze payment trends and user behavior
- **API Services**: RESTful endpoints for frontend and third-party integrations
- **Audit Logging**: Comprehensive logging for compliance and debugging

## Tech Stack

- **Node.js**: Runtime environment
- **Express.js**: Web application framework
- **MongoDB**: Primary database for user and transaction data
- **Mongoose**: MongoDB object modeling
- **JSON Web Tokens (JWT)**: Authentication and session management
- **bcrypt**: Password hashing
- **Winston**: Logging framework
- **Jest**: Testing framework
- **Docker**: Containerization
- **Redis**: Caching and rate limiting
- **Stripe/PayPal**: External payment processor integration

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- Redis (optional, for advanced caching)
- npm or yarn
- Git

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/harryhome1/payONbackend.git
   cd payONbackend
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Create environment configuration:
   Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/payon
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   STRIPE_API_KEY=your_stripe_api_key
   EMAIL_SERVICE=your_email_service_provider
   EMAIL_USER=your_email_username
   EMAIL_PASS=your_email_password
   ```

4. Start the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

5. The server will start on `http://localhost:5000`

## Project Structure

```
src/
├── config/         # Configuration files and environment setup
├── controllers/    # Request handlers and business logic
├── middleware/     # Custom middleware functions
├── models/         # Database schemas and models
├── routes/         # API route definitions
├── services/       # External service integrations and utilities
├── utils/          # Helper functions and utilities
├── validators/     # Input validation rules
├── app.js          # Express application setup
└── server.js       # Server entry point
```

## API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Authenticate user and return token
- `POST /api/auth/refresh` - Refresh authentication token
- `POST /api/auth/logout` - Logout user
- `POST /api/auth/forgot-password` - Send password reset email
- `POST /api/auth/reset-password` - Reset user password

### User Endpoints
- `GET /api/users/me` - Get current user profile
- `PUT /api/users/me` - Update user profile
- `GET /api/users/:id` - Get user by ID (admin only)
- `PUT /api/users/:id` - Update user (admin only)
- `DELETE /api/users/:id` - Delete user (admin only)

### Account Endpoints
- `GET /api/accounts` - Get user accounts
- `POST /api/accounts` - Create new account
- `GET /api/accounts/:id` - Get account details
- `PUT /api/accounts/:id` - Update account
- `DELETE /api/accounts/:id` - Delete account

### Transaction Endpoints
- `GET /api/transactions` - Get user transactions
- `POST /api/transactions` - Create new transaction
- `GET /api/transactions/:id` - Get transaction details
- `POST /api/transactions/transfer` - Transfer money between accounts
- `POST /api/transactions/payment` - Make payment to external recipient

### Payment Integration Endpoints
- `POST /api/payments/stripe/intent` - Create Stripe payment intent
- `POST /api/payments/stripe/webhook` - Handle Stripe webhook events

## Database Models

### User Model
- `email` - User's email address (unique)
- `password` - Hashed password
- `name` - User's full name
- `phone` - Contact number
- `role` - User role (user, admin)
- `isVerified` - Email verification status
- `createdAt` - Account creation timestamp

### Account Model
- `owner` - Reference to User
- `accountNumber` - Unique account identifier
- `accountType` - Type of account (checking, savings)
- `balance` - Current balance
- `currency` - Account currency
- `isActive` - Account status

### Transaction Model
- `transactionId` - Unique transaction identifier
- `sender` - Reference to Account
- `recipient` - Reference to Account
- `amount` - Transaction amount
- `currency` - Transaction currency
- `type` - Transaction type (transfer, payment, deposit)
- `status` - Transaction status (pending, completed, failed)
- `description` - Transaction description
- `timestamp` - Transaction time

## Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run seed` - Seed database with initial data
- `npm run docs` - Generate API documentation

## Deployment

### Docker Deployment
1. Build Docker image:
   ```
   docker build -t payon-backend .
   ```

2. Run Docker container:
   ```
   docker run -p 5000:5000 --env-file .env payon-backend
   ```

### Cloud Deployment Options
- AWS Elastic Beanstalk
- Google Cloud Run
- Heroku
- Digital Ocean

## Testing

```
npm test
```

The testing suite uses Jest and Supertest to verify API functionality and business logic.

## Security Considerations

- All passwords are hashed using bcrypt
- API endpoints are protected with JWT authentication
- Input validation is performed on all requests
- Rate limiting is implemented to prevent abuse
- Sensitive data is encrypted at rest and in transit
- Regular security audits and code reviews

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request
