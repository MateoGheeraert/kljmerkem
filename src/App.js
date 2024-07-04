import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/home';
import Activiteiten from './pages/activiteiten';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <HashRouter basename="/">
      <ErrorBoundary>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/activiteiten" element={<Activiteiten />} />
          </Routes>
        </Layout>
      </ErrorBoundary>
    </HashRouter>
  );
};

export default App;