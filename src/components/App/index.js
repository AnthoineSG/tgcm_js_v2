import { Route, Routes } from 'react-router-dom';

import HomePage from '../../pages/HomePage';
import Footer from '../Footer';
import Header from '../Header';
import NotFound from '../../pages/NotFound';

import './app.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
