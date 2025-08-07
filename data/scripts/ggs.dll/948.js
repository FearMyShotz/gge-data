Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function FacebookInteractionTrackingEvent(t) {
    return e.call(this, t) || this;
  }
  i.__extends(FacebookInteractionTrackingEvent, e);
  FacebookInteractionTrackingEvent.prototype.getVars = function () {
    var e = {
      playerId: this._playerId,
      sender_player_id: this._senderPlayerId,
      sender_instance_id: this._senderInstanceId,
      sender_network_id: this._senderNetworkId,
      sender_game_id: this._senderGameId,
      sender_zone_id: this._senderZoneId,
      sender_level: this._senderLevel,
      state: this._stateId,
      sender_facebook_id: this._senderFacebookId,
      receiver_facebook_id: this._receiverFacebookId
    };
    if (this._receiverPlayerId !== 0) {
      e.receiver_player_id = this._receiverPlayerId;
    }
    if (this._receiverInstanceId !== 0) {
      e.receiver_instance_id = this._receiverInstanceId;
    }
    if (this._receiverNetworkId !== 0) {
      e.receiver_network_id = this._receiverNetworkId;
    }
    if (this._receiverGameId !== 0) {
      e.receiver_game_id = this._receiverGameId;
    }
    if (this._receiverZoneId !== 0) {
      e.receiver_zone_id = this._receiverZoneId;
    }
    if (this._receiverLevel !== 0) {
      e.receiver_level = this._receiverLevel;
    }
    if (this._openGraphObjectId) {
      e.open_graph_object_id = this._openGraphObjectId;
    }
    if (this._openGraphActionType) {
      e.open_graph_action_type = this._openGraphActionType;
    }
    return e;
  };
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "senderPlayerId", {
    set: function (e) {
      this._senderPlayerId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "senderInstanceId", {
    set: function (e) {
      this._senderInstanceId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "senderNetworkId", {
    set: function (e) {
      this._senderNetworkId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "senderGameId", {
    set: function (e) {
      this._senderGameId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "senderZoneId", {
    set: function (e) {
      this._senderZoneId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "senderFacebookId", {
    set: function (e) {
      this._senderFacebookId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "senderLevel", {
    set: function (e) {
      this._senderLevel = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "receiverPlayerId", {
    set: function (e) {
      this._receiverPlayerId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "receiverInstanceId", {
    set: function (e) {
      this._receiverInstanceId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "receiverNetworkId", {
    set: function (e) {
      this._receiverNetworkId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "receiverGameId", {
    set: function (e) {
      this._receiverGameId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "receiverZoneId", {
    set: function (e) {
      this._receiverZoneId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "receiverFacebookId", {
    set: function (e) {
      this._receiverFacebookId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "receiverLevel", {
    set: function (e) {
      this._receiverLevel = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "stateId", {
    set: function (e) {
      this._stateId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "openGraphObjectId", {
    set: function (e) {
      this._openGraphObjectId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "openGraphActionType", {
    set: function (e) {
      this._openGraphActionType = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookInteractionTrackingEvent.prototype, "playerId", {
    set: function (e) {
      this._playerId = e;
    },
    enumerable: true,
    configurable: true
  });
  return FacebookInteractionTrackingEvent;
}(require("./13.js").BasicTrackingEvent);
exports.FacebookInteractionTrackingEvent = a;