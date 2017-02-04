import React, { Component } from 'react';
import verticalResize from '../util/vertical_resizer';

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
    
    verticalResize(split, paneWindow, leftContainer, rightContainer, iframe);
  }

  render() {
    return (
      <div className="split-vert"
        id="split-vert" onMouseDown={this.handleMouseDown}></div>
    );
  }
}

export default VerticalSplit;
