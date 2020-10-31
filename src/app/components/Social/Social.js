import React from "react";
import { useInView } from "react-intersection-observer";
import { v4 as uuidv4 } from "uuid";
import { variants_title } from "../../utils/motion";
import {
  Styled_Social,
  Styled_Social_Box,
  Styled_Social_Item,
} from "./Social.css";

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
    <Styled_Social className={className} ref={ref}>
      <Styled_Social_Box>
        {DATA.map(({ name, id, href }) => (
          <Styled_Social_Item
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
      </Styled_Social_Box>
    </Styled_Social>
  );
};
export default Social;
