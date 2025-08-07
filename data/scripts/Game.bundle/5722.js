Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./6.js");
var a = require("./22.js");
var s = function () {
  function XmlRelicBluePrintVO() {
    this._id = 0;
    this._relicTypeId = 0;
    this._normalAmount = 0;
    this._specialAmount = 0;
    this._normalRelicEffectListId = 0;
    this._specialRelicEffectListId = 0;
    this._baseRelicEffectIds = [];
  }
  XmlRelicBluePrintVO.prototype.parseXml = function (e) {
    this._id = o.int(a.CastleXMLUtils.getIntAttribute("id", e, -1));
    this._relicTypeId = o.int(a.CastleXMLUtils.getIntAttribute("relicTypeID", e, -1));
    this._normalAmount = o.int(a.CastleXMLUtils.getIntAttribute("normalAmount", e, -1));
    this._specialAmount = o.int(a.CastleXMLUtils.getIntAttribute("specialAmount", e, -1));
    this._normalRelicEffectListId = o.int(a.CastleXMLUtils.getIntAttribute("normalRelicEffectListID", e, -1));
    this._specialRelicEffectListId = o.int(a.CastleXMLUtils.getIntAttribute("specialRelicEffectListID", e, -1));
    this._baseRelicEffectIds = a.CastleXMLUtils.createIntListFromAttribute("baseRelicEffectIDs", e);
  };
  Object.defineProperty(XmlRelicBluePrintVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicBluePrintVO.prototype, "relicTypeId", {
    get: function () {
      return this._relicTypeId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicBluePrintVO.prototype, "normalAmount", {
    get: function () {
      return this._normalAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicBluePrintVO.prototype, "specialAmount", {
    get: function () {
      return this._specialAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicBluePrintVO.prototype, "normalRelicEffectListId", {
    get: function () {
      return this._normalRelicEffectListId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicBluePrintVO.prototype, "specialRelicEffectListId", {
    get: function () {
      return this._specialRelicEffectListId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicBluePrintVO.prototype, "baseRelicEffectIds", {
    get: function () {
      return this._baseRelicEffectIds;
    },
    enumerable: true,
    configurable: true
  });
  return XmlRelicBluePrintVO;
}();
exports.XmlRelicBluePrintVO = s;
n.classImplementsInterfaces(s, "IXmlElementVO");