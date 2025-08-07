Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HTML_TEXTFIELD_CLASS = "ggsTextField";
exports.insertInputFieldElementCSS = function insertInputFieldElementCSS() {
  var e = document.createElement("style");
  var n = "\n            textarea." + exports.HTML_TEXTFIELD_CLASS + ",\n            textarea." + exports.HTML_TEXTFIELD_CLASS + ":focus,\n            input." + exports.HTML_TEXTFIELD_CLASS + ",\n            input." + exports.HTML_TEXTFIELD_CLASS + ":focus {\n                outline: none;\n                box-shadow: none;\n                border: none;\n                background-color: transparent;\n                display: none;\n                position: absolute;\n                overflow: hidden;\n            }\n    \n            textarea." + exports.HTML_TEXTFIELD_CLASS + " {\n                resize: none;\n            }\n    \n            @-webkit-keyframes autofill {\n                to {\n                    color: #000000;\n                    background: transparent;\n                }\n            }\n    \n            input." + exports.HTML_TEXTFIELD_CLASS + ":-webkit-autofill,\n            input." + exports.HTML_TEXTFIELD_CLASS + ":-webkit-autofill:hover,\n            input." + exports.HTML_TEXTFIELD_CLASS + ":-webkit-autofill:focus,\n            input." + exports.HTML_TEXTFIELD_CLASS + ":-webkit-autofill:active {\n                -webkit-animation-name: autofill;\n                -webkit-animation-fill-mode: both;\n            }\n    ";
  e.appendChild(document.createTextNode(n));
  document.head.appendChild(e);
};