import styled from "styled-components";

const SourceCardContainer = styled.a`
  /* width: 200px; */
  border-radius: 10px;
  display: flex;
  overflow: hidden;
  background-color: white;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 5px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  align-items: center;

  &:active,
  &:link {
    color: inherit;
  }
  &:hover {
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
      0 3px 3px -2px rgba(0, 0, 0, 0.12), 0 1px 8px 0 rgba(0, 0, 0, 0.2);
  }
`;

const SourceCategory = styled.span`
  padding: 2px;
  background-color: inherit;
  border-radius: 10px;
  color: ${props => props.theme.activeLink};
  margin: 0 0 0 auto;
  border: 2px solid ${props => props.theme.activeLink};
  margin: 0 10px;
`;

export { SourceCardContainer, SourceCategory };
