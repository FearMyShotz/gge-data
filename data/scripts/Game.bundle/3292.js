Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Point;
var o = function () {
  function MaterialBagTooltip() {
    this.headerHeight = NaN;
    this.amount = 0;
  }
  Object.defineProperty(MaterialBagTooltip.prototype, "disp", {
    get: function () {
      this._disp ||= new Library.CastleInterfaceElements.MaterialBag_ToolTip();
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  MaterialBagTooltip.prototype.initToolTip = function (e, t = 1) {
    this.materialBagVO = e;
    this.amount = t;
    this.init();
    this.updateTooltipContent();
    this.arrangeElements();
  };
  MaterialBagTooltip.prototype.init = function () {
    if (this._renderer) {
      this._renderer.destroy();
    }
    this._renderer = new r.CollectableRenderer(new g.CollectableRenderClips(this.disp.mc_focused), new C.CollectableRenderOptions(C.CollectableRenderOptions.ICON, new n(30, 30)));
    this._contentTexts = [];
    MaterialBagTooltip.textFieldManager.registerTextField(this.disp.mc_focused.txt_guaranteed, new p.LocalizedTextVO("ciMaterialSack_tooltip_guaranteed"));
    MaterialBagTooltip.textFieldManager.registerTextField(this.disp.mc_content.txt_possible, new p.LocalizedTextVO("ciMaterialSack_tooltip_possible"));
    this._itxt_title = MaterialBagTooltip.textFieldManager.registerTextField(this.disp.mc_header.txt_title, new h.TextVO(""));
    this._itxt_desc = MaterialBagTooltip.textFieldManager.registerTextField(this.disp.mc_header.txt_desc, new p.LocalizedTextVO("ciMaterialSack_tooltip_minimum"));
    this._itxt_focusedAmount = MaterialBagTooltip.textFieldManager.registerTextField(this.disp.mc_focused.txt_focusedAmount, new p.LocalizedTextVO("ciMaterialSack_tooltip_focused"));
    for (var e = 0; e < MaterialBagTooltip.CONTENT_MAX; e++) {
      var t = this.disp.mc_content["txt_mat_" + e];
      this._contentTexts[e] = MaterialBagTooltip.textFieldManager.registerTextField(t, new p.LocalizedTextVO(""));
      this._contentTexts[e].autoFitToBounds = true;
    }
  };
  MaterialBagTooltip.prototype.updateTooltipContent = function () {
    if (this.materialBagVO.focused) {
      this.headerHeight = this.updateHeader();
      this.disp.mc_focused.visible = true;
      var e = this.materialBagVO.focusedMaterialContent;
      var t = s.CollectableHelper.createVO(a.CollectableEnum.GENERIC_CURRENCY, 0, e.craftingMaterial.id);
      this._itxt_focusedAmount.textContentVO.textReplacements = [e.minValue, e.maxValue, u.Localize.text(t.getNameTextId())];
      this._itxt_focusedAmount.color = l.CraftingMaterialBagVO.RARENESS_COLORS[e.craftingMaterial.rareness - 1];
      this._renderer.updateWithNewVO(t);
    } else {
      this.headerHeight = this.updateHeader();
      this.disp.mc_focused.visible = false;
    }
    var i = this.materialBagVO.getContent();
    for (var n = 0; n < MaterialBagTooltip.CONTENT_MAX; n++) {
      if (i.length > n) {
        this._contentTexts[n].textContentVO.textId = s.CollectableHelper.createVO(a.CollectableEnum.GENERIC_CURRENCY, 0, i[n].craftingMaterial.id).getNameTextId();
        this._contentTexts[n].color = l.CraftingMaterialBagVO.RARENESS_COLORS[i[n].craftingMaterial.rareness - 1];
        this._contentTexts[n].visible = true;
      } else {
        this._contentTexts[n].visible = false;
      }
    }
  };
  MaterialBagTooltip.prototype.updateHeader = function () {
    var e = this.materialBagVO.nameTextID;
    var t = this.materialBagVO.focused ? [u.Localize.text(s.CollectableHelper.createVO(a.CollectableEnum.GENERIC_CURRENCY, 0, this.materialBagVO.focusedMaterialContent.craftingMaterial.id).getNameTextId())] : null;
    var i = u.Localize.text(e, t);
    this._itxt_title.textContentVO.stringValue = this.amount > 1 ? u.Localize.text("generic_amount_reward", [new d.LocalizedNumberVO(this.amount), i]) : i;
    this._itxt_title.color = l.CraftingMaterialBagVO.RARENESS_COLORS[this.materialBagVO.rareness - 1];
    this._itxt_desc.textContentVO.textReplacements = [this.materialBagVO.minMaterials];
    var n = NaN;
    n = this.disp.mc_header.line1.y = this._itxt_title.textHeight + MaterialBagTooltip.MC_GAP;
    n = this._itxt_desc.y = n + this.disp.mc_header.line1.height + MaterialBagTooltip.MC_GAP;
    return (n = this._disp.mc_header.line2.y = n + this._itxt_desc.textHeight + MaterialBagTooltip.MC_GAP) + this._disp.mc_header.line2.height;
  };
  MaterialBagTooltip.prototype.arrangeElements = function () {
    var e = MaterialBagTooltip.CONTENT_LINES - Math.ceil(this.materialBagVO.getContent().length / MaterialBagTooltip.MATERIALS_PER_LINE);
    var t = this._contentTexts[0].textHeight;
    var i = this.disp.mc_content.y = e * t - this.disp.mc_content.height - MaterialBagTooltip.PADDING;
    if (this.materialBagVO.focused) {
      i = this.disp.mc_focused.y = i - MaterialBagTooltip.MC_GAP - this.disp.mc_focused.height;
    }
    i = this.disp.mc_header.y = i - MaterialBagTooltip.MC_GAP - this.headerHeight;
    this.disp.bg.height = Math.abs(i - MaterialBagTooltip.PADDING);
  };
  Object.defineProperty(MaterialBagTooltip, "textFieldManager", {
    get: function () {
      return c.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  MaterialBagTooltip.__initialize_static_members = function () {
    MaterialBagTooltip.CONTENT_MAX = 12;
    MaterialBagTooltip.CONTENT_LINES = 4;
    MaterialBagTooltip.MATERIALS_PER_LINE = 3;
    MaterialBagTooltip.PADDING = 8;
    MaterialBagTooltip.MC_GAP = 2;
  };
  return MaterialBagTooltip;
}();
exports.MaterialBagTooltip = o;
var a = require("./12.js");
var s = require("./45.js");
var r = require("./186.js");
var l = require("./1056.js");
var c = require("./2.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./31.js");
var C = require("./19.js");
o.__initialize_static_members();