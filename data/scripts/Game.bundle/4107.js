Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./218.js");
var h = require("./427.js");
var g = require("./219.js");
var C = require("./4.js");
var _ = require("./197.js");
var m = require("./8.js");
var f = require("./11.js");
var O = require("./120.js");
var E = createjs.MouseEvent;
var y = createjs.Point;
var b = function (e) {
  function CastleListCampsOverviewDialog() {
    var t = this;
    t._currentFirstCastle = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleListCampsOverviewDialog.NAME) || this;
  }
  n.__extends(CastleListCampsOverviewDialog, e);
  CastleListCampsOverviewDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_up, this.dialogDisp.btn_down, this.dialogDisp.i0.btn_gotoCastle, this.dialogDisp.i1.btn_gotoCastle, this.dialogDisp.i2.btn_gotoCastle, this.dialogDisp.i3.btn_gotoCastle, this.dialogDisp.i4.btn_gotoCastle]);
  };
  CastleListCampsOverviewDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new u.LocalizedTextVO("panel_action_campoverview")).autoFitToBounds = true;
    this.hideAllItems();
    var t = C.CastleModel.specialEventData.getActiveEventByEventId(l.EventConst.EVENTTYPE_FACTION).ownFaction == c.FactionConst.BLUE_FACTION ? I.FactionEventVO.BLUE_CREST_VO : I.FactionEventVO.RED_CREST_VO;
    S.CrestHelper.setCrestGraphics(this.dialogDisp.mc_playerCrest1, t);
    S.CrestHelper.setCrestGraphics(this.dialogDisp.mc_playerCrest2, t);
    this.controller.addEventListener(g.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onCastleUpdated));
    this.disp.addEventListener(E.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    this.lockDialog();
    C.CastleModel.smartfoxClient.sendCommandVO(new p.C2SGetDetailedCastleListVO());
  };
  CastleListCampsOverviewDialog.prototype.onMouseWheel = function (e) {
    var t = C.CastleModel.userData.castleList.listOfAllFactionCamps;
    if (e.delta < 0) {
      if (this._currentFirstCastle > 0) {
        this.currentFirstCastle = this._currentFirstCastle - 1;
      }
    } else if (e.delta > 0 && this._currentFirstCastle < t.length - 5 && t.length > 5) {
      this.currentFirstCastle = this._currentFirstCastle + 1;
    }
  };
  CastleListCampsOverviewDialog.prototype.onCastleUpdated = function (e = null) {
    this.currentFirstCastle = 0;
    this.fillItems();
    this.unLockDialog();
  };
  CastleListCampsOverviewDialog.prototype.fillItems = function () {
    var e = false;
    var t = C.CastleModel.userData.castleList.listOfAllFactionCamps;
    var i = 0;
    for (var n = 0; n < 5; ++n) {
      do {
        e = false;
        if (!(this._currentFirstCastle + n + i < t.length)) {
          this.dialogDisp["i" + n].visible = false;
          break;
        }
        var o = t[n + this._currentFirstCastle];
        if (o.isDestroyed) {
          i++;
          e = true;
        } else {
          this.initItem(this.dialogDisp["i" + n], o);
          var a = C.CastleModel.userCastleListDetailed.getVObyCastleID(o.objectId, o.kingdomID);
          if (a) {
            this.fillInventory(this.dialogDisp["i" + n], a.unitInventory.getUnits(null));
          }
        }
      } while (e);
    }
    m.ButtonHelper.enableButton(this.dialogDisp.btn_down, this._currentFirstCastle < t.length - 5 && t.length > 5);
    m.ButtonHelper.enableButton(this.dialogDisp.btn_up, this._currentFirstCastle > 0);
  };
  CastleListCampsOverviewDialog.prototype.initItem = function (e, t) {
    if (e.property && r.instanceOfClass(e.property, "CastleInventoryComponent")) {
      e.property.disp.removeEventListener(h.CastleInventoryComponentEvent.CLICK_ITEM, this.bindFunction(this.onItemClick));
      e.property.destroy();
    }
    a.MovieClipHelper.clearMovieClip(e.mc_castleHolder);
    e.mc_castleHolder.addChild(A.WorldmapObjectIconHelper.drawMapObjectIcon(t, new y(80, 55), true, false, true, "dialog_jumpto_castleName" + _.CastleToolTipManager.ID_PARAM_SEPERATOR + t.areaNameString));
    e.mc_castleHolder.mapObjectVO = t;
    e.btn_gotoCastle.mapObjectVO = t;
    e.btn_jumpTo.mapObjectVO = t;
    e.btn_jumpToCamp.mapObjectVO = t;
    e.btn_gotoCastle.visible = true;
    e.btn_jumpTo.visible = false;
    e.btn_jumpToCamp.visible = false;
    e.btn_gotoCastle.toolTipText = "ringmenu_visit_camp";
    e.btn_jumpTo.toolTipText = "panel_action_jumpTo";
    e.btn_jumpToCamp.toolTipText = "panel_action_jumpTo";
    e.btn_jumpToIsland.visible = false;
    e.mc_resourceIslandTimer.visible = false;
    e.visible = true;
  };
  CastleListCampsOverviewDialog.prototype.fillInventory = function (e, t) {
    e.property = new v.CastleInventoryComponent(e.mc_inventory, 10, t, Library.CastleInterfaceElements.CastleAttackSpyInfoContainer, 25, 31, true);
    e.property.disp.addEventListener(h.CastleInventoryComponentEvent.CLICK_ITEM, this.bindFunction(this.onItemClick));
  };
  CastleListCampsOverviewDialog.prototype.onItemClick = function (e) {
    T.CastleDialogHandler.getInstance().registerDefaultDialogs(L.CastleRecruitInfoDialog, new O.CastleRecruitInfoDialogProperties(e.unitVO, e.crestVO));
  };
  CastleListCampsOverviewDialog.prototype.hideAllItems = function () {
    for (var e = 0; e < 5; e++) {
      this.dialogDisp["i" + e].visible = false;
    }
  };
  CastleListCampsOverviewDialog.prototype.onClick = function (e) {
    var t;
    if (m.ButtonHelper.isButtonEnabled(e.target)) {
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
        case this.dialogDisp.i1.btn_gotoCastle:
        case this.dialogDisp.i2.btn_gotoCastle:
        case this.dialogDisp.i3.btn_gotoCastle:
        case this.dialogDisp.i4.btn_gotoCastle:
          t = e.target.mapObjectVO;
          o.CommandController.instance.executeCommand(D.IngameClientCommands.JOIN_AREA_WITHOUT_POSITION_SAVE_COMMAND, t);
      }
    }
  };
  CastleListCampsOverviewDialog.prototype.hideLoaded = function (t = null) {
    this.controller.removeEventListener(g.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onCastleUpdated));
    this.disp.removeEventListener(E.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    for (var i = 0; i < 5; i++) {
      if (this.dialogDisp["i" + i].property && r.instanceOfClass(this.dialogDisp["i" + i].property, "CastleInventoryComponent")) {
        this.dialogDisp["i" + i].property.destroy();
      }
    }
    e.prototype.hideLoaded.call(this, t);
  };
  Object.defineProperty(CastleListCampsOverviewDialog.prototype, "currentFirstCastle", {
    set: function (e) {
      var t = d.int(C.CastleModel.userData.castleList.listOfAllFactionCamps.length);
      e = d.int(Math.max(0, Math.min(t - 5, e)));
      this._currentFirstCastle = e;
      this.fillItems();
    },
    enumerable: true,
    configurable: true
  });
  CastleListCampsOverviewDialog.NAME = "CastleListVillagesOverviewExt";
  return CastleListCampsOverviewDialog;
}(f.CastleExternalDialog);
exports.CastleListCampsOverviewDialog = b;
var D = require("./29.js");
var I = require("./202.js");
var T = require("./9.js");
var v = require("./378.js");
var S = require("./61.js");
var A = require("./70.js");
var L = require("./113.js");
s.classImplementsInterfaces(b, "ICollectableRendererList");