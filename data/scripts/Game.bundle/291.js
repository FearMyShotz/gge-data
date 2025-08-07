Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = require("./4.js");
var s = function (e) {
  function CollectableItemBuildingVO(t = -1, i = 1) {
    var n = this;
    n._id = -1;
    CONSTRUCTOR_HACK;
    (n = e.call(this, i) || this)._id = t;
    n.updateBuildingVO();
    return n;
  }
  n.__extends(CollectableItemBuildingVO, e);
  CollectableItemBuildingVO.prototype.parseServerObject = function (t) {
    e.prototype.parseServerObject.call(this, t);
    if (Array.isArray(t)) {
      this.id = o.int(t[0]);
      this.amount = o.int(t[1]);
    } else {
      this.id = o.int(t);
    }
  };
  CollectableItemBuildingVO.prototype.parseXmlObject = function (e) {
    this.id = o.int(e);
  };
  CollectableItemBuildingVO.prototype.updateBuildingVO = function () {
    this._buildingVO = this.id == -1 ? null : a.CastleModel.wodData.voSubList(r.CastleWodData.TYPE_BUILDING).get(this.id);
  };
  CollectableItemBuildingVO.prototype.clone = function () {
    var t = e.prototype.clone.call(this);
    t.buildingVO = this.buildingVO;
    return t;
  };
  CollectableItemBuildingVO.prototype.getDescriptionTextId = function () {
    if (this.buildingVO) {
      return this.buildingVO.getShortInfoString();
    } else {
      return e.prototype.getDescriptionTextId.call(this);
    }
  };
  CollectableItemBuildingVO.prototype.getNameTextId = function () {
    if (this.buildingVO) {
      return this.buildingVO.getNameString();
    } else {
      return e.prototype.getNameTextId.call(this);
    }
  };
  CollectableItemBuildingVO.prototype.isCombineAbleWith = function (t) {
    return e.prototype.isCombineAbleWith.call(this, t) && t._buildingVO.wodId == this._buildingVO.wodId;
  };
  CollectableItemBuildingVO.prototype.equals = function (t) {
    if (e.prototype.equals.call(this, t)) {
      var i = t;
      if (this._id == i.id) {
        if (this._buildingVO && i.buildingVO) {
          if (!isNaN(this._buildingVO.objectId) && this._buildingVO.objectId > 0 && !isNaN(i.buildingVO.objectId) && i.buildingVO.objectId > 0) {
            return this._buildingVO.objectId == i.buildingVO.objectId;
          }
          var n = this._buildingVO;
          var o = i.buildingVO;
          if (n && o) {
            if (n.isUnique() || o.isUnique()) {
              return n.uniqueBuildingId == o.uniqueBuildingId;
            } else {
              return !n.isUnique() || !o.isUnique();
            }
          }
        } else if (!this._buildingVO && !i.buildingVO) {
          return true;
        }
      }
    }
    return false;
  };
  Object.defineProperty(CollectableItemBuildingVO.prototype, "buildingVO", {
    get: function () {
      return this._buildingVO;
    },
    set: function (e) {
      this._buildingVO = e;
      this._id = o.int(this._buildingVO ? this._buildingVO.wodId : -1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemBuildingVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (e) {
      this._id = e;
      this.updateBuildingVO();
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemBuildingVO.SERVER_KEY = "D";
  CollectableItemBuildingVO.XML_KEY = ["decoWodID", "buildingWodID"];
  return CollectableItemBuildingVO;
}(require("./96.js").ACollectableItemVO);
exports.CollectableItemBuildingVO = s;
var r = require("./56.js");