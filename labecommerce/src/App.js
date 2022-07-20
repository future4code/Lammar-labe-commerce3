
import './App.css';
import React,{useState} from 'react';
import { Header } from './components/header/Header';
import products  from './data/MockDeDados';
import { Card } from './components/products/Products'

function App() {
// const [products] =useState(produtos)

  return (
    <div>
     <Header/>
     <Card/>

    </div>
  );
}

export default App;
