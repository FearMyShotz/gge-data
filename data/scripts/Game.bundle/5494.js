Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./1.js");
var d = require("./5.js");
var p = require("./3.js");
var h = require("./24.js");
var g = function (e) {
  function CastleAwardDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleAwardDialog.NAME) || this;
  }
  n.__extends(CastleAwardDialog, e);
  CastleAwardDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_vote]);
    this.textFieldManager.registerTextField(this.dialogDisp.btn_vote.txt_label, new p.LocalizedTextVO("dialog_award_button"));
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new p.LocalizedTextVO("european_games_award_title"));
    this.itxt_copy1 = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new p.LocalizedTextVO("bam_award_copy1"));
    this.itxt_copy2 = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy2, new p.LocalizedTextVO("bam_award_copy2"));
  };
  CastleAwardDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.setPicture();
    this.setButton();
  };
  CastleAwardDialog.prototype.setButton = function () {
    this.dialogDisp.btn_vote.visible = !this.env.loginIsKeyBased;
  };
  CastleAwardDialog.prototype.setPicture = function () {
    var e = this.dialogProperties.messageVO.subtypeEvent;
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_awardHolder);
    var t = "";
    if (e == d.MessageConst.SPECIAL_ID_BAEM_AWARD) {
      t = "CastleWelcomeNews27";
    } else if (e == d.MessageConst.SPECIAL_ID_BAEM_AWARD_FINAL) {
      t = "CastleWelcomeNews30";
    } else if (e == d.MessageConst.SPECIAL_ID_EUROPEAN_AWARD) {
      t = "CastleWelcomeNewsEGA14";
    } else if (e == d.MessageConst.SPECIAL_ID_GAMEX_AWARD) {
      t = "AwardGameX";
    } else if (e == d.MessageConst.SPECIAL_ID_MMO_OF_THE_YEAR_AWARD) {
      t = "CastleWelcomeNews44";
    }
    this.dialogDisp.mc_awardHolder.addChild(new h.CastleGoodgameExternalClip(t, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(t), null, 0, false, c.getDefinitionByName("LoadingAnimation")).asDisplayObject());
  };
  CastleAwardDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_vote:
        this.gotoURL();
    }
  };
  CastleAwardDialog.prototype.gotoURL = function () {
    try {
      var e;
      switch (this.dialogProperties.messageVO.subtypeEvent) {
        case d.MessageConst.SPECIAL_ID_BAEM_AWARD:
        case d.MessageConst.SPECIAL_ID_BAEM_AWARD_FINAL:
          e = new r.URLRequest("http://www.bamaward.de");
          break;
        case d.MessageConst.SPECIAL_ID_EUROPEAN_AWARD:
          e = new r.URLRequest("http://european-games-award.com/voting");
          break;
        case d.MessageConst.SPECIAL_ID_GAMEX_AWARD:
          e = new r.URLRequest("http://gamex.com.tr/award/best-browser-game/");
          break;
        case d.MessageConst.SPECIAL_ID_MMO_OF_THE_YEAR_AWARD:
          e = new r.URLRequest("http://www.mmooftheyear.com/vote#91X6228");
      }
      u.navigateToURL(e, "_blank");
    } catch (e) {
      s.error("nor URL Request possible");
    }
  };
  Object.defineProperty(CastleAwardDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAwardDialog.__initialize_static_members = function () {
    CastleAwardDialog.NAME = "CastleAward";
  };
  return CastleAwardDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleAwardDialog = g;
l.classImplementsInterfaces(g, "ICollectableRendererList");
g.__initialize_static_members();