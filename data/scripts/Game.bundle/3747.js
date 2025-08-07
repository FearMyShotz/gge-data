Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./57.js");
var s = function (e) {
  function SamuraiDaimyoEventDialogContractsSelection(t, i = null) {
    var n = this;
    n._currentSelectedItemIndices = [0, 0];
    n._onSelection = new a.Signal();
    CONSTRUCTOR_HACK;
    (n = e.call(this, t, i) || this).scrollComponent.strategy.visibleValue = n._itemContainer.mask.height;
    n.scrollComponent.strategy.disableButtons = true;
    return n;
  }
  n.__extends(SamuraiDaimyoEventDialogContractsSelection, e);
  SamuraiDaimyoEventDialogContractsSelection.prototype.show = function () {
    e.prototype.show.call(this);
    if (this._items != null) {
      for (var t = 0, i = this._items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onContractSelected.add(this.bindFunction(this.onContractSelected));
        }
      }
    }
  };
  SamuraiDaimyoEventDialogContractsSelection.prototype.hide = function () {
    if (this._items != null) {
      for (var t = 0, i = this._items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onContractSelected.remove(this.bindFunction(this.onContractSelected));
        }
      }
    }
    e.prototype.hide.call(this);
  };
  SamuraiDaimyoEventDialogContractsSelection.prototype.addItem = function (t, i = -1, n = false) {
    e.prototype.addItem.call(this, t, i, n);
    t.onContractSelected.add(this.bindFunction(this.onContractSelected));
  };
  SamuraiDaimyoEventDialogContractsSelection.prototype.reselectPreviousContract = function () {
    if (this._items != null) {
      for (var e = 0, t = this._items; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.resetSelection();
        }
      }
    }
    this.getSelectedContract().setSelection(true);
    this._onSelection.dispatch();
  };
  SamuraiDaimyoEventDialogContractsSelection.prototype.getSelectedContract = function () {
    return this._items[this._currentSelectedItemIndices[0]].contractItems[this._currentSelectedItemIndices[1]];
  };
  SamuraiDaimyoEventDialogContractsSelection.prototype.onContractSelected = function (e) {
    this._currentSelectedItemIndices[0] = this._items.indexOf(e);
    this._currentSelectedItemIndices[1] = e.currentSelectedIndex;
    if (this._items != null) {
      for (var t = 0, i = this._items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n != e) {
          n.resetSelection();
        }
      }
    }
    this._onSelection.dispatch();
  };
  Object.defineProperty(SamuraiDaimyoEventDialogContractsSelection.prototype, "onSelection", {
    get: function () {
      return this._onSelection;
    },
    enumerable: true,
    configurable: true
  });
  return SamuraiDaimyoEventDialogContractsSelection;
}(require("./282.js").DynamicSliderAccordionComponent);
exports.SamuraiDaimyoEventDialogContractsSelection = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");