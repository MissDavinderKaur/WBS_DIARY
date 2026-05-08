import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  useEffect(() => {
    const handleStorage = () => setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  });

  const handleLogOut = () => {
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 flex justify-end p-4 bg-white shadow-md z-50">
      {isLoggedIn ? (
        <button
          className="px-4 py-2 bg-red-600 text-white rounded border border-red-600 hover:bg-red-700"
          onClick={handleLogOut}
        >
          Log out
        </button>
      ) : (
        <button
          className="px-4 py-2 bg-red-600 text-white rounded border border-red-600 hover:bg-red-700"
          onClick={() => navigate('/login')}
        >
          Log in
        </button>
      )}
    </header>
  );
};

export default Header;