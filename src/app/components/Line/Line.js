import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { InView } from "react-intersection-observer";

const Styled_Line = styled(motion.div)`
  width: 100%;
  transform-origin: left;
  border-bottom: 1px solid
    ${(props) =>
      props.isDark
        ? (props) => props.theme.colors.dark
        : (props) => props.theme.colors.light};
`;

const variants = {
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
  hidden: { scaleX: 0 },
};

const Line = ({ isDark, className }) => {
  return (
    <InView triggerOnce={true}>
      {({ inView, ref, entry }) => (
        <Styled_Line
          ref={ref}
          className={className}
          isDark={isDark}
          variants={variants}
          animate={inView ? "visible" : "hidden"}
          initial="hidden"
        />
      )}
    </InView>
  );
};

export default Line;
