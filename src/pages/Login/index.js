import React, { useState } from 'react';
import './login.css';
import google from './images/google.png';
import apple from './images/apple.png';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBLAP5Da11Dhfzd4KbuCWPYrf41MdJsSzo",
  authDomain: "digitalc-3e567.firebaseapp.com",
  projectId: "digitalc-3e567",
  storageBucket: "digitalc-3e567.appspot.com",
  messagingSenderId: "694261131096",
  appId: "1:694261131096:web:7c91464d49e5707e01e72d",
  measurementId: "G-09KG4FV9TB"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Autenticar o usuário com o Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Usuário autenticado:', user);

      // Redirecionar o usuário para a página principal ou realizar ações desejadas após o login bem-sucedido.

    } catch (error) {
      console.error('Erro ao autenticar:', error.message);
      // Lidar com erros de autenticação aqui, como exibir uma mensagem de erro para o usuário.
    }
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
          <button type="submit">Login</button>
          <p className='esqueceuSenha'>Esqueceu sua senha?</p>
          <p className='register'>Não tem uma conta? Registre-se agora</p>
        </form>
        <div className="social-login">
          <img className='google' src={google} alt="icongoogle" />
          <img className='apple' src={apple} alt="iconeapple" />
        </div>
        <p className='termos'>Ao realizar o login, você concorda com nossos termos.</p>
      </div>
    </div>
  );
}

export default Login;
