import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    scale: 1,
    transition: { ease: [0.7, 0.2, 0.5, 0.7], duration: 0.6 },
  },
  hidden: { opacity: 0, y: 200, skewY: 15, scale: 0.9 },
};

const Styled_Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const Styled_Photo = styled(motion.img)`
  width: 100%;
`;

const Photo = ({ src, alt, className }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <Styled_Box className={className}>
      <Styled_Photo
        src={src}
        alt={alt}
        ref={ref}
        variants={variants}
        animate={inView ? "visible" : "hidden"}
        initial="hidden"
      />
    </Styled_Box>
  );
};

export default Photo;
