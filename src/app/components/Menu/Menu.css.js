import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Line from "../Line";

export const Styled_nav = styled.nav`
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
export const Styled_Menu = styled.div`
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
  hr {
    display: none;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.02em;
    margin-bottom: 0.2em;
    color: ${(props) =>
      props.isBckDark
        ? (props) => props.theme.colors.light
        : (props) => props.theme.colors.dark};
    font-size: ${(props) => props.theme.size.xxs};
  }

  @media screen and (min-width: 768px) and (orientation: portrait) {
    a {
      font-size: ${(props) => props.theme.size.xs};
    }
  }

  @media screen and (min-width: 1024px) and (orientation: landscape) {
    a {
      font-size: ${(props) => props.theme.size.xs};
    }
  }
`;
export const Styled_Logo = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  grid-area: 1/1/2/6;
  text-decoration: none;
  svg {
    height: 25px;
  }
  @media screen and (orientation: portrait) {
    grid-area: 1/1/2/8;
  }
`;
export const Styled_BrandName = styled.span`
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
export const Styled_Hamburger = styled.div`
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
export const Styled_Span = styled.span`
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
export const Styled_MobileMenu = styled.div`
  position: fixed;
  height: 100vh;
  width: 70%;
  top: 0;
  right: -70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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
export const Styled_BtnBox = styled.div`
  flex: 1;
  width: 80%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  svg {
    cursor: pointer;
  }
  @media screen and (orientation: landscape) {
    flex: 2;
  }
`;
export const Styled_MenuBox = styled.div`
  flex: 8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const Styled_MobileMenuItem = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.02em;
  margin-bottom: 3em;
  cursor: pointer;
  color: ${(props) =>
    props.isBckDark
      ? (props) => props.theme.colors.dark
      : (props) => props.theme.colors.bck};
  font-size: ${(props) => props.theme.size.m};

  @media screen and (min-width: 375px) and (orientation: portrait) {
    font-size: ${(props) => props.theme.size.l};
  }
  @media screen and (min-width: 600px) and (orientation: portrait) {
    font-size: ${(props) => props.theme.size.xl};
  }
  @media screen and (orientation: landscape) {
    margin-bottom: 0.4em;
    font-size: ${(props) => props.theme.size.xl};
  }
`;
export const Styled_Box = styled(motion.div)`
  display: flex;
  align-self: center;
  align-items: center;
`;
export const Styled_Line = styled(Line)`
  grid-area: 1/1/2/13;
  align-self: end;
`;
