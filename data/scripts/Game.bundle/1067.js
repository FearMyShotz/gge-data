Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./19.js");
var l = require("./47.js");
var c = require("./189.js");
var u = require("./42.js");
var d = require("./8.js");
var p = require("./518.js");
var h = require("./11.js");
var g = createjs.Point;
var C = function (e) {
  function CastleQuestCompletedDialog() {
    return e.call(this, CastleQuestCompletedDialog.NAME) || this;
  }
  n.__extends(CastleQuestCompletedDialog, e);
  CastleQuestCompletedDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.rewardScrollComponent = new m.SimpleCollectableScrollComponent(this.dialogDisp, new l.SimpleScrollVO().initByParent(this.dialogDisp).addMouseWheelElements([this.dialogDisp]), new c.SimpleScrollStrategyHorizontal(), CastleQuestCompletedDialog.MAX_REWARDS, CastleQuestCompletedDialog.MAX_REWARDS);
    d.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], f.ClickFeedbackButton);
  };
  CastleQuestCompletedDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(this.dialogProperties.titleText));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_questName, new s.TextVO(this.dialogProperties.descriptionText)).verticalAlign = u.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    var i;
    var n;
    var o = this.dialogProperties.reward;
    for (var l = o.length, c = 0; c < l; ++c) {
      i = o.getItemByIndex(c);
      if ((n = a.instanceOfClass(i, "ACollectableItemEquipmentVO") ? i.equipmentVO : null) && (a.instanceOfClass(n, "RandomEquipmentVO") || a.instanceOfClass(n, "RandomHeroVO")) && this.dialogProperties.randomEquipmentRewardList && this.dialogProperties.randomEquipmentRewardList.length > 0) {
        o.replaceItemOnIndex(this.dialogProperties.randomEquipmentRewardList.getItemByIndex(0), c);
        this.dialogProperties.randomEquipmentRewardList.removeByIndex(0);
      }
    }
    this.shownRewards = o;
    this.rewardScrollComponent.show(this.shownRewards, new r.CollectableRenderOptions(r.CollectableRenderOptions.SET_ADVANCED, new g(88, 82)), this.bindFunction(this.preRenderFunc));
    var d = this.dialogProperties.crestFrameIndex <= 4;
    this.dialogDisp.mc_category.visible = !d;
    this.dialogDisp.mc_kingdomCrest.visible = d;
    this.dialogDisp.mc_category.gotoAndStop(this.dialogProperties.crestFrameIndex);
    p.KingdomCrestsAndSymbolsHelper.addCrestToMC(this.dialogDisp.mc_kingdomCrest, this.dialogProperties.quest.shownKingdomID, new g(112, 112));
  };
  CastleQuestCompletedDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.rewardScrollComponent.hide();
  };
  CastleQuestCompletedDialog.prototype.preRenderFunc = function (e) {
    if (e.itemVO) {
      var t = e.getRenderer(r.CollectableRenderOptions.ICON_TRANSFORM);
      if (_.ClientConstCollectable.COLLECTABLES_WITHOUT_TEXTFIELD.indexOf(e.itemVO.itemType) > -1) {
        t.transform.offset.y = 12;
      }
    }
  };
  CastleQuestCompletedDialog.prototype.onClick = function (t) {
    if (d.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleQuestCompletedDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleQuestCompletedDialog.NAME = "CastleQuestCompletedEx_ABG";
  CastleQuestCompletedDialog.MAX_REWARDS = 4;
  return CastleQuestCompletedDialog;
}(h.CastleExternalDialog);
exports.CastleQuestCompletedDialog = C;
var _ = require("./86.js");
var m = require("./653.js");
var f = require("./36.js");
o.classImplementsInterfaces(C, "ICollectableRendererList");