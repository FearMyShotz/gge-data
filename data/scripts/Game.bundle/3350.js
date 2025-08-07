Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./21.js");
var h = require("./13.js");
var g = require("./4.js");
var C = require("./27.js");
var _ = function (e) {
  function QuestListEventItem(t, i) {
    var n = e.call(this, new (s.getDefinitionByName("QuestListEventItemMC"))(), t, i) || this;
    n._isExpanded = true;
    n._contentMC.alpha = 1;
    n._contentMC.visible = true;
    n._headerMC.mc_arrow.gotoAndStop(2);
    return n;
  }
  n.__extends(QuestListEventItem, e);
  QuestListEventItem.prototype.addQuestItem = function (t, i = true) {
    if (!this.itxt_name) {
      this.eventVO = g.CastleModel.specialEventData.getActiveEventByEventId(t.questVO.eventID);
      this.eventVO ||= new m.FakeIslandKingdomEvent();
      var n = h.TextHelper.toUpperCaseLocaSafe(c.Localize.text(this.eventVO.eventBuildingNameId));
      this.itxt_name = f.CastleComponent.textFieldManager.registerTextField(this._headerMC.txt_name, new u.TextVO(n), new o.InternalGGSTextFieldConfigVO(true));
      this.itxt_name.autoFitToBounds = true;
      this._headerMC.icon_event.gotoAndStop(this.getEventIconFrame(this.eventVO.eventId));
    }
    e.prototype.addQuestItem.call(this, t, i);
  };
  QuestListEventItem.prototype.getEventIconFrame = function (e) {
    switch (e) {
      case r.EventConst.EVENTTYPE_SAMURAI_INVASION:
        return 1;
      case r.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE:
        return 2;
      case r.EventConst.EVENTTYPE_FACTION:
        return 3;
      case r.EventConst.EVENTTYPE_ISLAND_KINGDOM:
        return 4;
      case r.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
        return 5;
      case r.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
        return 6;
      case r.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE:
        return 7;
      case r.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE:
        return 8;
      case r.EventConst.EVENTTYPE_FACTION_INVASION:
        return 9;
      case r.EventConst.EVENTTYPE_CRUSADE_THORNKING:
        return 10;
      case r.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT:
        return 11;
      case r.EventConst.EVENTTYPE_TEMPSERVER:
        return 12;
    }
    return 1;
  };
  QuestListEventItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this.onTimer(null);
    g.CastleModel.timerData.addEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  QuestListEventItem.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    g.CastleModel.timerData.removeEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  QuestListEventItem.prototype.onTimer = function (e) {
    C.CastleTimeStringHelper.setEventTime(this._headerMC.mc_timer.txt_time, this.getRemainingTime(), null, new o.InternalGGSTextFieldConfigVO(true));
  };
  QuestListEventItem.prototype.getRemainingTime = function () {
    return d.int(this.eventVO ? this.eventVO.remainingEventTimeInSeconds : g.CastleModel.kingdomData.getKingdomVOByID(l.WorldIsland.KINGDOM_ID).resetTime);
  };
  return QuestListEventItem;
}(require("./1643.js").AQuestCollapsibleItem);
exports.QuestListEventItem = _;
var m = require("./3351.js");
var f = require("./14.js");
a.classImplementsInterfaces(_, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");