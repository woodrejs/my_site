import React from "react";
import Menu from "../../components/Menu";
import { InView } from "react-intersection-observer";
import { variants_text } from "../../utils/motion/index";
import {
  StyledBck,
  StyledSection,
  StyledTitle,
  StyledText,
  StyledLine,
  StyledSocial,
  StyledButton,
} from "./Contact.css";

const DATA = {
  title: "woodrejs@gmail.com",
  text:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
};

const Contact = () => {
  return (
    <StyledBck>
      <Menu />
      <StyledSection>
        <StyledTitle isDark={true} size="m" title="m.szczepanski@gmail.com" />

        <InView triggerOnce={true} threshold={0.2}>
          {({ inView, ref }) => (
            <StyledText
              ref={ref}
              children={DATA.text}
              variants={variants_text}
              animate={inView ? "visible" : "hidden"}
              initial="hidden"
              exit="hidden"
            />
          )}
        </InView>

        <StyledButton
          isDark={true}
          isSmall={true}
          title="portfolio"
          to="/portfolio"
        />
        <StyledLine />
        <StyledSocial />
      </StyledSection>
    </StyledBck>
  );
};

export default Contact;
