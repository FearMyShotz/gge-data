Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./4.js");
var d = require("./335.js");
var p = require("./43.js");
var h = require("./215.js");
var g = require("./235.js");
var C = require("./187.js");
var _ = require("./149.js");
var m = require("./616.js");
var f = createjs.MouseEvent;
var O = function (e) {
  function CastleAllianceBattlegroundEventDialogRankingAllianceListItem(t, i) {
    var n = this;
    n._isMouseOver = false;
    n._crestVO = new d.AllianceCrestVO();
    CONSTRUCTOR_HACK;
    return n = e.call(this, t, i) || this;
  }
  n.__extends(CastleAllianceBattlegroundEventDialogRankingAllianceListItem, e);
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.init = function () {
    e.prototype.init.call(this);
    this.disp.mouseChildren = false;
  };
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this.setDownState(false);
    this.setMouseOverState(false);
  };
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this.disp.addEventListener(f.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.addEventListener(f.MOUSE_UP, this.bindFunction(this.onMouseUp));
  };
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.removeEventListener = function () {
    this.disp.removeEventListener(f.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.removeEventListener(f.MOUSE_UP, this.bindFunction(this.onMouseUp));
    e.prototype.removeEventListener.call(this);
  };
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.fillContentWithAny = function () {
    e.prototype.fillContentWithAny.call(this);
    E.CastleComponent.textFieldManager.registerTextField(this.disp.txt_rank, this.rank >= 0 ? new l.LocalizedNumberVO(this.rank) : new r.TextVO("-")).autoFitToBounds = true;
    this.disp.mc_indicator.gotoAndStop(this.getPrefixFrame());
  };
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.fillContentWithData = function () {
    e.prototype.fillContentWithData.call(this);
    var t = this.getAllianceInfo();
    E.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new r.TextVO(t[1])).autoFitToBounds = true;
    E.CastleComponent.textFieldManager.registerTextField(this.disp.txt_members, new l.LocalizedNumberVO(t[2])).autoFitToBounds = true;
    E.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points, new l.LocalizedNumberVO(this.data[1])).autoFitToBounds = true;
    var i = t[4];
    this._crestVO.fillWithData(i);
    if (i.BGT && !this._crestVO.isEmpty) {
      this.disp.mc_crest.visible = true;
      a.MovieClipHelper.clearMovieClip(this.disp.mc_crest);
      C.CastleAllianceCrestHelper.setCrestGraphics(this.disp.mc_crest, this._crestVO, g.AllianceCrestSizeEnum.XS, h.AllianceCrestEnum.DEFAULT_CREST_SIMPLE);
    } else {
      this.disp.mc_crest.visible = false;
    }
  };
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.fillContentWithEmpty = function () {
    e.prototype.fillContentWithEmpty.call(this);
    E.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new r.TextVO("???")).autoFitToBounds = true;
    E.CastleComponent.textFieldManager.registerTextField(this.disp.txt_members, new r.TextVO("???")).autoFitToBounds = true;
    E.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points, new r.TextVO("???")).autoFitToBounds = true;
    this.disp.mc_crest.visible = false;
  };
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.setItemIndicatorSearchedName = function () {
    this.disp.mc_indicator.gotoAndStop(4);
  };
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.setDownState = function (e) {
    this.disp.mc_downState.visible = e;
  };
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.setMouseOverState = function (e) {
    this.disp.mc_mouseOver.visible = e;
  };
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.getAllianceInfo = function () {
    if (this.data) {
      return this.data[2];
    } else {
      return null;
    }
  };
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.getAllianceId = function () {
    var e = this.getAllianceInfo();
    return c.int(e ? e[0] : -1);
  };
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.getPrefixFrame = function () {
    var e = this.getAllianceInfo();
    if (e && e[1] == u.CastleModel.userData.allianceName) {
      return 4;
    }
    switch (this.rank) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 3:
        return 3;
    }
    return 5;
  };
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    var i = this.getAllianceId();
    if (i >= 0) {
      E.CastleComponent.dialogHandler.registerDialogsWithTypeAndDefaultValues(y.CastleAllianceInfoDialog, new _.CastleAllianceInfoDialogProperties(i), p.CastleDialogConsts.DIALOG_TYPE_SINGLE);
    }
  };
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.onMouseDown = function (e) {
    this.setDownState(true);
    this.setMouseOverState(false);
  };
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.onMouseUp = function (e) {
    this.setDownState(false);
    if (this._isMouseOver) {
      this.setMouseOverState(true);
    }
  };
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    this._isMouseOver = true;
    this.setMouseOverState(true);
    E.CastleComponent.layoutManager.customCursor.setCursorType(s.BasicCustomCursor.CURSOR_CLICK);
  };
  CastleAllianceBattlegroundEventDialogRankingAllianceListItem.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    this._isMouseOver = false;
    this.setMouseOverState(false);
    this.setDownState(false);
    E.CastleComponent.layoutManager.customCursor.setCursorType(s.BasicCustomCursor.CURSOR_ARROW);
  };
  return CastleAllianceBattlegroundEventDialogRankingAllianceListItem;
}(m.AModernHighscoreComponentItem);
exports.CastleAllianceBattlegroundEventDialogRankingAllianceListItem = O;
o.classImplementsInterfaces(O, "ICollectableRendererList");
var E = require("./14.js");
var y = require("./132.js");