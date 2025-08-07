Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./57.js");
var s = require("./157.js");
var r = require("./20.js");
var l = require("./8.js");
var c = function (e) {
  function AOptionsDialogCollapsibleItem(t, i, n = true) {
    var o = e.call(this, t, i, n) || this;
    if (o._headerMC.totalFrames > 1) {
      l.ButtonHelper.initButtons([o._headerMC], r.ClickFeedbackButtonHover, 1);
    }
    if (o._headerMC.mc_open) {
      o._headerMC.mc_open.visible = o.isExpanded;
    }
    o._updateSignal = new a.Signal();
    return o;
  }
  n.__extends(AOptionsDialogCollapsibleItem, e);
  AOptionsDialogCollapsibleItem.prototype.updateItem = function () {};
  AOptionsDialogCollapsibleItem.prototype.updateMask = function () {
    if (this.isExpanded) {
      this.contentMC.mask.height = this.contentHeight;
    }
  };
  AOptionsDialogCollapsibleItem.prototype.applyStateChange = function () {
    e.prototype.applyStateChange.call(this);
    if (this._headerMC.mc_open) {
      this._headerMC.mc_open.visible = this.isExpanded;
    }
  };
  AOptionsDialogCollapsibleItem.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    this._updateSignal.removeAll();
  };
  AOptionsDialogCollapsibleItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (l.ButtonHelper.isButtonEnabled(this._headerMC)) {
      switch (t.target) {
        case this._headerMC:
          this.expand(!this._isExpanded, true);
      }
    }
  };
  Object.defineProperty(AOptionsDialogCollapsibleItem.prototype, "updateSignal", {
    get: function () {
      return this._updateSignal;
    },
    enumerable: true,
    configurable: true
  });
  AOptionsDialogCollapsibleItem.prototype.preExpand = function () {
    this._isExpanded = true;
    this._contentMC.alpha = 1;
    this._contentMC.visible = true;
    this._contentMC.mask.height = this._contentMC.height;
    this._headerMC.mc_open.visible = true;
  };
  return AOptionsDialogCollapsibleItem;
}(s.ACollapsibleItem);
exports.AOptionsDialogCollapsibleItem = c;
o.classImplementsInterfaces(c, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");