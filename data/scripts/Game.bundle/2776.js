Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function IsoViewObjectGroupBackground() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IsoViewObjectGroupBackground, e);
  IsoViewObjectGroupBackground.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.destroyBackground();
  };
  IsoViewObjectGroupBackground.prototype.destroyBackground = function () {
    this._ve = this.destroyObject(this.ve);
  };
  IsoViewObjectGroupBackground.prototype.initObjects = function () {
    this.destroyBackground();
    this._ve = this.createObjectAndAddToLayer(this.isoData.objects.background.vo);
  };
  IsoViewObjectGroupBackground.prototype.render = function (e = false) {
    if (this.ve) {
      this.ve.updateDisp();
      s.IsoHelper.view.bgStage.color = o.ColorTransform.colorNumToString(s.IsoHelper.view.getIsoColorsByActiveKingdom().backgroundColor);
    }
  };
  IsoViewObjectGroupBackground.prototype.removeObjectByVE = function (e) {
    this.destroyBackground();
  };
  IsoViewObjectGroupBackground.prototype.containsObject = function (e) {
    return e == this.ve;
  };
  IsoViewObjectGroupBackground.prototype.fillInCompleteList = function (e) {
    if (this.ve) {
      e.push(this.ve);
    }
  };
  Object.defineProperty(IsoViewObjectGroupBackground.prototype, "ve", {
    get: function () {
      return this._ve;
    },
    enumerable: true,
    configurable: true
  });
  return IsoViewObjectGroupBackground;
}(require("./1009.js").AIsoViewObjectGroup);
exports.IsoViewObjectGroupBackground = a;
var s = require("./46.js");