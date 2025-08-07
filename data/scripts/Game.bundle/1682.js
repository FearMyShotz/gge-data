Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./23.js");
var p = require("./23.js");
var h = require("./23.js");
var g = require("./55.js");
var C = require("./47.js");
var _ = require("./414.js");
var m = require("./42.js");
var f = require("./8.js");
var O = require("./41.js");
var E = require("./11.js");
var y = createjs.Event;
var b = createjs.Point;
var D = function (e) {
  function MaterialBagOpenedDialog() {
    var t = this;
    t.iconAnimationStarted = false;
    t.iconAnimationFinished = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this, MaterialBagOpenedDialog.NAME) || this;
  }
  n.__extends(MaterialBagOpenedDialog, e);
  MaterialBagOpenedDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.scrollComponent = new T.SimpleScrollComponent(new C.SimpleScrollVO().initByParent(this.dialogDisp.mc_arrows).addMouseWheelElements([this.dialogDisp]), new _.SimpleScrollStrategyVertical());
    this.textFieldManager.registerTextField(this.dialogDisp.btn_crafting.txt_label, new c.LocalizedTextVO("dialog_ci_craft_header")).verticalAlign = m.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
  };
  MaterialBagOpenedDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.dialogDisp.mc_iconAnimation.y = MaterialBagOpenedDialog.ICON_ANIMATION_START_Y;
    var i = Math.ceil(this.dialogProperties.rewards.length / MaterialBagOpenedDialog.ICONS_PER_ROW);
    var n = u.int(Math.max(i - MaterialBagOpenedDialog.ROWS_VISIBLE_AT_ONCE, 0));
    this.scrollComponent.init(0, n);
    this.scrollComponent.scrollToValue(n);
    this.scrollComponent.setVisibility(false);
    this.iconAnimationStarted = false;
    this.iconAnimationFinished = false;
    this.dialogDisp.btn_ok.visible = false;
    this.dialogDisp.btn_crafting.visible = false;
    f.ButtonHelper.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_crafting]);
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_iconAnimation);
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_bagAnimation);
    this.bagClip = null;
    this.skipAnimation();
  };
  MaterialBagOpenedDialog.prototype.onEnterFrame = function (e) {
    if (this.bagClip.currentFrame >= MaterialBagOpenedDialog.ICONANIMATION_START_FRAME && !this.iconAnimationStarted) {
      this.bagClip.removeEventListener(y.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
      this.startIconAnimation();
    }
  };
  MaterialBagOpenedDialog.prototype.startIconAnimation = function () {
    this.iconAnimationStarted = true;
    for (var e = 0; e < this.dialogProperties.rewards.length; e++) {
      var t = Math.max(e - MaterialBagOpenedDialog.ICONS_PER_ROW * 2, -1) % MaterialBagOpenedDialog.ICONS_PER_ROW == 0;
      this.tweenInMaterialIcon(e, this.getIconPosition(e), MaterialBagOpenedDialog.getIconDelay(e), t);
    }
  };
  MaterialBagOpenedDialog.prototype.skipAnimation = function () {
    O.CastleMovieClipHelper.stopAllMovies(this.dialogDisp, null, true);
    if (this.bagClip) {
      this.bagClip.removeEventListener(y.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
    }
    if (!this.iconAnimationStarted) {
      this.startIconAnimation();
    }
    for (var e = 0, t = this.dialogDisp.mc_iconAnimation.children.concat([this.dialogDisp.mc_iconAnimation]); e < t.length; e++) {
      var i = t[e];
      if (i !== "undefined") {
        for (var n = h.TweenMax.getTweensOf(i), o = 0; o < n.length; o++) {
          var a = n[o];
          if (a) {
            a.repeat(0).progress(1).kill();
          }
        }
      }
    }
    this.iconAnimationFinished = true;
    this.scrollValueChange();
  };
  MaterialBagOpenedDialog.getIconDelay = function (e) {
    var t = u.int(e / MaterialBagOpenedDialog.ICONS_PER_ROW);
    return Math.max(t - 1, 0) * MaterialBagOpenedDialog.SCROLL_UP_DELAY + e * MaterialBagOpenedDialog.DEFAULT_DELAY;
  };
  MaterialBagOpenedDialog.prototype.getIconPosition = function (e) {
    var t = u.int(e / MaterialBagOpenedDialog.ICONS_PER_ROW);
    var i = u.int(Math.min(this.dialogProperties.rewards.length - t * MaterialBagOpenedDialog.ICONS_PER_ROW, MaterialBagOpenedDialog.ICONS_PER_ROW));
    var n = (MaterialBagOpenedDialog.ICONS_PER_ROW - i) * MaterialBagOpenedDialog.OFFSET_X_PER_ICON;
    var o = u.int(this.dialogProperties.rewards.length <= 3 ? MaterialBagOpenedDialog.OFFSET_Y_PER_ROW / 2 : 0);
    return new b(MaterialBagOpenedDialog.ICON_POSITIONS[e % MaterialBagOpenedDialog.ICONS_PER_ROW] + n, t * MaterialBagOpenedDialog.OFFSET_Y_PER_ROW + o);
  };
  MaterialBagOpenedDialog.prototype.tweenInMaterialIcon = function (e, t, i, n) {
    var a = this.dialogProperties.rewards.getItemByIndex(e);
    var s = new (r.getDefinitionByName("CraftingMaterialAnimation_" + g.ClientConstUtils.lowercaseFirstLetter(a.xmlCurrencyVO.name)))();
    s.mouseChildren = false;
    this.dialogDisp.mc_iconAnimation.addChild(s);
    this.textFieldManager.registerTextField(s.txt_amount, new l.LocalizedNumberVO(a.amount), new o.InternalGGSTextFieldConfigVO(true));
    var c = u.int(e / MaterialBagOpenedDialog.ICONS_PER_ROW);
    var C = u.int(MaterialBagOpenedDialog.OFFSET_Y_PER_ROW * Math.max(c - 1, 0));
    if (n) {
      h.TweenMax.to(this.dialogDisp.mc_iconAnimation, MaterialBagOpenedDialog.SCROLL_UP_DELAY, {
        y: MaterialBagOpenedDialog.ICON_ANIMATION_START_Y - C,
        ease: d.Power1.easeOut,
        delay: i - MaterialBagOpenedDialog.SCROLL_UP_DELAY,
        onUpdate: this.bindFunction(this.updateIconVisibility),
        onUpdateParams: [e]
      });
    }
    h.TweenMax.fromTo(s, 0.2, {
      autoAlpha: 0
    }, {
      autoAlpha: 1,
      ease: d.Power1.easeOut,
      delay: i
    });
    h.TweenMax.fromTo(s, MaterialBagOpenedDialog.DURATION_FLY_IN, {
      x: 0,
      y: C
    }, {
      x: t.x,
      y: t.y,
      ease: p.Power2.easeOut,
      delay: i
    });
    h.TweenMax.fromTo(s, MaterialBagOpenedDialog.DURATION_FLY_IN, {
      scaleX: 6.27,
      scaleY: 6.27
    }, {
      scaleX: 1,
      scaleY: 1,
      ease: d.Power1.easeIn,
      delay: i
    });
    h.TweenMax.to(s, MaterialBagOpenedDialog.DURATION_BOUNCE, {
      scaleX: 1.5,
      scaleY: 1.5,
      ease: d.Power1.easeOut,
      delay: i + MaterialBagOpenedDialog.DURATION_FLY_IN
    });
    h.TweenMax.to(s, MaterialBagOpenedDialog.DURATION_BOUNCE, {
      scaleX: 1,
      scaleY: 1,
      ease: d.Power1.easeIn,
      delay: i + MaterialBagOpenedDialog.DURATION_FLY_IN + MaterialBagOpenedDialog.DURATION_BOUNCE,
      onComplete: this.bindFunction(this.onIconFinished),
      onCompleteParams: [e, s, a.getNameTextId()]
    });
  };
  MaterialBagOpenedDialog.prototype.updateIconVisibility = function (e = -1) {
    var t = MaterialBagOpenedDialog.ICON_ANIMATION_START_Y - this.dialogDisp.mc_iconAnimation.y;
    for (var i = u.int(e == -1 ? this.dialogDisp.mc_iconAnimation.numChildren : e), n = 0; n < i; n++) {
      var o = this.dialogDisp.mc_iconAnimation.getChildAt(n);
      var a = 1 - Math.min(Math.max(0 - (o.y - t), o.y - t - MaterialBagOpenedDialog.OFFSET_Y_PER_ROW), MaterialBagOpenedDialog.ICON_FADE_DISTANCE) / MaterialBagOpenedDialog.ICON_FADE_DISTANCE;
      o.visible = a > 0;
      o.alpha = a;
    }
  };
  MaterialBagOpenedDialog.prototype.onIconFinished = function (e, t, i) {
    t.toolTipText = i;
    if (e == this.dialogProperties.rewards.length - 1) {
      this.scrollComponent.show();
      this.scrollComponent.setVisibility(true);
      this.scrollComponent.onScrollSignal.add(this.bindFunction(this.scrollValueChange));
      this.dialogDisp.btn_ok.visible = true;
      this.dialogDisp.btn_crafting.visible = A.ConstructionItemsHelper.hasConstructorBuilding;
      h.TweenMax.fromTo(this.dialogDisp.mc_arrows, 0.6, {
        autoAlpha: 0
      }, {
        autoAlpha: 1
      });
      h.TweenMax.fromTo(this.dialogDisp.btn_ok, 0.6, {
        autoAlpha: 0
      }, {
        autoAlpha: 1
      });
      if (this.dialogDisp.btn_crafting.visible) {
        h.TweenMax.fromTo(this.dialogDisp.btn_crafting, 0.6, {
          autoAlpha: 0
        }, {
          autoAlpha: 1
        });
      }
      this.iconAnimationFinished = true;
    }
  };
  MaterialBagOpenedDialog.prototype.scrollValueChange = function () {
    h.TweenMax.killTweensOf(this.dialogDisp.mc_iconAnimation);
    h.TweenMax.to(this.dialogDisp.mc_iconAnimation, MaterialBagOpenedDialog.SCROLL_UP_DELAY, {
      y: MaterialBagOpenedDialog.ICON_ANIMATION_START_Y - this.scrollComponent.currentValue * MaterialBagOpenedDialog.OFFSET_Y_PER_ROW,
      ease: d.Power1.easeOut,
      onUpdate: this.bindFunction(this.updateIconVisibility)
    });
  };
  MaterialBagOpenedDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.scrollComponent.hide();
    this.scrollComponent.onScrollSignal.remove(this.bindFunction(this.scrollValueChange));
    if (this.bagClip) {
      this.bagClip.removeEventListener(y.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
    }
  };
  MaterialBagOpenedDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (this.iconAnimationFinished) {
      if (!f.ButtonHelper.isButtonEnabled(t.target)) {
        return;
      }
      switch (t.target) {
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_crafting:
          this.hide();
          I.CastleDialogHandler.getInstance().registerDefaultDialogs(v.CastleConstructionItemsMainDialog, new S.CastleConstructionItemsMainDialogProperties(v.CastleConstructionItemsMainDialog.SUBLAYER_CRAFTING));
      }
    } else {
      this.skipAnimation();
    }
  };
  Object.defineProperty(MaterialBagOpenedDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  MaterialBagOpenedDialog.NAME = "MaterialBagOpened";
  MaterialBagOpenedDialog.ICON_POSITIONS = [-100, 0, 100];
  MaterialBagOpenedDialog.ICONS_PER_ROW = 3;
  MaterialBagOpenedDialog.OFFSET_X_PER_ICON = 50;
  MaterialBagOpenedDialog.OFFSET_Y_PER_ROW = 90;
  MaterialBagOpenedDialog.DEFAULT_DELAY = 0.5;
  MaterialBagOpenedDialog.SCROLL_UP_DELAY = 0.3;
  MaterialBagOpenedDialog.DURATION_FLY_IN = 0.3;
  MaterialBagOpenedDialog.DURATION_BOUNCE = 0.1;
  MaterialBagOpenedDialog.ICON_ANIMATION_START_Y = 60;
  MaterialBagOpenedDialog.ICON_FADE_DISTANCE = MaterialBagOpenedDialog.OFFSET_Y_PER_ROW;
  MaterialBagOpenedDialog.ROWS_VISIBLE_AT_ONCE = 2;
  MaterialBagOpenedDialog.ICONANIMATION_START_FRAME = 62;
  return MaterialBagOpenedDialog;
}(E.CastleExternalDialog);
exports.MaterialBagOpenedDialog = D;
var I = require("./9.js");
var T = require("./95.js");
var v = require("./323.js");
var S = require("./357.js");
var A = require("./239.js");
s.classImplementsInterfaces(D, "ICollectableRendererList");