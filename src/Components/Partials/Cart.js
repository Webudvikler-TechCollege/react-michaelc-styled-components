import React from "react";
import { StyledCard } from "../StyledComponents/Cart.Styled";
import { Heading } from "../StyledComponents/Heading.Styled";
import { Button } from "../StyledComponents/Styled.Buttons";

export const Cart = (props) => {
  return (
    <>
      <StyledCard>
        <img src={props.image} alt={props.info} />
        <Heading as="h2">{props.name}</Heading>
        <p>${props.price}</p>
        <p>{props.info}</p>
        <p>
          <Button>Add to Cart</Button>
        </p>
      </StyledCard>
    </>
  );
};
