Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./559.js");
var r = function (e) {
  function CastleDessertSectorGenerator() {
    return e.call(this) || this;
  }
  n.__extends(CastleDessertSectorGenerator, e);
  Object.defineProperty(CastleDessertSectorGenerator.prototype, "worldData", {
    get: function () {
      return new a.WorldDessert();
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ABasicSectorGenerator.prototype, "worldData").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDessertSectorGenerator.prototype, "kingdomID", {
    get: function () {
      return a.WorldDessert.KINGDOM_ID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ABasicSectorGenerator.prototype, "kingdomID").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleDessertSectorGenerator;
}(s.ABasicSectorGenerator);
exports.CastleDessertSectorGenerator = r;
o.classImplementsInterfaces(r, "ICastleSectorGenerator");