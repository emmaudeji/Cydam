
  export const scrollToElement = (id) => {
    const element = document.getElementById(id);
    console.log('wwww', element)
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  }

