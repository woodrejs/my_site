import React, { useEffect } from "react";
import { InView } from "react-intersection-observer";
import Footer from "../../components/Footer";
import { v4 as uuidv4 } from "uuid";
import { useViewportScroll, useTransform } from "framer-motion";
import Menu from "../../components/Menu";
import { variants_photo, variants_text } from "../../utils/motion/index";
import {
  StyledBck,
  StyledSection,
  StyledArticle,
  StyledTitle,
  StyledPhoto,
  StyledTextBox,
  StyledSubTitle,
  StyledSubTitleOutline,
  StyledThirdTitle,
  StyledText,
  StyledPhotoBox,
} from "./About.css";
import Scrollbar from "smooth-scrollbar";

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
  const scroll = React.createRef();
  useEffect(() => {
    Scrollbar.init(scroll.current, { damping: 0.05 });
  });
  return (
    <StyledBck ref={scroll}>
      <Menu />
      <StyledSection>
        <StyledArticle>
          <StyledPhotoBox>
            <StyledPhoto
              srcSet={`${process.env.PUBLIC_URL}/assets/images/about/my_photo_736.jpg 736w,
              ${process.env.PUBLIC_URL}/assets/images/about/my_photo_1024.jpg 1024w,
              ${process.env.PUBLIC_URL}/assets/images/about/my_photo_2000.jpg 2000w`}
              sizes="(max-width: 736px) 736px,
              (max-width: 1024px) 1024px,
              2000px"
              src={`${process.env.PUBLIC_URL}/assets/images/about/my_photo_2000.jpg`}
              alt="my_photo"
              variants={variants_photo}
              animate="visible"
              initial="hidden"
              exit="hidden"
              style={{ scale }}
            />
          </StyledPhotoBox>
          <StyledTitle title="o mnie" size="l" isDark={false} />

          <StyledTextBox>
            <StyledSubTitle
              title="frontend developer"
              size="m"
              isDark={false}
            />

            <StyledSubTitleOutline
              title="ui/ux designer"
              size="m"
              isDark={false}
            />

            <InView triggerOnce={true} threshold={0.2}>
              {({ inView, ref }) => (
                <StyledText
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
                <StyledText
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

            <StyledThirdTitle title="oferta" size="s" isDark={false} />

            <InView triggerOnce={true} threshold={0.2}>
              {({ inView, ref }) => (
                <StyledText
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
          </StyledTextBox>
        </StyledArticle>
      </StyledSection>
      <Footer isDark={false} />
    </StyledBck>
  );
};
export default About;
