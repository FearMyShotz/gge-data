Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./51.js");
var r = require("./166.js");
var l = require("./849.js");
var c = function (e) {
  function ThornkingEventVO() {
    var t = this;
    t._mapIDToUse = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(ThornkingEventVO, e);
  ThornkingEventVO.prototype.parseParamObject = function (t) {
    if (t.UL && t.UL.MID) {
      this._mapIDToUse = a.int(t.UL.MID);
      this._mapID = this._mapIDToUse;
    }
    e.prototype.parseParamObject.call(this, t);
  };
  ThornkingEventVO.prototype.openMerchantDialog = function (e, t) {
    this.executeOpenDialog(e, u.CastleThornkingEventDialog, new r.CastleGenericMerchantDialogProperties(this, t));
  };
  Object.defineProperty(ThornkingEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return ThornkingEventVO.EVENT_BUILDING_WOD_ID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ASeasonEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ThornkingEventVO.prototype, "eventFullsizeCharacterName", {
    get: function () {
      return s.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_FRIGHTENED_KING;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ASeasonEventVO.prototype, "eventFullsizeCharacterName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ThornkingEventVO.EVENT_BUILDING_WOD_ID = 385;
  return ThornkingEventVO;
}(l.ASeasonEventVO);
exports.ThornkingEventVO = c;
var u = require("./4544.js");
o.classImplementsInterfaces(c, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");