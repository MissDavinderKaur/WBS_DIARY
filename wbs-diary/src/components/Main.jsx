// Navigation header with login/logout

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  return (
    <header className="flex flex-col items-center justify-center py-12">   
        <h1 className="text-4xl font-bold mb-6">The Engineering Manager's Diary</h1>
        <button 
          className="px-6 py-3 bg-red-600 text-white rounded border border-red-600 hover:bg-red-700"
          onClick={() => navigate('/login')}
        >
          Log in
        </button>
    </header>
  );
};

export default Main;