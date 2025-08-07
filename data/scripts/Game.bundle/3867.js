Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./900.js");
var s = require("./8.js");
var r = function (e) {
  function AttackDialogWaveHandlerSoldierPickItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AttackDialogWaveHandlerSoldierPickItem, e);
  AttackDialogWaveHandlerSoldierPickItem.prototype.onValueChange = function (t) {
    e.prototype.onValueChange.call(this, t);
    this.updateSlider();
  };
  AttackDialogWaveHandlerSoldierPickItem.prototype.customFillItem = function () {
    e.prototype.customFillItem.call(this);
    this.updateSlider();
  };
  AttackDialogWaveHandlerSoldierPickItem.prototype.updateSlider = function () {
    if (this._amountComponent && this._amountComponent.numberOfItems > 0) {
      this.disp.mc_selection.mc_slider.mc_line.scaleX = this._amountComponent.getSelectedAmount() / this._amountComponent.numberOfItems;
    } else {
      var e = this._amountComponent && this._amountComponent.numberOfItems == 0;
      if (e) {
        this._amountComponent.enableComponent(true);
      }
      this.disp.mc_selection.mc_slider.mc_line.scaleX = 0;
      if (e) {
        this._amountComponent.enableComponent(false);
      }
    }
  };
  AttackDialogWaveHandlerSoldierPickItem.prototype.updateSelection = function () {
    e.prototype.updateSelection.call(this);
    this.updateSlider();
  };
  AttackDialogWaveHandlerSoldierPickItem.prototype.onTouchDown = function (t) {
    e.prototype.onTouchDown.call(this, t);
    s.ButtonHelper.isButtonEnabled(t.target);
  };
  return AttackDialogWaveHandlerSoldierPickItem;
}(a.CastleAdvancedUnitSelectionScrollItem);
exports.AttackDialogWaveHandlerSoldierPickItem = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");