Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./5.js");
var d = require("./15.js");
var p = require("./4.js");
var h = require("./602.js");
var g = require("./603.js");
var C = require("./932.js");
var _ = require("./2347.js");
var m = require("./2348.js");
var f = require("./2349.js");
var O = require("./2350.js");
var E = require("./2351.js");
var y = require("./2352.js");
var b = function (e) {
  function CastleMovementItem(t) {
    CONSTRUCTOR_HACK;
    return e.call(this, t) || this;
  }
  n.__extends(CastleMovementItem, e);
  CastleMovementItem.prototype.customFillItem = function () {
    var e = this._scrollItemVO.movement;
    var t = e.name;
    this.render = CastleMovementItem.RENDER_STRATEGIES.get(t);
    this.render.reset(this.disp, e);
    this.render.renderData(this.disp, e);
    this.render.updateContainer(this.disp, e);
  };
  CastleMovementItem.prototype.onMouseClick = function (t) {
    e.prototype.onMouseClick.call(this, t);
    if (c.instanceOfClass(t.target, "MovieClip")) {
      var i = r.castAs(t.target.movementVO, "IMapMovementVO");
      switch (t.target) {
        case this.disp.btn_retreat:
        case this.disp.btn_sendHome:
          if (i && t.target.enabled) {
            if (i.advisorType > 0) {
              V.CastleDialogHandler.getInstance().registerDefaultDialogs(h.AdvisorAttackOverviewCancelDialog, new g.AdvisorAttackOverviewCancelDialogProperties([i]));
            } else {
              V.CastleDialogHandler.getInstance().registerDefaultDialogs(w.CastleAskRetreatDialog, new C.CastleAskRereatDialogProperties(i));
            }
          }
          break;
        case this.disp.btn_armyInfo:
        case this.disp.btn_spyInfo:
        case this.disp.btn_goods:
          o.CommandController.instance.executeCommand(D.IngameClientCommands.OPEN_MOVEMENT_INFO_DIALOG_COMMAND, i);
          break;
        case this.disp.btn_destination:
          if (c.instanceOfClass(i, "TreasureHuntMovementVO")) {
            if (u.TreasureMapsConst.CRUSADE_MAP_IDS.indexOf(i.treasureMapID) > -1) {
              p.CastleModel.specialEventData.activeSeasonVO.loadTreasureMapAssets(this.bindFunction(this.switchToSeasonMap));
            } else {
              V.CastleDialogHandler.getInstance().registerDefaultDialogs(B.CastleTreasureMapDialog);
            }
          } else if (p.CastleModel.kingdomData.getKingdomVOByID(i.kingdomID).isPaid) {
            o.CommandController.instance.executeCommand(D.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, i.targetArea);
          }
      }
    }
  };
  CastleMovementItem.prototype.reset = function () {
    if (this._scrollItemVO) {
      this.render.updateContainer(this.disp, this._scrollItemVO.movement);
    } else {
      this.hide();
    }
  };
  CastleMovementItem.prototype.switchToSeasonMap = function () {
    CastleMovementItem.layoutManager.state = x.CastleLayoutManager.STATE_SEASON_WORLDMAP;
  };
  Object.defineProperty(CastleMovementItem, "textFieldManager", {
    get: function () {
      return a.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMovementItem, "controller", {
    get: function () {
      return d.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMovementItem, "layoutManager", {
    get: function () {
      return x.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleMovementItem.__initialize_static_members = function () {
    var e;
    (e = new Map()).set(I.AlienAttackMovementVO.NAME, new F.RenderArmyAttack());
    e.set(T.ArmyAttackMapmovementVO.NAME, new F.RenderArmyAttack());
    e.set(v.ArmyTravelMapMovementVO.NAME, new _.RenderArmyTravel());
    e.set(S.MarketMapmovementVO.NAME, new N.RenderMarket());
    e.set(A.PlaguemonkMapmovementVO.NAME, new m.RenderPlaguemonk());
    e.set(L.SiegeMapmovementVO.NAME, new f.RenderSiege());
    e.set(P.SpyMapmovementVO.NAME, new O.RenderSpy());
    e.set(M.SupportDefenceMapmovementVO.NAME, new E.RenderSupportDefence());
    e.set(R.TreasureHuntMovementVO.NAME, new y.RenderTreasureHunt());
    CastleMovementItem.RENDER_STRATEGIES = e;
  };
  return CastleMovementItem;
}(s.ScrollItem);
exports.CastleMovementItem = b;
var D = require("./29.js");
var I = require("./933.js");
var T = require("./385.js");
var v = require("./733.js");
var S = require("./1324.js");
var A = require("./1325.js");
var L = require("./935.js");
var P = require("./1326.js");
var M = require("./1327.js");
var R = require("./1328.js");
var V = require("./9.js");
var x = require("./17.js");
var w = require("./936.js");
var B = require("./1329.js");
var F = require("./2372.js");
var N = require("./2373.js");
l.classImplementsInterfaces(b, "MovieClip");
b.__initialize_static_members();