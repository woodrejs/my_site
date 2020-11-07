import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { v4 as uuid } from "uuid";
import {
  variants_list,
  variants_item,
  variants_underline,
} from "../../utils/motion/index";
import {
  StyledNav,
  StyledBrand,
  StyledBrandIcon,
  StyledBrandName,
  StyledMenu,
  StyledMenuItem,
  StyledMenuItemLink,
  StyledMenuItemUnderLine,
  StyledHamburger,
  StyledHamburgerName,
  StyledHamburgerIcon,
  StyledMobileMenu,
  StyledMobileMenuCloseBtn,
  StyledMobileMenuBox,
  StyledMobileMenuItem,
  StyledMobileMenuLink,
  StyledLine,
} from "./Menu.css";

const data = [
  { name: "start", path: "/", id: uuid() },
  { name: "o mnie", path: "/about", id: uuid() },
  { name: "portfolio", path: "/portfolio", id: uuid() },
  { name: "kontakt", path: "/contact", id: uuid() },
];
const variants_Menu_Mobile = {
  visible: {
    x: "70vw",
    transition: { ease: "easeInOut", duration: 0.4, when: "beforeChildren" },
  },
  hidden: {
    x: "140vw",
    transition: { ease: "easeInOut", duration: 0.4, when: "afterChildren" },
  },
};

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleHamburger = () => setIsOpen(!isOpen);
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

      <StyledMenu
        variants={variants_list}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        {data.map((item, index) => (
          <StyledMenuItem
            key={item.id}
            isdark={isdark}
            variants={variants_item}
            custom={index}
          >
            <StyledMenuItemLink
              to={item.path}
              children={item.name}
              isdark={isdark}
            />
            <StyledMenuItemUnderLine
              variants={variants_underline}
              animate={item.path === pathname ? "visible" : "hidden"}
              isdark={isdark}
              custom={index}
            />
          </StyledMenuItem>
        ))}
      </StyledMenu>

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
          whileHover={{ scale: 1.15 }}
        />
        <StyledHamburgerIcon
          src={
            isdark
              ? `${process.env.PUBLIC_URL}/assets/icons/light_cross_icon.svg`
              : `${process.env.PUBLIC_URL}/assets/icons/dark_cross_icon.svg`
          }
          alt="hamburger_icon"
          variants={variants_item}
          whileHover={{ scale: 1.15 }}
        />
      </StyledHamburger>

      <StyledMobileMenu
        isdark={isdark}
        variants={variants_Menu_Mobile}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        exit="hidden"
      >
        <StyledMobileMenuCloseBtn
          src={
            isdark
              ? `${process.env.PUBLIC_URL}/assets/icons/Close_Dark.svg`
              : `${process.env.PUBLIC_URL}/assets/icons/Close_Light.svg`
          }
          onClick={handleHamburger}
          alt="close_icon"
          whileHover={{ scale: 1.15 }}
        />

        <StyledMobileMenuBox
          variants={variants_list}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          exit="hidden"
          children={data.map((item, index) => (
            <StyledMobileMenuItem
              key={`${item.id}${Math.random()}`}
              variants={variants_item}
              custom={index}
              whileHover={{ scale: 1.15 }}
            >
              <StyledMobileMenuLink
                to={item.path}
                children={item.name}
                isdark={isdark}
              />
            </StyledMobileMenuItem>
          ))}
        />
      </StyledMobileMenu>

      <StyledLine isDark={!isdark} />
    </StyledNav>
  );
};

export default Menu;
