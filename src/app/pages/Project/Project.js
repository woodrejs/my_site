import React from "react";
import Menu from "../../components/Menu";
import { variants_photo } from "../../utils/motion";
import {
  Styled_Bck,
  Styled_Section,
  Styled_Article,
  Styled_Title,
  Styled_Button,
  Styled_MobileLayoutPhoto,
  Styled_DeskopLayoutPhoto,
  Styled_Footer,
} from "./Project.css";
//tmp
import deskopImg from "../../../assets/images/frame.jpg";
import mobileImg from "../../../assets/images/mobile.jpg";
//

const Project = () => {
  return (
    <Styled_Bck>
      <Menu />
      <Styled_Section>
        <Styled_Article>
          <Styled_Title title={"title"} size="l" isDark={false} />
          <Styled_Button
            title="powrót"
            to="/portfolio"
            isDark={false}
            invertArrow={true}
          />

          <Styled_MobileLayoutPhoto
            src={mobileImg}
            alt="Mobile_Layout_Photo"
            variants={variants_photo}
            animate="visible"
            initial="hidden"
            exit="hidden"
          />
          <Styled_DeskopLayoutPhoto
            src={deskopImg}
            alt="Deskop_Layout_Photo"
            variants={variants_photo}
            animate="visible"
            initial="hidden"
            exit="hidden"
          />
        </Styled_Article>
      </Styled_Section>
      <Styled_Footer isDark={false} />
    </Styled_Bck>
  );
};

export default Project;
