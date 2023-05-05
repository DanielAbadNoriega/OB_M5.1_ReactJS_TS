import React from 'react';
import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import ProductList from './components/ProductList';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header name="TypeShopping" />
      <div className="p-4">
      <Title title="Bienvenido a tu tienda de React JS y TypeScript"></Title>
      <ProductList />
      </div>
    </div>
  );
}

export default App;
