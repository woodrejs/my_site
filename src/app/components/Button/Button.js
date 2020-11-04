import React from "react";
import ArrowDark from "../../../assets/icons/dark_arrow_icon.svg";
import ArrowLight from "../../../assets/icons/light_arrow_icon.svg";
import { useInView } from "react-intersection-observer";
import { variants_title, variants_arrow } from "../../utils/motion";
import {
  Styled_Arrow_Box,
  Styled_Arrow,
  Styled_Button,
  Styled_Text_Box,
  Styled_Text,
} from "./Button.css";

const Button = ({
  title,
  isDark = true,
  isSmall = true,
  to,
  invertArrow = false,
  className,
}) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <Styled_Button ref={ref} to={to} className={className}>
      <Styled_Text_Box>
        <Styled_Text
          children={title}
          isSmall={isSmall}
          isDark={isDark}
          variants={variants_title}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          exit="hidden"
          whileHover={{ scale: 0.9 }}
        />
      </Styled_Text_Box>
      <Styled_Arrow_Box invertArrow={invertArrow}>
        <Styled_Arrow
          src={isDark ? ArrowDark : ArrowLight}
          alt="arrow_icon"
          variants={variants_arrow}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          exit="hidden"
        />
      </Styled_Arrow_Box>
    </Styled_Button>
  );
};

export default Button;
