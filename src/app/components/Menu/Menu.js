import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { ReactComponent as CopywriterDark } from "../../../assets/icons/dark_copywriter_icon.svg";
import { ReactComponent as CopywriterLight } from "../../../assets/icons/light_copywriter_icon.svg";
import { ReactComponent as HmburgerDark } from "../../../assets/icons/dark_cross_icon.svg";
import { ReactComponent as HmburgerLight } from "../../../assets/icons/light_cross_icon.svg";
import { ReactComponent as CloseIcon } from "../../../assets/icons/close_btn_icon.svg";
import {
  Styled_nav,
  Styled_Menu,
  Styled_MenuItem,
  Styled_Logo,
  Styled_BrandName,
  Styled_Hamburger,
  Styled_Span,
  Styled_MobileMenu,
  Styled_BtnBox,
  Styled_MenuBox,
  Styled_MobileMenuItem,
  Styled_Box,
  Styled_Line,
} from "./Menu.css";

const data = [
  { name: "start", path: "/", id: uuid() },
  { name: "o mnie", path: "/about", id: uuid() },
  { name: "portfolio", path: "/portfolio", id: uuid() },
  { name: "kontakt", path: "/contact", id: uuid() },
];

const variants = {
  visible: {
    opacity: 1,

    transition: { ease: [0.7, 0.2, 0.5, 0.7], duration: 0.6, delay: 0.6 },
  },
  hidden: { opacity: 0 },
};
const variants_arrow = {
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: "easeInOut", delay: 0.4 },
  },
  hidden: { scaleX: 0 },
};

const Menu = ({ click }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleHamburger = () => setIsOpen(!isOpen);
  const pathname = useLocation().pathname;
  const isBckDark = pathname === "/about" || pathname === "/project";

  return (
    <Styled_nav isBckDark={isBckDark}>
      <Styled_Logo to="/" onClick={() => click(pathname)}>
        <Styled_Box variants={variants} initial="hidden" animate="visible">
          {isBckDark ? <CopywriterLight /> : <CopywriterDark />}
          <Styled_BrandName
            children="Maciej Szczepański"
            isBckDark={isBckDark}
          />
        </Styled_Box>
      </Styled_Logo>

      <Styled_Menu
        children={data.map(({ name, path, id }) => (
          <Styled_MenuItem
            key={id}
            isBckDark={isBckDark}
            variants={variants}
            initial="hidden"
            animate="visible"
          >
            <Link to={path} children={name} onClick={() => click(pathname)} />
            <hr />
          </Styled_MenuItem>
        ))}
      />

      <Styled_Hamburger onClick={handleHamburger}>
        <Styled_Span children="Menu" isBckDark={isBckDark} />
        {isBckDark ? <HmburgerLight /> : <HmburgerDark />}
      </Styled_Hamburger>

      <Styled_MobileMenu isBckDark={isBckDark}>
        <Styled_BtnBox children={<CloseIcon />} />
        <Styled_MenuBox
          children={data.map(({ name, path, id }) => (
            <Styled_MobileMenuItem
              key={id * 2}
              to={path}
              children={name}
              isBckDark={isBckDark}
              onClick={() => click(pathname)}
            />
          ))}
        />
      </Styled_MobileMenu>
      <Styled_Line isDark={!isBckDark} />
    </Styled_nav>
  );
};

export default Menu;
