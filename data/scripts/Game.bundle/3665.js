Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./3.js");
var s = require("./40.js");
var r = require("./4.js");
var l = require("./14.js");
var c = require("./2.js");
var u = require("./2.js");
var d = require("./60.js");
var p = require("./25.js");
var h = require("./31.js");
var g = require("./19.js");
var C = require("./17.js");
var _ = require("./2.js");
var m = require("./130.js");
var f = require("./1260.js");
var O = require("./167.js");
var E = require("./206.js");
var y = createjs.Point;
var b = require("./43.js");
var D = function (e) {
  function CastlePrivateBestsellerShopItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastlePrivateBestsellerShopItem, e);
  CastlePrivateBestsellerShopItem.prototype.showOffer = function (e, t) {
    this.offerVO = r.CastleModel.privateOfferData.getOfferById(e);
    this.parentOfferID = t;
    this.pbsPackageVO = new f.PrivateBestsellerShopPackageVO();
    this.pbsPackageVO.fillFromPBSOffer(this.offerVO, this.parentOfferID);
    var i = this.visualsSubOffer.discount;
    var n = this.visualsSubOffer.oldCost;
    if (n == 0 && i != 0) {
      n = Math.round(this.costVO.amount / (1 - i / 100));
    } else if (i == 0 && n != 0) {
      i = Math.round(-(this.costVO.amount / n - 1) * 100);
    }
    this.disp.mc_discount.visible = i > 0;
    this.disp.mc_oldCost.visible = i > 0;
    l.CastleComponent.textFieldManager.registerTextField(this.disp.mc_discount.txt_discount, new o.LocalizedTextVO(c.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [i]), new u.InternalGGSTextFieldConfigVO(true));
    l.CastleComponent.textFieldManager.registerTextField(this.disp.mc_oldCost.txt_oldCost, new a.LocalizedNumberVO(n), new u.InternalGGSTextFieldConfigVO(true));
    l.CastleComponent.textFieldManager.registerTextField(this.disp.txt_amount, new o.LocalizedTextVO("generic_amount_reward", [this.rewardVO.amount, new o.TextVO(" ")]), new u.InternalGGSTextFieldConfigVO(true));
    l.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new o.LocalizedTextVO(this.rewardVO.getNameTextId(), this.rewardVO.getNameTextParams()), new u.InternalGGSTextFieldConfigVO(true));
    l.CastleComponent.textFieldManager.registerTextField(this.disp.mc_soldOut.txt_soldOut, new o.LocalizedTextVO("dialog_shop_soldOut"), new u.InternalGGSTextFieldConfigVO(true));
    this.destroyCollectableRenderList();
    var s = new h.CollectableRenderClips(this.disp.mc_item).addIconMc(this.disp.mc_item);
    var d = new g.CollectableRenderOptions(g.CollectableRenderOptions.SET_ICON, new y(64, 64));
    p.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, s, this.rewardVO, d);
    var C = new h.CollectableRenderClips(this.disp.mc_cost);
    var _ = new g.CollectableRenderOptions(g.CollectableRenderOptions.SET_DEFAULT, new y(30, 20));
    p.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, C, this.costVO, _);
    this.disp.mc_soldOut.visible = !this.pbsPackageVO.isAvailable();
    this.disp.mouseChildren = false;
    this.disp.toolTipText = "dialog_equipmentMerchantEvent_tooltip";
    this.disp.mc_hover.visible = false;
    this.disp.mc_down.visible = false;
  };
  CastlePrivateBestsellerShopItem.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    if (this.disp) {
      this.disp.addEventListener("mousedown", this.bindFunction(this.onMouseDown));
      r.CastleModel.privateOfferData.addEventListener(m.PrivateOfferDataEvent.PRIVATE_OFFER_UPDATED, this.bindFunction(this.onOfferUpdated));
      r.CastleModel.privateOfferData.addEventListener(m.PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED, this.bindFunction(this.onOfferUpdated));
    }
  };
  CastlePrivateBestsellerShopItem.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    if (this.disp) {
      this.disp.removeEventListener("mousedown", this.bindFunction(this.onMouseDown));
      r.CastleModel.privateOfferData.removeEventListener(m.PrivateOfferDataEvent.PRIVATE_OFFER_UPDATED, this.bindFunction(this.onOfferUpdated));
      r.CastleModel.privateOfferData.removeEventListener(m.PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED, this.bindFunction(this.onOfferUpdated));
    }
  };
  CastlePrivateBestsellerShopItem.prototype.onOfferUpdated = function (e) {
    if (e.offerVO.id == this.offerVO.id) {
      this.showOffer(this.offerVO.id, this.parentOfferID);
    }
  };
  CastlePrivateBestsellerShopItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    this.resetHoverStates();
    var i = new O.CastleGenericBuyDialogProperties();
    i.eventPackageVO = this.pbsPackageVO;
    i.privateOfferVO = this.offerVO;
    l.CastleComponent.dialogHandler.registerDialogsWithTypeAndDefaultValues(E.ModernPackageShopBuyDialog, i, b.CastleDialogConsts.DIALOG_TYPE_MODAL_SINGLE);
  };
  CastlePrivateBestsellerShopItem.prototype.onMouseDown = function (e) {
    this.disp.mc_hover.visible = false;
    this.disp.mc_down.visible = true;
  };
  CastlePrivateBestsellerShopItem.prototype.onRollOver = function (t) {
    e.prototype.onRollOver.call(this, t);
    C.CastleLayoutManager.getInstance().customCursor.setCursorType(_.BasicCustomCursor.CURSOR_CLICK);
    this.disp.mc_hover.visible = true;
  };
  CastlePrivateBestsellerShopItem.prototype.onRollOut = function (t) {
    e.prototype.onRollOut.call(this, t);
    this.resetHoverStates();
  };
  CastlePrivateBestsellerShopItem.prototype.resetHoverStates = function () {
    this.disp.mc_hover.visible = false;
    this.disp.mc_down.visible = false;
    C.CastleLayoutManager.getInstance().customCursor.setCursorType(_.BasicCustomCursor.CURSOR_ARROW);
  };
  Object.defineProperty(CastlePrivateBestsellerShopItem.prototype, "costVO", {
    get: function () {
      return this.pbsPackageVO.price;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivateBestsellerShopItem.prototype, "rewardVO", {
    get: function () {
      return this.pbsPackageVO.rewards.getItemByIndexSave(0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivateBestsellerShopItem.prototype, "visualsSubOffer", {
    get: function () {
      return this.offerVO.getVisualComponentByName(d.ClientConstOffer.OFFER_VISUAL_SUB_OFFER);
    },
    enumerable: true,
    configurable: true
  });
  return CastlePrivateBestsellerShopItem;
}(s.CastleItemRenderer);
exports.CastlePrivateBestsellerShopItem = D;