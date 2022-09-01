import React from "react";

import styled from "styled-components";

export const MainStyled = styled.main`
  box-sizing: border-box;

  max-width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  gap: 10px;
  background-color: #2196f3;
  padding: 10px;

  * {
    background-color: #fff;
    padding: 5px;
  }
`;

export const Main = (props) => {
  return (
    <MainStyled>
      {/** man kan fyldes fra flere  */}
      <nav>{props.menu}</nav>{/** props.menu er i det her tilfælde login componentet */}
      <article>{props.article}</article>{/** props.article er i det her tilfælde produkter */}
      <aside>{props.aside}</aside>{/** props.aside er i det her tilfælde alm. tekst */}
    </MainStyled>
  );
};
