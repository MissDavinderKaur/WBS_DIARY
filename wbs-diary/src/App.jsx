import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Login from './components/Login';
import Notebook from './components/Notebook';

const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen flex flex-col items-center justify-center px-4 py-6 pt-20">
            <div className="w-full max-w-4xl">
              <Main />
              <Footer />
            </div>
          </div>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/notebook" element={<Notebook />} />
        <Route path="/notebook/frontend" element={<div>Front End</div>} />
        <Route path="/notebook/backend" element={<div>Back End</div>} />
        <Route path="/notebook/platforms" element={<div>Platforms</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;