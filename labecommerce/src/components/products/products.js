import React from "react";
import { CardContainer, CardName, CardPrice, CardImage} from "./StyledProducts";

function Card(props) {
  // const [search, setSearch] = useState ('');
 

      // <input 
      // placeholder="search" 
      // onChange={(ev) => setSearch(ev.target.value)}
      // value={search}>
      // </input>
    return <CardContainer> 
              <CardName>
        {props.produto.name}
        </CardName>
        <CardImage>
        {props.produto.image}
        </CardImage>       

         <CardPrice>
        {props.produto.price}
         </CardPrice> 
         <button>Adicionar ao carrinho</button>
    </CardContainer>
      
}

export default Card;