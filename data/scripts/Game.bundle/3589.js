Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./1.js");
var d = require("./1.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./3.js");
var C = require("./6.js");
var _ = require("./21.js");
var m = require("./139.js");
var f = require("./15.js");
var O = require("./4.js");
var E = require("./8.js");
var y = require("./73.js");
var b = require("./377.js");
var D = require("./247.js");
var I = require("./164.js");
var T = require("./120.js");
var v = function (e) {
  function CastleArmyListDialog() {
    var t = this;
    t.UNIT_DISLPAY_COLUMNCOUNT = 10;
    t.UNIT_ITEM_SPACE_X = 42;
    t.UNIT_ITEM_SPACE_Y = 46;
    t.unitPage = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleArmyListDialog.NAME, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("CastleMovementDetails_APR25")) || this;
  }
  n.__extends(CastleArmyListDialog, e);
  CastleArmyListDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this._movementDetails = new L.CastleMovementDetailsComponent(this.dialogDisp.mc_movementInfo);
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new g.LocalizedTextVO("dialog_shortArmy_title"));
    this.itxt_description = this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new g.LocalizedTextVO(""));
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.itxt_title.verticalAlign = a.GGSVerticalAlign.MIDDLE;
    E.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_ok, this.dialogDisp.mc_movementInfo.btn_retreat, this.dialogDisp.mc_movementInfo.btn_sendHome, this.dialogDisp.mc_container.btn_left, this.dialogDisp.mc_container.btn_right]);
  };
  CastleArmyListDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.unitPage = 0;
    this.itxt_description.textContentVO.textId = "dialog_shortArmy_exactSize";
    if (d.instanceOfClass(this.mapMovementVO, "ArmyTravelMapMovementVO")) {
      if (d.instanceOfClass(this.mapMovementVO, "SupportDefenceMapmovementVO")) {
        this.itxt_description.textContentVO.textId = "dialog_shortArmy_stationed";
      }
      this.setUnitList();
    } else if (d.instanceOfClass(this.mapMovementVO, "SiegeMapmovementVO")) {
      this.setUnitList();
      this.itxt_description.textContentVO.textId = "dialog_shortArmy_siegeMovement";
    }
    O.CastleModel.timerData.addEventListener(_.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onArmyDataUpdated));
    f.CastleBasicController.getInstance().addEventListener(m.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onArmyRemoved));
    this._movementDetails.initComponent(this.mapMovementVO, this.bindFunction(this.hide));
    this.onPage(0);
    this.updateLord();
  };
  Object.defineProperty(CastleArmyListDialog.prototype, "unitInventory", {
    get: function () {
      if (d.instanceOfClass(this.mapMovementVO, "ArmyTravelMapMovementVO")) {
        return this.dialogProperties.mapMovementVO.inventory;
      } else if (d.instanceOfClass(this.mapMovementVO, "SiegeMapmovementVO")) {
        return this.dialogProperties.mapMovementVO.inventory;
      } else {
        return undefined;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleArmyListDialog.prototype.onPage = function (e) {
    this.unitPage += e;
    var t = this.unitInventory.getUnits(null);
    this.dialogDisp.mc_container.btn_left.visible = this.unitPage > 0;
    this.dialogDisp.mc_container.btn_right.visible = t.length > this.UNIT_DISLPAY_COLUMNCOUNT * 2 * (this.unitPage + 1);
    this.setUnitList();
  };
  CastleArmyListDialog.prototype.updateLord = function () {
    r.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_lordHolder);
    this.dialogDisp.mc_lordHolder.mouseChildren = false;
    if (this.mapMovementVO.lordVO) {
      var e = d.instanceOfClass(this.mapMovementVO, "SupportDefenceMapmovementVO") ? P.LordEffectHelper.STRATEGY_SUPPORT : d.instanceOfClass(this.mapMovementVO, "ArmyTravelMapMovementVO") ? P.LordEffectHelper.STRATEGY_STATION : P.LordEffectHelper.STRATEGY_ATTACK;
      var t = this.mapMovementVO.lordVO;
      y.EquipmentIconHelper.addLordIcon(t, this.dialogDisp.mc_lordHolder, 50);
      var i = this.mapMovementVO.isReturnHome ? this.mapMovementVO.sourceArea : this.mapMovementVO.targetArea;
      this.lordTooltipTrigger.setProperties(t, null, i, e);
    }
    this._generalIcon = new D.GeneralSelectionItem(this.mapMovementVO.lordVO.assignedGeneralVO, this.dialogDisp.mc_general, false, false, false, true, null, true, this.dialogProperties.mapMovementVO.movementOwnerInfo.playerID == O.CastleModel.userData.playerID, true);
    this._generalIcon.onShow();
    this.dialogDisp.mc_general.visible = !!this.mapMovementVO.lordVO.assignedGeneralVO;
    this._generalIcon.disp.scaleX = this._generalIcon.disp.scaleY = 0.6;
    if (this.mapMovementVO.lordVO.assignedGeneralVO) {
      this.dialogDisp.mc_general.mouseChildren = false;
      var n = "";
      if (this.mapMovementVO.lordVO.assignedGeneralVO.getPassiveEffects().length > 0 || this.mapMovementVO.lordVO.assignedGeneralVO.selectedAbilities.length > 0) {
        n += p.Localize.text("dialog_battleLog_activeGeneralEffects_tooltip");
        var o = I.GeneralsHelper.getLocalizedGeneralAbilitySummary(this.mapMovementVO.lordVO.assignedGeneralVO, true);
        if (o != "") {
          n += "\n\n" + o;
        }
        var a = this.mapMovementVO.lordVO.assignedGeneralVO ? this.mapMovementVO.lordVO.assignedGeneralVO.getPassiveEffectsText() : "";
        if (a != "") {
          n += "\n\n" + a;
        }
      } else {
        n += p.Localize.text("dialog_generals_abilityDialog_noActiveAbilities");
      }
      this.dialogDisp.mc_general.toolTipText = {
        t: n,
        width: 500
      };
    }
  };
  CastleArmyListDialog.prototype.onArmyRemoved = function (e) {
    if (e.mapmovementVO.objectId == this.mapMovementVO.objectId) {
      this.hide();
    }
  };
  CastleArmyListDialog.prototype.hideLoaded = function (t = null) {
    this._movementDetails.destroy();
    O.CastleModel.timerData.removeEventListener(_.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onArmyDataUpdated));
    f.CastleBasicController.getInstance().removeEventListener(m.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onArmyRemoved));
    if (this._generalIcon) {
      this._generalIcon.onHide();
    }
    e.prototype.hideLoaded.call(this, t);
  };
  CastleArmyListDialog.prototype.setUnitList = function () {
    var e = this.dialogDisp.mc_container;
    r.MovieClipHelper.clearMovieClip(e.mc_items);
    var t = this.unitInventory.getUnits(null);
    t.sort(S.ClientConstSort.sortByUnitSortOrder);
    for (var i = 0; i < t.length; i++) {
      var n = t[i];
      this.UNIT_DISLPAY_COLUMNCOUNT;
      var o = i % this.UNIT_DISLPAY_COLUMNCOUNT;
      var a = new (c.getDefinitionByName("ArmyCounterComponent_T"))();
      a.mouseChildren = false;
      a.vo = n;
      a.x = o * this.UNIT_ITEM_SPACE_X;
      a.y = C.int(i / this.UNIT_DISLPAY_COLUMNCOUNT) * this.UNIT_ITEM_SPACE_Y;
      this.textFieldManager.registerTextField(a.mc_counter.txt_pick, new h.LocalizedNumberVO(n.inventoryAmount), new s.InternalGGSTextFieldConfigVO(true));
      a.toolTipText = n.type.toLowerCase() + "_name";
      a.actLikeButton = true;
      e.mc_items.addChild(a);
      M.WodPicHelper.addSmallPlayerUnitPicToContainer(n, a, 18, null, true, b.WodPicHelperUnitFramePerfectCallbackWrapper.callback4SmallPic(n, M.WodPicHelper.SMALL_UNIT_WIDTH, M.WodPicHelper.SMALL_UNIT_HEIGHT));
    }
  };
  CastleArmyListDialog.prototype.onArmyDataUpdated = function (e) {
    if (this.mapMovementVO.shouldBeShown()) {
      this._movementDetails.updateComponent();
    } else {
      this.hide();
    }
  };
  CastleArmyListDialog.prototype.onClick = function (t) {
    if (u.getQualifiedClassName(t.target) == "ArmyCounterComponent_T") {
      A.CastleDialogHandler.getInstance().registerDefaultDialogs(R.CastleRecruitInfoDialog, new T.CastleRecruitInfoDialogProperties(t.target.vo));
    }
    if (E.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_ok:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          A.CastleDialogHandler.getInstance().showHelper("", p.Localize.text(this.mapMovementVO.isReturnHome ? "help_armyDialog_return_player" : "help_armyDialog_player"));
          break;
        case this.dialogDisp.mc_container.btn_left:
          this.onPage(-1);
          break;
        case this.dialogDisp.mc_container.btn_right:
          this.onPage(1);
      }
    }
  };
  Object.defineProperty(CastleArmyListDialog.prototype, "mapMovementVO", {
    get: function () {
      return this.dialogProperties.mapMovementVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleArmyListDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleArmyListDialog.__initialize_static_members = function () {
    CastleArmyListDialog.NAME = "CastleArmyList";
  };
  return CastleArmyListDialog;
}(require("./813.js").CastleArmyExternalDialog);
exports.CastleArmyListDialog = v;
var S = require("./75.js");
var A = require("./9.js");
var L = require("./468.js");
var P = require("./133.js");
var M = require("./63.js");
var R = require("./115.js");
l.classImplementsInterfaces(v, "ICollectableRendererList");
v.__initialize_static_members();