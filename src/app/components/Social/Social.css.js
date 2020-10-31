import styled from "styled-components";
import { motion } from "framer-motion";

export const Styled_Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 1em;
`;
export const Styled_Social_Box = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  max-width: 360px;
  min-width: 300px;
`;
export const Styled_Social_Item = styled(motion.a)`
  font-weight: 600;
  line-height: 165%;
  text-decoration: none;
  text-transform: uppercase;
  margin: 0 1em;

  font-size: ${(props) => props.theme.size.xs};
  color: ${(props) =>
    props.isDark ? props.theme.colors.dark : props.theme.colors.light};
`;
