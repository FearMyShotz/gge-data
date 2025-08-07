Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./4.js");
var s = function (e) {
  function CastleRerollAlienDialogProperties(t) {
    var i = e.call(this) || this;
    i._worldMapObjectVO = t;
    i._eventVO = a.CastleModel.specialEventData.getActiveEventByEventId(i._worldMapObjectVO.eventType);
    return i;
  }
  n.__extends(CastleRerollAlienDialogProperties, e);
  Object.defineProperty(CastleRerollAlienDialogProperties.prototype, "worldMapObjectVO", {
    get: function () {
      return this._worldMapObjectVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRerollAlienDialogProperties.prototype, "eventVO", {
    get: function () {
      return this._eventVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleRerollAlienDialogProperties;
}(o.BasicProperties);
exports.CastleRerollAlienDialogProperties = s;