# 🧱 Dev Stack Builder

A modern and responsive React website that helps users explore different web technologies and build their own personalized technology stack. Users can view technology details, add technologies to their stack, and remove them whenever they want.

## 🚀 Technologies Used

* React.js
* JavaScript (ES6+)
* Tailwind CSS
* DaisyUI
* React-Toastify
* JSON
* Vite

## ✨ Features

1. **Explore Technologies**
   Browse different technologies with their name, category, rating, difficulty, description, and icon.

2. **Build Your Own Stack**
   Add technologies to your personal stack and remove individual technologies or clear the entire stack.

3. **Responsive & Interactive UI**
   The website works smoothly on mobile, tablet, and desktop devices with loading states and toast notifications.

---

# 📚 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React components easier to write and understand.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.
**State** is data managed inside a component that can change over time.

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
