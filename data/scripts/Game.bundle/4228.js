Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = function (e) {
  function CastleAddExtraCurrencyCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleAddExtraCurrencyCommand, e);
  CastleAddExtraCurrencyCommand.prototype.execute = function (t = null) {
    var i = t;
    e.prototype.execute.call(this, new o.AddExtraCurrencyVO(s.BasicController.getInstance().paymentHash, i.sourceId, i.shopTab));
  };
  return CastleAddExtraCurrencyCommand;
}(a.BasicAddExtraCurrencyCommand);
exports.CastleAddExtraCurrencyCommand = l;
r.classImplementsInterfaces(l, "ISimpleCommand");