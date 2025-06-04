
import { useEffect } from 'react';

const LoginPage = () => {
useEffect(() => {
  window.location.href = 'https://crmxeno.up.railway.app/login/oauth2/code/google';
}, []);

  return <p>Redirecting to Google login...</p>;
};

export default LoginPage;
