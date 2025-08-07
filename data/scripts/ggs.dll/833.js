Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./455.js");
var a = require("./5.js");
var s = require("./4.js");
var r = function () {
  function JavascriptCallOnRegisterCompleteFactory() {}
  JavascriptCallOnRegisterCompleteFactory.prototype.createVO = function () {
    return new i.JavascriptCallOnRegisterCompleteVO(a.EnvGlobalsHandler.globals.accountId, s.BasicModel.userData.playerID, s.BasicModel.instanceProxy.selectedInstanceVO.instanceId, a.EnvGlobalsHandler.globals.networkId, a.EnvGlobalsHandler.globals.gameId);
  };
  return JavascriptCallOnRegisterCompleteFactory;
}();
exports.JavascriptCallOnRegisterCompleteFactory = r;