import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: [0.7, 0.2, 0.5, 0.7], duration: 0.4 },
  },
  hidden: { opacity: 0, y: 30 },
};

const Styled_Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 1em;
`;
const Styled_Box = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  max-width: 360px;
  min-width: 300px;
`;
const Styled_Social = styled(motion.a)`
  font-weight: 600;
  line-height: 165%;
  text-decoration: none;
  text-transform: uppercase;
  margin: 0 1em;

  font-size: ${(props) => props.theme.size.xs};
  color: ${(props) =>
    props.isDark ? props.theme.colors.dark : props.theme.colors.light};
`;

const Social = ({ className, isDark = true }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <Styled_Footer className={className} ref={ref}>
      <Styled_Box>
        <Styled_Social
          children="facebook"
          isDark={isDark}
          href="#"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        />
        <Styled_Social
          children="behance"
          isDark={isDark}
          href="#"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        />
        <Styled_Social
          children="github"
          isDark={isDark}
          href="#"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        />
      </Styled_Box>
    </Styled_Footer>
  );
};
export default Social;
