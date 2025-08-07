Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./5476.js");
var s = require("./4.js");
var r = require("./83.js");
var l = require("./99.js");
var c = function (e) {
  function MessageRebuyVO() {
    var t = this;
    t._boosterID = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(MessageRebuyVO, e);
  MessageRebuyVO.prototype.parseMessageHeader = function (e) {
    this._boosterID = parseInt(e);
  };
  MessageRebuyVO.prototype.parseSubject = function () {
    var e = s.CastleModel.boostData.getBoosterByID(this.boosterID);
    if (e != null) {
      return o.Localize.text("dialog_rebuy_" + e.nonLocalizedHeroName + "_mailHeader");
    } else {
      return "";
    }
  };
  MessageRebuyVO.prototype.parseSender = function () {
    return o.Localize.text("system");
  };
  Object.defineProperty(MessageRebuyVO.prototype, "dialogInfo", {
    get: function () {
      if (s.CastleModel.boostData.getBoosterByID(this.boosterID) != null) {
        return new r.DialogInfoVO(u.CastleRebuyBoosterDialog, new a.CastleRebuyBoosterDialogProperties(s.CastleModel.boostData.getBoosterByID(this.boosterID), this.messageID));
      } else {
        return null;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.AMessageVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageRebuyVO.prototype, "boosterID", {
    get: function () {
      return this._boosterID;
    },
    enumerable: true,
    configurable: true
  });
  return MessageRebuyVO;
}(l.AMessageVO);
exports.MessageRebuyVO = c;
var u = require("./5477.js");