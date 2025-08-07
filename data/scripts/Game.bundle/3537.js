Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./4.js");
var s = require("./3538.js");
var r = require("./1704.js");
var l = function (e) {
  function RewardHubManageAllDialogProperties() {
    var t = e.call(this) || this;
    t.createDataVOs();
    return t;
  }
  n.__extends(RewardHubManageAllDialogProperties, e);
  RewardHubManageAllDialogProperties.prototype.createDataVOs = function () {
    this._listItemVOs = [];
    if (a.CastleModel.rewardHubData.rewardHubVOs) {
      var e;
      var t;
      for (var i = 0; i < a.CastleModel.rewardHubData.rewardHubVOs.length; i++) {
        t = a.CastleModel.rewardHubData.rewardHubVOs[i];
        e = new s.RewardHubManagedListItemVO(t, r.RewardHubTextsFactory.createRewardHubItemTextVO(t));
        this._listItemVOs.push(e);
      }
    }
  };
  RewardHubManageAllDialogProperties.prototype.updateItemVOs = function () {
    this.createDataVOs();
  };
  Object.defineProperty(RewardHubManageAllDialogProperties.prototype, "listItemVOs", {
    get: function () {
      return this._listItemVOs;
    },
    enumerable: true,
    configurable: true
  });
  return RewardHubManageAllDialogProperties;
}(o.BasicProperties);
exports.RewardHubManageAllDialogProperties = l;