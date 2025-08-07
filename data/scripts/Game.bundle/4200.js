Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./1598.js");
var l = require("./1599.js");
var c = function (e) {
  function ButtonUpgradeLandmarkComponent(t) {
    return e.call(this, t) || this;
  }
  n.__extends(ButtonUpgradeLandmarkComponent, e);
  Object.defineProperty(ButtonUpgradeLandmarkComponent.prototype, "targetWMO", {
    set: function (e) {
      this._worldMapObjectVO = e;
    },
    enumerable: true,
    configurable: true
  });
  ButtonUpgradeLandmarkComponent.prototype.initAsRingmenuButton = function () {
    if (this._worldMapObjectVO && a.instanceOfClass(this._worldMapObjectVO, "UpgradableLandmarkMapobjectVO")) {
      switch (this._worldMapObjectVO.areaType) {
        case s.WorldConst.AREA_TYPE_MONUMENT:
          this._button.gotoAndStop(1);
          break;
        case s.WorldConst.AREA_TYPE_LABORATORY:
          this._button.gotoAndStop(2);
      }
      this._button.visible = this._worldMapObjectVO.canBeUpgradedByMe();
    } else {
      this._button.visible = false;
    }
  };
  ButtonUpgradeLandmarkComponent.prototype.onClick = function () {
    var e = a.instanceOfClass(this._worldMapObjectVO, "MonumentMapobjectVO") ? new l.CastleUpgradeLandmarkDialogProperties(this._worldMapObjectVO) : new r.CastleUpgradeLaboratoryDialogProperties(this._worldMapObjectVO);
    u.CastleDialogHandler.getInstance().registerDefaultDialogs(d.CastleUpgradeLandmarkDialog, e);
  };
  Object.defineProperty(ButtonUpgradeLandmarkComponent.prototype, "infoTextId", {
    get: function () {
      if (a.instanceOfClass(this._worldMapObjectVO, "MonumentMapobjectVO")) {
        return "dialog_monument_manageShort_tooltip";
      } else {
        return "dialog_laboratory_manageShort_tooltip";
      }
    },
    enumerable: true,
    configurable: true
  });
  return ButtonUpgradeLandmarkComponent;
}(require("./150.js").ButtonBasicComponent);
exports.ButtonUpgradeLandmarkComponent = c;
var u = require("./9.js");
var d = require("./1600.js");
o.classImplementsInterfaces(c, "IWorldMapObjectRingmenuButtonComponent");