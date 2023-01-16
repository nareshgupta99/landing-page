import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Home from './componentes/Home';

function App() {
  return (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}>
        
      </Route>


    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
