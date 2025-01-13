# Fake-store

This is a React-based application with a focus on performance, clean code, and modern web development practices. The app includes features like product listing with filters, cart functionality, and an order form.

## 🚀 Tech Stack

- **Frontend**: React.js (with TypeScript)
- **Build Tool**: Vite
- **State Management**: Redux Toolkit (with `redux-persist` for local storage)
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form
- **Code Quality and Formatting**:
  - **Prettier**: For consistent code formatting.
  - **ESLint**: For maintaining clean and error-free code.
  - **Husky**: Automates pre-commit checks to ensure high-quality code.

---

## 🎨 Features

### 1. **Main Page: Product List**

- Displays a list of products fetched via an API request.
- Products are saved in Redux state for efficient state management.
- **Filters**:
  - Filter products by name.
  - Filter products by category.
- **Modal**:
  - Clicking on a product opens a modal window with additional details.
  - Modal includes a button to add the product to the cart.

### 2. **Cart Functionality**

- **Modal Window**:
  - Opens when clicking on the cart icon in the header.
  - Displays a list of selected products with their quantities and prices.
  - Provides the ability to change the quantity of products.
- **Total Price**:
  - Shows the total price of the items in the cart.
- **Order Page Navigation**:
  - A button allows users to navigate to the order page.
  - On the order page:
    - Users see the list of selected products.
    - A form is provided to submit the order.
    - On form submission:
      - Displays an alert.
      - Logs the order object to the console.
      - Clears the cart state in Redux.

### 3. **404 Page**

- A simple "Page Not Found" screen for invalid routes.

---

## Installation

1. **Clone the repository:**

   To get started, clone the repository to your local machine.

   ```bash
   git clone https://github.com/KatiaOcheretiana/fake-store.git
   cd fake-store
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create environment variables:**
   In the root directory, create a .env.local file. This file will store your sensitive data such as API URLs and keys.
   https://dummyjson.com - free online REST API

   ```bash
   VITE_APP_KEY='https://dummyjson.com'
   ```

## Running the Application

1. **Running the Application**
   Start the development server:

```bash
 npm run dev
```

2. **Access the app:**
   Open your browser and navigate to:

```bash
http://localhost:5173
```
