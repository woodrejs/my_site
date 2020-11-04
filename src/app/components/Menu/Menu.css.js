import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Line from "../Line";

export const Styled_Nav = styled.nav`
  max-width: 1366px;
  width: 100%;
  height: 90px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  background: ${(props) =>
    props.isBckDark
      ? (props) => props.theme.colors.dark
      : (props) => props.theme.colors.bck};

  @media screen and (min-width: 600px) and (orientation: portrait) {
    height: 130px;
  }
  @media screen and (min-width: 1024px) and (orientation: landscape) {
    height: 130px;
  }
`;
export const Styled_Brand = styled(motion.custom(Link))`
  display: flex;
  align-self: center;
  align-items: center;
  grid-area: 1/1/2/6;
  text-decoration: none;

  @media screen and (orientation: portrait) {
    grid-area: 1/1/2/8;
  }
`;
export const Styled_Brand_Icon = styled(motion.img)`
  height: 18px;
`;
export const Styled_Brand_Name = styled(motion.span)`
  margin-left: 1em;
  text-transform: uppercase;

  font-weight: 600;
  letter-spacing: 0.02em;
  color: ${(props) =>
    props.isBckDark
      ? (props) => props.theme.colors.light
      : (props) => props.theme.colors.dark};
  font-size: ${(props) => props.theme.size.xxs};

  @media screen and (min-width: 1024px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.xs};
  }
  @media screen and (min-width: 600px) and (orientation: portrait) {
    font-size: ${(props) => props.theme.size.xs};
  }
`;
export const Styled_Menu = styled(motion.div)`
  display: none;
  align-self: center;
  justify-content: space-between;

  @media screen and (min-width: 667px) and (orientation: landscape) {
    display: flex;
    grid-area: 1/8/2/13;
  }
  @media screen and (min-width: 1366px) and (orientation: landscape) {
    grid-area: 1/9/2/13;
  }
  @media screen and (min-width: 768px) and (orientation: portrait) {
    display: flex;
    grid-area: 1/8/2/13;
  }
`;
export const Styled_MenuItem = styled(motion.div)`
  cursor: pointer;
  transition: 0.3s;
  scale: ${(props) => (props.current ? 1.1 : 1)}

  :hover {
    scale: 1.1;
  }
  :hover hr {
    scale: 1;
  }
`;
export const Styled_MenuItem_Link = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.02em;
  line-height: 180%;

  color: ${(props) =>
    props.isBckDark
      ? (props) => props.theme.colors.light
      : (props) => props.theme.colors.dark};
  font-size: ${(props) => props.theme.size.xxs};

  @media screen and (min-width: 768px) and (orientation: portrait) {
    font-size: ${(props) => props.theme.size.xs};
  }
  @media screen and (min-width: 1024px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.xs};
  }
`;
export const Styled_MenuItem_UnderLine = styled(motion.hr)`
  transform-origin: left;
  transition: 0.3s;
  scale: ${(props) => (props.current ? 1 : 0)};
  color: ${(props) =>
    props.isBckDark
      ? (props) => props.theme.colors.light
      : (props) => props.theme.colors.dark};
`;
export const Styled_Hamburger = styled(motion.div)`
  align-self: center;
  grid-area: 1/9/2/13;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;

  @media screen and (min-width: 667px) and (orientation: landscape) {
    display: none;
  }
  @media screen and (min-width: 768px) and (orientation: portrait) {
    display: none;
  }
`;
export const Styled_Hamburger_Name = styled(motion.span)`
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.02em;
  line-height: 100%;
  margin-right: 1.2em;
  color: ${(props) =>
    props.isBckDark
      ? (props) => props.theme.colors.light
      : (props) => props.theme.colors.dark};
  font-size: ${(props) => props.theme.size.xxs};
`;
export const Styled_Hamburger_Icon = styled(motion.img)``;
export const Styled_MobileMenu = styled(motion.div)`
  position: fixed;
  height: 100vh;
  width: 70%;
  top: 0;
  right: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 10;
  background: ${(props) =>
    props.isBckDark
      ? (props) => props.theme.colors.bck
      : (props) => props.theme.colors.dark};

  @media screen and (min-width: 768px) and (orientation: portrait) {
    display: none;
  }
  @media screen and (min-width: 667px) and (orientation: landscape) {
    display: none;
  }
`;
export const Styled_MobileMenu_CloseBtn = styled(motion.img)`
  position: absolute;
  top: 50px;
  right: 50px;
  width: 20px;

  cursor: pointer;

  @media screen and (orientation: landscape) {
    flex: 2;
  }
`;
export const Styled_MobileMenu_Box = styled(motion.div)`
  flex: 8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const Styled_MobileMenu_Item = styled(motion.div)`
  margin: 2em 0;
  cursor: pointer;

  @media screen and (min-width: 375px) and (orientation: portrait) {
    margin: 3em 0;
  }
  @media screen and (orientation: landscape) {
    margin: 0.3em 0;
  }
`;
export const Styled_MobileMenu_Link = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.02em;
  font-size: ${(props) => props.theme.size.m};
  color: ${(props) =>
    props.isBckDark
      ? (props) => props.theme.colors.dark
      : (props) => props.theme.colors.bck};

  @media screen and (min-width: 375px) and (orientation: portrait) {
    font-size: ${(props) => props.theme.size.l};
  }
  @media screen and (min-width: 600px) and (orientation: portrait) {
    font-size: ${(props) => props.theme.size.xl};
  }
  @media screen and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.xl};
  }
`;
export const Styled_Line = styled(Line)`
  grid-area: 1/1/2/13;
  align-self: end;
`;
