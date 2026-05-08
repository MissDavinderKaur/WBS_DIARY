import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const getIsLoggedIn = () => {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) return false;
    const userData = JSON.parse(localStorage.getItem(currentUser) || '{}');
    return userData.isLoggedIn === true;
  };

  const [isLoggedIn, setIsLoggedIn] = useState(getIsLoggedIn);

  useEffect(() => {
    setIsLoggedIn(getIsLoggedIn());
  }, [location]);

  // useEffect(() => {
  //   const handleStorage = () => setIsLoggedIn(getIsLoggedIn());
  //   window.addEventListener('storage', handleStorage);
  //   return () => window.removeEventListener('storage', handleStorage);
  // }, []);

  const handleLogOut = () => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const userData = JSON.parse(localStorage.getItem(currentUser) || '{}');
      localStorage.setItem(currentUser, JSON.stringify({ ...userData, isLoggedIn: false }));
    }
    localStorage.removeItem('currentUser');
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