Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./676.js");
var r = require("./4.js");
var l = function (e) {
  function CastleTypedInboxBattleAndSpyMessagesList(t, i, n = null, o = 0) {
    var a = this;
    a._displayForwardedMessages = false;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t) || this)._displayForwardedMessages = i;
    a._messageCountDisplay = n;
    a._maxMessages = o;
    return a;
  }
  n.__extends(CastleTypedInboxBattleAndSpyMessagesList, e);
  CastleTypedInboxBattleAndSpyMessagesList.prototype.updateTabMessageCounter = function (t, i, n = -1, o = false) {
    n = this._displayForwardedMessages ? a.int(r.CastleModel.messageData.countUnreadForwardedMessages(s.ClientConstMailFilter.TYPELIST_BATTLE_AND_SPY)) : a.int(r.CastleModel.messageData.countUnreadUnforwardedMessages(s.ClientConstMailFilter.TYPELIST_BATTLE_AND_SPY));
    e.prototype.updateTabMessageCounter.call(this, t, i, n, o);
  };
  CastleTypedInboxBattleAndSpyMessagesList.prototype.getMessages = function (e, t) {
    if (this._displayForwardedMessages) {
      return r.CastleModel.messageData.getForwardedMessagesByPageAndFilter(e, this.FILTER[t]);
    } else {
      return r.CastleModel.messageData.getUnforwardedMessagesByPageAndFilter(e, this.FILTER[t]);
    }
  };
  CastleTypedInboxBattleAndSpyMessagesList.prototype.getMessageCount = function () {
    if (this._displayForwardedMessages) {
      return a.int(r.CastleModel.messageData.countForwardedMessages(s.ClientConstMailFilter.TYPELIST_BATTLE_AND_SPY));
    } else {
      return a.int(r.CastleModel.messageData.countUnforwardedMessages(s.ClientConstMailFilter.TYPELIST_BATTLE_AND_SPY));
    }
  };
  Object.defineProperty(CastleTypedInboxBattleAndSpyMessagesList.prototype, "deleteButtonVisible", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTypedInboxBattleAndSpyMessagesList.prototype, "deleteButtonOverviewVisible", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTypedInboxBattleAndSpyMessagesList.prototype, "deleteButtonToolTipText", {
    get: function () {
      return "dialog_inbox_deleteMessageCategory_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  return CastleTypedInboxBattleAndSpyMessagesList;
}(require("./1129.js").CastleTypedInboxMessageList);
exports.CastleTypedInboxBattleAndSpyMessagesList = l;
o.classImplementsInterfaces(l, "ICollectableRendererList", "ISublayer");