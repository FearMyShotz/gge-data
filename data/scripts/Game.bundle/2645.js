Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./32.js");
var u = require("./31.js");
var d = require("./19.js");
var p = require("./4.js");
var h = require("./24.js");
var g = require("./40.js");
var C = require("./8.js");
var _ = require("./167.js");
var m = require("./244.js");
var f = require("./14.js");
var O = require("./25.js");
var E = require("./206.js");
var y = require("./237.js");
var b = createjs.Point;
var D = function (e) {
  function ModernPackageShopListItem(t) {
    var i = this;
    i._buyType = -1;
    i._buyTypeId = -1;
    i._isSoldOut = false;
    i._isSpecialPackage = false;
    CONSTRUCTOR_HACK;
    i = e.call(this, t) || this;
    C.ButtonHelper.initBasicButton(t, 1.025);
    if (t.mc_mouseOver && t.mc_downState) {
      i._clickbehaviour = new y.ClickFeedbackHoverBehaviour(t);
    }
    return i;
  }
  n.__extends(ModernPackageShopListItem, e);
  ModernPackageShopListItem.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    f.CastleComponent.controller.addEventListener(c.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrencyChanged));
    if (this._clickbehaviour) {
      this._clickbehaviour.addEventListener();
    }
  };
  ModernPackageShopListItem.prototype.removeEventListener = function () {
    f.CastleComponent.controller.removeEventListener(c.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrencyChanged));
    e.prototype.removeEventListener.call(this);
    if (this._clickbehaviour) {
      this._clickbehaviour.removeEventListener();
    }
  };
  ModernPackageShopListItem.prototype.updateWithNewData = function (e, t, i = -1, n = -1) {
    this._eventVO = t;
    this._eventPackageVO = e;
    this._buyType = i;
    this._buyTypeId = n;
    this.update();
  };
  ModernPackageShopListItem.prototype.update = function () {
    this.destroyCollectableRenderList();
    this.disp.visible = this._eventPackageVO != null;
    if (this._eventPackageVO) {
      this._isSoldOut = !p.CastleModel.eventPackageData.getEventPackageByID(this._eventPackageVO.packageID).isAvailable();
      this._isSpecialPackage = false;
      var e = this._eventPackageVO.reward;
      var t = new u.CollectableRenderClips().addIconMc(this.disp.mc_icon).addTextfield(this.disp.txt_text);
      var i = O.CollectableRenderHelper.createCollectableLevelIndicatorVO(e, new b(0.5, 0.5), new b(-26, -26));
      var n = this._eventPackageVO.isGiftPackage ? ModernPackageShopListItem.ICON_SIZE_GIFT : ModernPackageShopListItem.ICON_SIZE;
      var s = undefined;
      if (i) {
        t.addDynamicLevelIndicatorVO(i);
        (s = new d.CollectableRenderOptions(d.CollectableRenderOptions.ICON | d.CollectableRenderOptions.TEXTFIELD | d.CollectableRenderOptions.ICON_TRANSFORM | d.CollectableRenderOptions.DYNAMIC_LEVEL_INDICATOR, n)).icon.selfLoadlevelIndicator = false;
      } else {
        s = new d.CollectableRenderOptions(d.CollectableRenderOptions.ICON | d.CollectableRenderOptions.TEXTFIELD | d.CollectableRenderOptions.ICON_TRANSFORM, n);
      }
      O.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, t, e, s, this.preRenderFunc);
      O.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new u.CollectableRenderClips(this.disp.mc_cost), this._eventPackageVO.price, new d.CollectableRenderOptions(d.CollectableRenderOptions.SET_COST_LIST_NO_TOOLTIP, new b(30, 30)));
      if (this._eventPackageVO.isGiftPackage) {
        var c = a.BasicModel.basicLoaderData.getVersionedItemAssetUrl("GiftTraderPackageIcon");
        var g = new h.CastleGoodgameExternalClip("GiftTraderPackageIcon", c, null, 0, false);
        g.clipSizeComponent = new o.ClipSizeComponent(ModernPackageShopListItem.ICON_SIZE_GIFT_BG.x, ModernPackageShopListItem.ICON_SIZE_GIFT_BG.y);
        g.x = 2;
        g.y = -5;
        this.disp.mc_icon.addChildAt(g, 0);
        f.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new l.LocalizedTextVO("dialog_giftTrader_giftColonPlaceholder", [r.Localize.text(e.getNameTextId(), e.getNameTextParams())])).autoFitToBounds = true;
      } else {
        f.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new l.LocalizedTextVO(e.getNameTextId(), e.getNameTextParams())).autoFitToBounds = true;
      }
      this.disp.mc_discount.visible = false;
      f.CastleComponent.textFieldManager.registerTextField(this.disp.mc_soldOut.txt_text, new l.LocalizedTextVO("dialog_shop_soldOut")).autoFitToBounds = true;
      this.disp.mc_soldOut.visible = this._isSoldOut;
      if (this.disp.mc_special) {
        f.CastleComponent.textFieldManager.registerTextField(this.disp.mc_special.txt_text, new l.LocalizedTextVO("special_package")).autoFitToBounds = true;
        this.disp.mc_special.visible = this._isSpecialPackage;
      }
      if (p.CastleModel.settingsData.showPackageIDToolTips) {
        this.disp.toolTipText = "packageID: " + this._eventPackageVO.packageID;
      } else if (this._isSoldOut) {
        if (this._eventPackageVO.notRebuyable) {
          this.disp.toolTipText = "dialogs_shop_soldOut_permanently_tooltip";
        } else {
          this.disp.toolTipText = "dialog_merchant_outOfStock_tooltip";
        }
      } else {
        this.disp.toolTipText = "dialog_equipmentMerchantEvent_tooltip";
      }
    }
  };
  ModernPackageShopListItem.prototype.preRenderFunc = function (e) {
    if (e.itemVO) {
      var t = e.getRenderer(d.CollectableRenderOptions.ICON_TRANSFORM);
      t.transform.offset.y = 1;
      t.transform.offset.x = 2;
    }
  };
  ModernPackageShopListItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (this._eventPackageVO) {
      var i = new m.MerchantScrollItemVO();
      i.eventPackageVO = this._eventPackageVO;
      i.specialEventVO = this._eventVO;
      i.buyType = this.buyType;
      i.buyTypeId = this.buyTypeId;
      var n = new _.CastleGenericBuyDialogProperties();
      n.parseDataFromScrollItem(i);
      f.CastleComponent.dialogHandler.registerDefaultDialogs(E.ModernPackageShopBuyDialog, n);
    }
  };
  ModernPackageShopListItem.prototype.onCurrencyChanged = function (e) {
    this.update();
  };
  Object.defineProperty(ModernPackageShopListItem.prototype, "buyType", {
    get: function () {
      return this._buyType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernPackageShopListItem.prototype, "buyTypeId", {
    get: function () {
      return this._buyTypeId;
    },
    enumerable: true,
    configurable: true
  });
  ModernPackageShopListItem.__initialize_static_members = function () {
    ModernPackageShopListItem.ICON_SIZE = new b(74, 72);
    ModernPackageShopListItem.ICON_SIZE_GIFT = new b(53, 53);
    ModernPackageShopListItem.ICON_SIZE_GIFT_BG = new b(80, 78);
  };
  return ModernPackageShopListItem;
}(g.CastleItemRenderer);
exports.ModernPackageShopListItem = D;
s.classImplementsInterfaces(D, "ICollectableRendererList");
D.__initialize_static_members();