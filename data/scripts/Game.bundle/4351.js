Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./54.js");
var s = require("./4352.js");
var r = function (e) {
  function CastleXmlPropertyData(t) {
    var i = e.call(this) || this;
    i._propertyDic = new Map();
    i.parseXML(t);
    return i;
  }
  n.__extends(CastleXmlPropertyData, e);
  CastleXmlPropertyData.prototype.parseXML = function (e) {
    this._propertyDic = new Map();
    var t = e.properties;
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = new s.CastleXmlPropertyVO();
          a.fillByXmlNode(o);
          this._propertyDic.set(a.id, a);
        }
      }
    }
  };
  CastleXmlPropertyData.prototype.getPropertyById = function (e) {
    return this.propertyDic.get(e);
  };
  CastleXmlPropertyData.prototype.getValueById = function (e) {
    var t = this.getPropertyById(e);
    if (t) {
      return t.value;
    } else {
      return 0;
    }
  };
  Object.defineProperty(CastleXmlPropertyData.prototype, "propertyDic", {
    get: function () {
      return this._propertyDic;
    },
    enumerable: true,
    configurable: true
  });
  return CastleXmlPropertyData;
}(a.CastleBasicData);
exports.CastleXmlPropertyData = r;
o.classImplementsInterfaces(r, "IUpdatable");