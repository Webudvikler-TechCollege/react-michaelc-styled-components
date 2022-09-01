import styled from "styled-components";

export const Button = styled.button`
  border-radius: 8px;
  color: ${(props) => (props.color ? props.color : "red")};

  border-color: blue;
  &:hover {
    color: deeppink;
    cursor: pointer;
    background-color: #ccc;
  }

  margin: 20px;
  padding: 8px;
`;
