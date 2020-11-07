import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Menu from "../../components/Menu";
import { PortfolioData } from "../Portfolio/Portfolio.data";
import { LightgalleryProvider } from "react-lightgallery";
import PhotoItem from "../../components/PhotoItem";
import {
  StyledBck,
  StyledSection,
  StyledArticle,
  StyledTitle,
  StyledButton,
  StyledFooter,
  StyledMobileLayoutPhotoBox,
  StyledDeskopLayoutPhotoBox,
} from "./Project.css";
import Scrollbar from "smooth-scrollbar";

const Project = () => {
  let { id } = useParams();
  const DATA = PortfolioData.filter((item) => item.id === id)[0];

  const scroll = React.createRef();
  useEffect(() => {
    Scrollbar.init(scroll.current, { damping: 0.05 });
  });

  return (
    <StyledBck ref={scroll}>
      <Menu />
      <StyledSection>
        <StyledArticle>
          <StyledTitle title={DATA.name} size="l" isDark={false} />
          <StyledButton
            title="powrót"
            to="/portfolio"
            isDark={false}
            invertArrow={true}
          />
          <LightgalleryProvider galleryClassName="my_custom_classname">
            <StyledMobileLayoutPhotoBox>
              <PhotoItem image={DATA.mobileImage} alt="Mobile_Layout_Photo" />
            </StyledMobileLayoutPhotoBox>

            <StyledDeskopLayoutPhotoBox>
              <PhotoItem image={DATA.deskopImage} alt="Deskop_Layout_Photo" />
            </StyledDeskopLayoutPhotoBox>
          </LightgalleryProvider>
        </StyledArticle>
      </StyledSection>
      <StyledFooter isDark={false} />
    </StyledBck>
  );
};

export default Project;
