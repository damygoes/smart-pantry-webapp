import LoginPage from '@pages/LoginPage';
import VerificationPage from '@pages/VerificationPage';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LoginPage />} />
      <Route path="/auth/verify-magic-link" element={<VerificationPage />} />
      <Route path="/dashboard" element={<div>Dashboard</div>} />
      <Route path="*" element={<div> Not Found Screen </div>} />
    </Route>
  )
);
