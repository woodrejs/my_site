import styled from "styled-components";
import Social from "../Social";
import Button from "../Button";
import Line from "../Line";

export const Styled_Footer = styled.footer`
  max-width: 1366px;
  width: 100%;
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
export const Styled_Line = styled(Line)`
  grid-area: 1/1/2/13;
  align-self: start;
`;
export const Styled_Button_Box = styled.div`
  grid-area: 1/1/2/13;
  margin-top: 1em;
`;
export const Styled_Button = styled(Button)`
  margin-bottom: 0.5em;
`;
export const Styled_Social = styled(Social)`
  grid-area: 2/1/3/13;
  align-self: end;
`;
