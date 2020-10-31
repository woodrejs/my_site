import React from "react";
import styled from "styled-components";
import ProjectSection from "../../components/ProjectSection";
import image from "../../../assets/images/photo.jpg";
import Title from "../../components/Title";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import Menu from "../../components/Menu";

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: [0.7, 0.2, 0.5, 0.7], duration: 0.6 },
  },
  hidden: { opacity: 0, y: 80 },
};

const Styled_Bck = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.bck};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 3vw;
`;
const Styled_Section = styled.section`
  max-width: 1366px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 40vh auto auto;

  @media screen and (min-width: 375px) and (orientation: portrait) {
    grid-template-rows: 40vh auto auto;
  }
  @media screen and (orientation: landscape) {
    grid-template-rows: 60vh auto auto;
  }
  @media screen and (min-width: 800px) and (orientation: landscape) {
    grid-template-rows: 70vh auto auto;
  }
  @media screen and (min-width: 1440px) and (orientation: landscape) {
    grid-template-rows: 75vh auto auto;
  }
  @media screen and (min-width: 1920px) and (orientation: landscape) {
    grid-template-rows: 80vh auto auto;
  }
`;
const Styled_Title = styled(Title)`
  grid-area: 1/1/2/13;
  align-self: start;
  margin-top: 5vh;
`;
const Styled_SubTitle_Box = styled.div`
  overflow: hidden;
  grid-area: 1/1/2/13;
  justify-self: end;
  align-self: end;
`;
const Styled_SubTitle = styled(motion.h4)`
  width: 100%;
  text-align: right;

  color: ${(props) => props.theme.colors.dark};
  font-weight: 400;
  font-size: ${(props) => props.theme.size.xs};
  line-height: 160%;
  text-transform: uppercase;
  margin-bottom: 0.5em;

  @media screen and (min-width: 1280px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.s};
  }
`;
const Styled_Projects_Box = styled.div`
  grid-area: 2/1/3/13;
`;
const Styled_Footer = styled(Footer)`
  grid-area: 3/1/4/13;
`;

const Portfolio = () => {
  return (
    <Styled_Bck>
      <Menu />
      <Styled_Section>
        <Styled_Title title="projekty" size="l" />

        <Styled_SubTitle_Box
          children={
            <Styled_SubTitle
              children="informacje"
              variants={variants}
              animate="visible"
              initial="hidden"
            />
          }
        />

        <Styled_Projects_Box>
          <ProjectSection
            img={image}
            type="ui/ux"
            date="25/10/2020"
            title="dekorator wnętrz"
            number="01"
          />
          <ProjectSection
            img={image}
            type="ui/ux"
            date="25/10/2020"
            title="dekorator wnętrz"
            number="01"
          />
        </Styled_Projects_Box>
      </Styled_Section>
      <Styled_Footer />
    </Styled_Bck>
  );
};

export default Portfolio;
