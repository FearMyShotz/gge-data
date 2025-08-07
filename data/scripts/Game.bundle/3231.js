Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./2.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./52.js");
var d = require("./24.js");
var p = require("./41.js");
var h = function (e) {
  function CollectableItemGenericCurrencyVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemGenericCurrencyVE, e);
  CollectableItemGenericCurrencyVE.prototype.iconCreate = function () {
    var e = this.getAssetName();
    this.dispCreator.addClip(new d.CastleGoodgameExternalClip(e, C.IsoHelper.view.getAssetFileURL(e), null, 0, false));
  };
  CollectableItemGenericCurrencyVE.prototype.updateNumberTextfield = function () {
    if (this.dispCreator && this.dispCreator.clipList && this.dispCreator.clipList.length > 0) {
      var e = this.dispCreator.clipList[0].currentshownDisplayObject.txt_number;
      if (e) {
        g.CastleComponent.textFieldManager.registerTextField(e, new c.LocalizedNumberVO(this.currencyVO.xmlCurrencyVO.tier), new o.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
        if (this.dispCreator.dispContainer.cacheCanvas) {
          p.CastleMovieClipHelper.uncacheSafe(this.dispCreator.dispContainer);
          this.dispCreator.updateCache();
        }
      }
    }
  };
  CollectableItemGenericCurrencyVE.prototype.textfieldUpdate = function () {
    if (this.currencyVO.id == u.ClientConstCurrency.ID_STATUETTE_MALUS) {
      if (this.vo.amount == 0) {
        this.textfieldSetText(l.Localize.text(r.GenericTextIds.VALUE_PERCENTAGE, [this.vo.amount]));
      } else {
        this.textfieldSetText(l.Localize.text(r.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [this.vo.amount]));
      }
    } else {
      e.prototype.textfieldUpdate.call(this);
    }
  };
  CollectableItemGenericCurrencyVE.prototype.getAssetName = function () {
    var e = this.currencyVO.xmlCurrencyVO.assetName;
    if (e == null || e == "") {
      e = this.currencyVO.xmlCurrencyVO.name;
    }
    var t = this.options && this.options.icon.useDropShadowIcon ? "_DropShadow" : "";
    if (this.options) {
      if (this.options.icon.dimension.y <= 20 && a.BasicModel.basicLoaderData.isItemAssetVersioned("Collectable_Currency_" + e + "_small")) {
        return "Collectable_Currency_" + e + "_small";
      }
      if (this.options.icon.dimension.y <= 30 && a.BasicModel.basicLoaderData.isItemAssetVersioned("Collectable_Currency_" + e + "_medium")) {
        return "Collectable_Currency_" + e + "_medium";
      }
    }
    if (a.BasicModel.basicLoaderData.isItemAssetVersioned("Collectable_Currency_" + e + t)) {
      return "Collectable_Currency_" + e + t;
    } else {
      return "Collectable_Currency_" + e;
    }
  };
  CollectableItemGenericCurrencyVE.prototype.onAllDispClipsLoaded = function (t = null) {
    e.prototype.onAllDispClipsLoaded.call(this, t);
    this.updateNumberTextfield();
  };
  Object.defineProperty(CollectableItemGenericCurrencyVE.prototype, "currencyVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemGenericCurrencyVE.prototype.storageBarScale = function () {
    if (this.currencyVO.xmlCurrencyVO.softCap > -1) {
      return this.currencyVO.amount / this.currencyVO.xmlCurrencyVO.softCap;
    } else {
      return 0;
    }
  };
  return CollectableItemGenericCurrencyVE;
}(require("./1050.js").ACollectableItemCurrencyVE);
exports.CollectableItemGenericCurrencyVE = h;
var g = require("./14.js");
var C = require("./46.js");
s.classImplementsInterfaces(h, "ICollectableRendererList");