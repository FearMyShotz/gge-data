Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./436.js");
var u = require("./8.js");
var d = require("./1525.js");
var p = function (e) {
  function PrivateResourceVillageShopItem(t) {
    var i = e.call(this, t) || this;
    u.ButtonHelper.initBasicButton(t.btn_buy);
    return i;
  }
  n.__extends(PrivateResourceVillageShopItem, e);
  PrivateResourceVillageShopItem.prototype.show = function () {
    e.prototype.show.call(this);
  };
  PrivateResourceVillageShopItem.prototype.hide = function () {
    e.prototype.hide.call(this);
  };
  PrivateResourceVillageShopItem.prototype.customFillItem = function () {
    this.clearComponents();
    var e = this.scrollItemVO.villageVO;
    this.itxt_title = a.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_title, new l.LocalizedTextVO(this.getTitleTxt(), [e.villageLevel]));
    this.itxt_price = a.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.costArea.txt_price, new r.LocalizedNumberVO(e.tokenCostTotal));
    this.disp.costArea.toolTipText = "currency_name_ResourceVillageToken";
    this.disp.costArea.mouseChildren = false;
    g.CastlePrivateResourceVillageRenderHelper.fillResourceBonus(this.disp.boniSection, e.type, e.bonus.strength, 20, 16);
    g.CastlePrivateResourceVillageRenderHelper.renderVillage(e.type, this.disp.mc_village, 61, 47);
    if (this.scrollItemVO.isAbleToBuy) {
      u.ButtonHelper.enableButton(this.disp.btn_buy, true);
      this.disp.btn_buy.toolTipText = "dialog_privateResourceVillages_shop_buyButton";
    } else {
      u.ButtonHelper.enableButton(this.disp.btn_buy, false);
      this.disp.btn_buy.toolTipText = "dialog_privateResourceVillages_shop_maxVillages_tt";
    }
  };
  PrivateResourceVillageShopItem.prototype.getTitleTxt = function () {
    var e = this.scrollItemVO.villageVO;
    return "dialog_privateResourceVillages_villageLevel_" + c.ClientConstKingdom.getVillageTypeName(e.type).toLowerCase() + "_tt";
  };
  PrivateResourceVillageShopItem.prototype.clearComponents = function () {
    if (this.itxt_title && a.GoodgameTextFieldManager.getInstance().isTextFieldRegistered(this.disp.txt_title)) {
      a.GoodgameTextFieldManager.getInstance().unregisterTextField(this.disp.txt_title);
    }
    if (this.itxt_boni && a.GoodgameTextFieldManager.getInstance().isTextFieldRegistered(this.disp.txt_boni)) {
      a.GoodgameTextFieldManager.getInstance().unregisterTextField(this.disp.txt_price);
    }
    if (this.itxt_price && a.GoodgameTextFieldManager.getInstance().isTextFieldRegistered(this.disp.txt_title)) {
      a.GoodgameTextFieldManager.getInstance().unregisterTextField(this.disp.txt_title);
    }
  };
  PrivateResourceVillageShopItem.prototype.onMouseClick = function (t) {
    e.prototype.onMouseClick.call(this, t);
    if (u.ButtonHelper.isButtonEnabled(t.target) && t.target == this.disp.btn_buy) {
      h.CastleDialogHandler.getInstance().registerDefaultDialogs(C.PrivateResourceVillageBuyDialog, new d.PrivateResourceVillageActionDialogProperties(this.scrollItemVO.villageVO));
    }
  };
  PrivateResourceVillageShopItem.NUM_ITEMS_PER_PAGE = 6;
  PrivateResourceVillageShopItem.DEFAULT_FRAME = 1;
  PrivateResourceVillageShopItem.GOLD_FRAME = 2;
  return PrivateResourceVillageShopItem;
}(s.ScrollItem);
exports.PrivateResourceVillageShopItem = p;
var h = require("./9.js");
var g = require("./535.js");
var C = require("./2801.js");
o.classImplementsInterfaces(p, "MovieClip");