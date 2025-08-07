Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = function (e) {
  function CastleConstructionItemsMainDialogProperties(t = a.int(r.CastleConstructionItemsMainDialog.SUBLAYER_ITEMS_ASSIGN), i = null, n = null, o = null) {
    var s = this;
    s._sublayer = 0;
    CONSTRUCTOR_HACK;
    (s = e.call(this) || this)._sublayer = t;
    s._itemSlot = i;
    s._buildingSelection = n;
    s._constructionItemRecipeVO = o;
    return s;
  }
  n.__extends(CastleConstructionItemsMainDialogProperties, e);
  Object.defineProperty(CastleConstructionItemsMainDialogProperties.prototype, "sublayer", {
    get: function () {
      return this._sublayer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleConstructionItemsMainDialogProperties.prototype, "buildingSelection", {
    get: function () {
      return this._buildingSelection;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleConstructionItemsMainDialogProperties.prototype, "itemSlot", {
    get: function () {
      return this._itemSlot;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleConstructionItemsMainDialogProperties.prototype, "constructionItemRecipeVO", {
    get: function () {
      return this._constructionItemRecipeVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleConstructionItemsMainDialogProperties.prototype.clear = function () {
    this._buildingSelection = null;
    this._itemSlot = null;
    this._constructionItemRecipeVO = null;
  };
  return CastleConstructionItemsMainDialogProperties;
}(o.BasicProperties);
exports.CastleConstructionItemsMainDialogProperties = s;
var r = require("./323.js");