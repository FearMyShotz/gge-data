Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./51.js");
var s = require("./166.js");
var r = require("./848.js");
var l = function (e) {
  function SeaqueenEventVO() {
    var t = e.call(this) || this;
    t.preloadedAssets = ["Event4TreasureMapShared1", "Event4TreasureMapShared2", "Event4TreasureMapShared3", "Event4TreasureMapShared4", "Event4TreasureMapShared5", "Event4TreasureMapShared6", "Event4TreasureMapShared7", "Event4TreasureMapShared8", "Event4TreasureMapShared9", "Event4TreasureMapShared10", "Event4TreasureMapShared11", "Event4TreasureMapShared12", "Event4TreasureMapShared13", "Event4TreasureMapShared14"];
    t.hasFrame = false;
    return t;
  }
  n.__extends(SeaqueenEventVO, e);
  SeaqueenEventVO.prototype.parseParamObject = function (t) {
    if (t.UL && t.UL.MID) {
      this._mapID = t.UL.MID;
    }
    e.prototype.parseParamObject.call(this, t);
  };
  SeaqueenEventVO.prototype.openMerchantDialog = function (e, t) {
    this.executeOpenDialog(e, c.CastleSeaQueenEventDialog, new s.CastleGenericMerchantDialogProperties(this, t));
  };
  Object.defineProperty(SeaqueenEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return SeaqueenEventVO.EVENT_BUILDING_WOD_ID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ASeasonEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeaqueenEventVO.prototype, "eventFullsizeCharacterName", {
    get: function () {
      return a.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_SEA_QUEEN;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ASeasonEventVO.prototype, "eventFullsizeCharacterName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SeaqueenEventVO.EVENT_BUILDING_WOD_ID = 396;
  return SeaqueenEventVO;
}(r.ASeasonEventVO);
exports.SeaqueenEventVO = l;
var c = require("./4524.js");
o.classImplementsInterfaces(l, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");