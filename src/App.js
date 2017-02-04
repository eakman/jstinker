import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import NavBar from './bars/navbar';
import HorizontalSplit from './splitters/horizontal_split';
import VerticalSplit from './splitters/vertical_split';
import SideBar from './bars/side_bar';
import { htmlContent, jSContent, cssContent } from './util/initial_window_content';
require('../node_modules/codemirror/lib/codemirror.css');
require('../node_modules/codemirror/mode/javascript/javascript');
require('../node_modules/codemirror/mode/css/css');
require('../node_modules/codemirror/mode/htmlembedded/htmlembedded');

class App extends Component {
  constructor() {
    super();
    this.state = {
      html: htmlContent,
      javascript: jSContent,
      css: cssContent
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
