export const PortfolioData = [
  {
    name: "dekortor wnętrz",
    id: "a1",
    number: "01",
    date: "27/12/2020",
    type: "ui/ux",
    thumbnail: {
      sm: `${process.env.PUBLIC_URL}/assets/images/decorator/thumbnail_400.jpg`,
      xl: `${process.env.PUBLIC_URL}/assets/images/decorator/thumbnail_800.jpg`,
    },
    mobileImage: {
      sm: `${process.env.PUBLIC_URL}/assets/images/decorator/mobile_layout_260.jpg`, //260px
      m: `${process.env.PUBLIC_URL}/assets/images/decorator/mobile_layout_640.jpg`, // 640px
      xl: `${process.env.PUBLIC_URL}/assets/images/decorator/mobile_layout_920.jpg`, //920px
    },
    deskopImage: {
      sm: `${process.env.PUBLIC_URL}/assets/images/decorator/deskop_layout_260.jpg`,
      m: `${process.env.PUBLIC_URL}/assets/images/decorator/deskop_layout_640.jpg`,
      xl: `${process.env.PUBLIC_URL}/assets/images/decorator/deskop_layout_920.jpg`,
    },
  },
];
