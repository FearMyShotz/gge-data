Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = function (e) {
  function CastleSocialData() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(CastleSocialData, e);
  CastleSocialData.prototype.postFeed = function (e, t = null) {
    this.externalInterface(e, t);
  };
  CastleSocialData.prototype.externalInterface = function (t, i = null) {
    e.prototype.externalInterface.call(this, t, i);
    if (s.ExternalInterface.available) {
      try {
        switch (t) {
          case CastleSocialData.EXTERNAL_SHARE_LEVELUP:
          case CastleSocialData.EXTERNAL_SHARE_QUEST_FINISHED:
            s.ExternalInterface.call(t, i[0]);
            break;
          default:
            if (i) {
              s.ExternalInterface.call(t);
            }
        }
      } catch (e) {
        a.error(" no External InterfaceCall possible ");
      }
    }
  };
  CastleSocialData.__initialize_static_members = function () {
    CastleSocialData.EXTERNAL_SHARE_LEVELUP = "postLevelUpFeed";
    CastleSocialData.EXTERNAL_SHARE_QUEST_FINISHED = "postQuestFeed";
  };
  return CastleSocialData;
}(o.BasicSocialData);
exports.CastleSocialData = r;
r.__initialize_static_members();