import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' // Fixed typo: createBrowerRouter to createBrowserRouter
import CreateTrip from './create-trip/CreateTrip.jsx' // Fixed typo: CreateTrip to CreateTrip
import Header from './components/custom/Header.jsx' 

const router = createBrowserRouter( // Fixed typo: createBrowerRouter to createBrowserRouter
  [
    {
      path: '/',
      element: <App/> // Fixed typo: Element to element
    },
    {
      path: '/create-trip',
      element: <CreateTrip/> // Fixed typo: Element to element
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
)
