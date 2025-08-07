Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./21.js");
var u = require("./32.js");
var d = require("./4.js");
var p = require("./375.js");
var h = require("./40.js");
var g = require("./8.js");
var C = require("./292.js");
var _ = createjs.MouseEvent;
var m = function (e) {
  function CastleAllianceSamuraiInvasionDaimyoCastle(t, i, n) {
    var o = e.call(this, t) || this;
    o._onMouseOverFunc = i;
    o._onMouseOutFunc = n;
    o.init();
    return o;
  }
  n.__extends(CastleAllianceSamuraiInvasionDaimyoCastle, e);
  CastleAllianceSamuraiInvasionDaimyoCastle.prototype.init = function () {
    this.updateColors();
    g.ButtonHelper.initBasicButton(this.disp, 1);
    this.disp.mc_mouseOver.visible = false;
    this.disp.mc_mouseDown.visible = false;
  };
  CastleAllianceSamuraiInvasionDaimyoCastle.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    d.CastleModel.timerData.addEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    E.CastleComponent.controller.addEventListener(u.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onCrestColorUpdated));
    this.disp.addEventListener(_.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
  };
  CastleAllianceSamuraiInvasionDaimyoCastle.prototype.removeEventListener = function () {
    d.CastleModel.timerData.removeEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    E.CastleComponent.controller.removeEventListener(u.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onCrestColorUpdated));
    e.prototype.removeEventListener.call(this);
    this.disp.removeEventListener(_.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
  };
  CastleAllianceSamuraiInvasionDaimyoCastle.prototype.updateWithNewVO = function (e) {
    this._vo = e;
    this.update();
  };
  CastleAllianceSamuraiInvasionDaimyoCastle.prototype.update = function () {
    E.CastleComponent.textFieldManager.registerTextField(this.disp.mc_rank.txt_text, new l.LocalizedTextVO("rank_value", [this.vo.rank])).autoFitToBounds = true;
    this.disp.mc_castle.gotoAndStop(this.vo.rank);
    this.updateFire();
    this.updateCamps();
  };
  CastleAllianceSamuraiInvasionDaimyoCastle.prototype.updateFire = function () {
    this.disp.mc_fire.visible = this.vo && this.vo.getRemainingCooldown() > 0;
  };
  CastleAllianceSamuraiInvasionDaimyoCastle.prototype.updateCamps = function () {
    if (this.disp.mc_camps) {
      this.disp.mc_camps.visible = this.isCastleSupported();
    }
  };
  CastleAllianceSamuraiInvasionDaimyoCastle.prototype.updateColors = function () {
    var e = d.CastleModel.userData.playerCrest;
    if (this.disp.mc_flag) {
      C.FlagHelper.colorFlag(this.disp.mc_flag, e, false);
    }
    if (this.disp.mc_camps) {
      C.FlagHelper.colorFlag(this.disp.mc_camps, e, false);
    }
  };
  CastleAllianceSamuraiInvasionDaimyoCastle.prototype.isCastleSupported = function () {
    if (this.vo.contractType == p.SamuraiDaimyoDataXml.CONTRACT_TYPE_TOWNSHIP) {
      for (var e = 0, t = d.CastleModel.armyData.getAllMyMovementsByTargetType(s.WorldConst.AREA_TYPE_DAIMYO_TOWNSHIP, r.WorldClassic.KINGDOM_ID); e < t.length; e++) {
        var i = t[e];
        if (i.targetAreaPos.x == this.vo.x && i.targetAreaPos.y == this.vo.y && i.isStationed) {
          return true;
        }
      }
    }
    return false;
  };
  CastleAllianceSamuraiInvasionDaimyoCastle.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    var i = new O.DaimyoCastleMapObjectVO();
    i.parseAreaInfo([s.WorldConst.AREA_TYPE_DAIMYO_CASTLE, this.vo.x, this.vo.y]);
    a.CommandController.instance.executeCommand(f.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, i);
    this.disp.mc_mouseOver.visible = false;
    this.disp.mc_mouseDown.visible = false;
  };
  CastleAllianceSamuraiInvasionDaimyoCastle.prototype.onTimer = function (e) {
    this.updateFire();
  };
  CastleAllianceSamuraiInvasionDaimyoCastle.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    this._onMouseOverFunc(this);
    this.disp.mc_mouseOver.visible = true;
  };
  CastleAllianceSamuraiInvasionDaimyoCastle.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    this._onMouseOutFunc(this);
    this.disp.mc_mouseOver.visible = false;
    this.disp.mc_mouseDown.visible = false;
  };
  CastleAllianceSamuraiInvasionDaimyoCastle.prototype.onMouseDown = function (e) {
    this.disp.mc_mouseDown.visible = true;
  };
  CastleAllianceSamuraiInvasionDaimyoCastle.prototype.onCrestColorUpdated = function (e) {
    this.updateColors();
  };
  Object.defineProperty(CastleAllianceSamuraiInvasionDaimyoCastle.prototype, "vo", {
    get: function () {
      return this._vo;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceSamuraiInvasionDaimyoCastle;
}(h.CastleItemRenderer);
exports.CastleAllianceSamuraiInvasionDaimyoCastle = m;
var f = require("./29.js");
var O = require("./527.js");
var E = require("./14.js");
o.classImplementsInterfaces(m, "ICollectableRendererList");