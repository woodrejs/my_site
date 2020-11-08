import React from "react";
import { variants_photo, variants_title } from "../../utils/motion/index";
import Nav from "../../components/Nav";
import {
  StyledBck,
  StyledSection,
  StyledTitle,
  StyledSubTitleBox,
  StyledSubTitle,
  StyledPhotoBox,
  StyledPhoto,
  StyledButton,
} from "./Home.css";

const Home = () => {
  return (
    <StyledBck>
      <Nav />
      <StyledSection>
        <StyledTitle size="l" title="frontend developer" />

        <StyledSubTitleBox>
          <StyledSubTitle
            children="ui/ux designer"
            variants={variants_title}
            initial="hidden"
            animate="visible"
            exit="hidden"
          />
        </StyledSubTitleBox>

        <StyledPhotoBox to="/about">
          <StyledPhoto
            srcSet={`${process.env.PUBLIC_URL}/assets/images/home/my_photo_736.jpg 736w,
            ${process.env.PUBLIC_URL}/assets/images/home/my_photo_1024.jpg 1024w,
            ${process.env.PUBLIC_URL}/assets/images/home/my_photo.jpg 1520w`}
            sizes="(max-width: 736px) 736px,
            (max-width: 1024px) 1024px,
            1520px"
            src={`${process.env.PUBLIC_URL}/assets/images/home/my_photo.jpg`}
            alt="my_photo"
            variants={variants_photo}
            animate="visible"
            initial="hidden"
            exit="hidden"
          />
        </StyledPhotoBox>

        <StyledButton title="o mnie" to="/about" isDark={false} />
      </StyledSection>
    </StyledBck>
  );
};

export default Home;
