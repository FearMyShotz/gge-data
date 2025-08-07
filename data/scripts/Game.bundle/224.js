Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./1.js");
var u = require("./1.js");
var d = require("./1.js");
var p = require("./5.js");
var h = require("./18.js");
var g = require("./685.js");
var C = require("./217.js");
var _ = require("./218.js");
var m = require("./32.js");
var f = require("./71.js");
var O = require("./4.js");
var E = require("./2932.js");
var y = require("./171.js");
var b = require("./8.js");
var D = require("./114.js");
var I = createjs.Point;
var T = function (e) {
  function CastleRecruitDialog() {
    return e.call(this, CastleRecruitDialog.NAME) || this;
  }
  n.__extends(CastleRecruitDialog, e);
  CastleRecruitDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this._castleList = new R.ComboboxComponent(this.recruitDialog.mc_castleListCombobox, "", 1, 15, 15, -1, 0, new E.ComboboxItemRendererRecruitList(), 5, false, false, 3);
    this.stonewallBg = new V.CastleStonewallBackgroundComponent(this.recruitDialog.bg);
    this._subLayer = new Map();
    b.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_tab_auxiliaries, this.dialogDisp.btn_tab_units, this.dialogDisp.btn_tab_tools, this.dialogDisp.btn_tab_hospital, this.dialogDisp.btn_tab_inventory, this.dialogDisp.btn_tab_stronghold]);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.bg.btn_help]);
    this.recruitDialog.btn_tab_units.toolTipText = "dialog_recuit_units";
    this.recruitDialog.btn_tab_auxiliaries.toolTipText = "dialog_faction_auxiliaries_tooltip";
    this.recruitDialog.btn_tab_inventory.toolTipText = "dialog_recuit_inventory";
    this.recruitDialog.addChildAt(this.recruitDialog.mc_castleHolder, 5);
    this.stonewallBg.setTitleText("");
  };
  CastleRecruitDialog.prototype.initTabButtons = function () {
    var e = O.CastleModel.areaData.activeArea && O.CastleModel.areaData.activeArea.isFactionCamp;
    this.recruitDialog.btn_tab_auxiliaries.visible = e;
    this.recruitDialog.btn_tab_units.visible = this.recruitDialog.btn_tab_tools.visible = this.recruitDialog.btn_tab_stronghold.visible = !e;
  };
  CastleRecruitDialog.prototype.getSublayer = function (e) {
    if (this._subLayer.get(e) == null) {
      this._subLayer.set(e, this.createSublayer(e));
    }
    return this._subLayer.get(e);
  };
  CastleRecruitDialog.prototype.createSublayer = function (e) {
    var t;
    var i;
    var n;
    var o;
    switch (e) {
      case h.ClientConstCastle.UNIT_CATEGORY_SOLDIERS:
      case h.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES:
        i = N.CastleRecruitDialogUnits;
        n = "CastleRecruit_units_R";
        break;
      case h.ClientConstCastle.UNIT_CATEGORY_TOOLS:
        t = this.getSublayer(h.ClientConstCastle.UNIT_CATEGORY_SOLDIERS);
        break;
      case h.ClientConstCastle.CATEGORY_INVENTORY:
        i = B.CastleRecruitDialogInventory;
        n = "CastleRecruit_inventory_R";
        break;
      case h.ClientConstCastle.CATEGORY_STRONGHOLD:
        i = F.CastleRecruitDialogStronghold;
        n = "CastleRecruit_stronghold_R";
        break;
      case h.ClientConstCastle.CATEGORY_HOSPITAL:
        i = w.CastleRecruitDialogHospital;
        n = "CastleRecruit_hospital_R";
    }
    if (!t) {
      o = new (d.getDefinitionByName(n))();
      this.recruitDialog.addChild(o);
      t = new i(o);
    }
    return t;
  };
  Object.defineProperty(CastleRecruitDialog.prototype, "subLayer", {
    get: function () {
      return this._subLayer;
    },
    enumerable: true,
    configurable: true
  });
  CastleRecruitDialog.prototype.applyPropertiesLoaded = function (e = null) {
    b.ButtonHelper.enableButton(this.recruitDialog.bg.btn_help, this.isOutOfTutorial());
    this.enableButtons_0();
    this.stonewallBg.update();
  };
  CastleRecruitDialog.prototype.onCastleListUpdate = function (e) {
    a.BasicController.getInstance().sendCommandVOAndWait(new C.C2SGetDetailedCastleListVO(0));
  };
  CastleRecruitDialog.prototype.onDetailedCastleUpdate = function (e) {
    if (this.isVisible) {
      this.updateCastleList();
    }
  };
  CastleRecruitDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.initTabButtons();
    var i = [];
    a.BasicController.getInstance().sendCommandVOAndWait(new C.C2SGetDetailedCastleListVO(0));
    a.BasicController.getInstance().sendCommandVOAndWait(new g.C2SGetCastleProductionDataVO());
    this.controller.addEventListener(f.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onCastleDataUpdated));
    this.controller.addEventListener(_.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedCastleUpdate));
    this.controller.addEventListener(m.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onCastleListUpdate));
    this._castleList.disp.addEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.showSelectedCastleIcon));
    this._castleList.userClickItemSignal.add(this.bindFunction(this.switchCastle));
    this._castleList.disp.addEventListener(o.BasicComboboxEvent.COMBOBOXSELECT, this.bindFunction(this.onComboBoxSelected));
    var n = this.getSublayerCategory();
    i.push(n);
    var s = this.getSublayerFilter();
    i.push(s);
    this.changeCategoryWithParams(n, i);
    this.setTooltips();
    this.updateCastleList();
  };
  CastleRecruitDialog.prototype.setStrongholdTabTooltip = function () {
    var e = c.castAs(S.Iso.data.objects.provider.getObjectByType(v.IsoObjectEnum.STRONGHOLD), "ABasicBuildingVO");
    var t = O.CastleModel.wodData.voSubList(P.CastleWodData.TYPE_BUILDING).get(h.ClientConstCastle.STRONGHOLD_BUILDING_WOD);
    if (e && e.buildingState.isFunctionally) {
      this.recruitDialog.btn_tab_stronghold.toolTipText = "stronghold_name";
    } else if (t.isAvailableByLevelAndEffect) {
      this.recruitDialog.btn_tab_stronghold.toolTipText = "stronghold_teaser_construct";
    } else {
      this.recruitDialog.btn_tab_stronghold.toolTipText = {
        t: "stronghold_teaser_levelRequired",
        p: [t.requiredLevel]
      };
    }
  };
  CastleRecruitDialog.prototype.setTooltips = function () {
    this.setStrongholdTabTooltip();
    this.setHospitalTabTooltip();
    this.setToolTabTooltip();
  };
  CastleRecruitDialog.prototype.setToolTabTooltip = function () {
    if (this.recruitDialog.btn_tab_tools.enabled) {
      this.recruitDialog.btn_tab_tools.toolTipText = "dialog_recuit_tools";
    } else {
      this.recruitDialog.btn_tab_tools.toolTipText = "dialog_workshop_tab_tooltip_notBuilt";
    }
  };
  CastleRecruitDialog.prototype.setHospitalTabTooltip = function () {
    var e = O.CastleModel.areaData.activeArea.isFactionCamp ? v.IsoObjectEnum.FACTION_HOSPITAL : v.IsoObjectEnum.HOSPITAL;
    var t = c.castAs(S.Iso.data.objects.provider.getObjectByType(e), "ABasicBuildingVO");
    var i = O.CastleModel.wodData.voSubList(P.CastleWodData.TYPE_BUILDING).get(h.ClientConstCastle.HOSPITAL_BUILDING_WOD);
    if (t && t.buildingState.isFunctionally) {
      this.recruitDialog.btn_tab_hospital.toolTipText = "hospital_name";
    } else if (i.isAvailableByLevelAndEffect) {
      this.recruitDialog.btn_tab_hospital.toolTipText = "dialog_hospital_tab_tooltip_notBuilt";
    } else {
      this.recruitDialog.btn_tab_hospital.toolTipText = {
        t: "dialog_hospital_tab_tooltip_lowLevel",
        p: [i.requiredLevel]
      };
    }
  };
  CastleRecruitDialog.prototype.onComboBoxSelected = function (e) {
    var t = this.recruitDialog.mc_castleListCombobox;
    switch (e.state) {
      case 0:
        this.recruitDialog.addChildAt(t, 6);
        break;
      case 1:
        this.recruitDialog.addChild(t);
    }
  };
  CastleRecruitDialog.prototype.onCastleDataUpdated = function (e) {
    if (O.CastleModel.areaData.activeOwnerInfo.playerID == O.CastleModel.userData.playerID) {
      var t = O.CastleModel.areaData.activeArea.isFactionCamp;
      var i = t ? S.Iso.data.objects.provider.hasFunctionalBuildingByType(v.IsoObjectEnum.FACTION_BARRACKS) : S.Iso.data.objects.provider.hasFunctionalBuildingByType(v.IsoObjectEnum.BARRACKS);
      var n = S.Iso.data.objects.provider.hasFunctionalBuildingByType(v.IsoObjectEnum.WORKSHOP);
      var o = S.Iso.data.objects.provider.hasFunctionalBuildingByType(v.IsoObjectEnum.D_WORKSHOP);
      var a = S.Iso.data.objects.provider.hasFunctionalBuildingByType(v.IsoObjectEnum.STRONGHOLD);
      var s = this._currentCategory;
      var r = null;
      this.initTabButtons();
      this.enableButtons_0();
      this.setTooltips();
      switch (this._currentCategory) {
        case h.ClientConstCastle.UNIT_CATEGORY_SOLDIERS:
        case h.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES:
          s = i ? t ? h.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES : h.ClientConstCastle.UNIT_CATEGORY_SOLDIERS : h.ClientConstCastle.CATEGORY_INVENTORY;
          break;
        case h.ClientConstCastle.UNIT_CATEGORY_TOOLS:
          if (o || n) {
            if ((r = this.getSublayer(h.ClientConstCastle.UNIT_CATEGORY_TOOLS).currentFilter) != N.CastleRecruitDialogUnits.FILTER_TOOLS_ATTACK || n) {
              if (r == N.CastleRecruitDialogUnits.FILTER_TOOLS_DEFENCE && !o) {
                r = N.CastleRecruitDialogUnits.FILTER_TOOLS_ATTACK;
              }
            } else {
              r = N.CastleRecruitDialogUnits.FILTER_TOOLS_DEFENCE;
            }
          } else {
            s = h.ClientConstCastle.CATEGORY_INVENTORY;
          }
          break;
        case h.ClientConstCastle.CATEGORY_STRONGHOLD:
          if (a) {
            r = this.getSublayer(h.ClientConstCastle.CATEGORY_STRONGHOLD).currentFilter;
          } else {
            s = h.ClientConstCastle.CATEGORY_INVENTORY;
          }
          break;
        case h.ClientConstCastle.CATEGORY_INVENTORY:
          r = this.getSublayer(h.ClientConstCastle.CATEGORY_INVENTORY).currentFilter;
          break;
        case h.ClientConstCastle.CATEGORY_HOSPITAL:
          r = this.getSublayer(h.ClientConstCastle.CATEGORY_HOSPITAL).currentFilter;
      }
      this.changeCategoryWithParams(s, [s, r]);
    } else {
      this.hide();
    }
  };
  CastleRecruitDialog.prototype.switchCastle = function (e = false) {
    this._castleList.hideItems();
    var t = this._castleList.selectedData;
    if (e) {
      if (L.FlashBlockHelper.checkFlashBlock(t.spaceID)) {
        this._castleList.selectItemIndex(this._castleList.previousSelectedItem);
      } else {
        r.CommandController.instance.executeCommand(A.IngameClientCommands.JOIN_AREA_AND_SAVE_POSITION_COMMAND, t);
        this.layoutManager.dialogCastleSwitch = true;
      }
    }
  };
  CastleRecruitDialog.prototype.showSelectedCastleIcon = function (e = null) {
    var t = O.CastleModel.userData.getOwnCastle(this._castleList.selectedData.objectId, this._castleList.selectedData.kingdomID);
    var i = new I(90, 80);
    l.MovieClipHelper.clearMovieClip(this.recruitDialog.mc_castleHolder);
    this.recruitDialog.mc_castleHolder.addChild(x.WorldmapObjectIconHelper.drawMapObjectIcon(t, i, true, false, false));
  };
  CastleRecruitDialog.prototype.updateCastleList = function () {
    this._castleList.clearItems();
    var e;
    var t = 0;
    var i = 0;
    switch (this._currentCategory) {
      case h.ClientConstCastle.UNIT_CATEGORY_SOLDIERS:
      case h.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES:
        e = O.CastleModel.userCastleListDetailed.getCastlesWithBarracksList();
        e = this.filterFactionBuildingsByLocationAndState(e);
        break;
      case h.ClientConstCastle.UNIT_CATEGORY_TOOLS:
        e = O.CastleModel.userCastleListDetailed.getCastlesWithWorkshopsList();
        break;
      case h.ClientConstCastle.CATEGORY_STRONGHOLD:
        this.hideCastleSelector();
        break;
      case h.ClientConstCastle.CATEGORY_HOSPITAL:
        e = O.CastleModel.userCastleListDetailed.getCastlesWithHospitalsList();
        e = this.filterFactionBuildingsByLocationAndState(e);
        break;
      default:
        e = O.CastleModel.userCastleListDetailed.getAllCastlesList();
    }
    var n = new y.ComboboxItemRendererVO();
    if (e != null) {
      for (var o = 0, a = e; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined) {
          var r = O.CastleModel.userData.castleList.getCastleVOByID(s.areaID, s.kingdomID);
          if (r && r.ownerInfo.playerID == O.CastleModel.userData.playerID) {
            (n = new y.ComboboxItemRendererVO()).itemLabel = r.areaNameString;
            n.data = r;
            this._castleList.addItem(n);
            if (O.CastleModel.areaData.activeArea && O.CastleModel.areaData.activeAreaInfo) {
              var l = O.CastleModel.areaData.activeAreaInfo.objectId;
              var c = O.CastleModel.areaData.activeAreaInfo.kingdomID;
              if (l == r.objectId && c == r.kingdomID) {
                t = i;
              }
            }
            i++;
          }
        }
      }
    }
    this._castleList.selectItemIndex(t);
  };
  CastleRecruitDialog.prototype.filterFactionBuildingsByLocationAndState = function (e) {
    var t;
    var i = [];
    if (e != null) {
      for (var n = 0, o = e; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          if (a.kingdomID == p.FactionConst.KINGDOM_ID) {
            if ((t = c.castAs(O.CastleModel.userData.getOwnCastle(a.areaID, a.kingdomID), "FactionInteractiveMapobjectVO")) && !t.isDestroyed) {
              i.push(a);
            }
          } else {
            i.push(a);
          }
        }
      }
    }
    return i;
  };
  CastleRecruitDialog.prototype.getSublayerCategory = function () {
    if (this.recruitDialogProperties.defaultCategory == "") {
      return O.CastleModel.militaryData.getFirstAvalibleUnitCategory();
    } else {
      return this.recruitDialogProperties.defaultCategory;
    }
  };
  CastleRecruitDialog.prototype.getSublayerFilter = function () {
    return this.recruitDialogProperties.defaultFilter;
  };
  CastleRecruitDialog.prototype.hideLoaded = function (t = null) {
    s.BasicDialogHandler.getInstance().blockDialogs &&= false;
    if (this._castleList) {
      this._castleList.disp.removeEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.showSelectedCastleIcon));
      this._castleList.userClickItemSignal.remove(this.bindFunction(this.switchCastle));
      this._castleList.disp.removeEventListener(o.BasicComboboxEvent.COMBOBOXSELECT, this.bindFunction(this.onComboBoxSelected));
    }
    this.controller.removeEventListener(f.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onCastleDataUpdated));
    this.controller.removeEventListener(_.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedCastleUpdate));
    this.controller.removeEventListener(m.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onCastleListUpdate));
    this.destroySublayers();
    e.prototype.hideLoaded.call(this, t);
  };
  CastleRecruitDialog.prototype.destroySublayers = function () {
    if (this._subLayer != null) {
      for (var e = 0, t = Array.from(this._subLayer.values()); e < t.length; e++) {
        var i = t[e];
        var n = c.castAs(i, "CastleDialogSubLayer");
        if (n !== undefined) {
          n.hide();
          n.destroy();
        }
      }
    }
    this._currentSublayer = null;
  };
  CastleRecruitDialog.prototype.enableButtons_0 = function () {
    b.ButtonHelper.enableButton(this.recruitDialog.btn_close, true);
    b.ButtonHelper.enableButton(this.recruitDialog.btn_tab_stronghold, this.isOutOfTutorial() && S.Iso.data && S.Iso.data.objects.provider.hasFunctionalBuildingByType(v.IsoObjectEnum.STRONGHOLD));
    b.ButtonHelper.enableButton(this.recruitDialog.btn_tab_inventory, this.isOutOfTutorial());
    b.ButtonHelper.enableButton(this.recruitDialog.btn_tab_tools, this.isOutOfTutorial() && O.CastleModel.militaryData.isUnitCategoryAllowed(h.ClientConstCastle.UNIT_CATEGORY_TOOLS));
    b.ButtonHelper.enableButton(this.recruitDialog.btn_tab_units, this.isOutOfTutorial() && O.CastleModel.militaryData.isUnitCategoryAllowed(h.ClientConstCastle.UNIT_CATEGORY_SOLDIERS));
    b.ButtonHelper.enableButton(this.recruitDialog.btn_tab_auxiliaries, this.isOutOfTutorial() && O.CastleModel.militaryData.isUnitCategoryAllowed(h.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES));
    b.ButtonHelper.enableButton(this.recruitDialog.btn_tab_hospital, this.isOutOfTutorial() && S.Iso.data && (S.Iso.data.objects.provider.hasFunctionalBuildingByType(v.IsoObjectEnum.HOSPITAL) || S.Iso.data.objects.provider.hasFunctionalBuildingByType(v.IsoObjectEnum.FACTION_HOSPITAL)));
  };
  CastleRecruitDialog.prototype.onClick = function (t) {
    if (!this.isLocked && b.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.recruitDialog.btn_close:
          this.hide();
          break;
        case this.recruitDialog.bg.btn_help:
          this._currentSublayer.showHelp();
          break;
        case this.recruitDialog.btn_tab_units:
          if (!O.CastleModel.questData.isQuestActive(25)) {
            this.changeCategoryWithParams(h.ClientConstCastle.UNIT_CATEGORY_SOLDIERS, [h.ClientConstCastle.UNIT_CATEGORY_SOLDIERS, null]);
            this.showCastleSelector();
          }
          break;
        case this.recruitDialog.btn_tab_auxiliaries:
          if (!O.CastleModel.questData.isQuestActive(25)) {
            this.changeCategoryWithParams(h.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES, [h.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES, null]);
            this.showCastleSelector();
          }
          break;
        case this.recruitDialog.btn_tab_tools:
          if (!O.CastleModel.questData.isQuestActive(25)) {
            this.changeCategoryWithParams(h.ClientConstCastle.UNIT_CATEGORY_TOOLS, [h.ClientConstCastle.UNIT_CATEGORY_TOOLS, null]);
            this.showCastleSelector();
          }
          break;
        case this.recruitDialog.btn_tab_inventory:
          if (!O.CastleModel.questData.isQuestActive(25)) {
            this.changeCategoryWithParams(h.ClientConstCastle.CATEGORY_INVENTORY, [h.ClientConstCastle.CATEGORY_INVENTORY]);
            this.showCastleSelector();
          }
          break;
        case this.recruitDialog.btn_tab_stronghold:
          if (!O.CastleModel.questData.isQuestActive(25)) {
            this.changeCategoryWithParams(h.ClientConstCastle.CATEGORY_STRONGHOLD, [h.ClientConstCastle.CATEGORY_STRONGHOLD]);
            this.hideCastleSelector();
          }
          break;
        case this.recruitDialog.btn_tab_hospital:
          if (!O.CastleModel.questData.isQuestActive(25)) {
            this.changeCategoryWithParams(h.ClientConstCastle.CATEGORY_HOSPITAL, [h.ClientConstCastle.CATEGORY_STRONGHOLD]);
            this.showCastleSelector();
          }
      }
    }
  };
  CastleRecruitDialog.prototype.hideCastleSelector = function () {
    this.recruitDialog.mc_castleHolder.visible = false;
    this.recruitDialog.mc_castleListCombobox.visible = false;
  };
  CastleRecruitDialog.prototype.showCastleSelector = function () {
    this.recruitDialog.mc_castleHolder.visible = true;
    this.recruitDialog.mc_castleListCombobox.visible = true;
  };
  CastleRecruitDialog.prototype.changeCategoryWithParams = function (e, t) {
    if (this._currentCategory != e) {
      this.changeCategory(e);
      this.showSublayer(this.getSublayer(e), t);
      this.setActiveTabButtons(this._currentCategory);
      this.recruitDialog.mc_bgdetail.visible = this._currentCategory == h.ClientConstCastle.CATEGORY_INVENTORY;
      this.updateCastleList();
    }
  };
  CastleRecruitDialog.prototype.setActiveTabButtons = function (e) {
    this.enableButtons_0();
    b.ButtonHelper.setButtonSelected(this.recruitDialog.btn_tab_units, e == h.ClientConstCastle.UNIT_CATEGORY_SOLDIERS);
    b.ButtonHelper.setButtonSelected(this.recruitDialog.btn_tab_auxiliaries, e == h.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES);
    b.ButtonHelper.setButtonSelected(this.recruitDialog.btn_tab_tools, e == h.ClientConstCastle.UNIT_CATEGORY_TOOLS);
    b.ButtonHelper.setButtonSelected(this.recruitDialog.btn_tab_inventory, e == h.ClientConstCastle.CATEGORY_INVENTORY);
    b.ButtonHelper.setButtonSelected(this.recruitDialog.btn_tab_stronghold, e == h.ClientConstCastle.CATEGORY_STRONGHOLD);
    b.ButtonHelper.setButtonSelected(this.recruitDialog.btn_tab_hospital, e == h.ClientConstCastle.CATEGORY_HOSPITAL);
    if (this.layoutManager.currentState == M.CastleLayoutManager.STATE_WORLDMAP) {
      b.ButtonHelper.enableButton(this.recruitDialog.btn_tab_units, false);
      b.ButtonHelper.enableButton(this.recruitDialog.btn_tab_auxiliaries, false);
      b.ButtonHelper.enableButton(this.recruitDialog.btn_tab_tools, false);
    }
  };
  CastleRecruitDialog.prototype.getClipContainerForUnit = function (e, t = h.ClientConstCastle.UNIT_CATEGORY_SOLDIERS) {
    return this.getSublayer(t).getClipContainerForUnitVO(e);
  };
  Object.defineProperty(CastleRecruitDialog.prototype, "recruitDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRecruitDialog.prototype, "recruitDialog", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRecruitDialog.prototype, "currentSublayer", {
    get: function () {
      return this._currentSublayer;
    },
    enumerable: true,
    configurable: true
  });
  CastleRecruitDialog.NAME = "RecruitDialogExternal_May24";
  return CastleRecruitDialog;
}(D.CastleExternalSubLayerDialog);
exports.CastleRecruitDialog = T;
var v = require("./80.js");
var S = require("./33.js");
var A = require("./29.js");
var L = require("./160.js");
var P = require("./56.js");
var M = require("./17.js");
var R = require("./178.js");
var V = require("./874.js");
var x = require("./70.js");
var w = require("./2933.js");
var B = require("./2967.js");
var F = require("./2972.js");
var N = require("./643.js");
u.classImplementsInterfaces(T, "ICollectableRendererList");