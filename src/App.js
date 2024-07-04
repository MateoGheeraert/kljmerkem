import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/home';
import Activiteiten from './pages/activiteiten';

const App = () => {
  return (
    <Layout>
      <BrowserRouter basename="/kljmerkem">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activiteiten" element={<Activiteiten />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};

export default App;
