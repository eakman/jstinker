export const leftResize = function (split, container, topPane, bottomPane) {
  container.addEventListener('mousemove', function listener(e1) {
    const newTopPaneHeight = e1.pageY - container.offsetTop - 1.5;
    const containerHeight = container.offsetHeight;
    const newBottomPaneHeight = (containerHeight + container.offsetTop - 1.5) - e1.pageY;
    topPane.style.height = `${newTopPaneHeight}px`;
    topPane.setAttribute('heightMultiplier', containerHeight / (newTopPaneHeight));
    bottomPane.style.height = `${newBottomPaneHeight}px`;
    bottomPane.setAttribute('heightMultiplier', containerHeight / newBottomPaneHeight);
    container.addEventListener('mouseup', (e2) => {
      container.removeEventListener('mousemove', listener);
    });
  });
};


export const rightResize = function(split, container, topPane, bottomPane, iframe) {
  let pagePos;
  function listener(e1) {
    pagePos = e1;
    const newTopPaneHeight = e1.pageY - container.offsetTop;
    const containerHeight = container.offsetHeight;
    const newBottomPaneHeight = (containerHeight + container.offsetTop) - e1.pageY;
    topPane.style.height = `${newTopPaneHeight}px`;
    topPane.setAttribute('heightMultiplier', containerHeight / newTopPaneHeight);
    bottomPane.style.height = `${newBottomPaneHeight}px`;
    bottomPane.setAttribute('heightMultiplier', containerHeight / newBottomPaneHeight);
    iframe.style.height = `${newBottomPaneHeight}px`;
    iframe.contentWindow.document.body.style.height = `${newBottomPaneHeight}px`;
    iframe.setAttribute('heightMultiplier', containerHeight / newBottomPaneHeight);
    container.addEventListener('mouseup', (e2) => {
      container.removeEventListener('mousemove', listener);
      iframe.contentDocument.removeEventListener('mousemove', listener1);
    });
  }
  function listener1(e1) {
    const newTopPaneHeight = topPane.offsetHeight + e1.offsetY;
    const containerHeight = container.offsetHeight;
    const newbottomPaneHeight = (container.offsetHeight + container.offsetTop) - (pagePos.pageY - e1.pageY);
    topPane.style.height = `${newTopPaneHeight}px`;
    topPane.setAttribute('heightMultiplier', containerHeight / newTopPaneHeight);
    bottomPane.style.height = `${newbottomPaneHeight}px`;
    bottomPane.setAttribute('heightMultiplier', containerHeight / newbottomPaneHeight);
    iframe.style.height = `${newbottomPaneHeight}px`;
    iframe.contentWindow.document.body.style.height = `${newbottomPaneHeight}px`;
    iframe.setAttribute('heightMultiplier', containerHeight / newbottomPaneHeight);
    iframe.contentDocument.addEventListener('mouseup', (e2) => {
      iframe.contentDocument.removeEventListener('mousemove', listener1);
      container.removeEventListener('mousemove', listener);
    });
  }
  container.addEventListener('mousemove', listener);
  iframe.contentDocument.addEventListener('mousemove', listener1);
};
