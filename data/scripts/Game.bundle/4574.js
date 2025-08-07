Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./560.js");
var r = function (e) {
  function CastleClassicSectorGenerator() {
    return e.call(this) || this;
  }
  n.__extends(CastleClassicSectorGenerator, e);
  Object.defineProperty(CastleClassicSectorGenerator.prototype, "worldData", {
    get: function () {
      return new a.WorldClassic();
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ABasicSectorGenerator.prototype, "worldData").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleClassicSectorGenerator.prototype, "kingdomID", {
    get: function () {
      return a.WorldClassic.KINGDOM_ID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ABasicSectorGenerator.prototype, "kingdomID").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleClassicSectorGenerator;
}(s.ABasicSectorGenerator);
exports.CastleClassicSectorGenerator = r;
o.classImplementsInterfaces(r, "ICastleSectorGenerator");