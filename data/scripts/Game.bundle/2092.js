Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./16.js");
var h = require("./26.js");
var g = require("./4.js");
var C = require("./24.js");
var _ = function (e) {
  function CastleStandardPayYesNoDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleStandardPayYesNoDialog.NAME) || this;
  }
  n.__extends(CastleStandardPayYesNoDialog, e);
  CastleStandardPayYesNoDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.initBasicButtons([this.dialogDisp.btn_yes, this.dialogDisp.btn_close, this.dialogDisp.btn_no]);
    var t = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new d.TextVO(this.standardDialogProperties.copy));
    var i = this.textFieldManager.registerTextField(this.dialogDisp.mc_cost.txt_value, new u.LocalizedNumberVO(this.resourceCostForSkip));
    this.dialogDisp.mc_cost.toolTipText = "gold";
    this.dialogDisp.mc_cost.mouseChildren = false;
    t.autoFitToBounds = true;
    g.CastleModel.specialEventData.addEventListener(h.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    g.CastleModel.specialEventData.addEventListener(h.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventAdded));
    i.color = g.CastleModel.currencyData.c2Amount >= this.resourceCostForSkip ? p.ClientConstColor.GENERIC_BLACK : p.ClientConstColor.GENERIC_RED;
    s.MovieClipHelper.clearMovieClip(this.dialogDisp.placeholder);
    if (this.standardDialogProperties.characterName != "") {
      var n = new C.CastleGoodgameExternalClip(this.standardDialogProperties.characterName, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.standardDialogProperties.characterName), null, 0, false);
      n.clipSizeComponent = new a.ClipSizeComponent(75, 75);
      this.dialogDisp.placeholder.addChild(n);
    }
  };
  Object.defineProperty(CastleStandardPayYesNoDialog.prototype, "resourceCostForSkip", {
    get: function () {
      return c.ResourceConst.getC2PriceForResources(this.standardDialogProperties.args);
    },
    enumerable: true,
    configurable: true
  });
  CastleStandardPayYesNoDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_yes:
        this.hide();
        if (this.standardDialogProperties.functionYes != null) {
          this.standardDialogProperties.functionYes(null);
        }
        break;
      case this.dialogDisp.btn_close:
        this.hide();
        if (this.standardDialogProperties.functionClose != null) {
          this.standardDialogProperties.functionClose(null);
        }
        break;
      case this.dialogDisp.btn_no:
        this.hide();
        if (this.standardDialogProperties.functionNo != null) {
          this.standardDialogProperties.functionNo(null);
        }
    }
  };
  CastleStandardPayYesNoDialog.prototype.onEventAdded = function (e) {
    if (e.specialEventVO.eventId == l.EventConst.EVENTTYPE_MERCHANT || e.specialEventVO.eventId == l.EventConst.EVENTTYPE_MERCHANT_FACTION) {
      this.hide();
    }
  };
  CastleStandardPayYesNoDialog.prototype.onEventRemoved = function (e) {
    if (e.specialEventVO.eventId == l.EventConst.EVENTTYPE_MERCHANT || e.specialEventVO.eventId == l.EventConst.EVENTTYPE_MERCHANT_FACTION) {
      this.hide();
    }
  };
  CastleStandardPayYesNoDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    g.CastleModel.specialEventData.removeEventListener(h.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    g.CastleModel.specialEventData.removeEventListener(h.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventAdded));
  };
  Object.defineProperty(CastleStandardPayYesNoDialog.prototype, "standardDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleStandardPayYesNoDialog.__initialize_static_members = function () {
    CastleStandardPayYesNoDialog.NAME = "CastleStandardPayYesNoEx";
  };
  return CastleStandardPayYesNoDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleStandardPayYesNoDialog = _;
r.classImplementsInterfaces(_, "ICollectableRendererList");
_.__initialize_static_members();