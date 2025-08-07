Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5415.js");
var a = require("./112.js");
var s = require("./83.js");
var r = require("./99.js");
var l = function (e) {
  function MessageCancelledVO() {
    var t = this;
    t._subtypeAttackCancelled = 0;
    t._kingdomID = 0;
    t._ownerID = 0;
    t._posX = 0;
    t._posY = 0;
    t._areaType = -1;
    t._reason = -1;
    t._autoSkipType = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(MessageCancelledVO, e);
  MessageCancelledVO.prototype.parseMessageHeader = function (e) {
    var t = e.split("+");
    this._subtypeAttackCancelled = parseInt(t[0]);
    this._kingdomID = parseInt(t[1]);
    this._ownerID = parseInt(t[2]);
    this._areaName = t[3];
    this._posX = parseInt(t[4]);
    this._posY = parseInt(t[5]);
    if (t.length > 5) {
      this._areaType = parseInt(t[6]);
      this._reason = parseInt(t[7]);
      if (t.length > 7) {
        this._autoSkipType = parseInt(t[8]);
      }
    }
  };
  MessageCancelledVO.prototype.parseSender = function () {
    if (this.areaName && this.areaName != "") {
      return this.areaName;
    }
    var e = a.PlayerHelper.getNPCCastleName(this.kingdomID, this.ownerID, this.areaType);
    if ((!e || e == "") && !!this._posX && !!this._posY) {
      e = this._posX + ":" + this._posY;
    }
    return e;
  };
  Object.defineProperty(MessageCancelledVO.prototype, "dialogInfo", {
    get: function () {
      return new s.DialogInfoVO(c.CastleNoFightMessageDialog, new o.CastleNoFightMessageDialogProperties(this));
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AMessageVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageCancelledVO.prototype, "subtypeAttackCancelled", {
    get: function () {
      return this._subtypeAttackCancelled;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageCancelledVO.prototype, "kingdomID", {
    get: function () {
      return this._kingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageCancelledVO.prototype, "ownerID", {
    get: function () {
      return this._ownerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageCancelledVO.prototype, "areaName", {
    get: function () {
      return this._areaName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageCancelledVO.prototype, "posX", {
    get: function () {
      return this._posX;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageCancelledVO.prototype, "posY", {
    get: function () {
      return this._posY;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageCancelledVO.prototype, "areaType", {
    get: function () {
      return this._areaType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageCancelledVO.prototype, "reason", {
    get: function () {
      return this._reason;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageCancelledVO.prototype, "autoSkipType", {
    get: function () {
      return this._autoSkipType;
    },
    enumerable: true,
    configurable: true
  });
  return MessageCancelledVO;
}(r.AMessageVO);
exports.MessageCancelledVO = l;
var c = require("./5416.js");