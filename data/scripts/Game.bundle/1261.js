Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = require("./4.js");
var s = function (e) {
  function CollectableItemEventPackageVO(t = -1) {
    var i = this;
    i._id = -1;
    CONSTRUCTOR_HACK;
    (i = e.call(this, 1) || this).id = t;
    return i;
  }
  n.__extends(CollectableItemEventPackageVO, e);
  CollectableItemEventPackageVO.prototype.updatePackageVO = function () {
    this._eventPackageVO = a.CastleModel.eventPackageData.getEventPackageByID(this.id);
  };
  CollectableItemEventPackageVO.prototype.clone = function () {
    var t = e.prototype.clone.call(this);
    t.eventPackageVO = this.eventPackageVO;
    return t;
  };
  CollectableItemEventPackageVO.prototype.getTooltipTextId = function () {
    if (this.eventPackageVO) {
      return this.eventPackageVO.nameTextID;
    } else {
      return e.prototype.getTooltipTextId.call(this);
    }
  };
  CollectableItemEventPackageVO.prototype.getDescriptionTextId = function () {
    if (this.eventPackageVO) {
      return this.eventPackageVO.descriptionTextID;
    } else {
      return e.prototype.getDescriptionTextId.call(this);
    }
  };
  CollectableItemEventPackageVO.prototype.getDescriptionTextParams = function () {
    if (this.eventPackageVO) {
      return this.eventPackageVO.descriptionParams;
    } else {
      return e.prototype.getDescriptionTextParams.call(this);
    }
  };
  CollectableItemEventPackageVO.prototype.getNameTextId = function () {
    if (this.eventPackageVO) {
      return this.eventPackageVO.nameTextID;
    } else {
      return e.prototype.getNameTextId.call(this);
    }
  };
  CollectableItemEventPackageVO.prototype.getNameTextParams = function () {
    if (this.eventPackageVO) {
      return this.eventPackageVO.nameParams;
    } else {
      return e.prototype.getNameTextParams.call(this);
    }
  };
  CollectableItemEventPackageVO.prototype.isCombineAbleWith = function (e) {
    return false;
  };
  Object.defineProperty(CollectableItemEventPackageVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (e) {
      this._id = e;
      this.updatePackageVO();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemEventPackageVO.prototype, "eventPackageVO", {
    get: function () {
      return this._eventPackageVO;
    },
    set: function (e) {
      this._eventPackageVO = e;
      this._id = o.int(this.eventPackageVO ? this.eventPackageVO.packageID : -1);
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemEventPackageVO.__initialize_static_members = function () {
    CollectableItemEventPackageVO.SERVER_KEY = "";
  };
  return CollectableItemEventPackageVO;
}(require("./96.js").ACollectableItemVO);
exports.CollectableItemEventPackageVO = s;
s.__initialize_static_members();