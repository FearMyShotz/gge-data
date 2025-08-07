Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./6.js");
var s = require("./4.js");
var r = function (e) {
  function ACollectableItemEquipmentVO(t = 0) {
    var i = this;
    i._id = -1;
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(ACollectableItemEquipmentVO, e);
  ACollectableItemEquipmentVO.prototype.updateEquipmentVO = function () {
    this.equipmentVO = s.CastleModel.equipData.getEquipmentByUniqueID(this.id, true);
  };
  ACollectableItemEquipmentVO.prototype.equals = function (t) {
    return e.prototype.equals.call(this, t) && this.id == t.id;
  };
  ACollectableItemEquipmentVO.prototype.clone = function () {
    var t = e.prototype.clone.call(this);
    t.equipmentVO = this.equipmentVO;
    return t;
  };
  ACollectableItemEquipmentVO.prototype.getDescriptionTextId = function () {
    if (this.equipmentVO && this.equipmentVO.visualRareID == o.EquipmentConst.RARENESS_UNIQUE) {
      return this.equipmentVO.extraTextId;
    }
    return "randomEquipment_short_info";
  };
  ACollectableItemEquipmentVO.prototype.getNameTextId = function () {
    if (this.equipmentVO) {
      return this.equipmentVO.nameString;
    } else {
      return e.prototype.getNameTextId.call(this);
    }
  };
  ACollectableItemEquipmentVO.prototype.isCombineAbleWith = function (e) {
    return false;
  };
  Object.defineProperty(ACollectableItemEquipmentVO.prototype, "equipmentVO", {
    get: function () {
      return this._equipmentVO;
    },
    set: function (e) {
      this._equipmentVO = e;
      this._id = a.int(e ? e.uniqueID : -1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemEquipmentVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (e) {
      this._id = e;
      this.updateEquipmentVO();
    },
    enumerable: true,
    configurable: true
  });
  ACollectableItemEquipmentVO.prototype.getSearchString = function () {
    var e = "";
    e += this.equipmentVO.nameString;
    e += this.equipmentVO.typeDescriptionText;
    e += this.equipmentVO.bonusDescriptionText;
    if (this.equipmentVO.gemVO) {
      e += this.equipmentVO.gemVO.bonusDescriptionText;
    }
    if (this.equipmentVO.setVO) {
      e += this.equipmentVO.setVO.name;
    }
    return e;
  };
  return ACollectableItemEquipmentVO;
}(require("./96.js").ACollectableItemVO);
exports.ACollectableItemEquipmentVO = r;