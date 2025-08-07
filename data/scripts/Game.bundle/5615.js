Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./22.js");
var a = require("./12.js");
var s = function () {
  function XmlResourceVO() {
    this._resourceID = -1;
    this._name = "";
  }
  XmlResourceVO.prototype.parseXml = function (e) {
    this._resourceID = n.int(o.CastleXMLUtils.getIntAttribute("resourceID", e, -1));
    this._name = o.CastleXMLUtils.getStringAttribute("name", e, "");
  };
  Object.defineProperty(XmlResourceVO.prototype, "resourceID", {
    get: function () {
      return this._resourceID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlResourceVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlResourceVO.prototype, "resourceEnum", {
    get: function () {
      return a.CollectableEnum.getTypeByXmlKey(this.name);
    },
    enumerable: true,
    configurable: true
  });
  return XmlResourceVO;
}();
exports.XmlResourceVO = s;