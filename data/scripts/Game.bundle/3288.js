Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./6.js");
var s = require("./4.js");
var r = function (e) {
  function CollectableItemMaterialBagVO(t = -1, i = 0) {
    var n = this;
    n._id = -1;
    CONSTRUCTOR_HACK;
    (n = e.call(this, i) || this)._id = t;
    n.updateMaterialBagVO();
    return n;
  }
  n.__extends(CollectableItemMaterialBagVO, e);
  CollectableItemMaterialBagVO.prototype.parseServerObject = function (t) {
    e.prototype.parseServerObject.call(this, t);
    this.id = parseInt(t[0]);
    this.amount = parseInt(t[1]);
  };
  CollectableItemMaterialBagVO.prototype.parseXmlObject = function (e) {
    var t = e.split("+");
    this.id = parseInt(t[0]);
    this.amount = parseInt(t[1]);
  };
  CollectableItemMaterialBagVO.prototype.updateMaterialBagVO = function () {
    this._materialBagVO = s.CastleModel.craftingMaterialData.craftingMaterialBags.get(this.id);
  };
  CollectableItemMaterialBagVO.prototype.getDescriptionTextId = function () {
    return "ciMaterialSack_short_info";
  };
  CollectableItemMaterialBagVO.prototype.getNameTextId = function () {
    if (this.materialBagVO) {
      return this.materialBagVO.nameTextID;
    } else {
      return e.prototype.getNameTextId.call(this);
    }
  };
  CollectableItemMaterialBagVO.prototype.getNameTextParams = function () {
    if (this._materialBagVO && this._materialBagVO.focused) {
      var t = c.CollectableHelper.createVO(l.CollectableEnum.GENERIC_CURRENCY, 0, this._materialBagVO.focusedMaterialContent.craftingMaterial.id);
      return [o.Localize.text(t.getNameTextId())];
    }
    return e.prototype.getNameTextParams.call(this);
  };
  CollectableItemMaterialBagVO.prototype.clone = function () {
    var t = e.prototype.clone.call(this);
    t.materialBagVO = this.materialBagVO;
    return t;
  };
  CollectableItemMaterialBagVO.prototype.isCombineAbleWith = function (t) {
    return e.prototype.isCombineAbleWith.call(this, t) && this.id == t.id;
  };
  Object.defineProperty(CollectableItemMaterialBagVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (e) {
      this._id = e;
      this.updateMaterialBagVO();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemMaterialBagVO.prototype, "materialBagVO", {
    get: function () {
      return this._materialBagVO;
    },
    set: function (e) {
      this._materialBagVO = e;
      this._id = a.int(this.materialBagVO ? this.materialBagVO.bagID : -1);
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemMaterialBagVO.__initialize_static_members = function () {
    CollectableItemMaterialBagVO.SERVER_KEY = "RB";
    CollectableItemMaterialBagVO.XML_KEY = "rewardBags";
  };
  return CollectableItemMaterialBagVO;
}(require("./96.js").ACollectableItemVO);
exports.CollectableItemMaterialBagVO = r;
var l = require("./12.js");
var c = require("./45.js");
r.__initialize_static_members();