Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = function (e) {
  function CastleLayoutConnectingServer() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleLayoutConnectingServer, e);
  CastleLayoutConnectingServer.prototype.setLayout = function (e, t) {
    if (t != o.BasicLayoutManager.STATE_CONNECT) {
      e.hideAllDialogs();
      e.hideAllPanels();
      e.hideAllAttackPanels();
      e.removeAllIngameUIComponents();
    }
  };
  return CastleLayoutConnectingServer;
}(require("./555.js").ACastleLayoutStrategy);
exports.CastleLayoutConnectingServer = a;