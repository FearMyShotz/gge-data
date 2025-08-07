Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./1.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./6.js");
var C = require("./21.js");
var _ = require("./139.js");
var m = require("./15.js");
var f = require("./4.js");
var O = require("./8.js");
var E = require("./73.js");
var y = require("./377.js");
var b = require("./247.js");
var D = require("./164.js");
var I = require("./120.js");
var T = require("./813.js");
var v = createjs.Point;
var S = function (e) {
  function CastleArmyListWithLootDialog() {
    var t = this;
    t._currentPageIndex = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleArmyListWithLootDialog.NAME, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("CastleMovementDetails_APR25")) || this;
  }
  n.__extends(CastleArmyListWithLootDialog, e);
  CastleArmyListWithLootDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    O.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_ok, this.dialogDisp.mc_movementInfo.btn_retreat, this.dialogDisp.mc_movementInfo.btn_sendHome, this.dialogDisp.mc_container.btn_left, this.dialogDisp.mc_container.btn_right]);
    this._movementDetails = new P.CastleMovementDetailsComponent(this.dialogDisp.mc_movementInfo);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new p.LocalizedTextVO("dialog_shortArmy_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new p.LocalizedTextVO("dialog_shortArmy_exactSize"));
    this._movementResourceList = new M.CastleResourceListComponent(this.dialogDisp.mc_ressourceList, Library.CastleInterfaceElements.ResourceListCompnent_Item, 3, 2);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
  };
  CastleArmyListWithLootDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (u.instanceOfClass(this.mapMovementVO, "ArmyTravelMapMovementVO")) {
      var i = this.mapMovementVO;
      if (this.mapMovementVO.isMyMovement && i.lootList.length > 0) {
        this._movementResourceList.updateComponent(i.lootList, d.Localize.text("dialog_battleLog_loot"));
      }
    }
    this._currentPageIndex = 0;
    this.updateUnitList();
    f.CastleModel.timerData.addEventListener(C.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onArmyDataUpdated));
    m.CastleBasicController.getInstance().addEventListener(_.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onArmyRemoved));
    this._movementDetails.initComponent(this.mapMovementVO, this.bindFunction(this.hide));
    s.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_lordHolder);
    this.dialogDisp.mc_lordHolder.mouseChildren = false;
    if (this.mapMovementVO.lordVO) {
      var n = this.mapMovementVO.lordVO;
      E.EquipmentIconHelper.addLordIcon(n, this.dialogDisp.mc_lordHolder, 50);
    }
    this.updateLord();
  };
  CastleArmyListWithLootDialog.prototype.updateLord = function () {
    s.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_lordHolder);
    this.dialogDisp.mc_lordHolder.mouseChildren = false;
    if (this.mapMovementVO.lordVO) {
      var e = u.instanceOfClass(this.mapMovementVO, "SupportDefenceMapmovementVO") ? R.LordEffectHelper.STRATEGY_SUPPORT : R.LordEffectHelper.STRATEGY_ATTACK;
      var t = this.mapMovementVO.lordVO;
      E.EquipmentIconHelper.addLordIcon(t, this.dialogDisp.mc_lordHolder, 50);
      var i = this.mapMovementVO.isReturnHome ? this.mapMovementVO.sourceArea : this.mapMovementVO.targetArea;
      this.lordTooltipTrigger.setProperties(t, null, i, e);
    }
    this._generalIcon = new b.GeneralSelectionItem(this.mapMovementVO.lordVO.assignedGeneralVO, this.dialogDisp.mc_general, false, false, false, true, null, true, this.dialogProperties.mapMovementVO.movementOwnerInfo.playerID == f.CastleModel.userData.playerID, true);
    this._generalIcon.onShow();
    this.dialogDisp.mc_general.visible = !!this.mapMovementVO.lordVO.assignedGeneralVO;
    this._generalIcon.disp.scaleX = this._generalIcon.disp.scaleY = 0.6;
    if (this.mapMovementVO.lordVO.assignedGeneralVO) {
      this.dialogDisp.mc_general.mouseChildren = false;
      var n = "";
      if (this.mapMovementVO.lordVO.assignedGeneralVO.getPassiveEffects().length > 0 || this.mapMovementVO.lordVO.assignedGeneralVO.selectedAbilities.length > 0) {
        n += d.Localize.text("dialog_battleLog_activeGeneralEffects_tooltip");
        var o = D.GeneralsHelper.getLocalizedGeneralAbilitySummary(this.mapMovementVO.lordVO.assignedGeneralVO, true);
        if (o != "") {
          n += "\n\n" + o;
        }
        var a = this.mapMovementVO.lordVO.assignedGeneralVO ? this.mapMovementVO.lordVO.assignedGeneralVO.getPassiveEffectsText() : "";
        if (a != "") {
          n += "\n\n" + a;
        }
      } else {
        n += d.Localize.text("dialog_generals_abilityDialog_noActiveAbilities");
      }
      this.dialogDisp.mc_general.toolTipText = {
        t: n,
        width: 500
      };
    }
  };
  CastleArmyListWithLootDialog.prototype.hideLoaded = function (t = null) {
    this._movementDetails.destroy();
    f.CastleModel.timerData.removeEventListener(C.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onArmyDataUpdated));
    m.CastleBasicController.getInstance().removeEventListener(_.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onArmyRemoved));
    if (this._generalIcon) {
      this._generalIcon.onHide();
    }
    e.prototype.hideLoaded.call(this, t);
  };
  CastleArmyListWithLootDialog.prototype.updateUnitList = function () {
    var e = this.dialogDisp.mc_container;
    s.MovieClipHelper.clearMovieClip(e.mc_items);
    var t = this.getUnitList();
    t.sort(A.ClientConstSort.sortByUnitSortOrder);
    e.btn_left.visible = e.btn_right.visible = t.length > CastleArmyListWithLootDialog.UNITS_PER_PAGE;
    O.ButtonHelper.enableButton(e.btn_left, this.currentPageIndex > 0);
    var i = g.int(this.getMaxPagesCount(t));
    O.ButtonHelper.enableButton(e.btn_right, this.currentPageIndex < i - 1);
    for (var n = 0; n < CastleArmyListWithLootDialog.UNITS_PER_PAGE; n++) {
      var o = this.currentPageIndex * CastleArmyListWithLootDialog.UNITS_PER_PAGE + n;
      if (o >= t.length) {
        break;
      }
      var a = t[o];
      var r = new (l.getDefinitionByName("ArmyCounterComponent_T"))();
      r.mouseChildren = false;
      r.vo = a;
      r.x = n % CastleArmyListWithLootDialog.UNIT_DISPLAY_COLUMN_COUNT * CastleArmyListWithLootDialog.UNIT_ITEM_SPACE_X;
      r.y = g.int(n / CastleArmyListWithLootDialog.UNIT_DISPLAY_COLUMN_COUNT) * CastleArmyListWithLootDialog.UNIT_ITEM_SPACE_Y;
      r.toolTipText = a.type.toLowerCase() + "_name";
      r.actLikeButton = true;
      this.textFieldManager.registerTextField(r.mc_counter.txt_pick, new h.TextVO(String(a.inventoryAmount)));
      V.WodPicHelper.addSmallPlayerUnitPicToContainer(a, r, 20, new v(20, 20), true, y.WodPicHelperUnitFramePerfectCallbackWrapper.callback4SmallPic(a, V.WodPicHelper.SMALL_UNIT_WIDTH, V.WodPicHelper.SMALL_UNIT_HEIGHT));
      e.mc_items.addChild(r);
    }
  };
  CastleArmyListWithLootDialog.prototype.scrollPage = function (e) {
    this._currentPageIndex = g.int(a.MathBase.clamp(this._currentPageIndex + e, 0, this.getMaxPagesCount() - 1));
    this.updateUnitList();
  };
  CastleArmyListWithLootDialog.prototype.getUnitList = function () {
    var e = this.dialogProperties.mapMovementVO.inventory;
    if (u.instanceOfClass(this.mapMovementVO, "ArmyTravelMapMovementVO")) {
      e = this.mapMovementVO.inventory;
    } else if (u.instanceOfClass(this.mapMovementVO, "SiegeMapmovementVO")) {
      e = this.mapMovementVO.inventory;
    }
    return e.getUnits(null);
  };
  CastleArmyListWithLootDialog.prototype.getMaxPagesCount = function (e = null) {
    var t = e || this.getUnitList();
    return g.int(t.length / CastleArmyListWithLootDialog.UNITS_PER_PAGE + 1);
  };
  CastleArmyListWithLootDialog.prototype.onClick = function (t) {
    if (c.getQualifiedClassName(t.target) == "ArmyCounterComponent_T") {
      L.CastleDialogHandler.getInstance().registerDefaultDialogs(x.CastleRecruitInfoDialog, new I.CastleRecruitInfoDialogProperties(t.target.vo));
    }
    if (O.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_ok:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          L.CastleDialogHandler.getInstance().showHelper("", d.Localize.text(this.mapMovementVO.isReturnHome ? "help_armyDialog_return_player" : "help_armyDialog_player"));
          break;
        case this.dialogDisp.mc_container.btn_left:
          this.scrollPage(-1);
          break;
        case this.dialogDisp.mc_container.btn_right:
          this.scrollPage(1);
      }
    }
  };
  CastleArmyListWithLootDialog.prototype.onArmyDataUpdated = function (e) {
    if (this.mapMovementVO.shouldBeShown()) {
      this._movementDetails.updateComponent();
    } else {
      this.hide();
    }
  };
  CastleArmyListWithLootDialog.prototype.onArmyRemoved = function (e) {
    if (e.mapmovementVO.objectId == this.mapMovementVO.objectId) {
      this.hide();
    }
  };
  Object.defineProperty(CastleArmyListWithLootDialog.prototype, "mapMovementVO", {
    get: function () {
      return this.dialogProperties.mapMovementVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleArmyListWithLootDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleArmyListWithLootDialog.prototype, "currentPageIndex", {
    get: function () {
      return this._currentPageIndex;
    },
    enumerable: true,
    configurable: true
  });
  CastleArmyListWithLootDialog.__initialize_static_members = function () {
    CastleArmyListWithLootDialog.NAME = "CastleArmyListWithLoot";
    CastleArmyListWithLootDialog.UNIT_DISPLAY_COLUMN_COUNT = 9;
    CastleArmyListWithLootDialog.UNIT_DISPLAY_ROW_COUNT = 2;
    CastleArmyListWithLootDialog.UNITS_PER_PAGE = CastleArmyListWithLootDialog.UNIT_DISPLAY_COLUMN_COUNT * CastleArmyListWithLootDialog.UNIT_DISPLAY_ROW_COUNT;
    CastleArmyListWithLootDialog.UNIT_ITEM_SPACE_X = 44;
    CastleArmyListWithLootDialog.UNIT_ITEM_SPACE_Y = 46;
  };
  return CastleArmyListWithLootDialog;
}(T.CastleArmyExternalDialog);
exports.CastleArmyListWithLootDialog = S;
var A = require("./75.js");
var L = require("./9.js");
var P = require("./468.js");
var M = require("./320.js");
var R = require("./133.js");
var V = require("./63.js");
var x = require("./115.js");
r.classImplementsInterfaces(S, "ICollectableRendererList");
S.__initialize_static_members();