Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function LinkReceivedEvent(t) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this, LinkReceivedEvent.LINK_RECEIVED, false, false) || this).url = t;
    return i;
  }
  n.__extends(LinkReceivedEvent, e);
  LinkReceivedEvent.__initialize_static_members = function () {
    LinkReceivedEvent.LINK_RECEIVED = "link-received";
  };
  return LinkReceivedEvent;
}(createjs.Event);
exports.LinkReceivedEvent = o;
o.__initialize_static_members();