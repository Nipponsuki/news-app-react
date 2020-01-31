import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingScreenContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 80vh;
  display: flex;
  background-color: rgba(255, 255, 255, 0.6);
  align-items: center;
  justify-content: center;
`;

const StyledLoader = styled.div`
  border-radius: 50%;
  width: 10em;
  height: 10em;
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid ${props => props.theme.activeLink};
  border-right: 1.1em solid ${props => props.theme.activeLink};
  border-bottom: 1.1em solid ${props => props.theme.activeLink};
  border-left: 1.1em solid white;
  transform: translateZ(0);
  animation: ${fadeIn} 1.1s infinite linear;

  &::after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
`;

export { LoadingScreenContainer, StyledLoader };
