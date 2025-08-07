Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./58.js");
var u = require("./617.js");
var d = require("./4.js");
var p = require("./27.js");
var h = require("./197.js");
var g = require("./525.js");
var C = function (e) {
  function ButtonPlagueMonkComponent(t, i = false) {
    var n = e.call(this, t) || this;
    n._ignoreClick = false;
    n._ignoreClick = i;
    var a = new f.CastleGoodgameExternalClip("Icon_PlaqueC2R", o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Icon_PlaqueC2R"));
    a.clipSizeComponent = new o.ClipSizeComponent(26, 32);
    if (n._button.disp.icon_plague) {
      n._button.disp.icon_plague.addChild(a);
    }
    return n;
  }
  n.__extends(ButtonPlagueMonkComponent, e);
  ButtonPlagueMonkComponent.prototype.initAsRingmenuButton = function () {
    if (this._worldMapObjectVO) {
      var e = d.CastleModel.userData.hasLevelFor(c.ClientConstLevelRestrictions.MIN_LEVEL_PLAGUE_ATTACK) && this._worldMapObjectVO.canBePlagueAttacked();
      if (d.CastleModel.specialEventData.isEventActive(l.EventConst.EVENTTYPE_PLAGUE)) {
        this._button.disp.visible = e;
      } else {
        this._button.disp.visible = e && d.CastleModel.spyData.availablePlagueMonks > 0;
      }
      if (this._button.disp.visible) {
        this._button.disp.toolTipText = null;
        this._button.enableButton = true;
        this._worldMapObjectVO.ownerInfo.playerLevel;
        d.CastleModel.userData.userLevel;
        if (d.CastleModel.userData.isInPeaceMode || d.CastleModel.userData.noobProtected) {
          this._button.enableButton = false;
          this._button.disp.toolTipText = "dialog_sabotage_cannot_plague_sabotage_inpeace_mode";
        } else if (d.CastleModel.spyData.availablePlagueMonks <= 0) {
          this._button.enableButton = false;
          this._button.disp.toolTipText = "ringmenu_plagueMonk_noUnits";
        } else if (s.instanceOfClass(this._worldMapObjectVO, "FactionInteractiveMapobjectVO") && this._button.disp.visible && d.CastleModel.userData.castleList.listWithoutOcupiedOrDestroyedFactionCamps.length == 0) {
          this._button.enableButton = false;
          this._button.disp.toolTipText = "panel_action_castle_spectator";
        } else if (!this._worldMapObjectVO.ownerInfo.isNoobProtected || s.instanceOfClass(this._worldMapObjectVO, "FactionCampMapobjectVO") || s.instanceOfClass(this._worldMapObjectVO, "CapitalMapobjectVO") || s.instanceOfClass(this._worldMapObjectVO, "MetropolMapobjectVO")) {
          if (!this._worldMapObjectVO.ownerInfo.isPeaceProtected || s.instanceOfClass(this._worldMapObjectVO, "FactionCampMapobjectVO") || s.instanceOfClass(this._worldMapObjectVO, "CapitalMapobjectVO") || s.instanceOfClass(this._worldMapObjectVO, "MetropolMapobjectVO")) {
            if (s.instanceOfClass(this._worldMapObjectVO, "FactionCampMapobjectVO") && this._worldMapObjectVO.ownerInfo.isFactionProtected && this._worldMapObjectVO.ownerInfo.isNoobProtected) {
              this._button.enableButton = false;
              var t = p.CastleTimeStringHelper.getCantAttackTimeString(this._worldMapObjectVO.ownerInfo.isNoobProtected ? this._worldMapObjectVO.ownerInfo.remainingNoobTime : this._worldMapObjectVO.ownerInfo.remainingFactionProtectionTimeInSeconds);
              this._button.disp.toolTipText = "playerHasNoobProtectionPlague" + h.CastleToolTipManager.ID_PARAM_SEPERATOR + t;
            } else if (this._worldMapObjectVO.remainingCooldownSabotageTimeInSeconds > 0) {
              this._button.enableButton = false;
              var i = o.TimeStringHelper.getShortTimeString(this._worldMapObjectVO.remainingCooldownSabotageTimeInSeconds * 1000, o.TimeStringHelper.ONE_TIME_FORMAT);
              this._button.disp.toolTipText = "dialog_spy_plagueCooldown" + h.CastleToolTipManager.ID_PARAM_SEPERATOR + i;
            } else if (r.CombatConst.getMaxDamagedBuildings(this._worldMapObjectVO.ownerInfo.playerLevel) < 1) {
              this._button.enableButton = false;
              this._button.disp.toolTipText = "dialog_plague_enemyCooldown";
            } else if (this._worldMapObjectVO.temporarySabotageProtection) {
              this._button.enableButton = false;
              this._button.disp.toolTipText = "dialog_spy_plague_protectionActive";
            } else {
              this._button.disp.toolTipText = "dialog_spy_titlePlague";
            }
          } else {
            this._button.enableButton = false;
            var n = p.CastleTimeStringHelper.getCantAttackTimeString(this._worldMapObjectVO.ownerInfo.remainingPeaceTime);
            this._button.disp.toolTipText = "playerHasNoobProtectionPlague" + h.CastleToolTipManager.ID_PARAM_SEPERATOR + n;
          }
        } else {
          this._button.enableButton = false;
          var a = p.CastleTimeStringHelper.getCantAttackTimeString(this._worldMapObjectVO.ownerInfo.remainingNoobTime);
          this._button.disp.toolTipText = "playerHasNoobProtectionPlague" + h.CastleToolTipManager.ID_PARAM_SEPERATOR + a;
        }
      }
    }
  };
  Object.defineProperty(ButtonPlagueMonkComponent.prototype, "targetWMO", {
    set: function (e) {
      this._worldMapObjectVO = e;
      this.initAsRingmenuButton();
    },
    enumerable: true,
    configurable: true
  });
  ButtonPlagueMonkComponent.prototype.onClick = function () {
    if (!this._ignoreClick) {
      _.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastleSpyDialog, new g.CastleSpyDialogProperties(this._worldMapObjectVO, m.CastleSpyDialog.TAB_PLAGUE));
      d.CastleModel.smartfoxClient.sendCommandVO(new u.C2SGetSpyInfo(this._worldMapObjectVO.absAreaPosX, this._worldMapObjectVO.absAreaPosY, this._worldMapObjectVO.kingdomID));
    }
  };
  Object.defineProperty(ButtonPlagueMonkComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_plagueMonk";
    },
    enumerable: true,
    configurable: true
  });
  return ButtonPlagueMonkComponent;
}(require("./150.js").ButtonBasicComponent);
exports.ButtonPlagueMonkComponent = C;
var _ = require("./9.js");
var m = require("./443.js");
var f = require("./24.js");
a.classImplementsInterfaces(C, "IWorldMapObjectRingmenuButtonComponent");