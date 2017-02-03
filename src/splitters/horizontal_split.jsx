import React, { Component } from 'react';

class HorizontalSplit extends Component {
  constructor() {
    super();
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.leftResize = this.leftResize.bind(this);
    this.rightResize = this.rightResize.bind(this);
  }


  handleMouseDown(e) {
    const split = e.target;
    const container = e.target.parentElement;
    const topPane = container.firstChild.children[1];
    const bottomPane =
    container.lastChild.className.split(' ')[0] === 'ReactCodeMirror'
    ? container.lastChild.children[1] : container.lastChild;
    const iframe = document.getElementsByTagName('iframe')[0];
    if (bottomPane.className.split(' ')[0] === "CodeMirror" || bottomPane.className.split(' ')[0] === 'ReactCodeMirror') {
      this.leftResize(split, container, topPane, bottomPane);
    } else {
      this.rightResize(split, container, topPane, bottomPane, iframe);
    }
  }

  leftResize(split, container, topPane, bottomPane) {
    container.addEventListener('mousemove', function listener(e1) {
      topPane.style.height = `${e1.pageY - container.offsetTop - 1.5}px`;
      topPane.setAttribute('heightDivider', container.offsetHeight / (e1.pageY - container.offsetTop - 1));
      bottomPane.style.height = `${(container.offsetHeight + container.offsetTop - 1.5) - e1.pageY}px`;
      bottomPane.setAttribute('heightDivider', container.offsetHeight / ((container.offsetHeight + container.offsetTop - 2) - e1.pageY))
      container.addEventListener('mouseup', (e2) => {
        container.removeEventListener('mousemove', listener);
      });
    });
  }

  rightResize(split, container, topPane, bottomPane, iframe) {
    let pageE;
    function listener(e1) {
      pageE = e1;
      topPane.style.height = `${e1.pageY - container.offsetTop}px`;
      topPane.setAttribute('heightDivider', container.offsetHeight / (e1.pageY - container.offsetTop));
      bottomPane.style.height = `${(container.offsetHeight + container.offsetTop) - e1.pageY}px`;
      bottomPane.setAttribute('heightDivider', container.offsetHeight / ((container.offsetHeight + container.offsetTop) - e1.pageY));
      iframe.style.height = `${(container.offsetHeight + container.offsetTop) - e1.pageY}px`;
      iframe.setAttribute('heightDivider', container.offsetHeight / ((container.offsetHeight + container.offsetTop) - e1.pageY));
      container.addEventListener('mouseup', (e2) => {
        container.removeEventListener('mousemove', listener);
        iframe.contentDocument.removeEventListener('mousemove', listener1);
      });
    }
    function listener1(e1) {
      topPane.style.height = `${topPane.offsetHeight + e1.offsetY}px`;
      topPane.setAttribute('heightDivider', container.offsetHeight / (topPane.offsetHeight + e1.offsetY));
      bottomPane.style.height = `${(container.offsetHeight + container.offsetTop) - (pageE.pageY - e1.pageY)}px`;
      bottomPane.setAttribute('heightDivider', container.offsetHeight / ((container.offsetHeight + container.offsetTop) - (pageE.pageY - e1.pageY)));
      iframe.style.height = `${(container.offsetHeight + container.offsetTop) - (pageE.pageY - e1.pageY)}px`;
      iframe.setAttribute('heightDivider', container.offsetHeight / ((container.offsetHeight + container.offsetTop) - (pageE.pageY - e1.pageY)));
      iframe.contentDocument.addEventListener('mouseup', (e2) => {
        iframe.contentDocument.removeEventListener('mousemove', listener1);
        container.removeEventListener('mousemove', listener);
      });
    }
    container.addEventListener('mousemove', listener);
    iframe.contentDocument.addEventListener('mousemove', listener1);
  }

  render() {
    return(
      <div className="split" onMouseDown={this.handleMouseDown}></div>
    );
  }
}

export default HorizontalSplit;
