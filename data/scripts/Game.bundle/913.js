Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = function (e) {
  function CastleWelcomeBetaTestDialogProperties(t = null) {
    var i = this;
    CONSTRUCTOR_HACK;
    i = e.call(this) || this;
    var n = a.EnvGlobalsHandler.globals.isClosedBeta ? CastleWelcomeBetaTestDialogProperties.CLOSED_BETA_NEWS : CastleWelcomeBetaTestDialogProperties.OPEN_BETA_NEWS;
    i._newsIDs = t || n;
    return i;
  }
  n.__extends(CastleWelcomeBetaTestDialogProperties, e);
  Object.defineProperty(CastleWelcomeBetaTestDialogProperties.prototype, "newsIDs", {
    get: function () {
      return this._newsIDs;
    },
    enumerable: true,
    configurable: true
  });
  CastleWelcomeBetaTestDialogProperties.__initialize_static_members = function () {
    CastleWelcomeBetaTestDialogProperties.OPEN_BETA_NEWS = [1];
    CastleWelcomeBetaTestDialogProperties.CLOSED_BETA_NEWS = [1];
  };
  return CastleWelcomeBetaTestDialogProperties;
}(o.BasicProperties);
exports.CastleWelcomeBetaTestDialogProperties = s;
s.__initialize_static_members();