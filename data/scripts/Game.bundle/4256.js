Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
require("./5.js");
require("./6.js");
var a = require("./585.js");
var s = require("./54.js");
var r = require("./4.js");
var l = require("./4257.js");
var c = function (e) {
  function CastleChatData() {
    var t = this;
    t._allianceMessages = [];
    t._isBigAllianceChatOpen = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(CastleChatData, e);
  CastleChatData.prototype.reset = function () {
    e.prototype.reset.call(this);
    this._allianceMessages = [];
    this._isBigAllianceChatOpen = false;
  };
  CastleChatData.prototype.parseSingleMessage = function (e) {
    var t = this.getParsedMessage(e);
    this._allianceMessages.push(t);
    if (t.playerID >= 0) {
      var i = r.CastleModel.allianceData.getAllianceInfoVOByID(r.CastleModel.userData.allianceID);
      if (i) {
        i.getAdditionalMemberInfos(t.playerID);
      }
    }
    this.dispatchEvent(new a.CastleChatEvent(a.CastleChatEvent.NEW_CHAT_MESSAGE_ARRIVED));
  };
  CastleChatData.prototype.parseHistory = function (e) {
    if (e) {
      for (var t = 0, i = e.CM; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          this._allianceMessages.push(this.getParsedMessage(n));
        }
      }
      this.dispatchEvent(new a.CastleChatEvent(a.CastleChatEvent.NEW_CHAT_MESSAGE_ARRIVED));
    }
  };
  CastleChatData.prototype.resetHistory = function () {
    this._allianceMessages = [];
    this.dispatchEvent(new a.CastleChatEvent(a.CastleChatEvent.NEW_CHAT_MESSAGE_ARRIVED));
  };
  CastleChatData.prototype.getParsedMessage = function (e) {
    var t = new l.ChatMessageVO();
    t.parseObj(e);
    return t;
  };
  CastleChatData.prototype.getLastAllianceMessage = function () {
    if (this._allianceMessages.length <= 0) {
      return null;
    } else {
      return this._allianceMessages[this._allianceMessages.length - 1];
    }
  };
  Object.defineProperty(CastleChatData.prototype, "allianceMessages", {
    get: function () {
      return this._allianceMessages;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleChatData.prototype, "isBigAllianceChatOpen", {
    get: function () {
      return this._isBigAllianceChatOpen;
    },
    set: function (e) {
      this.dispatchEvent(new a.CastleChatEvent(a.CastleChatEvent.OPEN_CHAT));
      this._isBigAllianceChatOpen = e;
    },
    enumerable: true,
    configurable: true
  });
  return CastleChatData;
}(s.CastleBasicData);
exports.CastleChatData = c;
o.classImplementsInterfaces(c, "IUpdatable", "ICastleBasicData");