Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1886.js");
var a = require("./72.js");
var s = require("./4270.js");
var r = require("./4271.js");
var l = require("./4272.js");
var c = require("./4273.js");
var u = function (e) {
  function CastleDonationEventData(t) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).parseXml(t);
    i._currentSpentPointsForTypes = new Map();
    return i;
  }
  n.__extends(CastleDonationEventData, e);
  CastleDonationEventData.prototype.parseXml = function (e) {
    this._settings = new Map();
    var t = e.donationSettings;
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        if ((m = n[i]) !== undefined) {
          var o = new c.DonationSettingVO();
          o.parseXmlNode(m);
          this._settings.set(o.donationSettingID, o);
        }
      }
    }
    this._types = new Map();
    if ((t = e.donationTypes) != null) {
      for (var a = 0, u = t; a < u.length; a++) {
        if ((m = u[a]) !== undefined) {
          var d = new r.DonationTypeVO();
          d.parseXmlNode(m);
          this._types.set(d.donationTypeID, d);
        }
      }
    }
    this._items = new Map();
    if ((t = e.donationItems) != null) {
      for (var p = 0, h = t; p < h.length; p++) {
        if ((m = h[p]) !== undefined) {
          var g = new s.DonationItemsVO();
          g.parseXmlNode(m);
          this._items.set(g.donationItemID, g);
        }
      }
    }
    this._rewards = new Map();
    if ((t = e.donationRewards) != null) {
      for (var C = 0, _ = t; C < _.length; C++) {
        var m;
        if ((m = _[C]) !== undefined) {
          var f = new l.DonationRewardVO();
          f.parseXmlNode(m);
          this._rewards.set(f.donationRewardID, f);
        }
      }
    }
  };
  CastleDonationEventData.prototype.getItemVOs_By_PointTypeSettingID = function (e) {
    var t = [];
    this._items.forEach(function (i) {
      if (i.donationItemSetID == e) {
        t.push(i);
      }
    });
    return t;
  };
  CastleDonationEventData.prototype.getItemVOs_By_PointTypeSettingID_And_PointTypeID = function (e, t) {
    var i = [];
    this.getItemVOs_By_PointTypeSettingID(e).forEach(function (e) {
      if (e.donationTypeID == t) {
        i.push(e);
      }
    });
    return i;
  };
  CastleDonationEventData.prototype.getRewardVOs_By_RewardSetID = function (e) {
    var t = [];
    this._rewards.forEach(function (i) {
      if (i.rewardSetID == e) {
        t.push(i);
      }
    });
    return t;
  };
  CastleDonationEventData.prototype.getRewardVOs_By_RewardSetID_And_PointTypeID = function (e, t) {
    var i = [];
    this.getRewardVOs_By_RewardSetID(e).forEach(function (e) {
      if (e.donationTypeID == t) {
        i.push(e);
      }
    });
    return i;
  };
  CastleDonationEventData.prototype.getPointTypeVOByID = function (e) {
    return this._types.get(e);
  };
  CastleDonationEventData.prototype.getPointTypeVOs_By_DonationSettingID = function (e) {
    var t = [];
    var i = this._settings.get(e);
    this.getItemVOs_By_PointTypeSettingID(i.donationItemSetID).forEach(function (e) {
      if (!t.includes(e.pointTypeVO)) {
        t.push(e.pointTypeVO);
      }
    });
    return t;
  };
  CastleDonationEventData.prototype.getSettingVOByID = function (e) {
    return this._settings.get(e);
  };
  CastleDonationEventData.prototype.parseGDTI = function (e) {
    this._currentSpentPointsForTypes = new Map();
    for (var t = 0; t < e.DIS.length; t++) {
      this._currentSpentPointsForTypes.set(e.DIS[t].DII, e.DIS[t].DIP);
    }
    this.dispatchEvent(new o.CastleDonationEventDataEvent(o.CastleDonationEventDataEvent.ON_CURRENT_SPENT_POINTS_UPDATED));
  };
  CastleDonationEventData.prototype.getCurrentEarnedPointsForItemID = function (e) {
    if (this._currentSpentPointsForTypes.has(e)) {
      return this._currentSpentPointsForTypes.get(e);
    } else {
      return 0;
    }
  };
  CastleDonationEventData.prototype.getCurrentRewardPointsForType = function (e, t) {
    var i = this;
    var n = 0;
    this.getItemVOs_By_PointTypeSettingID_And_PointTypeID(t, e).forEach(function (e) {
      n += i.getCurrentEarnedPointsForItemID(e.donationItemID);
    });
    return n;
  };
  CastleDonationEventData.prototype.getRewardLevelByDonationRewardID = function (e) {
    var t = this._rewards.get(e);
    if (!t) {
      return 0;
    }
    var i = this.getRewardVOs_By_RewardSetID_And_PointTypeID(t.rewardSetID, t.donationTypeID);
    return (i = i.sort(function (e, t) {
      return e.minPoints - t.minPoints;
    })).indexOf(t) + 1;
  };
  CastleDonationEventData.prototype.getRewardVOByID = function (e) {
    return this._rewards.get(e);
  };
  CastleDonationEventData.LEADERBOARD_DONATIONTYPE_ID = 2;
  return CastleDonationEventData;
}(a.CastleEventDispatcher);
exports.CastleDonationEventData = u;