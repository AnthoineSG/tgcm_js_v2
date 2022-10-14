import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { changePathCloseNavbar, getCategories } from 'src/store/actions';

import HomePage from 'src/components/pages/HomePage';
import NotFound from 'src/components/pages/NotFound';
import Cgv from 'src/components/pages/Cgv';
import Faq from 'src/components/pages/Faq';
import Blog from 'src/components/pages/Blog';
import Contact from 'src/components/pages/Contact';
import Superdev from 'src/components/pages/Superdev';
import SubCategory from 'src/components/pages/SubCategory';
import Product from 'src/components/pages/Product';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

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
