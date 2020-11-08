import React from "react";
import { useInView } from "react-intersection-observer";
import { variants_arrow, variants_title } from "../../utils/motion/index";
import { useCounter } from "../../utils/sweet_state";
import {
  StyledArrowBox,
  StyledArrow,
  StyledButton,
  StyledTextBox,
  StyledText,
} from "./Button.css";

const Button = ({
  title,
  isSmall = true,
  to,
  invertArrow = false,
  className,
}) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [state, actions] = useCounter();
  const arrowIcon = state.isdark
    ? `${process.env.PUBLIC_URL}/assets/icons/light_arrow_icon.svg`
    : `${process.env.PUBLIC_URL}/assets/icons/dark_arrow_icon.svg`;

  return (
    <StyledButton ref={ref} to={to} className={className}>
      <StyledTextBox>
        <StyledText
          children={title}
          isSmall={isSmall}
          isdark={state.isdark}
          variants={variants_title}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          exit="hidden"
          whileHover="hover"
        />
      </StyledTextBox>
      <StyledArrowBox invertArrow={invertArrow}>
        <StyledArrow
          src={arrowIcon}
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
