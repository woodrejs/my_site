import React, { useState } from "react";
import { DATA } from "../Nav/Nav.data";
import { useLocation } from "react-router-dom";
import {
  variants_list,
  variants_item,
  variants_menuMobile,
} from "../../utils/motion/index";
import {
  StyledHamburger,
  StyledHamburgerName,
  StyledHamburgerIcon,
  StyledMobileMenu,
  StyledMobileMenuCloseBtn,
  StyledMobileMenuBox,
  StyledMobileMenuItem,
  StyledMobileMenuLink,
} from "./MenuMobile.css";

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleHamburger = () => setIsOpen(!isOpen);
  const handleAnimation = isOpen ? "visible" : "hidden";
  const pathname = useLocation().pathname;
  const isdark =
    (pathname !== "/") &
    (pathname !== "/portfolio") &
    (pathname !== "/contact");
  const closeIcon = isdark
    ? `${process.env.PUBLIC_URL}/assets/icons/Close_Dark.svg`
    : `${process.env.PUBLIC_URL}/assets/icons/Close_Light.svg`;
  const hamburgerIcon = isdark
    ? `${process.env.PUBLIC_URL}/assets/icons/light_cross_icon.svg`
    : `${process.env.PUBLIC_URL}/assets/icons/dark_cross_icon.svg`;

  return (
    <>
      <StyledHamburger
        onClick={handleHamburger}
        variants={variants_list}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <StyledHamburgerName
          children="Menu"
          isdark={isdark}
          variants={variants_item}
          whileHover="hover"
        />
        <StyledHamburgerIcon
          src={hamburgerIcon}
          variants={variants_item}
          alt="hamburger_icon"
          whileHover="hover"
        />
      </StyledHamburger>
      <StyledMobileMenu
        isdark={isdark}
        variants={variants_menuMobile}
        initial="hidden"
        animate={handleAnimation}
        exit="hidden"
      >
        <StyledMobileMenuCloseBtn
          src={closeIcon}
          onClick={handleHamburger}
          alt="close_icon"
          whileHover={{ scale: 1.15 }}
        />

        <StyledMobileMenuBox
          variants={variants_list}
          animate={handleAnimation}
          initial="hidden"
          exit="hidden"
        >
          {DATA.map((item, index) => (
            <StyledMobileMenuItem
              key={`${item.id}${Math.random()}`}
              custom={index}
              variants={variants_item}
              whileHover="hover"
            >
              <StyledMobileMenuLink
                to={item.path}
                children={item.name}
                isdark={isdark}
              />
            </StyledMobileMenuItem>
          ))}
        </StyledMobileMenuBox>
      </StyledMobileMenu>
    </>
  );
};
export default MenuMobile;
