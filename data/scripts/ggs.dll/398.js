Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function BasicAssetsEvent(t, n = false, i = false) {
    return e.call(this, t, n, i) || this;
  }
  i.__extends(BasicAssetsEvent, e);
  BasicAssetsEvent.ASSETS_COMPLETE = "assetsComplete";
  return BasicAssetsEvent;
}(createjs.Event);
exports.BasicAssetsEvent = a;