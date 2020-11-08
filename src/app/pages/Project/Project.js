import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { LightgalleryProvider } from "react-lightgallery";
import Scrollbar from "smooth-scrollbar";
import PhotoItem from "../../components/PhotoItem";
import Nav from "../../components/Nav";
import { PortfolioData } from "../Portfolio/Portfolio.data";
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

const Project = () => {
  const scrollRef = useRef(null);
  let { id } = useParams();
  const DATA = PortfolioData.filter((item) => item.id === id)[0];

  useEffect(() => {
    const scrollBar = Scrollbar.init(scrollRef.current, { damping: 0.05 });
    scrollBar.track.xAxis.element.remove();
    scrollBar.addListener((status) => {
      scrollBar.setPosition(0, status.offset.y);
    });
  });

  return (
    <StyledBck ref={scrollRef}>
      <Nav />
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
