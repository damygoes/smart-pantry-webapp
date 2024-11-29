import { ENV_VARIABLES } from '@config/env';
import axios from 'axios';
import { useState } from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  // Handle email login (magic link)
  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${ENV_VARIABLES.BASE_URL}/api/v1/auth/login`, { email });
      alert(response.data.message);
    } catch (err) {
      setError('Error sending magic link');
      console.error(err);
    }
  };
  // Handle Google login
  const handleGoogleLogin = async (response: { tokenId: string }) => {
    const { tokenId } = response;
    try {
      const googleResponse = await axios.post(`${ENV_VARIABLES.BASE_URL}/api/v1/auth/google/callback`, { tokenId });
      alert('Google login successful');
      console.log(googleResponse.data);
    } catch (err) {
      setError('Google login failed');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      
      {error && <div style={{ color: 'red' }}>{error}</div>}
      
      <form onSubmit={handleEmailLogin}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Login with Email</button>
      </form>
      
      <div style={{ marginTop: '20px' }}>
        <GoogleLogin
          clientId={ENV_VARIABLES.GOOGLE_CLIENT_ID} // Replace with your Google client ID
          buttonText="Login with Google"
          onSuccess={(response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
            if ('tokenId' in response) {
              handleGoogleLogin({ tokenId: response.tokenId });
            }
          }}
          onFailure={(error) => console.log('Google login error:', error)}
          cookiePolicy="single_host_origin"
        />
      </div>
    </div>
  );
};

export default LoginForm;
