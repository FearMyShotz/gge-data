Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./5.js");
var d = require("./5.js");
var p = require("./5.js");
var h = require("./3.js");
var g = require("./6.js");
var C = require("./1330.js");
var _ = require("./183.js");
var m = require("./44.js");
var f = require("./4.js");
var O = require("./307.js");
var E = require("./8.js");
var y = require("./41.js");
var b = require("./11.js");
var D = require("./2356.js");
var I = createjs.MovieClip;
var T = createjs.Event;
var v = function (e) {
  function CastleTreasureMapDialog() {
    var t = this;
    t.currentDisplayedMapId = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleTreasureMapDialog.NAME) || this;
  }
  n.__extends(CastleTreasureMapDialog, e);
  CastleTreasureMapDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_buyPieces, this.dialogDisp.btn_close]);
    this.loadTreasuremap();
  };
  CastleTreasureMapDialog.prototype.loadTreasuremap = function () {
    this.partsLoadingItem = o.BasicModel.basicLoaderData.loadVersionedItemAsset(CastleTreasureMapDialog.TREASUREMAP_PARTS);
    if (this.partsLoadingItem._isLoaded) {
      this.onPartsLoaded();
    } else {
      this.partsLoadingItem.addEventListener(T.COMPLETE, this.bindFunction(this.onPartsLoaded));
    }
  };
  CastleTreasureMapDialog.prototype.onPartsLoaded = function () {
    this.loadMap();
  };
  CastleTreasureMapDialog.prototype.loadMap = function () {
    var e = f.CastleModel.treasureHuntData.treasureHuntMapVO;
    if (e) {
      this.loadingMap = o.BasicModel.basicLoaderData.loadVersionedItemAsset(P.WorldmapObjectIconHelper.generateTreasureMapAssetName(e.mapID));
      if (this.loadingMap.isLoaded) {
        this.onMapLoaded();
      } else {
        a.MovieClipHelper.clearMovieClip(this.dialogDisp.mapLayer);
        if (this.itxt_mapName && this.itxt_mapDesc) {
          this.textFieldManager.unregisterTextFieldByReference(this.itxt_mapName);
          this.textFieldManager.unregisterTextFieldByReference(this.itxt_mapDesc);
        }
        this.loadingMap.addEventListener(T.COMPLETE, this.bindFunction(this.onMapLoaded));
      }
    }
  };
  CastleTreasureMapDialog.prototype.onMapLoaded = function (e = null) {
    if (this.loadingMap.isLoaded && this.partsLoadingItem.isLoaded) {
      this.createMap();
      this.currentDisplayedMapId = g.int(f.CastleModel.treasureHuntData.currentMapID);
      this.dialogDisp.txt_mapName.defaultCacheScale = 2;
      this.dialogDisp.txt_mapDesc.defaultCacheScale = 2;
      this.itxt_mapName = this.textFieldManager.registerTextField(this.dialogDisp.txt_mapName, new h.LocalizedTextVO("treasuremap_chest_" + f.CastleModel.treasureHuntData.currentMapID + "_title"));
      this.itxt_mapDesc = this.textFieldManager.registerTextField(this.dialogDisp.txt_mapDesc, new h.LocalizedTextVO("treasuremap_chest_" + f.CastleModel.treasureHuntData.currentMapID + "_copy"));
    }
  };
  CastleTreasureMapDialog.prototype.createMap = function () {
    this.mapIdPieces = this.treasureMapVO.getShuffledPieces();
    this.mapPieces = Array(this.mapIdPieces.length).fill(null);
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.mapLayer);
    var e = new I();
    this._missingPartClass = r.getDefinitionByName("TreasureMapMissingPartInfo");
    var t = a.MovieClipHelper.getMovieClipByClassName("TreasureMapType" + this.treasureMapVO.mapType + "_MissingParts");
    e.addChild(t);
    for (var i = 0, n = t.children; i < n.length; i++) {
      var o = n[i];
      if (c.instanceOfClass(o, l.getQualifiedClassName(this._missingPartClass))) {
        o.toolTipText = this.getToolTipTextID();
        o.actLikeButton = true;
        o.mouseChildren = false;
        y.CastleMovieClipHelper.createHitArea(o);
      }
    }
    var s = a.MovieClipHelper.getMovieClipByClassName("TreasureMap_" + this.treasureMapVO.mapID);
    e.addChild(s);
    var u = a.MovieClipHelper.getMovieClipByClassName("TreasureMapType" + this.treasureMapVO.mapType + "_Detail");
    u.mouseEnabled = true;
    s.addChild(u);
    this.maskLayer = new I();
    s.addChild(this.maskLayer);
    s.mask = this.maskLayer;
    var d = new I();
    e.addChild(d);
    if (this.castleTreasureMapRenderer) {
      this.castleTreasureMapRenderer.destroy();
    }
    this.castleTreasureMapRenderer = new A.CastleTreasureMapRenderer();
    this.castleTreasureMapRenderer.init(s, d);
    this.castleTreasureMapRenderer.setMapActivity = this.treasureMapVO.hasAllPieces;
    this.dialogDisp.mapLayer.addChild(e);
    this.maskLayer.addChild(new createjs.MovieClip());
    this.updatePiecesFound();
  };
  CastleTreasureMapDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.updateBuyPieceButton();
    this.setRewardIcon();
  };
  CastleTreasureMapDialog.prototype.updateBuyPieceButton = function () {
    this.dialogDisp.btn_buyPieces.visible = !this.treasureMapVO.hasAllPieces;
  };
  CastleTreasureMapDialog.prototype.setRewardIcon = function () {
    this.decoObject = this.treasureMapVO.endNodeRewards()[0].getItemByType(S.CollectableEnum.BUILDING).buildingVO;
    L.WodPicHelper.addWodPic(this.decoObject, this.dialogDisp.mc_reward.mc_placeHolder, 100, 100);
    this.dialogDisp.mc_reward.mc_placeHolder.mouseChildren = false;
  };
  CastleTreasureMapDialog.prototype.onTreasureHuntDataUpdated = function (e) {
    this.loadTreasuremap();
  };
  CastleTreasureMapDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    f.CastleModel.treasureMapData.addEventListener(_.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onTreasureMapDataUpdated));
    f.CastleModel.treasureHuntData.addEventListener(C.CastleTreasureHuntEvent.TREASURE_HUNT_INFO_UPDATED, this.bindFunction(this.onTreasureHuntDataUpdated));
  };
  CastleTreasureMapDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    f.CastleModel.treasureMapData.removeEventListener(_.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onTreasureMapDataUpdated));
    f.CastleModel.treasureHuntData.removeEventListener(C.CastleTreasureHuntEvent.TREASURE_HUNT_INFO_UPDATED, this.bindFunction(this.onTreasureHuntDataUpdated));
  };
  CastleTreasureMapDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (f.CastleModel.kingdomData.isKingdomUnlocked(this.treasureMapVO.kingdomID) && f.CastleModel.userData.castleList.getMainCastleByKingdomID(this.treasureMapVO.kingdomID) != null) {
      E.ButtonHelper.enableButton(this.dialogDisp.btn_buyPieces, true);
      this.dialogDisp.btn_buyPieces.toolTipText = "dialog_treasureMap_buyPieces";
    } else {
      E.ButtonHelper.enableButton(this.dialogDisp.btn_buyPieces, false);
      this.dialogDisp.btn_buyPieces.toolTipText = this.getToolTipTextID();
    }
    this.loadTreasuremap();
  };
  CastleTreasureMapDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    if (this.castleTreasureMapRenderer) {
      this.castleTreasureMapRenderer.destroy();
    }
  };
  CastleTreasureMapDialog.prototype.onTreasureMapDataUpdated = function (e) {
    if (e && e.treasureMapVO && e.treasureMapVO.mapID == f.CastleModel.treasureHuntData.currentMapID) {
      var t = e.treasureMapVO;
      if (t.progressType == u.TreasureMapsConst.PROGRESS_DESTROYED_END_NODE || t.progressType == u.TreasureMapsConst.PROGRESS_NEW_MAP) {
        this.hide();
      } else {
        this.updateBuyPieceButton();
        this.updatePiecesFound();
        this.castleTreasureMapRenderer.setMapActivity = t.hasAllPieces;
      }
    }
  };
  CastleTreasureMapDialog.prototype.onClick = function (t) {
    if (E.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_buyPieces:
          if (f.CastleModel.kingdomData.isKingdomUnlocked(this.treasureMapVO.kingdomID)) {
            b.CastleExternalDialog.dialogHandler.registerDefaultDialogs(M.CastleTreasureBuyPieceDialog, new D.CastleTreasureBuyPieceDialogProperties(this.treasureMapVO));
          }
          break;
        default:
          if (c.instanceOfClass(t.target, l.getQualifiedClassName(this._missingPartClass))) {
            if (!f.CastleModel.kingdomData.isKingdomUnlocked(this.treasureMapVO.kingdomID) || !E.ButtonHelper.isButtonEnabled(this.dialogDisp.btn_buyPieces)) {
              return;
            }
            b.CastleExternalDialog.dialogHandler.registerDefaultDialogs(M.CastleTreasureBuyPieceDialog, new D.CastleTreasureBuyPieceDialogProperties(this.treasureMapVO));
          }
      }
    }
  };
  CastleTreasureMapDialog.prototype.onMouseOver = function (t) {
    if (t.target == this.dialogDisp.mc_reward.mc_placeHolder) {
      O.DecoBuildingToolTipManager.showToolTip(t.target, this.decoObject, 0, -20);
    }
    if (this._missingPartClass != null) {
      if (t.target instanceof this._missingPartClass) {
        var i = t.target;
        i.toolTipText = this.getToolTipTextID();
        i.actLikeButton = true;
      }
      e.prototype.onMouseOver.call(this, t);
    }
  };
  CastleTreasureMapDialog.prototype.getToolTipTextID = function () {
    var e = m.SpecialServerHelper.checkTextIDForSkinText("dialog_treasureMap_PieceTooltip");
    var t = "dialog_treasureMap_unlockReal";
    switch (this.treasureMapVO.kingdomID) {
      case p.WorldIce.KINGDOM_ID:
        t += "_icecream";
        e += "_ice";
        break;
      case d.WorldDessert.KINGDOM_ID:
        t += "_dessert";
        e += "_dessert";
    }
    var i = f.CastleModel.kingdomData.isKingdomUnlocked(this.treasureMapVO.kingdomID);
    var n = E.ButtonHelper.isButtonEnabled(this.dialogDisp.btn_buyPieces);
    if (i && n) {
      return e;
    } else {
      return t;
    }
  };
  CastleTreasureMapDialog.prototype.updatePiecesFound = function () {
    for (var e = 0; e < this.mapPieces.length; e++) {
      if (e + 1 <= this.treasureMapVO.piecesFound && !this.mapPieces[e]) {
        var t = a.MovieClipHelper.getMovieClipByClassName("TreasureMapType" + this.treasureMapVO.mapType + "_part" + this.mapIdPieces[e]);
        this.maskLayer.addChild(t);
        this.mapPieces[e] = t;
      } else if (this.mapPieces[e] && e + 1 > this.treasureMapVO.piecesFound) {
        this.maskLayer.removeChild(this.mapPieces[e]);
        this.mapPieces[e] = null;
      }
    }
  };
  CastleTreasureMapDialog.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      var e = 1;
      if (this.disp.stage.stageWidth < this.dispBounds.width || this.disp.stage.stageWidth > this.dispBounds.width) {
        e = this.disp.stage.stageWidth / this.dispBounds.width;
      }
      if (this.disp.stage.stageHeight < this.dispBounds.height * e) {
        e = this.disp.stage.stageHeight / this.dispBounds.height;
      }
      e = Math.min(e, 1.5);
      this.disp.x = -this.dispBounds.left * e - this.dispBounds.width * e / 2 + this.disp.stage.stageWidth / 2;
      this.disp.y = -this.dispBounds.top * e - this.dispBounds.height * e / 2 + this.disp.stage.stageHeight / 2;
      this.disp.scaleX = this.disp.scaleY = e;
    }
  };
  Object.defineProperty(CastleTreasureMapDialog.prototype, "treasureMapVO", {
    get: function () {
      return f.CastleModel.treasureHuntData.treasureHuntMapVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleTreasureMapDialog.NAME = "CastleTreasureMap";
  CastleTreasureMapDialog.TREASUREMAP_PARTS = "Treasuremap_Parts";
  return CastleTreasureMapDialog;
}(b.CastleExternalDialog);
exports.CastleTreasureMapDialog = v;
var S = require("./12.js");
var A = require("./2357.js");
var L = require("./63.js");
var P = require("./70.js");
var M = require("./2369.js");
s.classImplementsInterfaces(v, "ICollectableRendererList");