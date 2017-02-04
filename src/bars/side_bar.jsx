import React, { Component } from 'react';

class SideBar extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <aside className="side-bar">
        <h3>About:</h3>
        <p>JavaScript, HTML, and CSS are three of the most essential tools for web developers.
        jsTinker allows you to experiment with those tools and hone youre development skills.
        Click the run button at the top to see what's possible.</p>
      <h3>Links:</h3>
        <ul>
          <li><a href="http://www.github.com/eakman">GitHub Profile</a></li>
          <li><a href="http://www.github.com/eakman/jstinker">Project Repo</a></li>
          <li><a href="http://www.eitanakman.com">Portfolio</a></li>
        </ul>
        <h3>Contact:</h3>
          <ul>
            <li><a href="mailto:eitanakman@gmail.com?Subject=jsTinker%20rocks!">eitanakman@gmail.com</a></li>
          </ul>
      </aside>
    );
  }
}

export default SideBar;
