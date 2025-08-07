Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./81.js");
var s = createjs.Event;
var r = createjs.MouseEvent;
var o = function (e) {
  function AnimatedSpeechTextField(t, n, i, a = null) {
    var s = e.call(this) || this;
    s._isRunning = false;
    s.lastCharacterIndex = 0;
    s.currentSkippedCharacters = 0;
    s.fullText = n;
    s.textField = t;
    s.delayBetweenCharacters = i;
    s.mouseChildren = false;
    s.updateCallback = a;
    s.prepareTextField();
    return s;
  }
  i.__extends(AnimatedSpeechTextField, e);
  AnimatedSpeechTextField.prototype.prepareTextField = function () {
    a.GoodgameTextFieldManager.getInstance().setText(this.textField, this.fullText, false);
    this.addChild(this.textField);
    this.stop();
  };
  AnimatedSpeechTextField.prototype.start = function () {
    this._isRunning = true;
    this.startTime = Date.now();
    this.addEventListener(s.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
    this.addEventListener(r.CLICK, this.bindFunction(this.skip));
    this.currentSkippedCharacters = 0;
  };
  AnimatedSpeechTextField.prototype.skip = function (e = null) {
    this.stop();
    this.fillText(this.fullText.length);
  };
  AnimatedSpeechTextField.prototype.stop = function () {
    this._isRunning = false;
    this.removeEventListener(s.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
    this.removeEventListener(r.CLICK, this.bindFunction(this.skip));
    this.currentSkippedCharacters = 0;
  };
  AnimatedSpeechTextField.prototype.onEnterFrame = function (e) {
    var t = (Date.now() - this.startTime) / this.delayBetweenCharacters + this.currentSkippedCharacters;
    if (t !== this.lastCharacterIndex) {
      this.fillText(t);
      if (t >= this.fullText.length) {
        this.stop();
      }
    }
    this.lastCharacterIndex = t;
  };
  AnimatedSpeechTextField.prototype.fillText = function (e) {
    var t = this.fullText.substr(0, e);
    var n = t.substr(e - 5);
    if (n.lastIndexOf("&") > n.lastIndexOf(";")) {
      var i = this.fullText.substr(e, 5).indexOf(";");
      if (i >= 0) {
        e += i + 1;
        this.currentSkippedCharacters += i + 1;
      }
    }
    for (var s = this.getLengthOfNextWord(e), r = 0; r < s; r++) {
      t += " ";
    }
    a.GoodgameTextFieldManager.getInstance().setText(this.textField, t, false);
    if (this.updateCallback !== null && this.updateCallback !== undefined) {
      this.updateCallback();
    }
  };
  AnimatedSpeechTextField.prototype.getLengthOfNextWord = function (e) {
    return this.fullText.substr(e).indexOf(" ", 1);
  };
  AnimatedSpeechTextField.prototype.isRunning = function () {
    return this._isRunning;
  };
  AnimatedSpeechTextField.prototype.destroy = function () {
    this.stop();
    this.updateCallback = null;
    this.textField = null;
  };
  return AnimatedSpeechTextField;
}(createjs.Container);
exports.AnimatedSpeechTextField = o;