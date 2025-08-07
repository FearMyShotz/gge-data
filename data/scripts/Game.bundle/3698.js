Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./4.js");
var h = require("./43.js");
var g = require("./93.js");
var C = function (e) {
  function CastleEilandPlayerRankingItem(t) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this)._disp.gotoAndStop(CastleEilandPlayerRankingItem.FRAME_REGULAR_TEXT);
    i._disp.bg.gotoAndStop(1);
    i._disp.txt_alliancePoints.mouseEnabled = false;
    i._disp.txt_rank.mouseEnabled = false;
    i._disp.txt_name.mouseEnabled = false;
    i._disp.txt_level.mouseEnabled = false;
    i._disp.mc_allianceRank.mouseChildren = false;
    return i;
  }
  n.__extends(CastleEilandPlayerRankingItem, e);
  CastleEilandPlayerRankingItem.prototype.customFillItem = function () {
    this.setFontWeight();
    this._disp.mc_kingIndicator.visible = false;
    this.setTexts();
    this.setAllianceRankIcon(this.itemVO.allianceRank);
    this._disp.mc_kingIndicator.visible = this.isKing();
  };
  CastleEilandPlayerRankingItem.prototype.isKing = function () {
    var e = p.CastleModel.eilandData.kingTitleVO;
    return this.itemVO.playerName == e.currentAssignee;
  };
  CastleEilandPlayerRankingItem.prototype.setTexts = function () {
    if (this.itemVO.hasUnlockedEiland) {
      this._disp.bg.gotoAndStop(1);
      this.textFieldManager.registerTextField(this._disp.txt_alliancePoints, new u.LocalizedNumberVO(this.itemVO.aquaPoints));
      this.textFieldManager.registerTextField(this._disp.txt_rank, new u.LocalizedNumberVO(this.itemVO.rank));
    } else {
      this._disp.bg.gotoAndStop(CastleEilandPlayerRankingItem.BG_FRAME_GREY);
      this.textFieldManager.registerTextField(this._disp.txt_alliancePoints, new d.TextVO("-"));
      this.textFieldManager.registerTextField(this._disp.txt_rank, new d.TextVO("-"));
    }
    this.textFieldManager.registerTextField(this._disp.txt_name, new d.TextVO(this.itemVO.playerName));
    this.textFieldManager.registerTextField(this._disp.txt_level, new u.LocalizedNumberVO(this.itemVO.playerLevel));
  };
  CastleEilandPlayerRankingItem.prototype.setFontWeight = function () {
    if (this.itemVO.isSearchResult) {
      this._disp.gotoAndStop(CastleEilandPlayerRankingItem.FRAME_BOLD_TEXT);
    } else {
      this._disp.gotoAndStop(CastleEilandPlayerRankingItem.FRAME_REGULAR_TEXT);
    }
  };
  CastleEilandPlayerRankingItem.prototype.onMouseClick = function (t) {
    e.prototype.onMouseClick.call(this, t);
    m.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(O.CastlePlayerInfoDialog, new g.CastlePlayerInfoDialogProperties(this.itemVO.playerID), h.CastleDialogConsts.DIALOG_TYPE_SINGLE);
  };
  CastleEilandPlayerRankingItem.prototype.setAllianceRankIcon = function (e) {
    s.MovieClipHelper.clearMovieClip(this._disp.mc_allianceRank.mc_rankPlaceholder);
    var t = new Library.CastleInterfaceElements.Icon_AllianceRank();
    t.gotoAndStop(e + 1);
    this._disp.mc_allianceRank.mc_rankPlaceholder.addChild(t);
    this._disp.mc_allianceRank.toolTipText = c.Localize.text("dialog_alliance_rank" + _.CastleAllianceData.getTextIDForRank(e));
  };
  Object.defineProperty(CastleEilandPlayerRankingItem.prototype, "textFieldManager", {
    get: function () {
      return a.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandPlayerRankingItem.prototype, "layoutManager", {
    get: function () {
      return f.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandPlayerRankingItem.prototype, "itemVO", {
    get: function () {
      return this._scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandPlayerRankingItem.prototype, "highlight", {
    set: function (e) {
      this.itemVO.isSearchResult = e;
      this.customFillItem();
    },
    enumerable: true,
    configurable: true
  });
  CastleEilandPlayerRankingItem.prototype.onRollOver = function (t) {
    e.prototype.onRollOver.call(this, t);
    this.layoutManager.nativeCursor.setCursorType(o.BasicCustomCursor.CURSOR_CLICK);
  };
  CastleEilandPlayerRankingItem.prototype.onRollOut = function (t) {
    e.prototype.onRollOut.call(this, t);
    this.layoutManager.nativeCursor.setCursorType(o.BasicCustomCursor.CURSOR_ARROW);
  };
  CastleEilandPlayerRankingItem.__initialize_static_members = function () {
    CastleEilandPlayerRankingItem.BG_FRAME_GREY = 4;
    CastleEilandPlayerRankingItem.FRAME_REGULAR_TEXT = 1;
    CastleEilandPlayerRankingItem.FRAME_BOLD_TEXT = 2;
  };
  return CastleEilandPlayerRankingItem;
}(r.ScrollItem);
exports.CastleEilandPlayerRankingItem = C;
var _ = require("./317.js");
var m = require("./9.js");
var f = require("./17.js");
var O = require("./94.js");
l.classImplementsInterfaces(C, "MovieClip");
C.__initialize_static_members();