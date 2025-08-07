Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function AValueWrapper(t, n, i, a) {
    var s = e.call(this, t, n, i) || this;
    s.wrappedTarget = a;
    s.wrappedTarget.updatedByUserSignal.add(s.bindFunction(s.wrappedUpdateByUserChanges));
    return s;
  }
  i.__extends(AValueWrapper, e);
  AValueWrapper.prototype.wrappedUpdateByUserChanges = function (e) {
    this.dispatchUpdateByUserSignal(e);
  };
  AValueWrapper.prototype.updateValue = function (t) {
    e.prototype.updateValue.call(this, t);
    this.wrappedTarget.updateValue(t);
  };
  AValueWrapper.prototype.dispose = function () {
    e.prototype.dispose.call(this);
    this.wrappedTarget.dispose();
  };
  return AValueWrapper;
}(require("./103.js").AValueComponent);
exports.AValueWrapper = a;