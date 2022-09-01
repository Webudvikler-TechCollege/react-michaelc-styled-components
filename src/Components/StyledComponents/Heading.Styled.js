import styled from "styled-components";

export const Heading = styled.h1`

  ${(props) => HandleHTag(props)};
  ${(props) => (props.cap ? "text-transform: capitalize;" : "")}
  ${(props) => (props.uc ? "text-transform: uppercase;" : "")}
  ${(props) => (props.tc ? "text-align: center;" : "")}


`;

const HandleHTag = (props) => {
  switch (props.as) {
    case "h1":
      return ` color: deeppink;
  `;

    case "h2":
      return `

      color: green;
      
      `;

    case "h5":
      return `
  
        color: blue;
        
        `;

    default:
      return `
        color: orange;
        font-size: 40px; 
        line-height: 40px; 
  
  
  `;
  }
};
