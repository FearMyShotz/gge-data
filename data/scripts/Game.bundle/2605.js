Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function FriendListScrollItemComparer() {}
  FriendListScrollItemComparer.comparePlayername = function (e, t) {
    var i = e.playerName.toLowerCase();
    var n = t.playerName.toLowerCase();
    if (i < n) {
      return -1;
    } else if (i > n) {
      return 1;
    } else {
      return 0;
    }
  };
  FriendListScrollItemComparer.compareLevel = function (e, t) {
    if (e.level < t.level) {
      return -1;
    } else if (e.level > t.level) {
      return 1;
    } else {
      return o.int(FriendListScrollItemComparer.comparePlayername(e, t));
    }
  };
  FriendListScrollItemComparer.compareOnline = function (e, t) {
    if (e.isOnline && !t.isOnline) {
      return -1;
    } else if (!e.isOnline && t.isOnline) {
      return 1;
    } else {
      return o.int(FriendListScrollItemComparer.comparePlayername(e, t));
    }
  };
  FriendListScrollItemComparer.compareAlliance = function (e, t) {
    var i = e.getAllianceName();
    var n = t.getAllianceName();
    if (i < n) {
      return -1;
    } else if (i > n) {
      return 1;
    } else {
      return o.int(FriendListScrollItemComparer.comparePlayername(e, t));
    }
  };
  FriendListScrollItemComparer.compareDistance = function (e, t) {
    if (e.distance < t.distance) {
      return -1;
    } else if (e.distance > t.distance) {
      return 1;
    } else {
      return o.int(FriendListScrollItemComparer.comparePlayername(e, t));
    }
  };
  FriendListScrollItemComparer.compareMightpoints = function (e, t) {
    if (e.mightPoints < t.mightPoints) {
      return -1;
    } else if (e.mightPoints > t.mightPoints) {
      return 1;
    } else {
      return o.int(FriendListScrollItemComparer.comparePlayername(e, t));
    }
  };
  return FriendListScrollItemComparer;
}();
exports.FriendListScrollItemComparer = n;
var o = require("./6.js");