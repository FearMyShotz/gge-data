Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./137.js");
var a = require("./4.js");
var s = require("./52.js");
var r = function (e) {
  function CollectableItemGenericCurrencyVO(t = -1, i = 0) {
    var n = e.call(this, i) || this;
    n._id = -1;
    n.id = t;
    return n;
  }
  n.__extends(CollectableItemGenericCurrencyVO, e);
  CollectableItemGenericCurrencyVO.prototype.parseServerObject = function (t) {
    e.prototype.parseServerObject.call(this, t);
    if (Array.isArray(t) && t.length >= 2) {
      this.amount = t[1];
    }
  };
  CollectableItemGenericCurrencyVO.prototype.updateCurrencyVO = function (e) {
    this._xmlCurrencyVO = a.CastleModel.currencyData.getXmlCurrencyById(e);
  };
  CollectableItemGenericCurrencyVO.prototype.getTooltipTextId = function () {
    return this.getNameTextId();
  };
  CollectableItemGenericCurrencyVO.prototype.getDescriptionTextId = function () {
    return "currency_description_" + this.getNameOrAssetName();
  };
  CollectableItemGenericCurrencyVO.prototype.getDescriptionTextParams = function () {
    if (o.TempServerHelper.tmpServerEvent != null && this.xmlCurrencyVO.id == o.TempServerHelper.tmpServerEvent.settingVO.boosterCurrencyID) {
      var t = 1;
      if (this.xmlCurrencyVO.id == s.ClientConstCurrency.ID_TONIC_BOOSTER) {
        t = 0.01;
      }
      return [o.TempServerHelper.tmpServerEvent.settingVO.boosterCurrencyValue * t];
    }
    return e.prototype.getDescriptionTextParams.call(this);
  };
  CollectableItemGenericCurrencyVO.prototype.getNameTextId = function () {
    return "currency_name_" + this.getNameOrAssetName();
  };
  CollectableItemGenericCurrencyVO.prototype.equals = function (t) {
    return e.prototype.equals.call(this, t) && t.id == this.id;
  };
  CollectableItemGenericCurrencyVO.prototype.clone = function () {
    var t = e.prototype.clone.call(this);
    t.id = this.id;
    return t;
  };
  CollectableItemGenericCurrencyVO.prototype.isCombineAbleWith = function (t) {
    return e.prototype.isCombineAbleWith.call(this, t) && t.id == this.id;
  };
  CollectableItemGenericCurrencyVO.prototype.isInIdRange = function (e) {
    return !!this._xmlCurrencyVO && s.ClientConstCurrency.isInIdRange(e, this._xmlCurrencyVO.id);
  };
  CollectableItemGenericCurrencyVO.prototype.getNameOrAssetName = function () {
    if (this._xmlCurrencyVO.assetName == "" || this._xmlCurrencyVO.assetName == null) {
      return this._xmlCurrencyVO.name;
    } else {
      return this._xmlCurrencyVO.assetName;
    }
  };
  Object.defineProperty(CollectableItemGenericCurrencyVO.prototype, "xmlCurrencyVO", {
    get: function () {
      return this._xmlCurrencyVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemGenericCurrencyVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (e) {
      this._id = e;
      this.updateCurrencyVO(this._id);
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemGenericCurrencyVO;
}(require("./861.js").ACollectableItemCurrencyVO);
exports.CollectableItemGenericCurrencyVO = r;