import React from "react";
import Menu from "../../components/Menu";
import { InView } from "react-intersection-observer";
import { variants_text } from "../../utils/motion";
import {
  Styled_Bck,
  Styled_Section,
  Styled_Title,
  Styled_Text,
  Styled_Line,
  Styled_Social,
  Styled_Button,
} from "./Contact.css";

const DATA = {
  title: "woodrejs@gmail.com",
  text:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
};

const Contact = () => {
  return (
    <Styled_Bck>
      <Menu />
      <Styled_Section>
        <Styled_Title isDark={true} size="m" title="m.szczepanski@gmail.com" />

        <InView triggerOnce={true} threshold={0.2}>
          {({ inView, ref }) => (
            <Styled_Text
              ref={ref}
              children={DATA.text}
              variants={variants_text}
              animate={inView ? "visible" : "hidden"}
              initial="hidden"
              exit="hidden"
            />
          )}
        </InView>

        <Styled_Button
          isDark={true}
          isSmall={true}
          title="portfolio"
          to="/portfolio"
        />
        <Styled_Line />
        <Styled_Social />
      </Styled_Section>
    </Styled_Bck>
  );
};

export default Contact;
