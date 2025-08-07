Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./4.js");
var u = require("./43.js");
var d = require("./615.js");
var p = require("./93.js");
var h = createjs.MouseEvent;
var g = createjs.Point;
var C = function (e) {
  function SeasonLeagueMainDialogRanksItem(t, i) {
    var n = this;
    n._showPoints = false;
    n._isMouseOver = false;
    CONSTRUCTOR_HACK;
    return n = e.call(this, t, i) || this;
  }
  n.__extends(SeasonLeagueMainDialogRanksItem, e);
  SeasonLeagueMainDialogRanksItem.prototype.init = function () {
    e.prototype.init.call(this);
    this.disp.mc_gold.mc_icon.gotoAndStop(1);
    this.disp.mc_silver.mc_icon.gotoAndStop(2);
    this.disp.mc_bronze.mc_icon.gotoAndStop(3);
    this._promotionIcon = new f.SeasonLeaguePromotionIconComponent(this.disp.mc_promotion, f.SeasonLeaguePromotionIconComponent.TYPE_SMALL, new g(60, 40));
  };
  SeasonLeagueMainDialogRanksItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this.setDownState(false);
    this.setMouseOverState(false);
  };
  SeasonLeagueMainDialogRanksItem.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this.disp.addEventListener(h.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.addEventListener(h.MOUSE_UP, this.bindFunction(this.onMouseUp));
  };
  SeasonLeagueMainDialogRanksItem.prototype.removeEventListener = function () {
    this.disp.removeEventListener(h.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.removeEventListener(h.MOUSE_UP, this.bindFunction(this.onMouseUp));
    e.prototype.removeEventListener.call(this);
  };
  SeasonLeagueMainDialogRanksItem.prototype.fillContentWithAny = function () {
    e.prototype.fillContentWithAny.call(this);
    _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_rank, this.rank >= 0 ? new s.LocalizedNumberVO(this.rank) : new r.TextVO("-")).autoFitToBounds = true;
    this.disp.mc_indicator.gotoAndStop(this.getPrefixFrame());
  };
  SeasonLeagueMainDialogRanksItem.prototype.fillContentWithData = function () {
    e.prototype.fillContentWithData.call(this);
    var t = this.getRawOwnerInfo();
    if (Array.isArray(t)) {
      var i = this.data[3];
      _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new r.TextVO(t[1])).autoFitToBounds = true;
      if (this.disp.txt_points) {
        _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points, this.getPointsTextVO()).autoFitToBounds = true;
      }
      this._promotionIcon.setVisibility(false);
      this.disp.mc_promotionTooltip.visible = false;
      this.fillMedalContent(this.disp.mc_gold, i.KLMO[0][1]);
      this.fillMedalContent(this.disp.mc_silver, i.KLMO[1][1]);
      this.fillMedalContent(this.disp.mc_bronze, i.KLMO[2][1]);
    } else {
      _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new r.TextVO(t.N)).autoFitToBounds = true;
      if (this.disp.txt_points) {
        _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points, this.getPointsTextVO()).autoFitToBounds = true;
      }
      this._promotionIcon.setVisibility(true);
      this._promotionIcon.updateWithNewVO(c.CastleModel.seasonLeagueData.xml.getPromotion(t.KLRID));
      this.disp.mc_promotionTooltip.visible = true;
      this.disp.mc_promotionTooltip.toolTipText = this._promotionIcon.vo.getNameTextId();
      this.fillMedalContent(this.disp.mc_gold, t.KLMO[0][1]);
      this.fillMedalContent(this.disp.mc_silver, t.KLMO[1][1]);
      this.fillMedalContent(this.disp.mc_bronze, t.KLMO[2][1]);
    }
  };
  SeasonLeagueMainDialogRanksItem.prototype.fillContentWithEmpty = function () {
    e.prototype.fillContentWithEmpty.call(this);
    _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new r.TextVO("???")).autoFitToBounds = true;
    if (this.disp.txt_points) {
      _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points, new r.TextVO(this._showPoints ? "???" : "")).autoFitToBounds = true;
    }
    this._promotionIcon.updateWithNewVO(null);
    this.disp.mc_promotionTooltip.toolTipText = null;
    this.disp.mc_promotionTooltip.visible = false;
    this.fillMedalContent(this.disp.mc_gold, 0);
    this.fillMedalContent(this.disp.mc_silver, 0);
    this.fillMedalContent(this.disp.mc_bronze, 0);
  };
  SeasonLeagueMainDialogRanksItem.prototype.setDownState = function (e) {
    this.disp.mc_downState.visible = e;
  };
  SeasonLeagueMainDialogRanksItem.prototype.setMouseOverState = function (e) {
    this.disp.mc_mouseOver.visible = e;
  };
  SeasonLeagueMainDialogRanksItem.prototype.fillMedalContent = function (e, t) {
    var i = t > 0;
    e.visible = t > 0;
    if (i) {
      _.CastleComponent.textFieldManager.registerTextField(e.txt_text, new s.LocalizedNumberVO(t)).autoFitToBounds = true;
    }
  };
  SeasonLeagueMainDialogRanksItem.prototype.getPoints = function () {
    return l.int(this.data ? this.data[1] : 0);
  };
  SeasonLeagueMainDialogRanksItem.prototype.getRawOwnerInfo = function () {
    if (this.data) {
      return this.data[2];
    } else {
      return null;
    }
  };
  SeasonLeagueMainDialogRanksItem.prototype.getPlayerId = function () {
    return l.int(this.data ? this.data[2].OID : -1);
  };
  SeasonLeagueMainDialogRanksItem.prototype.getPrefixFrame = function () {
    var e = this.getRawOwnerInfo();
    if (e && e.OID == c.CastleModel.userData.playerID) {
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
  SeasonLeagueMainDialogRanksItem.prototype.getPointsTextVO = function () {
    var e = this.getPoints();
    if (this._showPoints) {
      if (e >= 0) {
        return new s.LocalizedNumberVO(e);
      } else {
        return new r.TextVO("-");
      }
    } else {
      return new r.TextVO("");
    }
  };
  SeasonLeagueMainDialogRanksItem.prototype.isAllianceInfo = function () {
    var e = this.getRawOwnerInfo();
    return Array.isArray(e);
  };
  SeasonLeagueMainDialogRanksItem.prototype.onMouseDown = function (e) {
    this.setDownState(true);
    this.setMouseOverState(false);
  };
  SeasonLeagueMainDialogRanksItem.prototype.onMouseUp = function (e) {
    this.setDownState(false);
    if (this._isMouseOver) {
      this.setMouseOverState(true);
      if (this.isAllianceInfo()) {
        var t = this.getRawOwnerInfo();
        var i = l.int(t ? t[0] : -1);
        if (i >= 0) {
          _.CastleComponent.dialogHandler.registerDialogsWithTypeAndDefaultValues(E.CastleAllianceInfoDialog, new O.CastleAllianceInfoDialogProperties(i), u.CastleDialogConsts.DIALOG_TYPE_SINGLE);
        }
      } else {
        var n = this.getPlayerId();
        if (n >= 0) {
          _.CastleComponent.dialogHandler.registerDialogsWithTypeAndDefaultValues(m.CastlePlayerInfoDialog, new p.CastlePlayerInfoDialogProperties(n), u.CastleDialogConsts.DIALOG_TYPE_SINGLE);
        }
      }
    }
  };
  SeasonLeagueMainDialogRanksItem.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    this._isMouseOver = true;
    this.setMouseOverState(true);
    _.CastleComponent.layoutManager.customCursor.setCursorType(o.BasicCustomCursor.CURSOR_CLICK);
  };
  SeasonLeagueMainDialogRanksItem.prototype.onRollOut = function (t) {
    e.prototype.onRollOut.call(this, t);
    this._isMouseOver = false;
    this.setMouseOverState(false);
    this.setDownState(false);
    _.CastleComponent.layoutManager.customCursor.setCursorType(o.BasicCustomCursor.CURSOR_ARROW);
  };
  Object.defineProperty(SeasonLeagueMainDialogRanksItem.prototype, "showPoints", {
    get: function () {
      return this._showPoints;
    },
    set: function (e) {
      this._showPoints = e;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonLeagueMainDialogRanksItem;
}(d.AModernHighscoreComponentItem);
exports.SeasonLeagueMainDialogRanksItem = C;
var _ = require("./14.js");
var m = require("./94.js");
var f = require("./359.js");
var O = require("./149.js");
var E = require("./132.js");
a.classImplementsInterfaces(C, "ICollectableRendererList");