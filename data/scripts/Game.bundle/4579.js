Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./560.js");
var r = function (e) {
  function CastleIcecreamSectorGenerator() {
    return e.call(this) || this;
  }
  n.__extends(CastleIcecreamSectorGenerator, e);
  Object.defineProperty(CastleIcecreamSectorGenerator.prototype, "worldData", {
    get: function () {
      return new a.WorldIce();
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ABasicSectorGenerator.prototype, "worldData").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIcecreamSectorGenerator.prototype, "kingdomID", {
    get: function () {
      return a.WorldIce.KINGDOM_ID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ABasicSectorGenerator.prototype, "kingdomID").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleIcecreamSectorGenerator;
}(s.ABasicSectorGenerator);
exports.CastleIcecreamSectorGenerator = r;
o.classImplementsInterfaces(r, "ICastleSectorGenerator");