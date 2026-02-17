// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowLeft } from 'lucide-react';

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     try {
//       const response = await fetch('http://localhost:8080/user/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password })
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         setError(data.message || 'Login failed');
//       } else {
//         // Optionally store token/user info in localStorage
//         localStorage.setItem('user', JSON.stringify(data.user));
//         // Navigate to dashboard or home
//         navigate('/');
//       }
//     } catch (err) {
//       setError('Network error occurred');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <div className="container mx-auto px-6 py-4">
//         <button 
//           onClick={() => navigate('/')} 
//           className="flex items-center text-gray-400 hover:text-white transition-colors"
//         >
//           <ArrowLeft className="w-5 h-5 mr-2" />
//           Back to Home
//         </button>
//       </div>

//       <div className="container mx-auto px-6 flex flex-col items-center justify-center min-h-[80vh]">
//         <div className="w-full max-w-md">
//           <h1 className="text-4xl font-bold text-center mb-8">Welcome Back</h1>

//           {error && (
//             <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded-lg mb-6">
//               {error}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium mb-2">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-gray-500"
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium mb-2">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-gray-500"
//                 placeholder="Enter your password"
//                 required
//               />
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   id="remember-me"
//                   type="checkbox"
//                   className="h-4 w-4 rounded border-gray-700 bg-gray-800"
//                 />
//                 <label htmlFor="remember-me" className="ml-2 block text-sm">
//                   Remember me
//                 </label>
//               </div>

//               <button type="button" className="text-sm text-gray-400 hover:text-white">
//                 Forgot password?
//               </button>
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full px-8 py-3 rounded-lg font-semibold transition-colors ${
//                 loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-500 hover:bg-gray-400'
//               }`}
//             >
//               {loading ? 'Signing In...' : 'Sign In'}
//             </button>
//           </form>

//           <p className="mt-8 text-center text-sm text-gray-400">
//             Don't have an account?{' '}
//             <button
//               onClick={() => navigate('/signup')}
//               className="text-white hover:text-gray-300 font-medium"
//             >
//               Sign up
//             </button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('https://s62-levi-capstone-grubhub-4.onrender.com/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
  setError(data.message || 'Login failed');
} else {
  localStorage.setItem('user', JSON.stringify(data.user));
  localStorage.setItem('token', data.token); // store token if needed later
  setEmail('');
  setPassword('');
  navigate('/');
  window.location.reload();
}
    } catch (err) {
      setError('Network error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url('/images/LandingImage4.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      <div className="relative  flex-grow flex items-center justify-center px-6 py-8">
        <div className="w-full max-w-md bg-white bg-opacity-95 text-black rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-center mb-6">Welcome Back</h1>

          {error && (
            <div className="bg-red-100 border border-red-500 text-red-600 px-4 py-2 rounded-lg mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-400"
                />
                <label htmlFor="remember-me" className="ml-2">
                  Remember me
                </label>
              </div>
              <button type="button" className="hover:underline">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full px-8 py-3 rounded-lg font-semibold transition-colors ${
                loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-red-600 text-white hover:bg-red-700'
              }`}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-700">
            Don't have an account?{' '}
            <button
              onClick={() => navigate('/signup')}
              className="text-red-600 hover:underline font-medium"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

