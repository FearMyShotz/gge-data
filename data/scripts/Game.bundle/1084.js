Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./51.js");
var h = require("./60.js");
var g = require("./21.js");
var C = require("./67.js");
var _ = require("./19.js");
var m = require("./4.js");
var f = require("./130.js");
var O = require("./27.js");
var E = require("./24.js");
var y = require("./73.js");
var b = require("./11.js");
var D = createjs.MovieClip;
var I = createjs.Point;
var T = function (e) {
  function CastleChestDialog() {
    var t = this;
    t.rewardIndex = 0;
    t._offerType = -1;
    t._currentConfig = CastleChestDialog.CONFIGS.get(CastleChestDialog.CONFIG_OLD_THREE_REWARD);
    t._customCharacter = -1;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleChestDialog.NAME) || this;
  }
  n.__extends(CastleChestDialog, e);
  CastleChestDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    var i = this.dialogProperties.offerVO.getVisualComponentByName(h.ClientConstOffer.OFFER_VISUAL_OFFER_DIALOG);
    this._currentConfig = this.offerVO.getTotalRewardListFromOfferVO().length > 1 ? CastleChestDialog.CONFIGS.get(CastleChestDialog.CONFIG_OLD_THREE_REWARD) : CastleChestDialog.CONFIGS.get(CastleChestDialog.CONFIG_OLD_ONE_REWARD);
    this._customDialogProps = i.dialogCustomization;
    this.parseCustomDialogProps();
  };
  CastleChestDialog.prototype.parseCustomDialogProps = function () {
    if (this._customDialogProps) {
      if (this._customDialogProps.hasOwnProperty("LO")) {
        var e = d.int(this._customDialogProps.LO);
        if (e > -1) {
          this._currentConfig = a.DictionaryUtil.containsKey(CastleChestDialog.CONFIGS, e) ? CastleChestDialog.CONFIGS.get(e) : this._currentConfig;
        }
      } else {
        this._currentConfig = this._customDialogProps.CFG ? this._customDialogProps.CFG : this._currentConfig;
      }
      this._customCopy = this._customDialogProps.CID;
      this._customBtnTxt = this._customDialogProps.BID;
      this._customTitleTxt = this._customDialogProps.TID;
      this._customBannerText = this._customDialogProps.BCID;
      this._customTimeText = this._customDialogProps.TTID;
      this._customCharacter = d.int(this._customDialogProps.hasOwnProperty("CH") ? this._customDialogProps.CH : -1);
      this._offerType = d.int(this._customDialogProps.hasOwnProperty("OT") ? this._customDialogProps.OT : -1);
    }
  };
  CastleChestDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.rewardIndex = 0;
    this.showCurrentConfig();
    this.setChestVO();
    this.setupChest();
    this.setReward();
    this.setRemainingTime();
    this.dialogDisp.mc_costs.mouseChildren = false;
    this.dialogDisp.mc_costs.toolTipText = this._chestVO.textId_newPriceTooltip;
    this.dialogDisp.mc_oldCosts.toolTipText = this._chestVO.textId_oldPriceTooltip;
    this.dialogDisp.mc_oldCosts.mouseChildren = false;
    this.dialogDisp.mc_sideBanner.mouseChildren = false;
    m.CastleModel.timerData.addEventListener(g.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.setRemainingTime));
    m.CastleModel.privateOfferData.addEventListener(f.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
  };
  CastleChestDialog.prototype.showCurrentConfig = function () {
    this.hideAllConfigElements();
    this._okButton = this._currentConfig.hasOwnProperty("button") ? this.dialogDisp[CastleChestDialog.BUTTONS[this._currentConfig.button]] : this.dialogDisp.btn_ok;
    this._okButton.visible = true;
    this._okButton.toolTipText = s.GenericTextIds.BUTTON_ACCEPT;
    if (this._currentConfig.banner) {
      this._redBanner = this.dialogDisp[this._currentConfig.banner];
      this._redBanner.visible = true;
    }
    this.dialogDisp.mc_costs.visible = this._currentConfig.costs;
    this.dialogDisp.mc_oldCosts.visible = this._currentConfig.oldCosts;
    this.dialogDisp.mc_time.visible = this._currentConfig.timer;
    this.initBasicButtons([this._okButton, this.dialogDisp.btn_close, this.dialogDisp.btn_right, this.dialogDisp.btn_left]);
  };
  CastleChestDialog.prototype.hideAllRewardHolders = function () {
    for (var e = 0; e < CastleChestDialog.REWARDHOLDERS.length; e++) {
      this.dialogDisp[CastleChestDialog.REWARDHOLDERS[e]].visible = false;
    }
  };
  CastleChestDialog.prototype.hideAllConfigElements = function () {
    this.dialogDisp.btn_ok.visible = false;
    this.dialogDisp.btn_ok_small.visible = false;
    this.dialogDisp.mc_costs.visible = false;
    this.dialogDisp.mc_sideBanner.visible = false;
    this.dialogDisp.mc_centerBanner.visible = false;
    this.dialogDisp.mc_oldCosts.visible = false;
    this.dialogDisp.mc_time.visible = false;
  };
  CastleChestDialog.prototype.setupChest = function () {
    this.setCharacterAndTexts();
    this.setChestPayment();
  };
  CastleChestDialog.prototype.setChestVO = function () {
    var e = this.offerVO.getCostsForOfferAcception().getAmountOrDefaultByType(v.CollectableEnum.C2);
    this._chestVO = e > 0 ? new M.CastleWhaleChestVO() : new P.CastleSoftChestVO();
  };
  CastleChestDialog.prototype.setCharacterAndTexts = function () {
    var e;
    var t;
    var i;
    var n = d.int(p.ClientConstCharacter.CHAR_ID_MARAUDER);
    var o = this._chestVO.textId_plundermeister;
    if (this._offerType > -1) {
      switch (this._offerType) {
        case CastleChestDialog.OFFER_TYPE_TOOLS:
        case CastleChestDialog.OFFER_TYPE_UNITS:
          o = this._chestVO.textId_general;
          n = d.int(p.ClientConstCharacter.CHAR_ID_GENERAL);
          break;
        case CastleChestDialog.OFFER_TYPE_DECO:
          o = this._chestVO.textId_architect;
          n = d.int(p.ClientConstCharacter.CHAR_ID_ARCHITECT);
          break;
        case CastleChestDialog.OFFER_TYPE_EQUIPMENT:
        case CastleChestDialog.OFFER_TYPE_VIP:
        default:
          o = this._chestVO.textId_plundermeister;
          n = d.int(p.ClientConstCharacter.CHAR_ID_MARAUDER);
      }
    }
    o = this._customCopy ? this._customCopy : o;
    e = this._customBtnTxt ? this._customBtnTxt : this._chestVO.textId_pay;
    t = this._customTitleTxt ? this._customTitleTxt : this._chestVO.textId_title;
    n = this._customCharacter > -1 ? this._customCharacter : n;
    this.setCharacterImage(p.ClientConstCharacter.getFullSizeAssetName(n));
    this.textFieldManager.registerTextField(this._okButton.txt_value, new u.LocalizedTextVO(e));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_offer, new u.LocalizedTextVO(t)).autoFitToBounds = true;
    if (this._currentConfig.banner) {
      i = this._customBannerText ? this._customBannerText : this._currentConfig.banner == CastleChestDialog.CENTER_BANNER_ASSET ? this._chestVO.textId_noise : this._chestVO.textId_savings;
      this.textFieldManager.registerTextField(this._redBanner.txt_content, new u.LocalizedTextVO(i));
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new u.LocalizedTextVO(o));
  };
  CastleChestDialog.prototype.setCharacterImage = function (e) {
    r.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_character);
    var t = new E.CastleGoodgameExternalClip(e, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e), null, 0, false);
    this.dialogDisp.mc_character.addChild(t.asDisplayObject());
  };
  CastleChestDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    m.CastleModel.timerData.removeEventListener(g.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.setRemainingTime));
    m.CastleModel.privateOfferData.removeEventListener(f.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
  };
  CastleChestDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this._okButton:
        m.CastleModel.privateOfferData.sendOfferPay(this.dialogProperties.offerVO.id);
        this.hide();
        break;
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_left:
        this.rewardIndex -= CastleChestDialog.MAX_ITEMS_AT_ONCE;
        this.setReward();
        break;
      case this.dialogDisp.btn_right:
        this.rewardIndex += CastleChestDialog.MAX_ITEMS_AT_ONCE;
        this.setReward();
    }
  };
  CastleChestDialog.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (t.target instanceof D && t.target.equipmentVO) {
      y.EquipmentIconHelper.showToolTip(t.target, t.target.equipmentVO, null, !t.target.equipmentVO.isPermanent);
    }
  };
  CastleChestDialog.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    if (t.target instanceof D && t.target.equipmentVO) {
      y.EquipmentIconHelper.hideEquipmentToolTip();
    }
  };
  CastleChestDialog.prototype.setReward = function () {
    this.destroyCollectableRenderList();
    var e = this.offerVO.getTotalRewardListFromOfferVO();
    this.setRewards(e);
  };
  CastleChestDialog.prototype.setRewards = function (e) {
    var t;
    this.hideAllRewardHolders();
    this.dialogDisp.btn_right.visible = this.rewardIndex + CastleChestDialog.MAX_ITEMS_AT_ONCE < e.length;
    this.dialogDisp.btn_left.visible = this.rewardIndex - CastleChestDialog.MAX_ITEMS_AT_ONCE >= 0;
    var i = new S.CollectableList();
    for (var n = this.rewardIndex; n < this.rewardIndex + CastleChestDialog.MAX_ITEMS_AT_ONCE; n++) {
      if (e.getItemByIndex(n) != null) {
        i.addItem(e.getItemByIndex(n));
      }
    }
    if (t = this.dialogDisp[CastleChestDialog.REWARDHOLDERS[i.length - 1]]) {
      t.visible = true;
    }
    A.CollectableRenderHelper.displayMultipleItemsAndAddToRenderList(this, new C.CollectableRenderClipsList(t, "mc_reward").addInfoBtns("parent.mc_info_btn", null, true), i, new _.CollectableRenderOptions(_.CollectableRenderOptions.SET_ADVANCED, CastleChestDialog.REWARD_ITEM_EQUIPMENT_DIMENSION), this.bindFunction(this.preRenderFunc));
  };
  CastleChestDialog.prototype.preRenderFunc = function (e) {
    if (e.itemVO) {
      e.getRenderer(_.CollectableRenderOptions.ICON_TRANSFORM).transform.offset.y = 0;
    }
  };
  CastleChestDialog.prototype.setChestPayment = function () {
    var e = this.offerVO.getCostsForOfferAcception().getAmountOrDefaultByType(this._chestVO.currency);
    this.setPayment(e, this._chestVO.iconClass, this._chestVO.textId_savings);
  };
  CastleChestDialog.prototype.setPayment = function (e, t, i) {
    var n = 5000;
    if (this._customDialogProps && this._customDialogProps.OC) {
      n = this._customDialogProps.OC;
    }
    r.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_costs.mc_icon);
    r.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_oldCosts.mc_costs.mc_icon);
    r.MovieClipHelper.replaceMovieClip(this.dialogDisp.mc_costs.mc_icon, t);
    r.MovieClipHelper.replaceMovieClip(this.dialogDisp.mc_oldCosts.mc_costs.mc_icon, t);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_oldCosts.mc_costs.txt_value, new c.LocalizedNumberVO(n));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_sideBanner.txt_content, new u.LocalizedTextVO(i, [n - e]));
    var o = this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_value, new c.LocalizedNumberVO(e));
    L.CostHelper.setCostC2TextFieldColor(o, e);
  };
  CastleChestDialog.prototype.onOfferRemoved = function (e) {
    if (e.offerVO.id == this.dialogProperties.offerVO.id) {
      m.CastleModel.privateOfferData.removeEventListener(f.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
      this.hide();
    }
  };
  CastleChestDialog.prototype.setRemainingTime = function (e = null) {
    var t = this._customTimeText ? this._customTimeText : this._chestVO.textId_endTimer;
    var i = d.int(this.dialogProperties.offerVO.remainingSeconds);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_offer_timeleft, new u.LocalizedTextVO(t, [O.CastleTimeStringHelper.getEventTimeString(i)]));
    O.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_time, i);
  };
  Object.defineProperty(CastleChestDialog.prototype, "offerVO", {
    get: function () {
      return this.dialogProperties.offerVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleChestDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleChestDialog.__initialize_static_members = function () {
    var e;
    CastleChestDialog.BUTTONS = [CastleChestDialog.BIG_OK_BUTTON_ASSET, CastleChestDialog.SMALL_OK_BUTTON_ASSET];
    CastleChestDialog.REWARD_ITEM_EQUIPMENT_DIMENSION = new I(58, 58);
    (e = new Map()).set(CastleChestDialog.CONFIG_OLD_ONE_REWARD, {
      button: 0,
      banner: CastleChestDialog.CENTER_BANNER_ASSET,
      costs: 1,
      oldCosts: 0,
      timer: 1
    });
    e.set(CastleChestDialog.CONFIG_OLD_THREE_REWARD, {
      button: 0,
      banner: CastleChestDialog.SIDE_BANNER_ASSET,
      costs: 1,
      oldCosts: 1,
      timer: 1
    });
    e.set(CastleChestDialog.CONFIG_STANDARD_GIFT_REWARD, {
      button: 1,
      timer: 1
    });
    e.set(CastleChestDialog.NO_TIME_LIMIT_GIFT_REWARD, {
      button: 1,
      timer: 0
    });
    CastleChestDialog.CONFIGS = e;
  };
  CastleChestDialog.NAME = "CastlePOWhaleChestExternal";
  CastleChestDialog.OFFER_TYPE_UNITS = 1;
  CastleChestDialog.OFFER_TYPE_EQUIPMENT = 2;
  CastleChestDialog.OFFER_TYPE_DECO = 3;
  CastleChestDialog.OFFER_TYPE_TOOLS = 4;
  CastleChestDialog.OFFER_TYPE_VIP = 5;
  CastleChestDialog.CENTER_BANNER_ASSET = "mc_centerBanner";
  CastleChestDialog.SIDE_BANNER_ASSET = "mc_sideBanner";
  CastleChestDialog.BIG_OK_BUTTON_ASSET = "btn_ok";
  CastleChestDialog.SMALL_OK_BUTTON_ASSET = "btn_ok_small";
  CastleChestDialog.CONFIG_OLD_ONE_REWARD = 0;
  CastleChestDialog.CONFIG_OLD_THREE_REWARD = 1;
  CastleChestDialog.CONFIG_STANDARD_GIFT_REWARD = 2;
  CastleChestDialog.NO_TIME_LIMIT_GIFT_REWARD = 3;
  CastleChestDialog.MAX_ITEMS_AT_ONCE = 3;
  CastleChestDialog.REWARDHOLDERS = ["mc_one_item_offer", "mc_two_item_offer", "mc_three_item_offer"];
  return CastleChestDialog;
}(b.CastleExternalDialog);
exports.CastleChestDialog = T;
var v = require("./12.js");
var S = require("./48.js");
var A = require("./25.js");
var L = require("./66.js");
var P = require("./3646.js");
var M = require("./3647.js");
l.classImplementsInterfaces(T, "ICollectableRendererList");
T.__initialize_static_members();