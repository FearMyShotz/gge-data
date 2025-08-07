Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./279.js");
var h = require("./4.js");
var g = require("./180.js");
var C = require("./24.js");
var _ = require("./8.js");
var m = function (e) {
  function CastleKingdomCastleDetails(t, i, n) {
    var o = e.call(this, t) || this;
    o.onBack = i;
    _.ButtonHelper.initBasicButtons([o.subLayerDisp.btn_back, o.subLayerDisp.btn_previous, o.subLayerDisp.btn_next]);
    o.textFieldManager.registerTextField(o.subLayerDisp.btn_back.txt_value, new c.LocalizedTextVO("dialog_kingdomStart_prebuiltCastle_detailsDialog_backButton"));
    o.sublayers = new p.SublayerSwitcher(o.bindFunction(o.createSublayerParam));
    o.sublayers.add(CastleKingdomCastleDetails.SUBLAYER_UNLOCK_FOR_FREE, null, new E.UnlockPrebuiltCastleForFree(o.subLayerDisp.sublayer_unlockForFree, n));
    o.sublayers.add(CastleKingdomCastleDetails.SUBLAYER_UNLOCK_FOR_RESOURCES, null, new y.UnlockPrebuiltCastleForResourcesOrRubies(o.subLayerDisp.sublayer_unlockWithResources, n));
    o.sublayers.add(CastleKingdomCastleDetails.SUBLAYER_UNLOCK_FOR_C2, null, new b.UnlockPrebuiltCastleForRubies(o.subLayerDisp.sublayer_unlockWithRubies, n));
    o.txt_name = o.textFieldManager.registerTextField(o.subLayerDisp.txt_name, new c.LocalizedTextVO(""));
    o.txt_name.autoFitToBounds = true;
    o.txt_description = o.textFieldManager.registerTextField(o.subLayerDisp.txt_description, new u.TextVO(""));
    o.textScroll = new O.CastleTextScrollComponent(new g.CastleTextScrollVO(o.subLayerDisp.txt_description, o.subLayerDisp.btn_up, o.subLayerDisp.btn_down));
    return o;
  }
  n.__extends(CastleKingdomCastleDetails, e);
  CastleKingdomCastleDetails.prototype.createSublayerParam = function (e) {
    return h.CastleModel.prebuiltCastleData.getCastles(this.props.spaceId)[this.props.castleSelectionIndex];
  };
  CastleKingdomCastleDetails.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.props = t;
    this.update();
    this.textScroll.onShow();
    this.sublayers.show();
  };
  CastleKingdomCastleDetails.prototype.update = function () {
    var e = h.CastleModel.prebuiltCastleData.getCastles(this.props.spaceId);
    _.ButtonHelper.enableButton(this.subLayerDisp.btn_previous, this.findPreviousSelectableCastleIndex() != -1);
    _.ButtonHelper.enableButton(this.subLayerDisp.btn_next, this.findNextSelectableCastleIndex() != -1);
    var t = e[this.props.castleSelectionIndex];
    this.txt_name.textContentVO.textId = "dialog_prebuiltCastle" + t.id + "_name";
    a.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_picture);
    var i = "PrebuiltCastlePicture_" + t.id;
    var n = new C.CastleGoodgameExternalClip(i, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(i));
    this.subLayerDisp.mc_picture.addChild(n.asDisplayObject());
    this.switchToSublayerAndUpdate(t);
  };
  CastleKingdomCastleDetails.prototype.switchToSublayerAndUpdate = function (e) {
    var t = d.int(CastleKingdomCastleDetails.getSublayerForCastle(e));
    var i = this.sublayers.activeTab;
    var n = this.sublayers.getSublayerByID(t);
    if (t != i) {
      this.sublayers.switchTo(t);
    } else {
      n.update(e);
    }
    var o = "dialog_prebuiltCastle_" + n.unlockTypeTextId + e.textIdName() + "_description";
    var a = CastleKingdomCastleDetails.getCastleContentsText(e);
    this.txt_description.textContentVO.stringValue = l.Localize.text(o, [a]);
  };
  CastleKingdomCastleDetails.prototype.findNextSelectableCastleIndex = function () {
    for (var e = h.CastleModel.prebuiltCastleData.getCastles(this.props.spaceId), t = this.props.castleSelectionIndex + 1; t < e.length; ++t) {
      if (e[t].minLevel <= h.CastleModel.userData.level) {
        return t;
      }
    }
    return -1;
  };
  CastleKingdomCastleDetails.prototype.findPreviousSelectableCastleIndex = function () {
    var e = h.CastleModel.prebuiltCastleData.getCastles(this.props.spaceId);
    for (var t = this.props.castleSelectionIndex - 1; t >= 0; --t) {
      if (e[t].minLevel <= h.CastleModel.userData.level) {
        return t;
      }
    }
    return -1;
  };
  CastleKingdomCastleDetails.prototype.showHelp = function () {
    f.CastleDialogHandler.getInstance().showHelper("", l.Localize.text("help_prebuiltCastle_detailsDialog_" + this.props.name));
  };
  CastleKingdomCastleDetails.getCastleContentsText = function (e) {
    var t = new s.StringBuffer();
    for (var i = 0; i < e.buildings.length; i++) {
      var n = e.buildings[i];
      if (n !== undefined) {
        var o = n.buildingVO;
        t.append(n.amount + "x ");
        t.append(l.Localize.text(o.getNameString()));
        if (o.level > 1 || o.hasUpgrade) {
          t.append(" " + l.Localize.text("building_level", [o.level]));
        }
        if (i < e.buildings.length - 1) {
          t.append("\n");
        }
      }
    }
    return t.toString();
  };
  CastleKingdomCastleDetails.getSublayerForCastle = function (e) {
    if (e.isPremium()) {
      return CastleKingdomCastleDetails.SUBLAYER_UNLOCK_FOR_C2;
    } else if (e.isFree()) {
      return CastleKingdomCastleDetails.SUBLAYER_UNLOCK_FOR_FREE;
    } else {
      return CastleKingdomCastleDetails.SUBLAYER_UNLOCK_FOR_RESOURCES;
    }
  };
  CastleKingdomCastleDetails.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.textScroll.onHide();
    this.sublayers.hide();
  };
  CastleKingdomCastleDetails.prototype.onClick = function (e) {
    if (_.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.subLayerDisp.btn_back:
          this.onBack(this.props.castleSelectionIndex);
          break;
        case this.subLayerDisp.btn_previous:
          this.props.castleSelectionIndex = this.findPreviousSelectableCastleIndex();
          this.update();
          break;
        case this.subLayerDisp.btn_next:
          this.props.castleSelectionIndex = this.findNextSelectableCastleIndex();
          this.update();
      }
    }
  };
  CastleKingdomCastleDetails.SUBLAYER_UNLOCK_FOR_FREE = 0;
  CastleKingdomCastleDetails.SUBLAYER_UNLOCK_FOR_RESOURCES = 1;
  CastleKingdomCastleDetails.SUBLAYER_UNLOCK_FOR_C2 = 2;
  return CastleKingdomCastleDetails;
}(require("./34.js").CastleDialogSubLayer);
exports.CastleKingdomCastleDetails = m;
var f = require("./9.js");
var O = require("./182.js");
var E = require("./3688.js");
var y = require("./3691.js");
var b = require("./1758.js");
r.classImplementsInterfaces(m, "ICollectableRendererList", "ISublayer");