Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./58.js");
var r = require("./139.js");
var l = require("./4.js");
var c = require("./1105.js");
var u = require("./525.js");
var d = function (e) {
  function ButtonSpyComponent(t) {
    var i = this;
    i._showNormalToolTip = false;
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(ButtonSpyComponent, e);
  Object.defineProperty(ButtonSpyComponent.prototype, "targetWMO", {
    set: function (e) {
      this._worldMapObjectVO = e;
    },
    enumerable: true,
    configurable: true
  });
  ButtonSpyComponent.prototype.init = function () {
    e.prototype.init.call(this);
    this.controller.addEventListener(r.CastleArmyDataEvent.MOVEMENTS_CHANGED, this.bindFunction(this.onSpiesChanged));
  };
  ButtonSpyComponent.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.controller.removeEventListener(r.CastleArmyDataEvent.MOVEMENTS_CHANGED, this.bindFunction(this.onSpiesChanged));
  };
  ButtonSpyComponent.prototype.onSpiesChanged = function (e) {
    this.initSpyButton(this._showNormalToolTip);
  };
  ButtonSpyComponent.prototype.initAsRingmenuButton = function () {
    this.initSpyButton(false);
  };
  ButtonSpyComponent.prototype.initSpyButton = function (e) {
    if (this._worldMapObjectVO && this._worldMapObjectVO.ownerInfo) {
      this._showNormalToolTip = e;
      var t = this._worldMapObjectVO.ownerInfo.isLegend || c.MapObjectHelper.isLandmark(this._worldMapObjectVO);
      this._button.visible = this._worldMapObjectVO.canBeSpied && l.CastleModel.tutorialData.isTutorialFinished() && !l.CastleModel.subscriptionData.isAutoSpyActiveForArea(this._worldMapObjectVO);
      this._button.enableButton = true;
      if (this._worldMapObjectVO.isInSpyLevelRange) {
        if (a.instanceOfClass(this._worldMapObjectVO, "FactionInteractiveMapobjectVO") && this._button.visible && l.CastleModel.userData.castleList.listWithoutOcupiedOrDestroyedFactionCamps.length == 0) {
          this._button.enableButton = false;
          this._button.toolTipText = "panel_action_castle_spectator";
        } else if (l.CastleModel.userData.userLevel < s.ClientConstLevelRestrictions.MIN_LEVEL_SPY || l.CastleModel.spyData.getNumAllSpies(t) == 0) {
          this._button.enableButton = false;
          this._button.toolTipText = "ringmenu_toolTip_noAgents";
        } else if (l.CastleModel.spyData.getNumAvailableSpies(t) <= 0) {
          this._button.enableButton = false;
          this._button.toolTipText = "ringmenu_toolTip_noFreeAgents";
        } else {
          this._button.toolTipText = e ? "ringmenu_spy_menu" : null;
        }
      } else {
        this._button.enableButton = false;
        this._button.toolTipText = "ringmenu_toolTip_levelTooLow";
      }
    }
  };
  ButtonSpyComponent.prototype.onClick = function () {
    p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleSpyDialog, new u.CastleSpyDialogProperties(this._worldMapObjectVO, h.CastleSpyDialog.TAB_SPY));
  };
  Object.defineProperty(ButtonSpyComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_spy_menu";
    },
    enumerable: true,
    configurable: true
  });
  return ButtonSpyComponent;
}(require("./150.js").ButtonBasicComponent);
exports.ButtonSpyComponent = d;
var p = require("./9.js");
var h = require("./443.js");
o.classImplementsInterfaces(d, "IWorldMapObjectRingmenuButtonComponent");