const liveCode = new Object();

liveCode.init = function init() {
  const self = liveCode;
  self.notification = document.getElementById("notification");
  /* Set event listeners */
  const codeBlocks = document.querySelectorAll(".code-block");
  codeBlocks.forEach(function(codeBlock) {
    const code = codeBlock.querySelector("code");
    const execCodeBtn = codeBlock.querySelector(".exec-code");
    if (execCodeBtn) { // ensure code block has execute button
      execCodeBtn.addEventListener("click", self.runCode);
    }
    if (codeBlock.className.includes("editable")) {
      code.addEventListener("keyup", self.reHighlight); // dynamic syntax highlighting
    }
  });
}

liveCode.handleCarriageReturn = function carriageReturnMsg() {
  const self = liveCode;
  self.notification.className = "show"; // shows element (temp solution)
  setTimeout(function() {
    self.notification.className = "hide" // hides element
  }, 2000)
}

liveCode.getCode = function getCode(context) {
  const innerHtml = context.innerHTML; // grab the previous element's inner html
  const code = innerHtml.replace(/(<.*?>)/g, ""); // remove all the html tags added for styling
  return code;
}

liveCode.runCode = function runCode(e) {
  const self = liveCode;
  const code = self.getCode(e.target.previousElementSibling); // get raw code
  eval(code); // execute a string that represents javascript code
}

liveCode.reHighlight = function reHighlight(e) {
  const self = liveCode;
  const target = e.target;
  const charPos = $(target).caret("pos"); // find original cursor position
  const code = self.getCode(target); // get raw code
  const html = Prism.highlight(code, Prism.languages.javascript);
  this.innerHTML = html; // update highlighting
  $(target).caret("pos", charPos); // set to original cursor position
  if (e.which === 13 && !e.shiftKey) { // handle carriage return
    self.handleCarriageReturn();
  }
}
