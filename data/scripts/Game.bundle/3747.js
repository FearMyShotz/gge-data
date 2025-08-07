Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function SamuraiDaimyoInfoTopicEnum(t, i = a.SamuraiDaimyoEventDialogInfo.PAGE_TEXT) {
    return e.call(this, t, i) || this;
  }
  n.__extends(SamuraiDaimyoInfoTopicEnum, e);
  SamuraiDaimyoInfoTopicEnum.__initialize_static_members = function () {
    SamuraiDaimyoInfoTopicEnum.EVENT_SUMMARY = new SamuraiDaimyoInfoTopicEnum("eventSummary");
    SamuraiDaimyoInfoTopicEnum.DAIMYO_CASTLE = new SamuraiDaimyoInfoTopicEnum("daimyoCastle");
    SamuraiDaimyoInfoTopicEnum.TOWNSHIP = new SamuraiDaimyoInfoTopicEnum("township");
    SamuraiDaimyoInfoTopicEnum.SHOGUN_POINTS = new SamuraiDaimyoInfoTopicEnum("shogunPoints");
    SamuraiDaimyoInfoTopicEnum.SAMURAI_MEDALS = new SamuraiDaimyoInfoTopicEnum("samuraiMedals");
    SamuraiDaimyoInfoTopicEnum.ALLIANCE_CONTRACTS = new SamuraiDaimyoInfoTopicEnum("allianceContracts");
    SamuraiDaimyoInfoTopicEnum.WAR_EFFORT_POINTS = new SamuraiDaimyoInfoTopicEnum("warEffortPoints");
  };
  return SamuraiDaimyoInfoTopicEnum;
}(require("./959.js").InfoCatalogTopicEnum);
exports.SamuraiDaimyoInfoTopicEnum = o;
var a = require("./1776.js");
o.__initialize_static_members();