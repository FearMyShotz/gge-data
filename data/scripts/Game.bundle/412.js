Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./16.js");
var u = require("./22.js");
var d = require("./4.js");
var p = function (e) {
  function AHunterBuildingVO() {
    var t = this;
    t._hunterRatio = 0;
    t._hunterMax = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(AHunterBuildingVO, e);
  AHunterBuildingVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this._hunterRatio = l.int(u.CastleXMLUtils.getIntAttribute("hunterRatio", t));
    this._hunterMax = l.int(u.CastleXMLUtils.getIntAttribute("hunterMax", t));
  };
  AHunterBuildingVO.prototype.getVisualClassName = function () {
    return "Hunter_" + this.group + "_" + this.type;
  };
  Object.defineProperty(AHunterBuildingVO.prototype, "hunterRatioFactor", {
    get: function () {
      return this._hunterRatio / h.CastleHunterData.RATIO_FACTOR;
    },
    enumerable: true,
    configurable: true
  });
  AHunterBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourFood, "hunter_productivity_food", new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [100 + d.CastleModel.hunterData.foodBoost]));
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourWoodStone, "hunter_productivity_WoodStone", new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [100 + d.CastleModel.hunterData.woodStoneReduction]));
  };
  AHunterBuildingVO.prototype.createInfoDialogItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_food_stonewood_production, "dialog_hunter_productivityExchangeRate", new r.LocalizedTextVO("dialog_hunter_ExchangeRate", [new s.LocalizedNumberVO(this.hunterRatioFactor, false, 1), "1"]), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  Object.defineProperty(AHunterBuildingVO.prototype, "hunterRatio", {
    get: function () {
      return this._hunterRatio;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AHunterBuildingVO.prototype, "hunterMax", {
    get: function () {
      return this._hunterMax;
    },
    enumerable: true,
    configurable: true
  });
  return AHunterBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.AHunterBuildingVO = p;
var h = require("./690.js");
a.classImplementsInterfaces(p, "IShopVO", "ICostVO", "IInventoryVO");