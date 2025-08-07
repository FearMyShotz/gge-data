Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./31.js");
var d = require("./19.js");
var p = require("./4.js");
var h = require("./43.js");
var g = require("./8.js");
var C = require("./11.js");
var _ = require("./93.js");
var m = createjs.Point;
var f = function (e) {
  function CastlePlayerGiftMessageDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastlePlayerGiftMessageDialog.NAME) || this;
  }
  n.__extends(CastlePlayerGiftMessageDialog, e);
  CastlePlayerGiftMessageDialog.prototype.initLoaded = function (t = null) {
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_okay]);
    e.prototype.initLoaded.call(this, t);
  };
  CastlePlayerGiftMessageDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    var i = new l.LocalizedTextVO("dialog_giftTrader_obtainedGift");
    i.textReplacements = [this.dialogProperties.messageVO.sendersName];
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.LocalizedTextVO("message_header_giftTrader_obtainedGift"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_playername.txt_playerName, new c.TextVO(this.dialogProperties.messageVO.sendersName));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, i);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_amount, new r.LocalizedNumberVO(this.totalAmount));
    var n = p.CastleModel.eventPackageData.getEventPackageByID(this.dialogProperties.messageVO.packID);
    this.renderReward(n);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.btn_playername.mouseChildren = false;
    g.ButtonHelper.initBasicButton(this.dialogDisp.btn_playername);
  };
  CastlePlayerGiftMessageDialog.prototype.renderReward = function (e) {
    var t = a.instanceOfClass(e.reward, "ACollectableItemEquipmentVO") || e.reward.itemType == O.CollectableEnum.GEM;
    this.dialogDisp.mc_giftBG.visible = !t;
    var i = t ? new m(70, 70) : new m(42, 42);
    var n = new u.CollectableRenderClips(this.dialogDisp.mc_reward);
    n.addIconMc(this.dialogDisp.mc_reward.mc_icon);
    n.addInfoBtn(this.dialogDisp.btn_info);
    var o = new E.CollectableRenderer(n, new d.CollectableRenderOptions(d.CollectableRenderOptions.SET_BASIC, i));
    o.updateWithNewVO(e.reward);
    this.collectableRenderList.push(o);
  };
  Object.defineProperty(CastlePlayerGiftMessageDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePlayerGiftMessageDialog.prototype, "totalAmount", {
    get: function () {
      var e = p.CastleModel.eventPackageData.getEventPackageByID(this.dialogProperties.messageVO.packID);
      return this.dialogProperties.messageVO.pAmount * e.reward.amount;
    },
    enumerable: true,
    configurable: true
  });
  CastlePlayerGiftMessageDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_okay:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        this.onHelpButton();
        break;
      case this.dialogDisp.btn_playername:
        this.showPlayerInfo();
    }
  };
  CastlePlayerGiftMessageDialog.prototype.showPlayerInfo = function () {
    C.CastleExternalDialog.dialogHandler.registerDialogsWithTypeAndDefaultValues(b.CastlePlayerInfoDialog, new _.CastlePlayerInfoDialogProperties(this.dialogProperties.messageVO.sendersID), h.CastleDialogConsts.DIALOG_TYPE_SINGLE);
  };
  CastlePlayerGiftMessageDialog.prototype.onHelpButton = function () {
    y.CastleDialogHandler.getInstance().showHelper("", s.Localize.text("help_giftReceived"));
  };
  CastlePlayerGiftMessageDialog.__initialize_static_members = function () {
    CastlePlayerGiftMessageDialog.NAME = "CastleGotPlayerGift";
  };
  return CastlePlayerGiftMessageDialog;
}(C.CastleExternalDialog);
exports.CastlePlayerGiftMessageDialog = f;
var O = require("./12.js");
var E = require("./186.js");
var y = require("./9.js");
var b = require("./94.js");
o.classImplementsInterfaces(f, "ICollectableRendererList");
f.__initialize_static_members();