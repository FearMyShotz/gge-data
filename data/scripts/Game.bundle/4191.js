Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1228.js");
var s = require("./4.js");
var r = function (e) {
  function ButtonAutoSpyComponent(t) {
    return e.call(this, t) || this;
  }
  n.__extends(ButtonAutoSpyComponent, e);
  Object.defineProperty(ButtonAutoSpyComponent.prototype, "targetWMO", {
    set: function (e) {
      this._worldMapObjectVO = e;
    },
    enumerable: true,
    configurable: true
  });
  ButtonAutoSpyComponent.prototype.initAsRingmenuButton = function () {
    if (this._worldMapObjectVO && this._worldMapObjectVO.ownerInfo) {
      this._button.visible = this._worldMapObjectVO.canBeSpied && s.CastleModel.tutorialData.isTutorialFinished() && s.CastleModel.subscriptionData.isAutoSpyActiveForArea(this._worldMapObjectVO);
      this._button.enableButton = true;
    }
  };
  ButtonAutoSpyComponent.prototype.onClick = function () {
    s.CastleModel.smartfoxClient.sendCommandVO(new a.C2SSpySpyUnits(this._worldMapObjectVO.absAreaPosX, this._worldMapObjectVO.absAreaPosY));
  };
  Object.defineProperty(ButtonAutoSpyComponent.prototype, "infoTextId", {
    get: function () {
      return "spylog_autoSpy_ringMenu";
    },
    enumerable: true,
    configurable: true
  });
  return ButtonAutoSpyComponent;
}(require("./150.js").ButtonBasicComponent);
exports.ButtonAutoSpyComponent = r;
o.classImplementsInterfaces(r, "IWorldMapObjectRingmenuButtonComponent");