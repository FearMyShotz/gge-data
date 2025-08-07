Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./8.js");
var r = require("./817.js");
var l = function (e) {
  function CastleArtifactBigDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleArtifactBigDialog.NAME) || this;
  }
  n.__extends(CastleArtifactBigDialog, e);
  CastleArtifactBigDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    s.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close]);
    for (var i = 0; i < this.dialogProperties.eventVO.artifactParts; i++) {
      this.dialogDisp.artifact["p" + i].visible = i >= this.dialogProperties.eventVO.artifactPartsFound;
    }
  };
  Object.defineProperty(CastleArtifactBigDialog.prototype, "assetClassName", {
    get: function () {
      return this.dialogProperties.eventVO.artifactClassName + "_Big";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.SkinnableDialog.prototype, "assetClassName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleArtifactBigDialog.prototype, "assetFileURL", {
    get: function () {
      return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.dialogProperties.eventVO.artifactClassName);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.SkinnableDialog.prototype, "assetFileURL").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleArtifactBigDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(CastleArtifactBigDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleArtifactBigDialog.__initialize_static_members = function () {
    CastleArtifactBigDialog.NAME = "ArtifactBig";
  };
  return CastleArtifactBigDialog;
}(r.SkinnableDialog);
exports.CastleArtifactBigDialog = l;
a.classImplementsInterfaces(l, "ICollectableRendererList");
l.__initialize_static_members();