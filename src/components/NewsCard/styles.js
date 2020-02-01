import styled from "styled-components";
import { motion } from "framer-motion";

const NewsCardContainer = styled(motion.div)`
  width: 400px;
  /* height: 400px; */
  border-radius: 10px;
  background-color: #fff;
  margin-right: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  padding: 7px;
  overflow-x: hidden;
`;

const NewsCardImageContainer = styled.div`
  width: 100%;
  height: 50%;
  position: relative;

  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NewsCardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    color: ${props => props.theme.activeLink};
    font-weight: 700;
    width: 90%;
  }
`;

const NewsCardDescription = styled.p`
  margin-top: 5px;
`;

const NewsCardAuthor = styled.span`
  color: ${props => props.theme.textLight};
  margin-top: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
`;

const NewsCardInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 10px;
  height: 50%;
`;

const StyledExternalLink = styled.a`
  color: inherit;
  text-decoration: none;
  font-size: 24px;
  transition: all 0.3s ease;
  margin: 0 5px 0 auto;
  align-self: flex-start;
`;

const NewsCardDate = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  padding: 5px;
  border-radius: 50%;
  background-color: ${props => props.theme.activeLink};
  align-items: center;
  span {
    color: white;
  }
`;

const newsCardVariants = {
  exit: {
    opacity: 0,
    scale: 0
  },
  enter: {
    opacity: 1,
    scale: 1
  }
};

export {
  NewsCardContainer,
  newsCardVariants,
  NewsCardImageContainer,
  NewsCardTitle,
  NewsCardInfoContainer,
  NewsCardDescription,
  NewsCardAuthor,
  StyledExternalLink,
  NewsCardDate
};
