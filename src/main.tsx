import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { RouterProvider } from 'react-router'
import router from './routes/index.tsx'
import KeycloakProvider from './providers/keycloak.tsx'

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)  
    
