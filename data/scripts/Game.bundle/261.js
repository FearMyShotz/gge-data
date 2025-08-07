Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleQuestDataEvent(t, i = null, n = false, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).quest = i;
    return a;
  }
  n.__extends(CastleQuestDataEvent, e);
  CastleQuestDataEvent.__initialize_static_members = function () {
    CastleQuestDataEvent.QUEST_START = "QUEST_START";
    CastleQuestDataEvent.QUEST_PROGRESS = "QUEST_PROGRESS";
    CastleQuestDataEvent.QUEST_FINISHED = "QUEST_FINISHED";
    CastleQuestDataEvent.GET_QUESTLIST = "GET_QUESTLIST";
    CastleQuestDataEvent.DAILYQUEST_REFRESHED = "DAILYQUEST_REFRESHED";
  };
  return CastleQuestDataEvent;
}(createjs.Event);
exports.CastleQuestDataEvent = o;
o.__initialize_static_members();