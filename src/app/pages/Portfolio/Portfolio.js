import React, { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";
import ProjectSection from "../../components/ProjectSection";
import Nav from "../../components/Nav";
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

const Portfolio = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollBar = Scrollbar.init(scrollRef.current, { damping: 0.07 });
    scrollBar.track.xAxis.element.remove();
    scrollBar.addListener((status) => {
      scrollBar.setPosition(0, status.offset.y);
    });
  });

  return (
    <StyledBck ref={scrollRef}>
      <Nav />
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
