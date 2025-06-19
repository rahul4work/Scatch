# 👜 Scatch - Online Bag & Backpack Store

---

## 📑 Table of Contents
- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Mobile Responsiveness](#mobile-responsiveness)
- [Screenshots](#screenshots)
- [Installation Guide](#installation-guide)
- [Usage Instructions](#usage-instructions)
- [Technology Stack](#technology-stack)
- [API Documentation](#api-documentation)
- [Development Roadmap](#development-roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

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

## 📱 Mobile Responsiveness

Scatch now delivers an optimized experience across all device sizes:

### Mobile-First Design
- **Fully responsive layouts** using Tailwind CSS breakpoints
- **Adaptive components** that reorganize for smaller screens
- **Touch-friendly** buttons and form elements

### Key Mobile Optimizations
- **Navigation**: Simplified mobile menu with hamburger icon
- **Product Grid**: Stacks to single column on small screens
- **Cart Interface**: Streamlined for easy mobile checkout
- **Forms**: Larger tap targets and mobile-optimized inputs

### Technical Implementation
- Used `sm:` and `md:` Tailwind prefixes for responsive behavior
- Implemented flexible grid systems (`grid-cols-1` on mobile)
- Adjusted font sizes and padding for smaller screens
- Optimized image loading for mobile bandwidth

---

## 🖼️ Screenshots

| Feature            | Desktop Preview | Mobile Preview 1 |                  |
|--------------------|-----------------|------------------|------------------|
| Authentication     | ![Desktop Auth](https://github.com/user-attachments/assets/1f32829a-e9af-4cd1-8c8b-b715cf96d09b) | ![Mobile Auth 1](https://github.com/user-attachments/assets/807877f7-605c-4ab3-861a-a46b3e2d83a6) | ![Mobile Auth 2](https://github.com/user-attachments/assets/ca5a24ce-ac8c-4ff4-acc6-c29710a63edc) |
| Product Catalog    | ![Desktop Catalog](https://github.com/user-attachments/assets/2364fd4d-02d9-4f7d-8f3a-015499a73b91) | ![Mobile Catalog](https://github.com/user-attachments/assets/54f57c86-84f1-47cc-8b6f-d3a8cd546c56) | - |
| Shopping Cart      | ![Desktop Cart](https://github.com/user-attachments/assets/6da9fb68-8645-4ddb-8351-d0b82f1cbf05) | ![Mobile Cart 1](https://github.com/user-attachments/assets/9d63c1a6-e5b8-4271-9de4-157567e724fc) | ![Mobile Cart 2](https://github.com/user-attachments/assets/0a16d037-a4e3-48e2-8109-7d7e01b42c48) |
| Payment Methods    | ![Desktop Payment](https://github.com/user-attachments/assets/12553ac3-e0c7-411c-9579-a3a50da29e8d) | ![Mobile Payment](https://github.com/user-attachments/assets/48b1269f-1fbc-44ac-8e44-660dfdda5151) | - |
| Admin Dashboard    | ![Desktop Admin](https://github.com/user-attachments/assets/15a74f63-e693-44dc-bd8c-ff0a24e479f1) | ![Mobile Admin 1](https://github.com/user-attachments/assets/f1fa9fee-7667-45b6-8b0c-40d8847c567e) | ![Mobile Admin 2](https://github.com/user-attachments/assets/83c9962d-755c-42a3-b945-5094917a9b2b) |

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

---

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
3. **Make your changes and commit**:
   ```bash
   git commit -m "Add your feature description"
   ```
4. **Push to your fork**:
   ```bash
   git push origin feature/your-feature
   ```
5. **Create a Pull Request**

---


## 📬 Contact

**👤 Rahul Kumar**  
📧 Email: [heyyrj98@gmail.com](mailto:heyyrj98@gmail.com)  
🐙 GitHub: [@rahul4work](https://github.com/rahul4work)  

