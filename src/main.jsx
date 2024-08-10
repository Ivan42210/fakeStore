import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ThemeProvider} from '@mui/material/styles';
import { theme } from './Js/theme.js';
import { AuthProvider } from './AuthContext/index.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
          <ThemeProvider theme={theme}>
              <AuthProvider>
                <App /> 
              </AuthProvider>
          </ThemeProvider>
  </React.StrictMode>,
)
