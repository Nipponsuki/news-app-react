import React from "react";
import { FaHome, FaDatabase, FaIdCardAlt } from "react-icons/fa";

import { StyledNavLink, IconContainer, Navbar } from "./styles";

const NAV_LINKS = [
  { id: 1, name: "Home", to: "/categories/general", icon: <FaHome /> },
  { id: 2, name: "Sources", to: "/sources", icon: <FaDatabase /> },
  { id: 3, name: "About", to: "/about", icon: <FaIdCardAlt /> }
];

const Navigation = () => {
  return (
    <Navbar data-testid="navbar">
      {NAV_LINKS.map(link => (
        <StyledNavLink key={link.id} to={link.to} activeClassName="selected">
          <IconContainer>{link.icon}</IconContainer>
          {link.name}
        </StyledNavLink>
      ))}
    </Navbar>
  );
};

export default Navigation;
