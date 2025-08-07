Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleStormIslandsTitleLostDialogProperties(t) {
    var i = e.call(this) || this;
    i._messageVO = t;
    return i;
  }
  n.__extends(CastleStormIslandsTitleLostDialogProperties, e);
  Object.defineProperty(CastleStormIslandsTitleLostDialogProperties.prototype, "isStormLord", {
    get: function () {
      return this.messageVO.titleID == CastleStormIslandsTitleLostDialogProperties.STORM_LORD_TITLE_ID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStormIslandsTitleLostDialogProperties.prototype, "messageVO", {
    get: function () {
      return this._messageVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleStormIslandsTitleLostDialogProperties.STORM_LORD_TITLE_ID = 50;
  return CastleStormIslandsTitleLostDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleStormIslandsTitleLostDialogProperties = o;