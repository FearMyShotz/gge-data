Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./6.js");
var c = require("./67.js");
var u = require("./19.js");
var d = require("./4.js");
var p = require("./8.js");
var h = require("./88.js");
var g = require("./114.js");
var C = createjs.MouseEvent;
var _ = createjs.Point;
var m = function (e) {
  function CastlePaymentRewardSpecialOfferFinishDialog() {
    var t = this;
    t.startIndex = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, "CastlePaymentRewardSpecialOfferFinish") || this;
  }
  n.__extends(CastlePaymentRewardSpecialOfferFinishDialog, e);
  Object.defineProperty(CastlePaymentRewardSpecialOfferFinishDialog.prototype, "offerType", {
    get: function () {
      var e = false;
      if (this.dialogProperties_0) {
        e = this.dialogProperties_0.wonRubies > 0;
      }
      if (e) {
        return h.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_FINISH_REAL_CURRENCY;
      } else {
        return h.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_FINISH;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.CastlePaymentRewardSpecialOfferDialog.prototype, "offerType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferFinishDialog.prototype.showLoaded = function (t = null) {
    this.dialogDisp.addEventListener(C.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    this.startIndex = 0;
    e.prototype.showLoaded.call(this);
  };
  CastlePaymentRewardSpecialOfferFinishDialog.prototype.hideLoaded = function (t = null) {
    this.dialogDisp.removeEventListener(C.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    e.prototype.hideLoaded.call(this);
  };
  CastlePaymentRewardSpecialOfferFinishDialog.prototype.onMouseWheel = function (e) {
    if (e.delta < 0) {
      this.scrollUp();
    } else if (e.delta > 0) {
      this.scrollDown();
    }
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferFinishDialog.prototype, "skinType", {
    get: function () {
      return h.CastlePaymentRewardSpecialOfferConstants.SKIN_FINISH;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.CastlePaymentRewardSpecialOfferDialog.prototype, "skinType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferFinishDialog.prototype.setTextIDs = function () {
    e.prototype.setTextIDs.call(this);
    this.titleTextID = "dialog_primeday_specialoffer_rewardtitle";
    this.descriptionTextID = "dialog_primeday_specialoffer_reward_copy";
    this.descriptionInfoTextID = "dialog_rewardsReceived_purchasedTotal_desc";
  };
  CastlePaymentRewardSpecialOfferFinishDialog.prototype.updateRewardItems = function () {
    var e;
    var t = this.shownRewards;
    for (var i = t.length, n = 0; n < i; ++n) {
      var o = t.getItemByIndex(n);
      if ((e = s.instanceOfClass(o, "ACollectableItemEquipmentVO") ? o.equipmentVO : null) && (s.instanceOfClass(e, "RandomEquipmentVO") || s.instanceOfClass(e, "RandomHeroVO")) && this.dialogProperties_0 && this.dialogProperties_0.randomEquipmentRewardList && this.dialogProperties_0.randomEquipmentRewardList.length > 0) {
        t.replaceItemOnIndex(this.dialogProperties_0.randomEquipmentRewardList.getItemByIndex(0), n);
        this.dialogProperties_0.randomEquipmentRewardList.removeByIndex(0);
      }
    }
    if (this.rewardItemSet && this.rewardItemSet.disp) {
      var a = new u.CollectableRenderOptions(u.CollectableRenderOptions.SET_ADVANCED, new _(h.CastlePaymentRewardSpecialOfferConstants.REWARD_ICON_WIDTH, h.CastlePaymentRewardSpecialOfferConstants.REWARD_ICON_WIDTH));
      a.tooltip.showEquipmentCountdown = false;
      O.CollectableRenderHelper.displayMultipleItemsComplete(this, new c.CollectableRenderClipsList(this.rewardItemSet.componentDisp, "mc_item").addItemMcs("mc_item").addInfoBtns("parent.btn_info").addEquipmentBgMcs("parent.mc_equipmentBackground"), this.shownRewards, a, this.bindFunction(this.preRenderFunc));
      this.updateScrollButtons();
    }
  };
  CastlePaymentRewardSpecialOfferFinishDialog.prototype.preRenderFunc = function (e) {
    if (e.itemVO && (e.itemVO.itemType == E.CollectableEnum.EQUIPMENT_UNIQUE || e.itemVO.itemType == E.CollectableEnum.EQUIPMENT_RARENESS || e.itemVO.itemType == E.CollectableEnum.RELIC_EQUIPMENT || e.itemVO.itemType == E.CollectableEnum.EQUIPMENT_UNIQUE_ENCHANTED)) {
      var t = e.getRenderer(u.CollectableRenderOptions.ICON_TRANSFORM);
      if (e.itemVO.itemType == E.CollectableEnum.EQUIPMENT_UNIQUE) {
        t.transform.offset.x = 0.5;
      } else {
        t.transform.offset.x = 0.45;
      }
      t.transform.offset.y = 9;
    }
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferFinishDialog.prototype, "shownRewards", {
    get: function () {
      var e = new f.CollectableList();
      for (var t = 0; t < CastlePaymentRewardSpecialOfferFinishDialog.REWARDS_ON_SCREEN; t++) {
        if (this.startIndex + t < this.rewards.length) {
          e.addItem(this.rewards.getItemByIndex(this.startIndex + t));
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferFinishDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (this.rewardItemSet && this.rewardItemSet.componentDisp) {
      if (this.rewardItemSet.componentDisp.btn_up && t.target == this.rewardItemSet.componentDisp.btn_up) {
        this.scrollUp();
      }
      if (this.rewardItemSet.componentDisp.btn_down && t.target == this.rewardItemSet.componentDisp.btn_down) {
        this.scrollDown();
      }
    }
  };
  CastlePaymentRewardSpecialOfferFinishDialog.prototype.scrollUp = function () {
    this.setStartIndex(this.startIndex - CastlePaymentRewardSpecialOfferFinishDialog.REWARDS_ON_SCREEN);
  };
  CastlePaymentRewardSpecialOfferFinishDialog.prototype.scrollDown = function () {
    this.setStartIndex(this.startIndex + CastlePaymentRewardSpecialOfferFinishDialog.REWARDS_ON_SCREEN);
  };
  CastlePaymentRewardSpecialOfferFinishDialog.prototype.setStartIndex = function (e) {
    if (e < this.rewards.length) {
      this.startIndex = l.int(Math.max(0, e));
    }
    this.updateRewardItems();
  };
  CastlePaymentRewardSpecialOfferFinishDialog.prototype.updateScrollButtons = function () {
    if (this.rewardItemSet.componentDisp.btn_up) {
      if (!this.rewardItemSet.componentDisp.btn_up.basicButton) {
        p.ButtonHelper.initBasicButton(this.rewardItemSet.componentDisp.btn_up);
      }
      this.rewardItemSet.componentDisp.btn_up.visible = this.startIndex > 0;
    }
    if (this.rewardItemSet.componentDisp.btn_down) {
      if (!this.rewardItemSet.componentDisp.btn_down.basicButton) {
        p.ButtonHelper.initBasicButton(this.rewardItemSet.componentDisp.btn_down);
      }
      this.rewardItemSet.componentDisp.btn_down.visible = this.rewards.length > this.startIndex + CastlePaymentRewardSpecialOfferFinishDialog.REWARDS_ON_SCREEN;
    }
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferFinishDialog.prototype, "rewards", {
    get: function () {
      if (this.isPrivateOffer) {
        return this.dialogPropertiesPrivateOffer.offerVO.getTotalRewardListFromOfferVO();
      }
      for (var e = this.dialogProperties_0.finalRewardList, t = 0; t < e.length; ++t) {
        var i = o.castAs(e.getItemByIndex(t), "ACollectableItemEquipmentVO");
        if (i && i.equipmentVO && (s.instanceOfClass(i.equipmentVO, "RandomEquipmentVO") || s.instanceOfClass(i.equipmentVO, "RandomHeroVO")) && this.dialogProperties_0.randomEquipmentRewardList && this.dialogProperties_0.randomEquipmentRewardList.length > 0) {
          e.replaceItemOnIndex(this.dialogProperties_0.randomEquipmentRewardList.getItemByIndex(0), t);
          this.dialogProperties_0.randomEquipmentRewardList.removeByIndex(0);
        }
      }
      return e;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.CastlePaymentRewardSpecialOfferDialog.prototype, "rewards").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferFinishDialog.prototype, "canBeBoughtTimes", {
    get: function () {
      if (this.isPrivateOffer) {
        return 0;
      }
      var e = this.paymentRewardEventVO;
      if (e) {
        return e.maxBuyCount - this.dialogProperties_0.rewardCount;
      } else {
        return 0;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.CastlePaymentRewardSpecialOfferDialog.prototype, "canBeBoughtTimes").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferFinishDialog.prototype, "paymentRewardEventVO", {
    get: function () {
      return d.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_PAYMENTREWARD_SPECIAL_OFFER);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferFinishDialog.prototype, "remainingEventTimeInSeconds", {
    get: function () {
      if (this.isPrivateOffer || !this.paymentRewardEventVO) {
        return 1;
      } else {
        return this.paymentRewardEventVO.remainingEventTimeInSeconds;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.CastlePaymentRewardSpecialOfferDialog.prototype, "remainingEventTimeInSeconds").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferFinishDialog.prototype, "dialogProperties_0", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferFinishDialog.prototype, "rubiesAmountMCValue", {
    get: function () {
      return this.dialogProperties_0.wonRubies;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.CastlePaymentRewardSpecialOfferDialog.prototype, "rubiesAmountMCValue").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferFinishDialog.__initialize_static_members = function () {
    CastlePaymentRewardSpecialOfferFinishDialog.NAME = "CastlePaymentRewardSpecialOfferFinish";
    CastlePaymentRewardSpecialOfferFinishDialog.REWARDS_ON_SCREEN = 9;
  };
  return CastlePaymentRewardSpecialOfferFinishDialog;
}(g.CastlePaymentRewardSpecialOfferDialog);
exports.CastlePaymentRewardSpecialOfferFinishDialog = m;
var f = require("./48.js");
var O = require("./25.js");
var E = require("./12.js");
a.classImplementsInterfaces(m, "ICollectableRendererList");
m.__initialize_static_members();