import React from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const { username, email } = location.state || { username: 'Guest', email: '' };

  return (
    <div style={styles.container}>
      <h2>Welcome, {username}!</h2>
      <p>Email: {email}</p>
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
};

export default Dashboard;
