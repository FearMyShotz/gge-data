Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./1475.js");
var u = require("./4.js");
var d = function (e) {
  function ConstructionItemCraftingMinuteSkipProperties(t) {
    var i = e.call(this) || this;
    i._recipeVO = t;
    return i;
  }
  n.__extends(ConstructionItemCraftingMinuteSkipProperties, e);
  ConstructionItemCraftingMinuteSkipProperties.prototype.getMinuteSkipCommand = function (e) {
    return new c.C2SMinuteSkipCraftingVO(e);
  };
  ConstructionItemCraftingMinuteSkipProperties.prototype.getFullSkipCommand = function () {
    return new c.C2SMinuteSkipCraftingVO("-", 1);
  };
  ConstructionItemCraftingMinuteSkipProperties.prototype.isSkipAppliable = function () {
    return !!this._recipeVO && this.getRemainingTime() > 0;
  };
  ConstructionItemCraftingMinuteSkipProperties.prototype.isFreeSkipActive = function () {
    return false;
  };
  ConstructionItemCraftingMinuteSkipProperties.prototype.isPrimeSaleActive = function () {
    return false;
  };
  ConstructionItemCraftingMinuteSkipProperties.prototype.getPrimeSaleDiscount = function () {
    return 0;
  };
  ConstructionItemCraftingMinuteSkipProperties.prototype.getRemainingPrimeSaleTime = function () {
    return 0;
  };
  ConstructionItemCraftingMinuteSkipProperties.prototype.getNameText = function () {
    return new r.LocalizedTextVO("dialog_ci_crafting");
  };
  ConstructionItemCraftingMinuteSkipProperties.prototype.getAdditionalInfo = function () {
    return new r.LocalizedTextVO(this._recipeVO.constructionItem.nameTextId);
  };
  ConstructionItemCraftingMinuteSkipProperties.prototype.getIconFrame = function () {
    return l.int(h.CastleMinuteSkipDialog.ICONFRAME_BUILDING);
  };
  ConstructionItemCraftingMinuteSkipProperties.prototype.getIconToolTipText = function () {
    return "dialog_ci_craft_header";
  };
  ConstructionItemCraftingMinuteSkipProperties.prototype.displayPicture = function (e) {
    return e.addChild(p.ConstructionItemRenderer.render(this._recipeVO.constructionItem));
  };
  ConstructionItemCraftingMinuteSkipProperties.prototype.getTotalTime = function () {
    return u.CastleModel.constructionItemData.totalCraftingTime;
  };
  ConstructionItemCraftingMinuteSkipProperties.prototype.getRemainingTime = function () {
    return u.CastleModel.constructionItemData.craftingSeconds;
  };
  ConstructionItemCraftingMinuteSkipProperties.prototype.getSkipCost = function () {
    return l.int(s.ConstructionConst.getFastCompleteCostC2(u.CastleModel.constructionItemData.craftingSeconds, 2));
  };
  return ConstructionItemCraftingMinuteSkipProperties;
}(o.BasicProperties);
exports.ConstructionItemCraftingMinuteSkipProperties = d;
var p = require("./529.js");
var h = require("./208.js");
a.classImplementsInterfaces(d, "IMinuteSkipProperties");