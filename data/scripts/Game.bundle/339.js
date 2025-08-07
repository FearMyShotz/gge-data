Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./69.js");
var s = function (e) {
  function CastleXmlData() {
    var t = this;
    t._nodes = new Map();
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(CastleXmlData, e);
  CastleXmlData.prototype.parseXML = function (e) {
    var t = new Map();
    var i = this.getXmlList(e);
    if (i != null) {
      for (var n = 0, o = i; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          var s = this.getNewNode();
          s.parseXML(a);
          t.set(s.getId(), s);
        }
      }
    }
    this._nodes = t;
  };
  CastleXmlData.prototype.getXmlList = function (e) {
    throw new a.AbstractMethodError();
  };
  CastleXmlData.prototype.getNewNode = function () {
    throw new a.AbstractMethodError();
  };
  CastleXmlData.prototype.getNode = function (e) {
    return this._nodes.get(e);
  };
  return CastleXmlData;
}(require("./54.js").CastleBasicData);
exports.CastleXmlData = s;
o.classImplementsInterfaces(s, "IUpdatable");