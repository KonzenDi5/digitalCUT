import React, { useState } from 'react';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui, você pode adicionar lógica para autenticação, como enviar os dados para um servidor.
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Mantenha-me Conectado:', rememberMe);
  };

  const handleGoogleLogin = () => {
    // Lógica de login com o Google aqui
  };

  const handleAppleLogin = () => {
    // Lógica de login com a Apple aqui
  };

  return (
    <div className="container">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="remember-me">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="rememberMe">Mantenha-me Conectado</label>
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="social-login">
          <button className="google-login" onClick={handleGoogleLogin}>
            Login com o Google
          </button>
          <button className="apple-login" onClick={handleAppleLogin}>
            Login com a Apple
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
