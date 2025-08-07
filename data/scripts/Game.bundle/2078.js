Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MouseEvent;
var o = function () {
  function SimpleScrollDisturbingElement(e) {
    this._isHovered = false;
    this._element = e;
  }
  SimpleScrollDisturbingElement.prototype.destroy = function () {
    this.removeEventListener();
    this._element = null;
  };
  SimpleScrollDisturbingElement.prototype.addEventListener = function () {
    if (this.element) {
      this.element.addEventListener(n.ROLL_OVER, this.bindFunction(this.onRollOver));
      this.element.addEventListener(n.ROLL_OUT, this.bindFunction(this.onRollOut));
    }
  };
  SimpleScrollDisturbingElement.prototype.removeEventListener = function () {
    if (this.element) {
      this.element.removeEventListener(n.ROLL_OVER, this.bindFunction(this.onRollOver));
      this.element.removeEventListener(n.ROLL_OUT, this.bindFunction(this.onRollOut));
    }
  };
  SimpleScrollDisturbingElement.prototype.onRollOver = function (e) {
    this._isHovered = true;
  };
  SimpleScrollDisturbingElement.prototype.onRollOut = function (e) {
    this._isHovered = false;
  };
  Object.defineProperty(SimpleScrollDisturbingElement.prototype, "element", {
    get: function () {
      return this._element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollDisturbingElement.prototype, "isHovered", {
    get: function () {
      return this._isHovered;
    },
    enumerable: true,
    configurable: true
  });
  return SimpleScrollDisturbingElement;
}();
exports.SimpleScrollDisturbingElement = o;