import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./pages/Layout";
import Home from "./pages/home";
import Activiteiten from "./pages/activiteiten";
import Fotos from "./pages/fotos";
import Evenementen from "./pages/evenementen";
import Bestuur from "./pages/bestuur";
import "./App.css";
import Geschiedenis from "./pages/geschiedenis";

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter basename=''>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/activiteiten' element={<Activiteiten />} />
            <Route path='/fotos' element={<Fotos />} />
            <Route path='/evenementen' element={<Evenementen />} />
            <Route path='/bestuur' element={<Bestuur />} />
            <Route path='/geschiedenis' element={<Geschiedenis />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
