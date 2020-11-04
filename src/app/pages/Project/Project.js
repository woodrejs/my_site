import React from "react";
import { useParams } from "react-router-dom";
import Menu from "../../components/Menu";
import { variants_photo } from "../../utils/motion";
import { Projects_Data } from "../../../assets/content/Projects.data";
import {
  Styled_Bck,
  Styled_Section,
  Styled_Article,
  Styled_Title,
  Styled_Button,
  Styled_MobileLayoutPhoto,
  Styled_DeskopLayoutPhoto,
  Styled_Footer,
  Styled_MobileLayoutPhoto_Box,
  Styled_DeskopLayoutPhoto_Box,
} from "./Project.css";

const Project = () => {
  let { id } = useParams();
  const DATA = Projects_Data.filter((item) => item.id === id)[0];

  return (
    <Styled_Bck>
      <Menu />
      <Styled_Section>
        <Styled_Article>
          <Styled_Title title={DATA.name} size="l" isDark={false} />
          <Styled_Button
            title="powrót"
            to="/portfolio"
            isDark={false}
            invertArrow={true}
          />
          <Styled_MobileLayoutPhoto_Box>
            <Styled_MobileLayoutPhoto
              src={DATA.mobileImage}
              alt="Mobile_Layout_Photo"
              variants={variants_photo}
              animate="visible"
              initial="hidden"
              exit="hidden"
            />
          </Styled_MobileLayoutPhoto_Box>
          <Styled_DeskopLayoutPhoto_Box>
            <Styled_DeskopLayoutPhoto
              src={DATA.deskopImage}
              alt="Deskop_Layout_Photo"
              variants={variants_photo}
              animate="visible"
              initial="hidden"
              exit="hidden"
            />
          </Styled_DeskopLayoutPhoto_Box>
        </Styled_Article>
      </Styled_Section>
      <Styled_Footer isDark={false} />
    </Styled_Bck>
  );
};

export default Project;
