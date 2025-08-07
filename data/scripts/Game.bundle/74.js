Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = function () {
  function CollectableTypeVO(e = null, t = n.int(-Number.MAX_VALUE)) {
    this._id = 0;
    this._type = e || a.CollectableEnum.UNKNOWN;
    this._id = t;
  }
  CollectableTypeVO.prototype.initByCollectable = function (e, t = true) {
    if (!e) {
      this._type = a.CollectableEnum.UNKNOWN;
      if (t) {
        this._id = n.int(-Number.MAX_VALUE);
      }
    }
    this._type = e.itemType;
    this._id = n.int(-Number.MAX_VALUE);
    if (t && "id" in e) {
      this._id = n.int(e.id);
    }
    return this;
  };
  CollectableTypeVO.prototype.hasType = function (e) {
    return !!e && e.itemType == this.type && (!("id" in e) || this.id == -Number.MAX_VALUE || e.id == this.id);
  };
  CollectableTypeVO.prototype.isSameAs = function (e) {
    return this.type == e.type && this.id == e.id;
  };
  Object.defineProperty(CollectableTypeVO.prototype, "type", {
    get: function () {
      return this._type;
    },
    set: function (e) {
      this._type = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableTypeVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (e) {
      this._id = e;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableTypeVO;
}();
exports.CollectableTypeVO = o;
var a = require("./12.js");