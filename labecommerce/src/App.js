import React, {useState} from "react";
import './App.css';
import  Header from './components/header/Header';
import  Card  from './components/products/Products'; 
import productsList from "../src/data/MockDeDados";
import styled from "styled-components";

 const Apps = styled.div`
   display: flex;
   flex-wrap:wrap;
`

function App() {
const [products] = useState(productsList);

  return (
    <div>
      <Header/>
    
    <Apps>
      {products.map(produto =>{
        return <Card key={produto.id} produto={produto}/>
})}
    </Apps>
    </div>
      
  );
}
export default App;