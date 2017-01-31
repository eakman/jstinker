import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import NavBar from './navbar';
import HorizontalSplit from './splitters/horizontal_split';
import VerticalSplit from './splitters/vertical_split';
import './App.css';
require('../node_modules/codemirror/lib/codemirror.css');
require('../node_modules/codemirror/mode/javascript/javascript');
require('../node_modules/codemirror/mode/css/css');
require('../node_modules/codemirror/mode/htmlembedded/htmlembedded');

class App extends Component {
  constructor() {
    super();
    this.state = {
      html: "",
      javascript: "",
      css: ""
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
        <aside className="side-bar">

        </aside>
        <div id="pane-window">
          <div className="container" id="container-left">
            <CodeMirror options={{
                lineNumbers: true,
                mode: "htmlembedded",
                lineWrapping: true }} onChange={this.updateHTML} />
              <HorizontalSplit></HorizontalSplit>
            <CodeMirror options={{
              lineNumbers: true,
              mode: "javascript",
              lineWrapping: true }} onChange={this.updateJS} />
          </div>

          <VerticalSplit />

          <div className="container" id="container-right">
            <CodeMirror options={{
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
