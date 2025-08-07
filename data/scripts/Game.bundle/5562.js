Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function MessageRestrictionVO() {
    this.currentPlayerAmount = 0;
  }
  Object.defineProperty(MessageRestrictionVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageRestrictionVO.prototype, "messageType", {
    get: function () {
      return this._messageType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageRestrictionVO.prototype, "dailyLimit", {
    get: function () {
      return this._dailyLimit;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageRestrictionVO.prototype, "minLevel", {
    get: function () {
      if (o.SpecialServerHelper.isOnSpecialServer) {
        return this._minLevelGlobalServer;
      } else {
        return this._minLevel;
      }
    },
    enumerable: true,
    configurable: true
  });
  MessageRestrictionVO.prototype.fillFromParamXML = function (e) {
    this._id = parseInt(e.messageRestrictionID || "");
    this._messageType = parseInt(e.messageType || "");
    this._dailyLimit = parseInt(e.dailyLimitPerPlayer || "");
    this._minLevel = parseInt(e.minLevel || "-1");
    this._minLevelGlobalServer = parseInt(e.minLevelGlobalServer || "1");
  };
  return MessageRestrictionVO;
}();
exports.MessageRestrictionVO = n;
var o = require("./44.js");