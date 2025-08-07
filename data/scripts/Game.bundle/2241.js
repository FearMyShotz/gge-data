Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./28.js");
var l = require("./1267.js");
var c = require("./21.js");
var u = require("./31.js");
var d = require("./104.js");
var p = require("./19.js");
var h = require("./13.js");
var g = require("./4.js");
var C = require("./27.js");
var _ = require("./9.js");
var m = require("./20.js");
var f = require("./8.js");
var O = require("./25.js");
var E = require("./415.js");
var y = require("./167.js");
var b = require("./206.js");
var D = createjs.MouseEvent;
var I = createjs.Point;
var T = function (e) {
  function GeneralsHubQuestComponent(t, i) {
    var n = e.call(this, t) || this;
    n.tombolaIndex = 0;
    n.questID = i;
    n.questVO = g.CastleModel.generalsData.getGeneralsHubQuestVOByCharacterID(n.questID);
    n.initComponent();
    return n;
  }
  n.__extends(GeneralsHubQuestComponent, e);
  GeneralsHubQuestComponent.prototype.initComponent = function () {
    e.prototype.initComponent.call(this);
    f.ButtonHelper.initButtons([this.dispClip.btn_left, this.dispClip.btn_right, this.dispClip.btn_offering, this.dispClip.btn_buyOffering, this.dispClip.btn_free], m.ClickFeedbackButtonHover, 1);
  };
  GeneralsHubQuestComponent.prototype.updateCostsSection = function () {
    var e = this.questVO.getCostVOForPayQuest(this.tombolaIndex);
    var t = new p.CollectableRenderOptions(p.CollectableRenderOptions.ICON, new I(35, 35));
    var i = new u.CollectableRenderClips().addIconMc(this.dispClip.mc_icon);
    O.CollectableRenderHelper.displaySingleItemComplete(new d.CollectableRendererList(), i, e, t);
    this.dispClip.btn_left.visible = this.dispClip.btn_right.visible = this.questVO.amountOfTombolas > 1;
    var n = new p.CollectableRenderOptions(p.CollectableRenderOptions.ICON, new I(38, 38));
    n.icon.useDropShadowIcon = true;
    var o = new u.CollectableRenderClips().addIconMc(this.dispClip.btn_offering.mc_icon);
    O.CollectableRenderHelper.displaySingleItemComplete(new d.CollectableRendererList(), o, e, n);
  };
  GeneralsHubQuestComponent.prototype.show = function () {
    e.prototype.show.call(this);
    this.updateDisp();
    g.CastleModel.timerData.addEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
    this.disp.parent.addEventListener(D.CLICK, this.bindFunction(this.onMouseClick));
  };
  GeneralsHubQuestComponent.prototype.hide = function () {
    e.prototype.hide.call(this);
    g.CastleModel.timerData.removeEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
    this.disp.parent.removeEventListener(D.CLICK, this.bindFunction(this.onMouseClick));
  };
  GeneralsHubQuestComponent.prototype.updateDisp = function () {
    var e = this.questVO.availableQuests > 0;
    var t = this.questVO.getTombolaOfferingCurrencyID(this.tombolaIndex);
    var i = this.questVO.getPackageVOForCurrencyID(t);
    var n = g.CastleModel.currencyData.getAmountById(t);
    var a = this.questVO.getTombolaID(this.tombolaIndex) == this.questVO.freeOpeningTombolaID;
    var r = !e && n > 0;
    var l = !e && n <= 0;
    this.dispClip.btn_free.visible = e;
    this.dispClip.btn_buyOffering.visible = l;
    this.dispClip.btn_offering.visible = r;
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.dispClip.txt_title, new s.LocalizedTextVO(this.questVO.nameTextID));
    this.updateTime();
    this.dispClip.mc_time.visible = a && !e;
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.dispClip.btn_free.txt_copy, new s.TextVO(h.TextHelper.toUpperCaseLocaSafeTextId("dialog_generals_inn_draw_button")));
    var c = "";
    if (a && e) {
      c += s.Localize.text("dialog_generals_inn_freeDrawAvailable_tooltip") + "\n";
      c += s.Localize.text("numbersXY", [this.questVO.availableQuests, this.questVO.maxFreeOpenings]);
    } else if (!a) {
      c = s.Localize.text("dialog_generals_inn_noFreeDraw_tooltip");
    }
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.dispClip.txt_copy, new s.TextVO(c)).visible = c.length > 0;
    var u = a && e ? 0 : 1;
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.dispClip.txt_amount, new s.LocalizedTextVO("xamount", [u]));
    var d = g.CastleModel.currencyData.getAmountById(this.questVO.getTombolaOfferingCurrencyID(this.tombolaIndex));
    this.dispClip.btn_free.visible = a && e;
    this.dispClip.btn_buyOffering.visible = !this.dispClip.btn_free.visible && d <= 1 && !!i;
    this.dispClip.btn_offering.visible = !this.dispClip.btn_free.visible && d > 0;
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.dispClip.btn_offering.txt_copy, new s.TextVO(h.TextHelper.toUpperCaseLocaSafeTextId("dialog_generals_inn_offering_button")));
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.dispClip.btn_buyOffering.txt_copy, new s.TextVO(h.TextHelper.toUpperCaseLocaSafeTextId("dialog_generals_inn_buyOffering_button")));
    this.updateCostsSection();
  };
  GeneralsHubQuestComponent.prototype.updateTime = function () {
    var e = "";
    e += s.Localize.text("dialog_generals_inn_freeDrawCountdown_tooltip") + "\n";
    e += C.CastleTimeStringHelper.getEventTimeString(this.questVO.remainingCoolDownInSeconds, r.ClientConstTime.SECONDS_PER_DAY, 1);
    var t = o.GoodgameTextFieldManager.getInstance().registerTextField(this.dispClip.txt_time, new s.TextVO(e));
    if (t.numLines >= 3) {
      t.textContentVO.stringValue = t.textContentVO.stringValue.replace("\n", " ");
    }
    if (t.numLines >= 3) {
      t.autoFitToBounds = true;
    }
    t.visible = this.questVO.getTombolaID(this.tombolaIndex) == this.questVO.freeOpeningTombolaID && this.questVO.availableQuests <= 0;
  };
  GeneralsHubQuestComponent.prototype.onMouseClick = function (e) {
    if (f.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dispClip.btn_offering:
          this.onPaidQuest();
          break;
        case this.dispClip.btn_buyOffering:
          this.onBuyOffer();
          break;
        case this.dispClip.btn_free:
          this.onFreeQuest();
          break;
        case this.dispClip.btn_left:
          if (this.tombolaIndex <= 0) {
            this.tombolaIndex = this.questVO.amountOfTombolas - 1;
          } else {
            this.tombolaIndex--;
          }
          this.updateDisp();
          break;
        case this.dispClip.btn_right:
          if (this.tombolaIndex >= this.questVO.amountOfTombolas - 1) {
            this.tombolaIndex = 0;
          } else {
            this.tombolaIndex++;
          }
          this.updateDisp();
      }
    }
  };
  GeneralsHubQuestComponent.prototype.onFreeQuest = function () {
    o.BasicModel.smartfoxClient.sendCommandVO(new l.C2SSpinCharacterTombolaVO(this.questID, this.questVO.getTombolaOfferingCurrencyID(this.tombolaIndex), 1, 1));
    g.CastleModel.generalsData.lastPayedQuestCurrency = this.questVO.getTombolaOfferingCurrencyID(this.tombolaIndex);
  };
  GeneralsHubQuestComponent.prototype.onPaidQuest = function () {
    g.CastleModel.generalsData.lastPayedQuestCurrency = this.questVO.getTombolaOfferingCurrencyID(this.tombolaIndex);
    if (g.CastleModel.currencyData.getAmountById(this.questVO.getTombolaOfferingCurrencyID(this.tombolaIndex)) > 0) {
      o.BasicModel.smartfoxClient.sendCommandVO(new l.C2SSpinCharacterTombolaVO(this.questID, this.questVO.getTombolaOfferingCurrencyID(this.tombolaIndex), 0, 1));
    }
  };
  GeneralsHubQuestComponent.prototype.onBuyOffer = function () {
    var e = new y.CastleGenericBuyDialogProperties();
    e.eventPackageVO = g.CastleModel.eventPackageData.getEventPackageByID(this.questVO.getPackageVOForCurrencyID(this.questVO.getTombolaOfferingCurrencyID(this.tombolaIndex)).packageID);
    e.buyType = a.PackageConst.BUY_TYPE_OFFERINGS;
    _.CastleDialogHandler.getInstance().registerDefaultDialogs(b.ModernPackageShopBuyDialog, e);
  };
  Object.defineProperty(GeneralsHubQuestComponent.prototype, "dispClip", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  return GeneralsHubQuestComponent;
}(E.BasicIngameUIComponent);
exports.GeneralsHubQuestComponent = T;