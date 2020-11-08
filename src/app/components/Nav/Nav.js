import React from "react";
import MenuDeskop from "../MenuDeskop";
import MenuMobile from "../MenuMobile";
import { useLocation } from "react-router-dom";

import { variants_list } from "../../utils/motion/list.motion";
import {
  StyledNav,
  StyledBrand,
  StyledBrandIcon,
  StyledBrandName,
  StyledLine,
} from "./Nav.css";

const Nav = () => {
  const pathname = useLocation().pathname;
  const isdark =
    (pathname !== "/") &
    (pathname !== "/portfolio") &
    (pathname !== "/contact");

  return (
    <StyledNav isdark={isdark}>
      <StyledBrand
        to="/"
        variants={variants_list}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <StyledBrandIcon
          src={
            isdark
              ? `${process.env.PUBLIC_URL}/assets/icons/light_copywriter_icon.svg`
              : `${process.env.PUBLIC_URL}/assets/icons/dark_copywriter_icon.svg`
          }
          alt="copywriter_icon"
        />
        <StyledBrandName children="Maciej Szczepański" isdark={isdark} />
      </StyledBrand>
      <MenuDeskop isdark={isdark} pathname={pathname} />
      <MenuMobile />
      <StyledLine isDark={!isdark} />
    </StyledNav>
  );
};

export default Nav;
