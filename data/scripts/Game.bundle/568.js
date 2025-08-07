Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./4.js");
var a = function (e) {
  function ACollectableItemGemVO(t, i = 1) {
    var n = this;
    n._id = -1;
    CONSTRUCTOR_HACK;
    (n = e.call(this, i) || this)._id = t;
    n.updateGemVO();
    return n;
  }
  n.__extends(ACollectableItemGemVO, e);
  ACollectableItemGemVO.prototype.updateGemVO = function () {
    this._gemVO = o.CastleModel.gemData.getGemVO(this.id);
  };
  ACollectableItemGemVO.prototype.getTooltipTextId = function () {
    return "gem_name";
  };
  ACollectableItemGemVO.prototype.getDescriptionTextId = function () {
    if (this.gemVO) {
      if (this.gemVO.isUnique) {
        return this.gemVO.extraText;
      } else {
        return this.gemVO.bonusDescriptionText;
      }
    } else {
      return "gem_short_info";
    }
  };
  ACollectableItemGemVO.prototype.getNameTextParams = function () {
    if (this.gemVO) {
      return [this.gemVO.level];
    } else {
      return e.prototype.getNameTextParams.call(this);
    }
  };
  ACollectableItemGemVO.prototype.getNameTextId = function () {
    if (this.gemVO) {
      return this.gemVO.nameString;
    } else {
      return e.prototype.getNameTextId.call(this);
    }
  };
  ACollectableItemGemVO.prototype.equals = function (t) {
    return e.prototype.equals.call(this, t) && this.id == t.id;
  };
  ACollectableItemGemVO.prototype.clone = function () {
    var t = e.prototype.clone.call(this);
    t.gemVO = this.gemVO;
    return t;
  };
  ACollectableItemGemVO.prototype.isCombineAbleWith = function (e) {
    return false;
  };
  Object.defineProperty(ACollectableItemGemVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (e) {
      this._id = e;
      this.updateGemVO();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemGemVO.prototype, "gemVO", {
    get: function () {
      return this._gemVO;
    },
    set: function (e) {
      this._gemVO = e;
      this._id = this.gemVO ? this.gemVO.id : -1;
    },
    enumerable: true,
    configurable: true
  });
  ACollectableItemGemVO.prototype.getSearchString = function () {
    var e = "";
    e += this.gemVO.nameString;
    e += this.gemVO.typeDescriptionText;
    e += this.gemVO.bonusDescriptionText;
    if (this.gemVO.setVO) {
      e += this.gemVO.setVO.name;
    }
    return e;
  };
  return ACollectableItemGemVO;
}(require("./96.js").ACollectableItemVO);
exports.ACollectableItemGemVO = a;