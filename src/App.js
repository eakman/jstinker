import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import NavBar from './navbar';
import HorizontalSplit from './splitters/horizontal_split';
import VerticalSplit from './splitters/vertical_split';
import SideBar from './side_bar';
import './App.css';
require('../node_modules/codemirror/lib/codemirror.css');
require('../node_modules/codemirror/mode/javascript/javascript');
require('../node_modules/codemirror/mode/css/css');
require('../node_modules/codemirror/mode/htmlembedded/htmlembedded');

const htmlString = "<div id='my-div'></div>";

const javaScriptString =
"const myDiv = document.getElementById('my-div');\n\n" +
"window.setInterval(() => {\n" +
"   myDiv.style.left = `${(myDiv.offsetLeft + 1) % document.body.offsetWidth}`;\n" +
"}, 30);\n \n" +
"window.setInterval(() => {\n" +
"   myDiv.style.top = `${ myDiv.offsetTop * (100 * Math.random()) % (document.body.offsetHeight - myDiv.offsetHeight)}px`;\n" +
"}, 1000);";

const cssString =
`#my-div {
  display: block;
  position: relative;
  height: 40px;
  width: 40px;
  border: 1px solid black;
  border-radius: 50%;
  transition: top 2s ease 0s;
  top: 0;
}`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      html: htmlString,
      javascript: javaScriptString,
      css: cssString
    }
    this.updateHTML = this.updateHTML.bind(this);
    this.updateJS = this.updateJS.bind(this);
    this.updateCSS = this.updateCSS.bind(this);
  }

  updateHTML(newCode) {
    this.setState({
        html: newCode,
    });
  }

  updateJS(newCode) {
    this.setState({
        javascript: newCode,
    });
  }

  updateCSS(newCode) {
    this.setState({
        css: newCode,
    });
  }


  render() {
    return (
      <div>
        <NavBar html={this.state.html}
          javascript={this.state.javascript}
          css={this.state.css}></NavBar>
        <SideBar />
        <div id="pane-window">
          <div className="container" id="container-left">
            <CodeMirror value={this.state.html} options={{
                lineNumbers: true,
                mode: "htmlembedded",
                lineWrapping: true }} onChange={this.updateHTML}></CodeMirror>
              <HorizontalSplit></HorizontalSplit>
            <CodeMirror value={this.state.javascript} options={{
              lineNumbers: true,
              mode: "javascript",
              lineWrapping: true }} onChange={this.updateJS} />
          </div>

          <VerticalSplit />

          <div className="container" id="container-right">
            <CodeMirror value={this.state.css} options={{
              lineNumbers: true,
              mode: "css",
              lineWrapping: true }} onChange={this.updateCSS} />

            <HorizontalSplit></HorizontalSplit>

            <div className="pane">
              <iframe id="bottom-pane-right" height="100%" width="100%" frameBorder="0" data-crossorigin="y">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
