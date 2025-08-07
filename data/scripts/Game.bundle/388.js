Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./1336.js");
var l = require("./4.js");
var c = require("./8.js");
var u = function (e) {
  function CastleAllianceTeaserDialog() {
    var t = this;
    t.allianceStandardName = "dialog_alliance_name_default";
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleAllianceTeaserDialog.NAME) || this;
  }
  n.__extends(CastleAllianceTeaserDialog, e);
  CastleAllianceTeaserDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_join_alliance, this.dialogDisp.btn_found_alliance]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO("dialog_alliance_teaser_header")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_promotion_3, new s.LocalizedTextVO("dialog_alliance_teaser_bullet_3")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_promotion_4, new s.LocalizedTextVO("dialog_alliance_teaser_bullet_4")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_join_alliance.txt_value, new s.LocalizedTextVO("dialog_alliance_teaser_joinAlliance")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_found_alliance.txt_value, new s.LocalizedTextVO("dialog_alliance_teaser_createAlliance")).autoFitToBounds = true;
  };
  CastleAllianceTeaserDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (this.dialogProperties && this.dialogProperties.topLinesMerged) {
      this.dialogDisp.mc_toplines.gotoAndStop(2);
      this.textFieldManager.registerTextField(this.dialogDisp.mc_toplines.txt_promotion_3, new s.LocalizedTextVO("dialog_alliance_teaser_bullet_constructionHelp"));
    } else {
      this.dialogDisp.mc_toplines.gotoAndStop(1);
      this.textFieldManager.registerTextField(this.dialogDisp.mc_toplines.txt_promotion_1, new s.LocalizedTextVO("dialog_alliance_teaser_bullet_1")).autoFitToBounds = true;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_toplines.txt_promotion_2, new s.LocalizedTextVO("dialog_alliance_teaser_bullet_2")).autoFitToBounds = true;
    }
  };
  CastleAllianceTeaserDialog.prototype.onClick = function (e) {
    if (c.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_join_alliance:
          this.hide();
          this.onJoinAlliance();
          break;
        case this.dialogDisp.btn_found_alliance:
          this.hide();
          this.onFoundAlliance();
      }
    }
  };
  CastleAllianceTeaserDialog.prototype.onFoundAlliance = function () {
    d.CastleDialogHandler.getInstance().registerDefaultDialogs(p.CastleNewAllianceDialog);
  };
  CastleAllianceTeaserDialog.prototype.onJoinAlliance = function () {
    var e = a.Localize.text(this.allianceStandardName);
    l.CastleModel.smartfoxClient.sendCommandVO(new r.C2SAutoAllianceSearchVO(e));
  };
  Object.defineProperty(CastleAllianceTeaserDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceTeaserDialog.__initialize_static_members = function () {
    CastleAllianceTeaserDialog.NAME = "CastleAllianceTeaser";
  };
  return CastleAllianceTeaserDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleAllianceTeaserDialog = u;
var d = require("./9.js");
var p = require("./1337.js");
o.classImplementsInterfaces(u, "ICollectableRendererList");
u.__initialize_static_members();