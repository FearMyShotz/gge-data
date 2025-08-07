Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./129.js");
var s = require("./15.js");
var r = require("./8.js");
var l = function (e) {
  function ConstructionItemSlotBig(t, i, n, o, a) {
    var s = e.call(this, t, i, n, a) || this;
    s.clickExtractCallback = o;
    r.ButtonHelper.initBasicButton(a.mc_item, 1.02);
    r.ButtonHelper.initBasicButton(a.mc_extract.btn_extract);
    a.mc_extract.btn_extract.toolTipText = "dialog_ci_assign_info_extract_tooltip";
    return s;
  }
  n.__extends(ConstructionItemSlotBig, e);
  ConstructionItemSlotBig.prototype.update = function () {
    if (this.interactionData.selectedBuilding) {
      r.ButtonHelper.enableButton(this.disp.mc_item, true);
      o.MovieClipHelper.clearMovieClip(this.disp.mc_item.mc_icon);
      this.disp.mc_item.mc_icon.visible = false;
      if (this.itemVO) {
        c.ConstructionItemRenderer.renderWithoutBuildingIcon(this.itemVO, this.bindFunction(this.updateSlotItemDimension), this.disp.mc_item.mc_icon);
      }
      this.disp.mc_extract.visible = !!this.itemVO && !!this.interactionData.selectedSlot && this.interactionData.selectedSlot.equals(this._slotVO);
      if (this.itemVO) {
        this.disp.mc_extract.btn_extract.gotoAndStop(this.itemVO.isTemporary ? 2 : 1);
        this.updateButton();
      }
      e.prototype.update.call(this);
    }
  };
  ConstructionItemSlotBig.prototype.updateButton = function () {
    if (this.itemVO.isTemporary) {
      if (this.itemVO.rarity == u.ConstructionItemConst.RARENESS_LEGENDARY) {
        this.disp.mc_extract.btn_extract.toolTipText = "dialog_ci_assign_tempCi_boosterButton_maxBoost_tooltip";
        r.ButtonHelper.enableButton(this.disp.mc_extract.btn_extract, false);
      } else if (p.CastleModel.currencyData.getAmountById(d.ClientConstCurrency.ID_RARE_BOOSTER_CONSUMABLE) == 0 && p.CastleModel.currencyData.getAmountById(d.ClientConstCurrency.ID_EPIC_BOOSTER_CONSUMABLE) == 0 && p.CastleModel.currencyData.getAmountById(d.ClientConstCurrency.ID_LEGENDARY_BOOSTER_CONSUMABLE) == 0) {
        this.disp.mc_extract.btn_extract.toolTipText = "dialog_ci_assign_tempCi_boosterButton_noBoosters_tooltip";
        r.ButtonHelper.enableButton(this.disp.mc_extract.btn_extract, false);
      } else {
        this.disp.mc_extract.btn_extract.toolTipText = "dialog_ci_assign_tempCi_boosterButton_select_tooltip";
        r.ButtonHelper.enableButton(this.disp.mc_extract.btn_extract, true);
      }
    } else if (this.itemVO.isRemovalLocked) {
      r.ButtonHelper.enableButton(this.disp.mc_extract.btn_extract, false);
      this.disp.mc_extract.btn_extract.toolTipText = "alert_ci_removeNotPossible";
    } else {
      r.ButtonHelper.enableButton(this.disp.mc_extract.btn_extract, true);
      this.disp.mc_extract.btn_extract.toolTipText = "dialog_ci_assign_info_extract_tooltip";
    }
  };
  ConstructionItemSlotBig.prototype.updateSlotItemDimension = function (e) {
    this.disp.mc_item.mc_icon.visible = true;
    o.MovieClipHelper.scaleToFit(this.disp.mc_item.mc_icon, 52, 52);
  };
  ConstructionItemSlotBig.prototype.onClick = function (e) {
    if (r.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.disp.mc_item:
          this.clickCallback(this);
          break;
        case this.disp.mc_extract.btn_extract:
          this.clickExtractCallback(this);
      }
    }
  };
  ConstructionItemSlotBig.prototype.show = function () {
    e.prototype.show.call(this);
    s.CastleBasicController.getInstance().addEventListener(a.CastleMilitaryDataEvent.PACKAGELIST_UPDATED, this.bindFunction(this.onPackageUpdate));
  };
  ConstructionItemSlotBig.prototype.hide = function () {
    e.prototype.hide.call(this);
    s.CastleBasicController.getInstance().removeEventListener(a.CastleMilitaryDataEvent.PACKAGELIST_UPDATED, this.bindFunction(this.onPackageUpdate));
  };
  ConstructionItemSlotBig.prototype.onPackageUpdate = function (e) {
    if (this.interactionData.selectedBuilding && this.itemVO) {
      this.updateButton();
    }
  };
  return ConstructionItemSlotBig;
}(require("./997.js").ConstructionItemSlot);
exports.ConstructionItemSlotBig = l;
var c = require("./529.js");
var u = require("./5.js");
var d = require("./52.js");
var p = require("./4.js");