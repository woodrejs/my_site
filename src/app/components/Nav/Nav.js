import React from "react";
import MenuDeskop from "../MenuDeskop";
import MenuMobile from "../MenuMobile";
import { useLocation } from "react-router-dom";
import { useCounter } from "../../utils/sweet_state";
import { variants_list } from "../../utils/motion/list.motion";
import {
  StyledNav,
  StyledBrand,
  StyledBrandIcon,
  StyledBrandName,
  StyledLine,
} from "./Nav.css";

const Nav = () => {
  const [state, actions] = useCounter();
  const pathname = useLocation().pathname;
  const copywriterIcon = state.isdark
    ? `${process.env.PUBLIC_URL}/assets/icons/light_copywriter_icon.svg`
    : `${process.env.PUBLIC_URL}/assets/icons/dark_copywriter_icon.svg`;

  return (
    <StyledNav isdark={state.isdark}>
      <StyledBrand
        to="/"
        variants={variants_list}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <StyledBrandIcon src={copywriterIcon} alt="copywriter_icon" />
        <StyledBrandName children="Maciej Szczepański" isdark={state.isdark} />
      </StyledBrand>
      <MenuDeskop pathname={pathname} />
      <MenuMobile />
      <StyledLine />
    </StyledNav>
  );
};

export default Nav;
