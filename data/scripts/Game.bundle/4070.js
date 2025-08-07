Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./674.js");
var r = require("./4.js");
var l = function (e) {
  function CastleImportantMessagesList(t, i = null, n = 0) {
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleImportantMessagesList, e);
  CastleImportantMessagesList.prototype.updateTabMessageCounter = function (t, i, n = -1, o = false) {
    if (n == -1) {
      n = this.getUnreadMessageCount();
    }
    e.prototype.updateTabMessageCounter.call(this, t, i, n, o);
  };
  CastleImportantMessagesList.prototype.getMessages = function (e, t) {
    return r.CastleModel.messageData.getMessagesByPageAndFilter(e, s.ClientConstMailFilter.TYPELIST_PLAYER);
  };
  CastleImportantMessagesList.prototype.getUnreadMessageCount = function () {
    return a.int(r.CastleModel.messageData.countUnreadUnarchivedMessages(s.ClientConstMailFilter.TYPELIST_PLAYER));
  };
  CastleImportantMessagesList.prototype.getMessageCount = function () {
    return a.int(r.CastleModel.messageData.countAllUnarchivedMessages(s.ClientConstMailFilter.TYPELIST_PLAYER));
  };
  Object.defineProperty(CastleImportantMessagesList.prototype, "deleteButtonToolTipText", {
    get: function () {
      return "dialog_inbox_deleteMessageCategory_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  return CastleImportantMessagesList;
}(require("./843.js").ACastleBaseInboxMessageList);
exports.CastleImportantMessagesList = l;
o.classImplementsInterfaces(l, "ICollectableRendererList", "ISublayer");