Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./4.js");
var l = require("./47.js");
var c = require("./59.js");
var u = require("./8.js");
var d = require("./1311.js");
var p = function (e) {
  function AutoSellDialogGems(t) {
    var i = this;
    i._items = [];
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).init();
    return i;
  }
  n.__extends(AutoSellDialogGems, e);
  AutoSellDialogGems.prototype.init = function () {
    u.ButtonHelper.initButton(this.getLevelButton(0), -1, C.ClickFeedbackButtonBackground);
    for (var e = 0; e < AutoSellDialogGems.NUMBER_OF_LEVEL_BUTTONS; ++e) {
      var t = e + 1;
      var i = this.getLevelButton(t);
      u.ButtonHelper.initButton(i, -1, C.ClickFeedbackButtonBackground);
      this.textFieldManager.registerTextField(i.txt_text, new a.LocalizedNumberVO(t)).autoFitToBounds = true;
    }
    this._items = [];
    for (var n = 0; n < AutoSellDialogGems.NUMBER_OF_ITEMS; ++n) {
      this._items.push(new g.AutoSellDialogGemsItem(this.subLayerDisp.mc_list.getChildByName("mc_item" + n)));
    }
    this._scrollComponent = new h.ModernSliderScrollComponent(new l.SimpleScrollVO().initByParent(this.subLayerDisp.mc_list.mc_slider).addMouseWheelElements([this.subLayerDisp]), new c.DynamicSizeScrollStrategyVertical(true));
    this._scrollComponent.init(0, Math.max(0, r.CastleModel.gemData.numberOfGemColors - AutoSellDialogGems.NUMBER_OF_ITEMS));
    if (this._items != null) {
      for (var o = 0, s = this._items; o < s.length; o++) {
        var d = s[o];
        if (d !== undefined) {
          this._scrollComponent.addDisturbingElement(d.disp.mc_slider);
        }
      }
    }
  };
  AutoSellDialogGems.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    this._scrollComponent.show();
    if (this._items != null) {
      for (var i = 0, n = this._items; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          o.onShow();
        }
      }
    }
    this.updateItems();
  };
  AutoSellDialogGems.prototype.hide = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    this._scrollComponent.hide();
    if (this._items != null) {
      for (var t = 0, i = this._items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onHide();
        }
      }
    }
    e.prototype.hide.call(this);
  };
  AutoSellDialogGems.prototype.updateItems = function () {
    for (var e = 0; e < AutoSellDialogGems.NUMBER_OF_ITEMS; ++e) {
      var t = this._items[e];
      var i = s.int(this._scrollComponent.currentValue + e + 1);
      var n = r.CastleModel.gemData.gemColors.get(i);
      t.updateWithNewData(n);
    }
  };
  AutoSellDialogGems.prototype.getLevelButton = function (e) {
    return this.subLayerDisp.getChildByName("btn_level" + e);
  };
  AutoSellDialogGems.prototype.onClick = function (t) {
    if (u.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      for (var i = 0; i <= AutoSellDialogGems.NUMBER_OF_LEVEL_BUTTONS; ++i) {
        if (t.target == this.getLevelButton(i)) {
          this.onLevelButtonClicked(i);
        }
      }
    }
  };
  AutoSellDialogGems.prototype.onLevelButtonClicked = function (e) {
    var t = this;
    var i = this.autoSellVO.gems;
    Array.from(i.actives.keys()).forEach(function (i) {
      t.autoSellVO.gems.actives.set(i, e);
    });
    if (this._items != null) {
      for (var n = 0, o = this._items; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          a.update();
        }
      }
    }
  };
  AutoSellDialogGems.prototype.onScroll = function () {
    this.updateItems();
  };
  Object.defineProperty(AutoSellDialogGems.prototype, "autoSellVO", {
    get: function () {
      return Object.getOwnPropertyDescriptor(d.AAutoSellDialogSublayer.prototype, "autoSellVO").get.call(this);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.AAutoSellDialogSublayer.prototype, "autoSellVO").set.call(this, e);
      if (this._items != null) {
        for (var t = 0, i = this._items; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            n.autoSellVO = e;
          }
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  AutoSellDialogGems.NUMBER_OF_LEVEL_BUTTONS = 13;
  AutoSellDialogGems.NUMBER_OF_ITEMS = 5;
  return AutoSellDialogGems;
}(d.AAutoSellDialogSublayer);
exports.AutoSellDialogGems = p;
o.classImplementsInterfaces(p, "ICollectableRendererList", "ISublayer");
var h = require("./82.js");
var g = require("./2329.js");
var C = require("./121.js");