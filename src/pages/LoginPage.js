import React from 'react';

const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href = 'https://crmxeno.up.railway.app/oauth2/authorization/google';
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginCard}>
        <div style={styles.logo}>
          <h1 style={styles.logoText}>Mini-CRM</h1>
          <p style={styles.subtitle}>Manage your marketing campaigns with ease</p>
        </div>
        
        <div style={styles.loginSection}>
          <h2 style={styles.loginTitle}>Welcome Back</h2>
          <p style={styles.loginDesc}>Sign in to access your CRM dashboard</p>
          
          <button onClick={handleGoogleLogin} style={styles.googleButton}>
            <svg width="20" height="20" viewBox="0 0 24 24" style={styles.googleIcon}>
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f0f15 0%, #1a1a2e 100%)',
    fontFamily: "'Segoe UI', 'Roboto', 'Oxygen', sans-serif",
    padding: '2rem',
  },
  loginCard: {
    background: 'rgba(26, 26, 35, 0.8)',
    borderRadius: '16px',
    padding: '3rem',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  logo: {
    marginBottom: '2rem',
  },
  logoText: {
    fontSize: '2.5rem',
    fontWeight: '700',
    background: 'linear-gradient(90deg, #60A5FA, #A78BFA)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    margin: '0 0 0.5rem 0',
  },
  subtitle: {
    color: '#a0a0c0',
    fontSize: '1rem',
    margin: 0,
  },
  loginSection: {
    marginTop: '2rem',
  },
  loginTitle: {
    color: '#e0e0e0',
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
  },
  loginDesc: {
    color: '#a0a0c0',
    fontSize: '0.9rem',
    marginBottom: '2rem',
  },
  googleButton: {
    width: '100%',
    background: '#fff',
    color: '#333',
    border: 'none',
    borderRadius: '8px',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  googleIcon: {
    flexShrink: 0,
  },
};

export default Login;
