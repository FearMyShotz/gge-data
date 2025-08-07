Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./6.js");
var a = require("./22.js");
var s = function () {
  function XmlRelicTypeVO() {
    this._id = 0;
    this._wearerId = 0;
    this._slotId = 0;
    this._isGem = false;
  }
  XmlRelicTypeVO.prototype.parseXml = function (e) {
    this._id = o.int(a.CastleXMLUtils.getIntAttribute("id", e, -1));
    this._name = a.CastleXMLUtils.getStringAttribute("name", e);
    this._wearerId = o.int(a.CastleXMLUtils.getIntAttribute("wearerID", e, -1));
    this._slotId = o.int(a.CastleXMLUtils.getIntAttribute("slotID", e, -1));
    this._isGem = a.CastleXMLUtils.getBooleanAttribute("isGem", e);
    this._canBeSlottedInSlotIds = a.CastleXMLUtils.createIntListFromAttribute("canBeSlottedInSlotIDs", e);
  };
  Object.defineProperty(XmlRelicTypeVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicTypeVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicTypeVO.prototype, "wearerId", {
    get: function () {
      return this._wearerId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicTypeVO.prototype, "slotId", {
    get: function () {
      return this._slotId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicTypeVO.prototype, "isGem", {
    get: function () {
      return this._isGem;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicTypeVO.prototype, "canBeSlottedInSlotIds", {
    get: function () {
      return this._canBeSlottedInSlotIds;
    },
    enumerable: true,
    configurable: true
  });
  return XmlRelicTypeVO;
}();
exports.XmlRelicTypeVO = s;
n.classImplementsInterfaces(s, "IXmlElementVO");