Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = function () {
  function AssetUrlConvertor() {
    this.isPNG = /.png$/i;
    this.isWalkMap = /EmpireWalkmaps/i;
  }
  AssetUrlConvertor.prototype.convert = function (e) {
    if (this.isPNG.test(e) && window.useMinAssets && !this.isWalkMap.test(e)) {
      if (n.currentBrowserInfo.isChrome && parseInt(n.currentBrowserInfo.version, 10) > 23 && (!n.currentBrowserInfo.isMobile || n.currentBrowserInfo.isAndroid) || n.currentBrowserInfo.isFireFox && parseInt(n.currentBrowserInfo.version, 10) >= 65) {
        e = e.replace(/.png$/, ".webp");
      }
      return e;
    } else {
      return e;
    }
  };
  return AssetUrlConvertor;
}();
exports.AssetUrlConvertor = o;