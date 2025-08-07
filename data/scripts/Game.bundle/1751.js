Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MouseEvent;
var o = function () {
  function ArtifactComponent(e) {
    this.disp = e;
    this.disp.mouseChildren = false;
  }
  ArtifactComponent.prototype.init = function (e, t = null) {
    this.eventVO = e;
    if (e.hasClickableArtifact()) {
      h.ButtonHelper.initBasicButton(this.disp);
    }
    l.MovieClipHelper.clearMovieClip(this.disp);
    var i = e.artifactClassName + "_complete_External";
    var o = c.getDefinitionByName("LoadingAnimation");
    var a = r.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e.artifactClassName);
    this.artifact = new p.CastleGoodgameExternalClip(i, a, null, 0, false, o);
    if (t) {
      t.clipSizeChanged.add(this.bindFunction(this.onClipSizeChanged));
      this.artifact.clipSizeComponent = t;
    }
    this.disp.addChild(this.artifact.asDisplayObject());
    if (this.artifact.isLoaded) {
      this.onArtifactLoaded(this.artifact);
    } else {
      this.artifact.clipLoaded.addOnce(this.bindFunction(this.onArtifactLoaded));
    }
    this.disp.addEventListener(n.CLICK, this.bindFunction(this.onClick));
  };
  ArtifactComponent.prototype.onClick = function (e) {
    if (this.eventVO.hasClickableArtifact()) {
      a.CastleDialogHandler.getInstance().registerDialogsWithType(s.CastleArtifactBigDialog, new g.CastleArtifactEventDialogProperties(this.eventVO), false, d.CastleDialogConsts.PRIORITY_HIGH, 0, d.CastleDialogConsts.DIALOG_TYPE_MODAL_SINGLE);
    }
  };
  ArtifactComponent.prototype.onClipSizeChanged = function (e) {
    var t = e.asDisplayObject();
    t.x = e.clipSizeComponent.offsetX;
    if (u.instanceOfClass(this.eventVO, "RenegadeEventVO")) {
      t.y = -t.height;
    } else {
      t.y = 0;
    }
  };
  ArtifactComponent.prototype.onArtifactLoaded = function (e) {
    var t = e.currentshownDisplayObject;
    for (var i = 0; i < this.eventVO.artifactParts; i++) {
      t["p" + i].visible = i >= this.eventVO.artifactPartsFound;
    }
  };
  ArtifactComponent.prototype.onHide = function () {
    this.disp.removeEventListener(n.CLICK, this.bindFunction(this.onClick));
  };
  return ArtifactComponent;
}();
exports.ArtifactComponent = o;
var a = require("./9.js");
var s = require("./3671.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./1.js");
var u = require("./1.js");
var d = require("./43.js");
var p = require("./24.js");
var h = require("./8.js");
var g = require("./1086.js");