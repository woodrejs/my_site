import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import ArrowDark from "../../../assets/icons/dark_arrow_icon.svg";
import ArrowLight from "../../../assets/icons/light_arrow_icon.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants_text = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: [0.7, 0.2, 0.5, 0.7], duration: 0.6, delay: 0.2 },
  },
  hidden: { opacity: 0, y: 80 },
};
const variants_arrow = {
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: "easeInOut", delay: 0.2 },
  },
  hidden: { scaleX: 0 },
};

const Styled_Button = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-decoration: none;
`;
const Styled_Text_Box = styled.div`
  overflow: hidden;
`;
const Styled_Text = styled(motion.div)`
  font-weight: 600;
  text-transform: uppercase;
  color: ${(props) =>
    props.isDark ? props.theme.colors.dark : props.theme.colors.light};

  font-size: ${(props) =>
    props.isSmall ? props.theme.size.xs : props.theme.size.l};

  @media screen and (min-width: 600px) and (orientation: portrait) {
    font-size: ${(props) =>
      props.isSmall ? props.theme.size.s : props.theme.size.xxl};
  }
  @media screen and (min-width: 768px) and (orientation: portrait) {
    font-size: ${(props) => props.isSmall && props.theme.size.m};
  }
  @media screen and (min-width: 667px) and (orientation: landscape) {
    font-size: ${(props) => !props.isSmall && props.theme.size.xl};
  }
  @media screen and (min-width: 800px) and (orientation: landscape) {
    font-size: ${(props) => props.isSmall && props.theme.size.m};
  }
  @media screen and (min-width: 1280px) and (orientation: landscape) {
    font-size: ${(props) => !props.isSmall && props.theme.size.xxl};
  }
  @media screen and (min-width: 1440px) and (orientation: landscape) {
    font-size: ${(props) => !props.isSmall && props.theme.size.xxxl};
  }
`;
const Styled_Arrow_Box = styled(motion.dv)`
  transform: rotateZ(${(props) => (props.invertArrow ? 180 : 0)}deg);
`;
const Styled_Arrow = styled(motion.img)`
  transform-origin: left;
`;

const Button = ({
  title,
  isDark = true,
  isSmall = true,
  to,
  invertArrow = false,
  className,
  click,
}) => {
  const pathname = useLocation().pathname;
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <Styled_Button
      ref={ref}
      to={to}
      className={className}
      onClick={() => click(pathname)}
    >
      <Styled_Text_Box>
        <Styled_Text
          children={title}
          isSmall={isSmall}
          isDark={isDark}
          variants={variants_text}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          exit="initial"
        />
      </Styled_Text_Box>
      <Styled_Arrow_Box invertArrow={invertArrow}>
        <Styled_Arrow
          src={isDark ? ArrowDark : ArrowLight}
          alt="arrow_icon"
          variants={variants_arrow}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          exit="initial"
        />
      </Styled_Arrow_Box>
    </Styled_Button>
  );
};

export default Button;
