Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./1763.js");
var u = require("./410.js");
var d = require("./4.js");
var p = require("./43.js");
var h = require("./35.js");
var g = require("./93.js");
var C = require("./3701.js");
var _ = function (e) {
  function CastleEilandRankingDialogTitle(t) {
    var i = e.call(this, t) || this;
    i.iniButtons();
    i.initScrollList();
    i.initTexts();
    return i;
  }
  n.__extends(CastleEilandRankingDialogTitle, e);
  CastleEilandRankingDialogTitle.prototype.initTexts = function () {
    this.kingVO = d.CastleModel.eilandData.kingTitleVO;
    var e = this.kingVO.currentAssigneePID == d.CastleModel.userData.playerID ? "dialog_eiland_titleMenu_copy_might_forKing" : "dialog_eiland_titleMenu_copy_might_forOther";
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_description, new r.LocalizedTextVO(e, [this.kingVO.mightValue])).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_kingsName_descr, new r.LocalizedTextVO("dialog_eiland_titleMenu_kingName")).autoFitToBounds = true;
    if (this.kingVO.isAssigned) {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_kingsName, new l.TextVO(this.kingVO.currentAssignee));
    } else {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_kingsName, new r.LocalizedTextVO("dialog_eiland_titleMenu_title_unassigned"));
    }
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title_positive, new r.LocalizedTextVO("dialog_eiland_titleMenu_positive_title"));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title_negative, new r.LocalizedTextVO("dialog_eiland_titleMenu_negative_title"));
  };
  CastleEilandRankingDialogTitle.prototype.initScrollList = function () {
    this.titleList = new a.ItemScrollList(this.subLayerDisp.mc_itemContainer);
    this.titleList.scrollItemClass = O.CastleEilandTitleItem;
    this.titleList.scrollStep = 2;
    this.titleList.clear();
  };
  CastleEilandRankingDialogTitle.prototype.iniButtons = function () {
    var e = [this.subLayerDisp.mc_itemContainer.btn_up, this.subLayerDisp.mc_itemContainer.btn_down];
    for (var t = 0; t < 4; t++) {
      var i = this.subLayerDisp.mc_itemContainer["item" + t].btn_assignTitle;
      var n = this.subLayerDisp.mc_itemContainer["item" + t].btn_revokeTitle;
      e.push(i);
      e.push(n);
    }
    this.initBasicButtons(e);
  };
  CastleEilandRankingDialogTitle.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    d.CastleModel.smartfoxClient.sendCommandVO(new c.C2SUserAchievedRanksVO());
    d.CastleModel.titleData.addEventListener(u.CastleTitleDataEvent.TITLE_DATA_UPDATED, this.bindFunction(this.updateTitles));
    this.updateTitles();
  };
  CastleEilandRankingDialogTitle.prototype.updateTitles = function (e = null) {
    this.initTexts();
    this.titleList.clear();
    for (var t = d.CastleModel.titleData.mixedIslandTitles, i = d.CastleModel.eilandData.kingTitleVO.currentAssigneePID == d.CastleModel.userData.playerID, n = 0; n < t.length; n++) {
      var o = t[n];
      this.titleList.pushContent(new C.CastleEilandTitleItemVO(i, o));
    }
    this.titleList.initList();
  };
  CastleEilandRankingDialogTitle.prototype.hide = function () {
    d.CastleModel.titleData.removeEventListener(u.CastleTitleDataEvent.TITLE_DATA_UPDATED, this.bindFunction(this.updateTitles));
    e.prototype.hide.call(this);
  };
  CastleEilandRankingDialogTitle.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (this.kingVO.isAssigned && t.target == this.subLayerDisp.txt_kingsName) {
      m.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(f.CastlePlayerInfoDialog, new g.CastlePlayerInfoDialogProperties(this.kingVO.currentAssigneePID), p.CastleDialogConsts.DIALOG_TYPE_SINGLE);
    }
  };
  CastleEilandRankingDialogTitle.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (this.kingVO.isAssigned && t.target == this.subLayerDisp.txt_kingsName) {
      this.layoutManager.nativeCursor.setCursorType(o.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  CastleEilandRankingDialogTitle.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    if (this.kingVO.isAssigned && t.target == this.subLayerDisp.txt_kingsName) {
      this.layoutManager.nativeCursor.setCursorType(o.BasicCustomCursor.CURSOR_ARROW);
    }
  };
  return CastleEilandRankingDialogTitle;
}(h.CastleDialogSubLayer);
exports.CastleEilandRankingDialogTitle = _;
var m = require("./9.js");
var f = require("./94.js");
var O = require("./3702.js");
s.classImplementsInterfaces(_, "ICollectableRendererList", "ISublayer");