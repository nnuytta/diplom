import React from 'react';
import MainPage from './components/MainPage';
import Header from './components/Header';
import Footer from './components/Footer';
import BookPage from './components/BookPage';
import CartPage from './components/CartPage';
import {Route, Routes} from 'react-router';

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/book' element={<BookPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='*' element={null} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
