Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleKingdomGoodsTransferVO() {
    this._resources = new a.CollectableList();
    this._endTime = 0;
    this._targetKingdomID = 0;
  }
  CastleKingdomGoodsTransferVO.prototype.fillFromParamObject = function (e) {
    this._resources = o.CollectableManager.parser.s2cParamList.createList(e.G);
    var t = l.int(e.RS);
    this._endTime = c.CachedTimer.getCachedTimer() + t * s.ClientConstTime.SEC_2_MILLISEC;
    this._targetKingdomID = l.int(e.KID);
  };
  Object.defineProperty(CastleKingdomGoodsTransferVO.prototype, "remainingTimeInSeconds", {
    get: function () {
      return Math.max((this._endTime - c.CachedTimer.getCachedTimer()) * s.ClientConstTime.MILLISEC_2_SEC, 0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomGoodsTransferVO.prototype, "totalTravelTimeInSeconds", {
    get: function () {
      return u.CastleModel.kingdomData.getKingdomVOByID(this._targetKingdomID).ressourceTravelTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomGoodsTransferVO.prototype, "progressPercent", {
    get: function () {
      return 1 - Math.max(this.remainingTimeInSeconds / this.totalTravelTimeInSeconds, 0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomGoodsTransferVO.prototype, "toolTipText", {
    get: function () {
      return this._resources.getShortTooltip();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomGoodsTransferVO.prototype, "targetKingdomID", {
    get: function () {
      return this._targetKingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomGoodsTransferVO.prototype, "textFieldManager", {
    get: function () {
      return r.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleKingdomGoodsTransferVO;
}();
exports.CastleKingdomGoodsTransferVO = n;
var o = require("./50.js");
var a = require("./48.js");
var s = require("./28.js");
var r = require("./2.js");
var l = require("./6.js");
var c = require("./30.js");
var u = require("./4.js");