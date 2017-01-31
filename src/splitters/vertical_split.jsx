import React, { Component } from 'react';

class VerticalSplit extends Component {

  constructor() {
    super();
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  handleMouseDown(e) {
    const split = e.target;
    const paneWindow = split.parentElement;
    const leftContainer = paneWindow.firstChild;
    const rightContainer = paneWindow.lastChild;
    const iframe = document.getElementsByTagName('iframe')[0];
    function listener(e1) {
      leftContainer.style.width = `${e1.pageX - paneWindow.offsetLeft}px`;
      rightContainer.style.width = `${(paneWindow.offsetWidth + paneWindow.offsetLeft) - e1.pageX}px`;
      iframe.style.width = `${(paneWindow.offsetWidth + paneWindow.offsetLeft) - e1.pageX}px`;
      paneWindow.addEventListener('mouseup', (e2) => {
        paneWindow.removeEventListener('mousemove', listener);
        iframe.contentDocument.removeEventListener('mousemove', listener1);
      });
    }
    function listener1(e1) {
      leftContainer.style.width = `${leftContainer.offsetWidth + e1.offsetX}px`;
      rightContainer.style.width = `${rightContainer.offsetWidth - e1.offsetX}px`;
      iframe.style.width = `${rightContainer.offsetWidth - e1.offsetX}px`;
      iframe.contentDocument.addEventListener('mouseup', (e2) => {
        iframe.contentDocument.removeEventListener('mousemove', listener1);
        paneWindow.removeEventListener('mousemove', listener);
      });
    }
    paneWindow.addEventListener('mousemove', listener);
    iframe.contentDocument.addEventListener('mousemove', listener1);
  }

  render() {
    return (
      <div className="split-vert"
        id="split-vert" onMouseDown={this.handleMouseDown}></div>
    );
  }
}

export default VerticalSplit;
