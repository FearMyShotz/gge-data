Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./5.js");
var u = require("./58.js");
var d = require("./32.js");
var p = require("./529.js");
var h = require("./4.js");
var g = require("./9.js");
var C = require("./24.js");
var _ = require("./3145.js");
var m = require("./135.js");
var f = require("./1489.js");
var O = require("./111.js");
var E = require("./122.js");
var y = require("./92.js");
var b = require("./490.js");
var D = createjs.Container;
var I = createjs.MovieClip;
var T = createjs.Point;
var v = function (e) {
  function CastleExpansionVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleExpansionVE, e);
  CastleExpansionVE.prototype.initElementContainer = function () {
    e.prototype.initElementContainer.call(this);
    this.elementContainer.mouseChildren = true;
  };
  CastleExpansionVE.prototype.addEventListener = function () {
    S.CastleComponent.controller.addEventListener(d.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    S.CastleComponent.controller.addEventListener(p.LegendSkillsDataEvent.LEGEND_SKILLS_UPDATED, this.bindFunction(this.onLegendSkillsUpdated));
    e.prototype.addEventListener.call(this);
  };
  CastleExpansionVE.prototype.removeEventListener = function () {
    S.CastleComponent.controller.removeEventListener(d.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    S.CastleComponent.controller.removeEventListener(p.LegendSkillsDataEvent.LEGEND_SKILLS_UPDATED, this.bindFunction(this.onLegendSkillsUpdated));
    e.prototype.removeEventListener.call(this);
  };
  CastleExpansionVE.prototype.destroyDisp = function () {
    S.CastleComponent.controller.dispatchEvent(new y.IsoEvent(y.IsoEvent.ON_EXPANSION_ARROW_REMOVED, [this]));
    if (this.externalClip && this.externalClip.clipLoaded) {
      this.externalClip.clipLoaded.removeAll();
    }
    e.prototype.destroyDisp.call(this);
  };
  CastleExpansionVE.prototype.updateDisp = function () {
    e.prototype.updateDisp.call(this);
    if (this.disp) {
      this.disp.mouseChildren = true;
    }
  };
  CastleExpansionVE.prototype.createDisp = function () {
    if (this.canShow) {
      var e = new D();
      var t = new D();
      this.objectLayer = new D();
      e.addChild(t);
      e.addChild(this.objectLayer);
      switch (this.vo.rotation) {
        case 0:
          this._expandArea = this.loadExpansion("ExpandArea_RightEx");
          this.loadExpansion("ExpandArrows_RightEx");
          break;
        case 1:
          this._expandArea = this.loadExpansion("ExpandArea_DownEx");
          this.loadExpansion("ExpandArrows_DownEx");
          break;
        case 2:
          this._expandArea = this.loadExpansion("ExpandArea_LeftEx");
          this.loadExpansion("ExpandArrows_LeftEx");
          break;
        case 3:
          this._expandArea = this.loadExpansion("ExpandArea_UpEx");
          this.loadExpansion("ExpandArrows_UpEx");
      }
      this._expandArea.visible = false;
      t.addChild(this._expandArea);
      this.dispComponent.addDisp(e);
    }
  };
  CastleExpansionVE.prototype.loadExpansion = function (e) {
    var t = a.BasicModel.basicLoaderData.getVersionedItemAssetUrl("ExpandionsEx");
    this.externalClip = new C.CastleGoodgameExternalClip(e, t, null, 0, false);
    if (this.externalClip.isLoaded) {
      this.arrowComplete(this.externalClip);
    } else {
      this.externalClip.clipLoaded.addOnce(this.bindFunction(this.arrowComplete));
    }
    return this.externalClip;
  };
  CastleExpansionVE.prototype.addFunctionOnWaitForLoadComplete = function (e) {
    if (this.externalClip) {
      if (this.externalClip.isLoaded) {
        this.arrowComplete(e);
      } else {
        this.externalClip.clipLoaded.addOnce(e);
      }
    }
  };
  CastleExpansionVE.prototype.arrowComplete = function (e) {
    if (e.currentshownDisplayObject instanceof I && e.currentshownDisplayObject.arrow_premium) {
      this._expandArrow = e.currentshownDisplayObject;
      var t = this.isoRenderer.camera.getScreenPosByGridPosDelta(new T(this.vo.rotatedWidth / 2, this.vo.rotatedHeight / 2));
      this._expandArrow.x = this._expandArea.x = t.x;
      this._expandArrow.y = this._expandArea.y = t.y;
      this.objectLayer.addChild(this._expandArrow);
      this._expandArrow.gotoAndStop(2);
      this.enableArrow(this._expandArrow.arrow_normal, this.expansionVO.userHasLevelForBuyNormal && !this.expansionVO.isSceatLocked);
      this.enableArrow(this._expandArrow.arrow_premium, this.expansionVO.userHasLevelForBuyPremium && !this.expansionVO.isSceatLocked);
      this._expandArrow.arrow_premium.visible = this._expandArrow.arrow_normal.visible = h.CastleModel.userData.userLevel >= u.ClientConstLevelRestrictions.MIN_LEVEL_EXPANSION_ARROWS && h.CastleModel.expansionCostsData.expansionAvailable();
      this._expandArrow.arrow_premium.visible = this._expandArrow.arrow_normal.visible && h.CastleModel.userData.userXP >= c.TutorialConst.LAST_TUTORIAL_STEP_XP && h.CastleModel.expansionCostsData.getExpandCostC2() > 0;
      this._expandArrow.arrow_normal.mouseChildren = false;
      this._expandArrow.arrow_premium.mouseChildren = false;
      this._expandArrow.arrow_normal.scaleX = this._expandArrow.arrow_normal.scaleY = 1;
      this._expandArrow.arrow_premium.scaleX = this._expandArrow.arrow_premium.scaleY = 1;
    }
  };
  CastleExpansionVE.prototype.enableArrow = function (e, t) {
    if (this._colorMatrix == null) {
      this._colorMatrix = new s.ColorMatrix();
      this._colorMatrix.desaturate();
    }
    if (t) {
      e.useFilters(null, true);
    } else {
      e.useFilters([this._colorMatrix.filter], true);
    }
    e.enabled = t;
  };
  Object.defineProperty(CastleExpansionVE.prototype, "canShow", {
    get: function () {
      return this.renderStrategy.currentStrategy.isActive(E.IsoRenderStrategyEnum.BUILD_MODE) && this.renderStrategy.currentStrategy.isActive(E.IsoRenderStrategyEnum.TRANSPARENT_DEFENCE_VIEW) && !!h.CastleModel.expansionCostsData.getCurrentExpansionCostsVO();
    },
    enumerable: true,
    configurable: true
  });
  CastleExpansionVE.prototype.getVELayerType = function () {
    return O.IsoLayerEnum.EXPAND_ARROWS;
  };
  Object.defineProperty(CastleExpansionVE.prototype, "isHoveringOverClickElement", {
    get: function () {
      return this._lastHoveredTarget != null;
    },
    set: function (e) {
      this._lastHoveredTarget.enabled = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExpansionVE.prototype, "uiDisp", {
    get: function () {
      return this._lastHoveredTarget;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(b.AInteractiveIsoObjectVE.prototype, "uiDisp").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExpansionVE.prototype, "uiPos", {
    get: function () {
      return new T(this._lastHoveredTarget.x, this._lastHoveredTarget.y);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(b.AInteractiveIsoObjectVE.prototype, "uiPos").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleExpansionVE.prototype.onMouseOut = function (e) {
    if (this._expandArea) {
      this._expandArea.visible = false;
      if (l.getQualifiedClassName(e.target).indexOf("ExpandArrow_") >= 0) {
        e.target.scaleX = e.target.scaleY = 1;
        S.CastleComponent.layoutManager.customCursor.setCursorType(o.BasicCustomCursor.CURSOR_ARROW);
        S.CastleComponent.layoutManager.hideIngameUIComponent(P.InfoTooltipExpansion);
        this._currentToolTipArrow = null;
        if (this.disp.cacheCanvas) {
          this.disp.updateCache();
        }
      }
    }
  };
  CastleExpansionVE.prototype.onMouseOver = function (e) {
    if (this._expandArea && l.getQualifiedClassName(e.target).indexOf("ExpandArrow_") >= 0) {
      this._expandArea.visible = true;
      this._lastHoveredTarget = e.target;
      var t = e.target;
      t.scaleX = t.scaleY = 1.04;
      this._currentToolTipArrow = t;
      if (this.disp.cacheCanvas) {
        this.disp.updateCache();
      }
      S.CastleComponent.layoutManager.customCursor.setCursorType(o.BasicCustomCursor.CURSOR_CLICK);
      S.CastleComponent.layoutManager.showIngameUIComponent(P.InfoTooltipExpansion, this);
    }
  };
  CastleExpansionVE.prototype.onMouseClick = function () {
    var e = l.getQualifiedClassName(this._lastHoveredTarget);
    if (this.expansionVO.isSceatLocked) {
      this.expansionVO.expansionType = f.IsoExpansionEnum.NORMAL;
      g.CastleDialogHandler.getInstance().registerDefaultDialogs(R.CastleMissingSceatSkillExpansionDialog);
      S.CastleComponent.layoutManager.hideIngameUIComponent(P.InfoTooltipExpansion);
    } else if (e.indexOf("ExpandArrow_Premium") >= 0 && this.expansionVO.userHasLevelForBuyPremium) {
      this.expansionVO.expansionType = f.IsoExpansionEnum.PREMIUM;
      if (this.expansionVO.userHasC2ForBuy) {
        S.CastleComponent.dialogHandler.registerDefaultDialogs(A.CastleExpansionDialog, new _.CastleExpansionDialogProperties(true, this.bindFunction(this.sendBuyRequestToServer)));
      } else {
        S.CastleComponent.dialogHandler.registerDefaultDialogs(L.CastleNoMoneyC2Dialog, new m.CastleNoMoneyC2DialogProperties());
      }
      S.CastleComponent.layoutManager.hideIngameUIComponent(P.InfoTooltipExpansion);
    } else if (e.indexOf("ExpandArrow_Normal") >= 0 && this.expansionVO.userHasLevelForBuyNormal) {
      this.expansionVO.expansionType = f.IsoExpansionEnum.NORMAL;
      if (this.expansionVO.userHasResourcesForBuy) {
        S.CastleComponent.dialogHandler.registerDefaultDialogs(A.CastleExpansionDialog, new _.CastleExpansionDialogProperties(false, this.bindFunction(this.sendBuyRequestToServer)));
      } else {
        this.sendBuyRequestToServer();
      }
      S.CastleComponent.layoutManager.hideIngameUIComponent(P.InfoTooltipExpansion);
    }
  };
  CastleExpansionVE.prototype.onLevelUp = function (e) {
    this.updateDisp();
  };
  CastleExpansionVE.prototype.onLegendSkillsUpdated = function (e) {
    this.updateDisp();
  };
  CastleExpansionVE.prototype.onRenderStrategyChanged = function (e) {
    this.updateDisp();
  };
  CastleExpansionVE.prototype.onAllDispClipsLoaded = function () {
    e.prototype.onAllDispClipsLoaded.call(this);
    S.CastleComponent.controller.dispatchEvent(new y.IsoEvent(y.IsoEvent.ON_EXPANSION_ARROW_ADDED, [this]));
  };
  CastleExpansionVE.prototype.sendBuyRequestToServer = function () {
    S.CastleComponent.layoutManager.hideAllIngameUIComponents();
    M.Iso.controller.server.buyExpansion(this.vo.pos, this.vo.rotation, this.expansionVO.expansionType);
    S.CastleComponent.controller.dispatchEvent(new y.IsoEvent(y.IsoEvent.ON_BUY_EXPANSION, [this.vo]));
  };
  Object.defineProperty(CastleExpansionVE.prototype, "expansionVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExpansionVE.prototype, "expandArrow", {
    get: function () {
      return this._expandArrow;
    },
    enumerable: true,
    configurable: true
  });
  return CastleExpansionVE;
}(b.AInteractiveIsoObjectVE);
exports.CastleExpansionVE = v;
var S = require("./14.js");
var A = require("./1605.js");
var L = require("./138.js");
var P = require("./3146.js");
var M = require("./34.js");
var R = require("./3147.js");
r.classImplementsInterfaces(v, "ICollectableRendererList", "IIngameUICapable");