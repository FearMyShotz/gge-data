Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = function (e) {
  function PanelButtonsComponent(t, i, n = PanelButtonsComponent.BUILD_DIRECTION_LEFT) {
    var o = this;
    o._buttons = [];
    o._isBuildingButtons = false;
    CONSTRUCTOR_HACK;
    (o = e.call(this, t) || this)._buttonClass = i;
    o._buildDirection = n;
    return o;
  }
  n.__extends(PanelButtonsComponent, e);
  PanelButtonsComponent.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.clearButtons();
  };
  PanelButtonsComponent.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    if (this._buttons != null) {
      for (var t = 0, i = this._buttons; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onVisibilityChanged.add(this.bindFunction(this.onButtonVisibilityChanged));
        }
      }
    }
  };
  PanelButtonsComponent.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    if (this._buttons != null) {
      for (var t = 0, i = this._buttons; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onVisibilityChanged.add(this.bindFunction(this.onButtonVisibilityChanged));
        }
      }
    }
  };
  PanelButtonsComponent.prototype.clearButtons = function () {
    if (this._buttons != null) {
      for (var e = 0, t = this._buttons; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.destroy();
        }
      }
    }
    this._buttons = [];
    o.MovieClipHelper.clearMovieClip(this.disp.mc_buttons);
  };
  PanelButtonsComponent.prototype.switchCreationMode = function (e) {
    this._isBuildingButtons = e;
    if (this._isBuildingButtons) {
      this.clearButtons();
    }
    if (!this._isBuildingButtons) {
      this.alignLayout();
    }
  };
  PanelButtonsComponent.prototype.addMainButton = function (e) {
    e.init(this.buttonClass, false);
    e.onVisibilityChanged.add(this.bindFunction(this.onButtonVisibilityChanged));
    e.onShow();
    this._buttons.push(e);
    this.disp.mc_buttons.addChild(e.disp);
    return e;
  };
  PanelButtonsComponent.prototype.alignLayout = function () {
    var e = 0;
    if (this._buttons != null) {
      for (var t = 0, i = this._buttons; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.isVisible) {
          var o = n.buttonMc.getBounds(null);
          n.disp.x = this.buildDirection == PanelButtonsComponent.BUILD_DIRECTION_LEFT ? -e + o.x : e + -o.x;
          n.disp.y = o.y;
          e += o.width + PanelButtonsComponent.BUTTONS_PADDING_X;
        }
      }
    }
    this.disp.mc_background.scaleX = e;
    this.disp.mc_background.children[0].scaleX = 1;
    this.disp.mc_backgroundDeco.x = this.buildDirection == PanelButtonsComponent.BUILD_DIRECTION_LEFT ? -e : e;
  };
  PanelButtonsComponent.prototype.updateButtons = function () {
    this._isBuildingButtons = true;
    if (this._buttons != null) {
      for (var e = 0, t = this._buttons; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.update();
        }
      }
    }
    this.alignLayout();
    this._isBuildingButtons = false;
  };
  PanelButtonsComponent.prototype.amountOfVisibleButtons = function () {
    var e = 0;
    if (this._buttons != null) {
      for (var t = 0, i = this._buttons; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.isVisible) {
          e++;
        }
      }
    }
    return e;
  };
  PanelButtonsComponent.prototype.getAnyButtonByClass = function (e) {
    var t = l.ClientConstUtils.getNameFromClass(e);
    if (this._buttons != null) {
      for (var i = 0, n = this._buttons; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          if (r.instanceOfClass(o, t)) {
            return o;
          }
          if (o.subButtons && o.subButtons.length > 0) {
            for (var a = 0, s = o.subButtons; a < s.length; a++) {
              var c = s[a];
              if (c !== undefined && r.instanceOfClass(c, t)) {
                return c;
              }
            }
          }
        }
      }
    }
    return null;
  };
  PanelButtonsComponent.prototype.onButtonVisibilityChanged = function () {
    if (!this._isBuildingButtons) {
      this.alignLayout();
    }
  };
  Object.defineProperty(PanelButtonsComponent.prototype, "buildDirection", {
    get: function () {
      return this._buildDirection;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PanelButtonsComponent.prototype, "isBuildingButtons", {
    get: function () {
      return this._isBuildingButtons;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PanelButtonsComponent.prototype, "buttons", {
    get: function () {
      return this._buttons;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PanelButtonsComponent.prototype, "buttonClass", {
    get: function () {
      return this._buttonClass;
    },
    enumerable: true,
    configurable: true
  });
  PanelButtonsComponent.BUILD_DIRECTION_LEFT = "left";
  PanelButtonsComponent.BUILD_DIRECTION_RIGHT = "right";
  PanelButtonsComponent.BUTTONS_PADDING_X = 3;
  return PanelButtonsComponent;
}(require("./40.js").CastleItemRenderer);
exports.PanelButtonsComponent = s;
a.classImplementsInterfaces(s, "ICollectableRendererList");
var r = require("./1.js");
var l = require("./55.js");