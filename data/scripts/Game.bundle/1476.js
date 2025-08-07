Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = require("./4.js");
var s = function (e) {
  function CollectableItemConstructionItemBlueprintVO(t = -1) {
    var i = this;
    i._id = -1;
    CONSTRUCTOR_HACK;
    (i = e.call(this, 1) || this).id = t;
    return i;
  }
  n.__extends(CollectableItemConstructionItemBlueprintVO, e);
  CollectableItemConstructionItemBlueprintVO.prototype.updateBlueprintVO = function () {
    this._blueprintVO = a.CastleModel.constructionItemBlueprintData.blueprints.get(this._id);
  };
  CollectableItemConstructionItemBlueprintVO.prototype.getNameTextId = function () {
    if (this.blueprintVO) {
      return this.blueprintVO.nameId;
    } else {
      return e.prototype.getNameTextId.call(this);
    }
  };
  CollectableItemConstructionItemBlueprintVO.prototype.clone = function () {
    var t = e.prototype.clone.call(this);
    t.blueprintVO = this.blueprintVO;
    return t;
  };
  CollectableItemConstructionItemBlueprintVO.prototype.isCombineAbleWith = function (e) {
    return false;
  };
  Object.defineProperty(CollectableItemConstructionItemBlueprintVO.prototype, "blueprintVO", {
    get: function () {
      return this._blueprintVO;
    },
    set: function (e) {
      this._blueprintVO = e;
      this._id = o.int(this.blueprintVO ? this.blueprintVO.id : -1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemConstructionItemBlueprintVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (e) {
      this._id = e;
      this.updateBlueprintVO();
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemConstructionItemBlueprintVO.__initialize_static_members = function () {
    CollectableItemConstructionItemBlueprintVO.SERVER_KEY = "CIBP";
  };
  return CollectableItemConstructionItemBlueprintVO;
}(require("./96.js").ACollectableItemVO);
exports.CollectableItemConstructionItemBlueprintVO = s;
s.__initialize_static_members();