Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./18.js");
var c = require("./51.js");
var u = require("./53.js");
var d = require("./4.js");
var p = require("./524.js");
var h = require("./236.js");
var g = function (e) {
  function ButtonSupportDefenceComponent(t) {
    return e.call(this, t) || this;
  }
  n.__extends(ButtonSupportDefenceComponent, e);
  ButtonSupportDefenceComponent.prototype.initAsRingmenuButton = function () {
    this._button.visible = this._worldMapObjectVO.canBeSupported();
    if (f.instanceOfClass(this._worldMapObjectVO, "FactionInteractiveMapobjectVO") && d.CastleModel.userData.castleList.listWithoutOcupiedOrDestroyedFactionCamps.length == 0) {
      this._button.enableButton = false;
      this._button.toolTipText = "panel_action_castle_spectator";
    }
  };
  ButtonSupportDefenceComponent.prototype.initAsDialogButton = function () {
    var e = this._worldMapObjectVO.canBeSupported();
    e = e && (!u.ABGHelper.isOnABGAndTower || this._worldMapObjectVO.ownerInfo.playerID != d.CastleModel.userData.playerID);
    this._button.enableButton = e;
    this._button.disp.toolTipText = "ringmenu_supportDefence";
  };
  Object.defineProperty(ButtonSupportDefenceComponent.prototype, "targetWMO", {
    set: function (e) {
      this._worldMapObjectVO = e;
    },
    enumerable: true,
    configurable: true
  });
  ButtonSupportDefenceComponent.prototype.onClick = function () {
    var e = false;
    if (d.CastleModel.kingdomData.activeKingdomID == a.FactionConst.KINGDOM_ID) {
      var t = d.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_FACTION);
      e = t.remainingNoobProtectionTimeInSeconds > 0 || t.remainingFactionProtectionTimeInSeconds > 0;
    } else {
      e = (d.CastleModel.userData.noobProtected || d.CastleModel.userData.isInPeaceMode) && !(this._worldMapObjectVO instanceof O.DaimyoTownshipMapObjectVO);
    }
    if (e) {
      var i = new h.CastleCharacterYesNoOKDialogProperties(r.Localize.text("generic_alert_watchout"), r.Localize.text("dialog_supportWithNoobProtection"), c.ClientConstCharacter.CHAR_ID_GENERAL, this.bindFunction(this.showSupportDefence), null, true, [this._worldMapObjectVO]);
      C.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastleCharacterYesNoOKDialog, i);
    } else {
      this.showSupportDefence([this._worldMapObjectVO]);
    }
  };
  ButtonSupportDefenceComponent.prototype.showSupportDefence = function (e = null) {
    var t = e[0];
    C.CastleDialogHandler.getInstance().registerDefaultDialogs(_.CastleStartAttackDialog, new p.CastleStartAttackDialogProperties(t, l.ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE));
  };
  Object.defineProperty(ButtonSupportDefenceComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_supportDefence";
    },
    enumerable: true,
    configurable: true
  });
  return ButtonSupportDefenceComponent;
}(require("./150.js").ButtonBasicComponent);
exports.ButtonSupportDefenceComponent = g;
var C = require("./9.js");
var _ = require("./395.js");
var m = require("./238.js");
o.classImplementsInterfaces(g, "IWorldMapObjectRingmenuButtonComponent");
var f = require("./1.js");
var O = require("./581.js");