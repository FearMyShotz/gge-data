Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./32.js");
var r = require("./31.js");
var l = require("./19.js");
var c = require("./4.js");
var u = require("./216.js");
var d = require("./40.js");
var p = require("./8.js");
var h = require("./990.js");
var g = createjs.MovieClip;
var C = createjs.Point;
var _ = function (e) {
  function FusionForgeHubDialogCatalystsListItem(t) {
    var i = e.call(this, new g()) || this;
    i._currencyVO = t;
    i.init();
    return i;
  }
  n.__extends(FusionForgeHubDialogCatalystsListItem, e);
  FusionForgeHubDialogCatalystsListItem.prototype.init = function () {
    this._clip = new o.GoodgameDisplayObjectClipExternal(FusionForgeHubDialogCatalystsListItem.ASSET_NAME, m.IsoHelper.view.getAssetFileURL(FusionForgeHubDialogCatalystsListItem.ASSET_FILE_NAME));
    this.disp.addChild(this._clip);
    var e = this.getItemMc();
    p.ButtonHelper.initButton(e.btn_add, -1, y.ClickFeedbackButtonBackground);
    this.update();
  };
  FusionForgeHubDialogCatalystsListItem.prototype.destroy = function () {
    this._clip = null;
    e.prototype.destroy.call(this);
  };
  FusionForgeHubDialogCatalystsListItem.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    f.CastleComponent.controller.addEventListener(s.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
  };
  FusionForgeHubDialogCatalystsListItem.prototype.removeEventListener = function () {
    f.CastleComponent.controller.removeEventListener(s.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    e.prototype.removeEventListener.call(this);
  };
  FusionForgeHubDialogCatalystsListItem.prototype.update = function () {
    var e = this.getItemMc();
    var t = new l.CollectableRenderOptions(l.CollectableRenderOptions.SET_BASIC, new C(93, 59));
    t.tooltip.useAmount = false;
    O.CollectableRenderHelper.displaySingleItemComplete(this, new r.CollectableRenderClips(e.mc_item).addInfoBtn(e.btn_info), this._currencyVO, t);
    u.ClientConstFusion.setCatalystTextfield(e.mc_item.txt_amount, this._currencyVO);
    e.mc_item.mc_empty.visible = this._currencyVO.amount <= 0;
  };
  FusionForgeHubDialogCatalystsListItem.prototype.getItemMc = function () {
    return this._clip.currentshownDisplayObject;
  };
  FusionForgeHubDialogCatalystsListItem.prototype.onClick = function (t) {
    if (p.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.getItemMc().btn_add:
          f.CastleComponent.dialogHandler.registerDialogs(E.DecorationForgeCatalystConversionDialog, new h.DecorationForgeCatalystConversionDialogProperties(this._currencyVO));
      }
    }
  };
  FusionForgeHubDialogCatalystsListItem.prototype.onCurrenciesUpdated = function (e) {
    this._currencyVO.amount = c.CastleModel.currencyData.getAmountById(this._currencyVO.id);
    this.update();
  };
  FusionForgeHubDialogCatalystsListItem.__initialize_static_members = function () {
    FusionForgeHubDialogCatalystsListItem.ASSET_NAME = "FusionForgeHub_Catalysts_Item";
    FusionForgeHubDialogCatalystsListItem.ASSET_FILE_NAME = "FusionForgeHub";
  };
  return FusionForgeHubDialogCatalystsListItem;
}(d.CastleItemRenderer);
exports.FusionForgeHubDialogCatalystsListItem = _;
var m = require("./46.js");
var f = require("./14.js");
var O = require("./25.js");
var E = require("./991.js");
var y = require("./121.js");
a.classImplementsInterfaces(_, "ICollectableRendererList");
_.__initialize_static_members();