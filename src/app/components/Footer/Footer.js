import React from "react";
import styled from "styled-components";
import Social from "../Social";
import Button from "../Button";
import Line from "../Line";

const Styled_Footer = styled.footer`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 2fr 3fr;
  height: 60vh;

  @media screen and (orientation: landscape) {
    height: 90vh;
  }
  @media screen and (min-width: 800px) and (orientation: landscape) {
    height: 60vh;
  }
`;
const Styled_Line = styled(Line)`
  grid-area: 1/1/2/13;
  align-self: start;
`;
const Styled_Button_Box = styled.div`
  grid-area: 1/1/2/13;
  margin-top: 1em;
`;
const Styled_Button = styled(Button)`
  margin-bottom: 0.5em;
`;
const Styled_Social = styled(Social)`
  grid-area: 2/1/3/13;
  align-self: end;
`;

const Footer = ({ click, isDark, className }) => {
  return (
    <Styled_Footer className={className}>
      <Styled_Line isDark={isDark} />

      <Styled_Button_Box>
        <Styled_Button
          title="portfolio"
          to="/portfolio"
          isDark={isDark}
          isSmall={false}
          click={click}
        />

        <Styled_Button
          title="kontakt"
          to="/contact"
          isDark={isDark}
          isSmall={false}
          click={click}
        />
      </Styled_Button_Box>

      <Styled_Social isDark={isDark} />
    </Styled_Footer>
  );
};
export default Footer;
