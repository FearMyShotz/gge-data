Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./6.js");
var a = require("./22.js");
var s = function () {
  function XmlEquipmentGroupVO() {
    this._id = 0;
    this._wearerId = 0;
    this._slotId = 0;
    this._picId = 0;
    this._dropRate = 0;
  }
  XmlEquipmentGroupVO.prototype.parseXml = function (e) {
    this._id = o.int(a.CastleXMLUtils.getIntAttribute("itemGroupID", e, -1));
    this._name = a.CastleXMLUtils.getStringAttribute("name", e);
    this._wearerId = o.int(a.CastleXMLUtils.getIntAttribute("wearerID", e, -1));
    this._slotId = o.int(a.CastleXMLUtils.getIntAttribute("slotID", e, -1));
    this._picId = o.int(a.CastleXMLUtils.getIntAttribute("picID", e, -1));
    this._dropRate = o.int(a.CastleXMLUtils.getIntAttribute("dropRate", e, -1));
  };
  Object.defineProperty(XmlEquipmentGroupVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentGroupVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentGroupVO.prototype, "wearerId", {
    get: function () {
      return this._wearerId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentGroupVO.prototype, "slotId", {
    get: function () {
      return this._slotId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentGroupVO.prototype, "picId", {
    get: function () {
      return this._picId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentGroupVO.prototype, "dropRate", {
    get: function () {
      return this._dropRate;
    },
    enumerable: true,
    configurable: true
  });
  return XmlEquipmentGroupVO;
}();
exports.XmlEquipmentGroupVO = s;
n.classImplementsInterfaces(s, "IXmlElementVO");