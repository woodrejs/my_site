import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: [0.7, 0.2, 0.5, 0.7], duration: 0.6 },
  },
  hidden: { opacity: 0, y: 80 },
};

const Styled_Title = styled.div``;
const Styled_box = styled.div`
  overflow: hidden;
`;
const Styled_H1 = styled(motion.h1)`
  font-weight: 600;
  font-size: ${(props) => props.theme.size.xxxl};
  color: ${(props) =>
    props.isDark ? props.theme.colors.dark : props.theme.colors.light};
  line-height: 82.68%;
  letter-spacing: -0.05em;
  text-transform: uppercase;

  @media screen and (min-width: 414px) and (orientation: portrait) {
    font-size: ${(props) => props.theme.size.xxxxl};
  }
  @media screen and (min-width: 600px) and (orientation: portrait) {
    font-size: ${(props) => props.theme.size.xxxxxxl};
  }
  @media screen and (min-width: 768px) and (orientation: portrait) {
    font-size: ${(props) => props.theme.size.xxxxxxxl};
  }

  @media screen and (min-width: 667px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.xxxxxl};
  }
  @media screen and (min-width: 800px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.xxxxxxxl};
  }
  @media screen and (min-width: 1024px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.xxxxxxxxl};
  }
  @media screen and (min-width: 1280px) and (orientation: landscape) {
    font-size: 180px;
  }
  @media screen and (min-width: 1920px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.xxxxxxxxxl};
  }
`;
const Styled_H2 = styled(motion.h2)`
  font-weight: 600;
  font-size: ${(props) => props.theme.size.xl};
  color: ${(props) =>
    props.isDark ? props.theme.colors.dark : props.theme.colors.light};
  line-height: 98.18%;
  margin-bottom: 5px;
  text-transform: uppercase;

  @media screen and (min-width: 600px) and (orientation: portrait) {
    font-size: ${(props) => props.theme.size.xxxl};
  }
  @media screen and (min-width: 800px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.xxl};
  }
  @media screen and (min-width: 1024px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.xxxl};
  }
  @media screen and (min-width: 1440px) and (orientation: landscape) {
    font-size: ${(props) => props.theme.size.xxxxxl};
  }
`;
const Styled_H3 = styled(motion.h3)`
  font-weight: 600;
  font-size: ${(props) => props.theme.size.l};
  color: ${(props) =>
    props.isDark ? props.theme.colors.dark : props.theme.colors.light};
  line-height: 98.18%;

  text-transform: uppercase;
`;

const Title = ({ size, className, title, isDark = true }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <Styled_Title className={className} ref={ref}>
      <Styled_box>
        {size === "l" && (
          <Styled_H1
            children={title}
            isDark={isDark}
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          />
        )}
        {size === "m" && (
          <Styled_H2
            children={title}
            isDark={isDark}
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          />
        )}
        {size === "s" && (
          <Styled_H3
            children={title}
            isDark={isDark}
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          />
        )}
      </Styled_box>
    </Styled_Title>
  );
};

export default Title;
