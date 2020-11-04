import React from "react";
import ProjectSection from "../../components/ProjectSection";
import Menu from "../../components/Menu";
import { variants_title } from "../../utils/motion";
import { Projects_Data } from "../../../assets/content/Projects.data";
import {
  Styled_Bck,
  Styled_Section,
  Styled_Title,
  Styled_SubTitle_Box,
  Styled_SubTitle,
  Styled_Projects_Box,
  Styled_Footer,
} from "./Portfolio.css";

const Portfolio = () => {
  return (
    <Styled_Bck>
      <Menu />
      <Styled_Section>
        <Styled_Title title="projekty" size="l" />

        <Styled_SubTitle_Box
          children={
            <Styled_SubTitle
              children="informacje"
              variants={variants_title}
              animate="visible"
              initial="hidden"
              exit="hidden"
            />
          }
        />

        <Styled_Projects_Box>
          {Projects_Data.map(({ name, id, number, date, type, thumbnail }) => (
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
        </Styled_Projects_Box>
      </Styled_Section>
      <Styled_Footer />
    </Styled_Bck>
  );
};

export default Portfolio;
