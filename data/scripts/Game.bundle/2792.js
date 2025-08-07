Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./18.js");
var h = require("./436.js");
var g = require("./37.js");
var C = require("./427.js");
var _ = require("./15.js");
var m = require("./4.js");
var f = require("./8.js");
var O = require("./525.js");
var E = require("./120.js");
var y = require("./1525.js");
var b = createjs.Point;
var D = function (e) {
  function CastleResourceVillageListItem(t) {
    var i = e.call(this, t) || this;
    i.itxt_level = CastleResourceVillageListItem.textFieldManager.registerTextField(t.txt_villageLevel, new c.LocalizedTextVO("ci_level", [0]));
    t.btn_jump_to_wmo.toolTipText = "panel_action_jumpTo";
    t.btn_stationing.toolTipText = "ringmenu_sendTroups";
    t.btn_upgrade.toolTipText = "dialog_privateResourceVillages_upgrade_tt";
    t.btn_remove.toolTipText = "dialog_privateResourceVillages_remove_tt";
    t.mc_castleHolder.mouseChildren = false;
    f.ButtonHelper.initBasicButtons([t.btn_jump_to_wmo, t.btn_stationing, t.btn_upgrade, t.btn_remove]);
    return i;
  }
  n.__extends(CastleResourceVillageListItem, e);
  CastleResourceVillageListItem.prototype.onUpdateSent = function (e) {
    f.ButtonHelper.enableButton(this.disp.btn_upgrade, false);
  };
  CastleResourceVillageListItem.prototype.show = function () {
    e.prototype.show.call(this);
    _.CastleBasicController.getInstance().addEventListener(g.CastleServerMessageArrivedEvent.UPV_SENT, this.bindFunction(this.onUpdateSent));
  };
  CastleResourceVillageListItem.prototype.customFillItem = function () {
    this.fillVillageIcon();
    this.fillResourceBonus();
    this.fillUnitInventory();
    this.fillButtons();
  };
  CastleResourceVillageListItem.prototype.fillVillageIcon = function () {
    s.MovieClipHelper.clearMovieClip(this.disp.mc_castleHolder);
    if (this.villageScrollItemVO.wmo) {
      this.disp.mc_castleHolder.addChild(A.WorldmapObjectIconHelper.drawMapObjectIcon(this.villageScrollItemVO.wmo, new b(80, 55), true, false, false));
      var e = this.villageScrollItemVO.wmo;
      var t = u.Localize.text("dialog_privateResourceVillages_publicVillage_" + h.ClientConstKingdom.getVillageTypeName(e.villageType).toLowerCase() + "_tt");
      this.disp.mc_castleHolder.toolTipText = t;
      this.itxt_level.visible = false;
    } else {
      S.CastlePrivateResourceVillageRenderHelper.renderVillage(this.villageScrollItemVO.privateResourceVillage.villageInfo.type, this.disp.mc_castleHolder, 80, 55);
      this.itxt_level.textContentVO.textReplacements = [this.villageScrollItemVO.privateResourceVillage.villageInfo.villageLevel];
      this.disp.mc_castleHolder.toolTipText = {
        t: "dialog_privateResourceVillages_villageLevel_" + h.ClientConstKingdom.getVillageTypeName(this.villageScrollItemVO.privateResourceVillage.villageInfo.type).toLowerCase() + "_tt",
        p: [this.villageScrollItemVO.privateResourceVillage.villageInfo.villageLevel]
      };
      this.itxt_level.visible = true;
    }
  };
  CastleResourceVillageListItem.prototype.fillResourceBonus = function () {
    if (this.villageScrollItemVO.showResourceBonus) {
      this.disp.mc_resourceBonus.visible = true;
      S.CastlePrivateResourceVillageRenderHelper.fillResourceBonus(this.disp.mc_resourceBonus, this.villageScrollItemVO.resourceVillageType, this.villageScrollItemVO.resourceBonus);
    } else {
      this.disp.mc_resourceBonus.visible = false;
    }
  };
  CastleResourceVillageListItem.prototype.fillUnitInventory = function () {
    this.disp.mc_inventory.visible = this.villageScrollItemVO.unitInventory;
    this.disp.mc_missingInventoryDeco.visible = !this.villageScrollItemVO.unitInventory;
    if (this.villageScrollItemVO.unitInventory) {
      if (this.inventoryComponent) {
        this.inventoryComponent.updateInventory(this.villageScrollItemVO.unitInventory);
      } else {
        this.inventoryComponent = new v.CastleInventoryComponent(this.disp.mc_inventory, 6, this.villageScrollItemVO.unitInventory, Library.CastleInterfaceElements.CastleAttackSpyInfoContainer, 35.8, 32.35, true);
      }
      this.inventoryComponent.disp.addEventListener(C.CastleInventoryComponentEvent.CLICK_ITEM, this.bindFunction(this.onClickInventoryItem));
    }
  };
  CastleResourceVillageListItem.prototype.onClickInventoryItem = function (e) {
    T.CastleDialogHandler.getInstance().registerDefaultDialogs(P.CastleRecruitInfoDialog, new E.CastleRecruitInfoDialogProperties(e.unitVO, e.crestVO));
  };
  CastleResourceVillageListItem.prototype.fillButtons = function () {
    this.disp.btn_jump_to_wmo.visible = !this.villageScrollItemVO.privateResourceVillage;
    this.disp.btn_stationing.visible = !this.villageScrollItemVO.privateResourceVillage;
    this.disp.btn_upgrade.visible = this.villageScrollItemVO.privateResourceVillage;
    this.disp.btn_remove.visible = this.villageScrollItemVO.privateResourceVillage;
    if (this.disp.btn_upgrade.visible) {
      f.ButtonHelper.enableButton(this.disp.btn_upgrade, this.getNextLevelVillage());
      if (f.ButtonHelper.isButtonEnabled(this.disp.btn_upgrade)) {
        this.disp.btn_upgrade.toolTipText = "dialog_privateResourceVillages_upgrade_tt";
      } else {
        this.disp.btn_upgrade.toolTipText = "dialog_privateResourceVillages_maxLevel_tt";
      }
    }
    if (this.disp.btn_jump_to_wmo.visible) {
      this.disp.btn_jump_to_wmo.gotoAndStop(V.instanceOfClass(this.villageScrollItemVO.wmo, "VillageMapobjectVO") ? 1 : 2);
    }
  };
  CastleResourceVillageListItem.prototype.getNextLevelVillage = function () {
    if (!this.villageScrollItemVO.privateResourceVillage) {
      return false;
    }
    var e = d.int(this.villageScrollItemVO.privateResourceVillage.villageInfo.kingdomID);
    var t = d.int(this.villageScrollItemVO.privateResourceVillage.villageInfo.type);
    var i = d.int(this.villageScrollItemVO.privateResourceVillage.villageInfo.villageLevel);
    return !!m.CastleModel.privateResourceVillageData.getPrivateVillageInfo(e, t, i + 1);
  };
  CastleResourceVillageListItem.prototype.hide = function () {
    e.prototype.hide.call(this);
    if (this.inventoryComponent) {
      this.inventoryComponent.disp.removeEventListener(C.CastleInventoryComponentEvent.CLICK_ITEM, this.bindFunction(this.onClickInventoryItem));
    }
    _.CastleBasicController.getInstance().removeEventListener(g.CastleServerMessageArrivedEvent.UPV_SENT, this.bindFunction(this.onUpdateSent));
  };
  CastleResourceVillageListItem.prototype.onMouseClick = function (t) {
    e.prototype.onMouseClick.call(this, t);
    if (f.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.disp.btn_jump_to_wmo:
          l.CommandController.instance.executeCommand(I.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, this.villageScrollItemVO.wmo);
          break;
        case this.disp.btn_stationing:
          T.CastleDialogHandler.getInstance().registerDefaultDialogs(L.CastleStartAttackDialog, new O.CastleStartAttackDialogProperties(this.villageScrollItemVO.wmo, p.ClientConstCastle.ACTION_TYPE_SENDTROUPS));
          break;
        case this.disp.btn_upgrade:
          T.CastleDialogHandler.getInstance().registerDefaultDialogs(R.PrivateResourceVillageUpgradeDialog, new y.PrivateResourceVillageActionDialogProperties(this.villageScrollItemVO.privateResourceVillage.villageInfo, this.villageScrollItemVO.privateResourceVillage.uniqueID));
          break;
        case this.disp.btn_remove:
          T.CastleDialogHandler.getInstance().registerDefaultDialogs(M.PrivateResourceVillageDestroyDialog, new y.PrivateResourceVillageActionDialogProperties(this.villageScrollItemVO.privateResourceVillage.villageInfo, this.villageScrollItemVO.privateResourceVillage.uniqueID));
      }
    }
  };
  Object.defineProperty(CastleResourceVillageListItem.prototype, "villageScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourceVillageListItem, "textFieldManager", {
    get: function () {
      return r.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleResourceVillageListItem;
}(a.ScrollItem);
exports.CastleResourceVillageListItem = D;
var I = require("./29.js");
var T = require("./9.js");
var v = require("./378.js");
var S = require("./535.js");
var A = require("./70.js");
var L = require("./395.js");
var P = require("./113.js");
var M = require("./2793.js");
var R = require("./2796.js");
o.classImplementsInterfaces(D, "MovieClip");
var V = require("./1.js");