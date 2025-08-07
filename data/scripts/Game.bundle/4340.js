Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function LevelUpVO() {
    this._isLegend = false;
    this._minLevel = 0;
    this._maxLevel = 0;
    this._rewardID = 0;
    this._inSkipGroup = false;
  }
  LevelUpVO.prototype.checkLevelRange = function (e, t = false) {
    return t == this._isLegend && this._minLevel <= e && e <= this._maxLevel;
  };
  LevelUpVO.prototype.parseXML = function (e) {
    this._isLegend = a.CastleXMLUtils.getValueOrDefault("isLegend", e, "0") == "1";
    this._minLevel = parseInt(e.minLevel || "");
    this._maxLevel = parseInt(e.maxLevel || "");
    this._rewardID = parseInt(e.rewardID || "");
    this._inSkipGroup = a.CastleXMLUtils.getValueOrDefault("abTest", e, "") == o.SplitRunConst.SKIP_GROUP_PARAM;
    this._inSkipGroup = a.CastleXMLUtils.getValueOrDefault("abTest", e, "") == o.SplitRunConst.SKIP_GROUP_PARAM;
  };
  Object.defineProperty(LevelUpVO.prototype, "rewardID", {
    get: function () {
      return this._rewardID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LevelUpVO.prototype, "inSkipGroup", {
    get: function () {
      return this._inSkipGroup;
    },
    enumerable: true,
    configurable: true
  });
  return LevelUpVO;
}();
exports.LevelUpVO = n;
var o = require("./5.js");
var a = require("./22.js");