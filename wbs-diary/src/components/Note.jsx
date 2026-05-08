import React from 'react';

const RAG_STYLES = {
  Red:   'border-red-500 bg-red-50',
  Amber: 'border-amber-500 bg-amber-50',
  Green: 'border-green-500 bg-green-50',
};

const RAG_BADGE = {
  Red:   'bg-red-500',
  Amber: 'bg-amber-500',
  Green: 'bg-green-500',
};

const Note = ({ note }) => (
  <div className={`border-l-4 rounded p-3 mb-2 ${RAG_STYLES[note.rating]}`}>
    <div className="flex items-center justify-between mb-1">
      <h3 className="font-semibold text-gray-800">{note.title}</h3>
      <span className={`text-xs text-white px-2 py-1 rounded ml-2 shrink-0 ${RAG_BADGE[note.rating]}`}>
        {note.rating}
      </span>
    </div>
    <p className="text-sm text-gray-600">{note.detail}</p>
  </div>
);

export default Note;
