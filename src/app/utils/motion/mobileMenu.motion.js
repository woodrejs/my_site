export const variants_menuMobile = {
  visible: {
    x: "70vw",
    transition: { ease: "easeInOut", duration: 0.4, when: "beforeChildren" },
  },
  hidden: {
    x: "140vw",
    transition: { ease: "easeInOut", duration: 0.4, when: "afterChildren" },
  },
};
