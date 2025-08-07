Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./23.js");
var u = require("./23.js");
var d = require("./13.js");
var p = require("./277.js");
var h = require("./14.js");
var g = require("./47.js");
var C = require("./59.js");
var _ = require("./42.js");
var m = require("./8.js");
var f = require("./41.js");
var O = require("./413.js");
var E = createjs.Rectangle;
var y = function (e) {
  function QuestMapComponent(t) {
    var i = this;
    i._startY = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this)._disp = t;
    i._startY = t.mc_mask.y;
    i._itemContainer = t.mc_ItemContainer;
    f.CastleMovieClipHelper.applyMaskFromMovieClip(i._itemContainer, t.mc_mask);
    m.ButtonHelper.initButton(i._disp.mc_slider.btn_minus, 1, I.ClickFeedbackButton);
    m.ButtonHelper.initButton(i._disp.mc_slider.btn_slider, 1, O.ClickFeedBackSliderButton);
    m.ButtonHelper.initButton(i._disp.mc_slider.btn_plus, 1, I.ClickFeedbackButton);
    i._sliderButton = i._disp.mc_slider.btn_slider.basicButton;
    var n = new C.DynamicSizeScrollStrategyVertical(true);
    i.layoutStrategy = new p.SimpleLayoutStrategyVertical();
    i.scrollComponent = new b.SimpleScrollComponent(new g.SimpleScrollVO().initByParent(i._disp.mc_slider).addMouseWheelElements([i._disp]), n);
    i.scrollComponent.strategy.visibleValue = i._itemContainer.mask.height;
    i.mapTilePool = [];
    h.CastleComponent.textFieldManager.registerTextField(i._disp.txt_title, new r.TextVO(d.TextHelper.toUpperCaseLocaSafe(s.Localize.text("dialog_questbook_taskInfo")))).verticalAlign = _.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    i.hide();
    return i;
  }
  n.__extends(QuestMapComponent, e);
  QuestMapComponent.prototype.show = function (e) {
    var t;
    var i = 0;
    var n = 0;
    o.MovieClipHelper.clearMovieClip(this._itemContainer);
    this.mapTiles = [];
    while (n < e.length) {
      if (this.mapTilePool.length <= i) {
        this.mapTilePool.push(new D.QuestMapTile());
      }
      t = this.mapTilePool[i];
      this._itemContainer.addChild(t.disp);
      this.mapTiles.push(t);
      t.show(e, n);
      i++;
      n = l.int(i * QuestMapComponent.QUESTS_PER_TILE);
    }
    this.updateSlider();
    this.scrollComponent.show();
    this.scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChange));
    this._disp.visible = true;
  };
  QuestMapComponent.prototype.onScrollValueChange = function () {
    u.TweenMax.killTweensOf(this._itemContainer);
    u.TweenMax.to(this._itemContainer, QuestMapComponent.SCOLL_DURATION, {
      y: this._startY - this.scrollComponent.currentValue,
      ease: c.Power1.easeOut
    });
  };
  QuestMapComponent.prototype.hide = function () {
    if (this.mapTilePool != null) {
      for (var e = 0, t = this.mapTilePool; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.hide();
        }
      }
    }
    this.scrollComponent.hide();
    this.scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChange));
    o.MovieClipHelper.clearMovieClip(this._itemContainer);
    this.mapTiles = [];
    this._disp.visible = false;
  };
  QuestMapComponent.prototype.updateSlider = function (e = false) {
    var t;
    var i;
    var n;
    i = this.applyLayout().height;
    t = l.int(Math.max(0, i - this._itemContainer.mask.height));
    n = this._itemContainer.mask.height / i;
    this._sliderButton.setSize(this.scrollComponent.scrollVO.sliderLine.height * n);
    var o = l.int(e ? 0 : this.scrollComponent.currentValue);
    this.scrollComponent.init(0, t, QuestMapComponent.SCROLL_STEP_PIXELS, QuestMapComponent.SCROLL_STEP_PIXELS);
    this.scrollComponent.scrollToValue(Math.min(o, t));
    this._disp.mc_slider.visible = t > 0;
    this.scrollComponent.setVisibility(t > 0);
  };
  QuestMapComponent.prototype.scrollToTop = function () {
    this.updateSlider(true);
    this._itemContainer.y = this._startY;
  };
  QuestMapComponent.prototype.applyLayout = function () {
    return this.layoutStrategy.apply(this.mapTiles, new E());
  };
  QuestMapComponent.__initialize_static_members = function () {
    QuestMapComponent.QUESTS_PER_TILE = 4;
    QuestMapComponent.SCROLL_STEP_PIXELS = 109;
    QuestMapComponent.SCOLL_DURATION = 0.2;
  };
  return QuestMapComponent;
}(h.CastleComponent);
exports.QuestMapComponent = y;
var b = require("./95.js");
var D = require("./3353.js");
var I = require("./36.js");
a.classImplementsInterfaces(y, "ICollectableRendererList");
y.__initialize_static_members();