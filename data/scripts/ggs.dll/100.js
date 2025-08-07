Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./3.js");
var a = require("./2.js");
var s = createjs.Container;
var r = createjs.Event;
var o = createjs.MouseEvent;
a.getLogger("CoreJS.FlashUIComponent");
var l = function () {
  function FlashUIComponent(e) {
    this.isInitialized = false;
    this._hasStageListener = false;
    this._disp = e;
    this._disp.addEventListener(r.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage));
  }
  FlashUIComponent.prototype.onAddedToStage = function (e) {
    if (!this.isInitialized) {
      this.init();
      this.isInitialized = true;
    }
    this.applyProperties();
    this.updatePosition();
    this._disp.removeEventListener(r.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage));
    this._disp.addEventListener(o.CLICK, this.bindFunction(this.onClick));
    this._disp.addEventListener(o.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this._disp.addEventListener(o.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this._disp.addEventListener(o.ROLL_OVER, this.bindFunction(this.onRollOver));
    this._disp.addEventListener(o.ROLL_OUT, this.bindFunction(this.onRollOut));
    this._disp.addEventListener(r.REMOVED_FROM_STAGE, this.bindFunction(this.onRemovedFromStage));
  };
  FlashUIComponent.prototype.findTextFields = function (e) {
    var t = [];
    for (var n = 0; n < e.numChildren; n++) {
      var a = e.getChildAt(n);
      if (a instanceof i.TextField) {
        t.push(a);
      } else if (a instanceof s) {
        var r = this.findTextFields(a);
        t = t.concat(r);
      }
    }
    return t;
  };
  FlashUIComponent.prototype.onRollOut = function (e) {};
  FlashUIComponent.prototype.onRollOver = function (e) {};
  FlashUIComponent.prototype.onClick = function (e) {};
  FlashUIComponent.prototype.onMouseUp = function (e) {};
  FlashUIComponent.prototype.onMouseDown = function (e) {};
  FlashUIComponent.prototype.onKeyUp = function (e) {};
  FlashUIComponent.prototype.onRemovedFromStage = function (e) {
    this.destroy();
  };
  FlashUIComponent.prototype.reset = function () {
    this.destroy();
    this.init();
    this.applyProperties();
  };
  FlashUIComponent.prototype.init = function () {};
  FlashUIComponent.prototype.setProperties = function (e) {
    this.properties = e;
    if (this.isInitialized) {
      this.applyProperties();
    }
  };
  FlashUIComponent.prototype.applyProperties = function () {};
  FlashUIComponent.prototype.onResize = function (e = null) {
    if (!i.currentBrowserInfo.isMobile || !i.TextField.isMobileKeyboardShown) {
      this.updatePosition();
      var t = this;
      setTimeout(function () {
        if (t.disp && t.isVisible()) {
          t.updatePosition();
        }
      }, 1);
    }
  };
  FlashUIComponent.prototype.show = function () {
    if (this._disp) {
      if (this._disp.stage && !this._hasStageListener) {
        this.disp.stage.addEventListener(i.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUp));
        window.addEventListener("resize", this.bindFunction(this.onResize), false);
      }
      this._disp.visible = true;
      this.onResize(null);
      this._hasStageListener = true;
    }
  };
  FlashUIComponent.prototype.update = function () {};
  FlashUIComponent.prototype.hide = function () {
    if (this._disp) {
      if (this._disp.stage) {
        this._disp.stage.removeEventListener(i.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUp));
      }
      this._disp.visible = false;
    }
    window.removeEventListener("resize", this.bindFunction(this.onResize), false);
    this._hasStageListener = false;
  };
  FlashUIComponent.prototype.isVisible = function () {
    return this._disp.visible;
  };
  FlashUIComponent.prototype.toggleVisibility = function () {
    if (this.isVisible()) {
      this.hide();
    } else {
      this.show();
    }
  };
  FlashUIComponent.prototype.updatePosition = function () {};
  Object.defineProperty(FlashUIComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    set: function (e) {
      this._disp = e;
    },
    enumerable: true,
    configurable: true
  });
  FlashUIComponent.prototype.destroy = function () {
    if (this._disp != null) {
      this._disp.removeEventListener(r.REMOVED_FROM_STAGE, this.bindFunction(this.onRemovedFromStage));
      if (this._disp.hasEventListener(o.CLICK)) {
        this._disp.removeEventListener(o.CLICK, this.bindFunction(this.onClick));
      }
      this._disp.removeEventListener(o.MOUSE_UP, this.bindFunction(this.onMouseUp));
      this._disp.removeEventListener(o.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this._disp.removeEventListener(o.ROLL_OVER, this.bindFunction(this.onRollOver));
      this._disp.removeEventListener(o.ROLL_OUT, this.bindFunction(this.onRollOut));
      this.disp.removeEventListener(i.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUp));
      window.removeEventListener("resize", this.bindFunction(this.onResize), false);
    }
  };
  FlashUIComponent.NAME = "FlashUIComponent";
  return FlashUIComponent;
}();
exports.FlashUIComponent = l;