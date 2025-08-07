Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function HTMLLinkClickSignal() {
    var t = e.call(this) || this;
    t.mappedEventType = HTMLLinkClickSignal.HTML_LINK_CLICK;
    return t;
  }
  i.__extends(HTMLLinkClickSignal, e);
  HTMLLinkClickSignal.prototype.dispatchTyped = function (t, n) {
    e.prototype.dispatch.call(this, t, n);
  };
  HTMLLinkClickSignal.HTML_LINK_CLICK = "htmlLinkClick";
  return HTMLLinkClickSignal;
}(require("./32.js").GGSTextFieldSignal);
exports.HTMLLinkClickSignal = a;