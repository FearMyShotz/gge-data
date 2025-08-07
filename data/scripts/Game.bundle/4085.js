Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./1208.js");
var p = require("./4086.js");
var h = require("./495.js");
var g = require("./21.js");
var C = require("./119.js");
var _ = require("./233.js");
var m = require("./1131.js");
var f = require("./13.js");
var O = require("./4.js");
var E = require("./324.js");
var y = require("./76.js");
var b = require("./77.js");
var D = require("./42.js");
var I = require("./8.js");
var T = require("./11.js");
var v = function (e) {
  function LostAndFoundDialog() {
    var t = this;
    t._itemVOs = [];
    CONSTRUCTOR_HACK;
    return t = e.call(this, LostAndFoundDialog.NAME) || this;
  }
  n.__extends(LostAndFoundDialog, e);
  LostAndFoundDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    I.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close], L.ClickFeedbackButton);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(f.TextHelper.toUpperCaseLocaSafeTextId("dialog_lostAndFound_title")));
    this.emptyListTxt = this.textFieldManager.registerTextField(this.dialogDisp.txt_noReward, new l.LocalizedTextVO("dialog_lostAndFound_empty"));
    this.emptyListTxt.verticalAlign = D.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.dialogDisp.mc_amount.toolTipText = "dialog_lostAndFoundSpace_tooltip";
    this.dialogDisp.mc_eq.toolTipText = "dialog_equipmentSpace_tooltip";
    this.dialogDisp.mc_gem.toolTipText = "dialog_gemSpace_tooltip";
    this.dialogDisp.mc_constructionItem.toolTipText = "dialog_buildItemsSpace_tooltip";
    this.dialogDisp.mc_deco.toolTipText = "dialog_uniqueDecosSpace_tooltip";
    this.dialogDisp.mc_received.toolTipText = "dialog_lostAndFound_received_tt";
    this.dialogDisp.mc_timeLeft.toolTipText = "dialog_lostAndFound_time_tt";
    var i = new b.InfiniteScrollListOptions(A.LostAndFoundListItem, LostAndFoundDialog.ASSET_CLIP_NAME_GRID_ITEM, LostAndFoundDialog.NAME);
    i.itemPaddingY = 4;
    i.useSmoothScroll = true;
    this._scrollList = new S.InfiniteScrollListComponent(new y.InfiniteScrollListClips(this.dialogDisp.mc_list).addMaskMc(this.dialogDisp.mc_mask), i);
  };
  LostAndFoundDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    O.CastleModel.constructionItemData.addEventListener(h.CastleConstructionItemsEvent.INVENTORY_SPACE_UPDATED, this.bindFunction(this.onConstructionItemInventoryUpdated));
    O.CastleModel.smartfoxClient.sendCommandVO(new d.C2SConstructionItemInventorySpaceLeftVO());
    O.CastleModel.smartfoxClient.sendCommandVO(new p.C2SGetLostAndFoundListVO());
    this.controller.addEventListener(E.DecoStorageEvent.ON_INVENTORY_UPDATED, this.bindFunction(this.onDecoStorageUpdated));
    this.controller.addEventListener(C.CastleEquipmentEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onEqInventorySpaceUpdate));
    this.controller.addEventListener(_.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onGemInventorySpaceUpdate));
    this.controller.addEventListener(m.CastleLostAndFoundDataEvent.UPDATE_DATA, this.bindFunction(this.onLostAndFoundDataUpdated));
    O.CastleModel.timerData.addEventListener(g.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerTick));
  };
  LostAndFoundDialog.prototype.updateDialog = function () {
    this._scrollList.onShow();
    this.initListItems();
    this.updateItems();
    this.updateStorage();
    this.textFieldManager.registerTextField(this.dialogDisp.mc_received.txt_value, new l.LocalizedTextVO(this._itemVOs.length > 0 ? "dialog_lostAndFound_received" : " "));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_timeLeft.txt_value, new l.LocalizedTextVO(this._itemVOs.length > 0 ? "dialog_lostAndFound_time" : " "));
  };
  LostAndFoundDialog.prototype.hide = function () {
    e.prototype.hide.call(this);
    if (this._scrollList) {
      this._scrollList.onHide();
    }
    O.CastleModel.constructionItemData.removeEventListener(h.CastleConstructionItemsEvent.INVENTORY_SPACE_UPDATED, this.bindFunction(this.onConstructionItemInventoryUpdated));
    this.controller.removeEventListener(E.DecoStorageEvent.ON_INVENTORY_UPDATED, this.bindFunction(this.onDecoStorageUpdated));
    this.controller.removeEventListener(C.CastleEquipmentEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onEqInventorySpaceUpdate));
    this.controller.removeEventListener(_.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onGemInventorySpaceUpdate));
    this.controller.removeEventListener(m.CastleLostAndFoundDataEvent.UPDATE_DATA, this.bindFunction(this.onLostAndFoundDataUpdated));
    O.CastleModel.timerData.removeEventListener(g.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerTick));
  };
  LostAndFoundDialog.prototype.onLostAndFoundDataUpdated = function (e) {
    this.updateDialog();
  };
  LostAndFoundDialog.prototype.onTimerTick = function (e = null) {
    this._scrollList.items.forEach(LostAndFoundDialog.updateItemTimer);
  };
  LostAndFoundDialog.updateItemTimer = function (e) {
    var t = [];
    for (var i = 1; i < arguments.length; i++) {
      t[i - 1] = arguments[i];
    }
    e.updateTimer();
  };
  LostAndFoundDialog.prototype.updateStorage = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_amount, new l.LocalizedTextVO("value_proportional_value", [O.CastleModel.lostAndFoundData.getItemAmount(), a.LostAndFoundConst.INVENTORY_SIZE]));
    this.onDecoStorageUpdated();
    this.onConstructionItemInventoryUpdated();
    this.onEqInventorySpaceUpdate();
    this.onGemInventorySpaceUpdate();
    this.onTimerTick();
  };
  LostAndFoundDialog.prototype.onGemInventorySpaceUpdate = function (e = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_gem, new l.LocalizedTextVO("value_proportional_value", [O.CastleModel.gemData.filledInventorySpace, O.CastleModel.gemData.playerTotalInventorySpace]));
  };
  LostAndFoundDialog.prototype.onEqInventorySpaceUpdate = function (e = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_eq, new l.LocalizedTextVO("value_proportional_value", [O.CastleModel.equipData.filledInventorySpace, O.CastleModel.equipData.playerTotalInventorySpace]));
  };
  LostAndFoundDialog.prototype.onDecoStorageUpdated = function (e = null) {
    var t = O.CastleModel.decoStorage.getMainStorage();
    var i = t.getCurrentCapacity();
    var n = t.getMaxCapacity();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_deco, new l.LocalizedTextVO("value_proportional_value", [i, n]));
  };
  LostAndFoundDialog.prototype.onConstructionItemInventoryUpdated = function (e = null) {
    var t = u.int(s.ConstructionItemConst.INVENTORY_SOFTCAP - O.CastleModel.constructionItemData.inventorySpaceLeft);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_constructionItem, new l.LocalizedTextVO("value_proportional_value", [t, s.ConstructionItemConst.INVENTORY_SOFTCAP]));
  };
  LostAndFoundDialog.prototype.initListItems = function () {
    this._itemVOs = [];
    var e = O.CastleModel.lostAndFoundData.itemVOs;
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.remainingTimeInSeconds > 0) {
          this._itemVOs.push(n);
        }
      }
    }
  };
  LostAndFoundDialog.prototype.updateItems = function () {
    var e = [];
    if (this._itemVOs != null) {
      for (var t = 0, i = this._itemVOs; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          e.push(n);
        }
      }
    }
    this.emptyListTxt.visible = e.length <= 0;
    this._scrollList.updateWithNewData(e);
  };
  LostAndFoundDialog.prototype.onClick = function (t) {
    if (I.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          T.CastleExternalDialog.dialogHandler.showHelper("", c.Localize.text("help_lostAndFound"));
      }
    }
  };
  LostAndFoundDialog.NAME = "LostAndFound";
  LostAndFoundDialog.ASSET_CLIP_NAME_GRID_ITEM = "LostAndFoundItem";
  return LostAndFoundDialog;
}(T.CastleExternalDialog);
exports.LostAndFoundDialog = v;
o.classImplementsInterfaces(v, "ICollectableRendererList");
var S = require("./78.js");
var A = require("./4087.js");
var L = require("./36.js");