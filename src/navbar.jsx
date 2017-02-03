import React, {Component} from 'react';

class NavBar extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.clearOldHtml = this.clearOldHtml.bind(this);
  }

  clearOldHtml() {
    const myNode = document.getElementsByTagName('iframe')[0].contentDocument.getElementsByTagName('body')[0];
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
  }

  handleClick() {
    this.clearOldHtml();
    const style = document.createElement('style');
    style.innerHTML = this.props.css;

    const script = document.createElement('script');
    const inner = `function doThis() { ${this.props.javascript} };
                    doThis();`
    script.innerHTML = inner;
    const body = document.getElementsByTagName('iframe')[0].contentDocument.getElementsByTagName('body')[0];
    body.innerHTML = this.props.html;
    body.appendChild(style);
    body.appendChild(script);

  }

  render () {
    return (
      <div className="nav-bar">
        <h1 className="logo"><span id="js">js</span>Tinker</h1>
        <button id="run" onClick={this.handleClick}>
          <div className="bts bt-play">
            &#x25b7;
          </div>
          Run
        </button>
      </div>
    );
  }
}

export default NavBar;
// &#9654;
