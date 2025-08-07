Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./8.js");
var a = function (e) {
  function ConstructionItemSlotSmall(t, i, n, a) {
    var s = e.call(this, t, i, n, a) || this;
    o.ButtonHelper.initBasicButton(a.mc_item, 1.1);
    return s;
  }
  n.__extends(ConstructionItemSlotSmall, e);
  ConstructionItemSlotSmall.prototype.update = function () {
    if (!this._buildingVO && this.interactionData) {
      this._buildingVO = this.interactionData.selectedBuilding;
    }
    this.disp.mc_item.gotoAndStop(this.itemVO ? this.itemVO.rarity + 2 : 1);
    e.prototype.update.call(this);
  };
  Object.defineProperty(ConstructionItemSlotSmall.prototype, "buildingVO", {
    get: function () {
      return this._buildingVO;
    },
    set: function (e) {
      this._buildingVO = e;
      this.update();
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemSlotSmall.prototype.hide = function () {
    e.prototype.hide.call(this);
    this._buildingVO = null;
  };
  return ConstructionItemSlotSmall;
}(require("./997.js").ConstructionItemSlot);
exports.ConstructionItemSlotSmall = a;