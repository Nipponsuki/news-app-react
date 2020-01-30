import styled from "styled-components";

const SocialAppsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AppLink = styled.a`
  color: inherit;
  text-decoration: none;
  font-size: 20px;
  svg {
    fill: ${props => props.fillColor};
  }

  margin-right: 20px;
  &:last-of-type {
    margin-right: 0;
  }

  &:active,
  &:link,
  &:visited {
    color: inherit;
  }
`;

export { SocialAppsContainer, AppLink };
