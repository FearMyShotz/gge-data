Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./13.js");
var s = require("./34.js");
var r = function (e) {
  function InvitationTrackingEvent(t) {
    return e.call(this, t) || this;
  }
  i.__extends(InvitationTrackingEvent, e);
  InvitationTrackingEvent.prototype.getVars = function () {
    var e = {
      eventId: s.Invitation.ID,
      action: this._action,
      sender_game_id: this._senderGameId,
      sender_instance_id: this._senderInstanceId,
      sender_network_id: this._senderNetworkId,
      sender_player_id: this._senderPlayerId
    };
    if (this._senderLevel == 0) {
      e.sender_level = this._senderLevel;
    }
    if (this._receiverGameId != 0) {
      e.receiver_game_id = this._receiverGameId;
    }
    if (this._receiverNetworkId != 0) {
      e.receiver_network_id = this._receiverNetworkId;
    }
    if (this._receiverInstanceId != 0) {
      e.receiver_instance_id = this._receiverInstanceId;
    }
    if (this._receiverPlayerId != 0) {
      e.receiver_player_id = this._receiverPlayerId;
    }
    if (this._referMethod) {
      e.refer_method = this._referMethod;
    }
    if (this._trigger) {
      e.trigger = this._trigger;
    }
    if (this._senderExternalId) {
      e.external_inviter_id = this._senderExternalId;
    }
    if (this._receiverExternalId) {
      e.external_invited_id = this._receiverExternalId;
    }
    return e;
  };
  Object.defineProperty(InvitationTrackingEvent.prototype, "senderGameId", {
    set: function (e) {
      this._senderGameId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InvitationTrackingEvent.prototype, "senderNetworkId", {
    set: function (e) {
      this._senderNetworkId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InvitationTrackingEvent.prototype, "senderInstanceId", {
    set: function (e) {
      this._senderInstanceId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InvitationTrackingEvent.prototype, "senderPlayerId", {
    set: function (e) {
      this._senderPlayerId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InvitationTrackingEvent.prototype, "receiverGameId", {
    set: function (e) {
      this._receiverGameId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InvitationTrackingEvent.prototype, "receiverNetworkId", {
    set: function (e) {
      this._receiverNetworkId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InvitationTrackingEvent.prototype, "receiverInstanceId", {
    set: function (e) {
      this._receiverInstanceId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InvitationTrackingEvent.prototype, "receiverPlayerId", {
    set: function (e) {
      this._receiverPlayerId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InvitationTrackingEvent.prototype, "senderExternalId", {
    set: function (e) {
      this._senderExternalId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InvitationTrackingEvent.prototype, "receiverExternalId", {
    set: function (e) {
      this._receiverExternalId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InvitationTrackingEvent.prototype, "senderLevel", {
    set: function (e) {
      this._senderLevel = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InvitationTrackingEvent.prototype, "action", {
    set: function (e) {
      this._action = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InvitationTrackingEvent.prototype, "referMethod", {
    set: function (e) {
      this._referMethod = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InvitationTrackingEvent.prototype, "trigger", {
    set: function (e) {
      this._trigger = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InvitationTrackingEvent.prototype, "playerId", {
    set: function (e) {
      this._playerId = e;
    },
    enumerable: true,
    configurable: true
  });
  return InvitationTrackingEvent;
}(a.BasicTrackingEvent);
exports.InvitationTrackingEvent = r;