import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' // Fixed typo: createBrowerRouter to createBrowserRouter

const router = createBrowserRouter( // Fixed typo: createBrowerRouter to createBrowserRouter
  [
    {
      path: '/',
      element: <App/> // Fixed typo: Element to element
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
)
