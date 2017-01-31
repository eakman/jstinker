import React, {Component} from 'react';

class NavBar extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.clearOldHtml = this.clearOldHtml.bind(this);
  }

  clearOldHtml() {
    // debugger
    const myNode = document.getElementsByTagName('iframe')[0].contentDocument.getElementsByTagName('body')[0];
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
    const oldScript = document.getElementsByTagName('iframe')[0].contentDocument.getElementsByClassName('my-script')[0];
    if (oldScript){
      oldScript.remove();
    }
    // document.getElementsByTagName('iframe')[0].contentWindow.location.reload();
  }

  handleClick() {
    this.clearOldHtml();
    const script = document.createElement('script');
    script.setAttribute('class', 'my-script');
    const inner = `function doThis() { ${this.props.javascript} };
                    doThis();`
    script.innerHTML = inner;
    document.getElementsByTagName('iframe')[0].contentDocument.getElementsByTagName('body')[0].appendChild(script);

  }

  render () {
    return (
      <div className="nav-bar">
        <h1 className="logo">jsTinker</h1>
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
