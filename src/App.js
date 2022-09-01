import FlashMessages from "./Components/FlashMessages/FlashMessages";
import { Main } from "./Components/Layouts/Main";
import Login from "./Components/Pages/Login/Login";
import { Cart } from "./Components/Partials/Cart";
import { Heading } from "./Components/StyledComponents/Heading.Styled";
import { Button } from "./Components/StyledComponents/Styled.Buttons";

import styled from "styled-components";

const ProductSection = styled.section`
  width: 100%;
`;

const Product = () => {
  return (
    <ProductSection>
      <Heading color="magenta" uc as="h1">
        forsiden mag
      </Heading>
      {products.map((item, i) =>
        // prettier-ignore
        <Cart key={i} 
    image={item.image} 
    price={item.price} 
    name={item.name} 
    detail={item.detail} 
    info={item.info} />
      )}
    </ProductSection>
  );
};

const products = [
  {
    name: "Product",
    detail: "Lorem ipsum dolor sit amet",
    price: "19.95",
    info: "OMG This just came out today!",
    image: "https://baconmockup.com/640/360",
  },
  {
    name: "Product 1",
    detail: "Lorem ipsum dolor sit amet",
    price: "25",
    info: "This is the a product from Derp corp.",
    image: "https://placebear.com/640/360",
  },
  {
    name: "Product 2",
    detail: "Lorem ipsum dolor sit amet",
    price: "129",
    info: "BOGOF",
    image: "http://placeimg.com/640/360/any",
  },
  {
    name: "Product 3",
    detail: "Lorem ipsum dolor sit amet",
    price: "219",
    info: "No srsly GTFO",
    image: "https://www.placecage.com/640/360",
  },
];
function App() {
  return (
    <>
      <FlashMessages />

      <article>
        <Heading as="h2">forsiden</Heading>
        <figure></figure>
        <footer></footer>
        <Button color="green">Klik her</Button> <Button color="#ff0000">Klik her</Button>
      </article>

      <Main menu={<Login />} article={<Product />} aside="jeg er aside" />
    </>
  );
}

export default App;
