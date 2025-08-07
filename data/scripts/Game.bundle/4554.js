Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./51.js");
var s = require("./166.js");
var r = require("./849.js");
var l = function (e) {
  function UnderworldEventVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(UnderworldEventVO, e);
  UnderworldEventVO.prototype.parseParamObject = function (t) {
    if (t.UL && t.UL.MID) {
      this._mapID = t.UL.MID;
    }
    e.prototype.parseParamObject.call(this, t);
  };
  UnderworldEventVO.prototype.openMerchantDialog = function (e, t) {
    this.executeOpenDialog(e, c.CastleUnderworldEventDialog, new s.CastleGenericMerchantDialogProperties(this, t));
  };
  Object.defineProperty(UnderworldEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return UnderworldEventVO.EVENT_BUILDING_WOD_ID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ASeasonEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnderworldEventVO.prototype, "eventFullsizeCharacterName", {
    get: function () {
      return a.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_UNDERWORLD_EXPLORER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ASeasonEventVO.prototype, "eventFullsizeCharacterName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  UnderworldEventVO.EVENT_BUILDING_WOD_ID = 73;
  return UnderworldEventVO;
}(r.ASeasonEventVO);
exports.UnderworldEventVO = l;
var c = require("./4555.js");
o.classImplementsInterfaces(l, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");