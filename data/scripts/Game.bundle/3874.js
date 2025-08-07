Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MovieClip;
var o = function () {
  function RelicEquipmentToolTip() {
    this._disp = new n();
    this._infoComponent = new a.RelicEquipmentInfoComponent();
    this._infoComponent.init(this._disp);
  }
  RelicEquipmentToolTip.prototype.initToolTip = function (e, t) {
    this._infoComponent.updateWithNewVO(e);
    this._infoComponent.alignElementsToTarget(t);
  };
  Object.defineProperty(RelicEquipmentToolTip.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  return RelicEquipmentToolTip;
}();
exports.RelicEquipmentToolTip = o;
var a = require("./593.js");