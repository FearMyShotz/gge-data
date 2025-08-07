Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./1.js");
var s = require("./231.js");
var r = require("./32.js");
var l = require("./463.js");
var c = require("./4.js");
var u = require("./710.js");
var d = require("./136.js");
var p = require("./8.js");
var h = require("./131.js");
var g = createjs.Point;
var C = function (e) {
  function CastleChatPanel() {
    return e.call(this, new Library.CastleInterfaceElements.ChatPanel()) || this;
  }
  n.__extends(CastleChatPanel, e);
  CastleChatPanel.prototype.init = function () {
    e.prototype.init.call(this);
    p.ButtonHelper.initBasicButton(this.chatPanel, 1);
    this.chatPanel.mouseChildren = false;
    this.textFieldManager.registerTextField(this.chatPanel.txt_title, new o.LocalizedTextVO("allianceChat"));
    this._chatComponent = new m.CastleChatComponent(new u.CastleChatVO(this.chatPanel.txt_chat), this);
    this._chatComponent.maxShownMessages = 4;
  };
  CastleChatPanel.prototype.show = function () {
    if (c.CastleModel.userData.isInAlliance) {
      this._chatComponent.onShow();
      e.prototype.show.call(this);
      this.updateVisibility();
      this.allowCaching = true;
    }
  };
  CastleChatPanel.prototype.hide = function () {
    this._chatComponent.onHide();
    e.prototype.hide.call(this);
  };
  CastleChatPanel.prototype.addEventListenerOnInit = function () {
    this.controller.addEventListener(r.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onAllianceStatusChanged));
  };
  CastleChatPanel.prototype.removeEventListenerOnDestroy = function () {
    this.controller.removeEventListener(r.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onAllianceStatusChanged));
  };
  CastleChatPanel.prototype.addEventListenerOnShow = function () {
    c.CastleModel.settingsData.addEventListener(l.SettingsEvent.MINICHAT_VISIBILITY_CHANGED, this.bindFunction(this.onSettingChanged));
  };
  CastleChatPanel.prototype.removeEventListenerOnHide = function () {
    c.CastleModel.settingsData.removeEventListener(l.SettingsEvent.MINICHAT_VISIBILITY_CHANGED, this.bindFunction(this.onSettingChanged));
  };
  CastleChatPanel.prototype.updateVisibility = function () {
    this.chatPanel.visible = c.CastleModel.settingsData.miniChatVisible;
  };
  CastleChatPanel.prototype.updatePosition = function () {
    var e = 0;
    var t = 0;
    if (a.MobileHelper.isScreenTooSmall()) {
      e = 40;
      t = 85;
    }
    if (this.disp && this.disp.stage) {
      this.disp.y = this.disp.stage.stageHeight + this.dispOffset.y + e;
      this.disp.x = this.disp.stage.stageWidth + this.dispOffset.x + t;
    }
  };
  CastleChatPanel.prototype.onAllianceStatusChanged = function (e) {
    if (c.CastleModel.userData.isInAlliance) {
      this.show();
    } else {
      this.hide();
    }
  };
  CastleChatPanel.prototype.onSettingChanged = function (e) {
    this.updateVisibility();
  };
  CastleChatPanel.prototype.onClick = function (t) {
    if (p.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.chatPanel:
          _.CastleDialogHandler.getInstance().registerDefaultDialogs(f.CastleAllianceDialog, new d.CastleAllianceDialogProperties(s.ClientConstAlliance.CAT_COMMUNICATION));
      }
    }
  };
  Object.defineProperty(CastleChatPanel.prototype, "dispOffset", {
    get: function () {
      if (this.layoutManager.isInTreasureEvent) {
        return CastleChatPanel.SEASION_OFFSET;
      } else {
        return CastleChatPanel.NORMAL_OFFSET;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleChatPanel.prototype, "chatPanel", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleChatPanel.__initialize_static_members = function () {
    CastleChatPanel.NORMAL_OFFSET = new g(-329, -50);
    CastleChatPanel.SEASION_OFFSET = new g(-165, -50);
  };
  CastleChatPanel.NAME = "CastleChatPanel";
  return CastleChatPanel;
}(h.CastlePanel);
exports.CastleChatPanel = C;
var _ = require("./9.js");
var m = require("./712.js");
var f = require("./125.js");
C.__initialize_static_members();