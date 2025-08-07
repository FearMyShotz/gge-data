Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./1339.js");
var r = function (e) {
  function CastleJSONTextFieldRestrictor() {
    var t = this;
    t._maxChars = 0;
    t.oldTextLength = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(CastleJSONTextFieldRestrictor, e);
  CastleJSONTextFieldRestrictor.prototype.init = function (e, t) {
    if (e) {
      this.removeEventListeners();
      this._maxChars = t;
      this.textField = e;
      this.oldText = this.textField.text;
      this.oldTextLength = this.getJSONLength();
      this.addEventListeners();
    }
  };
  CastleJSONTextFieldRestrictor.prototype.addEventListeners = function () {
    this.textField.change.add(this.bindFunction(this.onTextChanged));
  };
  CastleJSONTextFieldRestrictor.prototype.removeEventListeners = function () {
    if (this.textField) {
      this.textField.change.remove(this.bindFunction(this.onTextChanged));
    }
  };
  CastleJSONTextFieldRestrictor.prototype.onTextChanged = function (e) {
    var t = this.getJSONLength();
    if (t > this._maxChars) {
      this.textField.text = this.oldText;
      this.dispatchEvent(new s.CastleJSONTextFieldRestrictorEvent(s.CastleJSONTextFieldRestrictorEvent.TEXT_LIMIT_EXCEEDED, this.oldTextLength));
    } else {
      this.oldText = this.textField.text;
      this.oldTextLength = t;
      if (t == this._maxChars) {
        this.dispatchEvent(new s.CastleJSONTextFieldRestrictorEvent(s.CastleJSONTextFieldRestrictorEvent.TEXT_LIMIT_REACHED, t));
      } else {
        this.dispatchEvent(new s.CastleJSONTextFieldRestrictorEvent(s.CastleJSONTextFieldRestrictorEvent.TEXT_CHANGED, t));
      }
    }
  };
  CastleJSONTextFieldRestrictor.prototype.getJSONLength = function () {
    return a.int(o.TextValide.getValideSmartFoxJSONTextMessage(this.textField.text).length);
  };
  Object.defineProperty(CastleJSONTextFieldRestrictor.prototype, "maxChars", {
    get: function () {
      return this._maxChars;
    },
    set: function (e) {
      this._maxChars = e;
    },
    enumerable: true,
    configurable: true
  });
  return CastleJSONTextFieldRestrictor;
}(require("./72.js").CastleEventDispatcher);
exports.CastleJSONTextFieldRestrictor = r;