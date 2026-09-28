const navigationBarData = [
  // {
  //     name: 'Home',
  //     path: '/',
  //     hasDropdown: false
  // },
  {
    name: "Our Products",
    path: "",
    hasDropdown: true,
    dropdownItems: [
      {
        name: "Carpet Tiles",
        path: "/categories/carpet-tiles",
        description: "Modular carpet solutions for flexible installations",
      },
      {
        name: "Artificial Grass & Multiturf",
        path: "/categories/artificial-multiturf",
        description: "Synthetic grass and outdoor flooring solutions",
      },
      {
        name: "Acoustic PET Panels",
        path: "/categories/acoustic-tiles",
        description: "Sound-absorbing panels for noise control",
      },
      {
        name: "Broadloom Carpets",
        path: "/categories/broadloom-carpets",
        description: "Seamless wall-to-wall carpeting solutions",
      },
    ],
  },
  // {
  //     name: 'Manufacturing Process',
  //     path: '/manufacturing',
  //     hasDropdown: false
  // },
  // {
  //     name: 'Tools',
  //     path: '/tools',
  //     hasDropdown: false
  // },
  {
    name: "About us",
    path: "/about-us",
    hasDropdown: false,
  },
  {
    name: "Blogs",
    path: "/blogs",
    hasDropdown: false,
  },
  // {
  //     name: 'Contact us',
  //     path: '/contact',
  //     hasDropdown: false
  // },
  // {
  //     name: 'Demo',
  //     path: '/demo',
  //     hasDropdown: false
  // }
];

export default navigationBarData;
