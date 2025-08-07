Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./674.js");
var r = require("./4.js");
var l = function (e) {
  function CastleTypedInboxOffer(t, i = null, n = 0) {
    var o = e.call(this, t) || this;
    o._messageCountDisplay = i;
    o._maxMessages = n;
    return o;
  }
  n.__extends(CastleTypedInboxOffer, e);
  CastleTypedInboxOffer.prototype.updateTabMessageCounter = function (t, i, n = -1, o = false) {
    n = a.int(r.CastleModel.messageData.countUnreadUnforwardedMessages(s.ClientConstMailFilter.TYPELIST_SPECIAL_OFFER));
    e.prototype.updateTabMessageCounter.call(this, t, i, n, o);
  };
  CastleTypedInboxOffer.prototype.getMessages = function (e, t) {
    return r.CastleModel.messageData.getUnforwardedMessagesByPageAndFilter(e, s.ClientConstMailFilter.TYPELIST_SPECIAL_OFFER);
  };
  CastleTypedInboxOffer.prototype.getMessageCount = function () {
    return a.int(r.CastleModel.messageData.countUnforwardedMessages(s.ClientConstMailFilter.TYPELIST_SPECIAL_OFFER));
  };
  Object.defineProperty(CastleTypedInboxOffer.prototype, "deleteButtonVisible", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTypedInboxOffer.prototype, "deleteButtonOverviewVisible", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTypedInboxOffer.prototype, "deleteButtonToolTipText", {
    get: function () {
      return "dialog_inbox_deleteMessageCategory_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  return CastleTypedInboxOffer;
}(require("./1129.js").CastleTypedInboxMessageList);
exports.CastleTypedInboxOffer = l;
o.classImplementsInterfaces(l, "ICollectableRendererList", "ISublayer");