Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = function (e) {
  function CastleBasicData() {
    return e.call(this) || this;
  }
  n.__extends(CastleBasicData, e);
  CastleBasicData.prototype.reset = function () {};
  return CastleBasicData;
}(o.BasicData);
exports.CastleBasicData = s;
a.classImplementsInterfaces(s, "IUpdatable", "ICastleBasicData");