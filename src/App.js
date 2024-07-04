import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/home';
import Activiteiten from './pages/activiteiten';
import Fotos from './pages/fotos';
import Evenementen from './pages/evenementen';
import Bestuur from './pages/bestuur';
import './App.css'

const App = () => {
  return (
    <HashRouter basename="/">
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/activiteiten" element={<Activiteiten />} />
            <Route path="/fotos" element={<Fotos />} />
            <Route path="/evenementen" element={<Evenementen />} />
            <Route path="/bestuur" element={<Bestuur />} />
          </Routes>
        </Layout>
    </HashRouter>
  );
};

export default App;