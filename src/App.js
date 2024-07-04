import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/home';
import Activiteiten from './pages/activiteiten';
import Fotos from './pages/fotos';
import Evenementen from './pages/evenementen';

const App = () => {
  return (
    <HashRouter basename="/">
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/activiteiten" element={<Activiteiten />} />
            <Route path="/fotos" element={<Fotos />} />
            <Route path="/evenementen" element={<Evenementen />} />
          </Routes>
        </Layout>
    </HashRouter>
  );
};

export default App;