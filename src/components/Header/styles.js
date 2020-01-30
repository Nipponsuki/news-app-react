import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.white};
`;

const StyledHeader = styled.header`
  margin: 0 auto;
  max-width: 1480px;
  background-color: ${props => props.theme.white};
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

export { HeaderContainer, StyledHeader };
