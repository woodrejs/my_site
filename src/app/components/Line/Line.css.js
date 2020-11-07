import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledLine = styled(motion.div)`
  width: 100%;
  transform-origin: left;
  border-bottom: 1px solid
    ${(props) =>
      props.isDark
        ? (props) => props.theme.colors.dark
        : (props) => props.theme.colors.light};
`;
