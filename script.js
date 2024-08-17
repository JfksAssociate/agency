
function updateHTMLOutput() {
    const htmlInput = document.getElementById('html-input').value;
    const htmlOutput = document.getElementById('html-output');
    htmlOutput.innerHTML = htmlInput;
}

function updateCSSOutput() {
    const cssInput = document.getElementById('css-input').value;
    const cssOutput = document.getElementById('css-output');
    const styleTag = document.createElement('style');
    styleTag.innerHTML = cssInput;
    cssOutput.innerHTML = '<h1>Styled Content</h1>';
    cssOutput.appendChild(styleTag);
}

function updateJSOutput() {
    const jsInput = document.getElementById('js-input').value;
    const jsOutput = document.getElementById('js-output');
    try {
        eval(jsInput);
    } catch (e) {
        jsOutput.innerHTML = 'Error: ' + e.message;
    }
}
