Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./3345.js");
var p = require("./3346.js");
var h = require("./26.js");
var g = require("./67.js");
var C = require("./19.js");
var _ = require("./13.js");
var m = require("./4.js");
var f = require("./47.js");
var O = require("./189.js");
var E = require("./8.js");
var y = require("./11.js");
var b = createjs.Point;
var D = function (e) {
  function CastleQuestBuyRewardDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleQuestBuyRewardDialog.NAME) || this;
  }
  n.__extends(CastleQuestBuyRewardDialog, e);
  CastleQuestBuyRewardDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.scrollComponent = new v.SimpleScrollComponent(new f.SimpleScrollVO().initByParent(this.dialogDisp).addMouseWheelElements([this.dialogDisp]), new O.SimpleScrollStrategyHorizontal());
    E.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_buy], A.ClickFeedbackButton);
  };
  CastleQuestBuyRewardDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.shownRewards = this.dialogProperties.quest ? this.dialogProperties.quest.getActualRewardList() : this.campaignEventVO.rewards;
    this.updateText();
    this.updateScrollComponent();
    this.showRewardlist();
    this.dialogDisp.mc_category.gotoAndStop(6);
    m.CastleModel.specialEventData.addEventListener(h.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventEnd));
  };
  CastleQuestBuyRewardDialog.prototype.updateText = function () {
    if (this.dialogProperties.quest) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new c.TextVO(_.TextHelper.toUpperCaseLocaSafe(s.Localize.text("dialog_buyProgress_header"))));
      this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new l.LocalizedTextVO("dialog_buyProgress_desc"));
      this.textFieldManager.registerTextField(this.dialogDisp.txt_confirmation, new l.LocalizedTextVO("dialog_buyProgress_confirmation"));
      this.textFieldManager.registerTextField(this.dialogDisp.btn_buy.txt_label, new r.LocalizedNumberVO(this.dialogProperties.quest.buyCost));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new c.TextVO(_.TextHelper.toUpperCaseLocaSafe(s.Localize.text("dialog_buyEndReward_header"))));
      this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new l.LocalizedTextVO("dialog_buyEndReward_desc"));
      this.textFieldManager.registerTextField(this.dialogDisp.txt_confirmation, new l.LocalizedTextVO("dialog_buyEndReward_confirmation"));
      this.textFieldManager.registerTextField(this.dialogDisp.btn_buy.txt_label, new r.LocalizedNumberVO(this.campaignEventVO.buyCost));
    }
  };
  CastleQuestBuyRewardDialog.prototype.updateScrollComponent = function () {
    var e = u.int(this.shownRewards ? this.shownRewards.length : 0);
    var t = u.int(Math.max(0, e - CastleQuestBuyRewardDialog.MAX_REWARDS));
    this.scrollComponent.init(0, t);
    this.scrollComponent.scrollToValue(0);
    if (t > 0) {
      this.scrollComponent.setVisibility(true);
      this.scrollComponent.show();
      this.scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChange));
    } else {
      this.scrollComponent.setVisibility(false);
    }
  };
  CastleQuestBuyRewardDialog.prototype.showRewardlist = function () {
    var e = new T.CollectableList();
    if (this.shownRewards) {
      for (var t = 0; t < CastleQuestBuyRewardDialog.MAX_REWARDS; t++) {
        if (t + this.scrollComponent.currentValue < this.shownRewards.length) {
          e.addItem(this.shownRewards.getItemByIndex(t + this.scrollComponent.currentValue));
        }
      }
    }
    S.CollectableRenderHelper.displayMultipleItemsComplete(this, new g.CollectableRenderClipsList(this.dialogDisp, "item").addItemMcs("mc_item").addInfoBtns("parent.btn_info"), e, new C.CollectableRenderOptions(C.CollectableRenderOptions.SET_ADVANCED, new b(88, 82)), this.bindFunction(this.preRenderFunc));
  };
  CastleQuestBuyRewardDialog.prototype.preRenderFunc = function (e) {
    if (e.itemVO) {
      var t = e.getRenderer(C.CollectableRenderOptions.ICON_TRANSFORM);
      if (I.ClientConstCollectable.COLLECTABLES_WITHOUT_TEXTFIELD.indexOf(e.itemVO.itemType) > -1) {
        t.transform.offset.y = 12;
      }
    }
  };
  CastleQuestBuyRewardDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.scrollComponent.hide();
    m.CastleModel.specialEventData.removeEventListener(h.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventEnd));
  };
  CastleQuestBuyRewardDialog.prototype.onEventEnd = function (e) {
    if (e.specialEventVO.eventId == a.EventConst.EVENTTYPE_TIMELIMITED_CAMPAIGN_EVENT) {
      this.hide();
    }
  };
  CastleQuestBuyRewardDialog.prototype.onScrollValueChange = function () {
    this.showRewardlist();
  };
  CastleQuestBuyRewardDialog.prototype.onClick = function (t) {
    if (E.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_buy:
          if (this.dialogProperties.quest) {
            m.CastleModel.smartfoxClient.sendCommandVO(new d.C2SBuyCampaignQuestVO(this.dialogProperties.quest.campaignQuestID));
          } else {
            m.CastleModel.smartfoxClient.sendCommandVO(new p.C2SBuyCampaignRewardVO());
          }
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleQuestBuyRewardDialog.prototype, "campaignEventVO", {
    get: function () {
      return m.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_TIMELIMITED_CAMPAIGN_EVENT);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestBuyRewardDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleQuestBuyRewardDialog.__initialize_static_members = function () {
    CastleQuestBuyRewardDialog.NAME = "CastleQuestBuyRewardDialogEx";
    CastleQuestBuyRewardDialog.MAX_REWARDS = 4;
  };
  return CastleQuestBuyRewardDialog;
}(y.CastleExternalDialog);
exports.CastleQuestBuyRewardDialog = D;
var I = require("./86.js");
var T = require("./48.js");
var v = require("./95.js");
var S = require("./25.js");
var A = require("./36.js");
o.classImplementsInterfaces(D, "ICollectableRendererList");
D.__initialize_static_members();