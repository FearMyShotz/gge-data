Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function CastleSagaMapData(t) {
    var i = e.call(this) || this;
    i.parseXML(t);
    return i;
  }
  n.__extends(CastleSagaMapData, e);
  CastleSagaMapData.prototype.getXmlList = function (e) {
    return e.sagamaps;
  };
  CastleSagaMapData.prototype.getNewNode = function () {
    return new s.CastleSagaMapNodeVO();
  };
  return CastleSagaMapData;
}(require("./339.js").CastleXmlData);
exports.CastleSagaMapData = a;
var s = require("./5579.js");
o.classImplementsInterfaces(a, "IUpdatable");