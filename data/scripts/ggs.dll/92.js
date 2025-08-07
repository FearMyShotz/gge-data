Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./2.js").getLogger("CoreJS.BrowserUtil");
var a = function () {
  function BrowserUtil() {}
  BrowserUtil.executeNavigateToURL = function (e, t = BrowserUtil.WINDOW_BLANK) {
    i.debug("executeNavigateToURL ", e);
    if (typeof e == "string") {
      window.open(e, t);
    } else {
      window.open(e.getURLWithParams(), t);
    }
  };
  BrowserUtil.openWindow = function (e, t = BrowserUtil.WINDOW_BLANK, n = "") {
    if (n) {
      i.warn("openWindow: what should we do with the 'features'", n);
    }
    BrowserUtil.executeNavigateToURL(e, t);
  };
  BrowserUtil.WINDOW_BLANK = "_blank";
  BrowserUtil.WINDOW_SELF = "_self";
  BrowserUtil.WINDOW_PARENT = "_parent";
  BrowserUtil.WINDOW_TOP = "_top";
  return BrowserUtil;
}();
exports.BrowserUtil = a;