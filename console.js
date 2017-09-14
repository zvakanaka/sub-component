//instructions: create a div with id="console-output"
oldConsoleLog = console.log;
console.log = function(...things) {
  let code = document.createElement('code');
  code.textContent = things.join(' ');
  let pre = document.createElement('pre');
  pre.appendChild(code);
  document.querySelector((CURRENT_SELECTOR || '#console-output')).appendChild(pre);
  oldConsoleLog(...things);
}
