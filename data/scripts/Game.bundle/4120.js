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
var d = require("./5.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./3.js");
var C = require("./6.js");
var _ = require("./1524.js");
var m = require("./218.js");
var f = require("./139.js");
var O = require("./219.js");
var E = require("./192.js");
var y = require("./4.js");
var b = require("./259.js");
var D = require("./8.js");
var I = require("./11.js");
var T = require("./120.js");
var v = createjs.MouseEvent;
var S = createjs.Point;
var A = function (e) {
  function CastleListVillagesOverviewDialog() {
    var t = this;
    t._currentFirstCastle = 0;
    t.inventoryArrowStandardX = 0;
    t.inventoryUnitStandardX = 0;
    t.timers = [];
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleListVillagesOverviewDialog.NAME) || this;
  }
  n.__extends(CastleListVillagesOverviewDialog, e);
  CastleListVillagesOverviewDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new h.LocalizedTextVO("")).autoFitToBounds = true;
    this.inventoryArrowStandardX = this.dialogDisp.i0.mc_inventory.btn_leftArrow.x;
    this.inventoryUnitStandardX = this.dialogDisp.i0.mc_inventory.mc_unitHolder.x;
    D.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_up, this.dialogDisp.btn_down]);
    for (var i = 0; i <= 4; i++) {
      var n = this.dialogDisp["i" + i];
      D.ButtonHelper.initBasicButtons([n.btn_rightArrow, n.btn_leftArrow, n.btn_jumpToIsland, n.btn_jumpToCamp, n.btn_jumpTo, n.btn_gotoCastle]);
    }
  };
  CastleListVillagesOverviewDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.hideAllItems();
    R.CrestHelper.setCrestGraphics(this.dialogDisp.mc_playerCrest1, y.CastleModel.userData.playerCrest);
    R.CrestHelper.setCrestGraphics(this.dialogDisp.mc_playerCrest2, y.CastleModel.userData.playerCrest);
    y.CastleModel.kingdomData.addEventListener(E.CastleKingdomEvent.KINGDOM_VILLAGELIST_ARRIVED, this.bindFunction(this.onDataUpdated));
    this.controller.addEventListener(O.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onCastleUpdated));
    if (y.CastleModel.kingdomData.activeKingdomID == d.WorldIsland.KINGDOM_ID) {
      this.controller.addEventListener(f.CastleArmyDataEvent.NEW_MOVEMENT, this.bindFunction(this.onNewMapMovement));
    }
    this.disp.addEventListener(v.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    this.lockDialog();
    this.getData();
  };
  CastleListVillagesOverviewDialog.prototype.onMouseWheel = function (e) {
    if (e.delta < 0) {
      this.currentFirstCastle = this._currentFirstCastle - 1;
    } else if (e.delta > 0) {
      this.currentFirstCastle = this._currentFirstCastle + 1;
    }
  };
  CastleListVillagesOverviewDialog.prototype.getData = function () {
    y.CastleModel.smartfoxClient.sendCommandVO(new _.C2SKingdomGetVillageListVO());
    y.CastleModel.smartfoxClient.sendCommandVO(new m.C2SGetDetailedCastleListVO());
  };
  CastleListVillagesOverviewDialog.prototype.onNewMapMovement = function (e) {
    this.getData();
  };
  CastleListVillagesOverviewDialog.prototype.onDataUpdated = function (e) {
    this._villageList = e.params;
    this.currentFirstCastle = 0;
    this.onCastleUpdated();
  };
  CastleListVillagesOverviewDialog.prototype.onCastleUpdated = function (e = null) {
    var t = y.CastleModel.kingdomData.activeKingdomID == d.WorldIsland.KINGDOM_ID ? "dialog_islandListOverview_title" : "dialog_villageListOverview_title";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new h.LocalizedTextVO(t)).autoFitToBounds = true;
    this.fillItems();
    this.unLockDialog();
  };
  CastleListVillagesOverviewDialog.prototype.fillItems = function () {
    var e = y.CastleModel.userCastleListDetailed.getMainCastleByKingdomID(y.CastleModel.kingdomData.activeKingdomID);
    if (this._villageList && y.CastleModel.userCastleListDetailed && e) {
      this.clearTimers();
      var t = this._villageList.getSortedVillageListByKingdomID(y.CastleModel.kingdomData.activeKingdomID);
      var i = this._currentFirstCastle - 1;
      var n = 0;
      for (var o = 0; o < 5; o++) {
        var a = this.dialogDisp["i" + o];
        a.visible = true;
        if (this._currentFirstCastle != 0 || o != 0) {
          if (i + o < t.length) {
            n = C.int(y.CastleModel.kingdomData.activeKingdomID == d.WorldIsland.KINGDOM_ID ? CastleListVillagesOverviewDialog.MAX_UNITS_RESOURCE_ISLAND : CastleListVillagesOverviewDialog.MAX_UNITS_NORMAL);
            this.initItem(a, t[i + o].villageMapObjectVO);
            this.fillInventory(a, t[i + o].unitInventory.getUnits(null), n);
          } else {
            a.visible = false;
          }
        } else {
          n = C.int(y.CastleModel.kingdomData.activeKingdomID == d.WorldIsland.KINGDOM_ID ? CastleListVillagesOverviewDialog.MAX_UNITS_RESOURCE_ISLAND : CastleListVillagesOverviewDialog.MAX_UNITS_NORMAL);
          this.initItem(a, y.CastleModel.userData.castleList.getMainCastleByKingdomID(y.CastleModel.kingdomData.activeKingdomID));
          this.fillInventory(a, e.unitInventory.getUnits(null), n);
        }
      }
    }
  };
  CastleListVillagesOverviewDialog.prototype.initItem = function (e, t) {
    if (e.property && u.instanceOfClass(e.property, "CastleInventoryComponent")) {
      e.property.destroy();
    }
    a.MovieClipHelper.clearMovieClip(e.mc_castleHolder);
    var i = p.Localize.text("dialog_jumpto_castleName", [t.areaNameString + " "]);
    e.mc_castleHolder.addChild(V.WorldmapObjectIconHelper.drawMapObjectIcon(t, new S(80, 55), true, false, true, i));
    e.mc_castleHolder.mapObjectVO = t;
    e.btn_gotoCastle.mapObjectVO = t;
    e.btn_jumpTo.mapObjectVO = t;
    e.btn_jumpToIsland.mapObjectVO = t;
    e.btn_gotoCastle.visible = !u.instanceOfClass(t, "VillageMapobjectVO");
    e.btn_jumpTo.visible = u.instanceOfClass(t, "VillageMapobjectVO") && !u.instanceOfClass(t, "ResourceIsleMapobjectVO");
    e.btn_jumpToCamp.visible = u.instanceOfClass(t, "FactionCampMapobjectVO");
    e.btn_gotoCastle.toolTipText = "ringmenu_visit_castle";
    e.btn_jumpTo.toolTipText = "panel_action_jumpTo";
    e.btn_jumpToIsland.visible = u.instanceOfClass(t, "ResourceIsleMapobjectVO");
    e.mc_resourceIslandTimer.visible = t.kingdomID == d.WorldIsland.KINGDOM_ID;
    if (t.kingdomID == d.WorldIsland.KINGDOM_ID) {
      e.btn_jumpToIsland.toolTipText = "dialog_jumpto_targetSelected";
      e.mc_resourceIslandTimer.mouseChildren = false;
      e.mc_inventory.btn_leftArrow.x = this.inventoryArrowStandardX + CastleListVillagesOverviewDialog.ISLAND_TIMER_OFFSET;
      e.mc_inventory.mc_unitHolder.x = this.inventoryUnitStandardX + CastleListVillagesOverviewDialog.ISLAND_TIMER_OFFSET;
      var n = this.textFieldManager.registerTextField(e.mc_resourceIslandTimer.txt_timer, new g.TextVO(""));
      if (u.instanceOfClass(t, "ResourceIsleMapobjectVO")) {
        e.mc_resourceIslandTimer.icon_waitTime.visible = true;
        e.mc_resourceIslandTimer.toolTipText = {
          t: "kingdom_eiLand_village_countdown",
          p: [""]
        };
        this.timers.push(new b.CastleTimerComponent(n, this.bindFunction(this.getTimerText), t.remainingOccupierTime));
      } else {
        e.mc_resourceIslandTimer.icon_waitTime.visible = false;
        e.mc_resourceIslandTimer.toolTipText = "countdown_aquamarin_tooltip";
        this.timers.push(new b.CastleTimerComponent(n, this.bindFunction(this.getTimerText), y.CastleModel.kingdomData.getKingdomVOByID(d.WorldIsland.KINGDOM_ID).resetTime));
      }
    } else {
      e.mc_inventory.btn_leftArrow.x = this.inventoryArrowStandardX;
      e.mc_inventory.mc_unitHolder.x = this.inventoryUnitStandardX;
    }
  };
  CastleListVillagesOverviewDialog.prototype.hideAllItems = function () {
    for (var e = 0; e < 5; e++) {
      this.dialogDisp["i" + e].visible = false;
    }
  };
  CastleListVillagesOverviewDialog.prototype.getTimerText = function (e) {
    var t = e > 2592000 ? s.TimeStringHelper.ONE_TIME_FORMAT_ADVANCED : s.TimeStringHelper.TWO_TIME_FORMAT;
    return s.TimeStringHelper.getTimeToString(e, t, p.Localize.text, false, true);
  };
  CastleListVillagesOverviewDialog.prototype.fillInventory = function (e, t, i = CastleListVillagesOverviewDialog.MAX_UNITS_NORMAL) {
    var n = l.getDefinitionByName("VillageOverviewInventoryInfoContainer");
    e.property = new M.CastleInventoryComponent(e.mc_inventory, i, t, n, 25, 31, true);
  };
  CastleListVillagesOverviewDialog.prototype.onClick = function (e) {
    if (D.ButtonHelper.isButtonEnabled(e.target)) {
      var t;
      switch (e.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_up:
          this.currentFirstCastle = this._currentFirstCastle - 1;
          break;
        case this.dialogDisp.btn_down:
          this.currentFirstCastle = this._currentFirstCastle + 1;
          break;
        case this.dialogDisp.i0.btn_gotoCastle:
          t = e.target.mapObjectVO;
          o.CommandController.instance.executeCommand(L.IngameClientCommands.JOIN_AREA_WITHOUT_POSITION_SAVE_COMMAND, t);
          break;
        case this.dialogDisp.i0.btn_jumpTo:
        case this.dialogDisp.i1.btn_jumpTo:
        case this.dialogDisp.i2.btn_jumpTo:
        case this.dialogDisp.i3.btn_jumpTo:
        case this.dialogDisp.i4.btn_jumpTo:
        case this.dialogDisp.i0.btn_jumpToIsland:
        case this.dialogDisp.i1.btn_jumpToIsland:
        case this.dialogDisp.i2.btn_jumpToIsland:
        case this.dialogDisp.i3.btn_jumpToIsland:
        case this.dialogDisp.i4.btn_jumpToIsland:
          o.CommandController.instance.executeCommand(L.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, e.target.mapObjectVO);
      }
      if (c.getQualifiedClassName(e.target) == "VillageOverviewInventoryInfoContainer") {
        P.CastleDialogHandler.getInstance().registerDefaultDialogs(x.CastleRecruitInfoDialog, new T.CastleRecruitInfoDialogProperties(e.target.unitVO));
      }
    }
  };
  CastleListVillagesOverviewDialog.prototype.hideLoaded = function (t = null) {
    y.CastleModel.kingdomData.removeEventListener(E.CastleKingdomEvent.KINGDOM_VILLAGELIST_ARRIVED, this.bindFunction(this.onDataUpdated));
    this.controller.removeEventListener(O.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onCastleUpdated));
    if (y.CastleModel.kingdomData.activeKingdomID == d.WorldIsland.KINGDOM_ID) {
      this.controller.removeEventListener(f.CastleArmyDataEvent.NEW_MOVEMENT, this.bindFunction(this.getData));
    }
    this.disp.removeEventListener(v.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    for (var i = 0; i < 5; i++) {
      if (this.dialogDisp["i" + i].property && u.instanceOfClass(this.dialogDisp["i" + i].property, "CastleInventoryComponent")) {
        this.dialogDisp["i" + i].property.destroy();
      }
    }
    this.clearTimers();
    e.prototype.hideLoaded.call(this, t);
  };
  CastleListVillagesOverviewDialog.prototype.clearTimers = function () {
    while (this.timers.length > 0) {
      this.timers.pop().stop();
    }
  };
  Object.defineProperty(CastleListVillagesOverviewDialog.prototype, "currentFirstCastle", {
    set: function (e) {
      var t = C.int(this._villageList.getAmountInKingdomID(y.CastleModel.kingdomData.activeKingdomID) + 1);
      e = C.int(Math.max(0, Math.min(t - 5, e)));
      this._currentFirstCastle = e;
      D.ButtonHelper.enableButton(this.dialogDisp.btn_up, t > 5 && this._currentFirstCastle > 0);
      D.ButtonHelper.enableButton(this.dialogDisp.btn_down, t > 5 && this._currentFirstCastle < t - 5);
      this.fillItems();
    },
    enumerable: true,
    configurable: true
  });
  CastleListVillagesOverviewDialog.__initialize_static_members = function () {
    CastleListVillagesOverviewDialog.NAME = "CastleListVillagesOverviewExt";
    CastleListVillagesOverviewDialog.ISLAND_TIMER_OFFSET = 125;
    CastleListVillagesOverviewDialog.MAX_UNITS_NORMAL = 10;
    CastleListVillagesOverviewDialog.MAX_UNITS_RESOURCE_ISLAND = 7;
  };
  return CastleListVillagesOverviewDialog;
}(I.CastleExternalDialog);
exports.CastleListVillagesOverviewDialog = A;
var L = require("./29.js");
var P = require("./9.js");
var M = require("./378.js");
var R = require("./61.js");
var V = require("./70.js");
var x = require("./113.js");
r.classImplementsInterfaces(A, "ICollectableRendererList");
A.__initialize_static_members();