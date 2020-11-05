import styled from "styled-components";
import Button from "../../components/Button";
import Title from "../../components/Title";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import PhotoItem from "../../components/PhotoItem";

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
  background: ${(props) => props.theme.colors.dark};
`;
export const Styled_Article = styled.article`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 50vh 1fr auto;
  margin-bottom: 3em;

  @media screen and (orientation: portrait) {
    grid-template-rows: 30vh 1fr auto;
  }
  @media screen and (min-width: 800px) and (orientation: landscape) {
    grid-template-rows: 70vh 1fr auto;
  }
`;
export const Styled_Title = styled(Title)`
  grid-area: 1/1/2/13;
  margin-top: 0.5em;
`;
export const Styled_Button = styled(Button)`
  grid-area: 2/1/3/13;
  margin-bottom: 1em;
`;
export const Styled_MobileLayoutPhoto_Box = styled.div`
  grid-area: 3/10/4/13;
  align-self: start;
  overflow: hidden;
`;
export const Styled_DeskopLayoutPhoto_Box = styled.div`
  grid-area: 3/1/4/9;
  align-self: start;
  overflow: hidden;
`;
export const Styled_Footer = styled(Footer)`
  grid-area: 3/1/4/13;

  @media screen and (orientation: landscape) {
    grid-area: 3/1/4/13;
  }
`;
