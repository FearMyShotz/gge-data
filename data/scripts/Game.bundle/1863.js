Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./1.js");
var s = require("./23.js");
var r = require("./23.js");
var l = require("./18.js");
var c = require("./58.js");
var u = require("./796.js");
var d = require("./129.js");
var p = require("./221.js");
var h = require("./161.js");
var g = require("./71.js");
var C = require("./4.js");
var _ = require("./324.js");
var m = require("./20.js");
var f = require("./263.js");
var O = require("./8.js");
var E = require("./131.js");
var y = createjs.Event;
var b = createjs.MouseEvent;
var D = function (e) {
  function CastleBuildingListPanel() {
    var t = this;
    t.category = CastleBuildingListPanel.CAT_BUILD;
    t._isFolded = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this, new Library.CastleInterfaceElements.CastleBuildlist1()) || this;
  }
  n.__extends(CastleBuildingListPanel, e);
  CastleBuildingListPanel.prototype.init = function () {
    e.prototype.init.call(this);
    this.buildingListPanelContent.btn_slide.basicButton = new o.BasicButton(this.buildingListPanelContent.btn_slide, true);
    this.buildingListPanelContent.cat_tools.basicButton = new o.BasicButton(this.buildingListPanelContent.cat_tools, true);
    this.buildingListPanelContent.cat_units.basicButton = new o.BasicButton(this.buildingListPanelContent.cat_units, true);
    this.buildingListPanelContent.cat_build.basicButton = new o.BasicButton(this.buildingListPanelContent.cat_build, true);
    O.ButtonHelper.initButtons([this.buildingListPanelContent.btn_up, this.buildingListPanelContent.btn_down], m.ClickFeedbackButtonHover, 1);
    this._buildListComponent = new S.CastleBuildingListComponent(this.buildingListPanelContent, T.BasicBuildListComponent.ALIGN_VERTICAL);
    this.category = CastleBuildingListPanel.CAT_BUILD;
    this.buildingListPanelContent.walls_tools.visible = false;
    this.buildingListPanelContent.walls_build.visible = true;
    this.buildingListPanelContent.cat_tools.toolTipText = "tut_recruit_OpenProductionScreen_copy";
    this.buildingListPanelContent.cat_units.toolTipText = "tut_recruit_OpenRecruitmentScreen_copy";
    this.buildingListPanelContent.cat_build.toolTipText = "ingameHelp_category_4";
    this.onChangeResolution();
    if (a.MobileHelper.isScreenTooSmall()) {
      this.disp.scaleX = this.disp.scaleY = 0.8;
    }
  };
  CastleBuildingListPanel.prototype.show = function () {
    if (!this.hasLevelForShow()) {
      this.controller.addEventListener(h.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onXPChanged));
      this.hide();
      return;
    }
    this.buildingListPanelContent.cat_tools.basicButton.addMouseEventListener();
    this.buildingListPanelContent.cat_units.basicButton.addMouseEventListener();
    this.buildingListPanelContent.cat_build.basicButton.addMouseEventListener();
    this.controller.addEventListener(u.CastleSlotVOEvent.SLOT_UPDATE, this.bindFunction(this.onUpdateSlot));
    this.controller.addEventListener(g.AreaDataEvent.ON_CONSTRUCTION_LIST_CHANGED, this.bindFunction(this.onUpdateSlot));
    this.controller.addEventListener(d.CastleMilitaryDataEvent.PACKAGELIST_UPDATED, this.bindFunction(this.onUpdateSlot));
    this.controller.addEventListener(_.DecoStorageEvent.ON_INVENTORY_UPDATED, this.bindFunction(this.onUpdateSlot));
    C.CastleModel.boostData.addEventListener(p.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onUpdateSlot));
    if (this.disp && this.disp.stage) {
      window.addEventListener(y.RESIZE, this.bindFunction(this.onChangeResolution));
    }
    if (C.CastleModel.userData.userLevel < c.ClientConstLevelRestrictions.MIN_LEVEL_SHOW_BUILDINGLIST || a.MobileHelper.isScreenTooSmall()) {
      this.foldPanel();
    } else {
      this.unFoldPanel();
    }
    e.prototype.show.call(this);
    this.updateLayout();
    this.onFoldComplete();
    this.onChangeResolution();
    if (this.disp.parent) {
      this.disp.parent.setChildIndex(this.disp, 0);
    }
    this.allowCaching = true;
  };
  CastleBuildingListPanel.prototype.onXPChanged = function (e) {
    this.controller.removeEventListener(h.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onXPChanged));
    this.show();
  };
  CastleBuildingListPanel.prototype.destroy = function () {
    this.controller.removeEventListener(h.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onXPChanged));
    e.prototype.destroy.call(this);
  };
  CastleBuildingListPanel.prototype.hide = function () {
    if (this.disp && this.disp.stage) {
      this._buildListComponent.clearItems();
    }
    this.controller.removeEventListener(u.CastleSlotVOEvent.SLOT_UPDATE, this.bindFunction(this.onUpdateSlot));
    this.controller.removeEventListener(g.AreaDataEvent.ON_CONSTRUCTION_LIST_CHANGED, this.bindFunction(this.onUpdateSlot));
    this.controller.removeEventListener(d.CastleMilitaryDataEvent.PACKAGELIST_UPDATED, this.bindFunction(this.onUpdateSlot));
    this.controller.removeEventListener(d.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onUpdateSlot));
    this.controller.removeEventListener(_.DecoStorageEvent.ON_INVENTORY_UPDATED, this.bindFunction(this.onUpdateSlot));
    C.CastleModel.boostData.removeEventListener(p.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onUpdateSlot));
    if (this.disp && this.disp.stage) {
      window.removeEventListener(y.RESIZE, this.bindFunction(this.onChangeResolution));
    }
    if (I.Iso.renderer && I.Iso.renderer.layers.renderTarget) {
      I.Iso.renderer.layers.renderTarget.removeEventListener(b.MOUSE_UP, this.bindFunction(this.onMouseUpInIso));
    }
    this.buildingListPanelContent.cat_tools.basicButton.removeMouseEventListener();
    this.buildingListPanelContent.cat_units.basicButton.removeMouseEventListener();
    this.buildingListPanelContent.cat_build.basicButton.removeMouseEventListener();
    e.prototype.hide.call(this);
  };
  CastleBuildingListPanel.prototype.onMouseUpInIso = function (e) {
    if (!e.target || !this.buildingListPanelContent.contains(e.target)) {
      I.Iso.renderer.layers.renderTarget.removeEventListener(b.MOUSE_UP, this.bindFunction(this.onMouseUpInIso));
    }
  };
  CastleBuildingListPanel.prototype.onUpdateSlot = function (e) {
    this.updateLayout();
    this.updateCache();
  };
  CastleBuildingListPanel.prototype.onChangeResolution = function (e = null) {
    if (this.disp && this.disp.stage) {
      this.updateLayout();
      this.updateCache();
    }
  };
  CastleBuildingListPanel.prototype.onClick = function (e) {
    if (O.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.buildingListPanelContent.btn_slide:
          this.toggleFolding();
          this.updateLayout();
          break;
        case this.buildingListPanelContent.cat_units:
          E.CastlePanel.dialogHandler.registerDefaultDialogs(v.CastleRecruitDialog, new f.CastleRecruitDialogProperties(this.getUnitsCategory()));
          break;
        case this.buildingListPanelContent.cat_tools:
          E.CastlePanel.dialogHandler.registerDefaultDialogs(v.CastleRecruitDialog, new f.CastleRecruitDialogProperties(l.ClientConstCastle.UNIT_CATEGORY_TOOLS));
      }
      if (a.instanceOfClass(e.target, "BuildListItem1")) {
        var t = e.target.bItem;
        if (t && !t.isLocked && t.isFree) {
          this.layoutManager.hideAllIngameUIComponents();
          I.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
        }
      }
    }
  };
  CastleBuildingListPanel.prototype.updateLayout = function () {
    if (this.isVisible() && this.disp && this.disp.stage) {
      this.buildingListPanelContent.btn_slide.basicButton.enableButton = true;
      this.buildingListPanelContent.cat_tools.basicButton.enableButton = C.CastleModel.militaryData.isUnitCategoryAllowed(l.ClientConstCastle.UNIT_CATEGORY_TOOLS);
      this.buildingListPanelContent.cat_units.basicButton.enableButton = C.CastleModel.militaryData.isUnitCategoryAllowed(this.getUnitsCategory());
      this._buildListComponent.fillItems(C.CastleModel.areaData.activeConstructionList);
    }
  };
  CastleBuildingListPanel.prototype.foldPanel = function () {
    this._isFolded = true;
    this.buildingListPanelContent.x = CastleBuildingListPanel.SLIDE_X;
  };
  CastleBuildingListPanel.prototype.unFoldPanel = function () {
    this._isFolded = false;
    this.buildingListPanelContent.x = 0;
  };
  CastleBuildingListPanel.prototype.toggleFolding = function () {
    if (this.hasLevelForShow()) {
      if (this._isFolded) {
        r.TweenMax.fromTo(this.buildingListPanelContent, 0.3, {
          x: CastleBuildingListPanel.SLIDE_X
        }, {
          x: 0,
          ease: s.Linear.easeOut,
          onUpdate: this.bindFunction(this.onFoldUpdate),
          onComplete: this.bindFunction(this.onFoldComplete)
        });
      } else {
        r.TweenMax.fromTo(this.buildingListPanelContent, 0.3, {
          x: 0
        }, {
          x: CastleBuildingListPanel.SLIDE_X,
          ease: s.Linear.easeIn,
          onUpdate: this.bindFunction(this.onFoldUpdate),
          onComplete: this.bindFunction(this.onFoldComplete)
        });
      }
      this._isFolded = !this._isFolded;
    }
  };
  CastleBuildingListPanel.prototype.onFoldUpdate = function () {
    this.updateCache();
  };
  CastleBuildingListPanel.prototype.onFoldComplete = function () {
    this.buildingListPanelContent.btn_slide.gotoAndStop(this._isFolded ? 2 : 1);
    this.updateCache();
  };
  CastleBuildingListPanel.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      this.disp.x = this.disp.stage.stageWidth;
      this.disp.y = 65;
    }
  };
  Object.defineProperty(CastleBuildingListPanel.prototype, "buildingListPanelContent", {
    get: function () {
      return this.disp.mc_content;
    },
    enumerable: true,
    configurable: true
  });
  CastleBuildingListPanel.prototype.hasLevelForShow = function () {
    return C.CastleModel.userData.userLevel >= c.ClientConstLevelRestrictions.MIN_LEVEL_PRODUCTION_QUEUE;
  };
  CastleBuildingListPanel.prototype.getUnitsCategory = function () {
    if (C.CastleModel.areaData.activeArea && C.CastleModel.areaData.activeArea.isFactionCamp) {
      return l.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES;
    } else {
      return l.ClientConstCastle.UNIT_CATEGORY_SOLDIERS;
    }
  };
  CastleBuildingListPanel.__initialize_static_members = function () {
    CastleBuildingListPanel.NAME = "CastleBuildingListPanel";
    CastleBuildingListPanel.CAT_BUILD = "buildings";
    CastleBuildingListPanel.SLIDE_X = 68;
  };
  return CastleBuildingListPanel;
}(E.CastlePanel);
exports.CastleBuildingListPanel = D;
var I = require("./34.js");
var T = require("./458.js");
var v = require("./225.js");
var S = require("./4132.js");
D.__initialize_static_members();