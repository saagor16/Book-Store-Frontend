# Book Store Frontend

This is the frontend of the **Book Store** application, built using React, Vite, and Tailwind CSS. The application allows users to browse and order books, manage their orders, and includes an admin panel for managing the store's content.

---

## Live Links

- **Frontend Live Site**: [Book Store App](https://book-store-app-ff563.web.app/)
- **Admin Panel**: [Admin Panel](https://book-store-app-ff563.web.app/admin)
  - **Username**: `admin`
  - **Password**: `123456`
- **Backend GitHub Repository**: [Book Store Backend](https://github.com/saagor16/Book-Store-Backend)

---

## Features

### User Panel

- **Browse Books**: View a list of books with detailed information.
- **Cart Management**: Add books to the cart and proceed to checkout.
- **Order Management**: Place and track orders through the user dashboard.
- **Authentication**: Login, logout, and register functionality.

### Admin Panel

- **Manage Books**: Add, delete, and update book information.
- **Order Management**: View the list of orders.
- **Dashboard**: View graphs and statistics on book additions and orders.
- **User-Friendly Interface**: Responsive and visually appealing UI for both admin and user panels.

---

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
VITE_API_KEY= "AIzaSyBZL_ne4xTpslFWIen4axkZ0QozB2DwA6U"
VITE_AUTH_DOMAIN= "book-store-app-ff563.firebaseapp.com"
VITE_PROJECT_ID= "book-store-app-ff563"
VITE_STORAGE_BUCKET= "book-store-app-ff563.firebasestorage.app"
VITE_MESSAGING_SENDERID= "7459842127"
VITE_APPID= "1:7459842127:web:07e8d67bc93f7f8323223a"
```

---

## Technologies Used

- **React**: Frontend library for building UI components.
- **Redux Toolkit**: State management.
- **Tailwind CSS**: Styling and responsive design.
- **Vite**: Build tool for faster development.
- **React Router DOM**: Routing and navigation.
- **Firebase**: Authentication and backend integration.
- **Chart.js**: Graphs and data visualization.
- **SweetAlert2**: Elegant alerts for user interactions.
- **Swiper**: Responsive sliders.

---

## Scripts

- Start the development server:
  ```bash
  npm run dev
  ```
- Build for production:
  ```bash
  npm run build
  ```
- Preview the production build:
  ```bash
  npm run preview
  ```

---

## Installation

1. Clone the repository:
   ```bash
   git clone <frontend-repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd book-store-frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env.local` file and configure environment variables as shown above.
5. Start the development server:
   ```bash
   npm run dev
   ```

---

## License

This project is licensed under the ISC License.

