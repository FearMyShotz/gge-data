Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./509.js");
var s = require("./1247.js");
var r = function (e) {
  function AttackDialogWaveHandlerToolPickInfiniteItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AttackDialogWaveHandlerToolPickInfiniteItem, e);
  AttackDialogWaveHandlerToolPickInfiniteItem.prototype.initLoaded = function () {
    e.prototype.initLoaded.call(this);
    this.singleEffect = new s.ToolEffectView(this.itemMc.mc_tool_info, 0, 28, 22);
    this.effect1 = new s.ToolEffectView(this.itemMc.mc_tool_info_0, 0, 28, 18);
    this.effect2 = new s.ToolEffectView(this.itemMc.mc_tool_info_1, 1, 28, 18);
    this.itemMc.btn_instantBuy.toolTipText = "dialog_fight_instantBuy";
  };
  AttackDialogWaveHandlerToolPickInfiniteItem.prototype.fillAdditionalComponents = function () {
    a.FightScreenHelper.initInstantBuyButton(this.itemMc.btn_instantBuy, this.troopSelectionScrollItemVO.unitVO, this.troopSelectionScrollItemVO.sourceArea);
    var e = this.troopSelectionScrollItemVO.unitVO;
    if (e.effectTypes.length > 1) {
      this.singleEffect.hide();
      this.effect1.update(e);
      this.effect2.update(e);
    } else {
      this.singleEffect.update(e);
      this.effect1.hide();
      this.effect2.hide();
    }
  };
  AttackDialogWaveHandlerToolPickInfiniteItem.prototype.updateSelection = function () {
    e.prototype.updateSelection.call(this);
    if (this.troopSelectionScrollItemVO) {
      if (this.troopSelectionScrollItemVO.unitVO.inventoryAmount > 0) {
        this.itemMc.mc_selection.visible = true;
        this.itemMc.mc_empty.visible = false;
      } else {
        this.itemMc.mc_selection.visible = false;
        this.itemMc.mc_empty.visible = true;
      }
    }
    this.updateSlider();
  };
  AttackDialogWaveHandlerToolPickInfiniteItem.prototype.onValueChange = function (t) {
    e.prototype.onValueChange.call(this, t);
    this.updateSlider();
  };
  AttackDialogWaveHandlerToolPickInfiniteItem.prototype.fill = function () {
    e.prototype.fill.call(this);
    this.updateSlider();
  };
  AttackDialogWaveHandlerToolPickInfiniteItem.prototype.updateSlider = function () {
    if (this._amountComponent && this._amountComponent.numberOfItems > 0) {
      this.itemMc.mc_selection.mc_slider.mc_line.scaleX = this._amountComponent.getSelectedAmount() / this._amountComponent.numberOfItems;
    } else {
      var e = this._amountComponent && this._amountComponent.numberOfItems == 0;
      if (e) {
        this._amountComponent.enableComponent(true);
      }
      this.itemMc.mc_selection.mc_slider.mc_line.scaleX = 0;
      if (e) {
        this._amountComponent.enableComponent(false);
      }
    }
  };
  return AttackDialogWaveHandlerToolPickInfiniteItem;
}(require("./1797.js").ACastleAdvancedTroopSelectionInfiniteScrollItem);
exports.AttackDialogWaveHandlerToolPickInfiniteItem = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");