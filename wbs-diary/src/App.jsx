import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Login from './components/Login';
import Notebook from './components/Notebook';
import Team from './components/Team';
import NoteForm from './components/NoteForm';

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
        <Route path="/notebook/frontend" element={<Team team="frontend" />} />
        <Route path="/notebook/backend" element={<Team team="backend" />} />
        <Route path="/notebook/platforms" element={<Team team="platforms" />} />
        <Route path="/notebook/new" element={<NoteForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;