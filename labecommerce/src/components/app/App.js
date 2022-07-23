import React, { useState } from "react";
import Header from '../header/Header';
import Card from '../products/Products'; 
import Apps from "../app/AppStyled";
import Filters from "../filter/Filter";
import productsList from "../../data/MockDeDados";

function App() {
  const [products] = useState(productsList)
  const [query, setQuery] = useState("")
  const [minPrice, setMinPrice] = useState(-Infinity)
  const [maxPrice, setMaxPrice] = useState(Infinity)
  const [sortingParameter, setSortingParameter] = useState("name")
  const [order, setOrder] = useState("asc")

  return <>
  
    <Header/>
      
    <Filters
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
    />

    <Apps>
      {products
      .filter(produto => {
        return produto.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
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
        return <Card key={produto.id} produto={produto}/>
})}
    </Apps>
    </>
}
export default App;