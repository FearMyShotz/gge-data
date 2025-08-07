Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./3.js");
var s = function (e) {
  function MessageAttackCancelledVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(MessageAttackCancelledVO, e);
  MessageAttackCancelledVO.prototype.parseSubject = function () {
    switch (this.subtypeAttackCancelled) {
      case o.MessageConst.SUBTYPE_ATTACK_ABORTED:
        return a.Localize.text("dialog_messageHeader_noFight");
      case o.MessageConst.SUBTYPE_ATTACK_AUTO_RETREAT:
        return a.Localize.text("dialog_message_retreatTroops_attacker_header");
      case o.MessageConst.SUBTYPE_ATTACK_AUTO_RETREAT_ENEMY:
        return a.Localize.text("dialog_message_retreatTroops_defender_header");
      default:
        return a.Localize.text("dialog_messageHeader_noFight");
    }
  };
  MessageAttackCancelledVO.prototype.parseSender = function () {
    if (this.areaType == o.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER) {
      return a.Localize.text("allianceTower_placeholder_Maya", [this.areaName]);
    } else {
      return e.prototype.parseSender.call(this);
    }
  };
  return MessageAttackCancelledVO;
}(require("./1953.js").MessageCancelledVO);
exports.MessageAttackCancelledVO = s;