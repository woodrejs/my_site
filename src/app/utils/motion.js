export const variants_title = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: [0.7, 0.2, 0.5, 0.7], duration: 0.6 },
  },
  hidden: { opacity: 0, y: 80 },
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
    skewY: 0,
    scale: 1,
    transition: { ease: [0.7, 0.2, 0.5, 0.7], duration: 0.6 },
  },
  hidden: { opacity: 0, y: 200, skewY: 15, scale: 0.9 },
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
