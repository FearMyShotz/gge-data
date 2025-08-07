Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./8.js");
var s = require("./1025.js");
var r = require("./120.js");
var l = require("./1565.js");
var c = function (e) {
  function CastleInventoryListItemComponent(t, i) {
    var n = e.call(this, t, i) || this;
    a.ButtonHelper.initBasicButtons([t.item, t.btn_info, t.btn_dismiss]);
    return n;
  }
  n.__extends(CastleInventoryListItemComponent, e);
  CastleInventoryListItemComponent.prototype.onClickUnit = function () {};
  CastleInventoryListItemComponent.prototype.onClickUnitInfo = function () {
    u.CastleDialogHandler.getInstance().registerDefaultDialogs(d.CastleRecruitInfoDialog, new r.CastleRecruitInfoDialogProperties(this.unitVO));
  };
  CastleInventoryListItemComponent.prototype.onClickDismissUnit = function () {
    u.CastleDialogHandler.getInstance().registerDefaultDialogs(p.CastleRecruitDismissUnitsDialog, new l.CastleDismissUnitsDialogProperties(this.unitVO, this.unitVO.inventoryAmount));
  };
  CastleInventoryListItemComponent.prototype.update = function () {
    if (this.unitVO) {
      if (this.unitVO.isStronghold) {
        this.disp.item.gotoAndStop(2);
      } else {
        this.disp.item.gotoAndStop(1);
      }
    }
    if (this.disp.mc_discount) {
      this.disp.mc_discount.visible = false;
    }
    e.prototype.update.call(this);
  };
  return CastleInventoryListItemComponent;
}(s.AInventoryListItem);
exports.CastleInventoryListItemComponent = c;
var u = require("./9.js");
var d = require("./115.js");
var p = require("./2970.js");
o.classImplementsInterfaces(c, "IInventoryListItem");