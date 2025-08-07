Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./61.js");
var a = function () {
  function MobileHelper() {}
  MobileHelper.isScreenTooSmall = function (e = 578) {
    return i.currentBrowserInfo.isMobile && (document.documentElement.clientWidth < e || document.documentElement.clientHeight < e);
  };
  MobileHelper.isLandscape = function () {
    return i.currentBrowserInfo.isMobile && document.documentElement.clientWidth > document.documentElement.clientHeight && document.documentElement.clientWidth > 480;
  };
  MobileHelper.isPortrait = function () {
    return i.currentBrowserInfo.isMobile && document.documentElement.clientWidth < document.documentElement.clientHeight;
  };
  return MobileHelper;
}();
exports.MobileHelper = a;