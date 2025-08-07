Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./4.js");
var r = require("./35.js");
var l = function (e) {
  function CastleResearchCompleteDialogProperties(t) {
    var i = this;
    i._researchId = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this)._researchId = a.int(a.int(t));
    i._researchVO = s.CastleModel.researchData.researchVOs.get(i._researchId);
    var n = i._researchVO.getBonusVOByEffectType(r.EffectTypeEnum.EFFECT_TYPE_ENABLE_CONSTRUCTIONITEM_RECIPE_ID);
    if (n) {
      s.CastleModel.constructionItemBlueprintData.addNewBlueprints(n.effectValue.rawValues);
    }
    return i;
  }
  n.__extends(CastleResearchCompleteDialogProperties, e);
  Object.defineProperty(CastleResearchCompleteDialogProperties.prototype, "researchVO", {
    get: function () {
      return this._researchVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResearchCompleteDialogProperties.prototype, "researchId", {
    get: function () {
      return this._researchId;
    },
    enumerable: true,
    configurable: true
  });
  return CastleResearchCompleteDialogProperties;
}(o.BasicProperties);
exports.CastleResearchCompleteDialogProperties = l;