import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { InView } from "react-intersection-observer";
import Button from "../Button";
import Photo from "../Photo";
import { motion } from "framer-motion";
import Line from "../Line";

const variants = {
  hidden: {
    opacity: 0,
    y: 40,
    skew: -10,
    rotateZ: 2,
  },
  visible: {
    opacity: 1,
    y: 0,
    skew: 0,
    rotateZ: 0,
    transition: { duration: 0.4, ease: [0.7, 0.2, 0.5, 0.7] },
  },
};

const Styled_Article = styled(motion.article)`
  @media screen and (orientation: landscape) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 1em auto 1em;
    height: unset;
  }
`;
const Styled_InfoBox = styled(Link)`
  grid-area: 2/1/3/13;
  justify-self: start;
  align-self: start;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 4vh);
  text-decoration: none;
  color: ${(props) => props.theme.colors.dark};

  @media screen and (orientation: portrait) {
    display: none;
  }
`;
const Styled_Title = styled(motion.h3)`
  grid-area: 1/1/2/4;
  display: none;
  font-weight: 600;
  font-size: ${(props) => props.theme.size.xs};
  line-height: 100%;
  text-transform: uppercase;

  @media screen and (orientation: landscape) {
    display: block;
  }
  @media screen and (min-width: 1280px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.s};
  }
`;
const Styled_Date = styled(motion.span)`
  grid-area: 1/5/2/6;
  display: none;

  font-weight: 400;
  font-size: ${(props) => props.theme.size.xs};
  line-height: 100%;
  text-transform: uppercase;

  @media screen and (min-width: 800px) and (orientation: landscape) {
    display: block;
  }
  @media screen and (min-width: 1280px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.s};
  }
`;
const Styled_Type = styled(motion.span)`
  grid-area: 2/5/3/6;
  display: none;
  font-weight: 400;
  font-size: ${(props) => props.theme.size.xs};
  line-height: 100%;
  text-transform: uppercase;

  @media screen and (min-width: 800px) and (orientation: landscape) {
    display: block;
  }
  @media screen and (min-width: 1280px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.s};
  }
`;
const Styled_DateData = styled(motion.span)`
  grid-area: 1/7/2/8;
  display: none;
  font-weight: 400;
  font-size: ${(props) => props.theme.size.xs};
  line-height: 100%;
  text-transform: uppercase;

  @media screen and (min-width: 800px) and (orientation: landscape) {
    display: block;
  }
  @media screen and (min-width: 1280px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.s};
  }
`;
const Styled_TypeData = styled(motion.span)`
  grid-area: 2/7/3/8;
  display: none;
  font-weight: 400;
  font-size: ${(props) => props.theme.size.xs};
  line-height: 100%;
  text-transform: uppercase;

  @media screen and (min-width: 800px) and (orientation: landscape) {
    display: block;
  }
  @media screen and (min-width: 1280px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.s};
  }
`;
const Styled_Number = styled(motion.div)`
  font-weight: 600;
  font-size: ${(props) => props.theme.size.s};
  line-height: 100%;
  text-transform: uppercase;
  margin: 1em 0;

  @media screen and (orientation: landscape) {
    grid-area: 2/1/3/13;
    justify-self: start;
    align-self: end;
    margin: 0;
  }
`;
const Styled_Photo_Box = styled(Link)`
  grid-area: 2/1/3/13;
  align-self: start;

  @media screen and (orientation: landscape) {
    grid-area: 2/9/3/13;
  }
`;
const Styled_Button = styled(Button)`
  margin: 1em 0;
  @media screen and (orientation: landscape) {
    display: none !important;
  }
`;
const Styled_Line = styled(Line)`
  grid-area: 1/1/2/13;
  align-self: start;
`;

const ProjectSection = ({ number, title, date, type, img }) => {
  return (
    <Styled_Article>
      <Styled_Line isDark={false} />

      <InView triggerOnce={true} threshold={0.2}>
        {({ inView, ref }) => (
          <Styled_Number
            ref={ref}
            children={number}
            variants={variants}
            animate={inView ? "visible" : "hidden"}
            initial="hidden"
          />
        )}
      </InView>

      <InView triggerOnce={true} threshold={0.2}>
        {({ inView, ref }) => (
          <Styled_InfoBox to="/project" ref={ref}>
            <Styled_Title
              children={title}
              variants={variants}
              animate={inView ? "visible" : "hidden"}
              initial="hidden"
            />
            <Styled_Date
              children="data"
              variants={variants}
              animate={inView ? "visible" : "hidden"}
              initial="hidden"
            />
            <Styled_Type
              children="typ"
              variants={variants}
              animate={inView ? "visible" : "hidden"}
              initial="hidden"
            />
            <Styled_TypeData
              children={type}
              variants={variants}
              animate={inView ? "visible" : "hidden"}
              initial="hidden"
            />
            <Styled_DateData
              children={date}
              variants={variants}
              animate={inView ? "visible" : "hidden"}
              initial="hidden"
            />
          </Styled_InfoBox>
        )}
      </InView>

      <Styled_Photo_Box to="/project">
        <Photo src={img} alt="project_photo" />
      </Styled_Photo_Box>

      <Styled_Button title={title} to="/project" />
    </Styled_Article>
  );
};

export default ProjectSection;
