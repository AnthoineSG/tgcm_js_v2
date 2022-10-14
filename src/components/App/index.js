import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import HomePage from '../../pages/HomePage';
import Footer from '../Footer';
import Header from '../Header';
import NotFound from '../../pages/NotFound';
import Cgv from '../../pages/Cgv';
import Faq from '../../pages/Faq';
import Blog from '../../pages/Blog';
import Contact from '../../pages/Contact';
import Superdev from '../../pages/Superdev';
import SubCategory from '../../pages/SubCategory';

import './app.scss';

function App() {
  const dispatch = useDispatch();
  const locate = useLocation();

  useEffect(() => {
    dispatch({ type: 'CHANGE_PATH_CLOSE_NAVBAR' });
  }, [locate.pathname]);

  useEffect(() => {
    dispatch({ type: 'GET_CATEGORIES' });
  }, []);

  return (
    <div className="app">
      <Header />
      <Routes>
        {/* DYNAMIQUE */}
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:subcategory" element={<SubCategory />} />

        {/* STATIC */}
        <Route path="/cgv" element={<Cgv />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/superdev" element={<Superdev />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
