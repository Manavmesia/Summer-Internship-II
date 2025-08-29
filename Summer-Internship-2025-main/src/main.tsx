// Import required libraries and components
import React from 'react' // React library for building user interfaces
import ReactDOM from 'react-dom/client' // React DOM for rendering components
import App from './App.tsx' // Main application component
import './index.css' // Global styles and Tailwind CSS

// Render the main App component to the DOM
ReactDOM.createRoot(document.getElementById('root')!).render( // Creates React root and renders app
  <App /> // Main application component
)
