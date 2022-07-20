import React, {useState} from "react";
import { CardContainer} from "./StyledProducts";
import products from "../../data/MockDeDados"

export function Card() {
  const [search, setSearch] = useState ('');

    return <CardContainer>
      <input 
      placeholder="search" 
      onChange={(ev) => setSearch(ev.target.value)} 
      value={search}>
      </input>

      {/* .filter((products) => products.startsWith(search)) */}
      {products.map((value) => {
        return (
          <div>
            <p>{value.name}</p>
          </div>
        )
      })}
    </CardContainer>
}