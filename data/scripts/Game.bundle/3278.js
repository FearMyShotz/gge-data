Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = require("./4.js");
var s = function (e) {
  function CollectableItemCrestSymbolVO(t = 0) {
    var i = this;
    i._id = -1;
    CONSTRUCTOR_HACK;
    (i = e.call(this, 1) || this).id = t;
    return i;
  }
  n.__extends(CollectableItemCrestSymbolVO, e);
  CollectableItemCrestSymbolVO.prototype.parseServerObject = function (t) {
    e.prototype.parseServerObject.call(this, t);
    this.id = o.int(t);
  };
  CollectableItemCrestSymbolVO.prototype.parseXmlObject = function (e) {
    this.id = o.int(e);
  };
  CollectableItemCrestSymbolVO.prototype.updateCrestSymbolVO = function () {
    this._crestSymbolVO = a.CastleModel.crestSymbolData.getCrestSymbolVOByID(this._id);
  };
  CollectableItemCrestSymbolVO.prototype.clone = function () {
    var t = e.prototype.clone.call(this);
    t.crestSymbolVO = this.crestSymbolVO;
    return t;
  };
  CollectableItemCrestSymbolVO.prototype.isCombineAbleWith = function (e) {
    return false;
  };
  Object.defineProperty(CollectableItemCrestSymbolVO.prototype, "crestSymbolVO", {
    get: function () {
      return this._crestSymbolVO;
    },
    set: function (e) {
      this._crestSymbolVO = e;
      this._id = o.int(this.crestSymbolVO ? this.crestSymbolVO.id : -1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemCrestSymbolVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (e) {
      this._id = e;
      this.updateCrestSymbolVO();
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemCrestSymbolVO.__initialize_static_members = function () {
    CollectableItemCrestSymbolVO.SERVER_KEY = "CS";
    CollectableItemCrestSymbolVO.XML_KEY = "crestSymbolIDs";
  };
  return CollectableItemCrestSymbolVO;
}(require("./96.js").ACollectableItemVO);
exports.CollectableItemCrestSymbolVO = s;
s.__initialize_static_members();