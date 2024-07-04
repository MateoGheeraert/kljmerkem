import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/home';
import Activiteiten from './pages/activiteiten';

const App = () => {
  return (
    <Layout>
      <HashRouter basename="/kljmerkem">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activiteiten" element={<Activiteiten />} />
        </Routes>
      </HashRouter>
    </Layout>
  );
};

export default App;
