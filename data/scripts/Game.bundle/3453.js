Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./219.js");
var a = require("./4.js");
var s = function (e) {
  function DonationEventEndDialogProperties(t, i, n) {
    var o = e.call(this) || this;
    o._donationSettingID = t;
    o._donationRewardIDs = i;
    o._donationPoints = n;
    return o;
  }
  n.__extends(DonationEventEndDialogProperties, e);
  DonationEventEndDialogProperties.prototype.getData = function () {
    var e = [];
    var t = a.CastleModel.donationEventData.getPointTypeVOs_By_DonationSettingID(this._donationSettingID);
    var i = this._donationRewardIDs.map(function (e) {
      return a.CastleModel.donationEventData.getRewardVOByID(e);
    });
    var n = function (t) {
      var n = t.donationTypeID;
      var a = i.find(function (e) {
        return e.donationTypeID == n;
      });
      var s = a ? a.donationRewardID : -1;
      var r = false;
      if (o._donationPoints) {
        o._donationPoints.forEach(function (e) {
          if (e[0] == n && e[1] > 0) {
            r = true;
          }
        });
      }
      if (!o._donationPoints || !!r) {
        e.push([n, s]);
      }
    };
    var o = this;
    for (var s = 0, r = t; s < r.length; s++) {
      n(r[s]);
    }
    return e;
  };
  return DonationEventEndDialogProperties;
}(o.BasicProperties);
exports.DonationEventEndDialogProperties = s;