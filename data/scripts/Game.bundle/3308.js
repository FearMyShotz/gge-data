Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./12.js");
var c = require("./45.js");
var u = require("./31.js");
var d = require("./104.js");
var p = require("./19.js");
var h = require("./13.js");
var g = require("./4.js");
var C = require("./52.js");
var _ = require("./9.js");
var m = require("./20.js");
var f = require("./76.js");
var O = require("./78.js");
var E = require("./77.js");
var y = require("./8.js");
var b = require("./25.js");
var D = require("./11.js");
var I = require("./3309.js");
var T = createjs.Point;
var v = function (e) {
  function MysteryBoxInfoDialog() {
    var t = e.call(this, MysteryBoxInfoDialog.NAME) || this;
    t.selectedKey = 0;
    return t;
  }
  n.__extends(MysteryBoxInfoDialog, e);
  MysteryBoxInfoDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    y.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_left, this.dialogDisp.btn_right], m.ClickFeedbackButtonHover);
    this.dialogDisp.mc_info.mouseChildren = false;
  };
  MysteryBoxInfoDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(h.TextHelper.toUpperCaseLocaSafeTextId("dialog_mysteryBoxSystem_mysteryBoxInfo_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new s.LocalizedTextVO(this.dialogProperties.mysteryBox.getNameTextId()));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO("dialog_mysteryBoxSystem_boxDraws_counter", [this.lootBoxVO.draws]));
    this.dialogDisp.mc_toolTip.visible = false;
    this.dialogDisp.marker_tooltip_attention.mouseChildren = false;
    this.dialogDisp.marker_tooltip_attention.toolTipText = "dialog_mysteryBoxSystem_keyDraws_drawLimit_tooltip";
    this.dialogDisp.mc_icon.mouseChildren = false;
    this.dialogDisp.mc_icon.toolTipText = "dialog_mysteryBoxSystem_keyDraws_basics_tooltip";
    b.CollectableRenderHelper.displaySingleItemComplete(new d.CollectableRendererList(), new u.CollectableRenderClips(this.dialogDisp.mc_item).addIconMc(this.dialogDisp.mc_item).addItemMc(this.dialogDisp.mc_item), this.dialogProperties.mysteryBox, new p.CollectableRenderOptions(p.CollectableRenderOptions.SET_ADVANCED, new T(100, 100)));
    var i = new E.InfiniteScrollListOptions(I.MysteryBoxInfoDialogListItem, "MysteryBoxListItem", MysteryBoxInfoDialog.NAME);
    i.itemPaddingY = 0;
    i.useSmoothScroll = true;
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_list.mc_items);
    this._list = new O.InfiniteScrollListComponent(new f.InfiniteScrollListClips(this.dialogDisp.mc_list).addSliderMc(this.dialogDisp.mc_list.mc_slider), i);
    this._list.onShow();
    this.updateAllInfos(true);
    this.updateKeyToolTip();
    this.dialogDisp.mc_progress.mc_bar.scaleX = Math.min(g.CastleModel.lootBoxData.getMysteryKeyProgress() / g.CastleModel.lootBoxData.getMysteryKeyProgressMax(), 1);
    this.dialogDisp.mc_progress.toolTipText = "dialog_mysteryBoxSystem_keyDraws_basics_tooltip";
    this.dialogDisp.mc_progress.mouseChildren = false;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_progress.txt_copy, new s.LocalizedTextVO("numbersXY", [g.CastleModel.lootBoxData.getMysteryKeyProgress(), g.CastleModel.lootBoxData.getMysteryKeyProgressMax()]));
  };
  MysteryBoxInfoDialog.prototype.hide = function () {
    if (this._list && this._list.scrollComponent.scrollVO) {
      this._list.onHide();
      this._list.destroy();
    }
    e.prototype.hide.call(this);
  };
  MysteryBoxInfoDialog.prototype.updateKeyToolTip = function () {
    for (var e = g.CastleModel.lootBoxData.xml.getLootBoxKeyTombolasByKeyTombolaID(this.lootBoxVO.lootBoxKeyTombolaID), t = 0, i = 0, n = 0, a = 0, u = 0; u < e.length; u++) {
      t += e[u].shares;
      if (e[u].addRareMysteryBoxKey > 0) {
        i += e[u].shares;
      }
      if (e[u].addEpicMysteryBoxKey > 0) {
        n += e[u].shares;
      }
      if (e[u].addLegendaryMysteryBoxKey > 0) {
        a += e[u].shares;
      }
    }
    var d = i / t * 100;
    var p = n / t * 100;
    var _ = a / t * 100;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_toolTip.txt_title, new r.TextVO(h.TextHelper.toUpperCaseLocaSafeTextId("dialog_mysteryBoxSystem_keyDraws_drawChances_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_toolTip.txt_copy0, new s.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [d]));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_toolTip.txt_copy1, new s.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [p]));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_toolTip.txt_copy2, new s.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [_]));
    this.dialogDisp.mc_key1.toolTipText = c.CollectableHelper.createVO(l.CollectableEnum.GENERIC_CURRENCY, 1, C.ClientConstCurrency.ID_MYSTERY_BOX_KEY_COMMON).getNameTextId();
    this.dialogDisp.mc_key2.toolTipText = c.CollectableHelper.createVO(l.CollectableEnum.GENERIC_CURRENCY, 1, C.ClientConstCurrency.ID_MYSTERY_BOX_KEY_RARE).getNameTextId();
    this.dialogDisp.mc_key3.toolTipText = c.CollectableHelper.createVO(l.CollectableEnum.GENERIC_CURRENCY, 1, C.ClientConstCurrency.ID_MYSTERY_BOX_KEY_EPIC).getNameTextId();
    this.dialogDisp.mc_key4.toolTipText = c.CollectableHelper.createVO(l.CollectableEnum.GENERIC_CURRENCY, 1, C.ClientConstCurrency.ID_MYSTERY_BOX_KEY_LEGENDARY).getNameTextId();
  };
  MysteryBoxInfoDialog.prototype.dataList = function () {
    var e;
    var t = g.CastleModel.lootBoxData.xml.getLootBoxTombolasByTombolaID(this.lootBoxVO.lootBoxTombolaID);
    var i = 0;
    var n = [];
    for (e = 0; e < t.length; e++) {
      var o = true;
      switch (t[e].rewardCategory) {
        case "Common":
          o = this.selectedKey == 0;
          break;
        case "Rare":
          o = this.selectedKey <= 1;
          break;
        case "Epic":
          o = this.selectedKey <= 2;
          break;
        case "Legendary":
          o = this.selectedKey <= 3;
      }
      if (o) {
        i += t[e].shares;
      }
    }
    for (e = 0; e < t.length; e++) {
      var a = true;
      switch (t[e].rewardCategory) {
        case "Common":
          a = this.selectedKey == 0;
          break;
        case "Rare":
          a = this.selectedKey <= 1;
          break;
        case "Epic":
          a = this.selectedKey <= 2;
          break;
        case "Legendary":
          a = this.selectedKey <= 3;
      }
      if (a) {
        var s = {
          rewardCategory: t[e].rewardCategory,
          shares: t[e].shares
        };
        s.rewards = g.CastleModel.rewardData.getListByIdArray(t[e].rewardIDs);
        var r = true;
        switch (t[e].rewardCategory) {
          case "Common":
            r = this.selectedKey == 0;
            break;
          case "Rare":
            r = this.selectedKey <= 1;
            break;
          case "Epic":
            r = this.selectedKey <= 2;
            break;
          case "Legendary":
            r = this.selectedKey <= 3;
        }
        s.chance = r ? s.shares / i * 100 : 0;
        n.push(s);
      }
    }
    return n;
  };
  MysteryBoxInfoDialog.prototype.updateAllInfos = function (e = false) {
    var t = this.dataList();
    this._list.updateWithNewData(t, e);
    this._list.onShow();
    this.dialogDisp.marker_tooltip_attention.visible = this.selectedKey != 0;
  };
  MysteryBoxInfoDialog.prototype.onClick = function (t) {
    if (y.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_left:
          this.selectKey(this.selectedKey == 0 ? 3 : this.selectedKey - 1);
          break;
        case this.dialogDisp.btn_right:
          this.selectKey(this.selectedKey == 3 ? 0 : this.selectedKey + 1);
          break;
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          _.CastleDialogHandler.getInstance().showHelper(s.Localize.text(" "), s.Localize.text("help_mysteryBoxSystem_mysteryBoxInfo"));
      }
    }
  };
  MysteryBoxInfoDialog.prototype.selectKey = function (e) {
    this.selectedKey = e;
    this.dialogDisp.mc_key1.visible = e == 0;
    this.dialogDisp.mc_key2.visible = e == 1;
    this.dialogDisp.mc_key3.visible = e == 2;
    this.dialogDisp.mc_key4.visible = e == 3;
    this.updateAllInfos();
  };
  MysteryBoxInfoDialog.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (t.target == this.dialogDisp.mc_info) {
      this.dialogDisp.mc_toolTip.visible = true;
    }
    this.dialogDisp.mc_toolTip.visible = t.target == this.dialogDisp.mc_info;
  };
  Object.defineProperty(MysteryBoxInfoDialog.prototype, "lootBoxVO", {
    get: function () {
      return this.dialogProperties.mysteryBox.lootBoxVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MysteryBoxInfoDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  MysteryBoxInfoDialog.NAME = "MysteryBoxInfo2";
  return MysteryBoxInfoDialog;
}(D.CastleExternalDialog);
exports.MysteryBoxInfoDialog = v;
a.classImplementsInterfaces(v, "ICollectableRendererList");