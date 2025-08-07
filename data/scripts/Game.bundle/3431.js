Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./16.js");
var c = require("./812.js");
var u = require("./12.js");
var d = require("./45.js");
var p = require("./13.js");
var h = require("./4.js");
var g = require("./52.js");
var C = require("./20.js");
var _ = require("./76.js");
var m = require("./78.js");
var f = require("./77.js");
var O = require("./200.js");
var E = require("./8.js");
var y = require("./35.js");
var b = require("./3432.js");
var D = require("./404.js");
var I = require("./1664.js");
var T = require("./3433.js");
var v = require("./37.js");
var S = function (e) {
  function RewardHubMainDialogMysteryBoxes(t, i) {
    var n = e.call(this, t) || this;
    n.selectedKeyIndex = 0;
    n.parent = i;
    n.init();
    return n;
  }
  n.__extends(RewardHubMainDialogMysteryBoxes, e);
  RewardHubMainDialogMysteryBoxes.prototype.init = function () {
    E.ButtonHelper.initButtons([this.subLayerDisp.btn_settings, this.subLayerDisp.mc_config.btn_config], C.ClickFeedbackButtonHover);
    this._checkboxStart = new o.CheckBoxButton(this.subLayerDisp.mc_config.btn_cbx, true);
    this._checkboxKey0 = new o.CheckBoxButton(this.subLayerDisp.cbx0, true);
    this._checkboxKey1 = new o.CheckBoxButton(this.subLayerDisp.cbx1, true);
    this._checkboxKey2 = new o.CheckBoxButton(this.subLayerDisp.cbx2, true);
    this._checkboxKey3 = new o.CheckBoxButton(this.subLayerDisp.cbx3, true);
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new r.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("dialog_mysteryBoxSystem_mysteryBoxHUB_header")));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_config.txt_copy, new r.LocalizedTextVO("dialog_rewardHub_showAtGameStart_desc"));
    this.subLayerDisp.btn_settings.toolTipText = "settings";
    this.subLayerDisp.mc_config.btn_config.toolTipText = "settings";
    this.subLayerDisp.mc_progress.mouseChildren = false;
    this.subLayerDisp.mc_progress.toolTipText = "dialog_mysteryBoxSystem_keyDraws_basics_tooltip";
    this.subLayerDisp.mc_key.mouseChildren = false;
    this.subLayerDisp.mc_key.toolTipText = "dialog_mysteryBoxSystem_keyDraws_basics_tooltip";
    this.subLayerDisp.mc_key_0.toolTipText = d.CollectableHelper.createVO(u.CollectableEnum.GENERIC_CURRENCY, 0, g.ClientConstCurrency.ID_MYSTERY_BOX_KEY_COMMON).getNameTextId();
    this.subLayerDisp.mc_key_1.toolTipText = d.CollectableHelper.createVO(u.CollectableEnum.GENERIC_CURRENCY, 0, g.ClientConstCurrency.ID_MYSTERY_BOX_KEY_RARE).getNameTextId();
    this.subLayerDisp.mc_key_2.toolTipText = d.CollectableHelper.createVO(u.CollectableEnum.GENERIC_CURRENCY, 0, g.ClientConstCurrency.ID_MYSTERY_BOX_KEY_EPIC).getNameTextId();
    this.subLayerDisp.mc_key_3.toolTipText = d.CollectableHelper.createVO(u.CollectableEnum.GENERIC_CURRENCY, 0, g.ClientConstCurrency.ID_MYSTERY_BOX_KEY_LEGENDARY).getNameTextId();
    I.MysteryBoxOpeningAnimationHandler.loadAnimations();
  };
  RewardHubMainDialogMysteryBoxes.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    a.BasicModel.smartfoxClient.sendCommandVO(new T.C2SGetLootBoxesStatus());
    this.subLayerDisp.mc_config.visible = this.parent.isSettingTabOpen;
    a.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_list.mc_items);
    this._checkboxStart.selectButton = h.CastleModel.localData.readOpenRewardHubAtStart();
    var i = new f.InfiniteScrollListOptions(b.RewardHubDialogMysteryBoxItem, "CastleRewardHub_MysteryBox_ListItem", D.RewardHubMainDialog.NAME);
    i.itemPaddingY = 0;
    i.useSmoothScroll = true;
    this._list = new m.InfiniteScrollListComponent(new _.InfiniteScrollListClips(this.subLayerDisp.mc_list).addSliderMc(this.subLayerDisp.mc_list.mc_slider), i);
    this._list.onShow();
    if (this.getSelectedKeyID() == g.ClientConstCurrency.ID_MYSTERY_BOX_KEY_COMMON || h.CastleModel.currencyData.getAmountById(this.getSelectedKeyID()) > 0) {
      this.keySelection(this.selectedKeyIndex);
    } else {
      this.keySelection(0);
    }
    h.CastleModel.lootBoxData.addEventListener(c.CastleLootBoxDataEvent.INVENTORY_UPDATED, this.bindFunction(this.updateAllInfos));
    this._list.scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    this.controller.addEventListener(v.CastleServerMessageArrivedEvent.OLE_LOOT_BOX_ARRIVED, this.bindFunction(this.onServerResponseLootBoxOpened));
  };
  RewardHubMainDialogMysteryBoxes.prototype.onServerResponseLootBoxOpened = function (e) {
    this.parent.hide();
  };
  RewardHubMainDialogMysteryBoxes.prototype.onScroll = function (e = null) {
    O.TooltipManagerFacade.hideAllTooltips();
  };
  RewardHubMainDialogMysteryBoxes.prototype.hide = function () {
    if (this._list && this._list.scrollComponent.scrollVO) {
      this._list.onHide();
      this._list.destroy();
    }
    e.prototype.hide.call(this);
    h.CastleModel.lootBoxData.removeEventListener(c.CastleLootBoxDataEvent.INVENTORY_UPDATED, this.bindFunction(this.updateAllInfos));
    this.controller.removeEventListener(v.CastleServerMessageArrivedEvent.OLE_LOOT_BOX_ARRIVED, this.bindFunction(this.onServerResponseLootBoxOpened));
  };
  RewardHubMainDialogMysteryBoxes.prototype.updateAllInfos = function (e = null) {
    this.initKeyTextField(this.subLayerDisp.txt_copy1, g.ClientConstCurrency.ID_MYSTERY_BOX_KEY_RARE);
    this.initKeyTextField(this.subLayerDisp.txt_copy2, g.ClientConstCurrency.ID_MYSTERY_BOX_KEY_EPIC);
    this.initKeyTextField(this.subLayerDisp.txt_copy3, g.ClientConstCurrency.ID_MYSTERY_BOX_KEY_LEGENDARY);
    var t = this.dataList();
    this._list.updateWithNewData(t, false);
    this._list.onShow();
    this.subLayerDisp.mc_progress.mc_bar.scaleX = Math.min(h.CastleModel.lootBoxData.getMysteryKeyProgress() / h.CastleModel.lootBoxData.getMysteryKeyProgressMax(), 1);
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_progress.txt_copy, new r.LocalizedTextVO("numbersXY", [h.CastleModel.lootBoxData.getMysteryKeyProgress(), h.CastleModel.lootBoxData.getMysteryKeyProgressMax()]));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_empty, new r.LocalizedTextVO("dialog_mysteryBoxSystem_mysteryBoxHUB_empty")).visible = t.length == 0;
    this._list.setVisibility(t.length > 0);
    this.initCBX(this._checkboxKey1, g.ClientConstCurrency.ID_MYSTERY_BOX_KEY_RARE);
    this.initCBX(this._checkboxKey2, g.ClientConstCurrency.ID_MYSTERY_BOX_KEY_EPIC);
    this.initCBX(this._checkboxKey3, g.ClientConstCurrency.ID_MYSTERY_BOX_KEY_LEGENDARY);
  };
  RewardHubMainDialogMysteryBoxes.prototype.initKeyTextField = function (e, t) {
    var i = h.CastleModel.currencyData.getAmountById(t);
    var n = h.CastleModel.currencyData.getXmlCurrencyById(t).hardCap;
    this.textFieldManager.registerTextField(e, new r.LocalizedTextVO("numbersXY", [i, n])).color = i >= n ? l.ClientConstColor.MODERN_RED2 : l.ClientConstColor.MODERN_DEFAULT_BRIGHT;
  };
  RewardHubMainDialogMysteryBoxes.prototype.initCBX = function (e, t) {
    e.mouseEnabled = h.CastleModel.currencyData.getAmountById(t) >= 1;
    if (e.mouseEnabled) {
      e.disp.gotoAndStop(e.isSelected ? 2 : 1);
    } else {
      e.disp.gotoAndStop(3);
    }
  };
  RewardHubMainDialogMysteryBoxes.prototype.dataList = function () {
    for (var e = h.CastleModel.lootBoxData.allLootBoxes(), t = [], i = 0; i < e.length; i += RewardHubMainDialogMysteryBoxes.AMOUNT_BOXES_ONE_ROW) {
      var n = [];
      for (var o = 0; o < RewardHubMainDialogMysteryBoxes.AMOUNT_BOXES_ONE_ROW; o++) {
        if (i + o < e.length) {
          n.push(e[i + o]);
        }
      }
      t.push({
        data: n,
        selectedKey: this.getSelectedKeyID()
      });
    }
    return t;
  };
  RewardHubMainDialogMysteryBoxes.prototype.getSelectedKeyID = function () {
    switch (this.selectedKeyIndex) {
      case 0:
        return g.ClientConstCurrency.ID_MYSTERY_BOX_KEY_COMMON;
      case 1:
        return g.ClientConstCurrency.ID_MYSTERY_BOX_KEY_RARE;
      case 2:
        return g.ClientConstCurrency.ID_MYSTERY_BOX_KEY_EPIC;
      case 3:
        return g.ClientConstCurrency.ID_MYSTERY_BOX_KEY_LEGENDARY;
    }
  };
  RewardHubMainDialogMysteryBoxes.prototype.onClick = function (t) {
    if (E.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.subLayerDisp.btn_settings:
          this.subLayerDisp.mc_config.visible = true;
          this.parent.isSettingTabOpen = true;
          break;
        case this.subLayerDisp.mc_config.btn_config:
          this.subLayerDisp.mc_config.visible = false;
          this.parent.isSettingTabOpen = false;
          break;
        case this._checkboxKey0.disp:
          this.keySelection(0);
          break;
        case this._checkboxKey1.disp:
          if (this._checkboxKey1.mouseEnabled) {
            this.keySelection(1);
          }
          break;
        case this._checkboxKey2.disp:
          if (this._checkboxKey2.mouseEnabled) {
            this.keySelection(2);
          }
          break;
        case this._checkboxKey3.disp:
          if (this._checkboxKey3.mouseEnabled) {
            this.keySelection(3);
          }
          break;
        case this._checkboxStart.disp:
          this._checkboxStart.toggleSelected();
          h.CastleModel.localData.saveOpenRewardHubAtStart(this._checkboxStart.isSelected);
      }
    }
  };
  RewardHubMainDialogMysteryBoxes.prototype.keySelection = function (e) {
    this.selectedKeyIndex = e;
    if (e == 0) {
      this._checkboxKey0.selected();
    } else {
      this._checkboxKey0.deselected();
    }
    if (e == 1) {
      this._checkboxKey1.selected();
    } else {
      this._checkboxKey1.deselected();
    }
    if (e == 2) {
      this._checkboxKey2.selected();
    } else {
      this._checkboxKey2.deselected();
    }
    if (e == 3) {
      this._checkboxKey3.selected();
    } else {
      this._checkboxKey3.deselected();
    }
    this.updateAllInfos();
  };
  RewardHubMainDialogMysteryBoxes.AMOUNT_BOXES_ONE_ROW = 3;
  return RewardHubMainDialogMysteryBoxes;
}(y.CastleDialogSubLayer);
exports.RewardHubMainDialogMysteryBoxes = S;
s.classImplementsInterfaces(S, "ICollectableRendererList", "ISublayer");