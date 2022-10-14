import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { changePathCloseNavbar, getCategories } from 'src/store/actions';

import HomePage from 'src/pages/HomePage';
import NotFound from 'src/pages/NotFound';
import Cgv from 'src/pages/Cgv';
import Faq from 'src/pages/Faq';
import Blog from 'src/pages/Blog';
import Contact from 'src/pages/Contact';
import Superdev from 'src/pages/Superdev';
import SubCategory from 'src/pages/SubCategory';
import Product from 'src/pages/Product';
import Header from '../Header';
import Footer from '../Footer';

import './app.scss';

function App() {
  const dispatch = useDispatch();
  const locate = useLocation();

  useEffect(() => {
    dispatch(changePathCloseNavbar());
  }, [locate.pathname]);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className="app">
      <Header />
      <Routes>
        {/* DYNAMIQUE */}
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:subcategory" element={<SubCategory />} />
        <Route path="/product/:id" element={<Product />} />

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
