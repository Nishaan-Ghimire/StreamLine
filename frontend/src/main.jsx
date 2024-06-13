import React from 'react'
import ReactDOM from 'react-dom/client'
import { PrimeReactProvider } from 'primereact/api';
import App from './App.jsx'
import './index.css'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {BrowserRouter} from 'react-router-dom'
// import { DarkModeContextProvider } from './context/darkModeContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
     {/* <PrimeReactProvider> */}
     {/* <DarkModeContextProvider> */}
    <App />
    {/* </DarkModeContextProvider> */}
    {/* </PrimeReactProvider> */}
    {/* </BrowserRouter> */}
  </React.StrictMode>,
)
