import React from "react";
import {
  Styled_Footer,
  Styled_Line,
  Styled_Button_Box,
  Styled_Button,
  Styled_Social,
} from "./Footer.css";

const Footer = ({ isDark, className }) => {
  return (
    <Styled_Footer className={className}>
      <Styled_Line isDark={isDark} />

      <Styled_Button_Box>
        <Styled_Button
          title="portfolio"
          to="/portfolio"
          isDark={isDark}
          isSmall={false}
        />

        <Styled_Button
          title="kontakt"
          to="/contact"
          isDark={isDark}
          isSmall={false}
        />
      </Styled_Button_Box>

      <Styled_Social isDark={isDark} />
    </Styled_Footer>
  );
};
export default Footer;
