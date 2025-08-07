Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./278.js");
var p = require("./21.js");
var h = require("./4.js");
var g = require("./24.js");
var C = require("./11.js");
var _ = require("./3685.js");
var m = function (e) {
  function ACastleHandleSpaceDialog() {
    return e.call(this, "CastleKingdom") || this;
  }
  n.__extends(ACastleHandleSpaceDialog, e);
  ACastleHandleSpaceDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.titleTextfield = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new c.TextVO(""));
    this.titleTextfield.autoFitToBounds = true;
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close]);
    this.sublayers = new d.SublayerSwitcher(this.bindFunction(this.getSublayerProperties));
    this.sublayers.addOnSwitchedListener(this.bindFunction(this.onShowSublayer));
    this.sublayers.add(ACastleHandleSpaceDialog.SUBLAYER_SELECT_CASTLE, null, new E.CastleKingdomSelectCastle(this.dialogDisp.sublayer_castleSelection, this.bindFunction(this.onCastleSelected)));
    this.sublayers.add(ACastleHandleSpaceDialog.SUBLAYER_CASTLE_DETAILS, null, new O.CastleKingdomCastleDetails(this.dialogDisp.sublayer_castleDetails, this.bindFunction(this.onBackToCastleSelection), h.CastleModel.kingdomData.tempTargetSpaceID));
  };
  ACastleHandleSpaceDialog.prototype.getSublayerProperties = function (e) {
    return this.selectionProperties;
  };
  ACastleHandleSpaceDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.selectionProperties = new _.PrebuiltCastleSelectionProperties();
    this.selectionProperties.spaceId = u.int(this.dialogProperties.getSpaceID());
    this.selectionProperties.name = this.dialogProperties.getName();
    this.showCurrentSublayer();
    this.updateBackgroundSkin();
    this.updateCrests();
    this.sublayers.show();
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.titleTextfield.textContentVO.stringValue = this.dialogProperties.getTitleString();
  };
  ACastleHandleSpaceDialog.prototype.updateBackgroundSkin = function () {
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_backgroundSkin);
    this.backgroundDisp = null;
    this.backgroundSkinClip = null;
    this.countdownTextfield = null;
    var e = this.dialogProperties.getBackgroundSkinClassName();
    this.backgroundSkinClip = new g.CastleGoodgameExternalClip(e, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e), null, 0, false);
    this.dialogDisp.mc_backgroundSkin.addChild(this.backgroundSkinClip.asDisplayObject());
    if (this.backgroundSkinClip.isLoaded) {
      this.onBackgroundSkinLoaded(this.backgroundSkinClip);
    } else {
      this.backgroundSkinClip.clipLoaded.addOnce(this.bindFunction(this.onBackgroundSkinLoaded));
    }
  };
  ACastleHandleSpaceDialog.prototype.updateBackgroundSkinElementsVisibility = function () {
    this.backgroundDisp.mc_btnBackground.visible = this.sublayers.activeTab == ACastleHandleSpaceDialog.SUBLAYER_SELECT_CASTLE;
    this.backgroundDisp.mc_banner.visible = this.sublayers.activeTab != ACastleHandleSpaceDialog.SUBLAYER_CASTLE_DETAILS;
  };
  ACastleHandleSpaceDialog.prototype.onBackgroundSkinLoaded = function (e) {
    this.backgroundDisp = e.currentshownDisplayObject;
    this.updateBackgroundSkinElementsVisibility();
    if (this.dialogProperties.hasTimer()) {
      this.countdownTextfield = this.textFieldManager.registerTextField(this.backgroundDisp.mc_time.txt_time, new c.TextVO(""));
      this.countdownTextfield.autoFitToBounds = true;
      h.CastleModel.timerData.addEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
      this.onTimer();
    }
  };
  ACastleHandleSpaceDialog.prototype.updateCrests = function () {
    f.CrestHelper.setCrestGraphics(this.dialogDisp.crest1, this.dialogProperties.getCrestLeft());
    f.CrestHelper.setCrestGraphics(this.dialogDisp.crest2, this.dialogProperties.getCrestRight());
  };
  ACastleHandleSpaceDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.sublayers.hide();
    if (this.backgroundSkinClip) {
      this.backgroundSkinClip.clipLoaded.removeAll();
    }
    h.CastleModel.timerData.removeEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  ACastleHandleSpaceDialog.prototype.onTimer = function (e = null) {
    var t = this.dialogProperties.getRemainingTime();
    this.countdownTextfield.textContentVO.stringValue = s.TimeStringHelper.getTimeToString(t, s.TimeStringHelper.TWO_TIME_FORMAT, l.Localize.text, false, true);
    if (t <= 0) {
      this.hide();
    }
  };
  ACastleHandleSpaceDialog.prototype.showCurrentSublayer = function () {
    if (this.dialogProperties.isUnlocked()) {
      this.sublayers.switchTo(ACastleHandleSpaceDialog.SUBLAYER_SUPPORT);
    } else {
      this.sublayers.switchTo(ACastleHandleSpaceDialog.SUBLAYER_SELECT_CASTLE);
    }
  };
  ACastleHandleSpaceDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        this.sublayers.showHelp();
    }
  };
  ACastleHandleSpaceDialog.prototype.onShowSublayer = function (e) {
    if (this.backgroundDisp) {
      this.updateBackgroundSkinElementsVisibility();
    }
  };
  ACastleHandleSpaceDialog.prototype.onCastleSelected = function (e) {
    this.selectionProperties.castleSelectionIndex = e;
    this.sublayers.switchTo(ACastleHandleSpaceDialog.SUBLAYER_CASTLE_DETAILS);
  };
  ACastleHandleSpaceDialog.prototype.onBackToCastleSelection = function (e) {
    this.selectionProperties.castleSelectionIndex = e;
    this.sublayers.switchTo(ACastleHandleSpaceDialog.SUBLAYER_SELECT_CASTLE);
  };
  Object.defineProperty(ACastleHandleSpaceDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  ACastleHandleSpaceDialog.SUBLAYER_SUPPORT = 0;
  ACastleHandleSpaceDialog.SUBLAYER_SELECT_CASTLE = 1;
  ACastleHandleSpaceDialog.SUBLAYER_CASTLE_DETAILS = 2;
  return ACastleHandleSpaceDialog;
}(C.CastleExternalDialog);
exports.ACastleHandleSpaceDialog = m;
var f = require("./61.js");
var O = require("./3686.js");
var E = require("./3691.js");
r.classImplementsInterfaces(m, "ICollectableRendererList");