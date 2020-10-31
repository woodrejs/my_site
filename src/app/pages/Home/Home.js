import React from "react";
import styled from "styled-components";
import image from "../../../assets/images/my_photo.jpg";
import Button from "../../components/Button";
import Photo from "../../components/Photo";
import Title from "../../components/Title";
import { motion } from "framer-motion";

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: [0.7, 0.2, 0.5, 0.7], duration: 0.6 },
  },
  hidden: { opacity: 0, y: 80 },
};
const variants_photo = {
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    scale: 1,
    transition: { ease: [0.7, 0.2, 0.5, 0.7], duration: 0.6 },
  },
  hidden: { opacity: 0, y: 200, skewY: 15, scale: 0.9 },
};

const Styled_Section = styled.section`
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
const Styled_Title = styled(Title)`
  grid-area: 1/1/2/13;
  margin-top: 0.5em;
`;
const Styled_SubTitle_Box = styled(motion.div)`
  grid-area: 1/1/2/13;
  justify-self: end;
  align-self: end;
  margin-bottom: 0.1em;
  overflow: hidden;
`;
const Styled_SubTitle = styled(motion.h2)`
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
const Styled_Photo_Box = styled(motion.div)`
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
const Styled_Photo = styled(motion.img)`
  width: 100%;
`;
const Styled_Button = styled(Button)`
  grid-area: 2/2/3/13;
  align-self: end;
  justify-self: start;
`;

const Home = ({ prevPath, click }) => {
  return (
    <Styled_Section>
      <Styled_Title size="l" title="frontend developer" />

      <Styled_SubTitle_Box
        children={
          <Styled_SubTitle
            children="ui/ux designer"
            variants={variants}
            initial="hidden"
            animate="visible"
          />
        }
      />

      <Styled_Photo_Box
        children={
          <Styled_Photo
            src={image}
            alt="my_photo"
            variants={variants_photo}
            animate="visible"
            initial="hidden"
          />
        }
      />

      <Styled_Button title="o mnie" to="/about" isDark={false} click={click} />
    </Styled_Section>
  );
};

export default Home;
