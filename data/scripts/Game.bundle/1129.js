Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./674.js");
var r = require("./4.js");
var l = function (e) {
  function CastleTypedInboxMessageList(t, i = null, n = 0) {
    var o = this;
    o.FILTER = [s.ClientConstMailFilter.TYPELIST_INBOX, s.ClientConstMailFilter.TYPELIST_OUTBOX, s.ClientConstMailFilter.TYPELIST_PLAYER, s.ClientConstMailFilter.TYPELIST_SYSTEM, s.ClientConstMailFilter.TYPELIST_SPY, s.ClientConstMailFilter.TYPELIST_BATTLE_AND_SPY, s.ClientConstMailFilter.TYPELIST_BATTLE_AND_SPY, s.ClientConstMailFilter.TYPELIST_SPECIAL_OFFER];
    CONSTRUCTOR_HACK;
    return o = e.call(this, t, i, n) || this;
  }
  n.__extends(CastleTypedInboxMessageList, e);
  CastleTypedInboxMessageList.prototype.updateTabMessageCounter = function (t, i, n = -1, o = false) {
    if (this._messageCountDisplay) {
      if (n == -1) {
        n = this.getMessageCount();
      }
      e.prototype.updateTabMessageCounter.call(this, t, i, n, o);
    }
  };
  CastleTypedInboxMessageList.prototype.getMessages = function (e, t) {
    return r.CastleModel.messageData.getMessagesByPageAndFilter(e, this.FILTER[t]);
  };
  CastleTypedInboxMessageList.prototype.getMessageCount = function () {
    return a.int(r.CastleModel.messageData.countUnforwardedMessages(this.FILTER[this._currentCategory]));
  };
  Object.defineProperty(CastleTypedInboxMessageList.prototype, "deleteButtonVisible", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTypedInboxMessageList.prototype, "deleteButtonOverviewVisible", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTypedInboxMessageList.prototype, "deleteButtonToolTipText", {
    get: function () {
      return "dialog_inbox_deleteMessageSent_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  return CastleTypedInboxMessageList;
}(require("./843.js").ACastleBaseInboxMessageList);
exports.CastleTypedInboxMessageList = l;
o.classImplementsInterfaces(l, "ICollectableRendererList", "ISublayer");