Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./157.js");
var r = require("./276.js");
var l = require("./8.js");
var c = createjs.Rectangle;
var u = function (e) {
  function AQuestCollapsibleItem(t, i, n) {
    var o = this;
    CONSTRUCTOR_HACK;
    (o = e.call(this, t, n) || this).questSelectCallBack = i;
    l.ButtonHelper.initBasicButton(o._headerMC, 1.01);
    o.clearContent();
    return o;
  }
  n.__extends(AQuestCollapsibleItem, e);
  AQuestCollapsibleItem.prototype.clearContent = function () {
    if (this._questItems != null) {
      for (var e = 0, t = this._questItems; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.destroy();
        }
      }
    }
    this._questItems = [];
    o.MovieClipHelper.clearMovieClip(this._contentMC);
    this._contentMC.mask.height = 0;
  };
  AQuestCollapsibleItem.prototype.addQuestItem = function (e, t = true) {
    this._contentMC.addChild(e.disp);
    this._questItems.push(e);
    if (t) {
      this._activeQuest = e;
    }
    this.contentMC.mask.height = this.applyLayout().height;
  };
  AQuestCollapsibleItem.prototype.applyLayout = function () {
    return AQuestCollapsibleItem.layoutStrategy.apply(this._questItems, new c());
  };
  AQuestCollapsibleItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    if (this._questItems != null) {
      for (var t = 0, i = this._questItems; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onShow();
        }
      }
    }
  };
  AQuestCollapsibleItem.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    if (this._questItems != null) {
      for (var t = 0, i = this._questItems; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onHide();
        }
      }
    }
  };
  AQuestCollapsibleItem.prototype.onClick = function (e) {
    if (l.ButtonHelper.isButtonEnabled(e.target) && this.isEnabled) {
      switch (e.target) {
        case this._headerMC:
          this.expand(!this._isExpanded, true);
      }
    }
  };
  AQuestCollapsibleItem.prototype.expand = function (t, i, n = false) {
    e.prototype.expand.call(this, t, i, n);
    this._headerMC.mc_arrow.gotoAndStop(1 + (this._isExpanded ? 1 : 0));
  };
  Object.defineProperty(AQuestCollapsibleItem.prototype, "questItems", {
    get: function () {
      return this._questItems;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AQuestCollapsibleItem.prototype, "activeQuest", {
    get: function () {
      return this._activeQuest;
    },
    enumerable: true,
    configurable: true
  });
  AQuestCollapsibleItem.__initialize_static_members = function () {
    AQuestCollapsibleItem.layoutStrategy = new r.SimpleLayoutStrategyVertical();
  };
  return AQuestCollapsibleItem;
}(s.ACollapsibleItem);
exports.AQuestCollapsibleItem = u;
a.classImplementsInterfaces(u, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");
u.__initialize_static_members();