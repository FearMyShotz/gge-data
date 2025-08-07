Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./83.js");
var s = require("./99.js");
var r = require("./5549.js");
var l = require("./5550.js");
var c = require("./5551.js");
var u = function (e) {
  function MessageDowntimeStatusVO() {
    var t = this;
    t.downtimeStatus = 0;
    t.messageScope = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(MessageDowntimeStatusVO, e);
  MessageDowntimeStatusVO.prototype.parseMessageHeader = function (e) {
    this.downtimeStatus = parseInt(e.split("+")[0]);
    this.messageScope = parseInt(e.split("+")[1]);
  };
  MessageDowntimeStatusVO.prototype.parseSubject = function () {
    switch (this.downtimeStatus) {
      case MessageDowntimeStatusVO.STATUS_FREEZE:
        if (this.messageScope == MessageDowntimeStatusVO.SCOPE_FOOD) {
          return o.Localize.text("message_productionDownTime_freeze_food_header");
        } else {
          return o.Localize.text("message_productionDownTime_freeze_foodmead_header");
        }
      case MessageDowntimeStatusVO.STATUS_UNFREEZE:
        if (this.messageScope == MessageDowntimeStatusVO.SCOPE_FOOD) {
          return o.Localize.text("message_productionDownTime_unfreeze_food_header");
        } else {
          return o.Localize.text("message_productionDownTime_unfreeze_foodmead_header");
        }
    }
    return "";
  };
  MessageDowntimeStatusVO.prototype.parseSender = function () {
    return o.Localize.text("system");
  };
  Object.defineProperty(MessageDowntimeStatusVO.prototype, "dialogInfo", {
    get: function () {
      switch (this.downtimeStatus) {
        case MessageDowntimeStatusVO.STATUS_FREEZE:
          return new a.DialogInfoVO(r.CastleMessageFoodFreezeStartDialog, new l.CastleMessageFoodFreezeProperties(this.messageScope));
        case MessageDowntimeStatusVO.STATUS_UNFREEZE:
          return new a.DialogInfoVO(c.CastleMessageFoodFreezeEndDialog, new l.CastleMessageFoodFreezeProperties(this.messageScope));
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AMessageVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageDowntimeStatusVO.prototype, "additionalIconName", {
    get: function () {
      return "CastleMessageIconsFoodFreeze";
    },
    enumerable: true,
    configurable: true
  });
  MessageDowntimeStatusVO.STATUS_FREEZE = 1;
  MessageDowntimeStatusVO.STATUS_UNFREEZE = 0;
  MessageDowntimeStatusVO.SCOPE_FOOD_MEAD = 0;
  MessageDowntimeStatusVO.SCOPE_FOOD = 1;
  return MessageDowntimeStatusVO;
}(s.AMessageVO);
exports.MessageDowntimeStatusVO = u;