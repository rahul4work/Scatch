# Project Title: Scatch

## Description

**Scatch** is a web application designed for managing an online store specifically for buying and selling bags and backpacks. Users can browse through a variety of products, add them to their cart, and create new product listings (for admin users). The application includes user authentication with login and logout features, ensuring that only authorized users can create and manage products.

## Table of Contents
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)

## Usage

### Accessing the Application

1. **Launch the Application**: 
   - After starting the server, open your web browser and navigate to `http://localhost:3000/`.

### User Registration and Login

2. **Register a New User**:
   - On the login page, there is an option to register a new user.
   - Fill out the required details, including your name, email, and password.
   - Submit the form to create a new account.
   - here's the screenshot
![signUp_to_scatch](https://github.com/user-attachments/assets/3cfcf725-fd00-4caa-ba4a-9bab220155c5)


3. **Login**:
   - After successful registration, please login.
   - Enter your registered email and password.
   - Click on the "Login" button to access your account.
   - screenshot of login
![login_to_scatch](https://github.com/user-attachments/assets/45674bcb-6311-41f2-8ffb-2cecbafe0199)

    ## Screenshot of login/signup
    ![login_sign_page_ss](https://github.com/user-attachments/assets/1f32829a-e9af-4cd1-8c8b-b715cf96d09b)


### Navigating the Application

4. **Home Page / Shop Page**:
   - Upon logging in, you will be redirected to the home page.
   - Here, you can find an overview of the application and access different sections.
   - Click on the "Shop" link to view available bags and backpacks.
   - Browse through the products displayed, which include images, prices, and discounts.
   - home_page/shop_page screenshot
![homePage_shopRoute_ss](https://github.com/user-attachments/assets/37e5e2bd-814e-4e38-b091-2f5c3fff5397)


5. **Adding Products to Cart**:
   - While on the shop page, you can select products to add to your cart.
   - Click the "+" button for any product you wish to purchase.

6. **View Your Cart**:
   - Navigate to the "Cart" page to see the items you have added.
   - The cart will display the products, their prices, and any applicable discounts.
   - You can also see the total bill calculated, which includes any shipping fees.
![cart_page_ss](https://github.com/user-attachments/assets/137f2957-cd77-4ced-84d6-871d872ac657)


### Admin Functionality

7. **Creating Products**:
   - If you have admin privileges, you can navigate to `/products/create`.
   - Fill out the product creation form with necessary details such as name, price, discount, colors, and upload an image.
   - After submitting the form, the new product will be added to the shop for all users to see.
![product-create_Route_ss](https://github.com/user-attachments/assets/2d434146-f3a6-49bf-adb8-081701c7750e)


8. **Logging Out**:
   - To log out, you can use the logout option, which will take you back to the login page.

## Features

- **Login/Signup Page**: Secure user authentication for both new and returning users.
- **Shop Page**: Main home page after login, featuring a wide selection of bags and backpacks for browsing.
- **Cart Page**: Displays selected products along with their total amount, allowing users to review their purchases.
- **Admin Functionality**: Admin users can create new products using the `/products/create` route, enabling efficient inventory management.
- **Core Purpose**: The website serves as a platform for buying and selling bags and backpacks, providing a user-friendly shopping experience.

## Technologies Used

- **Node.js** - JavaScript runtime for server-side programming.
- **Express.js** - Web framework for building APIs.
- **MongoDB** - NoSQL database for data storage.
- **EJS** - Templating engine for rendering views.
- **Multer** - Middleware for handling multipart/form-data, used for file uploads.
- **Connect-Flash** - Middleware for flash messages.


- **Rahul Kumar**: [Email](mailto:heyyrj98@gmail.com)
