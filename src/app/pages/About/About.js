import React from "react";
import { InView } from "react-intersection-observer";
import image from "../../../assets/images/my_photo.jpg";
import Footer from "../../components/Footer";
import { v4 as uuidv4 } from "uuid";
import { useViewportScroll, useTransform } from "framer-motion";
import Menu from "../../components/Menu";
import { variants_text, variants_photo } from "../../utils/motion";
import {
  Styled_Bck,
  Styled_Section,
  Styled_Article,
  Styled_Title,
  Styled_Photo,
  Styled_Text_Box,
  Styled_SubTitle,
  Styled_SubTitleOutline,
  Styled_ThirdTitle,
  Styled_Text,
  Styled_Photo_Box,
} from "./About.css";

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

const About = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  return (
    <Styled_Bck>
      <Menu />
      <Styled_Section>
        <Styled_Article>
          <Styled_Photo_Box>
            <Styled_Photo
              src={image}
              alt="my_photo"
              variants={variants_photo}
              animate="visible"
              initial="hidden"
              exit="hidden"
              style={{ scale }}
            />
          </Styled_Photo_Box>
          <Styled_Title title="o mnie" size="l" isDark={false} />

          <Styled_Text_Box>
            <Styled_SubTitle
              title="frontend developer"
              size="m"
              isDark={false}
            />

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
                  exit="hidden"
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
                  exit="hidden"
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
                  exit="hidden"
                />
              )}
            </InView>
          </Styled_Text_Box>
        </Styled_Article>
      </Styled_Section>
      <Footer isDark={false} />
    </Styled_Bck>
  );
};
export default About;
