import React, { useEffect, useRef } from "react";
import { InView } from "react-intersection-observer";
import Scrollbar from "smooth-scrollbar";
import { useMotionValue } from "framer-motion";
import Footer from "../../components/Footer";
import { useTransform } from "framer-motion";
import Nav from "../../components/Nav";
import { variants_photo, variants_text } from "../../utils/motion/index";
import { DATA } from "./About.data";
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

const About = () => {
  const scrollRef = useRef(null);
  const scrollY = useMotionValue(0);
  const scale = useTransform(scrollY, [0, 1500], [1, 1.3]);

  useEffect(() => {
    const scrollBar = Scrollbar.init(scrollRef.current, { damping: 0.07 });
    scrollBar.track.xAxis.element.remove();
    scrollBar.addListener((status) => {
      scrollY.set(status.offset.y);
      scrollBar.setPosition(0, status.offset.y);
    });
  });

  console.log("render");
  return (
    <StyledBck ref={scrollRef}>
      <Nav />
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

          <StyledTitle title="o mnie" size="l" />

          <StyledTextBox>
            <StyledSubTitle title="frontend developer" size="m" />

            <StyledSubTitleOutline title="ui/ux designer" size="m" />

            <InView triggerOnce={true} threshold={0.2}>
              {({ inView, ref }) => (
                <StyledText
                  ref={ref}
                  key={DATA.paragraph_A.id}
                  children={DATA.paragraph_A.text}
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
                  key={DATA.paragraph_B.id}
                  children={DATA.paragraph_B.text}
                  variants={variants_text}
                  animate={inView ? "visible" : "hidden"}
                  initial="hidden"
                  exit="hidden"
                />
              )}
            </InView>

            <StyledThirdTitle title="oferta" size="s" />

            <InView triggerOnce={true} threshold={0.2}>
              {({ inView, ref }) => (
                <StyledText
                  ref={ref}
                  key={DATA.paragraph_C.id}
                  children={DATA.paragraph_C.text}
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
      <Footer />
    </StyledBck>
  );
};
export default About;
