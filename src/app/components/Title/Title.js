import React from "react";
import { useInView } from "react-intersection-observer";
import { variants_title } from "../../utils/motion";
import {
  Styled_Title,
  Styled_box,
  Styled_H1,
  Styled_H2,
  Styled_H3,
} from "./Title.css";

const Title = ({ size, className, title, isDark = true }) => {
  const { ref, inView } = useInView({
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
            variants={variants_title}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            exit="hidden"
          />
        )}
        {size === "m" && (
          <Styled_H2
            children={title}
            isDark={isDark}
            variants={variants_title}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            exit="hidden"
          />
        )}
        {size === "s" && (
          <Styled_H3
            children={title}
            isDark={isDark}
            variants={variants_title}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            exit="hidden"
          />
        )}
      </Styled_box>
    </Styled_Title>
  );
};

export default Title;
