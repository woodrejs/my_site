import React from "react";
import { v4 as uuidv4 } from "uuid";
import ProjectSection from "../../components/ProjectSection";
import image from "../../../assets/images/photo.jpg";
import Menu from "../../components/Menu";
import { variants_title } from "../../utils/motion";
import {
  Styled_Bck,
  Styled_Section,
  Styled_Title,
  Styled_SubTitle_Box,
  Styled_SubTitle,
  Styled_Projects_Box,
  Styled_Footer,
} from "./Portfolio.css";

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: [0.7, 0.2, 0.5, 0.7], duration: 0.6 },
  },
  hidden: { opacity: 0, y: 80 },
};

const DATA = [
  {
    name: "dekortor wnętrz",
    id: uuidv4(),
    number: "01",
    date: "27/12/2020",
    type: "ui/ux",
    img: image,
  },
  {
    name: "dekortor wnętrz",
    id: uuidv4(),
    number: "01",
    date: "27/12/2020",
    type: "ui/ux",
    img: image,
  },
  {
    name: "dekortor wnętrz",
    id: uuidv4(),
    number: "01",
    date: "27/12/2020",
    type: "ui/ux",
    img: image,
  },
];

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
          {DATA.map(({ name, id, number, date, type, img }) => (
            <ProjectSection
              key={id}
              img={img}
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
