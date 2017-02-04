export const htmlContent = "<div id='my-div'></div>";

export const jSContent =
"const myDiv = document.getElementById('my-div');\n\n" +
"window.setInterval(() => {\n" +
"   myDiv.style.left = `${(myDiv.offsetLeft + 1) % document.body.offsetWidth}`;\n" +
"}, 30);\n \n" +
"window.setInterval(() => {\n" +
"   myDiv.style.top = `${ myDiv.offsetTop * (100 * Math.random()) % (document.body.offsetHeight - myDiv.offsetHeight)}px`;\n" +
"}, 1000);";

export const cssContent =
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
