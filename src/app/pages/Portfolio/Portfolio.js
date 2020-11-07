import React, { useEffect } from "react";
import ProjectSection from "../../components/ProjectSection";
import Menu from "../../components/Menu";
import { variants_title } from "../../utils/motion/index";
import { PortfolioData } from "./Portfolio.data";
import {
  StyledBck,
  StyledSection,
  StyledTitle,
  StyledSubTitleBox,
  StyledSubTitle,
  StyledProjectsBox,
  StyledFooter,
} from "./Portfolio.css";
import Scrollbar from "smooth-scrollbar";

const Portfolio = () => {
  const scroll = React.createRef();
  useEffect(() => {
    Scrollbar.init(scroll.current, { damping: 0.05 });
  });

  return (
    <StyledBck ref={scroll}>
      <Menu />
      <StyledSection>
        <StyledTitle title="projekty" size="l" />

        <StyledSubTitleBox
          children={
            <StyledSubTitle
              children="informacje"
              variants={variants_title}
              animate="visible"
              initial="hidden"
              exit="hidden"
            />
          }
        />

        <StyledProjectsBox>
          {PortfolioData.map(({ name, id, number, date, type, thumbnail }) => (
            <ProjectSection
              key={id}
              id={id}
              thumbnail={thumbnail}
              type={type}
              date={date}
              name={name}
              number={number}
            />
          ))}
        </StyledProjectsBox>
      </StyledSection>
      <StyledFooter />
    </StyledBck>
  );
};

export default Portfolio;
