Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./4.js");
var l = require("./141.js");
var c = require("./401.js");
var u = require("./287.js");
var d = function (e) {
  function ResourcePanelToolTipSpecialButton() {
    return e.call(this, h.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_SPECIAL_CONTAINER_BUTTON) || this;
  }
  n.__extends(ResourcePanelToolTipSpecialButton, e);
  ResourcePanelToolTipSpecialButton.prototype.createItems = function () {
    this._title = new u.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextBold());
    this._helperText = new u.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._ironText = new u.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._oilText = new u.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._coalText = new u.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._glassText = new u.ResourcePanelToolTipSingleLineText(new Library.CastleInterfaceElements.McToolTipSingleTextRegular());
    this._divider = new Library.CastleInterfaceElements.divider();
  };
  ResourcePanelToolTipSpecialButton.prototype.updateContent = function () {
    this._items.length = 0;
    this._divider.scaleX = 0.1;
    l.CastleTextFieldHelper.safeSetText(this._title.tf, "kingdomResource");
    l.CastleTextFieldHelper.safeSetText(this._helperText.tf, "click_overview");
    this._items.push(this._title);
    this._items.push(this._helperText);
    this._items.push(this._divider);
    this.addResourceItem(this._coalText, p.CollectableEnum.COAL);
    this.addResourceItem(this._oilText, p.CollectableEnum.OIL);
    this.addResourceItem(this._glassText, p.CollectableEnum.GLASS);
    this.addResourceItem(this._ironText, p.CollectableEnum.IRON);
  };
  ResourcePanelToolTipSpecialButton.prototype.addResourceItem = function (e, t) {
    var i = r.CastleModel.areaData.getActiveStorageItem(t).amount;
    if (i > 0) {
      var n = new t.dataClass();
      l.CastleTextFieldHelper.safeSetText(e.tf, "generic_amount_reward", [new s.LocalizedNumberVO(i, true, 0, false), a.Localize.text(n.getTooltipTextId())]);
      this._items.push(e);
    }
  };
  return ResourcePanelToolTipSpecialButton;
}(c.AResourcePanelToolTip);
exports.ResourcePanelToolTipSpecialButton = d;
var p = require("./12.js");
var h = require("./152.js");
o.classImplementsInterfaces(d, "Container");