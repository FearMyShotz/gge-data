Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function ContinueLoadingTexturePackerClipSource() {
    return e.call(this) || this;
  }
  i.__extends(ContinueLoadingTexturePackerClipSource, e);
  ContinueLoadingTexturePackerClipSource.prototype.loadFrame = function (e) {
    if (this._framesStrip.getFrame(e - 1) == null) {
      console.error(" we trying to load clip source which are not initialized, not supported in HTML5");
    }
  };
  ContinueLoadingTexturePackerClipSource.prototype.convertClass = function (e, t = null, n = 0, i = false) {
    this._colorData = t;
    this.debugColor = n;
    this.hasSubLayer = i;
    this._cacheId = this.sourceClass.toString();
    this.sourceBmp = new this.sourceClass();
    this.convertTexturePackerContainer(this.sourceBmp);
  };
  ContinueLoadingTexturePackerClipSource.prototype.convertTexturePackerContainer = function (e) {
    for (var t = 0; t < this.animData.length; t++) {
      this._framesStrip.addFrame(null);
    }
    return null;
  };
  ContinueLoadingTexturePackerClipSource.prototype.cleanUpLoadingData = function () {
    if (this.sourceBmp) {
      this.sourceBmp.dispose();
      this.sourceBmp = null;
    }
    this.animData = null;
  };
  return ContinueLoadingTexturePackerClipSource;
}(require("./195.js").ExternalTexturePackerClipSource);
exports.ContinueLoadingTexturePackerClipSource = a;