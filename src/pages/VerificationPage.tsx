import axiosClient from '@services/axios/axiosClient';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const VerificationPage = () => {

    const location = useLocation(); // Access the current location
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const verifyMagicLink = async () => {
      const params = new URLSearchParams(location.search); // Parse query string
      const token = params.get('token'); // Get the token from the query string

      if (!token) {
        setMessage('Invalid or missing token.');
        return;
      }

      try {
        // Call your backend API to verify the magic link
        const response = await axiosClient.post('/auth/verify-magic-link', { token });

        if (response.status === 200) {
            setMessage('Verification successful! Redirecting...');
            navigate('/dashboard');
        } else {
            setMessage('Verification failed. The link may be invalid or expired.');
            navigate('/');
        }
        // Redirect or perform further actions
      } catch (error) {
        console.error('Error verifying magic link:', error);
        setMessage('Verification failed. The link may be invalid or expired.');
      }
    };

    verifyMagicLink();
  }, [location.search, navigate]);
  return (
    <div>{message || 'Verifying...'}</div>
  )
}

export default VerificationPage