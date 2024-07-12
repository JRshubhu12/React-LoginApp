import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('registeredUsername');
    const storedPassword = localStorage.getItem('registeredPassword');
    const storedEmail = localStorage.getItem('registeredEmail');
    if (storedUsername && storedPassword) {
      setUsername(storedUsername);
      setPassword(storedPassword);
      setEmail(storedEmail);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsername = localStorage.getItem('registeredUsername');
    const storedPassword = localStorage.getItem('registeredPassword');
    if (username === storedUsername && password === storedPassword) {
      navigate('/dashboard', { state: { username, email } });
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>BRC Login Page</h1>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputContainer}>
          <label htmlFor="username" style={styles.label}>Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputContainer}>
          <label htmlFor="password" style={styles.label}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Login</button>
      </form>
      <div style={styles.linkContainer}>
        <Link to="/Register" style={styles.link}>Don't have an account? Register here</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
  },
  inputContainer: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    display: 'block',
  },
  input: {
    width: '200px',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  linkContainer: {
    marginTop: '15px',
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none',
  },
  header: {
    color: 'darkgreen',
    fontSize: '40px',
    position: 'absolute',
    top : '25px',
    textDecoration: 'none',
  },
};

export default Login;
