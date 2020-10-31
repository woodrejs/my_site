import React from "react";
import styled from "styled-components";
import { InView } from "react-intersection-observer";
import image from "../../../assets/images/my_photo.jpg";
import Photo from "../../components/Photo";
import Title from "../../components/Title";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import { v4 as uuidv4 } from "uuid";

const data = {
  paragraph_A: {
    text:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
    id: uuidv4(),
  },
  paragraph_B: {
    text:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
    id: uuidv4(),
  },
  paragraph_C: {
    text:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
    id: uuidv4(),
  },
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
  @media screen and (orientation: landscape) {
    padding-top: 3em;
  }
`;
const Styled_Article = styled.article`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto auto auto;

  @media screen and (orientation: landscape) {
    grid-template-rows: auto auto;
  }
`;
const Styled_Title = styled(Title)`
  grid-area: 1/1/2/13;
  margin: 3em 0;

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
const Styled_Photo = styled(Photo)`
  grid-area: 2/1/3/13;

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
const Styled_Text_Box = styled.div`
  grid-area: 3/1/4/13;
  margin: -1.5em 0 5em 0;

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
const Styled_SubTitle = styled(Title)`
  margin: 0 0 1em 0;

  @media screen and (orientation: landscape) {
    max-width: 40vw;
  }
`;
const Styled_SubTitleOutline = styled(Title)`
  margin-bottom: 4em;
  -webkit-text-fill-color: ${(props) => props.theme.colors.dark};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${(props) => props.theme.colors.light};
`;
const Styled_ThirdTitle = styled(Title)`
  margin-bottom: 3em;
`;
const Styled_Text = styled(motion.p)`
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

const About = ({ prevPath, click }) => {
  return (
    <Styled_Section>
      <Styled_Article>
        <Styled_Photo src={image} alt="my_photo" />
        <Styled_Title title="o mnie" size="l" isDark={false} />

        <Styled_Text_Box>
          <Styled_SubTitle title="frontend developer" size="m" isDark={false} />

          <Styled_SubTitleOutline
            title="ui/ux designer"
            size="m"
            isDark={false}
          />

          <InView triggerOnce={true} threshold={0.2}>
            {({ inView, ref }) => (
              <Styled_Text
                ref={ref}
                key={data.paragraph_A.id}
                children={data.paragraph_A.text}
                variants={variants_text}
                animate={inView ? "visible" : "hidden"}
                initial="hidden"
              />
            )}
          </InView>

          <InView triggerOnce={true} threshold={0.2}>
            {({ inView, ref }) => (
              <Styled_Text
                ref={ref}
                key={data.paragraph_B.id}
                children={data.paragraph_B.text}
                variants={variants_text}
                animate={inView ? "visible" : "hidden"}
                initial="hidden"
              />
            )}
          </InView>

          <Styled_ThirdTitle title="oferta" size="s" isDark={false} />

          <InView triggerOnce={true} threshold={0.2}>
            {({ inView, ref }) => (
              <Styled_Text
                ref={ref}
                key={data.paragraph_C.id}
                children={data.paragraph_C.text}
                variants={variants_text}
                animate={inView ? "visible" : "hidden"}
                initial="hidden"
              />
            )}
          </InView>
        </Styled_Text_Box>
      </Styled_Article>

      <Footer isDark={false} click={click} />
    </Styled_Section>
  );
};
export default About;
