import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/home';
import Activiteiten from './pages/activiteiten';

const App = () => {
  return (
    <HashRouter basename="/kljmerkem">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activiteiten" element={<Activiteiten />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
