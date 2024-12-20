import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import {Container} from '../components/';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5200/api/Auth/Login', {
        email,
        password,
      });

      const token = response.data;

      if (!token || typeof token !== 'string') {
        throw new Error('Token is missing or invalid!');
      }

      const decodedPayload = jwtDecode(token);
      const userId = decodedPayload.nameid;

      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);

      setMessage('Login successful!');
      setTimeout(() => {
        navigate('/profile');
      }, 1000);
    } catch (error) {
      console.error('Login error:', error);
      setMessage('Invalid email or password.');
    }
  };

  return (
    <Container className="flex flex-col justify-center items-center h-screen">
      <h2 className='text-center font-bold text-2xl'>Welcome to our shop</h2>
      <p className='text-center mb-3 '>Sign in to continue</p>
      <form onSubmit={handleSubmit} className='flex flex-col w-[400px] gap-3 justify-center items-center'>
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className='bg-slate-200 h-[40px] p-3  w-[350px] rounded-[6px]'
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className='bg-slate-200 h-[40px] p-3 w-[350px] rounded-[6px]'
        />
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg w-full sm:w-auto hover:bg-blue-600 transition">Sign In</button>
      </form>
      <div className="separator flex items-center">
        <span>OR</span>
        <hr  className='w-full h-[1px]'/>
      </div>
      <div className="link-container flex gap-2 text-blue-500 mt-3">
        <a href="#" className="link" onClick={() => navigate('/request-reset-password')} >
          Forgot Password?
        </a>
        <a href="#" className="link" onClick={() => navigate('/register')}>
          Register
        </a>
      </div>
      {message && <p className="message">{message}</p>}
    </Container>
  );
};

export default Login;
