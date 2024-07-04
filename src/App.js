import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/home';
import Activiteiten from './pages/activiteiten';


const App = () => {
  return (
    <Layout>
    <BrowserRouter>
      <Routes>
        <Route path="/kljmerkem/" element={<Home />}></Route>
        <Route path="/kljmerkem/activiteiten" element={<Activiteiten />}></Route>
      </Routes>
    </BrowserRouter>
    </Layout>
  );
};

export default App;