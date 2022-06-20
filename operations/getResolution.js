const getResolution = (setResolution) => {
  setResolution({
    current: {
      width: window.screen.width,
      height: window.screen.height,
    },
    available: {
      width: window.screen.availWidth,
      height: window.screen.availHeight,
    },
  });
};

export default getResolution;