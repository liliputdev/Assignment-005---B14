# 🧱 Dev Stack Builder

A modern and responsive React website that helps users explore different web technologies and build their own personalized technology stack. Users can view technology details, add technologies to their stack, and remove them whenever they want.

> **Dev Stack Builder** is designed as an interactive technology discovery and stack-building platform where users can explore technologies based on their category, rating, difficulty, and description.

## 🌐 Live Demo

**Live Website:** https://assignment-005-b14.vercel.app/

**GitHub Repository:** https://github.com/liliputdev/Assignment-005---B14

---

## 📸 Project Preview

![Dev Stack Builder Preview](./public/preview.png)

> Add your project screenshot as `preview.png` inside the `public` folder to display it here.

---

## 🚀 Technologies Used

* React.js
* TypeScript
* JavaScript (ES6+)
* Tailwind CSS
* DaisyUI
* React-Toastify
* JSON
* Vite

---

## 📦 Dependencies

The project uses the following major dependencies:

| Package            | Purpose                                              |
| ------------------ | ---------------------------------------------------- |
| **React**          | Building the user interface with reusable components |
| **React DOM**      | Rendering React components in the browser            |
| **React Toastify** | Displaying toast notifications                       |
| **Tailwind CSS**   | Utility-first CSS framework for styling              |
| **DaisyUI**        | Pre-built UI components for Tailwind CSS             |
| **Vite**           | Development server and production build tool         |
| **TypeScript**     | Static type checking and safer development           |
| **ESLint**         | Code quality and linting                             |

> All project dependencies and their exact versions are available in `package.json`.

---

## ✨ Features

### 1. Explore Technologies

Browse different technologies with useful information such as:

* Technology name
* Category
* Rating
* Difficulty level
* Description
* Technology icon

### 2. Build Your Own Stack

Create a personalized technology stack by adding technologies from the available list.

Users can:

* Add technologies to their stack
* Remove individual technologies
* Clear the entire stack

### 3. Responsive & Interactive UI

The website provides a responsive experience across:

* Mobile devices
* Tablets
* Desktop screens

It also includes interactive UI elements, loading states, and toast notifications.

### 4. Dynamic Technology Data

Technology information is loaded dynamically from JSON data, making the application easier to maintain and update.

### 5. Conditional Rendering

The **Your Stack** section dynamically changes depending on whether technologies have been selected.

### 6. User Feedback

Toast notifications provide immediate feedback when users interact with the stack.

---

## 🛠️ Getting Started

Follow the steps below to run the project locally.

### Prerequisites

Make sure you have the following installed on your computer:

* Node.js
* npm
* Git

You can verify your Node.js and npm installation with:

```bash
node -v
npm -v
```

---

## 💻 Installation & Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/liliputdev/Assignment-005---B14.git
```

### 2. Navigate to the Project Directory

```bash
cd Assignment-005---B14
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open the Application

After starting the development server, Vite will provide a local URL similar to:

```text
http://localhost:5173
```

Open the URL in your browser to use the application.

---

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 📁 Project Structure

```text
Assignment-005---B14/
│
├── public/
│   ├── assets/
│   └── preview.png
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── data/
│   └── ...
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

> The structure above represents the main project organization. Additional files and folders may be present depending on the implementation.

---

## 🔗 Relevant Links

| Resource              | Link                                                        |
| --------------------- | ----------------------------------------------------------- |
| **Live Website**      | https://assignment-005-b14.vercel.app/                      |
| **GitHub Repository** | https://github.com/liliputdev/Assignment-005---B14          |
| **README**            | https://github.com/liliputdev/Assignment-005---B14#readme   |
| **Activity**          | https://github.com/liliputdev/Assignment-005---B14/activity |

---

# 📚 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React components easier to write and understand.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component. **State** is data managed inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets us store and update data inside a React component. I used it to manage the selected technologies in the **Your Stack** section.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders. I used it to fetch and load the technology data from the JSON file when the website starts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. A unique key helps React efficiently update, add, or remove the correct item.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

I used it in the **Your Stack** section. If no technology is selected, an empty-stack message is shown. If technologies are selected, the selected items are displayed instead.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using **props**.

To send something back, the parent can pass a function as a prop. The child calls that function with the required data.

---

## 👨‍💻 Author

**Abdun Nur**

GitHub: https://github.com/liliputdev

---

## 📄 License

This project was created for educational and assignment purposes.
