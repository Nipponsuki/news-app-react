import React from "react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import dayjs from "dayjs";

import {
  NewsCardContainer,
  newsCardVariants,
  NewsCardImageContainer,
  NewsCardInfoContainer,
  NewsCardTitle,
  NewsCardDescription,
  NewsCardAuthor,
  StyledExternalLink,
  NewsCardDate
} from "./styles";

import placeholder from "assets/images/placeholder.jpg";

dayjs.extend(LocalizedFormat);

const NewsCard = ({
  article: {
    description,
    publishedAt,
    source: { name },
    title,
    url,
    urlToImage,
    author
  },
  delay
}) => {
  return (
    <NewsCardContainer
      variants={newsCardVariants}
      animate="enter"
      initial="exit"
      transition={{ delay: delay * 0.1 + 0.1 }}
    >
      <NewsCardImageContainer>
        <img src={urlToImage ? urlToImage : placeholder} alt="broken link " />
        <NewsCardDate>
          <span>{dayjs(publishedAt).format("D")}</span>
          <span>{dayjs(publishedAt).format("MMM")}</span>
        </NewsCardDate>
      </NewsCardImageContainer>
      <NewsCardInfoContainer>
        {title && (
          <NewsCardTitle>
            <span>{title}</span>
            {url && (
              <StyledExternalLink
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkSquareAlt />
              </StyledExternalLink>
            )}
          </NewsCardTitle>
        )}
        {description && (
          <NewsCardDescription>{description}</NewsCardDescription>
        )}
        {author && <NewsCardAuthor>By {author}</NewsCardAuthor>}
      </NewsCardInfoContainer>
    </NewsCardContainer>
  );
};

export default NewsCard;
