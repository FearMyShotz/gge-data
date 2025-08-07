Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./1.js");
var r = require("./122.js");
var l = require("./53.js");
var c = require("./4.js");
var u = function (e) {
  function CastleLayoutIso() {
    var t = this;
    t._openEventPanelFlag = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(CastleLayoutIso, e);
  CastleLayoutIso.prototype.setLayout = function (t, i) {
    this._context = t;
    e.prototype.setLayout.call(this, t, i);
    if (!t.isScreenActive(I.CastleIsoScreen)) {
      t.changeScreen(I.CastleIsoScreen, null);
    }
    this.addPanels();
    this._context = null;
  };
  CastleLayoutIso.prototype.addPanels = function () {
    var e = this.getAreaData();
    if (l.ABGHelper.isOnABGAndCollector && e.areaInfo.areaType == a.WorldConst.AREA_TYPE_METROPOL && e.isMyArea) {
      this.context.showPanelRedirecter(p.ABGAllianceCollectorPointDepletionInfoPanel, null, false);
    }
    if (l.ABGHelper.isOnABGAndCollector && e.isMyArea) {
      this.context.showPanelRedirecter(h.ABGAllianceCollectorPointPanel, null, false);
    }
    if (l.ABGHelper.isOnABGAndTower) {
      this.context.showPanelRedirecter(g.ABGAllianceTowerPanel, null, false);
      this.context.showPanelRedirecter(C.ABGAllianceTowerPointMalusInfoPanel, null, false);
    }
    if (e.areaInfo.areaType == a.WorldConst.AREA_TYPE_TREASURE_CAMP) {
      if (this.isInBuildMode()) {
        this.setByMyTreasureCampBuildMode();
      } else {
        this.setByMyTreasureCamp();
      }
    } else if (e.isMyArea) {
      if (e.isUnderConquerProcess) {
        this.setByOtherCastle();
      } else if (this.isInBuildMode()) {
        this.setByMyCastleBuildMode();
      } else {
        this.setByMyCastle();
      }
    } else if (e.isUnderConquerProcessByMe) {
      this.setByOccupiedCastle();
    } else {
      this.setByOtherCastle();
    }
  };
  CastleLayoutIso.prototype.setByMyCastle = function () {
    o.BasicDialogHandler.getInstance().blockDialogs = false;
    this.context.showPanelRedirecter(f.CastleBuildingListPanel, null, false);
    this.context.showPanelRedirecter(f.CastleBuildingListPanel, null, true);
    this.addCorrectResourcePanel(this.context);
    this.context.showPanelRedirecter(E.CastleOptionPanel, null, true);
    this.context.addTutorialPanel();
    this.context.dialogCastleSwitch = false;
    this.context.showPanelRedirecter(_.CastleActionPanel, null, false);
  };
  CastleLayoutIso.prototype.setByMyTreasureCamp = function () {
    this.context.showPanelRedirecter(f.CastleBuildingListPanel, null, false);
    this.context.showPanelRedirecter(f.CastleBuildingListPanel, null, true);
    this.context.showPanelRedirecter(D.CastleResourcePanel_Season, null, false);
    this.context.showPanelRedirecter(E.CastleOptionPanel, null, true);
    this.context.showPanelRedirecter(m.CastleSeasonEventActionPanel, null, false);
  };
  CastleLayoutIso.prototype.setByOtherCastle = function () {
    this.setByOccupiedCastle();
    this.context.addTutorialPanel();
  };
  CastleLayoutIso.prototype.setByOccupiedCastle = function () {
    o.BasicDialogHandler.getInstance().blockDialogs = false;
    this.context.showPanelRedirecter(y.CastleOtherPlayerInfoPanel, null, false);
    this.context.showPanelRedirecter(_.CastleActionPanel, null, false);
  };
  CastleLayoutIso.prototype.setByMyCastleBuildMode = function () {
    o.BasicDialogHandler.getInstance().blockDialogs = false;
    this.context.showPanelRedirecter(f.CastleBuildingListPanel, null, false);
    this.context.showPanelRedirecter(f.CastleBuildingListPanel, null, true);
    this.context.showPanelRedirecter(E.CastleOptionPanel, null, true);
    this.addCorrectResourcePanel(this.context);
    this.context.addTutorialPanel();
    if (this.openEventPanelFlag) {
      this.context.showPanelRedirecter(b.CastleEventBuildingPanel, this.eventBuildingPanelProperties, true);
    } else {
      var e = c.CastleModel.tutorialData;
      if (!e.isInTutorial || !s.MobileHelper.isScreenTooSmall() || e.currentTutorialCommand !== "expandCastle") {
        this.context.showPanelRedirecter(O.CastleDecoShopPanel, null, true);
      }
    }
    this.context.showPanelRedirecter(_.CastleActionPanel, null, false);
  };
  CastleLayoutIso.prototype.setByMyTreasureCampBuildMode = function () {
    this.context.showPanelRedirecter(f.CastleBuildingListPanel, null, false);
    this.context.showPanelRedirecter(f.CastleBuildingListPanel, null, true);
    this.context.showPanelRedirecter(E.CastleOptionPanel, null, true);
    this.context.showPanelRedirecter(D.CastleResourcePanel_Season, null, false);
    this.context.hidePanel(m.CastleSeasonEventActionPanel);
    this.context.showPanelRedirecter(O.CastleDecoShopPanel, null, true);
  };
  CastleLayoutIso.prototype.getAreaData = function () {
    return c.CastleModel.areaData.activeArea;
  };
  CastleLayoutIso.prototype.isInBuildMode = function () {
    return d.Iso.renderer.strategies.currentStrategy.isActive(r.IsoRenderStrategyEnum.BUILD_MODE);
  };
  Object.defineProperty(CastleLayoutIso.prototype, "context", {
    get: function () {
      return this._context;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutIso.prototype, "eventBuildingPanelProperties", {
    get: function () {
      return this._eventBuildingPanelProperties;
    },
    set: function (e) {
      this._eventBuildingPanelProperties = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutIso.prototype, "openEventPanelFlag", {
    get: function () {
      return this._openEventPanelFlag;
    },
    set: function (e) {
      this._openEventPanelFlag = e;
    },
    enumerable: true,
    configurable: true
  });
  return CastleLayoutIso;
}(require("./1819.js").CastleBasicLayout);
exports.CastleLayoutIso = u;
var d = require("./34.js");
var p = require("./4096.js");
var h = require("./1853.js");
var g = require("./1854.js");
var C = require("./1855.js");
var _ = require("./559.js");
var m = require("./1862.js");
var f = require("./1863.js");
var O = require("./260.js");
var E = require("./515.js");
var y = require("./4137.js");
var b = require("./4138.js");
var D = require("./1818.js");
var I = require("./1865.js");