# 🔐 Password test API

<div align="center">

**A robust Node.js REST API for seamless user authentication and management**

[📖 Documentation](#-api-endpoints) • [🚀 Quick Start](#-quick-start) • [🛠️ Installation](#️-installation) • [🧪 Testing](#-testing)

---

</div>

## ✨ Features

- 🔒 **Secure Authentication** - JWT-based user authentication
- 📝 **User Registration** - Complete signup flow with validation
- 🔑 **Login System** - Secure user login with password hashing
- 👤 **User Profile** - Get authenticated user information
- 🛡️ **Input Validation** - Comprehensive request validation
- 🎯 **Clean Architecture** - Well-organized, scalable codebase
- 📊 **MongoDB Integration** - Mongoose ODM for database operations

## 🏗️ Project Structure

```
src/
├── 📂 api/
│   ├── 🎮 controllers/     # Handle incoming requests
│   │   └── user.controller.js
│   ├── 🛡️ middleware/      # Authentication & validation middleware
│   ├── 📊 models/         # Mongoose data models
│   │   └── user.model.js
│   ├── 🛣️ routes/         # API route definitions
│   │   └── user.routes.js
│   ├── 🔧 services/       # Business logic layer
│   └── ✅ validators/     # Input validation schemas
├── ⚙️ config/            # Configuration files
│   └── db.config.js
├── 🔨 utils/             # Utility functions
│   └── password.utils.js
├── 🧪 test/              # Test suites
└── 📄 .env               # Environment variables
```

## 🚀 Quick Start

### Prerequisites

- 📦 **Node.js** (v14 or higher)
- 🍃 **MongoDB** (local or cloud instance)
- 📋 **npm** or **yarn**

### ⚡ One-Command Setup

```bash
git clone <your-repo-url>
cd user-management-api
npm install
cp .example.env .env
npm run dev
```

## 🛠️ Installation

### 1️⃣ Clone the Repository

```bash
git clone <your-repo-url>
cd user-management-api
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Environment Configuration

Copy the example environment file and configure your settings:

```bash
cp .example.env .env
```

### 4️⃣ Configure Environment Variables

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/user-management-db

# Security
JWT_SECRET=your-super-secure-jwt-secret-key
JWT_EXPIRES_IN=7d

# Optional: Additional Configuration
BCRYPT_ROUNDS=12

# Generate JWT_SECERT
openssl rand -base64 32


```

> 🔐 **Generate a secure JWT secret:**
> ```bash
> openssl rand -base64 32
> ```

## 🚦 Running the Server

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

### With Custom Port
```bash
PORT=3000 npm start
```

## 📡 API Endpoints

### 🔓 Authentication Routes

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/api/users/signup` | 📝 Register new user | ❌ |
| `POST` | `/api/users/login` | 🔑 User login | ❌ |
| `GET` | `/api/users/me` | 👤 Get current user profile | ✅ |

### 📋 Request/Response Examples

#### Register User
```http
POST /api/users/signup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

#### Login User
```http
POST /api/users/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

#### Get User Profile
```http
GET /api/users/me
Authorization: Bearer <your-jwt-token>
```

## 🧪 Testing

### Run All Tests
```bash
npm test
```

### Run Tests with Coverage
```bash
npm run test:coverage
```

### Run Tests in Watch Mode
```bash
npm run test:watch
```

## 🛡️ Security Features

- 🔐 **Password Hashing** - Crypto
- 🎫 **JWT Tokens** - Stateless authentication
- ✅ **Input Validation** - Comprehensive request validation
- 🛡️ **CORS Protection** - Cross-origin request security
- 🔒 **Environment Variables** - Secure configuration management

## 📚 Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **Node.js** | Runtime Environment | v16+ |
| **Express.js** | Web Framework | ^5.1.0 |
| **MongoDB** | Database | ^5.0+ |
| **Mongoose** | ODM | ^8.16.4 |
| **Jsonwebtoken** | Authentication | ^9.0.2 |
| **@dotenvx/dotenv** | Environment Config | ^1.48.0 |
  **Nodemon** | automatically restart | ^3.1.10

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. 🍴 Fork the repository
2. 🌟 Create a feature branch: `git checkout -b feature/amazing-feature`
3. 💾 Commit changes: `git commit -m 'Add amazing feature'`
4. 📤 Push to branch: `git push origin feature/amazing-feature`
5. 🔄 Open a Pull Request

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.


<div align="center">

**⭐ If you found this project helpful, please consider giving it a star!**

Made with ❤️ by [Rishi Bose](https://github.com/RishiBose961)

</div>