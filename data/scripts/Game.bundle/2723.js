Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MouseEvent;
var o = function () {
  function CastleConstructionItemsCraftingSublayerItemInfo(e, t) {
    this.selectedRecipeIndex = 0;
    this.itemInfo = e;
    this.sublayer = t;
    u.ButtonHelper.initSmallButtons([e.btnLeft, e.btnRight]);
  }
  CastleConstructionItemsCraftingSublayerItemInfo.prototype.addEventListeners = function () {
    this.itemInfo.addEventListener(n.MOUSE_WHEEL, this.bindFunction(this.onScrollLevels));
  };
  CastleConstructionItemsCraftingSublayerItemInfo.prototype.removeEventListeners = function () {
    this.itemInfo.removeEventListener(n.MOUSE_WHEEL, this.bindFunction(this.onScrollLevels));
  };
  CastleConstructionItemsCraftingSublayerItemInfo.prototype.onScrollLevels = function (e) {
    if (e.delta < 0) {
      if (this.selectedRecipeIndex > 0) {
        this.decreaseLevel();
      }
    } else if (this.selectedRecipeIndex < this.sublayer.bluePrintShown.recipes.length - 1) {
      this.increaseLevel();
    }
  };
  CastleConstructionItemsCraftingSublayerItemInfo.prototype.decreaseLevel = function () {
    this.selectedRecipeIndex--;
    this.sublayer.updateItemInfo();
  };
  CastleConstructionItemsCraftingSublayerItemInfo.prototype.increaseLevel = function () {
    this.selectedRecipeIndex++;
    this.sublayer.updateItemInfo();
  };
  CastleConstructionItemsCraftingSublayerItemInfo.prototype.onClick = function (e) {
    switch (e) {
      case this.itemInfo.btnLeft:
        this.decreaseLevel();
        break;
      case this.itemInfo.btnRight:
        this.increaseLevel();
    }
  };
  CastleConstructionItemsCraftingSublayerItemInfo.prototype.update = function (e) {
    CastleConstructionItemsCraftingSublayerItemInfo.textFieldManager.registerTextField(this.itemInfo.title, new l.LocalizedTextVO(e.nameTextId)).autoFitToBounds = true;
    CastleConstructionItemsCraftingSublayerItemInfo.textFieldManager.registerTextField(this.itemInfo.level, new l.LocalizedTextVO("ci_level", [e.level]));
    CastleConstructionItemsCraftingSublayerItemInfo.textFieldManager.registerTextField(this.itemInfo.description, new c.TextVO(e.effectText));
    this.itemInfo.primaryLeft.visible = this.itemInfo.primaryRight.visible = this.itemInfo.appearanceLeft.visible = this.itemInfo.appearanceRight.visible = this.itemInfo.secondaryLeft.visible = this.itemInfo.secondaryRight.visible = false;
    var t = "primary";
    if (e.isAppearanceItem) {
      t = "appearance";
    } else if (e.isSecondaryItem) {
      t = "secondary";
    }
    this.itemInfo[t + "Left"].visible = this.itemInfo[t + "Right"].visible = true;
    this.itemInfo[t + "Left"].gotoAndStop(e.rarity + 2);
    this.itemInfo[t + "Right"].gotoAndStop(e.rarity + 2);
    var i = this.sublayer.bluePrintShown.recipes.length;
    this.itemInfo.btnLeft.visible = this.selectedRecipeIndex > 0;
    this.itemInfo.btnRight.visible = this.selectedRecipeIndex < i - 1 && i > 1;
    var n = e.skinnedBuildingVO;
    if (e.isAppearanceItem && n) {
      a.WodPicHelper.addWodPic(n, this.itemInfo.buildingClip.mc_building, 93.65, 93.65);
    } else {
      r.MovieClipHelper.clearMovieClip(this.itemInfo.buildingClip.mc_building);
    }
  };
  Object.defineProperty(CastleConstructionItemsCraftingSublayerItemInfo, "textFieldManager", {
    get: function () {
      return s.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleConstructionItemsCraftingSublayerItemInfo;
}();
exports.CastleConstructionItemsCraftingSublayerItemInfo = o;
var a = require("./63.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./8.js");