Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./123.js");
var p = require("./69.js");
var h = require("./31.js");
var g = require("./67.js");
var C = require("./104.js");
var _ = require("./19.js");
var m = require("./4.js");
var f = require("./8.js");
var O = require("./167.js");
var E = function (e) {
  function AMerchantScrollItem(t) {
    var i = e.call(this, t) || this;
    i.costRenderList = new C.CollectableRendererList();
    f.ButtonHelper.initBasicButton(t, d.ClientConstPackages.SCALE_ROLLOVER);
    t.mc_reward.mc_icon.scaleX = t.mc_reward.mc_icon.scaleY = 1;
    i._txt_name = s.GoodgameTextFieldManager.getInstance().registerTextField(i._disp.txt_name, new l.LocalizedTextVO(""));
    if (i._txt_name) {
      i._txt_name.autoFitToBounds = true;
    }
    if (i._disp.mc_cost) {
      i._txt_cost = s.GoodgameTextFieldManager.getInstance().registerTextField(i._disp.mc_cost.txt_text, new c.LocalizedNumberVO(0));
    }
    if (i._disp.mc_discount) {
      i._txt_discount = s.GoodgameTextFieldManager.getInstance().registerTextField(i._disp.mc_discount.txt_priceReduction, new l.LocalizedTextVO(r.GenericTextIds.VALUE_PERCENTAGE));
    }
    if (i._disp.mc_BestBuy) {
      i._txt_BestBuy = s.GoodgameTextFieldManager.getInstance().registerTextField(i._disp.mc_BestBuy.txt_description, new l.LocalizedTextVO("dialog_merchant_highlight"));
      i._txt_BestBuy.autoFitToBounds = true;
    }
    if (i._disp.mc_soldOut) {
      s.GoodgameTextFieldManager.getInstance().registerTextField(i._disp.mc_soldOut.txt_value, new l.LocalizedTextVO("dialog_shop_soldOut"));
    }
    return i;
  }
  n.__extends(AMerchantScrollItem, e);
  AMerchantScrollItem.prototype.show = function () {
    e.prototype.show.call(this);
    this.disp.visible = !!this.packageScrollItemVO;
  };
  AMerchantScrollItem.prototype.hide = function () {
    e.prototype.hide.call(this);
    if (this.rewardRenderer) {
      this.rewardRenderer.destroy();
    }
    if (this.costRenderList) {
      this.costRenderList.destroyCollectableRenderList();
    }
  };
  AMerchantScrollItem.prototype.customFillItem = function () {
    if (this.packageScrollItemVO) {
      this.handleTooltip();
      this.handleReward();
      this.handleName();
      this.handleCost();
      this.handleAvailability();
      this.handleDiscount();
      this.handleBestBuy();
      this.handleBackground();
    }
  };
  AMerchantScrollItem.prototype.handleTooltip = function () {
    if (m.CastleModel.settingsData.showPackageIDToolTips) {
      this._disp.toolTipText = "package id = " + this.packageVO.packageID;
    } else if (this.packageVO.isAvailable() || this.packageVO.isNotRebuyable) {
      this._disp.toolTipText = "dialog_equipmentMerchantEvent_tooltip";
    } else {
      this._disp.toolTipText = "dialog_merchant_outOfStock_tooltip";
    }
  };
  AMerchantScrollItem.prototype.handleBestBuy = function () {
    if (this._disp.mc_BestBuy) {
      this._disp.mc_BestBuy.visible = this.packageVO.isTopPackage;
    }
  };
  AMerchantScrollItem.prototype.handleDiscount = function (e = true) {
    if (this._disp.mc_discount) {
      if (e) {
        if (this.packageVO.isTopPackage) {
          this._disp.mc_discount.x = AMerchantScrollItem.TOP_RIGHT_DISCOUNT_ICON_X;
          this._disp.mc_discount.y = AMerchantScrollItem.TOP_RIGHT_DISCOUNT_ICON_Y;
        } else {
          this._disp.mc_discount.x = AMerchantScrollItem.DEFAULT_DISCOUNT_ICON_X;
          this._disp.mc_discount.y = AMerchantScrollItem.DEFAULT_DISCOUNT_ICON_Y;
        }
      }
      var t = u.int(b.EventPackagePrimeSaleEventVO.getPackageDiscountC2(this.packageVO.packageID));
      if (t > 0) {
        this._disp.mc_discount.visible = true;
        this._txt_discount.textContentVO.textReplacements = [-t];
      } else {
        this._disp.mc_discount.visible = false;
      }
    }
  };
  AMerchantScrollItem.prototype.handleAvailability = function () {
    if (this.disp.mc_soldOut) {
      this.disp.mc_soldOut.visible = !this.packageVO.isAvailable();
    }
  };
  AMerchantScrollItem.prototype.handleReward = function () {
    this.rewardRenderer = new y.CollectableRenderer(new h.CollectableRenderClips(this._disp.mc_reward), new _.CollectableRenderOptions(_.CollectableRenderOptions.ICON | _.CollectableRenderOptions.TEXTFIELD, this.rewardIconSize));
    this.rewardRenderer.options.textfield.forceRender = true;
    this.rewardRenderer.updateWithNewVO(this.packageScrollItemVO.eventPackageVO.reward);
  };
  Object.defineProperty(AMerchantScrollItem.prototype, "rewardIconSize", {
    get: function () {
      return d.ClientConstPackages.ICON_SIZE_MERCHANT_REWARD;
    },
    enumerable: true,
    configurable: true
  });
  AMerchantScrollItem.prototype.handleBackground = function () {
    if (this._disp.mc_bg) {
      if (this.packageVO.isTopPackage) {
        this._disp.mc_bg.gotoAndStop(2);
      } else {
        this._disp.mc_bg.gotoAndStop(1);
      }
    }
  };
  AMerchantScrollItem.prototype.handleName = function () {
    if (this._txt_name) {
      this._txt_name.textContentVO.textId = this.packageVO.nameTextID;
      this._txt_name.textContentVO.textReplacements = this.packageVO.nameParams;
    }
  };
  AMerchantScrollItem.prototype.handleCost = function () {
    if (this.costRenderList) {
      this.costRenderList.destroyCollectableRenderList();
    }
    var e = this.packageVO.getCostList();
    if (this._disp.mc_cost0) {
      I.CollectableRenderHelper.displayMultipleItemsComplete(this.costRenderList, new g.CollectableRenderClipsList(this._disp, "mc_cost"), this.packageVO.getCostList(), new _.CollectableRenderOptions(_.CollectableRenderOptions.SET_COST_LIST, this.costIconDimension));
    } else if (this._disp.mc_cost) {
      I.CollectableRenderHelper.displaySingleItemComplete(this.costRenderList, new h.CollectableRenderClips(this._disp.mc_cost), e.getItemByIndex(0), new _.CollectableRenderOptions(_.CollectableRenderOptions.SET_COST_LIST, this.costIconDimension));
    }
  };
  AMerchantScrollItem.prototype.onMouseClick = function (t) {
    e.prototype.onMouseClick.call(this, t);
    this.openDialog();
  };
  AMerchantScrollItem.prototype.openDialog = function () {
    if (this.packageVO.packageType == d.ClientConstPackages.PACKAGE_TYPE_BUNDLE || this.packageVO.packageType == d.ClientConstPackages.PACKAGE_TYPE_RELIC_ITEM || this.packageVO.packageType == d.ClientConstPackages.PACKAGE_TYPE_RELIC_GEM) {
      D.CastleDialogHandler.getInstance().registerDefaultDialogs(T.ModernPackageShopBuyDialog, this.createDialogProperties());
    } else {
      D.CastleDialogHandler.getInstance().registerDefaultDialogs(this.dialogKey, this.createDialogProperties());
    }
  };
  Object.defineProperty(AMerchantScrollItem.prototype, "dialogKey", {
    get: function () {
      throw new p.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  AMerchantScrollItem.prototype.createDialogProperties = function () {
    var e = new O.CastleGenericBuyDialogProperties();
    e.parseDataFromScrollItem(this.packageScrollItemVO);
    return e;
  };
  Object.defineProperty(AMerchantScrollItem.prototype, "packageScrollItemVO", {
    get: function () {
      return castAs(this.scrollItemVO, "MerchantScrollItemVO");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMerchantScrollItem.prototype, "packageVO", {
    get: function () {
      return this.packageScrollItemVO.eventPackageVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMerchantScrollItem.prototype, "costIconDimension", {
    get: function () {
      return d.ClientConstPackages.ICON_SIZE_MERCHANT_COST;
    },
    enumerable: true,
    configurable: true
  });
  AMerchantScrollItem.DEFAULT_DISCOUNT_ICON_X = -75.8;
  AMerchantScrollItem.DEFAULT_DISCOUNT_ICON_Y = -24.45;
  AMerchantScrollItem.TOP_RIGHT_DISCOUNT_ICON_X = 86;
  AMerchantScrollItem.TOP_RIGHT_DISCOUNT_ICON_Y = -43.45;
  return AMerchantScrollItem;
}(a.ScrollItem);
exports.AMerchantScrollItem = E;
o.classImplementsInterfaces(E, "MovieClip");
var y = require("./186.js");
var b = require("./190.js");
var D = require("./9.js");
var I = require("./25.js");
var T = require("./206.js");