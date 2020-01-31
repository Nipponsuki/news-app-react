import styled from "styled-components";

const DropdownContainer = styled.div`
  position: absolute;
  width: 100%;
  /* max-height: 100px; */
  border-radius: 10px;
  top: 45px;
  right: 0;
  background-color: ${props => props.theme.background};
  overflow-y: scroll;
  overflow-x: hidden;
  border: 1.5px solid #000;
  z-index: 999;

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

export { DropdownContainer };
