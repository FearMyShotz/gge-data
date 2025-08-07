Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1974.js");
var r = function (e) {
  function CastleGoodgameInputTextField(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleGoodgameInputTextField, e);
  CastleGoodgameInputTextField.prototype.useDefaultStrategy = function () {
    this._availableStrategies[0] ||= new s.CastleGGSTextFieldDefaultStrategy(this);
    this.activateStrategy(this._availableStrategies[0]);
  };
  return CastleGoodgameInputTextField;
}(o.GoodgameInputTextField);
exports.CastleGoodgameInputTextField = r;
a.classImplementsInterfaces(r, "IInternalGGSTextField", "IBasicGGSTextField", "IBasicInputGGSTextField");