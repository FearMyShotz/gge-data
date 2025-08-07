Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./74.js");
var s = require("./115.js");
var r = require("./92.js");
var o = require("./5.js");
var l = require("./8.js");
var u = require("./4.js");
var c = require("./12.js");
var _ = require("./31.js");
var d = require("./3.js");
require("./2.js").getLogger("BasicContextMenuController");
var m = createjs.Event;
var h = require("./78.js");
var p = require("./11.js");
var g = function () {
  function BasicContextMenuController() {
    this._initialized = false;
  }
  Object.defineProperty(BasicContextMenuController, "instance", {
    get: function () {
      BasicContextMenuController._instance ||= new BasicContextMenuController();
      return BasicContextMenuController._instance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicContextMenuController.prototype, "ggsContextMenu", {
    get: function () {
      this._initialized;
      return this._ggsContextMenu;
    },
    enumerable: true,
    configurable: true
  });
  BasicContextMenuController.prototype.enableContextMenuItem = function (e) {
    if (this.contextMenuEnabled && this._ggsContextMenu) {
      for (var t = 0, n = this._ggsContextMenu.customItems; t < n.length; t++) {
        var i = n[t];
        if (i.caption === e && !i.enabled) {
          i.enabled = true;
        }
      }
    }
  };
  BasicContextMenuController.prototype.disableContextMenuItem = function (e) {
    if (this.contextMenuEnabled && this._ggsContextMenu) {
      for (var t = 0, n = this._ggsContextMenu.customItems; t < n.length; t++) {
        var i = n[t];
        if (i.caption === e && i.enabled) {
          i.enabled = false;
        }
      }
    }
  };
  BasicContextMenuController.prototype.refreshVersionInfo = function () {
    if (this._ggsContextMenu.customItems.length) {
      var e = this._ggsContextMenu.customItems;
      this._ggsContextMenu.customItems = e;
    }
  };
  BasicContextMenuController.prototype.onXmlVersionSelected = function (e) {};
  BasicContextMenuController.prototype.onGgsLinkSelected = function (e) {
    r.BrowserUtil.executeNavigateToURL(new d.URLRequest(p.BasicConstants.DOMAIN_PROTOCOL + "://www.goodgamestudios.com"), "_blank");
  };
  BasicContextMenuController.prototype.onBlogSelected = function (e) {
    r.BrowserUtil.executeNavigateToURL(new d.URLRequest(p.BasicConstants.DOMAIN_PROTOCOL + "://blog.goodgamestudios.com/"), "_blank");
  };
  BasicContextMenuController.prototype.onFacebookSelected = function (e) {
    r.BrowserUtil.executeNavigateToURL(new d.URLRequest(p.BasicConstants.DOMAIN_PROTOCOL + "://www.facebook.com/GoodgameStudios"), "_blank");
  };
  BasicContextMenuController.prototype.onForumSelected = function (e) {
    c.CommandController.instance.executeCommand(l.BasicController.COMMAND_OPEN_FORUM);
  };
  BasicContextMenuController.prototype.onSupportSelected = function (e) {
    var t = u.BasicModel.userData.userName;
    if (t === undefined) {
      t = "";
    }
    s.SupportUtil.navigateToSupport(u.BasicModel.instanceProxy.selectedInstanceVO.instanceId, this.env.versionText, t, u.BasicModel.userData.playerID, u.BasicModel.userData.userID, _.GGSCountryController.instance.currentCountry.ggsLanguageCode);
  };
  Object.defineProperty(BasicContextMenuController.prototype, "env", {
    get: function () {
      return o.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicContextMenuController.prototype, "contextMenuEnabled", {
    get: function () {
      return this.env.networkId === a.GoodgamePartners.NETWORK_GENERAL;
    },
    enumerable: true,
    configurable: true
  });
  BasicContextMenuController.FORUM_LABEL = "Forum";
  BasicContextMenuController.GGS_COPYRIGHT_LABEL = "(C) 2009-2016 Goodgame Studios";
  BasicContextMenuController.SUPPORT_LABEL = "Support";
  BasicContextMenuController.FACEBOOK_LABEL = "Facebook-Fansite";
  BasicContextMenuController.BLOG_LABEL = "Blog (our company blog)";
  i.__decorate([h.commentedOut(), i.__metadata("design:type", Function), i.__metadata("design:paramtypes", [String]), i.__metadata("design:returntype", undefined)], BasicContextMenuController.prototype, "enableContextMenuItem", null);
  i.__decorate([h.commentedOut(), i.__metadata("design:type", Function), i.__metadata("design:paramtypes", [String]), i.__metadata("design:returntype", undefined)], BasicContextMenuController.prototype, "disableContextMenuItem", null);
  i.__decorate([h.commentedOut(), i.__metadata("design:type", Function), i.__metadata("design:paramtypes", []), i.__metadata("design:returntype", undefined)], BasicContextMenuController.prototype, "refreshVersionInfo", null);
  i.__decorate([h.commentedOut(), i.__metadata("design:type", Function), i.__metadata("design:paramtypes", [m]), i.__metadata("design:returntype", undefined)], BasicContextMenuController.prototype, "onXmlVersionSelected", null);
  return BasicContextMenuController;
}();
exports.BasicContextMenuController = g;