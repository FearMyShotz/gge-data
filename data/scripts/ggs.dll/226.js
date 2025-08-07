Object.defineProperty(exports, "__esModule", {
  value: true
});
(function (e) {
  var t;
  var n = createjs.MouseEvent;
  var i = {
    wheel: "wheel"
  };
  var a = {
    wheel: n.MOUSE_WHEEL
  };
  function convertEvent(e) {
    var t = a[e.type];
    if (!t) {
      throw new Error("Can't convert event of type \"" + e.type + "\"");
    }
    var i = new n(t, e.bubbles, e.cancelable);
    i.ctrlKey = e.ctrlKey;
    i.altKey = e.altKey;
    i.shiftKey = e.shiftKey;
    i.target = e.target;
    i.nativeEvent = e;
    return i;
  }
  e.setTarget = function setTarget(e) {
    t = e;
  };
  e.init = function init() {
    window.addEventListener(i.wheel, s);
  };
  function s(e) {
    for (var i = t; i;) {
      if (i.hasEventListener(n.MOUSE_WHEEL) && i.dispatchEvent) {
        i.dispatchEvent(convertEvent(e));
        break;
      }
      i = i.parent;
    }
  }
})(exports.MouseEventDispatcher ||= {});