Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./81.js");
var s = createjs.Point;
var r = function (e) {
  function CastleAllianceInfoDialogABGTowerItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleAllianceInfoDialogABGTowerItem, e);
  CastleAllianceInfoDialogABGTowerItem.prototype.fill = function () {
    this.towerInfoComponent = new l.ABGTowerInfoComponent(this.itemMc, new s(65, 90));
    this.towerInfoComponent.updateTowerInfo(this.towerVO);
    this.towerInfoComponent.onShow();
  };
  CastleAllianceInfoDialogABGTowerItem.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    if (this.towerInfoComponent) {
      this.towerInfoComponent.onHide();
    }
  };
  Object.defineProperty(CastleAllianceInfoDialogABGTowerItem.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceInfoDialogABGTowerItem.prototype, "towerVO", {
    get: function () {
      return this.data;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceInfoDialogABGTowerItem;
}(a.AInfiniteScrollListItem);
exports.CastleAllianceInfoDialogABGTowerItem = r;
var l = require("./580.js");
o.classImplementsInterfaces(r, "ICollectableRendererList");