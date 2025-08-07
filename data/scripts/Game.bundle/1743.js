Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./60.js");
var c = require("./21.js");
var u = require("./31.js");
var d = require("./19.js");
var p = require("./4.js");
var h = require("./130.js");
var g = require("./27.js");
var C = require("./8.js");
var _ = require("./73.js");
var m = require("./11.js");
var f = require("./25.js");
var O = createjs.MovieClip;
var E = createjs.Point;
var y = function (e) {
  function CastleMultiChestDialog() {
    var t = this;
    t.hasBeenDisplacedFor2Offers = false;
    t._buttonArray = [];
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleMultiChestDialog.NAME) || this;
  }
  n.__extends(CastleMultiChestDialog, e);
  CastleMultiChestDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this._buttonArray.push(this.dialogDisp.btn_close, this.dialogDisp.reward_box_0.btn_buy, this.dialogDisp.reward_box_1.btn_buy, this.dialogDisp.reward_box_2.btn_buy);
    this._buttonArray.push(this.dialogDisp.btn_buy_all);
    this.initButtons();
    this.dialogDisp.reward_box_0.btn_buy.txt_buy.defaultCacheScale = 2;
    this.dialogDisp.reward_box_1.btn_buy.txt_buy.defaultCacheScale = 2;
    this.dialogDisp.reward_box_2.btn_buy.txt_buy.defaultCacheScale = 2;
    this.dialogDisp.btn_buy_all.txt_buy_all.defaultCacheScale = 2;
  };
  CastleMultiChestDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.destroyCollectableRenderList();
    p.CastleModel.timerData.addEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.setRemainingTime));
    p.CastleModel.privateOfferData.addEventListener(h.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
    this.setChar();
    this.initText();
    this.initOfferBoxes();
  };
  CastleMultiChestDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.reward_box_0.btn_buy:
        p.CastleModel.privateOfferData.sendOfferPay(this.dialogProperties.offerVO.id, 0);
        this.hide();
        break;
      case this.dialogDisp.reward_box_1.btn_buy:
        p.CastleModel.privateOfferData.sendOfferPay(this.dialogProperties.offerVO.id, 1);
        this.hide();
        break;
      case this.dialogDisp.reward_box_2.btn_buy:
        p.CastleModel.privateOfferData.sendOfferPay(this.dialogProperties.offerVO.id, 2);
        this.hide();
        break;
      case this.dialogDisp.btn_buy_all:
        p.CastleModel.privateOfferData.sendOfferPayAll(this.dialogProperties.offerVO.id);
        this.hide();
    }
  };
  CastleMultiChestDialog.prototype.initOfferBoxes = function () {
    var e = r.int(this.offerVO.amountOfDescriptions());
    if (e == 2 && !this.hasBeenDisplacedFor2Offers) {
      this.dialogDisp.reward_box_0.x += CastleMultiChestDialog.TWO_OFFERBOX_DISPLACEMENT;
      this.dialogDisp.reward_box_1.x += CastleMultiChestDialog.TWO_OFFERBOX_DISPLACEMENT;
      this.dialogDisp.reward_box_2.visible = false;
      this.hasBeenDisplacedFor2Offers = true;
    }
    if (e == 3 && this.hasBeenDisplacedFor2Offers) {
      this.dialogDisp.reward_box_0.x -= CastleMultiChestDialog.TWO_OFFERBOX_DISPLACEMENT;
      this.dialogDisp.reward_box_1.x -= CastleMultiChestDialog.TWO_OFFERBOX_DISPLACEMENT;
      this.dialogDisp.reward_box_2.visible = true;
      this.hasBeenDisplacedFor2Offers = false;
    }
    var t = 0;
    for (var i = 0; i < e; i++) {
      this.setUpOfferBox(i);
      t += r.int(this.getOfferCost(i));
    }
    this.dialogDisp.btn_buy_all.toolTipText = {
      t: "xRubies",
      p: [t]
    };
  };
  CastleMultiChestDialog.prototype.initButtons = function () {
    this.initBasicButtons(this._buttonArray);
    this.delayEnableButtons();
  };
  CastleMultiChestDialog.prototype.delayEnableButtons = function () {
    if (this._buttonArray != null) {
      for (var e = 0, t = this._buttonArray; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          C.ButtonHelper.delayEnableButton(i, true);
        }
      }
    }
  };
  CastleMultiChestDialog.prototype.setChar = function () {
    var e = r.int(this.dialogProperties.offerVO.getVisualComponentByName(l.ClientConstOffer.OFFER_VISUAL_OFFER_DIALOG).dialogCustomization.OT);
    this.dialogDisp.char_mc.gotoAndStop(Math.max(0, e));
  };
  CastleMultiChestDialog.prototype.initText = function () {
    var e = this.dialogProperties.offerVO.getVisualComponentByName(l.ClientConstOffer.OFFER_VISUAL_OFFER_DIALOG);
    var t = e.dialogCustomization.CID;
    this.dialogDisp.btn_buy_all.visible = false;
    if (e.dialogCustomization.hasOwnProperty("BAB")) {
      this.dialogDisp.btn_buy_all.visible = e.dialogCustomization.BAB == 1;
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO("dialog_specialOfferBrand_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new s.LocalizedTextVO(t));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_subTitle, new s.LocalizedTextVO("dialog_privateOffer_whaleChest_noise"));
    this._txt_timeleft = this.textFieldManager.registerTextField(this.dialogDisp.timebar.txt_timeleft, new s.LocalizedTextVO("countdown_restTime", "-"));
    this.dialogDisp.timebar_overlay.toolTipText = "resttime";
    this.setRemainingTime(null);
    this.textFieldManager.registerTextField(this.dialogDisp.reward_box_0.btn_buy.txt_buy, new s.LocalizedTextVO("buy"));
    this.textFieldManager.registerTextField(this.dialogDisp.reward_box_1.btn_buy.txt_buy, new s.LocalizedTextVO("buy"));
    this.textFieldManager.registerTextField(this.dialogDisp.reward_box_2.btn_buy.txt_buy, new s.LocalizedTextVO("buy"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_buy_all.txt_buy_all, new s.LocalizedTextVO("buyAll"));
  };
  CastleMultiChestDialog.prototype.setUpOfferBox = function (e) {
    var t = this.offerVO.getTotalRewardListFromOfferVO(e);
    var i = this.dialogDisp["reward_box_" + e];
    var n = this.getOfferCost(e);
    i.ruby.toolTipText = "gold";
    var o = this.textFieldManager.registerTextField(i.txt_cost, new a.LocalizedNumberVO(n, false, 0, true));
    o.autoFitToBounds = true;
    b.CostHelper.setCostC2TextFieldColor(o, n);
    this.updateRewardItemsForOfferBox(i, t);
  };
  CastleMultiChestDialog.prototype.getOfferCost = function (e) {
    try {
      return r.int(this.offerVO.descriptions[e].get(l.ClientConstOffer.OFFER_COST_C2).costC2);
    } catch (e) {
      console.error(e.stack);
    }
    return 0;
  };
  CastleMultiChestDialog.prototype.updateRewardItemsForOfferBox = function (e, t) {
    var i;
    var n;
    var o = t.length;
    for (var a = 1; a <= 4; a++) {
      e["reward_mc_" + a].visible = o == a;
    }
    var s = e["reward_mc_" + o];
    for (var r = 0; r < o; r++) {
      i = s["mc_item" + r];
      n = s["info_btn" + r];
      this.updateReward(i, n, t.getItemByIndex(r));
    }
  };
  CastleMultiChestDialog.prototype.updateReward = function (e, t, i) {
    var n = new d.CollectableRenderOptions(d.CollectableRenderOptions.SET_DEFAULT, CastleMultiChestDialog.REWARD_ITEM_EQUIPMENT_DIMENSION);
    n.tooltip.showEquipmentCountdown = false;
    f.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new u.CollectableRenderClips(e).addIconMc(e.mc_item).addInfoBtn(t).addTextfield(e.txt_text).addTextfieldBgMc(e.mc_textBackground), i, n);
    C.ButtonHelper.enableButton(e, false);
  };
  CastleMultiChestDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    p.CastleModel.timerData.removeEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.setRemainingTime));
    p.CastleModel.privateOfferData.removeEventListener(h.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
  };
  CastleMultiChestDialog.prototype.setRemainingTime = function (e = null) {
    if (this._txt_timeleft) {
      this._txt_timeleft.textContentVO.textReplacements = [g.CastleTimeStringHelper.getEventTimeString(this.dialogProperties.offerVO.remainingSeconds)];
    }
  };
  CastleMultiChestDialog.prototype.onOfferRemoved = function (e) {
    if (e.offerVO.id == this.dialogProperties.offerVO.id) {
      p.CastleModel.privateOfferData.removeEventListener(h.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
      this.hide();
    }
  };
  CastleMultiChestDialog.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (t.target instanceof O && t.target.equipmentVO) {
      _.EquipmentIconHelper.showToolTip(t.target, t.target.equipmentVO, null, !t.target.equipmentVO.isPermanent);
    }
  };
  CastleMultiChestDialog.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    if (t.target instanceof O && t.target.equipmentVO) {
      _.EquipmentIconHelper.hideEquipmentToolTip();
    }
  };
  Object.defineProperty(CastleMultiChestDialog.prototype, "offerVO", {
    get: function () {
      return this.dialogProperties.offerVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMultiChestDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleMultiChestDialog.__initialize_static_members = function () {
    CastleMultiChestDialog.REWARD_ITEM_EQUIPMENT_DIMENSION = new E(58, 58);
  };
  CastleMultiChestDialog.NAME = "CastlePOMultiChest";
  CastleMultiChestDialog.TWO_OFFERBOX_DISPLACEMENT = 100;
  return CastleMultiChestDialog;
}(m.CastleExternalDialog);
exports.CastleMultiChestDialog = y;
var b = require("./66.js");
o.classImplementsInterfaces(y, "ICollectableRendererList");
y.__initialize_static_members();