Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./5.js");
var o = require("./6.js");
var a = require("./48.js");
var s = require("./4.js");
var r = function () {
  function SamuraiEventEndDialogItemVO() {
    this._rank = -1;
    this._points = -1;
    this._rewards = new a.CollectableList();
  }
  SamuraiEventEndDialogItemVO.prototype.parseServerObject = function (e, t) {
    this._points = o.int(t.hasOwnProperty("OP") ? t.OP : -1);
    this._rank = o.int(t.hasOwnProperty("OR") ? t.OR : -1);
    this._rewards = l.CastlePopUpHelper.createRewardList(t);
    switch (e) {
      case n.PopupConst.SAMURAI_INVASION_FIRST_ALLIANCE:
        this._itemType = SamuraiEventEndDialogItemVO.TYPE_ALLIANCE;
        this._rank = 1;
        break;
      case n.PopupConst.SAMURAI_INVASION_TOPX_ALLIANCE:
        this._itemType = SamuraiEventEndDialogItemVO.TYPE_ALLIANCE;
        break;
      case n.PopupConst.SAMURAI_INVASION_FIRST_PLAYER:
        this._itemType = SamuraiEventEndDialogItemVO.TYPE_SINGLEPLAYER;
        this._rank = 1;
        break;
      case n.PopupConst.SAMURAI_INVASION_TOPX_PLAYER:
        this._itemType = SamuraiEventEndDialogItemVO.TYPE_SINGLEPLAYER;
        break;
      case n.PopupConst.DAIMYO_REWARD:
        this._itemType = SamuraiEventEndDialogItemVO.TYPE_DAIMYO;
        this._rewards = s.CastleModel.rewardData.getListByIdVector(s.CastleModel.samuraiDaimyoData.xml.getEndReward(t.RSID, this._rank).rewardIds);
    }
  };
  Object.defineProperty(SamuraiEventEndDialogItemVO.prototype, "itemType", {
    get: function () {
      return this._itemType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiEventEndDialogItemVO.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    set: function (e) {
      this._rank = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiEventEndDialogItemVO.prototype, "points", {
    get: function () {
      return this._points;
    },
    set: function (e) {
      this._points = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiEventEndDialogItemVO.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  SamuraiEventEndDialogItemVO.TYPE_DAIMYO = "daimyo";
  SamuraiEventEndDialogItemVO.TYPE_SINGLEPLAYER = "singleplayer";
  SamuraiEventEndDialogItemVO.TYPE_ALLIANCE = "alliance";
  SamuraiEventEndDialogItemVO.TYPE_SORT_ORDER = [SamuraiEventEndDialogItemVO.TYPE_SINGLEPLAYER, SamuraiEventEndDialogItemVO.TYPE_ALLIANCE, SamuraiEventEndDialogItemVO.TYPE_DAIMYO];
  return SamuraiEventEndDialogItemVO;
}();
exports.SamuraiEventEndDialogItemVO = r;
var l = require("./405.js");