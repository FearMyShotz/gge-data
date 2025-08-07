Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleChangePlayerNameDialogProperties(t, i = 0) {
    var n = e.call(this) || this;
    n._discount = 0;
    n._cost = 0;
    n._cost = t;
    n._discount = i;
    return n;
  }
  n.__extends(CastleChangePlayerNameDialogProperties, e);
  Object.defineProperty(CastleChangePlayerNameDialogProperties.prototype, "discount", {
    get: function () {
      return this._discount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleChangePlayerNameDialogProperties.prototype, "cost", {
    get: function () {
      return this._cost;
    },
    set: function (e) {
      this._cost = e;
    },
    enumerable: true,
    configurable: true
  });
  return CastleChangePlayerNameDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleChangePlayerNameDialogProperties = o;