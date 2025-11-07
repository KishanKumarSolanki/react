import React, { useState } from 'react';


const App = () => {

  const [isLoginMode, setIsLoginMode] = useState(true);


  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    setMessage('');
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // --- Basic Validation ---
    if (!formData.email || !formData.password) {
      setMessage('Please enter both email and password.');
      setLoading(false);
      return;
    }

    if (!isLoginMode && formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match.');
      setLoading(false);
      return;
    }

    const mode = isLoginMode ? 'Login' : 'Sign Up';



    setTimeout(() => {
      console.log(`${mode} attempt with data:`, {
        email: formData.email,
        password: formData.password,
      });


      setFormData(prev => ({
        ...prev,
        password: '',
        confirmPassword: '',
      }));

      // Update UI message
      setMessage(`${mode} successful! (Simulated)`);
      setLoading(false);
      // End of simulation

    }, 1500);
  };

  // Toggles the view mode (Login <-> Sign Up)
  const toggleMode = () => {
    setIsLoginMode(prev => !prev);
    setMessage('');
    setFormData({
      email: formData.email, // Preserve email if desired, but clearing is safer
      password: '',
      confirmPassword: '',
    });
  };

  return (
    // Load Tailwind via CDN for styling
    <>

      {/* Centered container with light background */}
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-['Inter']">

        {/* Header Title */}
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isLoginMode ? 'Sign in to your account' : 'Create a new account'}
          </h2>
        </div>

        {/* Form Card Container */}
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-2xl sm:rounded-xl sm:px-10">

            <form className="space-y-6" onSubmit={handleSubmit}>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 shadow-sm text-gray-800"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 shadow-sm text-gray-800"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Confirm Password field (Only for Sign Up) */}
              {!isLoginMode && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 shadow-sm text-gray-800"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}

              {/* Message Display (Success/Error) */}
              {message && (
                <div className={`p-3 rounded-lg text-sm font-medium ${message.includes('successful') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {message}
                </div>
              )}

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition duration-200 ease-in-out ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  disabled={loading}
                >
                  {/* Loading Spinner */}
                  {loading ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </div>
                  ) : (
                    isLoginMode ? 'Sign In' : 'Sign Up'
                  )}
                </button>
              </div>
            </form>

            {/* Toggle Link */}
            <div className="mt-6">
              <div className="text-center text-sm">
                <button
                  type="button"
                  onClick={toggleMode}
                  className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150"
                >
                  {isLoginMode
                    ? "Don't have an account? Create one."
                    : "Already have an account? Sign in."
                  }
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default App;