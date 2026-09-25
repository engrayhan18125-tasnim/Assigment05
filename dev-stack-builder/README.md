# Dev Stack Builder

A responsive React website for exploring technologies and building a personal development stack.

## Technologies
- React.js
- JavaScript (ES6+)
- CSS
- React-Toastify
- Vite
- JSON

## Features
1. Responsive technology card grid with JSON data.
2. Add/remove technologies with duplicate protection and toast notifications.
3. Sticky "Your Stack" sidebar with Remove All functionality.

## React Questions

### 1. What is JSX, and why is it used in React?
JSX is a syntax that lets us write HTML-like UI inside JavaScript. It makes React components easier to read and build.

### 2. What is the difference between props and state?
Props are data passed from a parent to a child. State is data managed inside a component that can change over time.

### 3. What does useState do, and where was it used?
`useState` stores changing data in a component. It is used here for the technology list, selected stack, loading state, and mobile menu.

### 4. What does useEffect do, and why was it needed?
`useEffect` runs side effects after rendering. It was used to fetch the local JSON technology data when the app loads.

### 5. Why does every map item need a unique key?
React uses the key to identify list items efficiently when the list changes.

### 6. What is conditional rendering?
Conditional rendering means showing different UI based on a condition. Here, the empty stack message is shown when `stack.length === 0`.

### 7. How do parent and child components communicate?
A parent passes data/functions to a child through props. The child can call a function received through props to send an action back to the parent.
