import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('Home');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-6">
      <div className="w-full max-w-4xl">
        <Header/>
        <Main/>
        <Footer />
      </div>
    </div>
  );
};

export default App;