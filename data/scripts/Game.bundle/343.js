Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./232.js");
var s = require("./72.js");
var r = require("./213.js");
var l = require("./68.js");
var c = require("./344.js");
var u = require("./2096.js");
var d = require("./1207.js");
var p = createjs.MouseEvent;
var h = function (e) {
  function ScrollComponent(t, i) {
    var n = this;
    n._sliderDown = false;
    n._selectedIndex = 0;
    n._enabled = false;
    n._centerButtonOnDefault = true;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this)._sliderData = t;
    n.sliderType = i;
    n.enableComponent = true;
    n.sliderDown = false;
    n.setSelectedIndex(0);
    return n;
  }
  n.__extends(ScrollComponent, e);
  ScrollComponent.prototype.onClickSliderBar = function (e) {
    this.sliderDown = true;
    this.setSliderBtn(this._sliderType.transformMousePosition(this._sliderData.sliderBar, e));
    this.onSliding(null);
    this.sliderDown = false;
  };
  ScrollComponent.prototype.onSliderUp = function (e) {
    if (this._stageRef) {
      this._stageRef.removeEventListener(p.MOUSE_UP, this.bindFunction(this.onSliderUp));
      this._stageRef.removeEventListener(p.MOUSE_MOVE, this.bindFunction(this.onSliding));
      this._stageRef = null;
    }
    if (this.sliderDown) {
      this.sliderDown = false;
      C.CastleLayoutManager.getInstance().stage.enableMouseOver(g.CastleGame.STAGE_MOUSEOVER_TIME);
      c.AttackDialogTrackingHelper.getInstance().trackDetailCounter(c.AttackDialogTrackingHelper.TRACK_MANUAL_FILLING);
    }
  };
  ScrollComponent.prototype.onSliderDown = function (e) {
    if (!this.sliderDown) {
      this.sliderDown = true;
      this._stageRef = this._sliderData.parent.stage;
      this._stageRef.addEventListener(p.MOUSE_UP, this.bindFunction(this.onSliderUp));
      this._stageRef.addEventListener(p.MOUSE_MOVE, this.bindFunction(this.onSliding));
      C.CastleLayoutManager.getInstance().stage.enableMouseOver(0);
    }
  };
  ScrollComponent.prototype.setSliderBtn = function (e) {
    var t = r.CastleMathHelper.clamp(e, 0, this.sliderLength);
    this._sliderType.setPosition(this._sliderData.sliderButton, t);
  };
  ScrollComponent.prototype.onSliding = function (e) {
    if (this.sliderDown) {
      var t = this._sliderType.getMousePosition(this._sliderData.sliderBar);
      var i = r.CastleMathHelper.clamp(t, 0, this.sliderLength);
      var n = this.sliderLength / Math.max(1, this.sliderSteps);
      var o = Math.round(i / n);
      this.setSelectedIndex(o);
    }
  };
  Object.defineProperty(ScrollComponent.prototype, "selectedIndex", {
    get: function () {
      if (!this._selectedIndex || isNaN(this._selectedIndex)) {
        return 0;
      } else {
        return Math.max(this._selectedIndex, 0);
      }
    },
    enumerable: true,
    configurable: true
  });
  ScrollComponent.prototype.setMaxIndex = function (e) {
    this._sliderData.numOfElements = e;
  };
  ScrollComponent.prototype.setSelectedIndex = function (e, t = true) {
    var i = this.sliderLength;
    var n = this.sliderSteps;
    if (!e || !!isNaN(e)) {
      e = 0;
    }
    e = r.CastleMathHelper.clamp(e, 0, n);
    var o = 0;
    o = this.sliderSteps == 0 ? this._centerButtonOnDefault ? i / 2 : 0 : e * i / this.sliderSteps;
    this.setSliderBtn(o);
    if (e != this._selectedIndex) {
      this._selectedIndex = e;
      if (t || this._sliderDown) {
        this.dispatchEvent(new a.SliderEvent(a.SliderEvent.VALUE_CHANGED, this._selectedIndex));
      }
    }
  };
  Object.defineProperty(ScrollComponent.prototype, "sliderLength", {
    get: function () {
      return this._sliderType.getElementLength(this._sliderData.sliderBar);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ScrollComponent.prototype, "enableComponent", {
    set: function (e) {
      this._enabled = e;
      if (this._colorMatrix == null) {
        this._colorMatrix = new o.ColorMatrix();
        this._colorMatrix.desaturate();
      }
      var t = this._sliderData.parent;
      t.mouseEnabled = e;
      t.mouseChildren = e;
      if (e) {
        t.useFilters(l.BitmapFilterHelper.NO_FILTER);
      } else {
        t.useFilters([this._colorMatrix.filter]);
      }
      if (this._enabled) {
        this._sliderData.sliderButton.addEventListener(p.MOUSE_DOWN, this.bindFunction(this.onSliderDown));
        this._sliderData.sliderBar.addEventListener(p.CLICK, this.bindFunction(this.onClickSliderBar));
        this._sliderData.sliderButton.actLikeButton = true;
        this._sliderData.changeCallback = this.bindFunction(this.update);
      } else {
        this._sliderData.sliderButton.removeEventListener(p.MOUSE_DOWN, this.bindFunction(this.onSliderDown));
        this._sliderData.sliderBar.removeEventListener(p.CLICK, this.bindFunction(this.onClickSliderBar));
        if (this._stageRef) {
          this._stageRef.removeEventListener(p.MOUSE_UP, this.bindFunction(this.onSliderUp));
          this._stageRef.removeEventListener(p.MOUSE_MOVE, this.bindFunction(this.onSliding));
          this._stageRef = null;
        }
        this._sliderData.changeCallback = null;
      }
    },
    enumerable: true,
    configurable: true
  });
  ScrollComponent.prototype.update = function () {
    this.setSelectedIndex(this._selectedIndex);
  };
  ScrollComponent.prototype.dispose = function () {
    if (this._enabled) {
      this._sliderData.sliderButton.removeEventListener(p.MOUSE_DOWN, this.bindFunction(this.onSliderDown));
      this._sliderData.sliderBar.removeEventListener(p.CLICK, this.bindFunction(this.onClickSliderBar));
      C.CastleLayoutManager.getInstance().stage.removeEventListener(p.MOUSE_UP, this.bindFunction(this.onSliderUp));
      C.CastleLayoutManager.getInstance().stage.removeEventListener(p.MOUSE_MOVE, this.bindFunction(this.onSliding));
      this._sliderData.changeCallback = null;
    }
  };
  Object.defineProperty(ScrollComponent.prototype, "sliderType", {
    set: function (e) {
      this._sliderType = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ScrollComponent.prototype, "sliderDown", {
    get: function () {
      return this._sliderDown;
    },
    set: function (e) {
      this._sliderDown = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ScrollComponent.prototype, "percentValue", {
    get: function () {
      if (this.sliderSteps == 0) {
        return 0;
      } else {
        return this.selectedIndex / this.sliderSteps;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ScrollComponent.prototype, "sliderSteps", {
    get: function () {
      var e = this._sliderData.numOfElements;
      return Math.max(0, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ScrollComponent.prototype, "maxSliderSteps", {
    get: function () {
      return this._sliderData.numOfElements;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ScrollComponent.prototype, "centerButtonOnDefault", {
    set: function (e) {
      this._centerButtonOnDefault = e;
    },
    enumerable: true,
    configurable: true
  });
  ScrollComponent.__initialize_static_members = function () {
    ScrollComponent.VERTICAL_SLIDER = new d.VerticalSliderStrategy();
    ScrollComponent.HORIZONTAL_SLIDER = new u.HorizontalSliderStrategy();
  };
  return ScrollComponent;
}(s.CastleEventDispatcher);
exports.ScrollComponent = h;
var g = require("./365.js");
var C = require("./17.js");
h.__initialize_static_members();