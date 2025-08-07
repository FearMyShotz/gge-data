Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./6.js");
var h = require("./67.js");
var g = require("./19.js");
var C = require("./4.js");
var _ = require("./68.js");
var m = require("./197.js");
var f = require("./8.js");
var O = require("./11.js");
var E = createjs.Point;
var y = createjs.GlowFilter;
var b = function (e) {
  function CastleLevelUpDialog() {
    var t = this;
    t._inventoryCurrentPage = 0;
    t._inventoryMaxPage = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleLevelUpDialog.NAME) || this;
  }
  n.__extends(CastleLevelUpDialog, e);
  CastleLevelUpDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_unlockInfo, new d.LocalizedTextVO("dialog_levelup_unlockInfo"));
    this.i_level_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_level.txt_value, new u.LocalizedNumberVO(0));
    f.ButtonHelper.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.comp_newBuildings.btn_rightArrow, this.dialogDisp.comp_newBuildings.btn_leftArrow]);
  };
  CastleLevelUpDialog.prototype.applyPropertiesLoaded = function (e = null) {
    var t = I.Iso.controller.viewUpdater;
    if (t) {
      t.switchBuildModeInOwnCastle(false);
    }
    S.CrestHelper.setCrestGraphics(this.dialogDisp.bg.crest, C.CastleModel.userData.playerCrest);
    if (this.levelUpDialogProperties.isLegendLevel) {
      this.dialogDisp.bg.mc_header.gotoAndStop(2);
      this.dialogDisp.mc_level.txt_value.useFilters(_.BitmapFilterHelper.FILTER_GLOW_LEVEL_UP_LEGENDARY);
      this.textFieldManager.registerTextField(this.dialogDisp.txt_level_title, new d.LocalizedTextVO("legendLevel"));
      this.textFieldManager.registerTextField(this.dialogDisp.txt_levelupText, new d.LocalizedTextVO("dialog_levelup_description_legend"));
    } else {
      this.dialogDisp.bg.mc_header.gotoAndStop(1);
      this.dialogDisp.mc_level.txt_value.useFilters(_.BitmapFilterHelper.FILTER_GLOW_LEVEL_UP_NORMAL);
      this.textFieldManager.registerTextField(this.dialogDisp.txt_level_title, new d.LocalizedTextVO("level"));
      this.textFieldManager.registerTextField(this.dialogDisp.txt_levelupText, new d.LocalizedTextVO("dialog_levelup_description"));
    }
    this.i_level_txt_value.textContentVO.numberValue = this.levelUpDialogProperties.newLevel;
    this.i_level_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_level.txt_value, new u.LocalizedNumberVO(this.levelUpDialogProperties.newLevel));
    this.dialogDisp.mc_level.filters = [new y(16766077, 1, 5, 5, 5000)];
    this._inventoryCurrentPage = 0;
    this.fillNewBuildings();
    this.fillRewards();
  };
  CastleLevelUpDialog.prototype.onClick = function (t) {
    if (f.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.comp_newBuildings.btn_leftArrow:
        case this.dialogDisp.comp_newBuildings.btn_rightArrow:
          this.onClickInventoryArrow(t);
      }
    }
  };
  CastleLevelUpDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.dialogDisp.gotoAndPlay(1);
    if (this.layoutManager.tutorialPanel) {
      this.layoutManager.tutorialPanel.hide();
    }
  };
  CastleLevelUpDialog.prototype.onClickInventoryArrow = function (e) {
    var t = this._inventoryCurrentPage;
    if (e.target == this.dialogDisp.comp_newBuildings.btn_leftArrow) {
      this._inventoryCurrentPage = p.int(Math.max(0, this._inventoryCurrentPage - 1));
    } else {
      this._inventoryCurrentPage = p.int(Math.min(this._inventoryMaxPage, this._inventoryCurrentPage + 1));
    }
    if (t != this._inventoryCurrentPage) {
      this.fillNewBuildings();
    }
  };
  CastleLevelUpDialog.prototype.initInventoryArrows = function (e) {
    this._inventoryMaxPage = p.int((e - 1) / CastleLevelUpDialog.INVENTORY_ITEMS_PER_PAGE);
    this.dialogDisp.comp_newBuildings.btn_rightArrow.visible = this._inventoryMaxPage > 0 && this._inventoryCurrentPage < this._inventoryMaxPage;
    this.dialogDisp.comp_newBuildings.btn_leftArrow.visible = this._inventoryMaxPage > 0 && this._inventoryCurrentPage > 0;
  };
  CastleLevelUpDialog.prototype.fillRewards = function () {
    var e = C.CastleModel.levelUpData.getLevelUp(this.levelUpDialogProperties.newLevel, this.levelUpDialogProperties.isLegendLevel, C.CastleModel.userData.splitRunData.getBooleanParam(r.SplitRunConst.SKIP_GROUP_PARAM));
    var t = C.CastleModel.rewardData.getListById(e.rewardID);
    if (this.levelUpDialogProperties.newLevel == 1 && this.levelUpDialogProperties.isLegendLevel) {
      var i = C.CastleModel.levelUpData.getLevelUp(s.PlayerConst.LEVEL_CAP, false, C.CastleModel.userData.splitRunData.getBooleanParam(r.SplitRunConst.SKIP_GROUP_PARAM));
      t.addList(C.CastleModel.rewardData.getListById(i.rewardID), true);
    }
    if (t.length > 4) {
      throw new Error("The level up dialog is designed to hold a maximum of 4 rewards.");
    }
    for (var n = 1; n <= 4; ++n) {
      this.dialogDisp["rewards" + n].visible = n == t.length;
    }
    if (t.length > 0) {
      var o = this.dialogDisp["rewards" + t.length];
      var a = new h.CollectableRenderClipsList(o, "i");
      v.CollectableRenderHelper.displayMultipleItemsAndAddToRenderList(this, a, t, new g.CollectableRenderOptions(g.CollectableRenderOptions.SET_ADVANCED, CastleLevelUpDialog.REWARD_MAX_ITEM_SIZE));
    }
  };
  CastleLevelUpDialog.prototype.fillNewBuildings = function () {
    var e = this.getBuildingsForThisLevel();
    this.dialogDisp.txt_unlockInfo.visible = e.length > 0;
    this.initInventoryArrows(e.length);
    this._inventoryCurrentPage = p.int(Math.min(this._inventoryCurrentPage, this._inventoryMaxPage));
    var t = this._inventoryCurrentPage * CastleLevelUpDialog.INVENTORY_ITEMS_PER_PAGE;
    for (var i = 0; i < CastleLevelUpDialog.INVENTORY_ITEMS_PER_PAGE; i++) {
      var n = this.dialogDisp.comp_newBuildings["i" + i];
      if (t < e.length) {
        n.visible = true;
        n.mouseChildren = false;
        var o = e[t];
        A.WodPicHelper.addWodPic(o, n.mc_item, CastleLevelUpDialog.BUILDING_MAX_ITEM_SIZE.x, CastleLevelUpDialog.BUILDING_MAX_ITEM_SIZE.y, C.CastleModel.kingdomData.getKingdomVOByID(l.WorldClassic.KINGDOM_ID).kingdomName);
        if (o.objectType == D.IsoObjectEnum.DECO) {
          n.toolTipText = o.getNameString();
        } else {
          n.toolTipText = "building_with_level" + m.CastleToolTipManager.ID_PARAM_SEPERATOR + [o.getNameString(), o.level].toString();
        }
      } else {
        n.visible = false;
      }
      t++;
    }
  };
  CastleLevelUpDialog.prototype.getBuildingsForThisLevel = function () {
    var e;
    var t = [];
    var i = false;
    var n = new Map();
    for (var o = 0, s = Array.from(C.CastleModel.wodData.voSubList(T.CastleWodData.TYPE_BUILDING).values()); o < s.length; o++) {
      var r = s[o];
      if (r !== undefined && a.instanceOfClass(r, "ABasicBuildingVO")) {
        i = (e = r).requiredLegendLevel > 0;
        var l = p.int(e.getRequiredLevel());
        if (i == this.levelUpDialogProperties.isLegendLevel && l == this.levelUpDialogProperties.newLevel && e.onlyInEventIds.length <= 0 && (e.isAvailableInAreaType(c.WorldConst.AREA_TYPE_CASTLE) || e.isAvailableInAreaType(c.WorldConst.AREA_TYPE_KINGDOM_CASTLE)) && (n.get(e.name) == null || n.get(e.name).level < e.level)) {
          n.set(e.name, e);
        }
      }
    }
    if (n != null) {
      for (var u = 0, d = Array.from(n.values()); u < d.length; u++) {
        if ((e = d[u]) !== undefined) {
          t.push(C.CastleModel.wodData.createVObyWOD(e.wodId, T.CastleWodData.TYPE_BUILDING));
        }
      }
    }
    t.sort(L.CastleDecoShopItemArrayHelper.defaultSortOrderBuilding);
    return t;
  };
  Object.defineProperty(CastleLevelUpDialog.prototype, "levelUpDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleLevelUpDialog.__initialize_static_members = function () {
    CastleLevelUpDialog.NAME = "CastleLevelUp";
    CastleLevelUpDialog.BUILDING_MAX_ITEM_SIZE = new E(53, 75);
    CastleLevelUpDialog.REWARD_MAX_ITEM_SIZE = new E(60, 60);
    CastleLevelUpDialog.INVENTORY_ITEMS_PER_PAGE = 4;
  };
  return CastleLevelUpDialog;
}(O.CastleExternalDialog);
exports.CastleLevelUpDialog = b;
var D = require("./80.js");
var I = require("./34.js");
var T = require("./56.js");
var v = require("./25.js");
var S = require("./61.js");
var A = require("./63.js");
var L = require("./627.js");
o.classImplementsInterfaces(b, "ICollectableRendererList");
b.__initialize_static_members();