Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./55.js");
var s = function (e) {
  function ASpotJudgementVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ASpotJudgementVE, e);
  ASpotJudgementVE.prototype.destroy = function () {
    this.spotVO.destroy();
    e.prototype.destroy.call(this);
  };
  ASpotJudgementVE.prototype.init = function (t) {
    e.prototype.init.call(this, t);
    this._spotType = r.JudgementSpotEnum.getTypeFromVEClass(a.ClientConstUtils.getClassFromObject(this));
    this.elementContainer.mouseChildren = true;
  };
  ASpotJudgementVE.prototype.updateSpot = function () {};
  Object.defineProperty(ASpotJudgementVE.prototype, "spotType", {
    get: function () {
      return this._spotType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASpotJudgementVE.prototype, "spotVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return ASpotJudgementVE;
}(require("./313.js").AIsoObjectVE);
exports.ASpotJudgementVE = s;
var r = require("./773.js");
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");