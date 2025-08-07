Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleEffectConditionVO(e = -1, t = -1, i = -1, n = null) {
    this.areaType = 0;
    this.spaceId = 0;
    this.wodId = 0;
    this.areaType = e;
    this.spaceId = t;
    this.wodId = i;
    this.otherPlayer = n;
  }
  CastleEffectConditionVO.__initialize_static_members = function () {
    CastleEffectConditionVO.NULL_CONDITION = new CastleEffectConditionVO();
  };
  return CastleEffectConditionVO;
}();
exports.CastleEffectConditionVO = n;
n.__initialize_static_members();