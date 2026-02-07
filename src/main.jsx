import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import { ConfigProvider } from 'antd';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <ConfigProvider
        tooltip={{
          unique: true,
        }}
      >
        <App />
      </ConfigProvider>
    </StrictMode>
  </BrowserRouter>
)
