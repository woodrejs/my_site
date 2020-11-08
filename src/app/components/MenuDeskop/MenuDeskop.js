import React from "react";
import { DATA } from "../Nav/Nav.data";
import {
  variants_list,
  variants_item,
  variants_underline,
} from "../../utils/motion/index";
import {
  StyledMenu,
  StyledMenuItem,
  StyledMenuItemLink,
  StyledMenuItemUnderLine,
} from "./MenuDeskop.css";

const MenuDeskop = ({ isdark, pathname }) => {
  return (
    <StyledMenu
      variants={variants_list}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {DATA.map((item, index) => (
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
            exit="hidden"
            isdark={isdark}
            custom={index}
          />
        </StyledMenuItem>
      ))}
    </StyledMenu>
  );
};

export default MenuDeskop;
