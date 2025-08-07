Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleEilandRankingDialogProperties(t = CastleEilandRankingDialogProperties.SUBLAYER_ALLIANCE_RANKING) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this)._startCategory = t;
    return i;
  }
  n.__extends(CastleEilandRankingDialogProperties, e);
  Object.defineProperty(CastleEilandRankingDialogProperties.prototype, "startCategory", {
    get: function () {
      return this._startCategory;
    },
    enumerable: true,
    configurable: true
  });
  CastleEilandRankingDialogProperties.__initialize_static_members = function () {
    CastleEilandRankingDialogProperties.SUBLAYER_RULES = "sublayerRules";
    CastleEilandRankingDialogProperties.SUBLAYER_ALLIANCE_RANKING = "sublayerAllianceRanking";
    CastleEilandRankingDialogProperties.SUBLAYER_PLAYER_RANKING = "sublayerPlayerRanking";
    CastleEilandRankingDialogProperties.SUBLAYER_TITLE = "sublayerTitle";
  };
  return CastleEilandRankingDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleEilandRankingDialogProperties = o;
o.__initialize_static_members();