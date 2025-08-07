Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./30.js");
var p = require("./137.js");
var h = require("./4.js");
var g = require("./223.js");
var C = require("./43.js");
var _ = require("./14.js");
var m = require("./40.js");
var f = require("./8.js");
var O = require("./94.js");
var E = require("./93.js");
var y = createjs.MouseEvent;
var b = createjs.Point;
var D = function (e) {
  function TempServerEventDialogRankingItem(t) {
    var i = e.call(this, t) || this;
    if (i.isOnTempServer) {
      f.ButtonHelper.initBasicButton(t, 1);
    }
    return i;
  }
  n.__extends(TempServerEventDialogRankingItem, e);
  TempServerEventDialogRankingItem.prototype.updateWithNewData = function (e, t, i, n, o) {
    this._currentData = t;
    this.disp.visible = true;
    this.disp.bg.gotoAndStop(1);
    this.txt_rank = _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_rank, new r.TextVO("" + e));
    if (t) {
      var a = u.int(t[1]);
      var l = t[2];
      var c = t[3];
      var d = u.int(t.length >= 5 ? t[4] : 0);
      if ((e = d == 0 ? e : d) <= 3) {
        this.disp.bg_left.gotoAndStop(e);
        this.disp.bg_left.visible = true;
      } else {
        this.disp.bg_left.visible = false;
      }
      if (c == null || c == "") {
        c = l.N;
      }
      if (c.toLowerCase() == n.toLowerCase() || c.toLowerCase() == h.CastleModel.userData.userName.toLowerCase()) {
        this.disp.bg_left.visible = true;
        this.disp.bg_left.gotoAndStop(4);
      }
      this.setName(c ?? l.N);
      this.setAlliance(l.AN ? l.AN : "-");
      this.setLevel(l.L ? l.L : "-");
      this.handleNormalPoints(a, e);
      if (o == s.HighscoreConst.TEMP_SERVER_DAILY_RANK_SWAP) {
        this.handleDailyRankSwap(e);
      } else {
        this.handleNormalPoints(a, e);
      }
      this.handleDistance(t);
      if (d > 0) {
        this.txt_rank = _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_rank, new r.TextVO("" + d));
      }
    } else if (e > 0 && e <= i) {
      this.setName("???");
      this.setAlliance("???");
      this.setLevel("???");
      this.txt_points = _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points, new r.TextVO("???"));
      this.txt_distance = _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_distance, new r.TextVO("???"));
      if (this.disp.txt_might) {
        this.txt_might = _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_might, new r.TextVO("???"));
      }
      if (this.disp.txt_points1_charge) {
        this.txt_points1_charge = _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points1_charge, new r.TextVO("???"));
      }
      if (this.disp.txt_points2_charge) {
        this.txt_points2_charge = _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points2_charge, new r.TextVO("???"));
      }
    } else {
      this.disp.visible = false;
    }
    if (this.txt_name_charge) {
      this.txt_name_charge.autoFitToBounds = true;
      this.txt_name_charge.visible = false;
    }
    if (this.txt_alliance_charge) {
      this.txt_alliance_charge.autoFitToBounds = true;
      this.txt_alliance_charge.visible = false;
    }
    if (this.txt_level_charge) {
      this.txt_level_charge.visible = false;
    }
    if (this.txt_points1_charge) {
      this.txt_points1_charge.visible = false;
    }
    if (this.txt_points2_charge) {
      this.txt_points2_charge.visible = false;
    }
    if (this.txt_rank) {
      this.txt_rank.autoFitToBounds = true;
    }
  };
  TempServerEventDialogRankingItem.prototype.handleNormalPoints = function (e, t) {
    if (this.disp.txt_might) {
      this.txt_might = _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_might, new c.LocalizedNumberVO(e));
      this.txt_points = _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points, new c.LocalizedNumberVO(h.CastleModel.tempServerData.getDailyRankPointsByRank(t)));
    } else {
      this.txt_points = _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points, new c.LocalizedNumberVO(e));
    }
    if (this.disp.mc_rankSwap) {
      this.disp.mc_rankSwap.visible = false;
    }
    if (this.disp.mc_check) {
      this.disp.mc_check.visible = false;
    }
  };
  TempServerEventDialogRankingItem.prototype.handleOverallCharge = function (e, t) {
    var i = e % 10000;
    var n = (e - i) / 10000;
    this.txt_points1_charge = _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points1_charge, new c.LocalizedNumberVO(n));
    this.txt_points2_charge = _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points2_charge, new c.LocalizedNumberVO(i));
    this.disp.mc_check.visible = this.isOnTempServer;
    this.disp.mc_check.gotoAndStop(2);
    this.disp.mc_check.toolTipText = "dialog_tempServer_collectPoints_tooltip_notAttackAble_charge";
    this.disp.mc_check.visible = this.disp.mc_check.visible && h.CastleModel.userData.userName != t;
    this.disp.mouseChildren = true;
  };
  TempServerEventDialogRankingItem.prototype.handleDailyRankSwap = function (e) {
    this.txt_points = _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points, new l.LocalizedTextVO(" "));
    if (this.disp.txt_might) {
      this.txt_might = _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_might, new l.LocalizedTextVO(" "));
    }
    this.txt_rank_swap = _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_rank_swap, new c.LocalizedNumberVO(h.CastleModel.tempServerData.getDailyRankPointsByRank(e)));
    this.disp.mc_rankSwap.visible = this.eventVO.ownDailyRank != e;
    var t = e < this.eventVO.ownDailyRank;
    this.disp.mc_rankSwap.gotoAndStop(t ? 1 : 2);
    this.disp.mc_rankSwap.toolTipText = t ? "dialog_tempServer_collectPoints_tooltip_rankSwapAble" : "dialog_tempServer_collectPoints_tooltip_rankSwapNotAble";
    this.disp.mouseChildren = true;
  };
  TempServerEventDialogRankingItem.prototype.setName = function (e) {
    this.txt_name = _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new r.TextVO(e));
    if (this.disp.txt_name_charge) {
      this.txt_name_charge = _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name_charge, new r.TextVO(e));
    }
  };
  TempServerEventDialogRankingItem.prototype.setAlliance = function (e) {
    this.txt_alliance = _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_alliance, new r.TextVO(e));
    if (this.disp.txt_alliance_charge) {
      this.txt_alliance_charge = _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_alliance_charge, new r.TextVO(e));
    }
  };
  TempServerEventDialogRankingItem.prototype.setLevel = function (e) {
    this.txt_level = _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_level, new r.TextVO(e));
    if (this.disp.txt_level_charge) {
      this.txt_level_charge = _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_level_charge, new r.TextVO(e));
    }
  };
  TempServerEventDialogRankingItem.prototype.handleDistance = function (e) {
    if (this.isOnTempServer) {
      var t = h.CastleModel.otherPlayerData.parseOwnerInfo(e[2], d.CachedTimer.getCachedTimer());
      var i = h.CastleModel.userData.castleList.getMainCastleByKingdomID(a.WorldClassic.KINGDOM_ID);
      var n = t.getMainCastlePositionByKingdomID(a.WorldClassic.KINGDOM_ID);
      var o = Math.round(g.MapHelper.getShortestDistance(n, new b(i.absAreaPosX, i.absAreaPosY)));
      this.txt_distance = _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_distance, new r.TextVO(o + ""));
    } else {
      this.txt_distance = _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_distance, new r.TextVO("-"));
    }
  };
  Object.defineProperty(TempServerEventDialogRankingItem.prototype, "eventVO", {
    get: function () {
      return p.TempServerHelper.tmpServerEvent;
    },
    enumerable: true,
    configurable: true
  });
  TempServerEventDialogRankingItem.prototype.getPlayerIdFromData = function () {
    return u.int(this._currentData ? this._currentData[2].OID : -1);
  };
  TempServerEventDialogRankingItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (this.isOnTempServer) {
      var i = this.getPlayerIdFromData();
      if (i >= 0) {
        _.CastleComponent.dialogHandler.registerDialogsWithTypeAndDefaultValues(O.CastlePlayerInfoDialog, new E.CastlePlayerInfoDialogProperties(i), C.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      }
    }
  };
  TempServerEventDialogRankingItem.prototype.onMouseOver = function (e) {
    if (this.isOnTempServer) {
      this.disp.bg.gotoAndStop(2);
    }
  };
  TempServerEventDialogRankingItem.prototype.onMouseOut = function (e) {
    if (this.isOnTempServer) {
      this.disp.bg.gotoAndStop(1);
    }
  };
  TempServerEventDialogRankingItem.prototype.onMouseDown = function (e) {
    if (this.isOnTempServer) {
      this.disp.bg.gotoAndStop(3);
    }
  };
  TempServerEventDialogRankingItem.prototype.onMouseUp = function (e) {
    if (this.isOnTempServer) {
      this.disp.bg.gotoAndStop(1);
    }
  };
  TempServerEventDialogRankingItem.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    if (this.disp) {
      this.disp.addEventListener(y.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.addEventListener(y.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  TempServerEventDialogRankingItem.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    if (this.disp) {
      this.disp.removeEventListener(y.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.removeEventListener(y.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  Object.defineProperty(TempServerEventDialogRankingItem.prototype, "isOnTempServer", {
    get: function () {
      return p.TempServerHelper.isOnTempServer;
    },
    enumerable: true,
    configurable: true
  });
  return TempServerEventDialogRankingItem;
}(m.CastleItemRenderer);
exports.TempServerEventDialogRankingItem = D;
o.classImplementsInterfaces(D, "ICollectableRendererList");