import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Contact from "./app/pages/Contact";
import About from "./app/pages/About";
import Home from "./app/pages/Home";
import Portfolio from "./app/pages/Portfolio";
import Project from "./app/pages/Project";

const App = () => {
  const location = useLocation();
  const handleScrollToTop = () => window.scrollTo(0, 0);

  return (
    <main>
      <AnimatePresence exitBeforeEnter onExitComplete={handleScrollToTop}>
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
