Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1161.js");
var s = function (e) {
  function CastleMessageInfoDialog() {
    return e.call(this) || this;
  }
  n.__extends(CastleMessageInfoDialog, e);
  Object.defineProperty(CastleMessageInfoDialog.prototype, "infoDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMessageInfoDialog.prototype, "messageHelpId", {
    get: function () {
      return "dialog_info_message_help_" + this.infoDialogProperties.infoId;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleMessageTipDialog.prototype, "messageHelpId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMessageInfoDialog.prototype, "messageDescriptionId", {
    get: function () {
      return "dialog_info_message_description_" + this.infoDialogProperties.infoId;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleMessageTipDialog.prototype, "messageDescriptionId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMessageInfoDialog.prototype, "messageTitleId", {
    get: function () {
      return "dialog_info_message_title_" + this.infoDialogProperties.infoId;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleMessageTipDialog.prototype, "messageTitleId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleMessageInfoDialog;
}(a.CastleMessageTipDialog);
exports.CastleMessageInfoDialog = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");