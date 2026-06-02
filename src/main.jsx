import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

const clerk_key = import.meta.env.VITE_CLERK_KEY;

console.log(clerk_key);
if(!clerk_key){
  throw new Error("Key Was Not Found")
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ClerkProvider publishableKey={clerk_key}>
        <App />
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>
)
