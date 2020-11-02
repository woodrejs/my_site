import React from "react";
import { InView } from "react-intersection-observer";
import { variants_text, variants_photo } from "../../utils/motion";
import {
  Styled_Article,
  Styled_InfoBox,
  Styled_Title,
  Styled_Date,
  Styled_Type,
  Styled_DateData,
  Styled_TypeData,
  Styled_Number,
  Styled_Photo_Box,
  Styled_Photo,
  Styled_Button,
  Styled_Line,
} from "./ProjectSection.css";

const ProjectSection = ({ number, name, date, type, img }) => {
  return (
    <Styled_Article>
      <Styled_Line isDark={false} />

      <InView triggerOnce={true} threshold={0.2}>
        {({ inView, ref }) => (
          <Styled_Number
            ref={ref}
            children={number}
            variants={variants_text}
            animate={inView ? "visible" : "hidden"}
            initial="hidden"
            exit="hidden"
          />
        )}
      </InView>

      <InView triggerOnce={true} threshold={0.2}>
        {({ inView, ref }) => (
          <Styled_InfoBox to="/project" ref={ref}>
            <Styled_Title
              children={name}
              variants={variants_text}
              animate={inView ? "visible" : "hidden"}
              initial="hidden"
              exit="hidden"
            />
            <Styled_Date
              children="data"
              variants={variants_text}
              animate={inView ? "visible" : "hidden"}
              initial="hidden"
              exit="hidden"
            />
            <Styled_Type
              children="typ"
              variants={variants_text}
              animate={inView ? "visible" : "hidden"}
              initial="hidden"
              exit="hidden"
            />
            <Styled_TypeData
              children={type}
              variants={variants_text}
              animate={inView ? "visible" : "hidden"}
              initial="hidden"
              exit="hidden"
            />
            <Styled_DateData
              children={date}
              variants={variants_text}
              animate={inView ? "visible" : "hidden"}
              initial="hidden"
              exit="hidden"
            />
          </Styled_InfoBox>
        )}
      </InView>

      <Styled_Photo_Box to="/project">
        <InView triggerOnce={true} threshold={0.2}>
          {({ inView, ref }) => (
            <Styled_Photo
              ref={ref}
              src={img}
              alt="project_photo"
              variants={variants_photo}
              animate={inView ? "visible" : "hidden"}
              initial="hidden"
              exit="hidden"
            />
          )}
        </InView>
      </Styled_Photo_Box>

      <Styled_Button title={name} to="/project" />
    </Styled_Article>
  );
};

export default ProjectSection;
