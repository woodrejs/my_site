import React from "react";
import { InView } from "react-intersection-observer";
import {
  variants_text,
  variants_photo,
  variants_List,
  variants_Item,
} from "../../utils/motion";
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

const ProjectSection = ({ number, name, date, type, thumbnail, id }) => {
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
          <Styled_InfoBox
            ref={ref}
            variants={variants_List}
            animate={inView ? "visible" : "hidden"}
            initial="hidden"
            exit="hidden"
          >
            <Styled_Title children={name} variants={variants_Item} custom={0} />
            <Styled_Date children="data" variants={variants_Item} custom={1} />
            <Styled_Type children="typ" variants={variants_Item} custom={3} />
            <Styled_TypeData
              children={type}
              variants={variants_Item}
              custom={4}
            />
            <Styled_DateData
              children={date}
              variants={variants_Item}
              custom={2}
            />
          </Styled_InfoBox>
        )}
      </InView>

      <Styled_Photo_Box to={`/project/${id}`}>
        <InView triggerOnce={true} threshold={0}>
          {({ inView, ref }) => (
            <Styled_Photo
              ref={ref}
              src={thumbnail}
              alt="project_photo"
              variants={variants_photo}
              animate={inView ? "visible" : "hidden"}
              initial="hidden"
              exit="hidden"
              whileHover="hover"
            />
          )}
        </InView>
      </Styled_Photo_Box>

      <Styled_Button title={name} to="/project" />
    </Styled_Article>
  );
};

export default ProjectSection;
