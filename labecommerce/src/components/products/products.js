import React from "react";
import { CardContainer, CardName, CardPrice, CardImage} from "./StyledProducts";

function Card (props) {
  
    return <CardContainer> 
        <CardImage>
            {props.produto.image}
        </CardImage>       

        <CardName>
            {props.produto.name}
        </CardName>
 
         <CardPrice>
         ₿ {props.produto.price}
         </CardPrice> 

         <button>Adicionar ao carrinho</button>
    </CardContainer>
      
}

export default Card;