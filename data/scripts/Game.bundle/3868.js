Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function AttackDialogWaveHandlerToolPickItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AttackDialogWaveHandlerToolPickItem, e);
  AttackDialogWaveHandlerToolPickItem.prototype.updateSelection = function () {
    e.prototype.updateSelection.call(this);
    if (this.troopSelectionScrollItemVO) {
      if (this.troopSelectionScrollItemVO.unitVO.inventoryAmount > 0) {
        this.disp.mc_selection.visible = true;
        this.disp.mc_empty.visible = false;
      } else {
        this.disp.mc_selection.visible = false;
        this.disp.mc_empty.visible = true;
      }
    }
    this.updateSlider();
  };
  AttackDialogWaveHandlerToolPickItem.prototype.onValueChange = function (t) {
    e.prototype.onValueChange.call(this, t);
    this.updateSlider();
  };
  AttackDialogWaveHandlerToolPickItem.prototype.customFillItem = function () {
    e.prototype.customFillItem.call(this);
    this.updateSlider();
  };
  AttackDialogWaveHandlerToolPickItem.prototype.updateSlider = function () {
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
  return AttackDialogWaveHandlerToolPickItem;
}(require("./898.js").CastleAdvancedToolsSelectionScrollItem);
exports.AttackDialogWaveHandlerToolPickItem = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");