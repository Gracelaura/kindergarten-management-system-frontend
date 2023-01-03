import React, { useState } from 'react';

function ParentLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make a POST request to the backend with the parent name and password
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Do something with the response data
        console.log(data);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
    <div className="w-1/3 flex flex-col items-center p-6 bg-white rounded-lg shadow-xl">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYgAVMzopkLZhO1T-CjbKUHRbq050yn4vtQ&usqp=CAU" alt="Logo" className="h-32 w-32 rounded-full mb-6" />
      <h1>Parent Login</h1>
      <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Parent name"
            className="px-3 py-2 mb-3 text-gray-700 rounded-lg shadow-sm focus:outline-none focus:shadow-outline w-full"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="px-3 py-2 mb-3 text-gray-700 rounded-lg shadow-sm focus:outline-none focus:shadow-outline w-full"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <button type="submit" className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline w-full">
            Log In
          </button>
        </form>
      <div className="text-center mt-4 text-sm text-gray-600">
        Don't have an account? <a href="/ParentSignup" className="font-bold text-blue-500 hover:text-blue-800">Sign up</a>
      </div>
    </div>
  </div>
  );
}

export default ParentLogin;