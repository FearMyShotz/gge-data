Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./8.js");
var r = require("./11.js");
var l = require("./1089.js");
var c = function (e) {
  function CastleEilandTop1RewardDialog() {
    var t = this;
    t.standardOkButtonY = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleEilandTop1RewardDialog.NAME) || this;
  }
  n.__extends(CastleEilandTop1RewardDialog, e);
  CastleEilandTop1RewardDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close, this.dialogDisp.btn_title]);
    this.standardOkButtonY = this.dialogDisp.btn_ok.y;
    this.dialogDisp.mc_kingCrown.visible = true;
    this.dialogDisp.btn_title.toolTipText = "dialog_eiland_grantTitle_copy";
  };
  CastleEilandTop1RewardDialog.prototype.applyPropertiesLoaded = function (t) {
    var i;
    var n;
    if (t === undefined) {
      t = null;
    }
    e.prototype.applyPropertiesLoaded.call(this, t);
    if (this.dialogProperties.isKing) {
      i = "message_header_eiland_reward_stormlord";
      n = "dialog_eilandMessage_reward_stormlord";
      this.dialogDisp.mc_background.height = CastleEilandTop1RewardDialog.HEIGHT_EXTENDED;
      this.dialogDisp.btn_ok.y = this.standardOkButtonY + CastleEilandTop1RewardDialog.HEIGHT_DIFF;
      this.dialogDisp.btn_title.visible = true;
    } else {
      i = "message_header_eiland_reward_alliance";
      n = "dialog_eilandMessage_reward_alliance";
      this.dialogDisp.mc_background.height = CastleEilandTop1RewardDialog.HEIGHT_NORMAL;
      this.dialogDisp.btn_ok.y = this.standardOkButtonY;
      this.dialogDisp.btn_title.visible = false;
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO(i)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO(n));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rewardTitle, new a.LocalizedTextVO("dialog_eiland_forLeader_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rewardDescription, new a.LocalizedTextVO("dialog_rankreward_king_copy"));
  };
  CastleEilandTop1RewardDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (s.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_ok:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_title:
          u.CastleDialogHandler.getInstance().registerDefaultDialogs(d.CastleEilandRankingDialog, new l.CastleEilandRankingDialogProperties(l.CastleEilandRankingDialogProperties.SUBLAYER_TITLE));
      }
    }
  };
  Object.defineProperty(CastleEilandTop1RewardDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleEilandTop1RewardDialog.__initialize_static_members = function () {
    CastleEilandTop1RewardDialog.NAME = "CastleEilandTopReward";
    CastleEilandTop1RewardDialog.HEIGHT_NORMAL = 358;
    CastleEilandTop1RewardDialog.HEIGHT_EXTENDED = 396;
    CastleEilandTop1RewardDialog.HEIGHT_DIFF = CastleEilandTop1RewardDialog.HEIGHT_EXTENDED - CastleEilandTop1RewardDialog.HEIGHT_NORMAL;
  };
  return CastleEilandTop1RewardDialog;
}(r.CastleExternalDialog);
exports.CastleEilandTop1RewardDialog = c;
var u = require("./9.js");
var d = require("./1090.js");
o.classImplementsInterfaces(c, "ICollectableRendererList");
c.__initialize_static_members();