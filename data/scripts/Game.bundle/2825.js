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
var d = function (e) {
  function ArmoryBuildingVO() {
    var t = this;
    t._addEquipmentStorageCapacity = 0;
    t._addGemStorageCapacity = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(ArmoryBuildingVO, e);
  ArmoryBuildingVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this._addEquipmentStorageCapacity = l.int(u.CastleXMLUtils.getIntAttribute("addEquipmentStorageCapacity", t));
    this._addGemStorageCapacity = l.int(u.CastleXMLUtils.getIntAttribute("addGemStorageCapacity", t));
  };
  ArmoryBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_LawAndOrder_neutral, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Equipment, "equipmentStorage_capacityBonus_tt", new r.LocalizedTextVO(o.GenericTextIds.VALUE_NOMINAL_ADD, [this._addEquipmentStorageCapacity]), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_GemStorage, "gemStorage_capacityBonus_tt", new r.LocalizedTextVO(o.GenericTextIds.VALUE_NOMINAL_ADD, [this._addGemStorageCapacity]), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  ArmoryBuildingVO.prototype.createInfoDialogItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Equipment, "equipmentStorage_capacityBonus_tt", new r.LocalizedTextVO(o.GenericTextIds.VALUE_NOMINAL_ADD, [this._addEquipmentStorageCapacity]), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_GemStorage, "gemStorage_capacityBonus_tt", new r.LocalizedTextVO(o.GenericTextIds.VALUE_NOMINAL_ADD, [this._addGemStorageCapacity]), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_LawAndOrder_neutral, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  Object.defineProperty(ArmoryBuildingVO.prototype, "addEquipmentStorageCapacity", {
    get: function () {
      return this._addEquipmentStorageCapacity;
    },
    enumerable: true,
    configurable: true
  });
  return ArmoryBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.ArmoryBuildingVO = d;
a.classImplementsInterfaces(d, "IShopVO", "ICostVO", "IInventoryVO");