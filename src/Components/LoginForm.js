import React, { useState } from 'react';
import '../Styles/LoginForm.css';
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    setMessage(`Login successful with username: ${username} `);
    // hidding the password as showing password in ui can be vulnerable.
    // setMessage(`Login successful with username: ${username} and password: ${password}`);
  };

  const handleClear = () => {
    setUsername('');
    setPassword('');
    setMessage('');
  };

  return (
    <div className="login-container">
      <h2>Login Form</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="button-container">
          <button type="button" className="login-btn" onClick={handleLogin}>
            Login
          </button>
          <button type="button" className="clear-btn" onClick={handleClear}>
            Clear
          </button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </div>
  );
};

export default LoginForm;
