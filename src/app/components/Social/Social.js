import React from "react";
import { useInView } from "react-intersection-observer";
import { v4 as uuidv4 } from "uuid";
import { variants_title } from "../../utils/motion/index";
import { StyledSocial, StyledSocialBox, StyledSocialItem } from "./Social.css";

const DATA = [
  { name: "facebook", id: uuidv4(), href: "#" },
  { name: "behance", id: uuidv4(), href: "#" },
  { name: "instagram", id: uuidv4(), href: "#" },
];

const Social = ({ className, isDark = true }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <StyledSocial className={className} ref={ref}>
      <StyledSocialBox>
        {DATA.map(({ name, id, href }) => (
          <StyledSocialItem
            children={name}
            key={id}
            isDark={isDark}
            href={href}
            variants={variants_title}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            exit="hidden"
          />
        ))}
      </StyledSocialBox>
    </StyledSocial>
  );
};
export default Social;
