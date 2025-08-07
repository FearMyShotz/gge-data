Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1610.js");
var r = createjs.Point;
var l = function (e) {
  function AExpandingResourceFieldVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AExpandingResourceFieldVE, e);
  AExpandingResourceFieldVE.prototype.loadResourceAsset = function () {
    var e = this.assetClipName;
    if (o.BasicModel.basicLoaderData.isItemAssetVersioned(this.assetFileName)) {
      for (var t = 0; t < this.expandingResourceFieldVO.fieldAmount; ++t) {
        var i = this.loadExternalClip(e, this.assetFileName, this.getDispClipColor());
        var n = this.getClipDeltaTilePosByIndex(t);
        var a = this.isoRenderer.camera.getScreenPosByGridPosDelta(n);
        i.x = a.x;
        i.y = a.y;
        this.dispComponent.addClip(i);
      }
    } else {
      console.warn(this.assetFileName + " not versioned.");
    }
  };
  AExpandingResourceFieldVE.prototype.getClipDeltaTilePosByIndex = function (e) {
    return new r();
  };
  Object.defineProperty(AExpandingResourceFieldVE.prototype, "uiPos", {
    get: function () {
      if (this.elementContainer) {
        var e = new r(this.elementContainer.x, this.elementContainer.y);
        if (this.dispComponent.clipList.length > 1) {
          e.y += this.elementContainer.height * 0.33;
        }
        return e;
      }
      return null;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AResourceFieldVE.prototype, "uiPos").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AExpandingResourceFieldVE.prototype.onAllDispClipsLoaded = function () {
    e.prototype.onAllDispClipsLoaded.call(this);
    for (var t = 0, i = this.dispComponent.clipList; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        n.cacheAsBitmap = true;
      }
    }
  };
  Object.defineProperty(AExpandingResourceFieldVE.prototype, "delayLoadingUntilFree", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AExpandingResourceFieldVE.prototype, "expandingResourceFieldVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return AExpandingResourceFieldVE;
}(s.AResourceFieldVE);
exports.AExpandingResourceFieldVE = l;
a.classImplementsInterfaces(l, "ICollectableRendererList", "IIngameUICapable");