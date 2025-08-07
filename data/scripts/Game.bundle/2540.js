Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./4.js");
var u = require("./43.js");
var d = require("./615.js");
var p = require("./93.js");
var h = createjs.MouseEvent;
var g = function (e) {
  function CastleAllianceBattlegroundEventDialogRankingPlayerListItem(t, i) {
    var n = this;
    n._isMouseOver = false;
    CONSTRUCTOR_HACK;
    return n = e.call(this, t, i) || this;
  }
  n.__extends(CastleAllianceBattlegroundEventDialogRankingPlayerListItem, e);
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.init = function () {
    e.prototype.init.call(this);
    this.disp.mouseChildren = false;
  };
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this.setDownState(false);
    this.setMouseOverState(false);
  };
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this.disp.addEventListener(h.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.addEventListener(h.MOUSE_UP, this.bindFunction(this.onMouseUp));
  };
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.removeEventListener = function () {
    this.disp.removeEventListener(h.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.removeEventListener(h.MOUSE_UP, this.bindFunction(this.onMouseUp));
    e.prototype.removeEventListener.call(this);
  };
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.fillContentWithAny = function () {
    e.prototype.fillContentWithAny.call(this);
    C.CastleComponent.textFieldManager.registerTextField(this.disp.txt_rank, this.rank >= 0 ? new s.LocalizedNumberVO(this.rank) : new r.TextVO("-")).autoFitToBounds = true;
    this.disp.mc_indicator.gotoAndStop(this.getPrefixFrame());
  };
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.fillContentWithData = function () {
    e.prototype.fillContentWithData.call(this);
    var t = this.getPlayerInfo();
    C.CastleComponent.textFieldManager.registerTextField(this.disp.txt_rank, new s.LocalizedNumberVO(this.shownRank)).autoFitToBounds = true;
    C.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new r.TextVO(t.N)).autoFitToBounds = true;
    C.CastleComponent.textFieldManager.registerTextField(this.disp.txt_level, new s.LocalizedNumberVO(t.L)).autoFitToBounds = true;
    C.CastleComponent.textFieldManager.registerTextField(this.disp.txt_allianceName, new r.TextVO(t.AN)).autoFitToBounds = true;
    C.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points, new s.LocalizedNumberVO(this.data[1])).autoFitToBounds = true;
  };
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.setItemIndicatorSearchedName = function () {
    this.disp.mc_indicator.gotoAndStop(4);
  };
  Object.defineProperty(CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype, "shownRank", {
    get: function () {
      var e = l.int(this.rank);
      var t = l.int(this.data ? this.data[4] : 0);
      if (t == 0) {
        return e;
      } else {
        return t;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.fillContentWithEmpty = function () {
    e.prototype.fillContentWithEmpty.call(this);
    C.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new r.TextVO("???")).autoFitToBounds = true;
    C.CastleComponent.textFieldManager.registerTextField(this.disp.txt_level, new r.TextVO("???")).autoFitToBounds = true;
    C.CastleComponent.textFieldManager.registerTextField(this.disp.txt_allianceName, new r.TextVO("???")).autoFitToBounds = true;
    C.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points, new r.TextVO("???")).autoFitToBounds = true;
  };
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.setDownState = function (e) {
    this.disp.mc_downState.visible = e;
  };
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.setMouseOverState = function (e) {
    this.disp.mc_mouseOver.visible = e;
  };
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.getPlayerInfo = function () {
    if (this.data) {
      return this.data[2];
    } else {
      return null;
    }
  };
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.getPlayerId = function () {
    var e = this.getPlayerInfo();
    return l.int(e ? e.OID : -1);
  };
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.getPrefixFrame = function () {
    var e = this.getPlayerInfo();
    if (e && e.OID == c.CastleModel.userData.playerID && (!(this.shownRank >= 1) || !(this.shownRank <= 3))) {
      return 4;
    }
    switch (this.shownRank) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 3:
        return 3;
    }
    return 5;
  };
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    var i = this.getPlayerId();
    if (i >= 0) {
      C.CastleComponent.dialogHandler.registerDialogsWithTypeAndDefaultValues(_.CastlePlayerInfoDialog, new p.CastlePlayerInfoDialogProperties(i), u.CastleDialogConsts.DIALOG_TYPE_SINGLE);
    }
  };
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.onMouseDown = function (e) {
    this.setDownState(true);
    this.setMouseOverState(false);
  };
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.onMouseUp = function (e) {
    this.setDownState(false);
    if (this._isMouseOver) {
      this.setMouseOverState(true);
    }
  };
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    this._isMouseOver = true;
    this.setMouseOverState(true);
    C.CastleComponent.layoutManager.customCursor.setCursorType(a.BasicCustomCursor.CURSOR_CLICK);
  };
  CastleAllianceBattlegroundEventDialogRankingPlayerListItem.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    this._isMouseOver = false;
    this.setMouseOverState(false);
    this.setDownState(false);
    C.CastleComponent.layoutManager.customCursor.setCursorType(a.BasicCustomCursor.CURSOR_ARROW);
  };
  return CastleAllianceBattlegroundEventDialogRankingPlayerListItem;
}(d.AModernHighscoreComponentItem);
exports.CastleAllianceBattlegroundEventDialogRankingPlayerListItem = g;
o.classImplementsInterfaces(g, "ICollectableRendererList");
var C = require("./14.js");
var _ = require("./94.js");