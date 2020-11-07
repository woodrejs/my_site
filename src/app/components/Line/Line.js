import React from "react";
import { InView } from "react-intersection-observer";
import { StyledLine } from "./Line.css";
import { variants_line } from "../../utils/motion/index";

const Line = ({ isDark, className }) => {
  return (
    <InView triggerOnce={true}>
      {({ inView, ref }) => (
        <StyledLine
          ref={ref}
          className={className}
          isDark={isDark}
          variants={variants_line}
          animate={inView ? "visible" : "hidden"}
          initial="hidden"
          exit="hidden"
        />
      )}
    </InView>
  );
};

export default Line;
