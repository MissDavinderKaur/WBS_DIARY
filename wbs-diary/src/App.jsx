import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('Home');

  return (
    <div>
      <Header setSelectedOption={setSelectedOption} />
      <Main selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      <Footer />
    </div>
  );
};

export default App;