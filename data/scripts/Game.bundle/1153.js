Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./16.js");
var h = require("./123.js");
var g = require("./698.js");
var C = require("./26.js");
var _ = require("./32.js");
var m = require("./31.js");
var f = require("./186.js");
var O = require("./19.js");
var E = require("./4.js");
var y = require("./198.js");
var b = require("./190.js");
var D = require("./8.js");
var I = require("./73.js");
var T = require("./11.js");
var v = require("./4830.js");
var S = require("./4831.js");
var A = createjs.TimerEvent;
var L = function (e) {
  function CastleEquipmentMerchantEventIncomingDialog() {
    return e.call(this, CastleEquipmentMerchantEventIncomingDialog.NAME) || this;
  }
  n.__extends(CastleEquipmentMerchantEventIncomingDialog, e);
  CastleEquipmentMerchantEventIncomingDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.panel_buyAgain.btn_buyAgain]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new u.LocalizedTextVO("dialog_equipmentMerchantEventIncoming_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new u.LocalizedTextVO("dialog_equipmentMerchantEventIncoming_desc"));
    this.itxt_buyAgainButtonText = this.textFieldManager.registerTextField(this.dialogDisp.panel_buyAgain.btn_buyAgain.txt_value, new u.LocalizedTextVO("dialog_equipmentMerchantEventBuyAgain_button"));
    this.itxt_offerText = this.textFieldManager.registerTextField(this.dialogDisp.panel_buyAgain.txt_offer, new u.LocalizedTextVO(""));
    this.itxt_originalPrice = this.textFieldManager.registerTextField(this.dialogDisp.panel_buyAgain.mc_originalPrice.txt_value, new d.LocalizedNumberVO(0));
    this.itxt_newPrice = this.textFieldManager.registerTextField(this.dialogDisp.panel_buyAgain.mc_newPrice.txt_value, new d.LocalizedNumberVO(0));
    this.itxt_priceReduction = this.textFieldManager.registerTextField(this.dialogDisp.panel_buyAgain.txt_priceReduction, new u.LocalizedTextVO(r.GenericTextIds.VALUE_PERCENTAGE, [0]));
    this.dialogDisp.panel_buyAgain.mc_newPrice.mouseChildren = false;
    this.dialogDisp.panel_buyAgain.mc_originalPrice.mouseChildren = false;
    this.dialogDisp.panel_buyAgain.mc_newPrice.toolTipText = "dialog_privateOffer_whaleChest_newPrice";
    this.dialogDisp.panel_buyAgain.mc_originalPrice.toolTipText = "dialog_privateOffer_whaleChest_oldPrice";
    this.dialogDisp.mc_itemContainer.btn_down.actLikeButton = true;
    this.dialogDisp.mc_itemContainer.btn_up.actLikeButton = true;
    this.dialogDisp.mc_itemContainer.btn_down.mouseChildren = false;
    this.dialogDisp.mc_itemContainer.btn_up.mouseChildren = false;
  };
  CastleEquipmentMerchantEventIncomingDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    var i = E.CastleModel.eventPackageData.getEventPackageByID(this.dialogProperties.packageID);
    this.renderPackage(i);
    this.renderList();
    D.ButtonHelper.enableButton(this.dialogDisp.panel_buyAgain.btn_buyAgain, false);
    var n = new c.Timer(CastleEquipmentMerchantEventIncomingDialog.MINIMUM_ENABLE_INTERVAL, 1);
    n.addEventListener(A.TIMER, this.bindFunction(this.enableBuyButton));
    this.controller.addEventListener(_.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onChangeUserCurrency));
    E.CastleModel.specialEventData.addEventListener(C.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
    n.start();
    this.updateBuyAgainPanel(i);
  };
  CastleEquipmentMerchantEventIncomingDialog.prototype.onChangeUserCurrency = function (e) {
    var t = E.CastleModel.eventPackageData.getEventPackageByID(this.dialogProperties.packageID);
    this.itxt_newPrice.color = t.priceC2WithRebuyReduction > E.CastleModel.currencyData.c2Amount ? p.ClientConstColor.FONT_INSUFFICIENT_COLOR : p.ClientConstColor.FONT_DEFAULT_COLOR;
  };
  CastleEquipmentMerchantEventIncomingDialog.prototype.enableBuyButton = function (e) {
    e.currentTarget.removeEventListener(A.TIMER, this.bindFunction(this.enableBuyButton));
    D.ButtonHelper.enableButton(this.dialogDisp.panel_buyAgain.btn_buyAgain, true);
  };
  CastleEquipmentMerchantEventIncomingDialog.prototype.updateBuyAgainPanel = function (e) {
    if (e.isReducedPriceC2WhenBoughtAgain) {
      this.dialogDisp.panel_buyAgain.visible = true;
      this.dialogDisp.background.scaleY = 1;
      this.itxt_originalPrice.textContentVO = new d.LocalizedNumberVO(e.basicPriceC2);
      this.itxt_newPrice.textContentVO = new d.LocalizedNumberVO(e.priceC2WithRebuyReduction);
      this.itxt_newPrice.color = e.priceC2WithRebuyReduction > E.CastleModel.currencyData.c2Amount ? p.ClientConstColor.FONT_INSUFFICIENT_COLOR : p.ClientConstColor.FONT_DEFAULT_COLOR;
      var t = Math.floor(e.maxPriceReductionC2WithRebuyReduction * 100 + 0.000001);
      this.itxt_priceReduction.textContentVO = new u.LocalizedTextVO(r.GenericTextIds.VALUE_PERCENTAGE, [-t]);
      this.itxt_offerText.textContentVO = new u.LocalizedTextVO("dialog_equipmentMerchantEventBuyAgain_desc", [t]);
    } else {
      this.dialogDisp.panel_buyAgain.visible = false;
      this.dialogDisp.background.scaleY = 0.65;
    }
  };
  CastleEquipmentMerchantEventIncomingDialog.prototype.renderPackage = function (e) {
    var t = new m.CollectableRenderClips(this.dialogDisp.mc_packageHolder);
    t.addIconMc(this.dialogDisp.mc_packageHolder.mc_icon);
    var i = new O.CollectableRenderOptions(O.CollectableRenderOptions.SET_ICON, h.ClientConstPackages.ICON_SIZE_EQUIPMENT_MERCHANT_EVENT_INCOMING);
    i.tooltip.showEquipmentCountdown = false;
    var n = new f.CollectableRenderer(t, i);
    n.updateWithNewVO(e.reward);
    this.collectableRenderList.push(n);
  };
  CastleEquipmentMerchantEventIncomingDialog.prototype.renderList = function () {
    if (this._equipmentList) {
      this._equipmentList.clear();
    }
    this._equipmentList = new s.ItemScrollList(this.dialogDisp.mc_itemContainer);
    this._equipmentList.scrollItemClass = v.IncomingEquippableScrollItem;
    this._equipmentList.scrollStep = 5;
    this._equipmentList.hideButtons = true;
    for (var e = this.sortedInventory, t = 0; t < e.length; t++) {
      var i = new S.IncomingEquippableScrollItemVO();
      i.equippableVO = e[t];
      this._equipmentList.pushContent(i);
    }
    this._equipmentList.addEventListener(a.ScrollItemEvent.ROLL_OVER, CastleEquipmentMerchantEventIncomingDialog.onRollOverItem);
    this._equipmentList.initList();
  };
  CastleEquipmentMerchantEventIncomingDialog.onRollOverItem = function (e) {
    var t = e.scrollItem;
    if (t && t.scrollItemVO) {
      I.EquipmentIconHelper.showToolTip(t.disp, t.scrollItemVO.equippableVO);
    }
  };
  CastleEquipmentMerchantEventIncomingDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (D.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.panel_buyAgain.btn_buyAgain:
          this.hide();
          this.buyAgainDelayed();
      }
    }
  };
  CastleEquipmentMerchantEventIncomingDialog.prototype.buyAgainDelayed = function () {
    var e = new c.Timer(CastleEquipmentMerchantEventIncomingDialog.MINIMUM_WAIT_TIME, 1);
    e.addEventListener(A.TIMER, this.bindFunction(this.buyAgain));
    e.start();
  };
  CastleEquipmentMerchantEventIncomingDialog.prototype.buyAgain = function (e) {
    e.currentTarget.removeEventListener(A.TIMER, this.bindFunction(this.buyAgain));
    E.CastleModel.smartfoxClient.sendCommandVO(new g.C2SBuyEventPackageVO(this.dialogProperties.packageID, this.dialogProperties.fromBuyType, this.dialogProperties.fromEventID, 1, E.CastleModel.kingdomData.activeKingdomID, -1, -1, true));
  };
  CastleEquipmentMerchantEventIncomingDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this._equipmentList.removeEventListener(a.ScrollItemEvent.ROLL_OVER, CastleEquipmentMerchantEventIncomingDialog.onRollOverItem);
    this.controller.removeEventListener(_.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onChangeUserCurrency));
    E.CastleModel.specialEventData.removeEventListener(C.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
    this._equipmentList.clear();
  };
  Object.defineProperty(CastleEquipmentMerchantEventIncomingDialog.prototype, "sortedInventory", {
    get: function () {
      o.VectorSortHelper.sort(this.dialogProperties.inventory, CastleEquipmentMerchantEventIncomingDialog.sort);
      return this.dialogProperties.inventory;
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentMerchantEventIncomingDialog.sort = function (e, t) {
    if (e instanceof y.BasicEquipmentVO && t instanceof y.BasicEquipmentVO) {
      return CastleEquipmentMerchantEventIncomingDialog.sortRarity(e, t);
    } else if (e instanceof y.BasicEquipmentVO) {
      return -1;
    } else if (t instanceof y.BasicEquipmentVO) {
      return 1;
    } else {
      return CastleEquipmentMerchantEventIncomingDialog.sortLevel(e, t);
    }
  };
  CastleEquipmentMerchantEventIncomingDialog.sortLevel = function (e, t) {
    if (e.level > t.level) {
      return -1;
    } else if (e.level < t.level) {
      return 1;
    } else {
      return 0;
    }
  };
  CastleEquipmentMerchantEventIncomingDialog.sortRarity = function (e, t) {
    if (e.rareID == 0) {
      return -1;
    } else if (t.rareID == 0) {
      return 1;
    } else if (e.rareID > t.rareID) {
      return -1;
    } else if (e.rareID < t.rareID) {
      return 1;
    } else {
      return 0;
    }
  };
  CastleEquipmentMerchantEventIncomingDialog.prototype.onSpecialEventRemoved = function (e) {
    if (e.specialEventVO instanceof b.EventPackagePrimeSaleEventVO && e.specialEventVO.packageIDs.indexOf(this.dialogProperties.packageID) > -1) {
      this.hide();
    }
    if (e.specialEventVO.eventId == this.dialogProperties.fromEventID) {
      this.hide();
    }
  };
  Object.defineProperty(CastleEquipmentMerchantEventIncomingDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentMerchantEventIncomingDialog.NAME = "CastleEquipmentMerchantEventIncoming";
  CastleEquipmentMerchantEventIncomingDialog.MINIMUM_ENABLE_INTERVAL = 500;
  CastleEquipmentMerchantEventIncomingDialog.MINIMUM_WAIT_TIME = 300;
  return CastleEquipmentMerchantEventIncomingDialog;
}(T.CastleExternalDialog);
exports.CastleEquipmentMerchantEventIncomingDialog = L;
l.classImplementsInterfaces(L, "ICollectableRendererList");