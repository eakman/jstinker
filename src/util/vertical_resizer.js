const verticalResize = function(split, paneWindow, leftContainer, rightContainer, iframe) {
  function listener(e1) {
    leftContainer.style.width = `${(e1.pageX - paneWindow.offsetLeft) / (paneWindow.offsetWidth / 100)}%`;
    rightContainer.style.width = `${((paneWindow.offsetWidth + paneWindow.offsetLeft) - e1.pageX) / (paneWindow.offsetWidth / 100)}%`;
    paneWindow.addEventListener('mouseup', (e2) => {
      paneWindow.removeEventListener('mousemove', listener);
      iframe.contentDocument.removeEventListener('mousemove', listener1);
    });
  }
  function listener1(e1) {
    leftContainer.style.width = `${(leftContainer.offsetWidth + e1.offsetX) / (paneWindow.offsetWidth / 100)}%`;
    rightContainer.style.width = `${(rightContainer.offsetWidth - e1.movementX + 20) / (paneWindow.offsetWidth / 100)}%`;
    iframe.contentDocument.addEventListener('mouseup', (e2) => {
      iframe.contentDocument.removeEventListener('mousemove', listener1);
      paneWindow.removeEventListener('mousemove', listener);
    });
  }
  paneWindow.addEventListener('mousemove', listener);
  iframe.contentDocument.addEventListener('mousemove', listener1);
};

export default verticalResize;
