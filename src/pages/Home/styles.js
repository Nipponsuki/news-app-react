import styled from "styled-components";

const CatergoryPageContainer = styled.section`
  display: flex;
`;

const CategoryTitle = styled.h1`
  color: #000;
  display: inline-block;
  margin-bottom: 25px;
  text-transform: capitalize;
  position: absolute;
  left: 0;
  top: -45px;
  span {
    text-transform: lowercase;
  }
`;

export { CatergoryPageContainer, CategoryTitle };
