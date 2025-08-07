Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./6.js");
var a = require("./22.js");
var s = function () {
  function XmlRelicCategoryVO() {
    this._id = 0;
    this._neededMinimum = 0;
  }
  XmlRelicCategoryVO.prototype.parseXml = function (e) {
    this._id = o.int(a.CastleXMLUtils.getIntAttribute("id", e, -1));
    this._neededRatings = [];
    var t = a.CastleXMLUtils.getStringAttribute("neededRatings", e).split("#");
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var s = n[i];
        if (s !== undefined) {
          var r = s.split(",");
          var l = [];
          if (r != null) {
            for (var c = 0, u = r; c < u.length; c++) {
              var d = u[c];
              if (d !== undefined) {
                l.push(parseInt(d));
              }
            }
          }
          this._neededRatings.push(l);
        }
      }
    }
    this._neededMinimum = o.int(a.CastleXMLUtils.getIntAttribute("_neededMinimum", e));
  };
  Object.defineProperty(XmlRelicCategoryVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicCategoryVO.prototype, "neededRatings", {
    get: function () {
      return this._neededRatings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicCategoryVO.prototype, "neededMinimum", {
    get: function () {
      return this._neededMinimum;
    },
    enumerable: true,
    configurable: true
  });
  return XmlRelicCategoryVO;
}();
exports.XmlRelicCategoryVO = s;
n.classImplementsInterfaces(s, "IXmlElementVO");