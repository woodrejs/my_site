import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { v4 as uuid } from "uuid";
import CopywriterDark from "../../../assets/icons/dark_copywriter_icon.svg";
import CopywriterLight from "../../../assets/icons/light_copywriter_icon.svg";
import HmburgerDark from "../../../assets/icons/dark_cross_icon.svg";
import HmburgerLight from "../../../assets/icons/light_cross_icon.svg";
import CloseIconDark from "../../../assets/icons/Close_Dark.svg";
import CloseIconLight from "../../../assets/icons/Close_Light.svg";
import {
  variants_List,
  variants_Item,
  variants_Underline,
} from "../../utils/motion";
import {
  Styled_Nav,
  Styled_Brand,
  Styled_Brand_Icon,
  Styled_Brand_Name,
  Styled_Menu,
  Styled_MenuItem,
  Styled_MenuItem_Link,
  Styled_MenuItem_UnderLine,
  Styled_Hamburger,
  Styled_Hamburger_Name,
  Styled_Hamburger_Icon,
  Styled_MobileMenu,
  Styled_MobileMenu_CloseBtn,
  Styled_MobileMenu_Box,
  Styled_MobileMenu_Item,
  Styled_MobileMenu_Link,
  Styled_Line,
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
  const isBckDark = pathname === "/about" || pathname === "/project";

  return (
    <Styled_Nav isBckDark={isBckDark}>
      <Styled_Brand
        to="/"
        variants={variants_List}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <Styled_Brand_Icon
          src={isBckDark ? CopywriterLight : CopywriterDark}
          alt="copywriter_icon"
        />
        <Styled_Brand_Name
          children="Maciej Szczepański"
          isBckDark={isBckDark}
        />
      </Styled_Brand>

      <Styled_Menu
        variants={variants_List}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        {data.map((item, index) => (
          <Styled_MenuItem
            key={item.id}
            isBckDark={isBckDark}
            variants={variants_Item}
            custom={index}
            current={item.path === pathname ? true : false}
          >
            <Styled_MenuItem_Link
              to={item.path}
              children={item.name}
              isBckDark={isBckDark}
            />
            <Styled_MenuItem_UnderLine
              variants={variants_Underline}
              isBckDark={isBckDark}
              custom={index}
              current={item.path === pathname ? true : false}
            />
          </Styled_MenuItem>
        ))}
      </Styled_Menu>

      <Styled_Hamburger
        onClick={handleHamburger}
        variants={variants_List}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <Styled_Hamburger_Name
          children="Menu"
          isBckDark={isBckDark}
          variants={variants_Item}
          whileHover={{ scale: 1.15 }}
        />
        <Styled_Hamburger_Icon
          src={isBckDark ? HmburgerLight : HmburgerDark}
          alt="hamburger_icon"
          variants={variants_Item}
          whileHover={{ scale: 1.15 }}
        />
      </Styled_Hamburger>

      <Styled_MobileMenu
        isBckDark={isBckDark}
        variants={variants_Menu_Mobile}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        exit="hidden"
      >
        <Styled_MobileMenu_CloseBtn
          src={isBckDark ? CloseIconDark : CloseIconLight}
          onClick={handleHamburger}
          alt="close_icon"
          whileHover={{ scale: 1.15 }}
        />

        <Styled_MobileMenu_Box
          variants={variants_List}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          exit="hidden"
          children={data.map((item, index) => (
            <Styled_MobileMenu_Item
              key={item.id * 2}
              variants={variants_Item}
              custom={index}
              whileHover={{ scale: 1.15 }}
            >
              <Styled_MobileMenu_Link
                to={item.path}
                children={item.name}
                isBckDark={isBckDark}
              />
            </Styled_MobileMenu_Item>
          ))}
        />
      </Styled_MobileMenu>

      <Styled_Line isDark={!isBckDark} />
    </Styled_Nav>
  );
};

export default Menu;
