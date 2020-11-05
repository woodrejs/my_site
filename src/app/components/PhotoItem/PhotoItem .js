import React from "react";
import { LightgalleryItem } from "react-lightgallery";
import { variants_photo } from "../../utils/motion";
import { motion } from "framer-motion";
import styled from "styled-components";

const Styled_Photo = styled(motion.img)`
  width: 100%;
  cursor: pointer;
`;

const PhotoItem = ({ image, alt, className }) => (
  <LightgalleryItem group="any" src={image} className={className}>
    <Styled_Photo
      src={image}
      alt={alt}
      variants={variants_photo}
      animate="visible"
      initial="hidden"
      exit="hidden"
    />
  </LightgalleryItem>
);

export default PhotoItem;
