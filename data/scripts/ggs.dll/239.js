Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./230.js");
(function (e) {
  var t;
  var n = {
    keydown: "keydown",
    keypress: "keypress",
    keyup: "keyup"
  };
  var a = {
    keydown: i.KeyboardEvent.KEY_DOWN,
    keyup: i.KeyboardEvent.KEY_UP
  };
  function convertEvent(e, t = undefined) {
    var n = a[e.type] || e.type;
    var s = new i.KeyboardEvent(n, t !== undefined ? t : e.bubbles, e.cancelable);
    s.ctrlKey = e.ctrlKey;
    s.altKey = e.altKey;
    s.shiftKey = e.shiftKey;
    s.keyCode = e.keyCode;
    s.charCode = e.charCode;
    s.key = e.key;
    s.code = e.code;
    s.which = e.which;
    s.target = e.target;
    s.currentTarget = e.currentTarget;
    return s;
  }
  e.init = function init(e) {
    t = e;
    (function addListeners() {
      window.addEventListener(n.keydown, s);
      window.addEventListener(n.keypress, s);
      window.addEventListener(n.keyup, s);
    })();
  };
  e.convertEvent = convertEvent;
  function s(e) {
    var n = convertEvent(e);
    t.dispatchEvent(n);
  }
})(exports.KeyboardEventDispatcher ||= {});