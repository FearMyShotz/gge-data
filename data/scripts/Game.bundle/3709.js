Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = function (e) {
  function CastleSendGoodsKingdomVO(t, i, n, o, a) {
    var s = e.call(this, CastleSendGoodsKingdomVO.getSendableResourceList(t, n, o, i), Number.MAX_VALUE, null) || this;
    s._taxRate = NaN;
    s._isSubscriptionBuffed = false;
    s._taxRate = i;
    s._targetResources = n;
    s._storageSpace = o;
    s._isSubscriptionBuffed = a;
    return s;
  }
  n.__extends(CastleSendGoodsKingdomVO, e);
  CastleSendGoodsKingdomVO.getSendableResourceList = function (e, t, i, n) {
    var a;
    var l = new r.CollectableList();
    for (var c = 0; c < e.length; c++) {
      a = e.getItemByIndexSave(c);
      if (t.getItemByType(a.itemType) != null) {
        var u = o.int(Math.min(Math.max(0, (i.getAmountOrDefaultByType(a.itemType) - t.getAmountOrDefaultByType(a.itemType)) / n), a.amount));
        l.addItem(s.CollectableHelper.createVO(a.itemType, u));
      }
    }
    return l;
  };
  Object.defineProperty(CastleSendGoodsKingdomVO.prototype, "taxRate", {
    get: function () {
      return this._taxRate;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSendGoodsKingdomVO.prototype, "targetResources", {
    get: function () {
      return this._targetResources;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSendGoodsKingdomVO.prototype, "storageSpace", {
    get: function () {
      return this._storageSpace;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSendGoodsKingdomVO.prototype, "isSubscriptionBuffed", {
    get: function () {
      return this._isSubscriptionBuffed;
    },
    enumerable: true,
    configurable: true
  });
  return CastleSendGoodsKingdomVO;
}(require("./1345.js").CastleSendGoodsVO);
exports.CastleSendGoodsKingdomVO = a;
var s = require("./45.js");
var r = require("./48.js");