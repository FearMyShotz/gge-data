Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./31.js");
var a = require("./5.js");
var s = require("./4.js");
var r = require("./441.js");
var o = function () {
  function JavascriptCallOnSetSessionParametersFactory(e = -1) {
    this._playerID = e;
  }
  JavascriptCallOnSetSessionParametersFactory.prototype.createVO = function () {
    return new r.JavascriptCallSetSessionParametersVO(a.EnvGlobalsHandler.globals.gameId, a.EnvGlobalsHandler.globals.networkId, s.BasicModel.instanceProxy.selectedInstanceVO.instanceId, this._playerID == -1 ? s.BasicModel.userData.playerID : this._playerID, a.EnvGlobalsHandler.globals.accountId, i.GGSCountryController.instance.currentCountry.ggsLanguageCode, i.GGSCountryController.instance.currentCountry.ggsCountryCode, a.EnvGlobalsHandler.globals.pln, a.EnvGlobalsHandler.globals.displayName, a.EnvGlobalsHandler.globals.versionInformation.buildNumberGame, a.EnvGlobalsHandler.globals.versionInformation.buildNumberServer);
  };
  return JavascriptCallOnSetSessionParametersFactory;
}();
exports.JavascriptCallOnSetSessionParametersFactory = o;