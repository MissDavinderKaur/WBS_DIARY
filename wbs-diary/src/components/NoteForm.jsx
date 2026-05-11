import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const TEAMS = ['Frontend', 'Backend', 'Platforms'];
const MEMBERS = ['Adam', 'Beatrice', 'Carl', 'Donna', 'Eddie', 'Fran'];
const RATINGS = ['Red', 'Amber', 'Green'];

const NoteForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const preselectedTeam = location.state?.team || '';
  const [form, setForm] = useState({ team: preselectedTeam, member: '', title: '', detail: '', rating: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.team) newErrors.team = 'Team is required';
    if (!form.member) newErrors.member = 'Member is required';
    if (!form.title.trim()) newErrors.title = 'Title is required';
    if (!form.detail.trim()) newErrors.detail = 'Detail is required';
    if (!form.rating) newErrors.rating = 'Rating is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const username = localStorage.getItem('currentUser');
    const userData = JSON.parse(localStorage.getItem(username) || '{}');
    const teamKey = form.team.toLowerCase();
    const teamData = userData[teamKey] || {};
    const memberNotes = teamData[form.member] || [];

    memberNotes.push({ Title: form.title.trim(), Detail: form.detail.trim(), Rating: form.rating });

    const updated = {
      ...userData,
      [teamKey]: { ...teamData, [form.member]: memberNotes },
    };

    localStorage.setItem(username, JSON.stringify(updated));
    navigate('/notebook');
  };

  const fieldClass = (field) =>
    `shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors[field] ? 'border-red-500' : ''}`;

  return (
    <div className="flex flex-col min-h-screen pt-20 px-4">
      <button
        className="self-start px-4 py-2 bg-red-600 text-white rounded border border-red-600 hover:bg-red-700 mb-6"
        onClick={() => navigate('/notebook')}
      >
        Back
      </button>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8">Add a new note</h1>
        <form className="w-full max-w-lg" onSubmit={handleSave} noValidate>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Team</label>
            <select name="team" value={form.team} onChange={handleChange} className={fieldClass('team')}>
              <option value="">Select a team</option>
              {TEAMS.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            {errors.team && <p className="text-red-500 text-xs mt-1">{errors.team}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Member</label>
            <select name="member" value={form.member} onChange={handleChange} className={fieldClass('member')}>
              <option value="">Select a member</option>
              {MEMBERS.map((m) => <option key={m} value={m}>{m}</option>)}
            </select>
            {errors.member && <p className="text-red-500 text-xs mt-1">{errors.member}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
            <input
              name="title"
              type="text"
              value={form.title}
              onChange={handleChange}
              placeholder="Short title"
              className={fieldClass('title')}
            />
            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Detail</label>
            <textarea
              name="detail"
              value={form.detail}
              onChange={handleChange}
              placeholder="Full detail of the note"
              rows={5}
              className={fieldClass('detail')}
            />
            {errors.detail && <p className="text-red-500 text-xs mt-1">{errors.detail}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Rating</label>
            <select name="rating" value={form.rating} onChange={handleChange} className={fieldClass('rating')}>
              <option value="">Select a rating</option>
              {RATINGS.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
            {errors.rating && <p className="text-red-500 text-xs mt-1">{errors.rating}</p>}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-red-600 text-white rounded border border-red-600 hover:bg-red-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoteForm;
