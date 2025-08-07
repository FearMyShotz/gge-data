Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./355.js");
var o = require("./5.js");
var a = require("./1.js");
var s = require("./41.js");
var r = createjs.Point;
var l = function () {
  function RewardHubManagedListItemVO(e, t) {
    this._hubRewardID = e.hubRewardID;
    this._eventId = e.mainEventID;
    this._subEventId = e.subEventID;
    this._rewardTiers = e.rewardTiers;
    this._extraTierUnlockCostC2 = e.extraTierUnlockCostC2;
    this._isExtraTierUnlocked = e.isExtraTierUnlocked;
    this._rewardHubItemTextVO = t;
  }
  Object.defineProperty(RewardHubManagedListItemVO.prototype, "txtTitle", {
    get: function () {
      return this._rewardHubItemTextVO.txtTitlte;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubManagedListItemVO.prototype, "txtSubtitle", {
    get: function () {
      return this._rewardHubItemTextVO.txtSubtitle;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubManagedListItemVO.prototype, "mcIcon", {
    get: function () {
      return n.EventIconHelper.createEventIconByEventID(this._eventId, new r(RewardHubManagedListItemVO.EVENT_ICON_SIZE, RewardHubManagedListItemVO.EVENT_ICON_SIZE));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubManagedListItemVO.prototype, "mcSubIcon", {
    get: function () {
      if (this._eventId == o.EventConst.EVENTTYPE_KINGDOMS_LEAGUE) {
        if (this._subEventId > 0) {
          return n.EventIconHelper.createEventIconByEventID(this._subEventId, new r(RewardHubManagedListItemVO.EVENT_SUB_ICON_SIZE, RewardHubManagedListItemVO.EVENT_SUB_ICON_SIZE));
        }
        var e = new (a.getDefinitionByName("Icon_Promotion"))();
        s.CastleMovieClipHelper.scaleWithAntiAliasing(e, RewardHubManagedListItemVO.EVENT_SUB_ICON_SIZE, RewardHubManagedListItemVO.EVENT_SUB_ICON_SIZE);
        return e;
      }
      if (this._subEventId > 0 && this._eventId != this._subEventId) {
        return n.EventIconHelper.createEventIconByEventID(this._subEventId, new r(RewardHubManagedListItemVO.EVENT_SUB_ICON_SIZE, RewardHubManagedListItemVO.EVENT_SUB_ICON_SIZE));
      } else {
        return new createjs.MovieClip();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubManagedListItemVO.prototype, "rewardsTiers", {
    get: function () {
      return this._rewardTiers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubManagedListItemVO.prototype, "extraTierUnlockCostC2", {
    get: function () {
      return this._extraTierUnlockCostC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubManagedListItemVO.prototype, "isExtraTierUnlocked", {
    get: function () {
      return this._isExtraTierUnlocked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubManagedListItemVO.prototype, "hubRewardID", {
    get: function () {
      return this._hubRewardID;
    },
    enumerable: true,
    configurable: true
  });
  RewardHubManagedListItemVO.EVENT_ICON_SIZE = 46;
  RewardHubManagedListItemVO.EVENT_SUB_ICON_SIZE = 20;
  return RewardHubManagedListItemVO;
}();
exports.RewardHubManagedListItemVO = l;