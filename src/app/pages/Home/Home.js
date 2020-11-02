import React from "react";
import image from "../../../assets/images/my_photo.jpg";
import { variants_title, variants_photo } from "../../utils/motion";
import Menu from "../../components/Menu";
import {
  Styled_Bck,
  Styled_Section,
  Styled_Title,
  Styled_SubTitle_Box,
  Styled_SubTitle,
  Styled_Photo_Box,
  Styled_Photo,
  Styled_Button,
} from "./Home.css";

const Home = () => {
  return (
    <Styled_Bck>
      <Menu />
      <Styled_Section>
        <Styled_Title size="l" title="frontend developer" />

        <Styled_SubTitle_Box>
          <Styled_SubTitle
            children="ui/ux designer"
            variants={variants_title}
            initial="hidden"
            animate="visible"
            exit="hidden"
          />
        </Styled_SubTitle_Box>

        <Styled_Photo_Box to="/about">
          <Styled_Photo
            src={image}
            alt="my_photo"
            variants={variants_photo}
            animate="visible"
            initial="hidden"
            exit="hidden"
          />
        </Styled_Photo_Box>

        <Styled_Button title="o mnie" to="/about" isDark={false} />
      </Styled_Section>
    </Styled_Bck>
  );
};

export default Home;
