Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function FirstLoaderEvent(t) {
    return e.call(this, t) || this;
  }
  i.__extends(FirstLoaderEvent, e);
  FirstLoaderEvent.prototype.getVars = function () {
    var e = {
      gameId: this.gameId,
      var_1: this.firstLoaderVersion,
      var_data: this.firstLoaderReferer
    };
    return e;
  };
  return FirstLoaderEvent;
}(require("./13.js").BasicTrackingEvent);
exports.FirstLoaderEvent = a;