Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function StrictStepWrapper(t, n, i, a, s) {
    var r = e.call(this, t, n, i, a) || this;
    r._step = s;
    return r;
  }
  i.__extends(StrictStepWrapper, e);
  StrictStepWrapper.prototype.wrappedUpdateByUserChanges = function (t) {
    var n = t;
    if (t != this.maxValue && Number(t / this._step) != t / this._step) {
      var i = t - this.value;
      var a = this.value / this._step;
      n = i > 0 ? (Number(a) + 1) * this._step : a != Number(a) ? Number(a) * this._step : (Number(a) - 1) * this._step;
    }
    e.prototype.wrappedUpdateByUserChanges.call(this, n);
  };
  return StrictStepWrapper;
}(require("./506.js").AValueWrapper);
exports.StrictStepWrapper = a;