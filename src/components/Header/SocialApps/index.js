import React from "react";

import { SocialAppsContainer, AppLink } from "./styles";

import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const SOCIAL_APPS = [
  {
    id: 1,
    link: "www.facebook.com",
    icon: <FaFacebook />,
    fillColor: "#3b5998"
  },
  { id: 2, link: "www.github.com", icon: <FaGithub />, fillColor: "#24292E" },
  { id: 3, link: "www.goggle.com", icon: <FaGoogle />, fillColor: "#DB4437" }
];

const SocialApps = () => {
  return (
    <SocialAppsContainer>
      {SOCIAL_APPS.map(app => (
        <AppLink
          href={app.link}
          target="_blank"
          rel="noopener noreferrer"
          fillColor={app.fillColor}
          key={app.id}
        >
          {app.icon}
        </AppLink>
      ))}
    </SocialAppsContainer>
  );
};

export default SocialApps;
