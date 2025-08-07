Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function GenericGameStateEvent(t) {
    return e.call(this, t) || this;
  }
  i.__extends(GenericGameStateEvent, e);
  GenericGameStateEvent.prototype.getVars = function () {
    var t = e.prototype.getVars.call(this);
    t.gamestate = this.gamestate;
    t.sequence = this.sequence;
    return t;
  };
  return GenericGameStateEvent;
}(require("./153.js").MeasurementResultsEvent);
exports.GenericGameStateEvent = a;