Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./5438.js");
var r = require("./5439.js");
var l = require("./83.js");
var c = require("./99.js");
var u = function (e) {
  function MessageEilandRewardVO() {
    var t = this;
    t.subtype = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(MessageEilandRewardVO, e);
  MessageEilandRewardVO.prototype.parseMessageHeader = function (e) {
    this.subtype = parseInt(e);
  };
  MessageEilandRewardVO.prototype.parseSubject = function () {
    if (this.subtype == o.MessageConst.SUBTYPE_REWARD_KING) {
      return a.Localize.text("message_header_eiland_reward_stormlord");
    } else if (this.subtype == o.MessageConst.SUBTYPE_REWARD_WINNER_ALLI) {
      return a.Localize.text("message_header_eiland_reward_alliance", [h.CastleEilandRewardsVO.TOPX_MIN_RANK]);
    } else if (this.subtype == o.MessageConst.SUBTYPE_REWARD_TOP_X) {
      return a.Localize.text("message_header_eiland_reward_topx", [h.CastleEilandRewardsVO.TOPX_MIN_RANK]);
    } else if (this.subtype == o.MessageConst.SUBTYPE_REWARD_POINTS) {
      return a.Localize.text("message_header_eiland_reward");
    } else {
      return "";
    }
  };
  MessageEilandRewardVO.prototype.parseSender = function () {
    return a.Localize.text("system");
  };
  Object.defineProperty(MessageEilandRewardVO.prototype, "dialogInfo", {
    get: function () {
      switch (this.subtype) {
        case o.MessageConst.SUBTYPE_REWARD_KING:
          return new l.DialogInfoVO(p.CastleEilandTop1RewardDialog, new s.CastleEilandTop1RewardDialogProperties(true));
        case o.MessageConst.SUBTYPE_REWARD_WINNER_ALLI:
          return new l.DialogInfoVO(p.CastleEilandTop1RewardDialog, new s.CastleEilandTop1RewardDialogProperties(false));
        case o.MessageConst.SUBTYPE_REWARD_TOP_X:
        case o.MessageConst.SUBTYPE_REWARD_POINTS:
          return new l.DialogInfoVO(d.CastleEilandRewardDialog, new r.CastleEilandRewardDialogProperties(this.messageID));
      }
      return null;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.AMessageVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageEilandRewardVO.prototype, "additionalIconName", {
    get: function () {
      return "CastleMessageIconsEiland";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.AMessageVO.prototype, "additionalIconName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return MessageEilandRewardVO;
}(c.AMessageVO);
exports.MessageEilandRewardVO = u;
var d = require("./5440.js");
var p = require("./5441.js");
var h = require("./667.js");