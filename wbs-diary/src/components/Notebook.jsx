import React from 'react';
import { useLocation } from 'react-router-dom';

const Notebook = () => {
  const { state } = useLocation();
  const { username, notes } = state || { username: '', notes: [] };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12">
      <h1 className="text-4xl font-bold mb-2">Notebook</h1>
      <p className="text-gray-500 mb-6">Welcome, {username}</p>
      <div className="w-full max-w-sm">
        {notes.length > 0 ? (
          notes.map((note, index) => (
            <p key={index} className="border rounded p-3 mb-2 text-gray-700">{note}</p>
          ))
        ) : (
          <p className="text-gray-400 text-center">No notes yet</p>
        )}
      </div>
    </div>
  );
};

export default Notebook;
