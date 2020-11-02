import Title from "../../components/Title";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Styled_Bck = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 3vw;
`;
export const Styled_Section = styled.section`
  max-width: 1366px;
  @media screen and (orientation: landscape) {
    padding-top: 3em;
  }
`;
export const Styled_Article = styled.article`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto auto auto;

  @media screen and (orientation: landscape) {
    grid-template-rows: auto auto;
  }
`;
export const Styled_Title = styled(Title)`
  grid-area: 1/1/2/13;
  margin: 3em 0;
  z-index: 1;
  @media screen and (orientation: landscape) {
    grid-area: 1/1/2/7;
    justify-self: end;
    margin-top: 1em;
  }
  @media screen and (min-width: 800px) and (orientation: landscape) {
    grid-area: 1/1/2/8;
  }
  @media screen and (min-width: 1920px) and (orientation: landscape) {
    margin-top: 5em;
    grid-area: 1/1/2/9;
  }
`;
export const Styled_Photo = styled(motion.img)`
  width: 100%;
  transform-origin: bottom;
`;
export const Styled_Photo_Box = styled.div`
  grid-area: 2/1/3/13;
  width: 100%;
  overflow: hidden;

  @media screen and (orientation: landscape) {
    grid-area: 1/6/2/13;
  }
  @media screen and (min-width: 800px) and (orientation: landscape) {
    grid-area: 1/7/2/13;
  }
  @media screen and (min-width: 1920px) and (orientation: landscape) {
    grid-area: 1/8/2/13;
  }
`;
export const Styled_Text_Box = styled.div`
  grid-area: 3/1/4/13;
  margin: -1.5em 0 5em 0;
  z-index: 1;
  @media screen and (orientation: landscape) {
    grid-area: 2/5/3/13;
    margin: -3.5em 0 8em 0;
  }
  @media screen and (min-width: 800px) and (orientation: landscape) {
    grid-area: 2/6/3/13;
  }
  @media screen and (min-width: 1920px) and (orientation: landscape) {
    margin: -6.5em 0 8em 0;
    grid-area: 2/7/3/13;
  }
`;
export const Styled_SubTitle = styled(Title)`
  margin: 0 0 1em 0;

  @media screen and (orientation: landscape) {
    max-width: 40vw;
  }
`;
export const Styled_SubTitleOutline = styled(Title)`
  margin-bottom: 4em;
  z-index: 1;
  -webkit-text-fill-color: ${(props) => props.theme.colors.dark};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${(props) => props.theme.colors.light};
`;
export const Styled_ThirdTitle = styled(Title)`
  margin-bottom: 3em;
`;
export const Styled_Text = styled(motion.p)`
  margin-bottom: 5em;
  font-weight: 400;
  font-size: ${(props) => props.theme.size.xs};
  color: ${(props) => props.theme.colors.light};
  line-height: 180%;
  transform-origin: top left;

  @media screen and (min-width: 600px) and (orientation: portrait) {
    font-size: ${(props) => props.theme.size.s};
  }
  @media screen and (min-width: 736px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.s};
  }
  @media screen and (min-width: 1440px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.m};
  }
`;
