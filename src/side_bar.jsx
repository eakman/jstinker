import React, { Component } from 'react';

class SideBar extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <aside className="side-bar">
        <h3>About:</h3>
        <p>JavaScript, HTML, and CSS are three essential tools for web developers.
        jsTinker allows you to experiment with those tools.
        Click the run button at the top to see what's possible.</p>
      </aside>
    );
  }
}

export default SideBar;
