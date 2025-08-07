Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./40.js");
var s = require("./2654.js");
var r = function (e) {
  function DecorationForgeMergeButtonsComponent(t, i) {
    var n = this;
    n._buttons = [];
    CONSTRUCTOR_HACK;
    (n = e.call(this, t) || this)._onSelectionFunc = i;
    n.init();
    return n;
  }
  n.__extends(DecorationForgeMergeButtonsComponent, e);
  DecorationForgeMergeButtonsComponent.prototype.init = function () {
    this._buttons = [this._buttonSource = new c.DecorationForgeMergeButton(this.disp.btn_mergeSource, this.bindFunction(this.onMergeButtonClicked)), this._buttonTarget = new c.DecorationForgeMergeButton(this.disp.btn_mergeTarget, this.bindFunction(this.onMergeButtonClicked)), this._buttonCatalyst = new c.DecorationForgeMergeButton(this.disp.btn_mergeCatalyst, this.bindFunction(this.onMergeButtonClicked))];
  };
  DecorationForgeMergeButtonsComponent.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this.reset();
    if (this._buttons != null) {
      for (var t = 0, i = this._buttons; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onShow();
        }
      }
    }
  };
  DecorationForgeMergeButtonsComponent.prototype.onHide = function () {
    if (this._buttons != null) {
      for (var t = 0, i = this._buttons; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onHide();
        }
      }
    }
    e.prototype.onHide.call(this);
  };
  DecorationForgeMergeButtonsComponent.prototype.updateButtons = function () {
    this.updateButton(this._buttonSource);
    this.updateButton(this._buttonCatalyst);
    this.updateArrows();
  };
  DecorationForgeMergeButtonsComponent.prototype.updateButton = function (e) {
    switch (this._buttonTarget.currentState) {
      case c.DecorationForgeMergeButton.STATE_DISABLED:
        e.setSelection(null);
        e.setState(c.DecorationForgeMergeButton.STATE_DISABLED);
        e.updateInfo();
        break;
      case c.DecorationForgeMergeButton.STATE_READY:
        break;
      case c.DecorationForgeMergeButton.STATE_SET:
        if (e.currentState != c.DecorationForgeMergeButton.STATE_SET) {
          e.setState(c.DecorationForgeMergeButton.STATE_READY);
        }
        e.updateInfo();
    }
  };
  DecorationForgeMergeButtonsComponent.prototype.updateArrows = function () {
    this.disp.mc_arrowSource.gotoAndStop(this._buttonSource.currentState == c.DecorationForgeMergeButton.STATE_SET ? 2 : 1);
    this.disp.mc_arrowCatalyst.gotoAndStop(this._buttonCatalyst.currentState == c.DecorationForgeMergeButton.STATE_SET ? 2 : 1);
  };
  DecorationForgeMergeButtonsComponent.prototype.reset = function () {
    if (this._buttons != null) {
      for (var e = 0, t = this._buttons; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.reset();
        }
      }
    }
    this._buttonTarget.setState(c.DecorationForgeMergeButton.STATE_READY);
    this.updateArrows();
  };
  DecorationForgeMergeButtonsComponent.prototype.openSelectDialog = function (e, t) {
    if (e.currentState != c.DecorationForgeMergeButton.STATE_DISABLED) {
      l.CastleComponent.dialogHandler.registerDialogs(t, new s.DecorationForgeSelectProperties(this, this.bindFunction(this.onSelectionDone), this.bindFunction(this.onSelectionAbort)));
    }
  };
  DecorationForgeMergeButtonsComponent.prototype.selectItem = function (e) {
    if (e.itemVO && e.btn) {
      e.btn.setSelection(e);
      e.btn.setState(c.DecorationForgeMergeButton.STATE_SET);
      e.btn.updateInfo();
    }
    if (e.btn == this._buttonTarget) {
      this._buttonSource.reset();
      this._buttonCatalyst.reset();
    }
    this.updateButtons();
    if (this._onSelectionFunc) {
      this._onSelectionFunc();
    }
  };
  DecorationForgeMergeButtonsComponent.prototype.areAllButtonsSelected = function () {
    if (this._buttons != null) {
      for (var e = 0, t = this._buttons; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined && !i.currentSelectionVO) {
          return false;
        }
      }
    }
    return true;
  };
  DecorationForgeMergeButtonsComponent.prototype.isTargetSelected = function () {
    return this._buttonTarget.currentSelectionVO != null;
  };
  DecorationForgeMergeButtonsComponent.prototype.areSourceAndCatalystSelected = function () {
    return this._buttonSource.currentSelectionVO != null && this._buttonCatalyst.currentSelectionVO != null;
  };
  DecorationForgeMergeButtonsComponent.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
  };
  DecorationForgeMergeButtonsComponent.prototype.onMergeButtonClicked = function (e) {
    switch (e) {
      case this._buttonSource:
      case this._buttonCatalyst:
        this.openSelectDialog(e, u.DecorationForgeSelectSourceAndCatalystDialog);
        break;
      case this._buttonTarget:
        this.openSelectDialog(e, d.DecorationForgeSelectTargetDialog);
    }
  };
  DecorationForgeMergeButtonsComponent.prototype.onSelectionDone = function (e) {
    this.selectItem(e);
  };
  DecorationForgeMergeButtonsComponent.prototype.onSelectionAbort = function (e) {};
  Object.defineProperty(DecorationForgeMergeButtonsComponent.prototype, "buttonSource", {
    get: function () {
      return this._buttonSource;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeMergeButtonsComponent.prototype, "buttonTarget", {
    get: function () {
      return this._buttonTarget;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeMergeButtonsComponent.prototype, "buttonCatalyst", {
    get: function () {
      return this._buttonCatalyst;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeMergeButtonsComponent.prototype, "buttons", {
    get: function () {
      return this._buttons;
    },
    enumerable: true,
    configurable: true
  });
  return DecorationForgeMergeButtonsComponent;
}(a.CastleItemRenderer);
exports.DecorationForgeMergeButtonsComponent = r;
var l = require("./14.js");
var c = require("./2655.js");
var u = require("./2656.js");
var d = require("./1450.js");
o.classImplementsInterfaces(r, "ICollectableRendererList");