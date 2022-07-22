import React, {useState} from "react";
import './App.css';
import  Header from './components/header/Header';
import  Card  from './components/products/Products'; 
import productsList from "../src/data/MockDeDados";
import styled from "styled-components";
import  Filters  from "./components/filter/Filter";

 const Apps = styled.div`
   display: flex;
   flex-wrap:wrap;
`

function App() {
const [products] = useState(productsList);
const [query, setQuery] = useState("")
  const [minPrice, setMinPrice] = useState(-Infinity)
  const [maxPrice, setMaxPrice] = useState(Infinity)
  const [sortingParameter, setSortingParameter] = useState("name")
  const [order, setOrder] = useState("asc")

  return <>
  
      <Header/>
      
    <Filters>
    query={query}
    minPrice={minPrice}
    maxPrice={maxPrice}
    sortingParameter={sortingParameter}
    order={order}
    setQuery={setQuery}
    setMinPrice={setMinPrice}
    setMaxPrice={setMaxPrice}
    setSortingParameter={setSortingParameter}
    setOrder={setOrder}
    </Filters>
    <Apps>
      {products
      .filter(produto => {
        return produto.name.includes(query)
      })
      .filter(produto => {
        return produto.price >= minPrice || minPrice === ""
      })
      .filter(produto => {
        return produto.price <= maxPrice || maxPrice === ""
      })
      .sort((currentProduto, nextProduto) => {
        switch (sortingParameter) {
          case "price":
            return currentProduto.price - nextProduto.price
          default:
            return currentProduto.name.localeCompare(nextProduto.name)
        }
      })
      .sort(() => {
        if (order === "asc") {
          return 0
        } else {
          return -1
        }
      })
      .map(produto => {
        return <Card key={produto.name} produto={produto}/>
})}
    </Apps>
    </>
      
  
}
export default App;