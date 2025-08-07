Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./6.js");
var u = require("./39.js");
var d = require("./28.js");
var p = require("./4.js");
var h = function (e) {
  function ButtonAttackVillageComponent(t) {
    return e.call(this, t) || this;
  }
  n.__extends(ButtonAttackVillageComponent, e);
  Object.defineProperty(ButtonAttackVillageComponent.prototype, "targetWMO", {
    set: function (e) {
      this._worldMapObjectVO = e;
    },
    enumerable: true,
    configurable: true
  });
  ButtonAttackVillageComponent.prototype.initAsRingmenuButton = function () {
    var e = s.instanceOfClass(this._worldMapObjectVO, "FactionVillageMapobjectVO");
    var t = s.instanceOfClass(this._worldMapObjectVO, "VillageMapobjectVO") && !s.instanceOfClass(this._worldMapObjectVO, "ResourceIsleMapobjectVO");
    if (e || t) {
      var i = this._worldMapObjectVO.isOwnMapobject;
      var n = p.CastleModel.userData.isUserInMyAlliance(this._worldMapObjectVO.ownerInfo);
      this._button.visible = !i && !n;
      if (this._button.visible) {
        this._button.toolTipText = null;
        this._button.enableButton = true;
        if (this._worldMapObjectVO.ownerInfo) {
          if (c.int(p.CastleModel.allianceData.getStatusByAlliance(this._worldMapObjectVO.ownerInfo.allianceID)) == r.AllianceConst.DIPLOMACY_REAL_ALLIED && p.CastleModel.userData.allianceID != -1) {
            this._button.toolTipText = "cantAttackAlliedPlayer";
            this._button.enableButton = false;
          } else if (this._worldMapObjectVO.remainingCooldownTimeInSeconds > 0) {
            var a = o.TimeStringHelper.getShortTimeString(this._worldMapObjectVO.remainingCooldownTimeInSeconds * d.ClientConstTime.SEC_2_MILLISEC, o.TimeStringHelper.ONE_TIME_FORMAT);
            this._button.toolTipText = {
              t: "castleHasCooldown",
              p: [a]
            };
            this._button.enableButton = false;
          } else if (e) {
            if (p.CastleModel.specialEventData.getActiveEventByEventId(l.EventConst.EVENTTYPE_FACTION).isSpectator) {
              this._button.toolTipText = u.ClientConstTextIds.NOT_AVAILABLE;
              this._button.visible = false;
              this._button.enableButton = false;
            } else if (!this._worldMapObjectVO.canBeAttacked()) {
              this._button.toolTipText = "dialog_factionEvent_blockedByTower";
              this._button.enableButton = false;
              var h = p.CastleModel.specialEventData.getActiveEventByEventId(l.EventConst.EVENTTYPE_FACTION);
              this._button.visible = this._worldMapObjectVO.ownerInfo.factionID != h.ownFaction;
            }
          } else if (t) {
            var g = this._worldMapObjectVO.typeName;
            var C = c.int(p.CastleModel.kingdomData.activeKingdomVO["villageCap" + g]);
            this._button.toolTipText = "";
            if (p.CastleModel.kingdomData.activeKingdomVO.hasContor) {
              if (p.CastleModel.userData.villageList.getCountByResourceTypeIncludingCurrentConquerMovements(p.CastleModel.kingdomData.activeKingdomID, g) >= C) {
                switch (g) {
                  case "Food":
                    this._button.toolTipText = "errorCode_186";
                    break;
                  case "Wood":
                    this._button.toolTipText = "errorCode_184";
                    break;
                  case "Stone":
                    this._button.toolTipText = "errorCode_185";
                }
                this._button.enableButton = false;
              }
            } else {
              this._button.toolTipText = "errorCode_187";
              this._button.enableButton = false;
            }
          }
        }
      }
    } else {
      this._button.visible = false;
    }
  };
  Object.defineProperty(ButtonAttackVillageComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_military_menu_village";
    },
    enumerable: true,
    configurable: true
  });
  ButtonAttackVillageComponent.prototype.onClick = function () {
    g.AttackHelper.executeAttackCommand(this._worldMapObjectVO, this._worldMapObjectVO.attackType, null);
  };
  return ButtonAttackVillageComponent;
}(require("./150.js").ButtonBasicComponent);
exports.ButtonAttackVillageComponent = h;
var g = require("./250.js");
a.classImplementsInterfaces(h, "IWorldMapObjectRingmenuButtonComponent");