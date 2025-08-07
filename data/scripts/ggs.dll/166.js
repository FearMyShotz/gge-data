Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./341.js");
var a = require("./167.js");
var s = require("./3.js");
var r = require("./2.js");
var o = require("./29.js");
var l = r.getLogger(o.TEXT_FIELDS_LOGGER + ".GoodgameAdvancedTextFieldFactory");
var u = function () {
  function GoodgameAdvancedTextFieldFactory() {}
  GoodgameAdvancedTextFieldFactory.prototype.createAdvancedTextField = function (e) {
    l.debug("createAdvancedTextField for", e);
    if (e.type == s.TextFieldType.INPUT) {
      return new i.GoodgameInputTextField(e);
    } else {
      return new a.GoodgameTextField(e);
    }
  };
  return GoodgameAdvancedTextFieldFactory;
}();
exports.GoodgameAdvancedTextFieldFactory = u;