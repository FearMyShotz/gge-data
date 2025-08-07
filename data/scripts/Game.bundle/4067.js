Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./674.js");
var r = require("./4.js");
var l = function (e) {
  function CastleAllMessagesWithoutArchiveList(t, i = null, n = 0) {
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleAllMessagesWithoutArchiveList, e);
  CastleAllMessagesWithoutArchiveList.prototype.updateTabMessageCounter = function (t, i, n = -1, o = false) {
    if (n == -1) {
      n = this.getUnreadMessageCount();
    }
    e.prototype.updateTabMessageCounter.call(this, t, i, n, o);
  };
  CastleAllMessagesWithoutArchiveList.prototype.getMessages = function (e, t) {
    return r.CastleModel.messageData.getMessagesByPageAndFilter(e, s.ClientConstMailFilter.TYPELIST_INBOX);
  };
  CastleAllMessagesWithoutArchiveList.prototype.getUnreadMessageCount = function () {
    return a.int(r.CastleModel.messageData.countUnreadUnarchivedMessages(s.ClientConstMailFilter.TYPELIST_INBOX));
  };
  CastleAllMessagesWithoutArchiveList.prototype.getMessageCount = function () {
    return a.int(r.CastleModel.messageData.countAllUnarchivedMessages(s.ClientConstMailFilter.TYPELIST_INBOX));
  };
  Object.defineProperty(CastleAllMessagesWithoutArchiveList.prototype, "deleteButtonVisible", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllMessagesWithoutArchiveList.prototype, "deleteButtonOverviewVisible", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllMessagesWithoutArchiveList.prototype, "deleteButtonToolTipText", {
    get: function () {
      return "dialog_inbox_deleteMessageReceived_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllMessagesWithoutArchiveList;
}(require("./843.js").ACastleBaseInboxMessageList);
exports.CastleAllMessagesWithoutArchiveList = l;
o.classImplementsInterfaces(l, "ICollectableRendererList", "ISublayer");