// Navigation header with login/logout

import { useState, useEffect } from 'react';

const Header = () => {

  return (
    <header className="fixed top-0 left-0 right-0 flex justify-end p-4 bg-white shadow-md z-50">   
        <button className="px-4 py-2 bg-red-600 text-white rounded border border-red-600 hover:bg-red-700">Log in</button>
    </header>
  );
};

export default Header;