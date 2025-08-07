Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleShowUpgradableBuildingsEvent(t, i, n = false, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this)._paramObj = i;
    return a;
  }
  n.__extends(CastleShowUpgradableBuildingsEvent, e);
  Object.defineProperty(CastleShowUpgradableBuildingsEvent.prototype, "paramObj", {
    get: function () {
      return this._paramObj;
    },
    enumerable: true,
    configurable: true
  });
  CastleShowUpgradableBuildingsEvent.__initialize_static_members = function () {
    CastleShowUpgradableBuildingsEvent.UPGRADABLE_BUILDINGS_DATA_RECEIVED = "upgradableBuildingsDataReceived";
  };
  return CastleShowUpgradableBuildingsEvent;
}(createjs.Event);
exports.CastleShowUpgradableBuildingsEvent = o;
o.__initialize_static_members();