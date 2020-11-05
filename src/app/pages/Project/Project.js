import React from "react";
import { useParams } from "react-router-dom";
import Menu from "../../components/Menu";
import { Projects_Data } from "../../../assets/content/Projects.data";
import { LightgalleryProvider } from "react-lightgallery";
import PhotoItem from "../../components/PhotoItem";
import {
  Styled_Bck,
  Styled_Section,
  Styled_Article,
  Styled_Title,
  Styled_Button,
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
          <LightgalleryProvider galleryClassName="my_custom_classname">
            <Styled_MobileLayoutPhoto_Box>
              <PhotoItem image={DATA.mobileImage} alt="Mobile_Layout_Photo" />
            </Styled_MobileLayoutPhoto_Box>

            <Styled_DeskopLayoutPhoto_Box>
              <PhotoItem image={DATA.deskopImage} alt="Deskop_Layout_Photo" />
            </Styled_DeskopLayoutPhoto_Box>
          </LightgalleryProvider>
        </Styled_Article>
      </Styled_Section>
      <Styled_Footer isDark={false} />
    </Styled_Bck>
  );
};

export default Project;
