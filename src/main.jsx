import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

/* const clerk_key = import.meta.env.VITE_CLERK_KEY; */
const clerk_key = import.meta.env.VITE_CLERK_KEY;

const root = createRoot(document.getElementById('root'));

if (clerk_key) {
  root.render(
    <StrictMode>
      <BrowserRouter>
        <ClerkProvider publishableKey={clerk_key}>
          <App hasClerk={true} />
        </ClerkProvider>
      </BrowserRouter>
    </StrictMode>
  );
} else {
  console.warn('VITE_CLERK_KEY not found — rendering without Clerk (authentication disabled).');
  root.render(
    <StrictMode>
      <BrowserRouter>
        <App hasClerk={false} />
      </BrowserRouter>
    </StrictMode>
  );
}
