Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./45.js");
var s = function (e) {
  function CollectableItemUnlockVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemUnlockVE, e);
  CollectableItemUnlockVE.prototype.init = function (t, i) {
    e.prototype.init.call(this, t, i);
    this._collectableVE = a.CollectableHelper.createVE(this.itemUnlockedVO.collectableVO, i);
    this.iconContainer.addChild(this.collectableVE.iconContainer);
  };
  CollectableItemUnlockVE.prototype.destroy = function () {
    if (this.collectableVE) {
      this.collectableVE.destroy();
      this._collectableVE = null;
    }
    e.prototype.destroy.call(this);
  };
  CollectableItemUnlockVE.prototype.iconUpdate = function () {
    e.prototype.iconUpdate.call(this);
    if (this.collectableVE) {
      this.collectableVE.iconUpdate();
    }
  };
  CollectableItemUnlockVE.prototype.iconDestroy = function () {
    if (this.collectableVE) {
      this.collectableVE.iconDestroy();
    }
    e.prototype.iconDestroy.call(this);
  };
  CollectableItemUnlockVE.prototype.textfieldUpdate = function () {
    this.collectableVE.textfieldUpdate();
  };
  CollectableItemUnlockVE.prototype.tooltipUpdate = function () {
    this.collectableVE.tooltipUpdate();
  };
  Object.defineProperty(CollectableItemUnlockVE.prototype, "itemUnlockedVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemUnlockVE.prototype, "collectableVE", {
    get: function () {
      return this._collectableVE;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemUnlockVE;
}(require("./158.js").ACollectableItemVE);
exports.CollectableItemUnlockVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");