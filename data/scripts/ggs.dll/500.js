Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function ButtonsValueComponent(t, n, i, a, s) {
    var r = e.call(this, t, n, i) || this;
    r._buttonContainer = a;
    if (r._buttonContainer.getMoreButton()) {
      r._buttonContainer.getMoreButton().addEventListener("click", r.bindFunction(r.moreClicked));
    }
    if (r._buttonContainer.getLessButton()) {
      r._buttonContainer.getLessButton().addEventListener("click", r.bindFunction(r.lessClicked));
    }
    if (r._buttonContainer.getMaxButton()) {
      r._buttonContainer.getMaxButton().addEventListener("click", r.bindFunction(r.maxClicked));
    }
    r._stepSize = s;
    return r;
  }
  i.__extends(ButtonsValueComponent, e);
  ButtonsValueComponent.prototype.maxClicked = function (e) {
    this.dispatchUpdateByUserSignal(this.maxValue);
  };
  ButtonsValueComponent.prototype.lessClicked = function (e) {
    this.dispatchUpdateByUserSignal(this.value - this._stepSize);
  };
  ButtonsValueComponent.prototype.moreClicked = function (e) {
    this.dispatchUpdateByUserSignal(this.value + this._stepSize);
  };
  ButtonsValueComponent.prototype.dispose = function () {
    e.prototype.dispose.call(this);
    if (this._buttonContainer.getMoreButton()) {
      this._buttonContainer.getMoreButton().removeEventListener("click", this.bindFunction(this.moreClicked));
    }
    if (this._buttonContainer.getLessButton()) {
      this._buttonContainer.getLessButton().removeEventListener("click", this.bindFunction(this.lessClicked));
    }
    if (this._buttonContainer.getMaxButton()) {
      this._buttonContainer.getMaxButton().removeEventListener("click", this.bindFunction(this.maxClicked));
    }
  };
  return ButtonsValueComponent;
}(require("./103.js").AValueComponent);
exports.ButtonsValueComponent = a;