Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./4196.js");
var c = require("./4.js");
var u = require("./754.js");
var d = require("./4197.js");
var p = function (e) {
  function ButtonTauntComponent(t) {
    return e.call(this, t) || this;
  }
  n.__extends(ButtonTauntComponent, e);
  Object.defineProperty(ButtonTauntComponent.prototype, "targetWMO", {
    set: function (e) {
      this._worldMapObjectVO = e;
    },
    enumerable: true,
    configurable: true
  });
  ButtonTauntComponent.prototype.initAsRingmenuButton = function () {
    if (this._worldMapObjectVO.areaType == a.WorldConst.AREA_TYPE_ALLIANCE_NOMAD_CAMP) {
      this._button.visible = true;
      var e = r.int(this.eventVO.playerRage);
      var t = r.int(this.eventVO.neededPlayerRage);
      if (e < t) {
        this._button.enableButton = false;
        this._button.toolTipText = {
          t: "dialog_nomadInvasion_khanCamp_insufficientRage_tooltip",
          p: [e, t]
        };
      } else {
        this._button.enableButton = true;
        this._button.toolTipText = null;
      }
    } else if (this._worldMapObjectVO.areaType == a.WorldConst.AREA_TYPE_DAIMYO_TOWNSHIP) {
      this._button.visible = true;
      var i = false;
      for (var n = 0, o = Array.from(c.CastleModel.armyData.mapMovements.values()); n < o.length; n++) {
        if ((u = o[n]) !== undefined && !u.isMyMovement && u.targetAreaPos.equals(this._worldMapObjectVO.absAreaPos)) {
          i = true;
          break;
        }
      }
      if (i) {
        this._button.enableButton = false;
        this._button.toolTipText = {
          t: "ringmenu_taunt_incoming"
        };
      } else {
        this._button.enableButton = true;
        this._button.toolTipText = null;
      }
    } else if (this._worldMapObjectVO.areaType == a.WorldConst.AREA_TYPE_WOLF_KING) {
      this._button.visible = true;
      i = false;
      for (var s = 0, l = Array.from(c.CastleModel.armyData.mapMovements.values()); s < l.length; s++) {
        var u;
        if ((u = l[s]) !== undefined && !u.isMyMovement && u.targetAreaPos.equals(this._worldMapObjectVO.absAreaPos)) {
          i = true;
          break;
        }
      }
      this._button.enableButton = c.CastleModel.generalsIntroductionData.canTauntWolfking() && !i;
    } else {
      this._button.visible = false;
    }
  };
  ButtonTauntComponent.prototype.onClick = function () {
    if (this._worldMapObjectVO.areaType == a.WorldConst.AREA_TYPE_ALLIANCE_NOMAD_CAMP) {
      h.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleNomadInvasionTauntDialog);
    } else if (this._worldMapObjectVO.areaType == a.WorldConst.AREA_TYPE_DAIMYO_TOWNSHIP) {
      if (this._worldMapObjectVO.isCoolingDown) {
        h.CastleDialogHandler.getInstance().registerDefaultDialogs(g.SkippableCooldownDialog, new u.SkippableCooldownDialogProperties(this._worldMapObjectVO, this.bindFunction(this.tauntDaimyo), []));
      } else {
        this.tauntDaimyo();
      }
    } else if (this._worldMapObjectVO.areaType == a.WorldConst.AREA_TYPE_WOLF_KING) {
      c.CastleModel.smartfoxClient.sendCommandVO(new l.C2SLaunchWolfkingTauntAttackVO());
    }
  };
  ButtonTauntComponent.prototype.tauntDaimyo = function () {
    h.CastleDialogHandler.getInstance().registerDefaultDialogs(_.SamuraiDaimyoTauntDialog, new d.SamuraiDaimyoTauntDialogProperties(this._worldMapObjectVO));
  };
  Object.defineProperty(ButtonTauntComponent.prototype, "eventVO", {
    get: function () {
      return c.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ButtonTauntComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_taunt";
    },
    enumerable: true,
    configurable: true
  });
  return ButtonTauntComponent;
}(require("./150.js").ButtonBasicComponent);
exports.ButtonTauntComponent = p;
var h = require("./9.js");
var g = require("./755.js");
var C = require("./1766.js");
var _ = require("./4198.js");
o.classImplementsInterfaces(p, "IWorldMapObjectRingmenuButtonComponent");