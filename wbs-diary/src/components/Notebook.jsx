import React from 'react';
import { useNavigate } from 'react-router-dom';

const Notebook = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('currentUser') || '';

  return (
    <div className="flex flex-col min-h-screen pt-20 px-4">
      <button
        className="self-start px-4 py-2 bg-red-600 text-white rounded border border-red-600 hover:bg-red-700 mb-6"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <div className="flex flex-col items-center gap-4">
      <h1 className="text-4xl font-bold mb-2">Welcome to your notebook, {username}!</h1>
      <button
        className="px-6 py-3 bg-red-600 text-white rounded border border-red-600 hover:bg-red-700 mt-16"
        onClick={() => navigate('/notebook/new')}
      >
        Add a new note
      </button>
      <h2 className="text-2xl font-semibold mt-16">Your teams</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <button
          className="px-6 py-3 bg-white text-gray-600 rounded border border-red-500 hover:bg-red-50"
          onClick={() => navigate('/notebook/frontend')}
        >
          Front End
        </button>
        <button
          className="px-6 py-3 bg-white text-gray-600 rounded border border-red-500 hover:bg-red-50"
          onClick={() => navigate('/notebook/backend')}
        >
          Back End
        </button>
        <button
          className="px-6 py-3 bg-white text-gray-600 rounded border border-red-500 hover:bg-red-50"
          onClick={() => navigate('/notebook/platforms')}
        >
          Platforms
        </button>
      </div>
      </div>
    </div>
  );
};

export default Notebook;
