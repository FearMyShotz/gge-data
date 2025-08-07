Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = require("./4.js");
var s = function (e) {
  function CollectableItemConstructionItemVO(t = -1, i = 1) {
    var n = this;
    n._id = -1;
    CONSTRUCTOR_HACK;
    (n = e.call(this, i) || this).id = t;
    return n;
  }
  n.__extends(CollectableItemConstructionItemVO, e);
  CollectableItemConstructionItemVO.prototype.equals = function (t) {
    var i = t;
    return e.prototype.equals.call(this, t) && !!i && i.constructionItemVO.groupId == this.constructionItemVO.groupId && i.constructionItemVO.rarity == this.constructionItemVO.rarity && i.constructionItemVO.name == this.constructionItemVO.name;
  };
  CollectableItemConstructionItemVO.prototype.parseServerObject = function (t) {
    e.prototype.parseServerObject.call(this, t);
    this.id = o.int(t);
  };
  CollectableItemConstructionItemVO.prototype.parseXmlObject = function (e) {
    if (e.indexOf("+") > -1) {
      var t = e.split("+");
      this.id = o.int(t[0]);
      this.amount = o.int(t[1]);
    } else {
      this.id = o.int(e);
    }
  };
  CollectableItemConstructionItemVO.prototype.updateItemVO = function () {
    this._constructionItemVO = a.CastleModel.constructionItemData.getConstructionItemVO(this.id);
  };
  CollectableItemConstructionItemVO.prototype.clone = function () {
    var t = e.prototype.clone.call(this);
    t.constructionItemVO = this.constructionItemVO;
    return t;
  };
  CollectableItemConstructionItemVO.prototype.getTooltipTextId = function () {
    if (this.constructionItemVO) {
      return this.constructionItemVO.nameTextId;
    } else {
      return e.prototype.getTooltipTextId.call(this);
    }
  };
  CollectableItemConstructionItemVO.prototype.getDescriptionTextId = function () {
    if (this.constructionItemVO) {
      return this.constructionItemVO.descriptionTextId;
    } else {
      return e.prototype.getDescriptionTextId.call(this);
    }
  };
  CollectableItemConstructionItemVO.prototype.getNameTextId = function () {
    if (this.constructionItemVO) {
      return this.constructionItemVO.nameTextId;
    } else {
      return e.prototype.getNameTextId.call(this);
    }
  };
  CollectableItemConstructionItemVO.prototype.isCombineAbleWith = function (t) {
    return e.prototype.isCombineAbleWith.call(this, t) && this.id == t.id;
  };
  Object.defineProperty(CollectableItemConstructionItemVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (e) {
      this._id = e;
      this.updateItemVO();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemConstructionItemVO.prototype, "constructionItemVO", {
    get: function () {
      return this._constructionItemVO;
    },
    set: function (e) {
      this._constructionItemVO = e;
      this._id = o.int(this.constructionItemVO ? this.constructionItemVO.id : -1);
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemConstructionItemVO.SERVER_KEY = "CI";
  CollectableItemConstructionItemVO.XML_KEY = "constructionItemIDs";
  return CollectableItemConstructionItemVO;
}(require("./96.js").ACollectableItemVO);
exports.CollectableItemConstructionItemVO = s;