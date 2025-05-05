import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Ripple from '../images/ripple-xrp-seeklogo.png'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {

    if (email === 'anyone@gmail.com' && password === 'harry@123') {
        navigate('/dashboard');
    } else {
      alert('Invalid email or password')
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0b0f1a] to-black flex items-center justify-center px-4">
      <div className="bg-[#111827] flex h-150 max-w-5xl">

        <div className="flex flex-col justify-center items-center bg-gradient-to-tr from-[#1f2937] to-black w-1/2 p-10 text-white">
          <img
            src={Ripple}
            alt="logo"
            className="w-32 h-32 mb-6"
          />
          <h2 className="text-3xl font-bold mb-2 text-center">NexoTrack</h2>
          <p className="text-sm text-gray-400 text-center px-4">
            Track live cryptocurrency prices, monitor your coins, and stay informed.
          </p>
        </div>

        <div className="w-full md:w-1/2 bg-[#1e293b] p-10 text-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center mb-6">Login!!</h2>

          <form onSubmit={handleLogin} className="space-y-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-xl bg-gray-800 "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl bg-gray-800 "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-xl font-semibold  transition"
            >
              Log In
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Demo Login: <span className="text-white">anyone@gmail.com/ harry@123</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
