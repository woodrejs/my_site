export const variants_title = {
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { ease: "easeIn", duration: 0.6 },
  },
  hidden: {
    opacity: 0,
    y: "100%",
    transition: { ease: "easeOut", duration: 0.6 },
  },
  hover: { scale: 0.9 },
};
export const variants_text = {
  hidden: {
    opacity: 0,
    y: 40,
    skew: -10,
    rotateZ: 2,
  },
  visible: {
    opacity: 1,
    y: 0,
    skew: 0,
    rotateZ: 0,
    transition: { duration: 0.6, ease: [0.7, 0.2, 0.5, 0.7] },
  },
};
export const variants_photo = {
  visible: {
    opacity: 1,
    y: 0,
    rotateZ: 0,
    transition: { ease: [0.7, 0.2, 0.5, 0.7], duration: 0.6 },
  },
  hidden: {
    opacity: 0,
    y: 200,
    rotateZ: 2,
    transition: { ease: [0.7, 0.2, 0.5, 0.7], duration: 0.6 },
  },
  hover: {
    scale: 1.05,
    transition: { ease: "easeInOut", duration: 0.6 },
  },
};
export const variants_arrow = {
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: "easeInOut", delay: 0.2 },
  },
  hidden: { scaleX: 0 },
};
export const variants_line = {
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
  hidden: { scaleX: 0 },
};
export const variants_List = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delay: 0.05,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};
export const variants_Item = {
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.15,
    },
  }),
  hidden: (i) => ({
    opacity: 0,
    transition: {
      delay: 0.3 - i * 0.1,
    },
  }),
};
export const variants_Underline = {
  visible: {
    scale: 1,
    transition: {
      delay: 1.5,
    },
  },
  hidden: { scale: 0 },
};
