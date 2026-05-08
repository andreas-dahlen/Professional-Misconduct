import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './styles/index.css'
import { createHashRouter, RouterProvider } from 'react-router'
import { routing } from './routing/routing.js'

const myRouting = createHashRouter(routing)
// window.history.scrollRestoration = 'manual'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={myRouting} />
  </StrictMode>
)
