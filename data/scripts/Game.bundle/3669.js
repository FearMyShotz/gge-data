Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./4.js");
var d = require("./24.js");
var p = function (e) {
  function CastleArtifactFoundPieceDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleArtifactFoundPieceDialog.NAME) || this;
  }
  n.__extends(CastleArtifactFoundPieceDialog, e);
  CastleArtifactFoundPieceDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new c.LocalizedTextVO(""));
    this.itxt_copy = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new c.LocalizedTextVO(""));
    this.initBasicButtons([this.dialogDisp.btn_ok]);
  };
  CastleArtifactFoundPieceDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.itxt_title.textContentVO.textId = "dialog_artifact_" + this.dialogProperties.eventVO.skinID + "_found_title";
    this.itxt_copy.textContentVO.textId = "dialog_artifact_" + this.dialogProperties.eventVO.skinID + "_found_desc";
    h.CrestHelper.setCrestGraphics(this.dialogDisp.crest, u.CastleModel.userData.playerCrest);
    this.initPiece();
    this.dialogDisp.mc_decoration.gotoAndStop(this.dialogProperties.eventVO.skinID);
  };
  CastleArtifactFoundPieceDialog.prototype.initPiece = function () {
    s.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_artifactPiece);
    var e = this.dialogProperties.eventVO.artifactClassName + "_Piece_External";
    var t = l.getDefinitionByName("LoadingAnimation");
    this.artifactPiece = new d.CastleGoodgameExternalClip(e, this.artifctPieceAssetFileURL, null, 0, false, t);
    var i = new a.ClipSizeComponent(100, 100);
    i.clipSizeChanged.add(CastleArtifactFoundPieceDialog.onClipSizeChanged);
    this.artifactPiece.clipSizeComponent = i;
    this.dialogDisp.mc_artifactPiece.addChild(this.artifactPiece.asDisplayObject());
  };
  CastleArtifactFoundPieceDialog.onClipSizeChanged = function (e) {
    var t = e.asDisplayObject();
    t.x = e.clipSizeComponent.offsetX;
    t.y = e.clipSizeComponent.offsetY;
  };
  CastleArtifactFoundPieceDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(CastleArtifactFoundPieceDialog.prototype, "artifctPieceAssetFileURL", {
    get: function () {
      return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.dialogProperties.eventVO.artifactClassName);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleArtifactFoundPieceDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleArtifactFoundPieceDialog.__initialize_static_members = function () {
    CastleArtifactFoundPieceDialog.NAME = "CastleArtifactFoundPart";
  };
  return CastleArtifactFoundPieceDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleArtifactFoundPieceDialog = p;
var h = require("./61.js");
r.classImplementsInterfaces(p, "ICollectableRendererList");
p.__initialize_static_members();