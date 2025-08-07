Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AllianceFameLevelVO() {
    this._level = 0;
    this._threshHold = 0;
  }
  AllianceFameLevelVO.prototype.fillFromParamXML = function (e) {
    this._level = parseInt(e.fameLevel || "");
    this._threshHold = parseFloat(e.threshold || "");
    this._awardList = o.CollectableManager.parser.createGoodsListSave(new l.CollectableItemWoodVO(parseInt(e.wood || "")), new r.CollectableItemStoneVO(parseInt(e.stone || "")), new a.CollectableItemC1VO(parseInt(e.currency1 || "")), new s.CollectableItemC2VO(parseInt(e.currency2 || "")));
  };
  Object.defineProperty(AllianceFameLevelVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceFameLevelVO.prototype, "awardList", {
    get: function () {
      return this._awardList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceFameLevelVO.prototype, "threshHold", {
    get: function () {
      return this._threshHold;
    },
    enumerable: true,
    configurable: true
  });
  return AllianceFameLevelVO;
}();
exports.AllianceFameLevelVO = n;
var o = require("./50.js");
var a = require("./234.js");
var s = require("./128.js");
var r = require("./268.js");
var l = require("./269.js");