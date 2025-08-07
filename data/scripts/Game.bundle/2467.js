Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function AllianceMemberNameButton(t = null, i = false) {
    return e.call(this, t, i) || this;
  }
  n.__extends(AllianceMemberNameButton, e);
  AllianceMemberNameButton.prototype.onRollOver = function (e) {
    this._nameTextField ||= e.target.txt_playerName;
    this.updateFontSize(13);
  };
  AllianceMemberNameButton.prototype.onRollOut = function (e) {
    this._nameTextField ||= e.target.txt_playerName;
    this.updateFontSize(12);
  };
  AllianceMemberNameButton.prototype.updateFontSize = function (e) {
    if (this._nameTextField) {
      var t = this._nameTextField.getTextFormat();
      t.size = e;
      this._nameTextField.setTextFormat(t);
      this._nameTextField.updateCacheIfCached(2);
    }
  };
  return AllianceMemberNameButton;
}(require("./49.js").BasicButton);
exports.AllianceMemberNameButton = o;