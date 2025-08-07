Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function BattleLogCastleComponent(e, t) {
    this._disp = e;
    this._dimension = t;
    this.itxt_coordinates = l.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.mc_name.txt_name, new h.TextVO(""));
    this.itxt_coordinates.autoFitToBounds = true;
  }
  BattleLogCastleComponent.prototype.drawCastle = function (e) {
    var t = e.mapobjectVO;
    c.MovieClipHelper.clearMovieClip(this._disp.mc_holder);
    var i = null;
    if (u.instanceOfClass(t, "TreasureDungeonMapObjectVO")) {
      i = e.mapobjectVO.tMapNode;
    }
    if (o.AttackHelper.canDrawCastle(t)) {
      var n = "dialog_jumpto_targetSelected";
      var a = true;
      if (e.disableJump) {
        n = "alert_locationErased";
        a = false;
      } else {
        if (u.instanceOfClass(t, "CastleMapobjectVO")) {
          n = "dialog_jumpto_castleSelected";
        }
        if (!s.CastleModel.userData.castleList.hasCastleInKingdom(t.kingdomID)) {
          n = "not_unlocked";
        }
        if (u.instanceOfClass(t, "TreasureDungeonMapObjectVO")) {
          n = null;
        }
        if (u.instanceOfClass(t, "AInvasionEventMapObjectVO")) {
          if (!this.canBeAttackedAgain(e)) {
            n = "alert_locationErased";
            a = false;
          }
        }
      }
      this.renderCastle(t, i, n, a);
      if (!e.disableJump) {
        this.setCastleCoordinates(t);
      }
    } else {
      this._disp.visible = false;
    }
  };
  BattleLogCastleComponent.prototype.canBeAttackedAgain = function (e) {
    var t = s.CastleModel.specialEventData.getActiveEventByEventId(e.mapobjectVO.eventType) != null;
    if (d.EventConst.ALIEN_INVASION_EVENT_TYPES.indexOf(e.mapobjectVO.eventType) > -1) {
      var i = e.getOwnBattleInfo();
      return !e.hasWonState(i) && !e.isForwardedBattleLog && t;
    }
    return t;
  };
  BattleLogCastleComponent.prototype.renderCastle = function (e, t, i, n = true) {
    this._disp.visible = true;
    this._disp.mc_holder.addChild(a.WorldmapObjectIconHelper.drawMapObjectIcon(e, this._dimension, true, false, n, i, t));
  };
  BattleLogCastleComponent.prototype.setCastleCoordinates = function (e) {
    var t = "";
    if (e.absAreaPosX < 0 || e.absAreaPosY < 0) {
      if (u.instanceOfClass(e, "TreasureDungeonMapObjectVO")) {
        e.tMapNode.isUnlocked = true;
        t = e.areaNameString;
      } else {
        t = "-";
      }
    } else {
      t = p.Localize.text(r.GenericTextIds.VALUE_COORDS, [e.absAreaPosX, e.absAreaPosY], true);
    }
    this.itxt_coordinates.textContentVO.stringValue = t;
  };
  return BattleLogCastleComponent;
}();
exports.BattleLogCastleComponent = n;
var o = require("./250.js");
var a = require("./70.js");
var s = require("./4.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./1.js");
var d = require("./5.js");
var p = require("./3.js");
var h = require("./3.js");