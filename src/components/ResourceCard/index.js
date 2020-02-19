import React from "react";
import { SourceCardContainer, SourceCategory } from "./styles";

const ResourceCard = ({ resource: { name, url, category } }) => {
  return (
    <SourceCardContainer href={url} target="_blank">
      <span>{name}</span>
      <SourceCategory>{category}</SourceCategory>
    </SourceCardContainer>
  );
};

export default ResourceCard;
