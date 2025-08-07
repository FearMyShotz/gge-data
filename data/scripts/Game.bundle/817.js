Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./24.js");
var c = require("./11.js");
var u = require("./3596.js");
var d = createjs.Container;
var p = function (e) {
  function SkinnableDialog(t) {
    var i = this;
    i.CLIP_LOADED_PRIORITY_HIDDEN = 0;
    i.currentSkinID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t, null, new d()) || this).skinContainer = i.disp;
    return i;
  }
  n.__extends(SkinnableDialog, e);
  SkinnableDialog.prototype.initExternalClipInConstructor = function () {};
  SkinnableDialog.prototype.applyProperties = function () {
    if (!this.applyPropertiesCalled) {
      this.applyPropertiesCalled = true;
      if (this.currentSkinID != this.skinId && this.externalClip) {
        this.destroy();
        a.MovieClipHelper.clearMovieClip(this.skinContainer);
        this.externalClip.clipLoaded.removeAll();
        this.externalClip = null;
        this.isInitialized = false;
      }
      if (this.externalClip && this.externalClip.isLoaded) {
        this.applyPropertiesLoaded();
      } else {
        this.applySkin();
        this.externalClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.applyPropertiesLoaded), c.CastleExternalDialog.CLIP_LOADED_PRIORITY_APPLIEDPROPERTIE);
      }
    }
  };
  SkinnableDialog.prototype.show = function () {
    if (this.externalClip != null && r.instanceOfClass(this.externalClip, "CastleGoodgameExternalClip")) {
      e.prototype.show.call(this);
    } else {
      this.applySkin();
      if (this.externalClip.isLoaded) {
        this.showWhenSkinLoaded();
      } else {
        this.externalClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.showWhenSkinLoaded), c.CastleExternalDialog.CLIP_LOADED_PRIORITY_SHOWN);
      }
    }
  };
  SkinnableDialog.prototype.showWhenSkinLoaded = function (t = null) {
    e.prototype.show.call(this);
  };
  SkinnableDialog.prototype.hideWhenSkinLoaded = function (t = null) {
    e.prototype.hide.call(this);
  };
  SkinnableDialog.prototype.hide = function () {
    if (this.externalClip != null) {
      e.prototype.hide.call(this);
    } else {
      this.externalClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.hideWhenSkinLoaded), this.CLIP_LOADED_PRIORITY_HIDDEN);
    }
  };
  SkinnableDialog.prototype.applySkin = function () {
    if (this.externalClip == null || !r.instanceOfClass(this.externalClip, "CastleGoodgameExternalClip")) {
      this.currentSkinID = this.skinId;
      this.createExternalClip();
      this.skinContainer.addChild(this.externalClip);
      this.initExternalClip();
    }
  };
  SkinnableDialog.prototype.createExternalClip = function () {
    this.externalClip = new l.CastleGoodgameExternalClip(this.assetClassName, this.assetFileURL, null, 0, false);
  };
  Object.defineProperty(SkinnableDialog.prototype, "assetClassName", {
    get: function () {
      var e = this.dialogClassName + this.skinNameDelimiter + this.skinName;
      if (o.BasicModel.basicLoaderData.isItemAssetVersioned(e)) {
        return e;
      } else {
        return this.defaultAssetName;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleExternalDialog.prototype, "assetClassName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SkinnableDialog.prototype, "defaultAssetName", {
    get: function () {
      return this.dialogClassName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SkinnableDialog.prototype, "skinName", {
    get: function () {
      for (var e = String(this.skinId); e.length < this.skinNameMinimalLength;) {
        e = this.skinNameDefaultCharacter + e;
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SkinnableDialog.prototype, "skinId", {
    get: function () {
      if (u.instanceOf_ISkinnable(this.properties)) {
        return this.properties.skinId;
      } else if ("skinId" in this.properties) {
        return this.properties.skinId;
      } else {
        return this.defaultSkinId;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SkinnableDialog.prototype, "skinNameMinimalLength", {
    get: function () {
      return 3;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SkinnableDialog.prototype, "skinNameDefaultCharacter", {
    get: function () {
      return "0";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SkinnableDialog.prototype, "skinNameDelimiter", {
    get: function () {
      return "_";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SkinnableDialog.prototype, "defaultSkinId", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  return SkinnableDialog;
}(c.CastleExternalDialog);
exports.SkinnableDialog = p;
s.classImplementsInterfaces(p, "ICollectableRendererList");