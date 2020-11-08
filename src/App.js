import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Contact from "./app/pages/Contact";
import About from "./app/pages/About";
import Home from "./app/pages/Home";
import Portfolio from "./app/pages/Portfolio";
import Project from "./app/pages/Project";
import { useCounter } from "./app/utils/sweet_state";

const App = () => {
  const location = useLocation();
  const [state, actions] = useCounter();

  const handleExit = () => {
    const pathname = location.pathname;
    const isBckDark =
      pathname === "/" || pathname === "/portfolio" || pathname === "/contact"
        ? 0
        : 1;

    actions.setIsDark(isBckDark);
    window.scrollTo(0, 0);
  };

  return (
    <main>
      <AnimatePresence exitBeforeEnter onExitComplete={handleExit}>
        <Switch location={location} key={location.key}>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/project/:id" component={Project} />
        </Switch>
      </AnimatePresence>
    </main>
  );
};

export default App;
