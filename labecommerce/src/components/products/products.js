import React from "react";
import { CardContainer, CardName, CardPrice, CardImage} from "./StyledProducts";

function Card(props) {
  
    return <CardContainer> 
              <CardName>
        {props.produto.name}
        </CardName>
        <CardImage>
        {props.produto.image}
        </CardImage>       

         <CardPrice>
         ₿ {props.produto.price}
         </CardPrice> 
         <button>Adicionar ao carrinho</button>
    </CardContainer>
      
}

export default Card;