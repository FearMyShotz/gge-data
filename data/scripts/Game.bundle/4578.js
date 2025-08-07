Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./559.js");
var r = function (e) {
  function CastleVolcanoSectorGenerator() {
    return e.call(this) || this;
  }
  n.__extends(CastleVolcanoSectorGenerator, e);
  Object.defineProperty(CastleVolcanoSectorGenerator.prototype, "worldData", {
    get: function () {
      return new a.WorldVolcano();
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ABasicSectorGenerator.prototype, "worldData").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleVolcanoSectorGenerator.prototype, "kingdomID", {
    get: function () {
      return a.WorldVolcano.KINGDOM_ID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ABasicSectorGenerator.prototype, "kingdomID").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleVolcanoSectorGenerator;
}(s.ABasicSectorGenerator);
exports.CastleVolcanoSectorGenerator = r;
o.classImplementsInterfaces(r, "ICastleSectorGenerator");