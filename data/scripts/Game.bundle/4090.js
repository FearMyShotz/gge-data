Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./5.js");
var p = require("./5.js");
var h = require("./5.js");
var g = require("./5.js");
var C = require("./3.js");
var _ = require("./3.js");
var m = require("./3.js");
var f = require("./6.js");
var O = require("./37.js");
var E = require("./21.js");
var y = require("./30.js");
var b = require("./15.js");
var D = require("./4.js");
var I = require("./27.js");
var T = require("./68.js");
var v = require("./43.js");
var S = require("./149.js");
var A = require("./136.js");
var L = require("./93.js");
var P = require("./215.js");
var M = require("./235.js");
var R = require("./187.js");
var V = require("./8.js");
var x = createjs.MovieClip;
var w = function (e) {
  function WorldMapInfoLayer(t, i) {
    var n = this;
    n._playerInfoCreationTime = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t) || this)._parentPanel = i;
    return n;
  }
  n.__extends(WorldMapInfoLayer, e);
  Object.defineProperty(WorldMapInfoLayer.prototype, "textFieldManager", {
    get: function () {
      return s.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapInfoLayer.prototype, "layoutManager", {
    get: function () {
      return F.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapInfoLayer.prototype, "playerInfoLayer", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  WorldMapInfoLayer.prototype.init = function () {
    e.prototype.init.call(this);
    this.itxt_coordinates = this.textFieldManager.registerTextField(this.playerInfoLayer.mc_coordinates.txt_coordinate, new m.LocalizedTextVO(""));
    this.itxt_noobProtectionTime = this.textFieldManager.registerTextField(this.playerInfoLayer.mc_noobProtection.txt_label, new C.TextVO(""));
  };
  WorldMapInfoLayer.prototype.hide = function () {
    e.prototype.hide.call(this);
    D.CastleModel.timerData.removeEventListener(E.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    b.CastleBasicController.getInstance().removeEventListener(O.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onGAAArrived));
  };
  WorldMapInfoLayer.prototype.setMapObjectInfo = function (e) {
    D.CastleModel.timerData.removeEventListener(E.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    b.CastleBasicController.getInstance().addEventListener(O.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onGAAArrived));
    this.parsePlayerInfo(e);
  };
  WorldMapInfoLayer.prototype.onGAAArrived = function (e) {
    this.updatePlayerInfo();
    b.CastleBasicController.getInstance().removeEventListener(O.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onGAAArrived));
  };
  WorldMapInfoLayer.prototype.parsePlayerInfo = function (e) {
    this._mapObject = e;
    var t = this.getCreatorByKingdomID(e.worldmapObjectVO.kingdomID);
    t.createWorldMapInfo(e.worldmapObjectVO);
    this._playerInfo = t.worldMapInfo;
    this._playerInfoCreationTime = f.int(y.CachedTimer.getCachedTimer());
    this.updatePlayerInfo();
  };
  WorldMapInfoLayer.prototype.updatePlayerInfo = function () {
    if (this._mapObject && this._playerInfo) {
      this.fillBasicInfo();
      if (D.CastleModel.kingdomData.activeKingdomID == h.WorldIsland.KINGDOM_ID && W.instanceOfClass(this._mapObject, "ResourceIsleMapobject")) {
        this.fillIslandKingdomInfo();
      } else if (W.instanceOfClass(this._mapObject, "MonumentMapobject")) {
        this.fillMonumentInfo();
      } else if (W.instanceOfClass(this._mapObject, "LaboratoryMapobject")) {
        this.fillLaboratoryInfo();
      } else {
        this.playerInfoLayer.mc_ressi.visible = false;
      }
      if (W.instanceOfClass(this._mapObject, "ABGAllianceTowerMapobject")) {
        this.fillABGAllianceTowerInfo();
      } else if (this._allianceCrestContainer) {
        l.MovieClipHelper.clearMovieClip(this._allianceCrestContainer);
        this._allianceCrestContainer.visible = false;
      }
      if (this._playerInfo.isProtected) {
        this.fillProtectedPlayerInfo();
      } else {
        this.fillUnprotectedPlayerInfo();
      }
      this.playerInfoLayer.btn_allianceName.visible = this._playerInfo.isInAlliance;
      if (this._playerInfo.isInAlliance) {
        this.fillAlliancePlayerInfo();
      }
      this._parentPanel.updateCache();
    }
  };
  WorldMapInfoLayer.prototype.fillBasicInfo = function () {
    this.playerInfoLayer.mc_ressi.mouseChildren = false;
    var e = this.textFieldManager.registerTextField(this.playerInfoLayer.txt_castleName, this._playerInfo.castleNameTextVO);
    this.textFieldManager.registerTextField(this.playerInfoLayer.txt_level, this._playerInfo.levelTextVO);
    var t = this.textFieldManager.registerTextField(this.playerInfoLayer.btn_playerName.txt_label, this._playerInfo.playerNameTextVO);
    this.playerInfoLayer.btn_playerName.enableButton = this._playerInfo.isPlayerClickAble;
    if (this.playerInfoLayer.btn_playerName.cacheCanvas) {
      this.playerInfoLayer.btn_playerName.updateCache();
    }
    G.CrestHelper.setCrestGraphics(this.playerInfoLayer.mc_playercrest, this._playerInfo.crestVO, null, true);
    this.playerInfoLayer.btn_playerName.visible = true;
    this.playerInfoLayer.mc_playercrest.visible = true;
    try {
      e.autoFitToBounds = true;
      t.autoFitToBounds = true;
    } catch (e) {
      r.debug(e.stack);
    }
  };
  WorldMapInfoLayer.prototype.fillIslandKingdomInfo = function () {
    var e = 0;
    this.playerInfoLayer.mc_ressi.visible = true;
    var t = D.CastleModel.eilandData.getIsleBlueprint(this._mapObject.isleVO.isleID);
    var i = 0;
    switch (this._mapObject.isleVO.typeName) {
      case "Aquamarine":
        i = 9;
        e = t.fixedLootAquamarine;
        break;
      case "Stone":
        i = 2;
        e = t.fixedLootStone;
        break;
      case "Wood":
        i = 1;
        e = t.fixedLootWood;
        break;
      case "Food":
        i = 3;
        e = t.fixedLootFood;
    }
    t = D.CastleModel.eilandData.getIsleBlueprint(this._mapObject.isleVO.isleID);
    this.playerInfoLayer.mc_ressi.icon_ressi.gotoAndStop(i);
    this.textFieldManager.registerTextField(this.playerInfoLayer.mc_ressi.txt_ressiAmount, new _.LocalizedNumberVO(e));
    this.playerInfoLayer.mc_ressi.toolTipText = null;
  };
  WorldMapInfoLayer.prototype.fillMonumentInfo = function () {
    this.playerInfoLayer.mc_ressi.icon_ressi.gotoAndStop(10);
    this.textFieldManager.registerTextField(this.playerInfoLayer.mc_ressi.txt_ressiAmount, new m.LocalizedTextVO("value_percentage", [this._mapObject.worldmapObjectVO.landmarkBonus]));
    this.playerInfoLayer.mc_ressi.visible = true;
    this.playerInfoLayer.mc_ressi.toolTipText = "dialog_monument_fameMonuments_tooltip";
  };
  WorldMapInfoLayer.prototype.fillLaboratoryInfo = function () {
    var e = this._mapObject.worldmapObjectVO;
    var t = 0;
    var i = "dialog_laboratory_resourceBonus_tooltip";
    switch (D.CastleModel.kingdomData.activeKingdomID) {
      case u.WorldClassic.KINGDOM_ID:
        t = 11;
        i = "dialog_laboratory_EisenerzBonus_tooltip";
        break;
      case g.WorldIce.KINGDOM_ID:
        t = 6;
        i = "dialog_laboratory_coalBonus_tooltip";
        break;
      case c.WorldDessert.KINGDOM_ID:
        t = 7;
        i = "dialog_laboratory_oilBonus_tooltip";
        break;
      case p.WorldVolcano.KINGDOM_ID:
        t = 8;
        i = "dialog_laboratory_glasBonus_tooltip";
    }
    this.playerInfoLayer.mc_ressi.icon_ressi.gotoAndStop(t);
    this.textFieldManager.registerTextField(this.playerInfoLayer.mc_ressi.txt_ressiAmount, new m.LocalizedTextVO("value_percentage", [e.landmarkBonus]));
    this.playerInfoLayer.mc_ressi.visible = true;
    this.playerInfoLayer.mc_ressi.toolTipText = {
      t: i,
      p: [e.landmarkBonus]
    };
  };
  WorldMapInfoLayer.prototype.fillABGAllianceTowerInfo = function () {
    this.textFieldManager.registerTextField(this.playerInfoLayer.txt_level, new C.TextVO(""));
    this.playerInfoLayer.btn_playerName.visible = false;
    this.playerInfoLayer.mc_playercrest.visible = false;
    if (!this._allianceCrestContainer) {
      this._allianceCrestContainer = new x();
      this._allianceCrestContainer.x = this.playerInfoLayer.mc_playercrest.x;
      this._allianceCrestContainer.y = this.playerInfoLayer.mc_playercrest.y;
      this.playerInfoLayer.addChild(this._allianceCrestContainer);
    }
    this._allianceCrestContainer.visible = true;
    R.CastleAllianceCrestHelper.setCrestGraphics(this._allianceCrestContainer, this._mapObject.worldmapObjectVO.ownerInfo.allianceCrestVO, M.AllianceCrestSizeEnum.SIZE_MAP_INFO, P.AllianceCrestEnum.DEFAULT_CREST_SIMPLE);
  };
  WorldMapInfoLayer.prototype.fillProtectedPlayerInfo = function () {
    this.playerInfoLayer.mc_coordinates.visible = false;
    this.playerInfoLayer.mc_noobProtection.visible = true;
    if (this._mapObject.worldmapObjectVO.isOwnMapobject) {
      this.playerInfoLayer.mc_noobProtection.toolTipText = {
        t: "panel_attackWarning_noobProtection"
      };
    } else {
      this.playerInfoLayer.mc_noobProtection.toolTipText = {
        t: "panel_multiInfos_noobProtected"
      };
    }
    this.updateNoobTimeText();
    D.CastleModel.timerData.addEventListener(E.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    this.playerInfoLayer.mc_noobProtection.mouseChildren = false;
    this.playerInfoLayer.mc_noobProtection.enabled = false;
    this.playerInfoLayer.mc_noobProtection.useFilters(T.BitmapFilterHelper.NO_FILTER);
  };
  WorldMapInfoLayer.prototype.fillUnprotectedPlayerInfo = function () {
    if (this.playerInfoLayer && (this.playerInfoLayer.mc_coordinates && (this.playerInfoLayer.mc_coordinates.visible = true), this.playerInfoLayer.mc_noobProtection && (this.playerInfoLayer.mc_noobProtection.visible = false), this.itxt_coordinates && this.itxt_coordinates.textContentVO)) {
      try {
        this.itxt_coordinates.autoFitToBounds = true;
        this.itxt_coordinates.selectable = true;
      } catch (e) {
        r.debug(e.toString());
      }
      this.itxt_coordinates.textContentVO.textId = a.GenericTextIds.VALUE_COORDS;
      if (this._playerInfo) {
        this.itxt_coordinates.textContentVO.textReplacements = [this._playerInfo.xPos, this._playerInfo.yPos];
      }
    }
  };
  WorldMapInfoLayer.prototype.fillAlliancePlayerInfo = function () {
    this.playerInfoLayer.btn_allianceName.enableButton = this._playerInfo.isClanNameClickAble;
    this.textFieldManager.registerTextField(this.playerInfoLayer.btn_allianceName.txt_label, this._playerInfo.clanNameTextVO);
  };
  WorldMapInfoLayer.prototype.updateNoobTimeText = function () {
    if (this.itxt_noobProtectionTime && (!this.itxt_noobProtectionTime || this.itxt_noobProtectionTime.textContentVO)) {
      var e = f.int(this._playerInfo.remainingProtectionTime - (y.CachedTimer.getCachedTimer() - this._playerInfoCreationTime) / 1000);
      var t = I.CastleTimeStringHelper.getCantAttackTimeString(e);
      this.itxt_noobProtectionTime.textContentVO.stringValue = t;
      try {
        this.itxt_noobProtectionTime.autoFitToBounds = true;
      } catch (e) {
        r.debug(e.toString());
      }
      Y.CastleTextFieldHelper.restoreWidth(this.itxt_noobProtectionTime);
      this._parentPanel.updateCache();
    }
  };
  WorldMapInfoLayer.prototype.onTimerUpdate = function (e) {
    this.updateNoobTimeText();
  };
  WorldMapInfoLayer.prototype.getCreatorByKingdomID = function (e) {
    if (e == d.FactionConst.KINGDOM_ID) {
      return new j.FactionWorldMapObjectInfoCreator();
    } else {
      return new H.BaseWorldMapObjectInfoCreator();
    }
  };
  WorldMapInfoLayer.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (V.ButtonHelper.isButtonEnabled(t.target) && !D.CastleModel.tutorialData.isTutorialActive) {
      switch (t.target) {
        case this.playerInfoLayer.btn_allianceName:
          if (this._playerInfo.allianceID == D.CastleModel.userData.allianceID) {
            B.CastleDialogHandler.getInstance().registerDefaultDialogs(k.CastleAllianceDialog, new A.CastleAllianceDialogProperties());
          } else {
            B.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(N.CastleAllianceInfoDialog, new S.CastleAllianceInfoDialogProperties(this._playerInfo.allianceID), v.CastleDialogConsts.DIALOG_TYPE_SINGLE);
          }
          break;
        case this.playerInfoLayer.btn_playerName:
          B.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(U.CastlePlayerInfoDialog, new L.CastlePlayerInfoDialogProperties(this._playerInfo.playerID), v.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      }
    }
  };
  return WorldMapInfoLayer;
}(o.FlashUIComponent);
exports.WorldMapInfoLayer = w;
var B = require("./9.js");
var F = require("./17.js");
var N = require("./132.js");
var k = require("./125.js");
var U = require("./94.js");
var G = require("./61.js");
var H = require("./4091.js");
var j = require("./4092.js");
var W = require("./1.js");
var Y = require("./141.js");