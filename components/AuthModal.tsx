
import React, { useState } from 'react';
import '../types';

interface AuthModalProps {
  mode: 'login' | 'signup';
  setMode: (m: 'login' | 'signup') => void;
  onClose: () => void;
  onLogin: (email: string, pass: string) => boolean;
  onSignup: (data: any) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ mode, setMode, onClose, onLogin, onSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (mode === 'login') {
      const success = onLogin(email, password);
      if (!success) setError('Invalid credentials. (Try one / pass1234)');
    } else {
      onSignup({ name, email });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-[2.5rem] p-10 relative shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 p-8">
          <button onClick={onClose} className="text-zinc-400 hover:text-zinc-900 transition-colors">
            <iconify-icon icon="mdi:close" width="28"></iconify-icon>
          </button>
        </div>

        <h2 className="text-3xl font-bold mb-8">{mode === 'login' ? 'Welcome Back' : 'Create Account'}</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {mode === 'signup' && (
            <div>
              <label className="block text-sm font-bold text-zinc-700 mb-2">Full Name</label>
              <input 
                type="text" required
                className="w-full px-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-2 focus:ring-primary outline-none"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
          )}
          
          <div>
            <label className="block text-sm font-bold text-zinc-700 mb-2">Email or ID</label>
            <input 
              type="text" required
              className="w-full px-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-2 focus:ring-primary outline-none"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={mode === 'login' ? 'one' : 'email@example.com'}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-zinc-700 mb-2">Password</label>
            <input 
              type="password" required
              className="w-full px-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-2 focus:ring-primary outline-none"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder={mode === 'login' ? 'pass1234' : '••••••••'}
            />
          </div>

          {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

          <button type="submit" className="w-full bg-primary text-white py-5 rounded-2xl font-bold shadow-lg hover:shadow-primary/30 transition-all">
            {mode === 'login' ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-zinc-500">
            {mode === 'login' ? "Don't have an account?" : "Already have an account?"}{' '}
            <button 
              onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
              className="text-primary font-bold hover:underline"
            >
              {mode === 'login' ? 'Register' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
