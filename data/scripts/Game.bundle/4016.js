Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./157.js");
var s = require("./4.js");
var r = require("./14.js");
var l = require("./237.js");
var c = require("./8.js");
var u = require("./23.js");
var d = require("./23.js");
var p = require("./23.js");
var h = require("./188.js");
var g = function (e) {
  function CastleStormIslandsMainDialogTitlesItem(t, i, n) {
    var a = e.call(this, t, n) || this;
    a._titleVO = i;
    a._clickFeedbackBehaviour = new l.ClickFeedbackHoverBehaviour(a._headerMC);
    a._headerMC.mouseChildren = false;
    r.CastleComponent.textFieldManager.registerTextField(a._headerMC.txt_title, new o.LocalizedTextVO(a._titleVO.textID));
    var c = a._titleVO.topX;
    var u = a._titleVO.nextTitleID > -1 ? s.CastleModel.titleData.getTitleByTitleID(a._titleVO.nextTitleID).topX + 1 : c;
    if (u != c) {
      r.CastleComponent.textFieldManager.registerTextField(a._headerMC.txt_rank, new o.LocalizedTextVO("rankingRange_linebreak_multi", [u, c]));
    } else {
      r.CastleComponent.textFieldManager.registerTextField(a._headerMC.txt_rank, new o.LocalizedTextVO("rankingRange_linebreak_single", [c]));
    }
    a._headerMC.gotoAndStop(a.getFrame(u, c));
    a._headerMC.mc_collapsed.visible = true;
    a._headerMC.mc_collapsed_arrow.visible = true;
    a._headerMC.mc_expanded.visible = false;
    a._headerMC.mc_expanded_arrow.visible = false;
    a._headerMC.bg_inactive.visible = !s.CastleModel.userData.isInAlliance || s.CastleModel.allianceData.myAllianceVO && s.CastleModel.allianceData.myAllianceVO.currentIslandRank != 1;
    var d = r.CastleComponent.textFieldManager.registerTextField(a._contentMC.txt_description, a._titleVO.descriptionTextVO);
    d.height = d.textHeight;
    a._contentMC.mc_bg.height = d.textHeight;
    a._contentMC.mc_bg2.height = d.textHeight + 2;
    return a;
  }
  n.__extends(CastleStormIslandsMainDialogTitlesItem, e);
  CastleStormIslandsMainDialogTitlesItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._clickFeedbackBehaviour.addEventListener();
  };
  CastleStormIslandsMainDialogTitlesItem.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    this._clickFeedbackBehaviour.removeEventListener();
  };
  CastleStormIslandsMainDialogTitlesItem.prototype.onClick = function (e) {
    if (c.ButtonHelper.isButtonEnabled(e.target) && this.isEnabled) {
      switch (e.target) {
        case this._headerMC:
          this.expand(!this._isExpanded, true);
      }
    }
  };
  CastleStormIslandsMainDialogTitlesItem.prototype.expand = function (t, i, n = false) {
    e.prototype.expand.call(this, t, i, n);
    this._headerMC.mc_collapsed.visible = !this._isExpanded;
    this._headerMC.mc_collapsed_arrow.visible = !this._isExpanded;
    this._headerMC.mc_expanded.visible = this._isExpanded;
    this._headerMC.mc_expanded_arrow.visible = this._isExpanded;
  };
  CastleStormIslandsMainDialogTitlesItem.prototype.applyStateChange = function () {
    p.TweenMax.killTweensOf(this.contentMC);
    p.TweenMax.killTweensOf(this.contentMC.mask);
    if (this._isExpanded) {
      p.TweenMax.to(this.contentMC, this._properties.expandDuration, {
        autoAlpha: 1,
        ease: u.Linear.easeOut
      });
    } else {
      p.TweenMax.to(this.contentMC, this._properties.expandDuration, {
        autoAlpha: 0,
        ease: u.Linear.easeIn
      });
    }
    if (this._properties.isVertical) {
      p.TweenMax.to(this.contentMC.mask, this._properties.expandDuration, {
        height: this._isExpanded ? this.contentMC.mc_bg2.height : 0,
        ease: d.Power1.easeOut,
        onUpdate: this._changeUpdateCallback,
        onComplete: this._changeCompleteCallback
      });
    } else {
      p.TweenMax.to(this.contentMC.mask, this._properties.expandDuration, {
        width: this._isExpanded ? this.contentMC.width : 0,
        ease: d.Power1.easeOut,
        onUpdate: this._changeUpdateCallback,
        onComplete: this._changeCompleteCallback
      });
    }
  };
  CastleStormIslandsMainDialogTitlesItem.prototype.getFrame = function (e, t) {
    var i = s.CastleModel.titleData.getTitlesFromSystem(h.ClientConstTitle.ISLAND_TITLE).length;
    if (s.CastleModel.userData.currentIslandRank >= e && s.CastleModel.userData.currentIslandRank <= t && s.CastleModel.userData.aquaPoints > 0) {
      return 4;
    } else if (this._titleVO.orderInSystem >= i - 3) {
      return i - this._titleVO.orderInSystem;
    } else {
      return 5;
    }
  };
  return CastleStormIslandsMainDialogTitlesItem;
}(a.ACollapsibleItem);
exports.CastleStormIslandsMainDialogTitlesItem = g;