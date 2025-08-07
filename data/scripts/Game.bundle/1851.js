Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./58.js");
var l = require("./39.js");
var c = require("./140.js");
var u = require("./4.js");
var d = require("./1850.js");
var p = require("./89.js");
var h = function (e) {
  function MessagePanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(MessagePanelButton, e);
  MessagePanelButton.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    g.CastleComponent.controller.addEventListener(c.CastleMessageDataEvent.UPDATE_MESSAGELIST, this.bindFunction(this.onMessagesUpdated));
    this.listenOnXPChanged();
  };
  MessagePanelButton.prototype.removeEventListener = function () {
    g.CastleComponent.controller.removeEventListener(c.CastleMessageDataEvent.UPDATE_MESSAGELIST, this.bindFunction(this.onMessagesUpdated));
    e.prototype.removeEventListener.call(this);
  };
  MessagePanelButton.prototype.updateOnVisible = function () {
    e.prototype.updateOnVisible.call(this);
    var t = s.int(u.CastleModel.messageData.countUnreadUnarchivedMessages([]));
    this.setAmount(t > 0, t);
  };
  Object.defineProperty(MessagePanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_Message_Relicus;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MessagePanelButton.prototype.isButtonEnabled = function () {
    return u.CastleModel.userData.userLevel >= r.ClientConstLevelRestrictions.MIN_LEVEL_MESSAGES;
  };
  MessagePanelButton.prototype.getButtonTooltip = function () {
    if (this.isButtonEnabled()) {
      return "panel_multiinfo_messages";
    } else {
      return a.Localize.text(l.ClientConstTextIds.LEVEL_NEEDED, [r.ClientConstLevelRestrictions.MIN_LEVEL_MESSAGES]);
    }
  };
  MessagePanelButton.prototype.onButtonClicked = function () {
    g.CastleComponent.dialogHandler.registerDefaultDialogs(C.CastleMessageInboxDialog, new d.CastleInboxDialogProperties());
  };
  MessagePanelButton.prototype.onMessagesUpdated = function (e) {
    this.update();
    _.CastleMovieClipHelper.updateParentCache(this.disp);
  };
  return MessagePanelButton;
}(p.APanelButton);
exports.MessagePanelButton = h;
var g = require("./14.js");
var C = require("./1128.js");
var _ = require("./41.js");
o.classImplementsInterfaces(h, "ICollectableRendererList");