Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./57.js");
var s = require("./4.js");
var r = createjs.TimerEvent;
var l = function () {
  function HelpshiftHelper() {
    this.newMessage = new a.Signal();
    this.newMessagesCount = 0;
  }
  HelpshiftHelper.getInstance = function () {
    if (!HelpshiftHelper._instance) {
      HelpshiftHelper._instance = new HelpshiftHelper();
      HelpshiftHelper._instance.initHelpshift();
    }
    return HelpshiftHelper._instance;
  };
  HelpshiftHelper.prototype.initHelpshift = function () {
    window.Helpshift("setCustomIssueFields", {
      game: {
        type: "singleline",
        value: "EP - Empire"
      }
    });
    this.addListener();
  };
  HelpshiftHelper.prototype.showChatWidget = function () {
    window.Helpshift("show");
    window.Helpshift("open");
    var e = document.querySelector("#hs-web-sdk-iframe-launcher");
    if (e) {
      e.style.pointerEvents = "auto";
      e.style.position = "fixed";
      e.style.top = "0";
      e.style.left = "0";
    }
  };
  HelpshiftHelper.prototype.hideChatWidget = function (e = true) {
    if (e) {
      var t = new o.Timer(500, 1);
      t.addEventListener(r.TIMER, this.bindFunction(this.hideChatWidgetHandler));
      t.start();
    } else {
      this.hideChatWidgetHandler();
    }
  };
  HelpshiftHelper.prototype.hideChatWidgetHandler = function () {
    window.Helpshift("hide");
    var e = document.querySelector("#hs-web-sdk-iframe-launcher");
    if (e) {
      e.style.pointerEvents = "none";
      e.style.position = "absolute";
      e.style.top = "-9999px";
      e.style.left = "-9999px";
    }
  };
  HelpshiftHelper.prototype.updateUserData = function () {
    window.helpshiftConfig.userId = "12/network/" + n.EnvGlobalsHandler.globals.networkId + "/instance/" + n.BasicModel.instanceProxy.selectedInstanceVO.instanceId + "/player/" + s.CastleModel.userData.playerID;
    window.helpshiftConfig.userName = s.CastleModel.userData.userName;
    window.helpshiftConfig.userEmail = s.CastleModel.userData.email;
    window.helpshiftConfig.language = n.EnvGlobalsHandler.globals.currentCountryLanguageCode;
    window.Helpshift("updateHelpshiftConfig");
  };
  HelpshiftHelper.prototype.addListener = function () {
    window.Helpshift("addEventListener", "newUnreadMessages", this.bindFunction(this.newUnreadMessagesEventHandler));
    window.Helpshift("addEventListener", "widgetToggle", this.bindFunction(this.widgetToggleEventHandler));
  };
  HelpshiftHelper.prototype.widgetToggleEventHandler = function (e) {
    if (!e.visible) {
      this.hideChatWidget();
    }
  };
  HelpshiftHelper.prototype.newUnreadMessagesEventHandler = function (e = null) {
    console.log("newUnreadMessagesEventHandler");
    var t = e ? e.unreadCount : 0;
    this.newMessagesCount = t;
    this.newMessage.dispatch(t);
  };
  return HelpshiftHelper;
}();
exports.HelpshiftHelper = l;