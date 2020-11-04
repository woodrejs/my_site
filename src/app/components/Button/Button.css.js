import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Styled_Button = styled(motion.custom(Link))`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-decoration: none;
`;
export const Styled_Text_Box = styled.div`
  overflow: hidden;
`;
export const Styled_Text = styled(motion.div)`
  font-weight: 600;
  text-transform: uppercase;
  color: ${(props) =>
    props.isDark ? props.theme.colors.dark : props.theme.colors.light};

  font-size: ${(props) =>
    props.isSmall ? props.theme.size.xs : props.theme.size.l};

  @media screen and (min-width: 600px) and (orientation: portrait) {
    font-size: ${(props) =>
      props.isSmall ? props.theme.size.s : props.theme.size.xxl};
  }
  @media screen and (min-width: 768px) and (orientation: portrait) {
    font-size: ${(props) => props.isSmall && props.theme.size.m};
  }
  @media screen and (min-width: 667px) and (orientation: landscape) {
    font-size: ${(props) => !props.isSmall && props.theme.size.xl};
  }
  @media screen and (min-width: 800px) and (orientation: landscape) {
    font-size: ${(props) => props.isSmall && props.theme.size.m};
  }
  @media screen and (min-width: 1280px) and (orientation: landscape) {
    font-size: ${(props) => !props.isSmall && props.theme.size.xxl};
  }
  @media screen and (min-width: 1440px) and (orientation: landscape) {
    font-size: ${(props) => !props.isSmall && props.theme.size.xxxl};
  }
`;
export const Styled_Arrow_Box = styled(motion.dv)`
  transform: rotateZ(${(props) => (props.invertArrow ? 180 : 0)}deg);
`;
export const Styled_Arrow = styled(motion.img)`
  transform-origin: left;
`;
