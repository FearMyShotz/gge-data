Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./11.js");
var l = require("./2704.js");
var c = require("./4.js");
var u = require("./78.js");
var d = require("./77.js");
var p = require("./2705.js");
var h = require("./76.js");
var g = require("./1467.js");
var C = require("./8.js");
var _ = require("./20.js");
var m = require("./13.js");
var f = function (e) {
  function ConstructionItemExpiredDialog() {
    var t = e.call(this, ConstructionItemExpiredDialog.NAME) || this;
    t.sortOrder = 1;
    return t;
  }
  n.__extends(ConstructionItemExpiredDialog, e);
  ConstructionItemExpiredDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    C.ButtonHelper.initBasicButtons([this.dialogDisp.btn_list_building]);
    C.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_gotoCastle], _.ClickFeedbackButtonHover);
    this.dialogDisp.btn_list_building.toolTipText = "dialog_ci_assign_list_buildings_tooltip";
    this.dialogDisp.btn_list_ci.toolTipText = "dialog_ci_assign_list_items_tooltip";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.TextVO(m.TextHelper.toUpperCaseLocaSafeTextId("dialog_ci_tempCiExpired_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new o.LocalizedTextVO("dialog_ci_tempCiExpired_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_gotoCastle.txt_label, new a.TextVO(m.TextHelper.toUpperCaseLocaSafeTextId("panel_action_castle")));
    this.itxt_empty = this.textFieldManager.registerTextField(this.dialogDisp.txt_empty, new o.LocalizedTextVO("dialog_ci_tempCiExpired_noTempCiExpired"));
    this._castleSelector = new l.ConstructionItemExpiredCastleSelector(this.dialogDisp.castleSelection, this.bindFunction(this.onSelectCastle));
    var i = new d.InfiniteScrollListOptions(p.ConstructionItemExpiredDialogListItem, "CastleConstructionItemsExpired_ListItem", ConstructionItemExpiredDialog.NAME);
    i.itemPaddingY = 0;
    i.useSmoothScroll = true;
    this._scrollList = new u.InfiniteScrollListComponent(new h.InfiniteScrollListClips(this.dialogDisp.mc_list).addSliderMc(this.dialogDisp.mc_slider), i);
  };
  ConstructionItemExpiredDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._castleSelector.fillFromAreas(this.getCIExpiredAreas());
    this._castleSelector.show();
    this._scrollList.onShow();
    this.updateList();
  };
  ConstructionItemExpiredDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this._castleSelector.hide();
    this._scrollList.onHide();
  };
  ConstructionItemExpiredDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_gotoCastle:
        this.gotoSelectedCastle();
        break;
      case this.dialogDisp.btn_list_building:
        this.toggleListSortingOrder();
    }
  };
  ConstructionItemExpiredDialog.prototype.toggleListSortingOrder = function () {
    this.sortOrder *= -1;
    this.dialogDisp.btn_list_building.mc_arrow.gotoAndStop(this.sortOrder == 1 ? 1 : 2);
    this.updateList();
  };
  ConstructionItemExpiredDialog.prototype.onSelectCastle = function () {
    this._castleSelector.update();
    this.updateList();
  };
  ConstructionItemExpiredDialog.prototype.updateList = function () {
    var e = this._castleSelector.selectedArea.expiredCIs;
    e.sort(this.bindFunction(this.sortByName));
    if (e.length <= 0) {
      this.itxt_empty.visible = true;
      this._scrollList.setVisibility(false);
    } else {
      this.itxt_empty.visible = false;
      this._scrollList.updateWithNewData(e);
      this._scrollList.setVisibility(true);
    }
  };
  ConstructionItemExpiredDialog.prototype.gotoSelectedCastle = function () {
    this.hide();
    this.controller.dispatchEvent(new g.CastleConstructionItemsSwitchEvent(g.CastleConstructionItemsSwitchEvent.SWITCH_CASTLE, this._castleSelector.selectedArea.castleWMO));
  };
  ConstructionItemExpiredDialog.prototype.getCIExpiredAreas = function () {
    return c.CastleModel.constructionItemData.expiredAreas;
  };
  ConstructionItemExpiredDialog.prototype.sortByName = function (e, t) {
    var i = s.Localize.text(e.buildingVO.getNameString()).localeCompare(s.Localize.text(t.buildingVO.getNameString()));
    if (i != 0) {
      return i * this.sortOrder;
    } else {
      return 0;
    }
  };
  ConstructionItemExpiredDialog.NAME = "CastleConstructionItemsExpired";
  return ConstructionItemExpiredDialog;
}(r.CastleExternalDialog);
exports.ConstructionItemExpiredDialog = f;