import React, { Component } from 'react';
import { leftResize, rightResize } from '../util/horizontal_resize';

class HorizontalSplit extends Component {
  constructor() {
    super();
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  handleMouseDown(e) {
    const split = e.target;
    const container = e.target.parentElement;
    const topPane = container.firstChild.children[1];
    const bottomPane =
    container.lastChild.className.split(' ')[0] === 'ReactCodeMirror'
    ? container.lastChild.children[1] : container.lastChild;
    const iframe = document.getElementsByTagName('iframe')[0];
    if (bottomPane.className.split(' ')[0] === "CodeMirror") {
      leftResize(split, container, topPane, bottomPane);

    } else {
      rightResize(split, container, topPane, bottomPane, iframe);

    }
  }

  render() {
    return(
      <div className="split" onMouseDown={this.handleMouseDown}></div>
    );
  }
}

export default HorizontalSplit;
