Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./50.js");
var o = require("./4.js");
var a = require("./22.js");
var s = require("./13.js");
var r = function () {
  function SpecialServerPreBuiltCastleVO() {
    this.preBuiltCastleID = 0;
    this.startResourceID = 0;
  }
  SpecialServerPreBuiltCastleVO.prototype.parseXML = function (e) {
    this.preBuiltCastleID = parseInt(a.CastleXMLUtils.getValueOrDefault("preBuiltCastleID", e, "0", true));
    this.preBuildCastleVO = o.CastleModel.prebuiltCastleData.getCastleByID(this.preBuiltCastleID);
    this.startResourceID = parseInt(a.CastleXMLUtils.getValueOrDefault("startResourceID", e, "0", true));
    this.startPlayerLevel = parseInt(a.CastleXMLUtils.getValueOrDefault("startPlayerLevel", e, "0"));
    this.startPlayerLegendLevel = parseInt(a.CastleXMLUtils.getValueOrDefault("startPlayerLegendLevel", e, "0"));
    this.currencyBuyPackageID = parseInt(a.CastleXMLUtils.getValueOrDefault("castlePassageTokenPackageID", e, "0"));
    this.costs = n.CollectableManager.parser.x2cEventPackages.createCostList(e);
    if (this.costs.length == 1 && this.costs.list[0].amount == 0 && this.preBuildCastleVO.primaryCosts.length > 0) {
      this.costs = this.preBuildCastleVO.primaryCosts.clone();
    }
  };
  Object.defineProperty(SpecialServerPreBuiltCastleVO.prototype, "startResourceVO", {
    get: function () {
      return o.CastleModel.allianceBattlegroundData.getStartResourcesVOByID(this.startResourceID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpecialServerPreBuiltCastleVO.prototype, "currencyBuyPackage", {
    get: function () {
      return o.CastleModel.eventPackageData.getEventPackageByID(this.currencyBuyPackageID);
    },
    enumerable: true,
    configurable: true
  });
  SpecialServerPreBuiltCastleVO.prototype.getNameText = function () {
    if (this.preBuildCastleVO.isMainCastleCopy) {
      return o.CastleModel.userData.castleList.getHomeCastle().areaNameString;
    } else {
      return s.TextHelper.toUpperCaseLocaSafeTextId("dialog_chooseCastle_preBuiltCastle_" + this.preBuiltCastleID);
    }
  };
  return SpecialServerPreBuiltCastleVO;
}();
exports.SpecialServerPreBuiltCastleVO = r;