Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./16.js");
var l = require("./4.js");
var c = function (e) {
  function FactionUnitCampBuildingVO() {
    var t = this;
    t._auxiliaryCapacity = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(FactionUnitCampBuildingVO, e);
  FactionUnitCampBuildingVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this._auxiliaryCapacity = s.int(t.auxiliaryCapacity || "");
  };
  Object.defineProperty(FactionUnitCampBuildingVO.prototype, "auxiliaryCount", {
    get: function () {
      return l.CastleModel.militaryData.unitInventory.getUnitCount(FactionUnitCampBuildingVO.onlyAuxiliaries) + l.CastleModel.militaryData.unitInCourse.getUnitCount(FactionUnitCampBuildingVO.onlyAuxiliaries);
    },
    enumerable: true,
    configurable: true
  });
  FactionUnitCampBuildingVO.onlyAuxiliaries = function (e) {
    return e.isAuxiliary;
  };
  FactionUnitCampBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Berimond_Auxiliaries_Unit_Plus, "dialog_factionAuxiliaries_tentCapacity_tooltip", new a.LocalizedNumberVO(this.auxiliaryCapacity), r.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  FactionUnitCampBuildingVO.prototype.createInfoDialogItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Berimond_Auxiliaries_Unit_Plus, "dialog_factionAuxiliaries_tentCapacity_tooltip", new a.LocalizedNumberVO(this.auxiliaryCapacity), r.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  Object.defineProperty(FactionUnitCampBuildingVO.prototype, "auxiliaryCapacity", {
    get: function () {
      return this._auxiliaryCapacity;
    },
    enumerable: true,
    configurable: true
  });
  return FactionUnitCampBuildingVO;
}(require("./454.js").UnittentBuildingVO);
exports.FactionUnitCampBuildingVO = c;
o.classImplementsInterfaces(c, "IShopVO", "ICostVO", "IInventoryVO");