Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleShoppingCartPrimeDayProgressBar(e, t) {
    this.textRubiesPaid = a.GoodgameTextFieldManager.getInstance().registerTextField(e, new s.LocalizedTextVO(o.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0, 1]));
    this.progressBar = t;
  }
  CastleShoppingCartPrimeDayProgressBar.prototype.updatePlaceholders = function (e, t) {
    if (!(t < 0)) {
      var i = e;
      i = r.int(l.CastleMathHelper.clamp(i, 0, t));
      this.textRubiesPaid.textContentVO.textReplacements = [i, t];
      this.progressBar.scaleX = i / t;
    }
  };
  return CastleShoppingCartPrimeDayProgressBar;
}();
exports.CastleShoppingCartPrimeDayProgressBar = n;
var o = require("./2.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./213.js");