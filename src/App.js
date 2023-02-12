import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SalesInsurancePage from './containers/SalesInsurancePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <SalesInsurancePage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
