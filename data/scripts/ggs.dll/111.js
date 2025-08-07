Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function CampaignVarsVO(e = null, t = null, n = null) {
    this.data = e;
    this.contextDescription = n;
    this.clientObjectClassName = t;
  }
  CampaignVarsVO.SOURCE_URL_PARAMETER = "urlParameter";
  CampaignVarsVO.SOURCE_ACCOUNT_COOKIE = "accountCookie";
  CampaignVarsVO.SOURCE_CACHE_BREAKER = "cacheBreaker";
  return CampaignVarsVO;
}();
exports.CampaignVarsVO = i;