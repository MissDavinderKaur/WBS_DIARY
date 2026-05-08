import React from 'react';
import { useNavigate } from 'react-router-dom';

const MEMBERS = ['Adam', 'Beatrice', 'Carl', 'Donna', 'Eddie', 'Fran'];

const Team = ({ team }) => {
  const navigate = useNavigate();

  const currentUser = localStorage.getItem('currentUser');
  const userData = JSON.parse(localStorage.getItem(currentUser) || '{}');
  const teamData = userData[team] || {};

  return (
    <div className="flex flex-col min-h-screen pt-20 px-8 max-w-3xl mx-auto w-full">
      <button
        className="fixed top-20 left-4 px-4 py-2 bg-red-600 text-white rounded border border-red-600 hover:bg-red-700"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <h1 className="text-4xl font-bold mb-6 capitalize">{team}</h1>
      <div className="flex flex-col gap-4">
        {MEMBERS.map((member) => {
          const notes = teamData[member] || [];
          return (
            <div key={member} className="border rounded p-4">
              <h2 className="text-xl font-semibold mb-2">{member}</h2>
              {notes.length > 0 ? (
                notes.map((note, i) => (
                  <p key={i} className="text-gray-700">{note}</p>
                ))
              ) : (
                <p className="text-gray-400">No Notes</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
