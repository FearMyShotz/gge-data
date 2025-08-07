Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = require("./4.js");
var s = function (e) {
  function CollectableItemUnitVO(t = -1, i = 0) {
    var n = this;
    n._id = -1;
    CONSTRUCTOR_HACK;
    (n = e.call(this, i) || this).id = t;
    return n;
  }
  n.__extends(CollectableItemUnitVO, e);
  CollectableItemUnitVO.prototype.parseServerObject = function (t) {
    e.prototype.parseServerObject.call(this, t);
    this.id = o.int(t[0]);
    this.amount = t[1];
  };
  CollectableItemUnitVO.prototype.parseXmlObject = function (e) {
    var t = e.split("+");
    this.id = o.int(t[0]);
    this.amount = o.int(t[1]);
  };
  CollectableItemUnitVO.prototype.updateUnitVO = function () {
    this._unitVO = a.CastleModel.wodData.voSubList(r.CastleWodData.TYPE_UNIT).get(this.id);
  };
  CollectableItemUnitVO.prototype.clone = function () {
    var t = e.prototype.clone.call(this);
    t.unitVO = this.unitVO;
    return t;
  };
  CollectableItemUnitVO.prototype.getDescriptionTextId = function () {
    if (this.unitVO) {
      return this.unitVO.getShortInfoString();
    } else {
      return e.prototype.getDescriptionTextId.call(this);
    }
  };
  CollectableItemUnitVO.prototype.getNameTextId = function () {
    if (this.unitVO) {
      return this.unitVO.getNameString();
    } else {
      return e.prototype.getNameTextId.call(this);
    }
  };
  CollectableItemUnitVO.prototype.isCombineAbleWith = function (t) {
    return e.prototype.isCombineAbleWith.call(this, t) && this.id == t.id;
  };
  Object.defineProperty(CollectableItemUnitVO.prototype, "unitVO", {
    get: function () {
      return this._unitVO;
    },
    set: function (e) {
      this._unitVO = e;
      this._id = o.int(this._unitVO ? this._unitVO.wodId : -1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemUnitVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (e) {
      this._id = e;
      this.updateUnitVO();
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemUnitVO.__initialize_static_members = function () {
    CollectableItemUnitVO.SERVER_KEY = "U";
    CollectableItemUnitVO.XML_KEY = "units";
  };
  return CollectableItemUnitVO;
}(require("./96.js").ACollectableItemVO);
exports.CollectableItemUnitVO = s;
var r = require("./56.js");
s.__initialize_static_members();