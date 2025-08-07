Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./12.js");
var l = require("./45.js");
var c = require("./31.js");
var u = require("./104.js");
var d = require("./19.js");
var p = require("./13.js");
var h = require("./4.js");
var g = require("./9.js");
var C = require("./20.js");
var _ = require("./76.js");
var m = require("./78.js");
var f = require("./77.js");
var O = require("./8.js");
var E = require("./25.js");
var y = require("./11.js");
var b = require("./215.js");
var D = require("./2236.js");
var I = createjs.Point;
var T = function (e) {
  function GeneralsHubInfoDialog() {
    var t = e.call(this, GeneralsHubInfoDialog.NAME) || this;
    t.index = 0;
    t.tombolaIndex = 0;
    return t;
  }
  n.__extends(GeneralsHubInfoDialog, e);
  GeneralsHubInfoDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.charIDs = h.CastleModel.generalsData.getAllGeneralsHubQuestIDs();
    O.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_left, this.dialogDisp.btn_right, this.dialogDisp.cbx_btn0, this.dialogDisp.cbx_btn1, this.dialogDisp.cbx_btn2, this.dialogDisp.cbx_btn3, this.dialogDisp.cbx_btn4, this.dialogDisp.cbx_btn5], C.ClickFeedbackButtonHover, 1);
  };
  GeneralsHubInfoDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("dialog_generals_inn_drawChances_header")));
    var i = new f.InfiniteScrollListOptions(D.GeneralsHubInfoDialogListItem, "GeneralsHubLootChancesItem", GeneralsHubInfoDialog.NAME);
    i.itemPaddingY = 0;
    i.useSmoothScroll = true;
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_list.mc_items);
    this._list = new m.InfiniteScrollListComponent(new _.InfiniteScrollListClips(this.dialogDisp.mc_list).addSliderMc(this.dialogDisp.mc_list.mc_slider).addMaskMc(this.dialogDisp.mc_list.mc_mask), i);
    this._list.onShow();
    this.updateAllInfos(true);
  };
  GeneralsHubInfoDialog.prototype.hide = function () {
    if (this._list && this._list.scrollComponent.scrollVO) {
      this._list.onHide();
      this._list.destroy();
    }
    e.prototype.hide.call(this);
  };
  GeneralsHubInfoDialog.prototype.updateRadioButtons = function () {
    for (var e = 0; e < 6; e++) {
      var t = this.charQuestVO.getTombolaOfferingCurrencyID(e);
      var i = this.dialogDisp["cbx_btn" + e];
      var n = this.dialogDisp["mc_offering" + e];
      o.MovieClipHelper.clearMovieClip(n);
      if (t < 0) {
        i.visible = false;
      } else {
        i.visible = true;
        i.content_label_green_12.visible = this.tombolaIndex == e;
        this.fillItemIcon(n, t);
      }
    }
  };
  GeneralsHubInfoDialog.prototype.fillItemIcon = function (e, t) {
    var i = l.CollectableHelper.createVO(r.CollectableEnum.GENERIC_CURRENCY, 1, t);
    var n = new d.CollectableRenderOptions(d.CollectableRenderOptions.SET_ICON, new I(30, 30));
    n.tooltip.useAmount = false;
    var o = new c.CollectableRenderClips(e).addIconMc(e);
    E.CollectableRenderHelper.displaySingleItemComplete(new u.CollectableRendererList(), o, i, n);
  };
  GeneralsHubInfoDialog.prototype.dataList = function () {
    var e;
    var t = h.CastleModel.lootBoxData.xml.getLootBoxTombolasByTombolaID(this.charQuestVO.getTombolaID(this.tombolaIndex));
    var i = 0;
    var n = [];
    for (e = 0; e < t.length; e++) {
      i += t[e].shares;
    }
    for (e = 0; e < t.length; e++) {
      var a = h.CastleModel.rewardData.getListByIdArray(t[e].rewardIDs);
      if (!a || a.list.length <= 0) {
        g.CastleDialogHandler.getInstance().registerDefaultDialogs(b.DarkOkDialog, new o.BasicStandardOkDialogProperties("", "no rewards found for ID " + t[e].rewardIDs.toString()));
      }
      var s = {
        rewardCategory: t[e].rewardCategory,
        reward: a.list[0],
        chance: t[e].shares / i * 100
      };
      n.push(s);
    }
    n.sort(this.bindFunction(this.sortByChance));
    return n;
  };
  GeneralsHubInfoDialog.prototype.sortByChance = function (e, t) {
    return e.chance - t.chance;
  };
  GeneralsHubInfoDialog.prototype.updateAllInfos = function (e = false) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new s.LocalizedTextVO(this.charQuestVO.nameTextID));
    var t = this.dataList();
    this._list.updateWithNewData(t, e);
    this._list.onShow();
    this.updateRadioButtons();
  };
  GeneralsHubInfoDialog.prototype.onClick = function (t) {
    if (O.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_left:
          this.tombolaIndex = 0;
          this.selectCharacter(this.index == 0 ? this.charIDs.length - 1 : this.index - 1);
          break;
        case this.dialogDisp.btn_right:
          this.tombolaIndex = 0;
          this.selectCharacter(this.index == this.charIDs.length - 1 ? 0 : this.index + 1);
          break;
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.cbx_btn0:
          this.tombolaIndex = 0;
          this.updateAllInfos(true);
          break;
        case this.dialogDisp.cbx_btn1:
          this.tombolaIndex = 1;
          this.updateAllInfos(true);
          break;
        case this.dialogDisp.cbx_btn2:
          this.tombolaIndex = 2;
          this.updateAllInfos(true);
          break;
        case this.dialogDisp.cbx_btn3:
          this.tombolaIndex = 3;
          this.updateAllInfos(true);
          break;
        case this.dialogDisp.cbx_btn4:
          this.tombolaIndex = 4;
          this.updateAllInfos(true);
          break;
        case this.dialogDisp.cbx_btn5:
          this.tombolaIndex = 5;
          this.updateAllInfos(true);
      }
    }
  };
  GeneralsHubInfoDialog.prototype.selectCharacter = function (e) {
    this.index = e;
    this.updateAllInfos();
  };
  Object.defineProperty(GeneralsHubInfoDialog.prototype, "charQuestVO", {
    get: function () {
      return h.CastleModel.generalsData.getGeneralsHubQuestVOByCharacterID(this.charIDs[this.index]);
    },
    enumerable: true,
    configurable: true
  });
  GeneralsHubInfoDialog.NAME = "GeneralsHubLootChances2";
  return GeneralsHubInfoDialog;
}(y.CastleExternalDialog);
exports.GeneralsHubInfoDialog = T;
a.classImplementsInterfaces(T, "ICollectableRendererList");