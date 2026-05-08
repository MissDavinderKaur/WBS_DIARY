import React from 'react';
import { useNavigate } from 'react-router-dom';

const Notebook = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('currentUser') || '';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 pt-20">
      <button
        className="fixed top-20 left-4 px-4 py-2 bg-red-600 text-white rounded border border-red-600 hover:bg-red-700"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <h1 className="text-4xl font-bold mb-2">Welcome to your notebook, {username}!</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <button
          className="px-6 py-3 bg-red-600 text-white rounded border border-red-600 hover:bg-red-700"
          onClick={() => navigate('/notebook/frontend')}
        >
          Front End
        </button>
        <button
          className="px-6 py-3 bg-red-600 text-white rounded border border-red-600 hover:bg-red-700"
          onClick={() => navigate('/notebook/backend')}
        >
          Back End
        </button>
        <button
          className="px-6 py-3 bg-red-600 text-white rounded border border-red-600 hover:bg-red-700"
          onClick={() => navigate('/notebook/platforms')}
        >
          Platforms
        </button>
      </div>
    </div>
  );
};

export default Notebook;
