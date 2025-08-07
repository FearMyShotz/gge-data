Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./57.js");
var u = require("./290.js");
var d = require("./40.js");
var p = require("./47.js");
var h = require("./59.js");
var g = require("./42.js");
var C = require("./8.js");
var _ = function (e) {
  function InfoCatalogTopicComponent(t) {
    var i = this;
    i._topics = [];
    i._maskHeight = 0;
    i._dispCreator = new u.DispCreatorComponent();
    i._currentSelectedIndex = 0;
    i._onTopicChanged = new c.Signal();
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this)._dispCreator.cacheDisp = false;
    i._dispCreator.init(t.mc_items.mc_transform);
    i._dispCreator.dispContainer.mouseChildren = true;
    return i;
  }
  n.__extends(InfoCatalogTopicComponent, e);
  InfoCatalogTopicComponent.prototype.init = function (e, t, i, n) {
    this._topics = e;
    this._topicAssetClipName = t;
    this._topicAssetName = i;
    this._maskHeight = n;
    this._scrollComponent = new O.SimpleScrollComponent(new p.SimpleScrollVO().initByParent(this.disp.mc_slider).addMouseWheelElements([this.disp]).addVisualElements([this.disp.mc_slider]), new h.DynamicSizeScrollStrategyVertical(true));
    this._dispCreator.reset();
    this._dispCreator.onLoadedSignal.add(this.bindFunction(this.onTopicsLoaded));
    this._dispCreator.switchCreationState(true);
    for (var a = 0; a < this._topics.length; ++a) {
      this._dispCreator.addClip(new o.GoodgameDisplayObjectClipExternal(t, m.IsoHelper.view.getAssetFileURL(i)));
    }
    this._dispCreator.switchCreationState(false);
    this.updateScrollPosition();
  };
  InfoCatalogTopicComponent.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._scrollComponent.show();
    this.selectIndex(this._currentSelectedIndex);
  };
  InfoCatalogTopicComponent.prototype.onHide = function () {
    this._scrollComponent.hide();
    e.prototype.onHide.call(this);
  };
  InfoCatalogTopicComponent.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  InfoCatalogTopicComponent.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    e.prototype.removeEventListener.call(this);
  };
  InfoCatalogTopicComponent.prototype.selectIndex = function (e, t = true) {
    this._currentSelectedIndex = l.int(a.MathBase.clamp(e, 0, this._topics.length - 1));
    for (var i = 0; i < this._topics.length; ++i) {
      var n = this._dispCreator.getClipMc(i);
      n.mc_selected.visible = this._currentSelectedIndex == i;
      n.mc_default.visible = this._currentSelectedIndex != i;
    }
    if (t) {
      this.onTopicChanged.dispatch();
    }
  };
  InfoCatalogTopicComponent.prototype.selectByType = function (e) {
    var t = l.int(this.getIndexByType(e));
    if (t >= 0) {
      this.selectIndex(t);
    }
  };
  InfoCatalogTopicComponent.prototype.updateScrollPosition = function () {
    this.disp.mc_items.mc_transform.y = -this._scrollComponent.currentValue;
  };
  InfoCatalogTopicComponent.prototype.scrollToTopic = function (e) {
    var t = l.int(this.getIndexByType(e));
    if (t >= 0) {
      this._scrollComponent.scrollToValue((this._dispCreator.getClipMc(0).height + InfoCatalogTopicComponent.ITEM_DISTANCE_Y) * t);
    }
  };
  InfoCatalogTopicComponent.prototype.getSelectedTopic = function () {
    return this._topics[this._currentSelectedIndex];
  };
  InfoCatalogTopicComponent.prototype.getIndexByType = function (e) {
    for (var t = 0; t < this._topics.length; ++t) {
      if (e == this._topics[t].topicType) {
        return t;
      }
    }
    return -1;
  };
  InfoCatalogTopicComponent.prototype.onTopicsLoaded = function () {
    this._dispCreator.onLoadedSignal.remove(this.bindFunction(this.onTopicsLoaded));
    var e = 0;
    var t = 0;
    for (var i = 0; i < this.topics.length; ++i) {
      var n = this._topics[i];
      var o = this._dispCreator.getClipMc(i);
      C.ButtonHelper.initBasicButton(o, 1);
      o.mouseChildren = false;
      f.CastleComponent.textFieldManager.registerTextField(o.mc_default.txt_text, new r.LocalizedTextVO(n.textId, n.textReplacements)).verticalAlign = g.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
      f.CastleComponent.textFieldManager.registerTextField(o.mc_selected.txt_text, new r.LocalizedTextVO(n.textId, n.textReplacements)).verticalAlign = g.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
      o.mc_selected.visible = false;
      o.mc_default.visible = false;
      o.y = e;
      if (t <= 0) {
        t = o.height + InfoCatalogTopicComponent.ITEM_DISTANCE_Y;
      }
      e += t;
    }
    this.selectIndex(0);
    var a = l.int(Math.max(0, this._dispCreator.dispContainer.height - this._maskHeight));
    this._scrollComponent.init(0, a, t, t);
    this._scrollComponent.setVisibility(a > 0);
    this.updateScrollPosition();
  };
  InfoCatalogTopicComponent.prototype.onClick = function (t) {
    if (C.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      for (var i = 0; i < this._topics.length; ++i) {
        if (this._dispCreator.getClipMc(i) == t.target) {
          this.selectIndex(i);
        }
      }
    }
  };
  InfoCatalogTopicComponent.prototype.onScroll = function () {
    this.updateScrollPosition();
  };
  Object.defineProperty(InfoCatalogTopicComponent.prototype, "onTopicChanged", {
    get: function () {
      return this._onTopicChanged;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfoCatalogTopicComponent.prototype, "topicAssetClipName", {
    get: function () {
      return this._topicAssetClipName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfoCatalogTopicComponent.prototype, "topicAssetName", {
    get: function () {
      return this._topicAssetName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfoCatalogTopicComponent.prototype, "topics", {
    get: function () {
      return this._topics;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfoCatalogTopicComponent.prototype, "currentSelectedIndex", {
    get: function () {
      return this._currentSelectedIndex;
    },
    enumerable: true,
    configurable: true
  });
  InfoCatalogTopicComponent.ITEM_DISTANCE_Y = 8;
  return InfoCatalogTopicComponent;
}(d.CastleItemRenderer);
exports.InfoCatalogTopicComponent = _;
var m = require("./46.js");
var f = require("./14.js");
var O = require("./95.js");
s.classImplementsInterfaces(_, "ICollectableRendererList");