Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./31.js");
var r = require("./19.js");
var l = require("./4.js");
var c = require("./42.js");
var u = require("./11.js");
var d = createjs.Point;
var p = function (e) {
  function CastleTreasureFoundTreasureDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleTreasureFoundTreasureDialog.NAME) || this;
  }
  n.__extends(CastleTreasureFoundTreasureDialog, e);
  CastleTreasureFoundTreasureDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
    this.dialogDisp.mc_item.mouseChildren = false;
  };
  CastleTreasureFoundTreasureDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    g.CrestHelper.setCrestGraphics(this.dialogDisp.crest, l.CastleModel.userData.playerCrest);
    this.updateReward(this.dialogDisp.mc_item);
    this.dialogDisp.mc_item.mouseChildren = false;
  };
  CastleTreasureFoundTreasureDialog.prototype.setCopyTexts = function () {
    var e = this.dialogProperties.title ? this.dialogProperties.title : "dialog_treasureMap_foundTreasure_title";
    var t = this.dialogProperties.copy ? this.dialogProperties.copy : "dialog_treasureMap_foundTreasure_copy";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO(e)).verticalAlign = c.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO(t));
  };
  CastleTreasureFoundTreasureDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleTreasureFoundTreasureDialog.prototype.updateReward = function (e) {
    h.CollectableRenderHelper.displaySingleItemComplete(this, new s.CollectableRenderClips(e).addIconMc(e), this.dialogProperties.rewardList.getItemByIndexSave(0), new r.CollectableRenderOptions(r.CollectableRenderOptions.SET_ICON, new d(110, 110)));
  };
  Object.defineProperty(CastleTreasureFoundTreasureDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTreasureFoundTreasureDialog.__initialize_static_members = function () {
    CastleTreasureFoundTreasureDialog.NAME = "CastleTreasureFoundTreasure";
  };
  return CastleTreasureFoundTreasureDialog;
}(u.CastleExternalDialog);
exports.CastleTreasureFoundTreasureDialog = p;
var h = require("./25.js");
var g = require("./61.js");
o.classImplementsInterfaces(p, "ICollectableRendererList");
p.__initialize_static_members();