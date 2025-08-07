Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./23.js");
var d = require("./23.js");
var p = require("./69.js");
var h = require("./799.js");
var g = require("./1631.js");
var C = createjs.Container;
var _ = createjs.Rectangle;
var m = function (e) {
  function AResourcePanelToolTip(t) {
    var i = this;
    i._type = 0;
    i._itemContainer = new C();
    i._items = [];
    i._horizontalPadding = 10;
    i._verticalPadding = 10;
    i._showAnimationDuration = 0.2;
    i._tweenDistanceY = 20;
    i._validArea = new _();
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this)._type = t;
    i.createBackground();
    if (i._bg) {
      i._bg.width = i._bg.height = 0;
      i.addChild(i._bg);
    }
    if (i._bgPointer) {
      i.addChild(i._bgPointer);
    }
    i.addChild(i._itemContainer);
    i.createItems();
    i.addItems();
    i.mouseEnabled = i.mouseChildren = false;
    return i;
  }
  n.__extends(AResourcePanelToolTip, e);
  AResourcePanelToolTip.prototype.createItems = function () {
    throw new p.AbstractMethodError();
  };
  AResourcePanelToolTip.prototype.setCapacity = function () {};
  AResourcePanelToolTip.prototype.updateContent = function () {
    throw new p.AbstractMethodError();
  };
  AResourcePanelToolTip.prototype.createBackground = function () {
    this._bg = new Library.CastleInterfaceElements.ResourcePanel_standard_bg();
    this._bgPointer = new Library.CastleInterfaceElements.ResourcePanel_background_pointer();
    this._bgPointer.scaleX = this._bgPointer.scaleY = 2;
  };
  AResourcePanelToolTip.prototype.alignItems = function () {
    g.AlignmentHelper.alignSingleLine(this._items, g.AlignmentHelper.ALIGN_VERTICAL_FROM_TOP, 2);
  };
  AResourcePanelToolTip.prototype.hide = function () {
    if (this.parent != null) {
      this.parent.removeChild(this);
    }
  };
  AResourcePanelToolTip.prototype.show = function (e) {
    f.ResourcePanelToolTipManager.toolTipContainer.addChild(this);
    d.TweenMax.fromTo(this, this._showAnimationDuration, {
      y: e.y - this._tweenDistanceY,
      alpha: 0
    }, {
      y: e.y,
      alpha: 1,
      ease: u.Linear.easeIn
    });
  };
  AResourcePanelToolTip.prototype.update = function () {
    this._itemContainer.x = this._horizontalPadding;
    this._itemContainer.y = this._verticalPadding;
    this.setCapacity();
    this.updateContent();
    this.addItems();
    this.scaleItems();
    this.alignItems();
    this.updateBackground();
    this.repositionItems();
  };
  AResourcePanelToolTip.prototype.addItems = function () {
    a.MovieClipHelper.clearMovieClip(this._itemContainer);
    for (var e = 0; e < this._items.length; e++) {
      this._itemContainer.addChild(this._items[e]);
    }
  };
  AResourcePanelToolTip.prototype.updateBackground = function () {
    if (this._bg) {
      this._bg.width = this._itemContainer.width + this._horizontalPadding * 2;
      this._bg.height = this._itemContainer.height + this._verticalPadding * 2;
      this._bgPointer.x = this._bg.width / 2;
      this._bgPointer.y = 0;
    }
  };
  AResourcePanelToolTip.prototype.scaleItems = function () {
    var e;
    var t = this;
    var i = 0;
    var n = [];
    var a = 0;
    for (a = 0; a < this._items.length; a++) {
      if ((e = r.castAs(this._items[a], "ResourcePanelToolTipComponent")) != null) {
        for (var l = 0; l < e.textFields.length; l++) {
          if (e.textFields[l] != null && e.textFields[l].textContentVO != null) {
            e.textFields[l].autoSize = s.TextFormatAlign.LEFT;
            if (o.GGSCountryController.instance.currentCountry.isLanguageWrittenRightToLeft) {
              e.textFields[l].autoSize = s.TextFormatAlign.RIGHT;
            }
          }
          e.updateTextFieldPositions();
        }
        i = Math.min(Math.max(i, e.width), 150);
      } else {
        n.push(this._items[a]);
      }
    }
    for (a = 0; a < n.length; a++) {
      n[a].width = i;
    }
    this._validArea.x = this._items[0].x;
    this._validArea.width = i;
    this._items.forEach(function (e) {
      var i = r.castAs(e, "ResourcePanelToolTipComponent");
      if (i) {
        i.updateTextFieldDimensions(t._validArea);
      }
    });
  };
  AResourcePanelToolTip.prototype.repositionItems = function () {
    for (var e = 0; e < this._items.length; e++) {
      if (c.instanceOfClass(this._items[e], "ResourcePanelToolTipComponent")) {
        this._items[e].updateTextFieldPositions(this._validArea);
      }
    }
  };
  Object.defineProperty(AResourcePanelToolTip.prototype, "bgPointer", {
    get: function () {
      return this._bgPointer;
    },
    enumerable: true,
    configurable: true
  });
  return AResourcePanelToolTip;
}(h.CastleSprite);
exports.AResourcePanelToolTip = m;
var f = require("./152.js");
l.classImplementsInterfaces(m, "Container");