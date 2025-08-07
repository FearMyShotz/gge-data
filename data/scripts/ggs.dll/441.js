Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./49.js");
var a = function () {
  return function JavascriptCallSetSessionParametersVO(e, t, n, a, s, r, o, l, u, c, _) {
    this.functionName = i.JavascriptFunctionName.SET_SESSION_PARAMETERS;
    var d = {
      gameId: e,
      networkId: t,
      instanceId: n,
      playerId: a,
      accountId: s,
      languageCode: r,
      countryCode: o,
      pln: l,
      displayName: u,
      versionClient: c,
      versionServer: _
    };
    this.parameters = [d];
  };
}();
exports.JavascriptCallSetSessionParametersVO = a;