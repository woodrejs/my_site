import styled from "styled-components";
import Button from "../../components/Button";
import Title from "../../components/Title";
import { motion } from "framer-motion";

export const Styled_Bck = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.bck};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 3vw;
`;
export const Styled_Section = styled.section`
  max-width: 1366px;
  background: ${(props) => props.theme.colors.bck};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 2fr auto 5vh;
  height: calc(100vh - 90px);

  @media screen and (orientation: landscape) {
    height: 100vh;
  }
  @media screen and (min-width: 800px) and (orientation: landscape) {
    height: calc(100vh - 90px);
  }
  @media screen and (min-width: 1024px) and (orientation: landscape) {
    height: calc(100vh - 130px);
  }
`;
export const Styled_Title = styled(Title)`
  grid-area: 1/1/2/13;
  margin-top: 0.5em;
`;
export const Styled_SubTitle_Box = styled(motion.div)`
  grid-area: 1/1/2/13;
  justify-self: end;
  align-self: end;
  margin-bottom: 0.1em;
  overflow: hidden;
`;
export const Styled_SubTitle = styled(motion.h2)`
  font-weight: 400;
  font-size: ${(props) => props.theme.size.m};
  color: ${(props) => props.theme.colors.dark};
  line-height: 100%;
  text-transform: uppercase;

  @media screen and (min-width: 414px) and (orientation: portrait) {
    font-size: ${(props) => props.theme.size.l};
  }
  @media screen and (min-width: 1024px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.xl};
  }
`;
export const Styled_Photo_Box = styled(motion.div)`
  grid-area: 2/1/4/13;
  align-self: end;
  height: 50vh;
  overflow: hidden;

  @media screen and (min-width: 375px) and (orientation: portrait) {
    height: 60vh;
  }
  @media screen and (orientation: landscape) {
    height: 50vh;
  }
  @media screen and (min-width: 800px) and (orientation: landscape) {
    height: 30vh;
  }
  @media screen and (min-width: 1440px) and (orientation: landscape) {
    height: 25vh;
  }
  @media screen and (min-width: 1920px) and (orientation: landscape) {
    height: 30vh;
  }
`;
export const Styled_Photo = styled(motion.img)`
  width: 100%;
`;
export const Styled_Button = styled(Button)`
  grid-area: 2/2/3/13;
  align-self: end;
  justify-self: start;
`;
