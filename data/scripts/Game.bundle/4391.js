Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./4392.js");
var c = require("./4.js");
var u = require("./79.js");
var d = function (e) {
  function BountyhunterEventVO() {
    var t = this;
    t._skipPriceC2 = 0;
    t._hasWon = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(BountyhunterEventVO, e);
  BountyhunterEventVO.prototype.parseEventXmlNode = function (e) {
    this._skipPriceC2 = parseInt(e.targetSkipCostC2 || "");
    this._rewardList = p.CollectableManager.parser.createListFromRewardIdsString(e.rewardIDs || "");
  };
  BountyhunterEventVO.prototype.parseParamObject = function (e) {
    this._targetAreaVO = m.WorldmapObjectFactory.parseWorldMapArea(e.A);
    this._targetAreaVO.ownerInfo = c.CastleModel.otherPlayerData.parseOwnerInfo(e.OI);
    this._hasWon = e.HW == 1;
  };
  Object.defineProperty(BountyhunterEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_Bountyhunter";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BountyhunterEventVO.prototype, "hasUserSolvedEvent", {
    get: function () {
      return this._hasWon;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.ASpecialEventVO.prototype, "hasUserSolvedEvent").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BountyhunterEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return BountyhunterEventVO.EVENT_BUILDING_WOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.ASpecialEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BountyhunterEventVO.prototype, "hasWon", {
    get: function () {
      return this._hasWon;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BountyhunterEventVO.prototype, "bountyRewardC1", {
    get: function () {
      var e = this._targetAreaVO.ownerInfo;
      return s.EventConst.getBountyPrizeC1ByTargetLevel(e.playerLevel);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BountyhunterEventVO.prototype, "bountyRewardC2", {
    get: function () {
      return this._rewardList.getAmountOrDefaultByType(h.CollectableEnum.C2);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BountyhunterEventVO.prototype, "skipPriceC2", {
    get: function () {
      return c.CastleModel.costsData.getFinalCostsC2(this._skipPriceC2);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BountyhunterEventVO.prototype, "targetAreaVO", {
    get: function () {
      return this._targetAreaVO;
    },
    enumerable: true,
    configurable: true
  });
  BountyhunterEventVO.prototype.openDialog = function (e = true) {
    if (this._targetAreaVO != null) {
      this.executeOpenDialog(e, _.CastleBountyhunterEventDialog, new l.CastleBountyhunterEventDialogProperties(this));
    } else {
      g.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties("", r.Localize.text("errorCode_191")));
    }
  };
  BountyhunterEventVO.__initialize_static_members = function () {
    BountyhunterEventVO.EVENT_BUILDING_WOD = 218;
  };
  return BountyhunterEventVO;
}(u.ASpecialEventVO);
exports.BountyhunterEventVO = d;
var p = require("./50.js");
var h = require("./12.js");
var g = require("./9.js");
var C = require("./38.js");
var _ = require("./4393.js");
var m = require("./147.js");
a.classImplementsInterfaces(d, "IEventOverviewable");
d.__initialize_static_members();