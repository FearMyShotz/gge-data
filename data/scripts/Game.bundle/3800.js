Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./100.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./6.js");
var g = require("./32.js");
var C = require("./31.js");
var _ = require("./19.js");
var m = require("./4.js");
var f = require("./190.js");
var O = require("./24.js");
var E = require("./14.js");
var y = require("./20.js");
var b = require("./81.js");
var D = require("./8.js");
var I = require("./25.js");
var T = require("./167.js");
var v = require("./206.js");
var S = createjs.Point;
var A = function (e) {
  function InfiniteScrollPackageShopListItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(InfiniteScrollPackageShopListItem, e);
  InfiniteScrollPackageShopListItem.prototype.initLoaded = function () {
    e.prototype.initLoaded.call(this);
    D.ButtonHelper.initButtons([this.getItemMc()], y.ClickFeedbackButtonHover, 1);
  };
  InfiniteScrollPackageShopListItem.prototype.fill = function () {
    this.destroyCollectableRenderList();
    var e;
    var t = !m.CastleModel.eventPackageData.getEventPackageByID(this.shopListItemVO.eventPackageVO.packageID).isAvailable();
    var i = this.shopListItemVO.eventPackageVO.reward;
    var n = new C.CollectableRenderClips().addIconMc(this.getItemMc().mc_icon).addTextfield(this.getItemMc().txt_text);
    var l = I.CollectableRenderHelper.createCollectableLevelIndicatorVO(i, new S(0.5, 0.5), new S(-31, -22));
    var g = this.shopListItemVO.eventPackageVO.isGiftPackage ? InfiniteScrollPackageShopListItem.ICON_SIZE_GIFT : InfiniteScrollPackageShopListItem.ICON_SIZE;
    if (l) {
      n.addDynamicLevelIndicatorVO(l);
      (e = new _.CollectableRenderOptions(_.CollectableRenderOptions.ICON | _.CollectableRenderOptions.DYNAMIC_LEVEL_INDICATOR, g)).icon.selfLoadlevelIndicator = false;
    } else {
      e = new _.CollectableRenderOptions(_.CollectableRenderOptions.ICON, g);
    }
    I.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, n, i, e);
    I.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new C.CollectableRenderClips(this.getItemMc().mc_cost), this.shopListItemVO.eventPackageVO.price, new _.CollectableRenderOptions(_.CollectableRenderOptions.SET_COST_LIST_NO_TOOLTIP, new S(30, 20)));
    if (this.shopListItemVO.eventPackageVO.isGiftPackage) {
      var y = s.BasicModel.basicLoaderData.getVersionedItemAssetUrl("GiftTraderPackageIcon");
      var b = new O.CastleGoodgameExternalClip("GiftTraderPackageIcon", y, null, 0, false);
      b.clipSizeComponent = new a.ClipSizeComponent(InfiniteScrollPackageShopListItem.ICON_SIZE_GIFT_BG.x, InfiniteScrollPackageShopListItem.ICON_SIZE_GIFT_BG.y);
      b.y = -5;
      this.getItemMc().mc_icon.addChildAt(b, 0);
      E.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_name, new p.LocalizedTextVO("dialog_giftTrader_giftColonPlaceholder", [d.Localize.text(i.getNameTextId(), i.getNameTextParams())]), new r.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    } else {
      E.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_name, new p.LocalizedTextVO(i.getNameTextId(), i.getNameTextParams()), new r.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    }
    E.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_text, new p.LocalizedTextVO("generic_amount_reward", [i.amount, new u.TextVO(" ")]), new r.InternalGGSTextFieldConfigVO(true));
    E.CastleComponent.textFieldManager.registerTextField(this.getItemMc().mc_soldOut.txt_text, new p.LocalizedTextVO("dialog_shop_soldOut"), new r.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    this.getItemMc().mc_soldOut.visible = t;
    var D = h.int(f.EventPackagePrimeSaleEventVO.getPackageDiscountC2(this.shopListItemVO.eventPackageVO.packageID));
    this.getItemMc().mc_discount.visible = D > 0;
    this.getItemMc().mc_oldCost.visible = D > 0;
    E.CastleComponent.textFieldManager.registerTextField(this.getItemMc().mc_discount.txt_priceReduction, new p.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [D]), new r.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    E.CastleComponent.textFieldManager.registerTextField(this.getItemMc().mc_oldCost.txt_oldCost, new c.LocalizedNumberVO(this.shopListItemVO.eventPackageVO.basicPriceC2), new r.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    this.getItemMc().mc_bestseller.visible = false;
    if (m.CastleModel.settingsData.showPackageIDToolTips) {
      this.disp.toolTipText = "packageID: " + this.shopListItemVO.eventPackageVO.packageID;
    } else if (t) {
      if (this.shopListItemVO.eventPackageVO.notRebuyable) {
        this.disp.toolTipText = "dialogs_shop_soldOut_permanently_tooltip";
      } else {
        this.disp.toolTipText = "dialog_merchant_outOfStock_tooltip";
      }
    } else {
      this.disp.toolTipText = "dialog_equipmentMerchantEvent_tooltip";
    }
  };
  InfiniteScrollPackageShopListItem.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    E.CastleComponent.controller.addEventListener(g.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrencyChanged));
  };
  InfiniteScrollPackageShopListItem.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    E.CastleComponent.controller.removeEventListener(g.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrencyChanged));
  };
  InfiniteScrollPackageShopListItem.prototype.onCurrencyChanged = function (e) {
    this.update();
  };
  InfiniteScrollPackageShopListItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (this.shopListItemVO.eventPackageVO) {
      var i = new T.CastleGenericBuyDialogProperties();
      i.parseDataFromScrollItem(this.shopListItemVO);
      E.CastleComponent.dialogHandler.registerDefaultDialogs(v.ModernPackageShopBuyDialog, i);
    }
  };
  Object.defineProperty(InfiniteScrollPackageShopListItem.prototype, "shopListItemVO", {
    get: function () {
      return this.data;
    },
    enumerable: true,
    configurable: true
  });
  InfiniteScrollPackageShopListItem.__initialize_static_members = function () {
    InfiniteScrollPackageShopListItem.ICON_SIZE = new S(64, 64);
    InfiniteScrollPackageShopListItem.ICON_SIZE_GIFT = new S(43, 43);
    InfiniteScrollPackageShopListItem.ICON_SIZE_GIFT_BG = new S(65, 65);
  };
  return InfiniteScrollPackageShopListItem;
}(b.AInfiniteScrollListItem);
exports.InfiniteScrollPackageShopListItem = A;
l.classImplementsInterfaces(A, "ICollectableRendererList");
A.__initialize_static_members();