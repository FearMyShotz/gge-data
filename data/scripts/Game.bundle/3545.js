Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./57.js");
var l = require("./16.js");
var c = require("./13.js");
var u = require("./4.js");
var d = require("./40.js");
var p = require("./8.js");
var h = createjs.MouseEvent;
var g = createjs.Point;
var C = function (e) {
  function SeasonLeagueMainDialogPromotionRanksItem(t) {
    var i = this;
    i._isMouseOver = false;
    i._onClickedSignal = new r.Signal(Number);
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).init();
    return i;
  }
  n.__extends(SeasonLeagueMainDialogPromotionRanksItem, e);
  SeasonLeagueMainDialogPromotionRanksItem.prototype.init = function () {
    p.ButtonHelper.initBasicButton(this.disp, 1);
    this._promotionIcon = new m.SeasonLeaguePromotionIconComponent(this.disp.mc_icon, m.SeasonLeaguePromotionIconComponent.TYPE_BIG, new g(130, 130));
  };
  SeasonLeagueMainDialogPromotionRanksItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this.setDownState(false);
    this.setMouseOverState(false);
    this.setSelection(false);
  };
  SeasonLeagueMainDialogPromotionRanksItem.prototype.onHide = function () {
    e.prototype.onHide.call(this);
  };
  SeasonLeagueMainDialogPromotionRanksItem.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this.disp.addEventListener(h.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.addEventListener(h.MOUSE_UP, this.bindFunction(this.onMouseUp));
  };
  SeasonLeagueMainDialogPromotionRanksItem.prototype.removeEventListener = function () {
    this.disp.removeEventListener(h.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.removeEventListener(h.MOUSE_UP, this.bindFunction(this.onMouseUp));
    e.prototype.removeEventListener.call(this);
  };
  SeasonLeagueMainDialogPromotionRanksItem.prototype.updateWithNewData = function (e) {
    this._promotionVO = e;
    this._promotionIcon.updateWithNewVO(e);
    this.update();
  };
  SeasonLeagueMainDialogPromotionRanksItem.prototype.update = function () {
    var e = u.CastleModel.seasonLeagueData.getCurrentPlayerPromotion().id;
    var t = s.int(this.promotionVO.id);
    this.disp.mc_prev.visible = t < e;
    this.disp.mc_current.visible = t == e;
    this.disp.mc_next.visible = t > e;
    if (this._promotionIcon.vo.id != this.promotionVO.id) {
      this._promotionIcon.updateWithNewVO(this.promotionVO);
    }
    var i = _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new a.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId(this.promotionVO.getNameTextId())));
    i.color = t <= e ? l.ClientConstColor.MODERN_DEFAULT : l.ClientConstColor.MODERN_DEFAULT_BRIGHT;
    i.autoFitToBounds = true;
    this.disp.mc_nextOverlay.visible = t > e;
    var n = "";
    if (t < e) {
      n = "dialog_seasonLeague_promotionRanks_previousRank_text";
    } else if (t == e) {
      n = "dialog_seasonLeague_promotionRanks_currentRank_text";
    } else if (t > e + 1) {
      n = "dialog_seasonLeague_promotionRanks_futureRank_text";
    }
    this.disp.toolTipText = n;
  };
  SeasonLeagueMainDialogPromotionRanksItem.prototype.setSelection = function (e) {
    this.disp.mc_selected.visible = e;
  };
  SeasonLeagueMainDialogPromotionRanksItem.prototype.setDownState = function (e) {
    this.disp.mc_downState.visible = e;
  };
  SeasonLeagueMainDialogPromotionRanksItem.prototype.setMouseOverState = function (e) {
    this.disp.mc_mouseOver.visible = e;
  };
  SeasonLeagueMainDialogPromotionRanksItem.prototype.canShowTooltip = function () {
    var e = u.CastleModel.seasonLeagueData.getCurrentPlayerPromotion();
    return this.promotionVO.id == e.id + 1;
  };
  SeasonLeagueMainDialogPromotionRanksItem.prototype.onMouseDown = function (e) {
    this.setDownState(true);
    this.setMouseOverState(false);
  };
  SeasonLeagueMainDialogPromotionRanksItem.prototype.onMouseUp = function (e) {
    this.setDownState(false);
    if (this._isMouseOver) {
      this.setMouseOverState(true);
    }
  };
  SeasonLeagueMainDialogPromotionRanksItem.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    this._isMouseOver = true;
    this.setMouseOverState(true);
  };
  SeasonLeagueMainDialogPromotionRanksItem.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    this._isMouseOver = false;
    this.setMouseOverState(false);
    this.setDownState(false);
  };
  SeasonLeagueMainDialogPromotionRanksItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    this.onClickedSignal.dispatch(this.promotionVO.id);
  };
  Object.defineProperty(SeasonLeagueMainDialogPromotionRanksItem.prototype, "promotionVO", {
    get: function () {
      return this._promotionVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueMainDialogPromotionRanksItem.prototype, "onClickedSignal", {
    get: function () {
      return this._onClickedSignal;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonLeagueMainDialogPromotionRanksItem;
}(d.CastleItemRenderer);
exports.SeasonLeagueMainDialogPromotionRanksItem = C;
var _ = require("./14.js");
var m = require("./359.js");
o.classImplementsInterfaces(C, "ICollectableRendererList");