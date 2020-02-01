import styled from "styled-components";
import { motion } from "framer-motion";

const NewsCardContainer = styled(motion.div)`
  width: 400px;
  height: 400px;
  border-radius: 10px;
  background-color: #fff;
  margin-right: 10px;
  margin-bottom: 10px;
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

export { NewsCardContainer, newsCardVariants };
