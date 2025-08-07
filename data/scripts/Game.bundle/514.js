Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./1.js");
var d = require("./3.js");
var p = require("./342.js");
var h = require("./866.js");
var g = require("./598.js");
var C = require("./15.js");
var _ = require("./913.js");
var m = require("./354.js");
var f = require("./435.js");
var O = require("./8.js");
var E = require("./921.js");
var y = require("./41.js");
var b = require("./1300.js");
var D = createjs.MouseEvent;
var I = function (e) {
  function CastleOptionPanel() {
    return e.call(this, new Library.CastleInterfaceElements.OptionPanel1()) || this;
  }
  n.__extends(CastleOptionPanel, e);
  CastleOptionPanel.prototype.initBetaBanner = function () {
    this.panelDisp.betaTestBanner.visible = p.ClientConstInstanceIDs.isBetaInstance() || u.instanceOfClass(this.env, "CastleEnvironmentGlobals") && this.env.isClosedBeta;
  };
  CastleOptionPanel.prototype.init = function () {
    e.prototype.init.call(this);
    this.addSublayer(this.panelDisp.sublayer_help);
    this.addSublayer(this.panelDisp.sublayer_options);
    this.panelDisp.addEventListener(D.ROLL_OUT, this.bindFunction(this.onSublayerRollOut));
    this.panelDisp.btn_logout.toolTipText = "panel_option_logout";
    this.panelDisp.btn_logout.visible = !this.env.loginIsKeyBased || s.BasicModel.socialData.logoutSupported();
    this.panelDisp.btn_help.toolTipText = "generic_help";
    this.panelDisp.btn_zoomIn.toolTipText = "panel_option_zoomIn";
    this.panelDisp.btn_zoomOut.toolTipText = "panel_option_zoomOut";
    this.panelDisp.btn_options.toolTipText = "panel_option_config";
    this.panelDisp.btn_discord.toolTipText = "panel_option_discord";
    this.panelDisp.sublayer_options.btn_fullscreen.toolTipText = "panel_option_fullscreen";
    this.panelDisp.sublayer_options.btn_settings.toolTipText = "panel_option_options";
    this.panelDisp.sublayer_options.btn_music.toolTipText = "generic_music";
    this.panelDisp.sublayer_help.btn_ingameHelp.toolTipText = this.panelDisp.sublayer_help.btn_ingameHelp.enabled ? "panel_option_ingameHelp" : "dialog_needQuestProgress_tooltip";
    this.panelDisp.sublayer_help.btn_commHub.toolTipText = "panel_option_communityHub";
    if (this.panelDisp.sublayer_help.mc_new) {
      this.panelDisp.sublayer_help.mc_new.visible = false;
      this.panelDisp.sublayer_help.mc_new.mouseEnable = false;
    }
    if (this.panelDisp.sublayer_help.btn_helpshift) {
      this.panelDisp.sublayer_help.btn_helpshift.toolTipText = "panel_option_supportChat";
    }
    if (this.panelDisp.mc_new) {
      this.panelDisp.mc_new.visible = false;
      this.panelDisp.mc_new.mouseEnable = false;
    }
    this.initBetaBanner();
    this.setSoundButtons();
    this.textFieldManager.registerTextField(this.panelDisp.betaTestBanner.txt_beta, new d.LocalizedTextVO("dialog_testServer_banner")).autoFitToBounds = true;
    this.allowCaching = true;
    O.ButtonHelper.initBasicButtons([this.panelDisp.sublayer_options.btn_settings, this.panelDisp.sublayer_help.btn_commHub, this.panelDisp.sublayer_help.btn_helpshift]);
    g.HelpshiftHelper.getInstance().newMessage.add(this.bindFunction(this.onNewHelpshiftMessages));
    this.onNewHelpshiftMessages();
  };
  CastleOptionPanel.prototype.destroy = function () {
    this.panelDisp.removeEventListener(D.ROLL_OUT, this.bindFunction(this.onSublayerRollOut));
    g.HelpshiftHelper.getInstance().newMessage.remove(this.bindFunction(this.onNewHelpshiftMessages));
    e.prototype.destroy.call(this);
  };
  CastleOptionPanel.prototype.onNewHelpshiftMessages = function (e = 0) {
    if (this.panelDisp.sublayer_help.mc_new) {
      this.panelDisp.sublayer_help.mc_new.visible = g.HelpshiftHelper.getInstance().newMessagesCount > 0;
      this.panelDisp.mc_new.visible = g.HelpshiftHelper.getInstance().newMessagesCount > 0;
      y.CastleMovieClipHelper.uncacheSafe(this.panelDisp);
    }
  };
  CastleOptionPanel.prototype.onKeyUp = function (t) {
    e.prototype.onKeyUp.call(this, t);
    if (t.ctrlKey && t.altKey && t.key == c.Keyboard.M) {
      this.onToggleMusic();
    }
  };
  CastleOptionPanel.prototype.onClick = function (t) {
    if (!this.isLocked && O.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      this.layoutManager.hideAllIngameUIComponents();
      switch (t.target) {
        case this.panelDisp.btn_logout:
          r.CommandController.instance.executeCommand(a.BasicController.COMMAND_LOGOUT);
          break;
        case this.panelDisp.btn_help:
          this.showSubLayer(this.panelDisp.sublayer_help);
          if (c.currentBrowserInfo.isTouchEvent(t)) {
            this.hideSubLayer(this.panelDisp.sublayer_options, true);
          }
          break;
        case this.panelDisp.btn_zoomIn:
          this.controller.dispatchEvent(new h.CastleZoomEvent(h.CastleZoomEvent.ZOOM, h.CastleZoomEvent.ZOOM_IN));
          break;
        case this.panelDisp.btn_zoomOut:
          this.controller.dispatchEvent(new h.CastleZoomEvent(h.CastleZoomEvent.ZOOM, h.CastleZoomEvent.ZOOM_OUT));
          break;
        case this.panelDisp.btn_options:
          var i = this.panelDisp.sublayer_options;
          var n = i.visible;
          this.showSubLayer(i);
          if (c.currentBrowserInfo.isTouchEvent(t)) {
            if (n) {
              this.hideSubLayer(i, true);
            } else if (this.panelDisp.cacheCanvas) {
              y.CastleMovieClipHelper.uncacheSafe(this.panelDisp);
            }
          }
          break;
        case this.panelDisp.sublayer_help.btn_commHub:
          if (c.currentBrowserInfo.isTouchEvent(t)) {
            this.hideSubLayer(this.panelDisp.sublayer_options, true);
          }
          var s = new l.URLRequest("https://communityhub.goodgamestudios.com/");
          o.BrowserUtil.executeNavigateToURL(s, "_blank");
          break;
        case this.panelDisp.sublayer_options.btn_fullscreen:
          if (c.currentBrowserInfo.isTouchEvent(t)) {
            this.hideSubLayer(this.panelDisp.sublayer_options, true);
          }
          this.layoutManager.toggleFullscreen();
          break;
        case this.panelDisp.sublayer_options.btn_settings:
          v.CastleDialogHandler.getInstance().registerDefaultDialogs(m.OptionsDialog, new f.OptionsDialogProperties());
          if (c.currentBrowserInfo.isTouchEvent(t)) {
            this.hideSubLayer(this.panelDisp.sublayer_options, true);
          }
          break;
        case this.panelDisp.sublayer_options.btn_music:
          this.onToggleMusic();
          break;
        case this.panelDisp.sublayer_help.btn_faq:
          if (c.currentBrowserInfo.isTouchEvent(t)) {
            this.hideSubLayer(this.panelDisp.sublayer_options, true);
          }
          E.CastleForumHelper.goToWiki();
          this.layoutManager.revertFullscreen();
          break;
        case this.panelDisp.sublayer_help.btn_ingameHelp:
          r.CommandController.instance.executeCommand(T.IngameClientCommands.OPEN_INGAMEHELP_COMMAND);
          break;
        case this.panelDisp.sublayer_help.btn_helpshift:
          g.HelpshiftHelper.getInstance().showChatWidget();
          break;
        case this.panelDisp.betaTestBanner:
          v.CastleDialogHandler.getInstance().registerDefaultDialogs(S.CastleWelcomeBetaTestDialog, new _.CastleWelcomeBetaTestDialogProperties());
          break;
        case this.panelDisp.btn_discord:
          r.CommandController.instance.executeCommand(C.CastleBasicController.OPEN_DISCORD);
      }
    }
  };
  CastleOptionPanel.prototype.onToggleMusic = function () {
    a.BasicController.getInstance().soundController.toggleMuteMusic();
    a.BasicController.getInstance().saveSoundSettings();
    this.setSoundButtons();
  };
  CastleOptionPanel.prototype.setSoundButtons = function () {
    this.panelDisp.sublayer_options.btn_music.selectButton = a.BasicController.getInstance().soundController.isMusicMuted;
  };
  CastleOptionPanel.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      this.disp.y = 0;
      this.disp.x = this.disp.stage.stageWidth;
    }
  };
  Object.defineProperty(CastleOptionPanel.prototype, "panelDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleOptionPanel.NAME = "CastleOptionPanel";
  return CastleOptionPanel;
}(b.CastleSublayerPanel);
exports.CastleOptionPanel = I;
var T = require("./29.js");
var v = require("./9.js");
var S = require("./922.js");