Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./23.js");
var c = require("./23.js");
var u = require("./13.js");
var d = require("./4.js");
var p = require("./40.js");
var h = require("./47.js");
var g = require("./626.js");
var C = function (e) {
  function FusionForgeHubDialogCatalystsList(t, i) {
    var n = this;
    n._items = [];
    n._forgeId = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t) || this)._forgeId = i;
    n.init();
    return n;
  }
  n.__extends(FusionForgeHubDialogCatalystsList, e);
  FusionForgeHubDialogCatalystsList.prototype.init = function () {
    _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_title, new r.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId(this.getTitleTextId()))).autoFitToBounds = true;
    this._scrollComponent = new m.ModernSliderScrollComponent(new h.SimpleScrollVO().initByParent(this.disp.mc_slider).addMouseWheelElements([this.disp.mc_scrollArea, this.disp.mc_container, this.disp.mc_slider]), new g.DynamicSizeScrollStrategyHorizontal(true));
  };
  FusionForgeHubDialogCatalystsList.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._scrollComponent.show();
    if (this._items != null) {
      for (var t = 0, i = this._items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onShow();
        }
      }
    }
  };
  FusionForgeHubDialogCatalystsList.prototype.onHide = function () {
    this._scrollComponent.hide();
    if (this._items != null) {
      for (var t = 0, i = this._items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onHide();
        }
      }
    }
    e.prototype.onHide.call(this);
  };
  FusionForgeHubDialogCatalystsList.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChanged));
  };
  FusionForgeHubDialogCatalystsList.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChanged));
    e.prototype.removeEventListener.call(this);
  };
  FusionForgeHubDialogCatalystsList.prototype.update = function () {
    if (this._items != null) {
      for (var e = 0, t = this._items; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.destroy();
        }
      }
    }
    this._items = [];
    var n = d.CastleModel.fusionForgeData.getForge(this._forgeId).getAvailableCatalysts();
    var a = 0;
    if (n != null) {
      for (var s = 0, r = n; s < r.length; s++) {
        var l = r[s];
        if (l !== undefined) {
          i = new f.FusionForgeHubDialogCatalystsListItem(l);
          this._items.push(i);
          this.itemsMc.addChild(i.disp);
          if (this.isShown) {
            i.onShow();
          }
          i.disp.x = a;
          i.disp.y = 0;
          a += i.disp.width + FusionForgeHubDialogCatalystsList.ITEM_DISTANCE_X;
        }
      }
    }
    var c = o.MathBase.max(this.itemsMc.width - FusionForgeHubDialogCatalystsList.ITEM_CONTAINER_WIDTH, 0);
    this._scrollComponent.init(0, c, FusionForgeHubDialogCatalystsList.ITEM_SCROLL_DELTA, FusionForgeHubDialogCatalystsList.ITEM_SCROLL_DELTA);
    this._scrollComponent.scrollToPercent(0);
    this.updateListScrollPosition(false);
    this._scrollComponent.setVisibility(c > 0);
  };
  FusionForgeHubDialogCatalystsList.prototype.updateListScrollPosition = function (e = true) {
    c.TweenMax.killTweensOf(this.itemsMc);
    var t = -this._scrollComponent.currentValue;
    if (e) {
      c.TweenMax.to(this.itemsMc, FusionForgeHubDialogCatalystsList.ITEM_SCROLL_DURATION, {
        x: t,
        ease: l.Power1.easeOut
      });
    } else {
      this.itemsMc.x = t;
    }
  };
  FusionForgeHubDialogCatalystsList.prototype.getTitleTextId = function () {
    switch (this._forgeId) {
      case s.FusionConst.DECORATION_FORGE_ID:
        return "dialog_fusionHub_catalystOverview_deco";
      default:
        return "";
    }
  };
  FusionForgeHubDialogCatalystsList.prototype.onScrollValueChanged = function () {
    this.updateListScrollPosition();
  };
  Object.defineProperty(FusionForgeHubDialogCatalystsList.prototype, "itemsMc", {
    get: function () {
      return this.disp.mc_container.mc_items;
    },
    enumerable: true,
    configurable: true
  });
  FusionForgeHubDialogCatalystsList.__initialize_static_members = function () {
    FusionForgeHubDialogCatalystsList.ITEM_DISTANCE_X = 20;
    FusionForgeHubDialogCatalystsList.ITEM_SCROLL_DELTA = 105 + FusionForgeHubDialogCatalystsList.ITEM_DISTANCE_X;
    FusionForgeHubDialogCatalystsList.ITEM_CONTAINER_WIDTH = 725;
    FusionForgeHubDialogCatalystsList.ITEM_SCROLL_DURATION = 0.2;
  };
  return FusionForgeHubDialogCatalystsList;
}(p.CastleItemRenderer);
exports.FusionForgeHubDialogCatalystsList = C;
var _ = require("./14.js");
var m = require("./82.js");
var f = require("./2636.js");
a.classImplementsInterfaces(C, "ICollectableRendererList");
C.__initialize_static_members();