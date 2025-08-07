Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./11.js");
var r = require("./8.js");
var l = require("./1163.js");
var c = require("./2.js");
var u = require("./24.js");
var d = require("./2.js");
var p = require("./20.js");
var h = function (e) {
  function CastleMessageFoodFreezeEndDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleMessageFoodFreezeEndDialog.NAME) || this;
  }
  n.__extends(CastleMessageFoodFreezeEndDialog, e);
  CastleMessageFoodFreezeEndDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    r.ButtonHelper.initButtons([this.dialogDisp.btn_close], p.ClickFeedbackButtonHover);
  };
  CastleMessageFoodFreezeEndDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    c.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_teaser);
    switch (this.dialogProperties.messageScope) {
      case l.MessageDowntimeStatusVO.SCOPE_FOOD:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("message_productionDownTime_unfreeze_food_header"));
        this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new a.LocalizedTextVO("message_productionDownTime_unfreeze_food_desc"));
        this.dialogDisp.mc_teaser.addChild(new u.CastleGoodgameExternalClip(CastleMessageFoodFreezeEndDialog.FOOD_TEASER, d.BasicModel.basicLoaderData.getVersionedItemAssetUrl(CastleMessageFoodFreezeEndDialog.FOOD_TEASER), null, 0, false));
        break;
      case l.MessageDowntimeStatusVO.SCOPE_FOOD_MEAD:
        this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("message_productionDownTime_unfreeze_foodmead_header"));
        this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new a.LocalizedTextVO("message_productionDownTime_unfreeze_foodmead_desc"));
        this.dialogDisp.mc_teaser.addChild(new u.CastleGoodgameExternalClip(CastleMessageFoodFreezeEndDialog.FOOD_MEAD_TEASER, d.BasicModel.basicLoaderData.getVersionedItemAssetUrl(CastleMessageFoodFreezeEndDialog.FOOD_MEAD_TEASER), null, 0, false));
    }
  };
  CastleMessageFoodFreezeEndDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(CastleMessageFoodFreezeEndDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleMessageFoodFreezeEndDialog.NAME = "FoodFreezeEndExt";
  CastleMessageFoodFreezeEndDialog.FOOD_TEASER = "FoodFreezeTeaser_Food";
  CastleMessageFoodFreezeEndDialog.FOOD_MEAD_TEASER = "FoodFreezeTeaser_FoodMead";
  return CastleMessageFoodFreezeEndDialog;
}(s.CastleExternalDialog);
exports.CastleMessageFoodFreezeEndDialog = h;
o.classImplementsInterfaces(h, "ICollectableRendererList");