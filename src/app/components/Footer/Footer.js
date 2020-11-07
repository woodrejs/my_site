import React from "react";
import {
  StyledFooter,
  StyledLine,
  StyledButtonBox,
  StyledButton,
  StyledSocial,
} from "./Footer.css";

const Footer = ({ isDark, className }) => {
  return (
    <StyledFooter className={className}>
      <StyledLine isDark={isDark} />

      <StyledButtonBox>
        <StyledButton
          title="portfolio"
          to="/portfolio"
          isDark={isDark}
          isSmall={false}
        />

        <StyledButton
          title="kontakt"
          to="/contact"
          isDark={isDark}
          isSmall={false}
        />
      </StyledButtonBox>

      <StyledSocial isDark={isDark} />
    </StyledFooter>
  );
};
export default Footer;
