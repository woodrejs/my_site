import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Contact from "./app/pages/Contact";
import About from "./app/pages/About";
import Home from "./app/pages/Home";
import Portfolio from "./app/pages/Portfolio";
import Project from "./app/pages/Project";
import ScrollToTop from "./app/utils/ScrollToTop";

const App = () => {
  const location = useLocation();

  return (
    <main>
      <AnimatePresence exitBeforeEnter>
        <ScrollToTop />
        <Switch location={location} key={location.key}>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/project" component={Project} />
        </Switch>
      </AnimatePresence>
    </main>
  );
};

export default App;
