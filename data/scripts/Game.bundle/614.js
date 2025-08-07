Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = function (e) {
  function CastleSpecialServerPreBuildCastleSelectionDialogProperties(t) {
    var i = e.call(this) || this;
    i._type = t;
    return i;
  }
  n.__extends(CastleSpecialServerPreBuildCastleSelectionDialogProperties, e);
  Object.defineProperty(CastleSpecialServerPreBuildCastleSelectionDialogProperties.prototype, "globalServerID", {
    get: function () {
      if (this._type == CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_TEMPSERVER) {
        return a.GlobalServerConst.TEMP_SERVER;
      } else if (this._type == CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_ABG) {
        return a.GlobalServerConst.ALLIANCE_BATTLE_GROUND_SERVER;
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleSpecialServerPreBuildCastleSelectionDialogProperties.prototype.isEvent = function () {
    return this.globalServerID > -1;
  };
  Object.defineProperty(CastleSpecialServerPreBuildCastleSelectionDialogProperties.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_TEMPSERVER = "Temp";
  CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_ABG = "ABG";
  CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_STORMISLANDS = "StormIslands";
  return CastleSpecialServerPreBuildCastleSelectionDialogProperties;
}(o.BasicProperties);
exports.CastleSpecialServerPreBuildCastleSelectionDialogProperties = s;