Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./2726.js");
var d = require("./1470.js");
var p = require("./763.js");
var h = require("./1475.js");
var g = require("./37.js");
var C = require("./21.js");
var _ = require("./15.js");
var m = require("./4.js");
var f = require("./8.js");
var O = function () {
  function CastleConstructionItemsCraftingSublayerProgress(e) {
    this.timerRunning = false;
    this.crafting = e;
    f.ButtonHelper.initBasicButtons([e.idle.button, e.progress.btn_full_skip, e.progress.btn_minute_skip]);
    CastleConstructionItemsCraftingSublayerProgress.textFieldManager.registerTextField(e.title, new l.LocalizedTextVO("dialog_ci_crafting"));
    CastleConstructionItemsCraftingSublayerProgress.textFieldManager.registerTextField(e.idle.button.text, new l.LocalizedTextVO("dialog_ci_crafting_button"));
    CastleConstructionItemsCraftingSublayerProgress.textFieldManager.registerTextField(e.idle.text, new l.LocalizedTextVO("dialog_ci_crafting_idle")).autoFitToBounds = true;
    this._processText = CastleConstructionItemsCraftingSublayerProgress.textFieldManager.registerTextField(e.progress.description, new l.LocalizedTextVO("dialog_ci_crafting_process"));
    this._processText.autoFitToBounds = true;
    this._remainingTimeText = CastleConstructionItemsCraftingSublayerProgress.textFieldManager.registerTextField(e.progress.bar.text, new r.TextVO(""));
  }
  CastleConstructionItemsCraftingSublayerProgress.prototype.hide = function () {
    m.CastleModel.timerData.removeEventListener(C.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.craftingTimer));
    this.timerRunning = false;
  };
  CastleConstructionItemsCraftingSublayerProgress.prototype.craftingTimer = function (e) {
    m.CastleModel.constructionItemData.craftingSeconds--;
    if (m.CastleModel.constructionItemData.craftingSeconds < 0) {
      m.CastleModel.smartfoxClient.sendCommandVO(new d.C2SGetConstructionCraftingInfoVO());
      this.craftingButton();
      m.CastleModel.smartfoxClient.sendCommandVO(new p.C2SGetContructionItemsInventoryVO());
    } else {
      this.setCraftingValues();
    }
    var t = c.int(s.ConstructionConst.getFastCompleteCostC2(m.CastleModel.constructionItemData.craftingSeconds, 2));
    switch (t) {
      case 0:
        this.crafting.progress.btn_full_skip.toolTipText = {
          t: "freeSkipButton_tooltip",
          p: [t]
        };
        break;
      case 1:
        this.crafting.progress.btn_full_skip.toolTipText = {
          t: "fullSkipButtonCooldown_tooltip_singular",
          p: [t]
        };
        break;
      default:
        this.crafting.progress.btn_full_skip.toolTipText = {
          t: "fullSkipButtonCooldown_tooltip",
          p: [t]
        };
    }
  };
  CastleConstructionItemsCraftingSublayerProgress.prototype.craftingButton = function () {
    m.CastleModel.timerData.removeEventListener(C.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.craftingTimer));
    this.timerRunning = false;
    this.crafting.idle.visible = !(this.crafting.progress.visible = false);
  };
  CastleConstructionItemsCraftingSublayerProgress.prototype.craftingProgress = function () {
    if (!this.timerRunning && (m.CastleModel.timerData.addEventListener(C.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.craftingTimer)), this.timerRunning = true, m.CastleModel.constructionItemData.craftingRecipe)) {
      var e = m.CastleModel.constructionItemData.craftingRecipe.constructionItem;
      this._processText.textContentVO.textReplacements = [e.nameTextId, e.level];
    }
    this.setCraftingValues();
  };
  CastleConstructionItemsCraftingSublayerProgress.prototype.setCraftingValues = function () {
    var e = c.int(Math.max(1, m.CastleModel.constructionItemData.totalCraftingTime));
    this.crafting.progress.bar.bg.scaleX = Math.max(0, Math.min(1, 1 - m.CastleModel.constructionItemData.craftingSeconds / e));
    this._remainingTimeText.textContentVO = new r.TextVO(n.TimeStringHelper.getShortTimeStringBySeconds(m.CastleModel.constructionItemData.craftingSeconds));
    this.crafting.idle.visible = !(this.crafting.progress.visible = true);
  };
  CastleConstructionItemsCraftingSublayerProgress.prototype.update = function () {
    if (m.CastleModel.constructionItemData.craftingSeconds > -1) {
      this.craftingProgress();
    } else {
      this.craftingButton();
    }
  };
  CastleConstructionItemsCraftingSublayerProgress.prototype.onCICArrived = function (e) {
    _.CastleBasicController.getInstance().removeEventListener(g.CastleServerMessageArrivedEvent.CIC_ARRIVED, this.bindFunction(this.onCICArrived));
    f.ButtonHelper.enableButton(this.crafting.idle.button, true);
    if (c.int(e.params[0]) == a.ERROR.ALL_OK) {
      this.craftingProgress();
    } else {
      this.craftingButton();
    }
    m.CastleModel.smartfoxClient.sendCommandVO(new p.C2SGetContructionItemsInventoryVO());
  };
  CastleConstructionItemsCraftingSublayerProgress.prototype.onClick = function (e, t) {
    switch (e) {
      case this.crafting.idle.button:
        f.ButtonHelper.enableButton(this.crafting.idle.button, false);
        _.CastleBasicController.getInstance().addEventListener(g.CastleServerMessageArrivedEvent.CIC_ARRIVED, this.bindFunction(this.onCICArrived));
        if (m.CastleModel.userData.castleList.getCastleVOByID(m.CastleModel.kingdomData.activeKingdomID, m.CastleModel.areaData.activeAreaInfo.objectId)) {
          m.CastleModel.smartfoxClient.sendCommandVO(new u.C2SCraftConstructionItemVO(t.id, m.CastleModel.kingdomData.activeKingdomID, m.CastleModel.areaData.activeAreaInfo.objectId));
        } else {
          m.CastleModel.smartfoxClient.sendCommandVO(new u.C2SCraftConstructionItemVO(t.id, m.CastleModel.kingdomData.activeKingdomID, m.CastleModel.userData.castleList.getMainCastleByKingdomID(m.CastleModel.kingdomData.activeKingdomID).objectId));
        }
        break;
      case this.crafting.progress.btn_minute_skip:
        E.CastleDialogHandler.getInstance().registerDefaultDialogs(y.CastleMinuteSkipDialog, new b.ConstructionItemCraftingMinuteSkipProperties(t));
        break;
      case this.crafting.progress.btn_full_skip:
        m.CastleModel.smartfoxClient.sendCommandVO(new h.C2SMinuteSkipCraftingVO("-", 1));
    }
  };
  Object.defineProperty(CastleConstructionItemsCraftingSublayerProgress, "textFieldManager", {
    get: function () {
      return o.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleConstructionItemsCraftingSublayerProgress.prototype.disableButton = function (e) {
    f.ButtonHelper.enableButton(this.crafting.idle.button, false);
    this.crafting.idle.button.toolTipText = e;
  };
  CastleConstructionItemsCraftingSublayerProgress.prototype.enableButton = function () {
    f.ButtonHelper.enableButton(this.crafting.idle.button, true);
    this.crafting.idle.button.toolTipText = null;
  };
  return CastleConstructionItemsCraftingSublayerProgress;
}();
exports.CastleConstructionItemsCraftingSublayerProgress = O;
var E = require("./9.js");
var y = require("./208.js");
var b = require("./2727.js");