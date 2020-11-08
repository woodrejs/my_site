import React, { useState } from "react";
import { DATA } from "../Nav/Nav.data";
import { useCounter } from "../../utils/sweet_state";
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
  const [state, actions] = useCounter();
  const handleHamburger = () => setIsOpen(!isOpen);

  const closeIcon = state.isdark
    ? `${process.env.PUBLIC_URL}/assets/icons/Close_Dark.svg`
    : `${process.env.PUBLIC_URL}/assets/icons/Close_Light.svg`;
  const hamburgerIcon = state.isdark
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
          isdark={state.isdark}
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
        isdark={state.isdark}
        variants={variants_menuMobile}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
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
          animate="visible"
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
                isdark={state.isdark}
              />
            </StyledMobileMenuItem>
          ))}
        </StyledMobileMenuBox>
      </StyledMobileMenu>
    </>
  );
};
export default MenuMobile;
