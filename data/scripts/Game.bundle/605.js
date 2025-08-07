Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleAllianceForumEvent(t, i = null, n = false, o = false) {
    var a = this;
    a.params = [];
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).params = i;
    return a;
  }
  n.__extends(CastleAllianceForumEvent, e);
  CastleAllianceForumEvent.__initialize_static_members = function () {
    CastleAllianceForumEvent.UPDATE_TOPIC_OVERVIEW = "updateTopicOverview";
    CastleAllianceForumEvent.UPDATE_TOPIC_DETAIL = "updateTopicDetail";
    CastleAllianceForumEvent.ON_POST_CREATION_ACCEPTED = "acceptedPostCreation";
    CastleAllianceForumEvent.ON_UNREAD_TOPICS_COUNT_UPDATED = "onUnreadTopicCountUpdated";
  };
  return CastleAllianceForumEvent;
}(createjs.Event);
exports.CastleAllianceForumEvent = o;
o.__initialize_static_members();