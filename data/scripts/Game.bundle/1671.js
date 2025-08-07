Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = createjs.Point;
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./12.js");
var c = require("./31.js");
var u = require("./104.js");
var d = require("./19.js");
var p = require("./13.js");
var h = require("./9.js");
var g = require("./20.js");
var C = require("./8.js");
var _ = require("./25.js");
var m = function (e) {
  function AModernWelcomebackDialog(t = null) {
    var i = this;
    i.rewardListIndex = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t || AModernWelcomebackDialog.NAME_BIG, a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(AModernWelcomebackDialog.ASSET_NAME)) || this).renderClips = [new u.CollectableRendererList(), new u.CollectableRendererList(), new u.CollectableRendererList()];
    return i;
  }
  n.__extends(AModernWelcomebackDialog, e);
  AModernWelcomebackDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.rewardListIndex = 0;
    C.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_left, this.dialogDisp.btn_right], g.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("dialog_welcomeBack_welcomeBack_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO("dialog_welcomeBack_welcomeBack_desc1"));
    var i = new r.HTMLTextCustomVO();
    i.addLocalizedTextVO(new r.LocalizedTextVO("dialog_welcomeBack_welcomeBack_desc2"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy2, i);
    this.textFieldManager.registerTextField(this.dialogDisp.btn_ok.txt_copy, new r.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("webshop_offer_growthpackage_claimNow")));
    this.displayRewards();
    a.ClientFunnelTrackingController.getInstance().trackState("welcome_back_dialog_shown");
  };
  AModernWelcomebackDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
        break;
      case this.dialogDisp.btn_left:
        this.rewardListIndex = this.rewardListIndex == 0 ? this.amountRewardPages - 1 : this.rewardListIndex - 1;
        this.displayRewards();
        break;
      case this.dialogDisp.btn_right:
        this.rewardListIndex = this.rewardListIndex >= this.amountRewardPages - 1 ? 0 : this.rewardListIndex + 1;
        this.displayRewards();
    }
  };
  AModernWelcomebackDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    h.CastleDialogHandler.getInstance().clearAllRegisteredDialogs();
  };
  AModernWelcomebackDialog.prototype.displayRewards = function () {
    var e;
    this.dialogDisp.btn_left.visible = this.dialogDisp.btn_right.visible = this.amountRewardPages > 1;
    e = 0;
    for (; e < this.amountRewardContainer; e++) {
      var t = e + this.rewardListIndex * this.amountRewardContainer;
      var i = this.dialogDisp["mc_reward" + e];
      if (t >= this.dialogProperties.rewardList.length) {
        i.visible = false;
      } else {
        i.visible = true;
        this.fillReward(i, this.dialogProperties.rewardList.getItemByIndex(t), e);
      }
    }
  };
  AModernWelcomebackDialog.prototype.fillReward = function (e, t, i) {
    a.MovieClipHelper.clearMovieClip(e.mc_reward.mc_icon);
    if (t.itemType == l.CollectableEnum.EQUIPMENT_UNIQUE) {
      t.equipmentVO.isSkinItem();
    }
    var n = new d.CollectableRenderOptions(d.CollectableRenderOptions.SET_ADVANCED, new o(60, 60));
    _.CollectableRenderHelper.displaySingleItemComplete(this.renderClips[i], new c.CollectableRenderClips(e.mc_reward.mc_item.mc_item).addIconMc(e.mc_reward.mc_item.mc_item.mc_icon).addInfoBtn(e.mc_reward.mc_item.btn_info).addBuildingLevelMc(e.mc_reward.mc_item.mc_buildingLevel).addTextfield(e.mc_reward.mc_item.mc_item.txt_text).addTextfieldBgMc(e.mc_reward.mc_item.mc_item.mc_textBackground), t, n);
    this.textFieldManager.registerTextField(e.txt_title, new r.LocalizedTextVO(t.getNameTextId()));
  };
  Object.defineProperty(AModernWelcomebackDialog.prototype, "amountRewardPages", {
    get: function () {
      return Math.ceil(this.dialogProperties.rewardList.length / this.amountRewardContainer);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AModernWelcomebackDialog.prototype, "amountRewardContainer", {
    get: function () {
      if (this.dialogClassName == AModernWelcomebackDialog.NAME_SMALL) {
        return 2;
      } else {
        return 3;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AModernWelcomebackDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AModernWelcomebackDialog.__initialize_static_members = function () {
    AModernWelcomebackDialog.NAME_BIG = "ModernWelcomeBack_Big";
    AModernWelcomebackDialog.NAME_SMALL = "ModernWelcomeBack_Small";
    AModernWelcomebackDialog.ASSET_NAME = "ModernWelcomeBack";
  };
  return AModernWelcomebackDialog;
}(require("./11.js").CastleExternalDialog);
exports.AModernWelcomebackDialog = m;
s.classImplementsInterfaces(m, "ICollectableRendererList");
m.__initialize_static_members();