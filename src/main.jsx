import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { createHashRouter, RouterProvider } from 'react-router'
import { routing } from './routing/routing.js'

const myRouting = createHashRouter(routing)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={myRouting} />
  </StrictMode>
)
