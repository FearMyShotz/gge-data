Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./381.js");
var a = require("./5.js");
var s = require("./4.js");
var r = function () {
  function JavascriptCallOnLoginCompleteFactory() {}
  JavascriptCallOnLoginCompleteFactory.prototype.createVO = function () {
    return new i.JavascriptCallOnLoginCompleteVO(a.EnvGlobalsHandler.globals.accountId, s.BasicModel.userData.playerID, s.BasicModel.instanceProxy.selectedInstanceVO.instanceId, a.EnvGlobalsHandler.globals.networkId, a.EnvGlobalsHandler.globals.gameId);
  };
  return JavascriptCallOnLoginCompleteFactory;
}();
exports.JavascriptCallOnLoginCompleteFactory = r;