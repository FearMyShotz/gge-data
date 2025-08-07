Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./4.js");
var s = require("./81.js");
var r = createjs.Point;
var l = function (e) {
  function CastleAllianceBattlegroundEventDialogPerformanceTowerItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleAllianceBattlegroundEventDialogPerformanceTowerItem, e);
  CastleAllianceBattlegroundEventDialogPerformanceTowerItem.prototype.fill = function () {
    this.fillItem(this.data.vo1, this.itemMc.item0);
    this.fillItem(this.data.vo2, this.itemMc.item1);
  };
  CastleAllianceBattlegroundEventDialogPerformanceTowerItem.prototype.fillItem = function (e, t) {
    if (e) {
      t.visible = true;
      this.towerInfo = new c.ABGTowerInfoComponent(t, new r(100, 160));
      this.towerInfo.updateTowerInfo(e);
      this.towerInfo.onShow();
      var i = false;
      for (var n = 0, o = e.connections; n < o.length; n++) {
        var s = o[n];
        if (s !== undefined && s.playerName == a.CastleModel.userData.userName) {
          i = true;
        }
      }
      t.mc_myTower.visible = i;
    } else {
      t.visible = false;
    }
  };
  CastleAllianceBattlegroundEventDialogPerformanceTowerItem.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    if (this.towerInfo) {
      this.towerInfo.onHide();
    }
  };
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformanceTowerItem.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceBattlegroundEventDialogPerformanceTowerItem;
}(s.AInfiniteScrollListItem);
exports.CastleAllianceBattlegroundEventDialogPerformanceTowerItem = l;
var c = require("./581.js");
o.classImplementsInterfaces(l, "ICollectableRendererList");