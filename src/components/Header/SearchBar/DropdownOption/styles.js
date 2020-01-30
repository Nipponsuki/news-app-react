import styled from "styled-components";

const DropdownOptionContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${props =>
    props.active ? "#fff" : props.theme.background};
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 5px 10px;

  &:hover {
    background-color: #fff;
  }
`;

export { DropdownOptionContainer };
