Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./5782.js");
var u = require("./5783.js");
var d = require("./5784.js");
var p = function (e) {
  function CastleTextFieldFactory() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleTextFieldFactory, e);
  CastleTextFieldFactory.prototype.createAdvancedTextField = function (e) {
    var t = e.parent;
    if (e.parent && l.instanceOfClass(e.parent, "BasicButton") && e.parent.textField) {
      var i = new c.BasicButtonTextField(t);
      var n = s.castAs(i, "IInternalGGSTextField");
      if (n != null) {
        return n;
      }
    }
    if (e.type == a.TextFieldType.INPUT) {
      return new u.CastleGoodgameInputTextField(e);
    } else {
      return new d.CastleGoodGameTextField(e);
    }
  };
  return CastleTextFieldFactory;
}(o.GoodgameAdvancedTextFieldFactory);
exports.CastleTextFieldFactory = p;
r.classImplementsInterfaces(p, "IGGSTextFieldFactory");