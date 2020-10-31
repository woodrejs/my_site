import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Social from "../../components/Social";
import Line from "../../components/Line";
import Title from "../../components/Title";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

const data = {
  title: "woodrejs@gmail.com",
  text:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
};

const variants_text = {
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
    transition: { duration: 0.6, ease: [0.7, 0.2, 0.5, 0.7] },
  },
};

const Styled_Section = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 2fr 5fr 2fr auto;

  height: calc(100vh - 90px);
  @media screen and (min-width: 600px) and (orientation: portrait) {
    height: calc(100vh - 130px);
  }
  @media screen and (min-width: 1024px) and (orientation: landscape) {
    height: calc(100vh - 130px);
  }
`;
const Styled_Title = styled(Title)`
  grid-area: 1/1/2/13;
  align-self: end;
  word-wrap: break-word;
  max-width: 28ch;

  @media screen and (min-width: 568px) and (orientation: landscape) {
    max-width: unset;
  }
  @media screen and (min-width: 600px) and (orientation: portrait) {
    max-width: 40ch;
  }
`;
const Styled_Text = styled(motion.p)`
  font-weight: 400;
  font-size: ${(props) => props.theme.size.xxs};
  color: ${(props) => props.theme.colors.dark};
  line-height: 160%;
  max-width: 45ch;

  grid-area: 2/1/3/13;
  align-self: start;
  margin-top: 1em;

  @media screen and (min-width: 375px) and (orientation: portrait) {
    font-size: ${(props) => props.theme.size.xs};
  }
  @media screen and (min-width: 600px) and (orientation: portrait) {
    font-size: ${(props) => props.theme.size.s};
  }
  @media screen and (min-width: 600px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.s};
  }
  @media screen and (min-width: 800px) and (orientation: landscape) {
    margin-top: 2em;
  }
`;
const Styled_Line = styled(Line)`
  grid-area: 4/1/5/13;
  align-self: start;
`;
const Styled_Social = styled(Social)`
  grid-area: 4/1/5/13;
  align-self: start;
  margin-top: 0.2em;

  @media screen and (orientation: landscape) {
    justify-content: flex-start;
  }
`;
const Styled_Button = styled(Button)`
  grid-area: 3/1/4/13;
`;

const Contact = ({ prevPath }) => {
  return (
    <Styled_Section>
      <Styled_Title isDark={true} size="m" title="m.szczepanski@gmail.com" />

      <InView triggerOnce={true} threshold={0.2}>
        {({ inView, ref }) => (
          <Styled_Text
            ref={ref}
            children={data.text}
            variants={variants_text}
            animate={inView ? "visible" : "hidden"}
            initial="hidden"
          />
        )}
      </InView>

      <Styled_Button isDark={true} isSmall={true} title="napisz do mnie" />
      <Styled_Line />
      <Styled_Social />
    </Styled_Section>
  );
};

export default Contact;
