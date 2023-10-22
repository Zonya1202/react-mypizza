import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import './scss/app.scss';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import FullPizza from './pages/FullPizza';
import MainLayout from './layouts/MainLayout';

const Cart = React.lazy(() => import(/* webpackChunkName: 'Cart */ './pages/Cart'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route path="pizza/:id" element={<FullPizza />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
