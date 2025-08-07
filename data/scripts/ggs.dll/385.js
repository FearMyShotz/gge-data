Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./386.js");
var s = require("./6.js");
var r = require("./5.js");
var o = require("./4.js");
var l = require("./44.js");
var u = require("./30.js");
var c = function (e) {
  function BasicValidateAgeCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicValidateAgeCommand, e);
  BasicValidateAgeCommand.prototype.execute = function (e = null) {
    var t = e;
    if (!t) {
      l.error("AgeGateValidationVO is null");
    }
    var n = a.AgeGateValidator.validate(t.age);
    o.BasicModel.ageGateData.validationSucceeded = n;
    if (o.BasicModel.ageGateData.validationSucceeded) {
      r.EnvGlobalsHandler.globals.accountCookie.ageGateData = t.age.toString();
    }
    u.debug("Validate age: " + t.age + ", Validation successful: " + o.BasicModel.ageGateData.validationSucceeded);
    t.onValidationFinished(n);
    t.onValidationFinished = null;
    t = null;
  };
  return BasicValidateAgeCommand;
}(s.SimpleCommand);
exports.BasicValidateAgeCommand = c;