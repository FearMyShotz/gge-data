Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./18.js");
var s = require("./58.js");
var r = require("./53.js");
var l = require("./44.js");
var c = require("./4.js");
var u = function (e) {
  function ButtonConquerComponent(t) {
    return e.call(this, t) || this;
  }
  n.__extends(ButtonConquerComponent, e);
  ButtonConquerComponent.prototype.determineButtonEnablement = function () {
    if (p.instanceOfClass(this._worldMapObjectVO, "OutpostMapobjectVO")) {
      if (p.instanceOfClass(this._worldMapObjectVO, "CapitalMapobjectVO")) {
        this._button.visible = true;
        if (r.ABGHelper.isOnABGServer) {
          this._button.visible = false;
        } else if (c.CastleModel.userData.hasCapital) {
          this._button.enableButton = false;
          this._button.toolTipText = "errorCode_194";
        } else if (c.CastleModel.armyData.hasCapitalOwnConquerMovement) {
          this._button.enableButton = false;
          this._button.toolTipText = "alreadyConquerCapitalMovement";
        } else if (c.CastleModel.userData.userLevel < s.ClientConstLevelRestrictions.MIN_LEVEL_CONQUER_CAPITALS) {
          this._button.enableButton = false;
          this._button.toolTipText = {
            t: "noCapitalConquer",
            p: [s.ClientConstLevelRestrictions.MIN_LEVEL_CONQUER_CAPITALS]
          };
        }
      } else if (p.instanceOfClass(this._worldMapObjectVO, "MetropolMapobjectVO")) {
        if (c.CastleModel.userData.hasMetropol) {
          this._button.enableButton = false;
          this._button.toolTipText = l.SpecialServerHelper.checkTextIDForSkinText("errorCode_252");
        } else if (c.CastleModel.armyData.hasMetropolOwnConquerMovement) {
          this._button.enableButton = false;
          this._button.toolTipText = l.SpecialServerHelper.checkTextIDForSkinText("alreadyConquerMetropolMovement");
        } else if (!r.ABGHelper.isOnABGServer && c.CastleModel.userData.userLevel < s.ClientConstLevelRestrictions.MIN_LEVEL_CONQUER_METROPOL) {
          this._button.enableButton = false;
          this._button.toolTipText = {
            t: l.SpecialServerHelper.checkTextIDForSkinText("noMetropolConquer"),
            p: [s.ClientConstLevelRestrictions.MIN_LEVEL_CONQUER_CAPITALS]
          };
        }
      } else if (c.CastleModel.userData.userLevel < s.ClientConstLevelRestrictions.MIN_LEVEL_OUTPOSTS) {
        this._button.enableButton = false;
        this._button.toolTipText = {
          t: "noBaronsLvl",
          p: [s.ClientConstLevelRestrictions.MIN_LEVEL_OUTPOSTS]
        };
      } else if (c.CastleModel.lordData.numAllBarons < 1 || c.CastleModel.lordData.numAvailableBarons < 1) {
        this._button.enableButton = false;
        this._button.toolTipText = String("noAbailableBarons");
      }
    }
  };
  ButtonConquerComponent.prototype.initAsRingmenuButton = function () {
    this._button.visible = this._worldMapObjectVO.canBeConquered();
    if (this._button.visible) {
      this._button.enableButton = true;
      this._button.toolTipText = null;
      this.determineButtonEnablement();
    }
  };
  Object.defineProperty(ButtonConquerComponent.prototype, "targetWMO", {
    set: function (e) {
      this._worldMapObjectVO = e;
    },
    enumerable: true,
    configurable: true
  });
  ButtonConquerComponent.prototype.onClick = function () {
    d.AttackHelper.executeAttackCommand(this._worldMapObjectVO, a.ClientConstCastle.ACTION_TYPE_CONQUER, null);
  };
  Object.defineProperty(ButtonConquerComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_conquer";
    },
    enumerable: true,
    configurable: true
  });
  return ButtonConquerComponent;
}(require("./150.js").ButtonBasicComponent);
exports.ButtonConquerComponent = u;
var d = require("./250.js");
o.classImplementsInterfaces(u, "IWorldMapObjectRingmenuButtonComponent");
var p = require("./1.js");