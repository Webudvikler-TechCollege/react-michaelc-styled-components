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
      <nav>{props.menu}</nav>
      <article>{props.article}</article>
      <aside>{props.aside}</aside>
    </MainStyled>
  );
};
