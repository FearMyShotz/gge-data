Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./6.js");
var a = require("./22.js");
var s = function () {
  function XmlEquipmentRarenessVO() {
    this._id = 0;
    this._secondaryAttributes = 0;
    this._saleValue = 0;
    this._mightValue = 0;
  }
  XmlEquipmentRarenessVO.prototype.parseXml = function (e) {
    this._id = o.int(a.CastleXMLUtils.getIntAttribute("rarenessID", e, -1));
    this._name = a.CastleXMLUtils.getStringAttribute("name", e);
    this._secondaryAttributes = o.int(a.CastleXMLUtils.getIntAttribute("secondaryAttributes", e));
    this._saleValue = o.int(a.CastleXMLUtils.getIntAttribute("saleValue", e, -1));
    this._mightValue = o.int(a.CastleXMLUtils.getIntAttribute("mightValue", e, -1));
    this._slotIds = a.CastleXMLUtils.createIntListFromAttribute("slotIDs", e);
  };
  Object.defineProperty(XmlEquipmentRarenessVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentRarenessVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentRarenessVO.prototype, "secondaryAttributes", {
    get: function () {
      return this._secondaryAttributes;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentRarenessVO.prototype, "saleValue", {
    get: function () {
      return this._saleValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentRarenessVO.prototype, "mightValue", {
    get: function () {
      return this._mightValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentRarenessVO.prototype, "slotIds", {
    get: function () {
      return this._slotIds;
    },
    enumerable: true,
    configurable: true
  });
  return XmlEquipmentRarenessVO;
}();
exports.XmlEquipmentRarenessVO = s;
n.classImplementsInterfaces(s, "IXmlElementVO");