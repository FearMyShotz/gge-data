Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./615.js");
var c = createjs.MouseEvent;
var u = function (e) {
  function CastleStormIslandsMainDialogRankingItem(t, i) {
    var n = this;
    n._isMouseOver = false;
    n._crestVO = new O.AllianceCrestVO();
    CONSTRUCTOR_HACK;
    return n = e.call(this, t, i) || this;
  }
  n.__extends(CastleStormIslandsMainDialogRankingItem, e);
  CastleStormIslandsMainDialogRankingItem.prototype.init = function () {
    e.prototype.init.call(this);
    this.disp.mouseChildren = false;
  };
  CastleStormIslandsMainDialogRankingItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this.setDownState(false);
    this.setMouseOverState(false);
  };
  CastleStormIslandsMainDialogRankingItem.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this.disp.addEventListener(c.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.addEventListener(c.MOUSE_UP, this.bindFunction(this.onMouseUp));
  };
  CastleStormIslandsMainDialogRankingItem.prototype.removeEventListener = function () {
    this.disp.removeEventListener(c.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.removeEventListener(c.MOUSE_UP, this.bindFunction(this.onMouseUp));
    e.prototype.removeEventListener.call(this);
  };
  CastleStormIslandsMainDialogRankingItem.prototype.fillContentWithAny = function () {
    e.prototype.fillContentWithAny.call(this);
    d.CastleComponent.textFieldManager.registerTextField(this.disp.txt_rank, this.rank >= 0 ? new s.LocalizedNumberVO(this.rank) : new r.TextVO("-")).autoFitToBounds = true;
    this.disp.gotoAndStop(this.getPrefixFrame());
  };
  CastleStormIslandsMainDialogRankingItem.prototype.fillContentWithData = function () {
    e.prototype.fillContentWithData.call(this);
    var t = this.getAllianceInfo();
    d.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new r.TextVO(t[1])).autoFitToBounds = true;
    d.CastleComponent.textFieldManager.registerTextField(this.disp.txt_level, new s.LocalizedNumberVO(_.CastleModel.allianceFameData.getLevelFromFamePoints(t[3]))).autoFitToBounds = true;
    d.CastleComponent.textFieldManager.registerTextField(this.disp.txt_members, new s.LocalizedNumberVO(t[2])).autoFitToBounds = true;
    d.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points, new s.LocalizedNumberVO(this.data[2])).autoFitToBounds = true;
    var i = t[4];
    this._crestVO.fillWithData(i);
    if (i && !this._crestVO.isEmpty) {
      this.disp.mc_crest.visible = true;
      g.MovieClipHelper.clearMovieClip(this.disp.mc_crest);
      this.disp.mc_crest.scaleX = this.disp.mc_crest.scaleY = 1;
      C.CastleAllianceCrestHelper.setCrestGraphics(this.disp.mc_crest, this._crestVO, f.AllianceCrestSizeEnum.XS, m.AllianceCrestEnum.DEFAULT_CREST_SIMPLE);
      g.MovieClipHelper.scaleDownToFit(this.disp.mc_crest, 40, 36);
    } else {
      this.disp.mc_crest.visible = false;
    }
  };
  CastleStormIslandsMainDialogRankingItem.prototype.fillContentWithEmpty = function () {
    e.prototype.fillContentWithEmpty.call(this);
    d.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new r.TextVO("???")).autoFitToBounds = true;
    d.CastleComponent.textFieldManager.registerTextField(this.disp.txt_level, new r.TextVO("???")).autoFitToBounds = true;
    d.CastleComponent.textFieldManager.registerTextField(this.disp.txt_members, new r.TextVO("???")).autoFitToBounds = true;
    d.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points, new r.TextVO("???")).autoFitToBounds = true;
    this.disp.mc_crest.visible = false;
  };
  CastleStormIslandsMainDialogRankingItem.prototype.setDownState = function (e) {
    this.disp.mc_downState.visible = e;
  };
  CastleStormIslandsMainDialogRankingItem.prototype.setMouseOverState = function (e) {
    this.disp.mc_mouseOver.visible = e;
  };
  CastleStormIslandsMainDialogRankingItem.prototype.getAllianceInfo = function () {
    if (this.data) {
      return this.data[3];
    } else {
      return null;
    }
  };
  CastleStormIslandsMainDialogRankingItem.prototype.getAllianceId = function () {
    var e = this.getAllianceInfo();
    return a.int(e ? e[0] : -1);
  };
  CastleStormIslandsMainDialogRankingItem.prototype.getPrefixFrame = function () {
    var e = this.getAllianceInfo();
    if (e && e[1] == _.CastleModel.userData.allianceName) {
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
  CastleStormIslandsMainDialogRankingItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    var i = this.getAllianceId();
    if (i >= 0) {
      if (_.CastleModel.userData.isInAlliance && _.CastleModel.userData.allianceID == i) {
        b.CastleDialogHandler.getInstance().registerDefaultDialogs(D.CastleAllianceDialog, new I.CastleAllianceDialogProperties());
      } else {
        d.CastleComponent.dialogHandler.registerDialogsWithTypeAndDefaultValues(p.CastleAllianceInfoDialog, new E.CastleAllianceInfoDialogProperties(i), y.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      }
    }
  };
  CastleStormIslandsMainDialogRankingItem.prototype.onMouseDown = function (e) {
    this.setDownState(true);
    this.setMouseOverState(false);
  };
  CastleStormIslandsMainDialogRankingItem.prototype.onMouseUp = function (e) {
    this.setDownState(false);
    if (this._isMouseOver) {
      this.setMouseOverState(true);
    }
  };
  CastleStormIslandsMainDialogRankingItem.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    this._isMouseOver = true;
    this.setMouseOverState(true);
    d.CastleComponent.layoutManager.customCursor.setCursorType(h.BasicCustomCursor.CURSOR_CLICK);
  };
  CastleStormIslandsMainDialogRankingItem.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    this._isMouseOver = false;
    this.setMouseOverState(false);
    this.setDownState(false);
    d.CastleComponent.layoutManager.customCursor.setCursorType(h.BasicCustomCursor.CURSOR_ARROW);
  };
  Object.defineProperty(CastleStormIslandsMainDialogRankingItem.prototype, "name", {
    get: function () {
      if (this.getAllianceInfo()) {
        return this.getAllianceInfo()[2];
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  return CastleStormIslandsMainDialogRankingItem;
}(l.AModernHighscoreComponentItem);
exports.CastleStormIslandsMainDialogRankingItem = u;
o.classImplementsInterfaces(u, "ICollectableRendererList");
var d = require("./14.js");
var p = require("./132.js");
var h = require("./2.js");
var g = require("./2.js");
var C = require("./187.js");
var _ = require("./4.js");
var m = require("./214.js");
var f = require("./235.js");
var O = require("./335.js");
var E = require("./149.js");
var y = require("./43.js");
var b = require("./9.js");
var D = require("./125.js");
var I = require("./136.js");