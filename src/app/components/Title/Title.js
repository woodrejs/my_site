import React from "react";
import { useInView } from "react-intersection-observer";
import { variants_title } from "../../utils/motion/index";
import {
  StyledTitle,
  StyledBox,
  StyledH1,
  StyledH2,
  StyledH3,
} from "./Title.css";

const Title = ({ size, className, title, isDark = true }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <StyledTitle className={className} ref={ref}>
      <StyledBox>
        {size === "l" && (
          <StyledH1
            children={title}
            isDark={isDark}
            variants={variants_title}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            exit="hidden"
          />
        )}
        {size === "m" && (
          <StyledH2
            children={title}
            isDark={isDark}
            variants={variants_title}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            exit="hidden"
          />
        )}
        {size === "s" && (
          <StyledH3
            children={title}
            isDark={isDark}
            variants={variants_title}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            exit="hidden"
          />
        )}
      </StyledBox>
    </StyledTitle>
  );
};

export default Title;
