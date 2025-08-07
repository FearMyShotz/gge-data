Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = function (e) {
  function AIsoStatusIconProgressBar() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AIsoStatusIconProgressBar, e);
  AIsoStatusIconProgressBar.prototype.createDisp = function () {
    var e = new this.iconType.dispClass();
    this.dispComponent.addDisp(e);
    e.scaleX = e.scaleY = 2;
  };
  AIsoStatusIconProgressBar.prototype.updateFrame = function () {
    var e = this.getBarClip();
    if (e) {
      e.mc_icon.gotoAndStop(this.getDispFrame());
    }
  };
  AIsoStatusIconProgressBar.prototype.updateBarContent = function () {
    var e = this.getBarClip();
    if (e) {
      var t = l.CastleComponent.textFieldManager.getTextField(e.txt_time);
      if (t && t.textContentVO) {
        t.textContentVO.stringValue = this.getBarText();
      } else {
        l.CastleComponent.textFieldManager.registerTextField(e.txt_time, new s.TextVO(this.getBarText()), new o.InternalGGSTextFieldConfigVO(true));
      }
      e.barMc.scaleX = this.getBarFillFactor();
    }
  };
  AIsoStatusIconProgressBar.prototype.update = function (e) {
    this.updateBarContent();
    this.dispComponent.updateCache();
  };
  AIsoStatusIconProgressBar.prototype.getDispFrame = function () {
    return 1;
  };
  AIsoStatusIconProgressBar.prototype.getBarText = function () {
    return "";
  };
  AIsoStatusIconProgressBar.prototype.getBarFillFactor = function () {
    return 0;
  };
  AIsoStatusIconProgressBar.prototype.getBarClip = function () {
    return this.dispComponent.dispContainer.getChildAt(0);
  };
  AIsoStatusIconProgressBar.prototype.getDispHeight = function () {
    return e.prototype.getDispHeight.call(this) + 40;
  };
  AIsoStatusIconProgressBar.prototype.onAllDispClipsLoaded = function () {
    e.prototype.onAllDispClipsLoaded.call(this);
    this.updateFrame();
    this.updateBarContent();
  };
  return AIsoStatusIconProgressBar;
}(require("./1189.js").AIsoStatusIcon);
exports.AIsoStatusIconProgressBar = r;
var l = require("./14.js");
a.classImplementsInterfaces(r, "ICollectableRendererList");