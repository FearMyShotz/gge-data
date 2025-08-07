Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = function (e) {
  function ResourcePaneltoolTipIconWithText(t, i) {
    var n = e.call(this, t) || this;
    n._icon = i;
    t.mc_icon.addChild(i);
    o.MovieClipHelper.centerMovieClip(i, 30, 30);
    return n;
  }
  n.__extends(ResourcePaneltoolTipIconWithText, e);
  ResourcePaneltoolTipIconWithText.prototype.updateTextFieldDimensions = function (e) {
    var t = this;
    this._textFields.forEach(function (i) {
      i.width = e.width - t._icon.width;
    });
  };
  return ResourcePaneltoolTipIconWithText;
}(require("./287.js").ResourcePanelToolTipSingleLineText);
exports.ResourcePaneltoolTipIconWithText = s;
a.classImplementsInterfaces(s, "Container");