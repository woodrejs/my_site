import React from "react";
import { LightgalleryItem } from "react-lightgallery";
import { variants_photo } from "../../utils/motion/photo.motion";
import { motion } from "framer-motion";
import styled from "styled-components";

const StyledPhoto = styled(motion.img)`
  width: 100%;
  cursor: pointer;
`;

const PhotoItem = ({ image, alt, className }) => {
  console.log(image.xl);
  return (
    <LightgalleryItem group="any" src={image.xl} className={className}>
      <StyledPhoto
        srcSet={`${image.sm} 260w,
       ${image.m} 640w,
       ${image.xl} 920w`}
        sizes="(max-width: 414px) 260px,
        (max-width: 1024px) 640px,
        920px"
        src={image.xl}
        alt={alt}
        variants={variants_photo}
        animate="visible"
        initial="hidden"
        exit="hidden"
      />
    </LightgalleryItem>
  );
};

export default PhotoItem;
