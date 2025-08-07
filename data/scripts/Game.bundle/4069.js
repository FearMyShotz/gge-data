Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./4.js");
var r = function (e) {
  function CastleFlaggedInboxMessageList(t, i = null, n = 0) {
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleFlaggedInboxMessageList, e);
  CastleFlaggedInboxMessageList.prototype.updateTabMessageCounter = function (e, t, i = -1, n = false) {
    e.visible = false;
  };
  CastleFlaggedInboxMessageList.prototype.getMessageCount = function () {
    return a.int(s.CastleModel.messageData.countArchivedMessages());
  };
  CastleFlaggedInboxMessageList.prototype.getMessages = function (e, t) {
    return s.CastleModel.messageData.getArchivedMessages(e);
  };
  Object.defineProperty(CastleFlaggedInboxMessageList.prototype, "deleteButtonToolTipText", {
    get: function () {
      return "dialog_inbox_deleteMessageArchived_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  return CastleFlaggedInboxMessageList;
}(require("./843.js").ACastleBaseInboxMessageList);
exports.CastleFlaggedInboxMessageList = r;
o.classImplementsInterfaces(r, "ICollectableRendererList", "ISublayer");