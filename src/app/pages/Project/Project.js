import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Photo from "../../components/Photo";
import Title from "../../components/Title";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
//tmp
import deskopImg from "../../../assets/images/frame.jpg";
import mobileImg from "../../../assets/images/mobile.jpg";
//

const Styled_Bck = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 3vw;
`;
const Styled_Section = styled.section`
  max-width: 1366px;
  background: ${(props) => props.theme.colors.dark};
`;
const Styled_Article = styled.article`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 50vh 1fr auto;
  margin-bottom: 3em;

  @media screen and (orientation: portrait) {
    grid-template-rows: 30vh 1fr auto;
  }
  @media screen and (min-width: 800px) and (orientation: landscape) {
    grid-template-rows: 70vh 1fr auto;
  }
`;
const Styled_Title = styled(Title)`
  grid-area: 1/1/2/13;
  margin-top: 0.5em;
`;
const Styled_Button = styled(Button)`
  grid-area: 2/1/3/13;
  margin-bottom: 1em;
`;
const Styled_MobileLayoutPhoto = styled(Photo)`
  grid-area: 3/10/4/13;
  align-self: start;
`;
const Styled_DeskopLayoutPhoto = styled(Photo)`
  grid-area: 3/1/4/9;
  align-self: start;
`;
const Styled_Footer = styled(Footer)`
  grid-area: 3/1/4/13;

  @media screen and (orientation: landscape) {
    grid-area: 3/1/4/13;
  }
`;

const Project = () => {
  return (
    <Styled_Bck>
      <Menu />
      <Styled_Section>
        <Styled_Article>
          <Styled_Title title={"title"} size="l" isDark={false} />
          <Styled_Button
            title="powrót"
            to="/portfolio"
            isDark={false}
            invertArrow={true}
          />
          <Styled_MobileLayoutPhoto src={mobileImg} alt="Mobile_Layout_Photo" />
          <Styled_DeskopLayoutPhoto src={deskopImg} alt="Deskop_Layout_Photo" />
        </Styled_Article>
      </Styled_Section>
      <Styled_Footer isDark={false} />
    </Styled_Bck>
  );
};

export default Project;
