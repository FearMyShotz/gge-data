Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./23.js");
var u = require("./23.js");
var d = require("./16.js");
var p = require("./429.js");
var h = require("./511.js");
var g = require("./1253.js");
var C = require("./41.js");
var _ = require("./277.js");
var m = require("./14.js");
var f = require("./47.js");
var O = require("./414.js");
var E = require("./590.js");
var y = createjs.Rectangle;
var b = createjs.ColorFilter;
var D = function (e) {
  function LordEffectDialogComponent(t) {
    var i = e.call(this) || this;
    i._disp = t;
    i._pagination = new p.Pagination(i, LordEffectDialogComponent.MAX_PAGES, false, true);
    i._paginationDots = new g.PaginationDots(i, i._pagination, i._disp.categorySelection.mc_dotContainer.mc_dot);
    i._pagination.addControl(i._paginationDots);
    i._pagination.addControl(new h.PaginationArrows(i, i._pagination));
    i._pagination.addControl(new I.PaginationMouseWheel(i._disp.categorySelection, i._pagination));
    var n = new O.SimpleScrollStrategyVertical();
    i.scrollComponent = new T.SimpleScrollComponent(new f.SimpleScrollVO().initByParent(i._disp.effectList.mc_slider).addMouseWheelElements([i._disp.effectList]), n);
    C.CastleMovieClipHelper.applyMaskFromMovieClip(i._disp.effectList.mc_effectContent.contentHolder, i._disp.effectList.mc_effectContent.mc_mask);
    i.lordEffectItemCreator = new v.DialogLordEffectItemCreator();
    i.lordEffectItemCreator.filterStrategy = S.LordEffectHelper.STRATEGY_FULL_PASSIVE;
    i.verticalLayout = new _.SimpleLayoutStrategyVertical();
    i.contentHolderMC = i._disp.effectList.mc_effectContent.contentHolder;
    i.seperatorLines = [];
    i.itxt_fought = m.CastleComponent.textFieldManager.registerTextField(i._disp.effectList.mc_lordStats.txt_battlesFought, new l.LocalizedTextVO(o.GenericTextIds.VALUE_SIMPLE_COMP, ["dialog_equipment_battlesFought", 0]));
    i.itxt_won = m.CastleComponent.textFieldManager.registerTextField(i._disp.effectList.mc_lordStats.txt_battlesWon, new l.LocalizedTextVO(o.GenericTextIds.VALUE_SIMPLE_COMP, ["dialog_equipment_battlesWon", 0]));
    i.itxt_lost = m.CastleComponent.textFieldManager.registerTextField(i._disp.effectList.mc_lordStats.txt_battlesLost, new l.LocalizedTextVO(o.GenericTextIds.VALUE_SIMPLE_COMP, ["dialog_equipment_battlesLost", 0]));
    i.itxt_category = m.CastleComponent.textFieldManager.registerTextField(i._disp.categorySelection.txt_category, new l.LocalizedTextVO(""));
    i.itxt_category.autoFitToBounds = true;
    i._disp.categorySelection.mc_categoryBackground.mouseChildren = false;
    return i;
  }
  n.__extends(LordEffectDialogComponent, e);
  LordEffectDialogComponent.prototype.onClick = function (e) {
    this._pagination.handleClick(e);
  };
  LordEffectDialogComponent.prototype.show = function () {
    this._disp.effectList.mc_effectContent.mc_mask.visible = true;
    this._disp.effectList.mc_effectContent.mc_mask.useFilters([new b(0, 0, 0, 0, 0, 0, 0, 0)]);
    this._pagination.enable();
    this.scrollComponent.show();
    this.scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChange));
  };
  LordEffectDialogComponent.prototype.hide = function () {
    this._pagination.disable();
    this.scrollComponent.hide();
    this.scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChange));
  };
  LordEffectDialogComponent.prototype.onScrollValueChange = function () {
    u.TweenMax.killTweensOf(this.contentHolderMC);
    u.TweenMax.to(this.contentHolderMC, LordEffectDialogComponent.SCROLL_DURATION, {
      y: 0 - this.scrollComponent.currentValue,
      ease: c.Power1.easeOut
    });
  };
  LordEffectDialogComponent.prototype.setActiveLord = function (e) {
    this._lord = e;
    this.update();
  };
  LordEffectDialogComponent.prototype.update = function () {
    this.updatePages(this._pagination.currentPageIndex, this._pagination.currentPageIndex);
  };
  LordEffectDialogComponent.prototype.createToolTips = function () {
    var e = [];
    for (var t = 1; t <= LordEffectDialogComponent.MAX_PAGES; t++) {
      var i = this._pagination.currentPage == t ? "effect_category_selected_tt" : "effect_category_choose_tt";
      e.push(r.Localize.text(i, [this.getCategoryTextID(t)]));
    }
    return e;
  };
  LordEffectDialogComponent.prototype.updateStats = function () {
    this.itxt_fought.textContentVO.textReplacements = [r.Localize.text("dialog_equipment_battlesFought"), this._lord.wins + this._lord.defeats];
    this.itxt_won.textContentVO.textReplacements = [r.Localize.text("dialog_equipment_battlesWon"), this._lord.wins];
    this.itxt_lost.textContentVO.textReplacements = [r.Localize.text("dialog_equipment_battlesLost"), this._lord.defeats];
  };
  LordEffectDialogComponent.prototype.updateEffects = function () {
    a.MovieClipHelper.clearMovieClip(this.contentHolderMC);
    var e = [];
    var t = S.LordEffectHelper.createEffectGroups(this._lord.getUniqueBoni(true), this.lordEffectItemCreator, this._pagination.currentPage);
    var i = 0;
    if (t.length == 0) {
      var n = new E.LordEffectItem(this.lordEffectItemCreator.getTotalEffectMC(), null, v.DialogLordEffectItemCreator.DEFAULT_FONT_COLOR);
      n.applyText(r.Localize.text("effect_category_empty"));
      this.contentHolderMC.addChild(n.disp);
      e.push(n);
    } else {
      for (var o = 0; o < t.length; o++) {
        var s = t[o];
        if (o > 0) {
          if (this.seperatorLines.length <= i) {
            this.seperatorLines.push(this.lordEffectItemCreator.createSeperatorLine());
          }
          this.contentHolderMC.addChild(this.seperatorLines[i].disp);
          e.push(this.seperatorLines[i]);
          i++;
        }
        this.contentHolderMC.addChild(s.disp);
        e.push(s);
      }
    }
    var l = this.verticalLayout.apply(e, new y()).height;
    var c = Math.max(0, l - this.contentHolderMC.mask.height);
    this.scrollComponent.init(0, c, LordEffectDialogComponent.SCROLL_STEP_PIXELS, LordEffectDialogComponent.SCROLL_STEP_PIXELS);
    this.scrollComponent.scrollToValue(0);
    this._disp.effectList.mc_slider.visible = c > 0;
    this.scrollComponent.setVisibility(c > 0);
  };
  LordEffectDialogComponent.prototype.updatePages = function (e, t) {
    if (t == LordEffectDialogComponent.MAX_PAGES - 1) {
      this.itxt_category.color = 15724527;
      this._disp.effectList.mc_effectContent.visible = false;
      this._disp.effectList.mc_lordStats.visible = true;
      this._disp.effectList.mc_slider.visible = false;
      this.updateStats();
    } else {
      this.itxt_category.color = d.ClientConstColor.FONT_DEFAULT_COLOR;
      this._disp.effectList.mc_effectContent.visible = true;
      this._disp.effectList.mc_lordStats.visible = false;
      this._disp.effectList.mc_slider.visible = true;
      this.updateEffects();
    }
    this._paginationDots.setToolTips(this.createToolTips());
    this.itxt_category.textContentVO.textId = this.getCategoryTextID(t + 1);
    this._disp.categorySelection.mc_categoryBackground.gotoAndStop(this._pagination.currentPage);
  };
  LordEffectDialogComponent.prototype.getCategoryTextID = function (e) {
    if (e == LordEffectDialogComponent.MAX_PAGES) {
      return "effect_category_stats_" + (this._lord.isBaron ? "castellan" : "general");
    } else {
      return "effect_category_" + e;
    }
  };
  LordEffectDialogComponent.prototype.addDot = function (e) {
    this._disp.categorySelection.mc_dotContainer.addChild(e);
  };
  LordEffectDialogComponent.prototype.highlightDot = function (e, t) {
    e.gotoAndStop(t ? 2 : 1);
  };
  LordEffectDialogComponent.prototype.changeArrow = function (e, t) {
    return false;
  };
  LordEffectDialogComponent.prototype.getLeftArrow = function () {
    return this._disp.categorySelection.btn_left;
  };
  LordEffectDialogComponent.prototype.getRightArrow = function () {
    return this._disp.categorySelection.btn_right;
  };
  LordEffectDialogComponent.MAX_PAGES = 9;
  LordEffectDialogComponent.SCROLL_STEP_PIXELS = 20;
  LordEffectDialogComponent.SCROLL_DURATION = 0.2;
  return LordEffectDialogComponent;
}(m.CastleComponent);
exports.LordEffectDialogComponent = D;
var I = require("./715.js");
var T = require("./95.js");
var v = require("./2196.js");
var S = require("./133.js");
s.classImplementsInterfaces(D, "ICollectableRendererList", "IPaginationContainer", "IPaginationDotsContainer", "IPaginationArrowsContainer");