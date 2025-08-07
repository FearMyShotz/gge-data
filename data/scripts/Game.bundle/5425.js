Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleBattleLogPopUpDialogProperties(t, i, n, o = 0) {
    var a = this;
    a._currentWave = 0;
    a.currentFlank = 0;
    a.unitType = 0;
    CONSTRUCTOR_HACK;
    (a = e.call(this) || this).logVO = t;
    a.currentWave = i;
    a.currentFlank = n;
    a.unitType = o;
    return a;
  }
  n.__extends(CastleBattleLogPopUpDialogProperties, e);
  Object.defineProperty(CastleBattleLogPopUpDialogProperties.prototype, "currentWave", {
    get: function () {
      return this._currentWave;
    },
    set: function (e) {
      this._currentWave = e;
    },
    enumerable: true,
    configurable: true
  });
  return CastleBattleLogPopUpDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleBattleLogPopUpDialogProperties = o;