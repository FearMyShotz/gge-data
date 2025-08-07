Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./4.js");
var s = require("./8.js");
var r = require("./1025.js");
var l = require("./120.js");
var c = require("./1565.js");
var u = createjs.Point;
var d = function (e) {
  function HospitalInventoryListItemComponent(t, i, n) {
    var o = e.call(this, t, i) || this;
    o.onSelectCallback = n;
    s.ButtonHelper.initBasicButtons([o.disp.item, o.disp.btn_dismiss, o.disp.btn_info]);
    o.disp.mouseChildren = true;
    o.disp.btn_dismiss.toolTipText = "dialog_dismissUnit_tooltip";
    return o;
  }
  n.__extends(HospitalInventoryListItemComponent, e);
  HospitalInventoryListItemComponent.prototype.onClickUnit = function () {
    this.onSelectCallback(this.unitVO);
  };
  HospitalInventoryListItemComponent.prototype.onClickUnitInfo = function () {
    p.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastleRecruitInfoDialog, new l.CastleRecruitInfoDialogProperties(this.unitVO));
  };
  HospitalInventoryListItemComponent.prototype.onClickDismissUnit = function () {
    p.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleHospitalDismissUnitsDialog, new c.CastleDismissUnitsDialogProperties(this.unitVO, this.unitVO.inventoryAmount));
  };
  HospitalInventoryListItemComponent.prototype.update = function () {
    if (this.unitVO) {
      this.disp.visible = true;
      this.tooltip.hide();
      h.WodPicHelper.addUnitPic(this.unitVO, this.disp.item.mc_contentHolder.mc_content, this.disp.item.width / this.disp.item.scaleX, this.disp.item.height / this.disp.item.scaleY, a.CastleModel.userData.playerCrest.colorsTwo[0], a.CastleModel.userData.playerCrest.colorsTwo[1], 26, new u(12, 14), true, true, true, null, this.disp.item.mc_level);
      this.disp.item.mc_contentHolder.infoAmount.visible = this.unitVO.inventoryAmount > 0;
      this.infoAmountText.textContentVO.numberValue = this.unitVO.inventoryAmount;
      this.dismissButtonVisibility = false;
      if (this.disp.mc_discount) {
        this.disp.mc_discount.visible = false;
      }
    } else {
      this.disp.visible = false;
    }
  };
  HospitalInventoryListItemComponent.prototype.destroy = function () {
    _.MovieClipHelper.clearMovieClip(this.disp.item.mc_level);
    e.prototype.destroy.call(this);
  };
  return HospitalInventoryListItemComponent;
}(r.AInventoryListItem);
exports.HospitalInventoryListItemComponent = d;
var p = require("./9.js");
var h = require("./63.js");
var g = require("./115.js");
var C = require("./2942.js");
var _ = require("./2.js");
o.classImplementsInterfaces(d, "IInventoryListItem");