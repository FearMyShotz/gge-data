Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./18.js");
var a = require("./58.js");
var s = require("./91.js");
var r = require("./37.js");
var l = require("./261.js");
var c = require("./32.js");
var u = require("./71.js");
var d = require("./80.js");
var p = require("./4.js");
var h = require("./68.js");
var g = require("./8.js");
var C = require("./41.js");
var _ = require("./131.js");
var m = require("./1.js");
var f = createjs.MouseEvent;
var O = function (e) {
  function CastleActionPanel() {
    var t = this;
    t._isActivePanel = false;
    t._touchMoved = false;
    CONSTRUCTOR_HACK;
    (t = e.call(this, new Library.CastleInterfaceElements.ActionPanel_Relicus()) || this)._touchDragHelper = new $.TouchScrollHelper();
    return t;
  }
  n.__extends(CastleActionPanel, e);
  CastleActionPanel.prototype.init = function () {
    e.prototype.init.call(this);
    this.actionPanel.mc_tax.comp_taxComponent.btn_tax.toolTipText = "panel_action_tax";
    this.actionPanel.mc_tax.comp_taxComponent.mc_taxTime.toolTipText = "panel_action_collecttime";
    this._taxComponent = new b.CastleTaxComponent(this.actionPanel.mc_tax.comp_taxComponent);
    this._castleList = new y.CastleListActionPanelComponent(this.actionPanel.mc_castleList, this.actionPanel.btn_jumpTo, this);
    this._buttons = new Z.PanelButtonsComponent(this.actionPanel.mc_buttons, Library.CastleInterfaceElements.ActionPanelButton);
    this.actionPanel.mc_buttons.mc_backgroundDeco.visible = false;
    if (m.MobileHelper.isScreenTooSmall()) {
      this.actionPanel.scaleX = this.actionPanel.scaleY = 0.8;
    }
  };
  CastleActionPanel.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this._castleList.destroy();
    this._buttons.destroy();
  };
  CastleActionPanel.prototype.show = function () {
    e.prototype.show.call(this);
    this._taxComponent.active = true;
    this.activatePanel();
    this._buttons.onShow();
    this.buildButtons();
    this.updateComponents();
    if (m.MobileHelper.isScreenTooSmall()) {
      this._touchDragHelper.setup(this.actionPanel);
      this.actionPanel.addEventListener(f.PRESS_MOVE, this.bindFunction(this.onPortraitPressMove));
    }
  };
  CastleActionPanel.prototype.hide = function () {
    this._taxComponent.active = false;
    this._buttons.onHide();
    if (this.layoutManager.isInMyCastleBuildMode) {
      this.deactivatePanel();
    } else {
      e.prototype.hide.call(this);
    }
    if (m.MobileHelper.isScreenTooSmall()) {
      if (this._touchDragHelper) {
        this._touchDragHelper.dispose();
      }
      this.actionPanel.removeEventListener(f.PRESS_MOVE, this.bindFunction(this.onPortraitPressMove));
    }
  };
  CastleActionPanel.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    this.controller.addEventListener(u.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onCastleDataUpdated));
    this.controller.addEventListener(s.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onLayoutStateChanged));
    p.CastleModel.questData.addEventListener(l.CastleQuestDataEvent.QUEST_START, this.bindFunction(this.onNewQuest));
    this.controller.addEventListener(r.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onEnteredCastle));
    this.controller.addEventListener(c.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
  };
  CastleActionPanel.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    this.controller.removeEventListener(u.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onCastleDataUpdated));
    this.controller.removeEventListener(s.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onLayoutStateChanged));
    p.CastleModel.questData.removeEventListener(l.CastleQuestDataEvent.QUEST_START, this.bindFunction(this.onNewQuest));
    this.controller.removeEventListener(r.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onEnteredCastle));
    this.controller.removeEventListener(c.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
  };
  CastleActionPanel.prototype.onPortraitPressMove = function (e) {
    if (m.MobileHelper.isPortrait()) {
      var t = e.stageX - this._touchDragHelper.touchStageRefPoint.x;
      if (Math.abs(t) > 5) {
        this._touchMoved = true;
        var i = this.disp.x + t * 0.8;
        if (i >= this.disp.stage.stageWidth) {
          this.disp.x = i;
        }
        this._touchDragHelper.touchStageRefPoint.x = e.stageX;
      }
    }
  };
  CastleActionPanel.prototype.removeEventListenerOnDestroy = function () {
    e.prototype.removeEventListenerOnDestroy.call(this);
    this.removeEventListenerOnHide();
  };
  CastleActionPanel.prototype.updateComponents = function () {
    this.actionPanel.mc_tax.visible = true;
    this._castleList.enabled = p.CastleModel.userData.userLevel >= a.ClientConstLevelRestrictions.MIN_LEVEL_CHOOSE_LOCATION;
  };
  CastleActionPanel.prototype.activatePanel = function () {
    this.actionPanel.mouseChildren = true;
    this._isActivePanel = true;
    this.actionPanel.filters = h.BitmapFilterHelper.NO_FILTER;
    C.CastleMovieClipHelper.uncacheSafe(this.actionPanel);
  };
  CastleActionPanel.prototype.deactivatePanel = function () {
    this.actionPanel.mouseChildren = false;
    this._isActivePanel = false;
    this.actionPanel.filters = h.BitmapFilterHelper.FILTER_DESATURATED_BUTTON_COLOR_MATRIX;
    this.actionPanel.doCache();
  };
  CastleActionPanel.prototype.buildButtons = function () {
    this._buttons.switchCreationMode(true);
    this._buttons.addMainButton(new V.FusionForgePanelButton()).defineSubButtons([new A.CraftingPanelButton(d.IsoObjectEnum.REFINERY), new A.CraftingPanelButton(d.IsoObjectEnum.TOOLSMITH), new A.CraftingPanelButton(d.IsoObjectEnum.DRAGONHOARD)]);
    this._buttons.addMainButton(new k.MovementsPanelButton());
    this._buttons.addMainButton(new j.PremiumMarketPanelButton());
    this._buttons.addMainButton(new H.OverviewPanelButton()).defineSubButtons([new K.ResearchPanelButton(), new N.ManagementPanelButton(), new B.HunterPanelButton(), new ee.BreweryPanelButton(), new z.ResourceIslandsPanelButton(), new R.FactionCampsPanelButton(), new q.ResourceVillagesPanelButton(), new Q.TreasureMapPanelButton()]);
    this._buttons.addMainButton(new W.RecruitPanelButton()).defineSubButtons([new T.BuildToolsPanelButton(), new L.DefencePanelButton(), new G.HospitalPanelButton(), new U.LegendHallPanelButton()]);
    this._buttons.addMainButton(new X.SearchEnemyPanelButton());
    this._buttons.addMainButton(new I.BuildMenuPanelButton()).defineSubButtons([new S.ConstructionItemsPanelButton(), new P.DistrictGachaEventPanelButton()]);
    this._buttons.addMainButton(new M.EquipmentPanelButton()).defineSubButtons([new Y.RelicUpgradePanelButton(), new x.GeneralsHubPanelButton(), new w.GeneralsOverviewPanelButton()]);
    this._buttons.addMainButton(new v.CastlePanelButton());
    this._buttons.addMainButton(new J.WorldmapPanelButton());
    this._buttons.addMainButton(new F.KingdomMapPanelButton());
    this._buttons.addMainButton(new D.BackToMainServerButton());
    this._buttons.addMainButton(new te.ActionPlaceHolderButton());
    this._buttons.addMainButton(new te.ActionPlaceHolderButton());
    this._buttons.addMainButton(new te.ActionPlaceHolderButton());
    this._buttons.switchCreationMode(false);
  };
  CastleActionPanel.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      this.disp.x = this.disp.stage.stageWidth;
      this.disp.y = this.disp.stage.stageHeight;
      if (this.env.hasNetworkBuddies) {
        this.disp.y -= o.ClientConstCastle.BUDDY_PANEL_HEIGHT;
      }
    }
  };
  CastleActionPanel.prototype.onClick = function (t) {
    if (!this._isActivePanel && p.CastleModel.areaData.activeArea.isMyArea && p.CastleModel.tutorialData.isTutorialFinished()) {
      if (!this.layoutManager.isInState(E.CastleLayoutManager.STATE_ISO)) {
        this.layoutManager.state = E.CastleLayoutManager.STATE_ISO;
      }
    } else if (!this.isLocked && !this.isWaitingForServerMessage) {
      if (this._touchMoved) {
        this._touchMoved = true;
        t.stopImmediatePropagation();
        return;
      }
      e.prototype.onClick.call(this, t);
      if (g.ButtonHelper.isButtonEnabled(t.target)) {
        switch (t.target) {
          case this.actionPanel.btn_jumpTo:
            this._castleList.onClickJumpToButton();
        }
      }
    }
  };
  CastleActionPanel.prototype.onLayoutStateChanged = function (e) {
    this._buttons.updateButtons();
    this.updateComponents();
  };
  CastleActionPanel.prototype.onEnteredCastle = function (e) {
    this.updateComponents();
    this._buttons.updateButtons();
    this.unLockPanel();
    this.updatePosition();
  };
  CastleActionPanel.prototype.onNewQuest = function (e) {
    this._buttons.updateButtons();
  };
  CastleActionPanel.prototype.onCastleDataUpdated = function (e) {
    this._buttons.updateButtons();
  };
  CastleActionPanel.prototype.onLevelUp = function (e) {
    this._buttons.updateButtons();
  };
  Object.defineProperty(CastleActionPanel.prototype, "actionPanel", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleActionPanel.prototype, "buttons", {
    get: function () {
      return this._buttons;
    },
    enumerable: true,
    configurable: true
  });
  CastleActionPanel.NAME = "CastleActionPanel_Relicus";
  return CastleActionPanel;
}(_.CastlePanel);
exports.CastleActionPanel = O;
var E = require("./17.js");
var y = require("./4097.js");
var b = require("./4099.js");
var D = require("./4101.js");
var I = require("./1132.js");
var T = require("./1854.js");
var v = require("./1855.js");
var S = require("./4102.js");
var A = require("./4103.js");
var L = require("./1856.js");
var P = require("./4104.js");
var M = require("./4105.js");
var R = require("./4106.js");
var V = require("./4108.js");
var x = require("./4109.js");
var w = require("./4110.js");
var B = require("./4111.js");
var F = require("./4112.js");
var N = require("./4113.js");
var k = require("./1857.js");
var U = require("./4114.js");
var G = require("./4115.js");
var H = require("./4116.js");
var j = require("./1858.js");
var W = require("./845.js");
var Y = require("./4117.js");
var K = require("./4118.js");
var z = require("./4119.js");
var q = require("./4121.js");
var X = require("./4122.js");
var Q = require("./4123.js");
var J = require("./1859.js");
var Z = require("./1130.js");
var $ = require("./696.js");
var ee = require("./4125.js");
var te = require("./4126.js");