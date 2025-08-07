Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./6.js");
var h = require("./23.js");
var g = require("./23.js");
var C = require("./16.js");
var _ = require("./1376.js");
var m = require("./118.js");
var f = require("./233.js");
var O = require("./4.js");
var E = require("./8.js");
var y = require("./41.js");
var b = require("./73.js");
var D = require("./35.js");
var I = require("./248.js");
var T = createjs.Point;
var v = function (e) {
  function CastleAllianceDialogForge(t) {
    var i = this;
    i._preventShowEquipTooltip = false;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).itxt_copy = i.textFieldManager.registerTextField(i.subLayerDisp.txt_copy, new d.TextVO(""));
    i.itxt_forgelvl = i.textFieldManager.registerTextField(i.subLayerDisp.txt_forgelvl, new d.TextVO(""));
    i.itxt_cost = i.textFieldManager.registerTextField(i.subLayerDisp.txt_cost, new c.LocalizedNumberVO());
    i.itxt_storageEquipment = i.textFieldManager.registerTextField(i.subLayerDisp.mc_storageSpace.txt_storage, new u.LocalizedTextVO(o.GenericTextIds.VALUE_PROPORTIONAL_VALUE));
    i.itxt_storageGem = i.textFieldManager.registerTextField(i.subLayerDisp.mc_storageSpaceGem.txt_storage, new u.LocalizedTextVO(o.GenericTextIds.VALUE_PROPORTIONAL_VALUE));
    i.subLayerDisp.mc_storageSpace.toolTipText = "dialog_equipmentSpace_tooltip";
    i.subLayerDisp.mc_storageSpace.mouseChildren = false;
    i.subLayerDisp.mc_storageSpaceGem.toolTipText = "dialog_gemSpace_tooltip";
    i.subLayerDisp.mc_storageSpaceGem.mouseChildren = false;
    i.subLayerDisp.mc_equip.mouseChildren = false;
    E.ButtonHelper.initBasicButtons([i.subLayerDisp.btn_upgrade, i.subLayerDisp.btn_craft]);
    return i;
  }
  n.__extends(CastleAllianceDialogForge, e);
  CastleAllianceDialogForge.prototype.showHelp = function () {
    S.CastleDialogHandler.getInstance().showHelper("", l.Localize.text("help_allianceForge"));
  };
  CastleAllianceDialogForge.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    if (!this.subLayerDisp.ani_success.isPlaying) {
      a.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_equip);
      this.subLayerDisp.mc_equip.equipVO = null;
      this.subLayerDisp.mc_equip.alpha = 0;
      this.subLayerDisp.mc_equip.gotoAndStop(1);
      this.onForgeData();
    }
    O.CastleModel.allianceData.addEventListener(m.CastleEquipmentEvent.FORGE_DATA_RECEIVED, this.bindFunction(this.onForgeData));
    this.controller.addEventListener(m.CastleEquipmentEvent.FORGE_CRAFT_EXECUTED, this.bindFunction(this.onForgeItem));
    this.controller.addEventListener(f.CastleGemEvent.ALLIANCE_FORGE_GEMCRAFT_EXECUTED, this.bindFunction(this.onForgeGem));
    this.controller.addEventListener(m.CastleEquipmentEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpaceUpdate));
    this.controller.addEventListener(f.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpaceUpdate));
    this.updateStorageText();
  };
  CastleAllianceDialogForge.prototype.onInventorySpaceUpdate = function (e) {
    this.updateStorageText();
  };
  CastleAllianceDialogForge.prototype.updateStorageText = function () {
    this.itxt_storageEquipment.textContentVO.textReplacements = [O.CastleModel.equipData.filledInventorySpace, O.CastleModel.equipData.playerTotalInventorySpace];
    this.itxt_storageEquipment.color = O.CastleModel.equipData.isInventoryFull ? C.ClientConstColor.FONT_INSUFFICIENT_COLOR : C.ClientConstColor.FONT_DEFAULT_COLOR;
    this.itxt_storageGem.textContentVO.textReplacements = [O.CastleModel.gemData.filledInventorySpace, O.CastleModel.gemData.playerTotalInventorySpace];
    this.itxt_storageGem.color = O.CastleModel.gemData.isInventoryFull ? C.ClientConstColor.FONT_INSUFFICIENT_COLOR : C.ClientConstColor.FONT_DEFAULT_COLOR;
  };
  CastleAllianceDialogForge.prototype.onForgeItem = function (e) {
    this.subLayerDisp.mc_equip.mouseChildren = false;
    a.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_equip);
    this.subLayerDisp.mc_equip.scaleX = this.subLayerDisp.mc_equip.scaleY = 1;
    b.EquipmentIconHelper.addEquipmentIcon(e.equipmentInventory[0], this.subLayerDisp.mc_equip, 129.79999999999998, 129.79999999999998, function (e) {
      if (e.parent) {
        y.CastleMovieClipHelper.createHitArea(e.parent);
      }
    });
    this.subLayerDisp.mc_equip.equipVO = e.equipmentInventory[0];
    this.subLayerDisp.ani_success.play();
    g.TweenMax.fromTo(this.subLayerDisp.mc_equip, 1, {
      alpha: 0.2
    }, {
      alpha: 1,
      ease: h.Linear.easeIn,
      onStart: this.bindFunction(this.onCompleteBounce)
    });
  };
  CastleAllianceDialogForge.prototype.onForgeGem = function (e) {
    this.subLayerDisp.mc_equip.mouseChildren = false;
    a.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_equip);
    this.subLayerDisp.mc_equip.scaleX = this.subLayerDisp.mc_equip.scaleY = 1;
    this.subLayerDisp.mc_equip.addChild(I.CastleGemRenderer.renderAsset(e.gemInventory[0], null, new T(129.79999999999998, 129.79999999999998)));
    this.subLayerDisp.mc_equip.equipVO = e.gemInventory[0];
    this.subLayerDisp.mc_equip.gotoAndStop(0);
    this.subLayerDisp.ani_success.play();
    g.TweenMax.fromTo(this.subLayerDisp.mc_equip, 1, {
      alpha: 0.2
    }, {
      alpha: 1,
      ease: h.Linear.easeIn,
      onStart: this.bindFunction(this.onCompleteBounce)
    });
  };
  CastleAllianceDialogForge.prototype.throwEquipInInventory = function () {
    this._preventShowEquipTooltip = true;
    A.TooltipManagerFacade.hideAllTooltips();
    E.ButtonHelper.enableButton(this.subLayerDisp.btn_craft, false);
    g.TweenMax.fromTo(this.subLayerDisp.mc_equip, 1, {
      alpha: 1
    }, {
      alpha: 0,
      ease: h.Linear.easeIn,
      onComplete: this.bindFunction(this.onCompleteFadeOut)
    });
  };
  CastleAllianceDialogForge.prototype.onCompleteFadeOut = function (e = null) {
    this._preventShowEquipTooltip = false;
    A.TooltipManagerFacade.hideAllTooltips();
    a.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_equip);
    this.subLayerDisp.mc_equip.equipVO = null;
    this.updateCraftButton();
  };
  CastleAllianceDialogForge.prototype.onCompleteBounce = function (e = null) {
    this.updateCraftButton();
  };
  CastleAllianceDialogForge.prototype.onForgeData = function (e = null) {
    this.setTextsAndValues();
  };
  CastleAllianceDialogForge.prototype.updateCraftButton = function () {
    if (this.isAllowedToCraft && !this.isEquipmentOnScreen) {
      this.subLayerDisp.btn_craft.toolTipText = "allyforge_tooltip_craft";
      this.subLayerDisp.btn_craft.gotoAndStop(1);
      E.ButtonHelper.enableButton(this.subLayerDisp.btn_craft, true);
    } else if (this.isEquipmentOnScreen) {
      this.subLayerDisp.btn_craft.toolTipText = "allyforge_tooltip_collect";
      this.subLayerDisp.btn_craft.gotoAndStop(2);
      E.ButtonHelper.enableButton(this.subLayerDisp.btn_craft, true);
    } else {
      this.subLayerDisp.btn_craft.toolTipText = "allyforge_alreadyCrafted_gems_tooltip";
      if (this.isInventoryFull) {
        this.subLayerDisp.btn_craft.toolTipText = "allyforge_tooltip_inventoryFull_equipment";
      }
      this.subLayerDisp.btn_craft.gotoAndStop(1);
      E.ButtonHelper.enableButton(this.subLayerDisp.btn_craft, false);
    }
  };
  CastleAllianceDialogForge.prototype.setTextsAndValues = function () {
    var e = p.int(O.CastleModel.allianceBuffData.getAllianceForgeCostByLevel(O.CastleModel.allianceData.myAllianceVO.getBoostLevel(r.AllianceConst.TYPE_FORGE_UPGRADE)));
    var t = p.int(O.CastleModel.costsData.getFinalCostsC1(e));
    this.itxt_copy.textContentVO = new u.LocalizedTextVO("allianceForge_gems_copy");
    this.itxt_forgelvl.textContentVO = new u.LocalizedTextVO("allyforge_copy_lvl");
    this.itxt_forgelvl.textContentVO.textReplacements = [O.CastleModel.allianceData.allyForgeLevel];
    this.itxt_cost.textContentVO.numberValue = t;
    this.itxt_cost.color = O.CastleModel.currencyData.c1Amount < t ? C.ClientConstColor.FONT_INSUFFICIENT_COLOR : C.ClientConstColor.FONT_DEFAULT_COLOR;
    this.subLayerDisp.icon_inventoryFull.toolTipText = this.setInventoryTooltip;
    this.subLayerDisp.info_costs_tooltip.toolTipText = "cash";
    this.subLayerDisp.icon_inventoryFull.visible = this.isInventoryFull;
    this.updateCraftButton();
    if (O.CastleModel.allianceData.myAllianceVO.isBoostUpgradeable(r.AllianceConst.TYPE_FORGE_UPGRADE)) {
      if (O.CastleModel.allianceData.hasRight(O.CastleModel.userData.allianceRank, r.AllianceConst.TYPE_FORGE_UPGRADE)) {
        this.subLayerDisp.btn_upgrade.toolTipText = "allyforge_tooltip_upragde";
        E.ButtonHelper.enableButton(this.subLayerDisp.btn_upgrade, true);
      } else {
        this.subLayerDisp.btn_upgrade.toolTipText = "dialog_alliance_rankToLow";
        E.ButtonHelper.enableButton(this.subLayerDisp.btn_upgrade, false);
      }
    } else {
      this.subLayerDisp.btn_upgrade.toolTipText = "dialog_alliance_maxUpgradeLevel";
      E.ButtonHelper.enableButton(this.subLayerDisp.btn_upgrade, false);
    }
  };
  CastleAllianceDialogForge.prototype.hide = function () {
    e.prototype.hide.call(this);
    O.CastleModel.allianceData.removeEventListener(m.CastleEquipmentEvent.FORGE_DATA_RECEIVED, this.bindFunction(this.onForgeData));
    this.controller.removeEventListener(m.CastleEquipmentEvent.FORGE_CRAFT_EXECUTED, this.bindFunction(this.onForgeItem));
    this.controller.removeEventListener(f.CastleGemEvent.ALLIANCE_FORGE_GEMCRAFT_EXECUTED, this.bindFunction(this.onForgeGem));
    this.controller.removeEventListener(m.CastleEquipmentEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpaceUpdate));
    this.controller.removeEventListener(f.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpaceUpdate));
  };
  CastleAllianceDialogForge.prototype.onClick = function (t) {
    if (E.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.subLayerDisp.btn_craft:
          this.onCraftButtonPressed();
          break;
        case this.subLayerDisp.btn_upgrade:
          this.onUpgradeButtonPressed();
          break;
        case this.subLayerDisp.mc_equip:
          if (s.currentBrowserInfo.isTouchEvent(t) && this.subLayerDisp.mc_equip.equipVO) {
            if (b.EquipmentIconHelper.equipToolTip.disp.visible) {
              b.EquipmentIconHelper.hideEquipmentToolTip();
            } else if (b.EquipmentIconHelper.relicEquipToolTip.disp.visible) {
              b.EquipmentIconHelper.hideRelicEquipmentToolTip();
            } else {
              b.EquipmentIconHelper.showToolTip(this.subLayerDisp.mc_equip, this.subLayerDisp.mc_equip.equipVO);
            }
            t.stopPropagation();
          }
      }
    }
  };
  CastleAllianceDialogForge.prototype.onMouseOver = function (t) {
    if (!this._preventShowEquipTooltip) {
      e.prototype.onMouseOver.call(this, t);
      if (this.subLayerDisp.mc_equip.equipVO && t.target == this.subLayerDisp.mc_equip) {
        b.EquipmentIconHelper.showToolTip(this.subLayerDisp.mc_equip, this.subLayerDisp.mc_equip.equipVO);
      }
    }
  };
  CastleAllianceDialogForge.prototype.onUpgradeButtonPressed = function () {
    S.CastleDialogHandler.getInstance().registerDefaultDialogs(L.CastleAllianceForgeUpgradeDialog);
  };
  CastleAllianceDialogForge.prototype.onCraftButtonPressed = function () {
    if (this.isAllowedToCraft && !this.isEquipmentOnScreen) {
      O.CastleModel.smartfoxClient.sendCommandVO(new _.C2SRequestForgeCraftVO());
      E.ButtonHelper.enableButton(this.subLayerDisp.btn_craft, false);
    } else if (this.isEquipmentOnScreen) {
      this.throwEquipInInventory();
    }
  };
  Object.defineProperty(CastleAllianceDialogForge.prototype, "isEquipmentOnScreen", {
    get: function () {
      return this.subLayerDisp.mc_equip.equipVO != null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceDialogForge.prototype, "setInventoryTooltip", {
    get: function () {
      if (O.CastleModel.allianceData.myAllianceVO.isInventoryFull && !O.CastleModel.gemData.isInventoryFull) {
        return "allyforge_tooltip_inventoryFull_equipment";
      } else if (!O.CastleModel.allianceData.myAllianceVO.isInventoryFull && O.CastleModel.gemData.isInventoryFull) {
        return "allyforge_tooltip_inventoryFull_gems";
      } else {
        return "allyforge_tooltip_inventoryFull_general";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceDialogForge.prototype, "isInventoryFull", {
    get: function () {
      return O.CastleModel.allianceData.myAllianceVO.isInventoryFull || O.CastleModel.gemData.isInventoryFull;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceDialogForge.prototype, "isAllowedToCraft", {
    get: function () {
      return !!O.CastleModel.allianceData.myAllianceVO && O.CastleModel.allianceData.myAllianceVO.isAbleToForge;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceDialogForge;
}(D.CastleDialogSubLayer);
exports.CastleAllianceDialogForge = v;
var S = require("./9.js");
var A = require("./200.js");
var L = require("./2444.js");
s.classImplementsInterfaces(v, "ICollectableRendererList", "ISublayer");