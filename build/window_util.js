document.addEventListener('DOMContentLoaded', () => {
  const containers = Array.from(document.getElementsByClassName('container'));
  const codeMirrors = Array.from(document.getElementsByClassName('CodeMirror'));
  const splitVert = document.getElementById('split-vert');
  const panes = Array.from(document.getElementsByClassName('pane'));
  const iframe = document.getElementsByTagName('iframe')[0];

  labelPanes();

  setInitialHeight(containers, codeMirrors, splitVert, panes, iframe);

  handleWindowResize(containers, codeMirrors, splitVert, panes, iframe);
});

function labelPanes() {
  const inners = ["HTML", "JavaScript", "CSS", "Result"];
  const editors = Array.from(document.getElementsByClassName('CodeMirror'));
  editors.push(document.getElementsByClassName('pane')[0]);
  editors.forEach((el, idx) => {
    const childEl = document.createElement('span');
    childEl.setAttribute('class', 'window-label');
    childEl.innerHTML = inners[idx];
    el.appendChild(childEl);
  });
}

function setInitialHeight(containers, codeMirrors, splitVert, panes, iframe) {

  containers.forEach((el) => {
    el.style.height = (window.innerHeight - 55) + 'px';
  });
  splitVert.style.height = (window.innerHeight - 55) + 'px';

  codeMirrors.forEach((el) => {
    el.style.height = (((window.innerHeight - 55) / 2) - 1.5) + 'px';
    el.setAttribute('heightMultiplier', 2);
    el.style.maxHeight = ((window.innerHeight - 55) - 59)+ 'px';
  });

  panes.forEach((el) => {
    el.style.height = (((window.innerHeight - 55) / 2) - 1.5) + 'px';
    el.setAttribute('heightMultiplier', 2);
  });

  iframe.contentDocument.body.style.height = (((window.innerHeight - 55) / 2) - 1.5) + 'px';
  iframe.setAttribute('heightMultiplier', 2);
  iframe.style.maxHeight = ((window.innerHeight - 55) - 59)+ 'px';
}

function handleWindowResize(containers, codeMirrors, splitVert, panes, iframe) {
  window.addEventListener('resize', () => {
    const newHeight = window.innerHeight - 55;
    containers.forEach((el) => {
      el.style.height = newHeight + 'px';
    });
    splitVert.style.height = newHeight + 'px';

    codeMirrors.forEach((el) => {
      el.style.height = (newHeight) / el.attributes.heightMultiplier.value + 'px';
      el.style.maxHeight = (newHeight - 59) + 'px';
    });

    panes.forEach((el) => {
      el.style.height = (newHeight) / el.attributes.heightMultiplier.value + 'px';
    });
    iframe.style.height = (newHeight) / iframe.attributes.heightMultiplier.value + 'px';
    iframe.maxHeight = (newHeight - 59) + 'px';
  });
}
