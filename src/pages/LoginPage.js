
import { useEffect } from 'react';

const LoginPage = () => {
useEffect(() => {
  window.location.href = 'https://crmxeno.up.railway.app/oauth2/authorization/google';
}, []);

  return <p>Redirecting to Google login...</p>;
};

export default LoginPage;
