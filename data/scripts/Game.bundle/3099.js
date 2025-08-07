Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./57.js");
var s = require("./40.js");
var r = require("./8.js");
var l = function (e) {
  function RelicUpgradeDialogSelectorCheckbox(t, i) {
    var n = this;
    n._filterType = RelicUpgradeDialogSelectorCheckbox.TYPE_LORDS;
    n._onStateChanged = new a.Signal();
    CONSTRUCTOR_HACK;
    (n = e.call(this, t) || this)._filterType = i;
    n.init();
    return n;
  }
  n.__extends(RelicUpgradeDialogSelectorCheckbox, e);
  RelicUpgradeDialogSelectorCheckbox.prototype.init = function () {
    r.ButtonHelper.initBasicButton(this.disp.mc_check);
    this.disp.mc_icon.gotoAndStop(RelicUpgradeDialogSelectorCheckbox.ORDER.indexOf(this._filterType) + 1);
    this.disp.mc_icon.toolTipText = this.getTooltipTextId();
  };
  RelicUpgradeDialogSelectorCheckbox.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this.setState(RelicUpgradeDialogSelectorCheckbox.STATE_CHECKED);
  };
  RelicUpgradeDialogSelectorCheckbox.prototype.setState = function (e) {
    this._currentState = e;
    this.disp.mc_check.gotoAndStop(this.currentState == RelicUpgradeDialogSelectorCheckbox.STATE_CHECKED ? 2 : 1);
    this.onStateChanged.dispatch();
  };
  RelicUpgradeDialogSelectorCheckbox.prototype.getTooltipTextId = function () {
    switch (this.filterType) {
      case RelicUpgradeDialogSelectorCheckbox.TYPE_LORDS:
        return "dialog_relicEnchanter_relicEnchanterUpgrade_generalItems_tooltip";
      case RelicUpgradeDialogSelectorCheckbox.TYPE_BARONS:
        return "dialog_relicEnchanter_relicEnchanterUpgrade_baronItems_tooltip";
      case RelicUpgradeDialogSelectorCheckbox.TYPE_INVENTORY:
        return "dialog_relicEnchanter_relicEnchanterUpgrade_inventoryItems_tooltip";
      default:
        return "";
    }
  };
  RelicUpgradeDialogSelectorCheckbox.prototype.onClick = function (t) {
    if (r.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      this.setState(this.currentState == RelicUpgradeDialogSelectorCheckbox.STATE_CHECKED ? RelicUpgradeDialogSelectorCheckbox.STATE_UNCHECKED : RelicUpgradeDialogSelectorCheckbox.STATE_CHECKED);
    }
  };
  Object.defineProperty(RelicUpgradeDialogSelectorCheckbox.prototype, "filterType", {
    get: function () {
      return this._filterType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicUpgradeDialogSelectorCheckbox.prototype, "currentState", {
    get: function () {
      return this._currentState;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicUpgradeDialogSelectorCheckbox.prototype, "onStateChanged", {
    get: function () {
      return this._onStateChanged;
    },
    enumerable: true,
    configurable: true
  });
  RelicUpgradeDialogSelectorCheckbox.TYPE_LORDS = "lords";
  RelicUpgradeDialogSelectorCheckbox.TYPE_BARONS = "barons";
  RelicUpgradeDialogSelectorCheckbox.TYPE_INVENTORY = "inventory";
  RelicUpgradeDialogSelectorCheckbox.ORDER = [RelicUpgradeDialogSelectorCheckbox.TYPE_LORDS, RelicUpgradeDialogSelectorCheckbox.TYPE_BARONS, RelicUpgradeDialogSelectorCheckbox.TYPE_INVENTORY];
  RelicUpgradeDialogSelectorCheckbox.STATE_CHECKED = "checked";
  RelicUpgradeDialogSelectorCheckbox.STATE_UNCHECKED = "unchecked";
  return RelicUpgradeDialogSelectorCheckbox;
}(s.CastleItemRenderer);
exports.RelicUpgradeDialogSelectorCheckbox = l;
o.classImplementsInterfaces(l, "ICollectableRendererList");