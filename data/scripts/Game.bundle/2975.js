Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2976.js");
var s = require("./4.js");
var r = require("./8.js");
var l = require("./1026.js");
var c = require("./120.js");
var u = require("./1581.js");
var d = function (e) {
  function CastleInventoryStrongholdListItemComponent(t, i) {
    var n = e.call(this, t, i) || this;
    r.ButtonHelper.initBasicButtons([t.item, t.btn_info]);
    return n;
  }
  n.__extends(CastleInventoryStrongholdListItemComponent, e);
  CastleInventoryStrongholdListItemComponent.prototype.onClickUnit = function () {
    if (!s.CastleModel.militaryData.isStrongholdFull) {
      p.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastleRecruitStrongholdAddUnitsDialog, new u.CastleRecruitStrongholdAddUnitsDialogProperties(true, this.unitVO, CastleInventoryStrongholdListItemComponent.storeSoldiers, Math.min(s.CastleModel.militaryData.currentHiddenSoldierSpace, this.unitVO.inventoryAmount)));
    }
  };
  CastleInventoryStrongholdListItemComponent.prototype.onClickUnitInfo = function () {
    p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleRecruitInfoDialog, new c.CastleRecruitInfoDialogProperties(this.unitVO));
  };
  CastleInventoryStrongholdListItemComponent.prototype.onClickDismissUnit = function () {};
  CastleInventoryStrongholdListItemComponent.prototype.onMouseOver = function (t) {
    if (s.CastleModel.militaryData.isStrongholdFull) {
      this.disp.item.toolTipText = "dialog_stronghold_full";
    } else {
      this.disp.item.toolTipText = "";
      e.prototype.onMouseOver.call(this, t);
    }
  };
  Object.defineProperty(CastleInventoryStrongholdListItemComponent.prototype, "hasDismissButton", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.AInventoryListItem.prototype, "hasDismissButton").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleInventoryStrongholdListItemComponent.storeSoldiers = function (e, t) {
    s.CastleModel.smartfoxClient.sendCommandVO(new a.C2SStoreSoldiersVO(e, t));
  };
  CastleInventoryStrongholdListItemComponent.prototype.update = function () {
    this.disp.item.gotoAndStop(1);
    e.prototype.update.call(this);
  };
  return CastleInventoryStrongholdListItemComponent;
}(l.AInventoryListItem);
exports.CastleInventoryStrongholdListItemComponent = d;
var p = require("./9.js");
var h = require("./113.js");
var g = require("./1582.js");
o.classImplementsInterfaces(d, "IInventoryListItem");