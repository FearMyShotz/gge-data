Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./5.js");
var s = require("./52.js");
var r = require("./4.js");
var o = require("./30.js");
var l = require("./35.js");
var u = require("./17.js");
var c = require("./15.js");
var _ = function (e) {
  function BasicInvitationTrackingCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicInvitationTrackingCommand, e);
  BasicInvitationTrackingCommand.prototype.execute = function (e = null) {
    if (e) {
      var t = u.TrackingCache.getInstance().getEvent(c.TrackingEventIds.INVITATION);
      var n = e;
      t.playerId = r.BasicModel.userData.playerID;
      if (n.inviterPlayerId == 0) {
        t.senderPlayerId = r.BasicModel.userData.playerID;
      } else {
        t.senderPlayerId = n.inviterPlayerId;
      }
      if (n.inviterInstanceId == 0) {
        t.senderInstanceId = r.BasicModel.instanceProxy.selectedInstanceVO.instanceId;
      } else {
        t.senderInstanceId = n.inviterInstanceId;
      }
      if (n.inviterNetworkId == 0) {
        t.senderNetworkId = a.EnvGlobalsHandler.globals.networkId;
      } else {
        t.senderNetworkId = n.inviterNetworkId;
      }
      if (n.inviterGameId == 0) {
        t.senderGameId = a.EnvGlobalsHandler.globals.gameId;
      } else {
        t.senderGameId = n.inviterGameId;
      }
      t.senderGameId = a.EnvGlobalsHandler.globals.gameId;
      t.senderExternalId = n.inviterExternalId;
      t.senderLevel = r.BasicModel.userData.userLevel;
      t.receiverPlayerId = n.inviteePlayerId;
      t.receiverInstanceId = n.inviteeInstanceId;
      t.receiverNetworkId = n.inviteeNetworkId;
      t.receiverGameId = n.inviteeGameId;
      t.receiverExternalId = n.inviteeExternalId;
      t.action = n.action;
      t.trigger = n.trigger;
      t.referMethod = n.referMethod;
      o.debug("Tracking event fired. Attributes: senderID=" + r.BasicModel.userData.playerID + ", receiverID=" + n.inviteePlayerId + ", action=" + n.action);
      u.TrackingCache.getInstance().sendEvent(c.TrackingEventIds.INVITATION);
    } else {
      l.warn("Object with the invitation information missing!");
    }
  };
  return BasicInvitationTrackingCommand;
}(s.BasicTrackingCommand);
exports.BasicInvitationTrackingCommand = _;