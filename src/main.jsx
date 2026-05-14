import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import './index.css'
import {ListingsProvider} from './context/ListingsContext'
import router from './app/router'
import { Toaster } from "react-hot-toast"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>

      <ListingsProvider>

        <Toaster position="top-right" />

      <RouterProvider router={router} />

      </ListingsProvider>

    </AuthProvider>
    
  </React.StrictMode>,
)