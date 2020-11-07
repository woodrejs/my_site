import React from "react";
import { useInView } from "react-intersection-observer";
import { variants_arrow, variants_title } from "../../utils/motion/index";
import {
  StyledArrowBox,
  StyledArrow,
  StyledButton,
  StyledTextBox,
  StyledText,
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
    <StyledButton ref={ref} to={to} className={className}>
      <StyledTextBox>
        <StyledText
          children={title}
          isSmall={isSmall}
          isDark={isDark}
          variants={variants_title}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          exit="hidden"
          whileHover={{ scale: 0.9 }}
        />
      </StyledTextBox>
      <StyledArrowBox invertArrow={invertArrow}>
        <StyledArrow
          src={
            isDark
              ? `${process.env.PUBLIC_URL}/assets/icons/dark_arrow_icon.svg`
              : `${process.env.PUBLIC_URL}/assets/icons/light_arrow_icon.svg`
          }
          alt="arrow_icon"
          variants={variants_arrow}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          exit="hidden"
        />
      </StyledArrowBox>
    </StyledButton>
  );
};

export default Button;
