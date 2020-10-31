import React, { useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import Contact from "./app/pages/Contact";
import About from "./app/pages/About";
import Home from "./app/pages/Home";
import Portfolio from "./app/pages/Portfolio";
import Project from "./app/pages/Project";
import Menu from "./app/components/Menu";
//tmp
import image1 from "./assets/images/frame.jpg";
import image2 from "./assets/images/mobile.jpg";
//

const Styled_App = styled.div`
  min-height: 100vh;
  max-width: 1366px;
  width: 100%;
  display: grid;
  grid-template-rows: 90px auto;

  @media screen and (min-width: 600px) and (orientation: portrait) {
    grid-template-rows: 130px auto;
  }
  @media screen and (min-width: 1024px) and (orientation: landscape) {
    grid-template-rows: 130px auto;
  }
`;
const Styled_Menu = styled(Menu)`
  grid-area: 1/1/2/2;
`;
const Styled_Main = styled.main`
  grid-area: 2/1/3/2;
`;
const Styled_Bck = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) =>
    props.isDark ? props.theme.colors.dark : props.theme.colors.bck};

  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0 3vw;
`;

const App = () => {
  const pathname = useLocation().pathname;
  const isDark = pathname === "/about" || pathname === "/project";
  const [prevPath, setPrevPath] = useState("/");

  const handlePrevPath = (path) => setPrevPath(path);

  return (
    <Styled_Bck isDark={isDark}>
      <Styled_App>
        <Styled_Menu click={handlePrevPath} />
        <Styled_Main>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Home prevPath={prevPath} click={handlePrevPath} />
              )}
            />
            <Route
              path="/about"
              component={() => (
                <About prevPath={prevPath} click={handlePrevPath} />
              )}
            />
            <Route
              path="/portfolio"
              component={() => (
                <Portfolio prevPath={prevPath} click={handlePrevPath} />
              )}
            />
            <Route
              path="/contact"
              component={() => (
                <Contact prevPath={prevPath} click={handlePrevPath} />
              )}
            />
            <Route
              path="/project"
              component={() => (
                <Project
                  mobileImg={image2}
                  deskopImg={image1}
                  title="dekorator wnętrz"
                  prevPath={prevPath}
                  click={handlePrevPath}
                />
              )}
            />
          </Switch>
        </Styled_Main>
      </Styled_App>
    </Styled_Bck>
  );
};

export default App;
