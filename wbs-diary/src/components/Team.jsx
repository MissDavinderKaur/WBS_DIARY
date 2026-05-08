import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import seedNotes from '../data/notes.json';
import Note from './Note';

const MEMBERS = ['Adam', 'Beatrice', 'Carl', 'Donna', 'Eddie', 'Fran'];

const pickRandomNotes = () => {
  const count = Math.floor(Math.random() * 5); // 0–4 inclusive
  const pool = [...seedNotes];
  const picked = [];
  for (let i = 0; i < count; i++) {
    const idx = Math.floor(Math.random() * pool.length);
    picked.push(pool.splice(idx, 1)[0]);
  }
  return picked;
};

const Team = ({ team }) => {
  const navigate = useNavigate();

  const memberNotes = useMemo(() =>
    MEMBERS.reduce((acc, member) => {
      acc[member] = pickRandomNotes();
      return acc;
    }, {}),
  []);

  return (
    <div className="flex flex-col min-h-screen pt-20 px-8 max-w-3xl mx-auto w-full">
      <button
        className="fixed top-20 left-4 px-4 py-2 bg-red-600 text-white rounded border border-red-600 hover:bg-red-700"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <h1 className="text-4xl font-bold mb-6 capitalize">{team}</h1>
      <div className="flex flex-col gap-6">
        {MEMBERS.map((member) => (
          <div key={member} className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">{member}</h2>
            {memberNotes[member].length > 0 ? (
              memberNotes[member].map((note) => (
                <Note key={note.id} note={note} />
              ))
            ) : (
              <p className="text-gray-400">No Notes</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
