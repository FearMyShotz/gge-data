Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./4.js");
var a = function (e) {
  function CollectableItemSeasonLeagueMedalVO(t = -1, i = 0) {
    var n = this;
    n._id = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this, i) || this)._id = t;
    return n;
  }
  n.__extends(CollectableItemSeasonLeagueMedalVO, e);
  CollectableItemSeasonLeagueMedalVO.prototype.getXmlMedalVO = function () {
    return o.CastleModel.seasonLeagueData.xml.seasonMedals.get(this.id);
  };
  CollectableItemSeasonLeagueMedalVO.prototype.getTooltipTextId = function () {
    var e = this.getXmlMedalVO();
    if (e) {
      return "seasonLeague_" + e.type + "_name";
    } else {
      return "";
    }
  };
  CollectableItemSeasonLeagueMedalVO.prototype.getDescriptionTextId = function () {
    var e = this.getXmlMedalVO();
    if (e) {
      return "seasonLeague_" + e.type + "_short_info";
    } else {
      return "";
    }
  };
  Object.defineProperty(CollectableItemSeasonLeagueMedalVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (e) {
      this._id = e;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemSeasonLeagueMedalVO;
}(require("./96.js").ACollectableItemVO);
exports.CollectableItemSeasonLeagueMedalVO = a;