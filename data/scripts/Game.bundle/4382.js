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
var u = require("./3.js");
var d = require("./6.js");
var p = require("./16.js");
var h = require("./39.js");
var g = require("./4383.js");
var C = require("./169.js");
var _ = require("./26.js");
var m = require("./4.js");
var f = require("./24.js");
var O = require("./880.js");
var E = require("./8.js");
var y = function (e) {
  function CastleArtifactBuyPieceDialog() {
    return e.call(this, CastleArtifactBuyPieceDialog.NAME) || this;
  }
  n.__extends(CastleArtifactBuyPieceDialog, e);
  CastleArtifactBuyPieceDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok]);
    this.dialogDisp.info_cost.mouseChildren = false;
    this.dialogDisp.info_cost.toolTipText = h.ClientConstTextIds.C2;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new u.LocalizedTextVO("dialog_artifact_" + this.dialogProperties.artifactEventVO.skinID + "_buy_desc"));
    this.itxt_value = this.textFieldManager.registerTextField(this.dialogDisp.info_cost.txt_value, new c.LocalizedNumberVO(0));
    this._amoutPicker = new O.TextPicker(this.dialogDisp.pick_amount);
    this._amoutPicker.setNumItems(this.dialogProperties.artifactEventVO.missingParts);
    this._amoutPicker.selectedValue = 0;
    this.setAmount(this.piecesToBuy);
    this._amoutPicker.buttonsVisible = this.dialogProperties.artifactEventVO.missingParts > 1;
    this.dialogDisp.addEventListener(C.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onChangeAmount));
    m.CastleModel.specialEventData.addEventListener(_.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    m.CastleModel.specialEventData.addEventListener(_.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this.initArtifact();
    this.dialogDisp.mc_decoration.gotoAndStop(this.dialogProperties.artifactEventVO.skinID);
  };
  CastleArtifactBuyPieceDialog.prototype.initArtifact = function () {
    var e;
    s.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_piece);
    var t = this.dialogProperties.artifactEventVO.artifactClassName + "_Piece_External";
    var i = l.getDefinitionByName("LoadingAnimation");
    e = new f.CastleGoodgameExternalClip(t, this.artifctAssetFileURL, null, 0, false, i);
    var n = new a.ClipSizeComponent(100, 100);
    n.clipSizeChanged.add(CastleArtifactBuyPieceDialog.onClipSizeChanged);
    e.clipSizeComponent = n;
    this.dialogDisp.mc_piece.addChild(e.asDisplayObject());
  };
  CastleArtifactBuyPieceDialog.onClipSizeChanged = function (e) {
    var t = e.asDisplayObject();
    t.x = e.clipSizeComponent.offsetX;
    t.y = e.clipSizeComponent.offsetY;
  };
  CastleArtifactBuyPieceDialog.prototype.onRemoveEvent = function (e) {
    if (e.specialEventVO.eventId == this.dialogProperties.artifactEventVO.eventId) {
      this.hide();
    }
  };
  CastleArtifactBuyPieceDialog.prototype.onChangeAmount = function (e) {
    this.setAmount(this.piecesToBuy);
  };
  CastleArtifactBuyPieceDialog.prototype.setAmount = function (e) {
    var t = d.int(m.CastleModel.costsData.getFinalCostsC2(this.dialogProperties.artifactEventVO.artifactPartCosts * e));
    this.itxt_value.textContentVO.numberValue = t;
    this.itxt_value.color = t <= m.CastleModel.currencyData.c2Amount ? p.ClientConstColor.FONT_DEFAULT_COLOR : p.ClientConstColor.FONT_INSUFFICIENT_COLOR;
  };
  Object.defineProperty(CastleArtifactBuyPieceDialog.prototype, "piecesToBuy", {
    get: function () {
      return this._amoutPicker.selectedValue + 1;
    },
    enumerable: true,
    configurable: true
  });
  CastleArtifactBuyPieceDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (E.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          m.CastleModel.smartfoxClient.sendCommandVO(new g.C2SBuyArtifactPieceVO(this.piecesToBuy, this.dialogProperties.artifactEventVO.eventId, this.dialogProperties.artifactEventVO.kingdomIDs[0]));
          this.hide();
      }
    }
  };
  CastleArtifactBuyPieceDialog.prototype.hideLoaded = function (t = null) {
    this.dialogDisp.removeEventListener(C.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onChangeAmount));
    m.CastleModel.specialEventData.removeEventListener(_.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    m.CastleModel.specialEventData.removeEventListener(_.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this._amoutPicker.dispose();
    e.prototype.hideLoaded.call(this, t);
  };
  Object.defineProperty(CastleArtifactBuyPieceDialog.prototype, "artifctAssetFileURL", {
    get: function () {
      return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.dialogProperties.artifactEventVO.artifactClassName);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleArtifactBuyPieceDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleArtifactBuyPieceDialog.NAME = "CastleArtifactBuyPieceEx";
  return CastleArtifactBuyPieceDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleArtifactBuyPieceDialog = y;
r.classImplementsInterfaces(y, "ICollectableRendererList");