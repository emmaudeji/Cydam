export const SlideLeftVariants = {
    hidden: {
      x: "100vw",
      opacity: 0,
    },
    visible: {
      x: "0vw",
      opacity: 1,
      transition: {
        ease: "easeInOut",
      },
    },
    exit: {
      x: "100vw",
      opacity: 0,
      transition: {
        ease: "easeOut",
      },
    },
  };
  