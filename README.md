# 👜 Scatch - Online Bag & Backpack Store

---

## 📑 Table of Contents
- [Project Overview](##project-overview)
- [Key Features](##key-features)
- [Screenshots](##screenshots)
- [Installation Guide](##installation-guide)
- [Usage Instructions](##usage-instructions)
- [Technology Stack](##technology-stack)
- [API Documentation](##api-documentation)
- [Development Roadmap](##development-roadmap)
- [Contributing](##contributing)
- [License](##license)
- [Contact](##contact)

---

## 📦 Project Overview

**Scatch** is a full-featured e-commerce web application specializing in bags and backpacks. Built with Node.js and Express, it offers:

- 🔐 User authentication system  
- 🛍️ Product catalog management  
- 🛒 Shopping cart functionality  
- 🛠️ Admin dashboard for product management  
- 📱 Responsive design for all devices

---

## 🚀 Key Features

### 👤 User Experience
- ✅ Secure JWT authentication (login/signup)
- ✅ Intuitive product browsing interface
- ✅ Interactive shopping cart with real-time updates
- ✅ Responsive design for mobile/desktop

### 🔧 Admin Capabilities
- 🛠️ Complete product CRUD operations
- 🎨 Customizable product card styling
- 📊 Inventory management system
- 📦 Bulk product upload capability

### ⚙️ Technical Highlights
- ⚡ MongoDB database with Mongoose
- 🖼️ Image uploads with Multer
- 📝 Dynamic views using EJS templates
- 🔔 Flash message notifications

---

## 🖼️ Screenshots

| Feature            | Preview |
|--------------------|---------|
| Authentication     | ![Auth](https://github.com/user-attachments/assets/1f32829a-e9af-4cd1-8c8b-b715cf96d09b) |
| Product Catalog    | ![Catalog](https://github.com/user-attachments/assets/37e5e2bd-814e-4e38-b091-2f5c3fff5397) |
| Shopping Cart      | ![Cart](https://github.com/user-attachments/assets/137f2957-cd77-4ced-84d6-871d872ac657) |
| Admin Dashboard    | ![Admin](https://github.com/user-attachments/assets/2d434146-f3a6-49bf-adb8-081701c7750e) |

---

## 🛠️ Installation Guide

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/scatch.git
cd scatch
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
```bash
cp .env.example .env
# Edit .env with your configuration
```

### 4. Start the Application
```bash
npm start
```



## 📘 Usage Instructions

### 🛍️ For Shoppers

- Create an account or login  
- Browse products using category filters  
- Add items to your cart  
- Proceed to checkout  

### 🛠️ For Administrators

- Login with admin credentials  
- Access admin dashboard at `/admin`  
- Manage products, inventory, and user accounts  

---

## 🧰 Technology Stack

### Frontend Layer

- EJS Templating Engine  
- Tailwind CSS Framework  
- Vanilla JavaScript + DOM API  

### Backend Layer

- Node.js Runtime  
- Express.js Framework  
- MongoDB Database  
- Mongoose ODM  

### Key Packages

- `multer` for file uploads  
- `connect-flash` for notifications  
- `express-session` for auth  
- `bcryptjs` for password hashing  

---

## 📡 API Documentation

### 🔐 Authentication

| Endpoint         | Method | Description        |
|------------------|--------|--------------------|
| `/auth/login`    | POST   | User login         |
| `/auth/register` | POST   | User registration  |
| `/auth/logout`   | GET    | Session termination|

### 📦 Products

| Endpoint            | Method | Description          |
|---------------------|--------|----------------------|
| `/products`         | GET    | List all products    |
| `/products/:id`     | GET    | Get product details  |
| `/products/create`  | POST   | Create new product   |

### 🛒 Cart

| Endpoint           | Method | Description         |
|--------------------|--------|---------------------|
| `/cart`            | GET    | View cart contents  |
| `/cart/add/:id`    | POST   | Add item to cart    |
| `/cart/remove/:id` | DELETE | Remove item         |

---

## 🚧 Development Roadmap

### 🔜 Next Features

- 💳 Payment gateway integration  
- ⭐ Product review system  
- 🚚 Order tracking  
- 💖 Wishlist functionality  

### 🔮 Future Improvements

- 🚀 Migrate to React frontend  
- 🔗 Implement GraphQL API  
- ⚙️ Add CI/CD pipeline  
- 🐳 Dockerize application  

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**  
2. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature
   ```



## 📄 License

This project is licensed under the **MIT License**.  
See the [LICENSE](./LICENSE) file for more information.

## 📬 Contact

**👤 Rahul Kumar**  
📧 Email: [heyyrj98@gmail.com](mailto:heyyrj98@gmail.com)  
🐙 GitHub: [@rahul-kumar-1905](https://github.com/rahul-kumar-1905)  

🔗 **Project Link**: [Scatch GitHub Repository](https://github.com/rahul-kumar-1905/scatch)

---

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![GitHub Repo stars](https://img.shields.io/github/stars/rahul-kumar-1905/scatch?style=social)](https://github.com/rahul-kumar-1905/scatch/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/rahul-kumar-1905/scatch?style=social)](https://github.com/rahul-kumar-1905/scatch/network)
