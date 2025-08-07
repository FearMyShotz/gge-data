Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./727.js");
var u = require("./515.js");
var d = require("./15.js");
var p = require("./4.js");
var h = require("./8.js");
var g = require("./11.js");
var C = require("./2307.js");
var _ = function (e) {
  function CastleWelcomeBetaTestDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleWelcomeBetaTestDialog.NAME) || this;
  }
  n.__extends(CastleWelcomeBetaTestDialog, e);
  CastleWelcomeBetaTestDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.LocalizedTextVO("dialog_testServer_welcome_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info_header, new l.LocalizedTextVO("dialog_testServer_welcome_subHeader_info"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_news_header, new l.LocalizedTextVO("dialog_testServer_welcome_subHeader_news"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info_desc, new l.LocalizedTextVO("dialog_testServer_info_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_discord, new l.LocalizedTextVO("dialog_testServer_link_forumText"));
    this.dialogDisp.btn_discord.toolTipText = "dialog_testServer_forum_tooltip";
    this.dialogDisp.btn_facebook.toolTipText = "dialog_welcome_facebookButton";
    this.initBasicButtons([this.dialogDisp.btn_facebook, this.dialogDisp.btn_close, this.dialogDisp.btn_discord]);
    this.newsComponent = new m.AccordionComponent(this.dialogDisp.mc_newsComponent);
  };
  CastleWelcomeBetaTestDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.newsComponent.clear();
    for (var i = 0, n = this.dialogProperties.newsIDs; i < n.length; i++) {
      var o = n[i];
      if (o !== undefined) {
        var a = new C.BetaTestNewsItemsProperties(o);
        var s = new f.BetaTestNewsItem(a);
        this.newsComponent.addItem(s);
      }
    }
    this.newsComponent.show();
  };
  CastleWelcomeBetaTestDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.newsComponent.hide();
    p.CastleModel.tutorialData.startTutorialOnLoginComplete();
    u.CommandDelayController.getInstance().finishDelayOfAllCommands();
  };
  CastleWelcomeBetaTestDialog.prototype.onClick = function (e) {
    if (h.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_facebook:
          o.BrowserUtil.executeNavigateToURL(new s.URLRequest(c.ClientConstURL.URL_OFICIAL_EMPIRE_FACEBOOK_PAGE));
          break;
        case this.dialogDisp.btn_discord:
          a.CommandController.instance.executeCommand(d.CastleBasicController.OPEN_DISCORD);
          break;
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleWelcomeBetaTestDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleWelcomeBetaTestDialog.__initialize_static_members = function () {
    CastleWelcomeBetaTestDialog.NAME = "CastleWelcomeBetaTest";
  };
  return CastleWelcomeBetaTestDialog;
}(g.CastleExternalDialog);
exports.CastleWelcomeBetaTestDialog = _;
var m = require("./1258.js");
var f = require("./2308.js");
r.classImplementsInterfaces(_, "ICollectableRendererList");
_.__initialize_static_members();