Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./18.js");
var u = require("./325.js");
var d = require("./4.js");
var p = require("./491.js");
var h = function (e) {
  function CastleMultiInfoBuildingLayer(t) {
    var i = e.call(this, t) || this;
    var n = new Map();
    n.set(1, CastleMultiInfoBuildingLayer.ONE_ICON_POSITION);
    n.set(2, CastleMultiInfoBuildingLayer.TWO_ICONS_POSITIONS);
    n.set(3, CastleMultiInfoBuildingLayer.THREE_ICONS_POSITIONS);
    n.set(4, CastleMultiInfoBuildingLayer.FOUR_ICONS_POSITIONS);
    n.set(5, CastleMultiInfoBuildingLayer.FIVE_ICONS_POSITIONS);
    n.set(6, CastleMultiInfoBuildingLayer.SIX_ICONS_POSITIONS);
    n.set(7, CastleMultiInfoBuildingLayer.SEVEN_ICONS_POSITIONS);
    n.set(8, CastleMultiInfoBuildingLayer.EIGHT_ICONS_POSITIONS);
    n.set(CastleMultiInfoBuildingLayer.SPECIAL_LAYOUT_START_POSITION + 2, CastleMultiInfoBuildingLayer.SPECIAL_LAYOUT_TWO_ICONS_STACKED);
    i.buildingStats = new C.CastleBuildingStats(i.infoLayer, n, CastleMultiInfoBuildingLayer.SPECIAL_LAYOUT_START_POSITION);
    if (!i.infoLayer.mc_constructionItemPanel.slot_2_0) {
      var o = new Library.CastleInterfaceElements.SmallSlotSecondary();
      o.x = 5;
      o.name = "slot_2_0";
      o.scaleX = o.scaleY = 1.26;
      i.infoLayer.mc_constructionItemPanel.addChild(o);
      i.infoLayer.mc_constructionItemPanel.slot_2_0 = o;
    }
    i.slots = [];
    for (var a = 0; a < r.ConstructionItemConst.SLOT_TYPE_COUNTS.length; ++a) {
      for (var s = 0; s < r.ConstructionItemConst.SLOT_TYPE_COUNTS[a]; ++s) {
        var l = new O.ConstructionItemSlotSmall(new p.ConstructionItemSlotVO(a, s), null, CastleMultiInfoBuildingLayer.onClickConstructionItemSlot, i.infoLayer.mc_constructionItemPanel["slot_" + a + "_" + s]);
        l.disp.y = CastleMultiInfoBuildingLayer.CONSTRUCTION_ITEM_SLOT_POSITION[a];
        i.slots.push(l);
      }
    }
    return i;
  }
  n.__extends(CastleMultiInfoBuildingLayer, e);
  CastleMultiInfoBuildingLayer.onClickConstructionItemSlot = function (e) {
    if (e.isLocked()) {
      f.ConstructionItemsHelper.handleSlotClickLocked(e.slotVO);
    } else {
      var t = new m.CastleConstructionItemsMainDialogProperties(_.CastleConstructionItemsMainDialog.SUBLAYER_ITEMS_ASSIGN, e.slotVO, e.buildingVO);
      g.CastleDialogHandler.getInstance().registerDefaultDialogs(_.CastleConstructionItemsMainDialog, t);
    }
  };
  CastleMultiInfoBuildingLayer.prototype.show = function () {
    e.prototype.show.call(this);
    if (this.slots != null) {
      for (var t = 0, i = this.slots; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.show();
        }
      }
    }
  };
  CastleMultiInfoBuildingLayer.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.currentDisplayedBuilding = null;
    if (this.slots != null) {
      for (var t = 0, i = this.slots; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.hide();
        }
      }
    }
  };
  CastleMultiInfoBuildingLayer.prototype.setBuildingInfo = function (e) {
    this.currentDisplayedBuilding = e;
    var t = e.multiInfoPanelVO;
    if (!t) {
      return false;
    }
    var i = d.CastleModel.wodData.getBuildingVOById(c.ClientConstCastle.CONSTRUCTOR_BUILDING_WOD_LEVEL1);
    var n = i.requiredLevel <= d.CastleModel.userData.level;
    var o = i.isAvailableInAreaTypeAndKingdomId(d.CastleModel.areaData.activeAreaInfo.areaType, d.CastleModel.areaData.activeAreaInfo.kingdomID);
    var a = e.hasConstructionItemSlots;
    this.infoLayer.mc_constructionItemPanel.visible = n && a && o && !e.buildingState.isUnderInitialConstruction;
    if (this.slots != null) {
      for (var r = 0, p = this.slots; r < p.length; r++) {
        var h = p[r];
        if (h !== undefined) {
          h.buildingVO = e;
        }
      }
    }
    this.textFieldmanager.registerTextField(this.infoLayer.txt_title, new l.LocalizedTextVO(t.titleID)).autoFitToBounds = true;
    var g = this.textFieldmanager.registerTextField(this.infoLayer.txt_info, new l.LocalizedTextVO(t.copyID));
    g.autoSize = s.TextFieldAutoSize.LEFT;
    g.visible = e instanceof u.ADecoBuildingVO ? t.items.length <= 4 : t.items.length <= 6;
    this.buildingStats.showBuildingInfo(e, t);
    return true;
  };
  CastleMultiInfoBuildingLayer.prototype.refreshBuildingInfo = function () {
    return !!this.currentDisplayedBuilding && this.setBuildingInfo(this.currentDisplayedBuilding);
  };
  Object.defineProperty(CastleMultiInfoBuildingLayer.prototype, "infoLayer", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMultiInfoBuildingLayer.prototype, "textFieldmanager", {
    get: function () {
      return a.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleMultiInfoBuildingLayer.ONE_ICON_POSITION = [85, 100];
  CastleMultiInfoBuildingLayer.TWO_ICONS_POSITIONS = [44, 107, 123, 107];
  CastleMultiInfoBuildingLayer.THREE_ICONS_POSITIONS = [80, 86, 39, 110, 123, 110];
  CastleMultiInfoBuildingLayer.FOUR_ICONS_POSITIONS = [46, 85, 124, 85, 46, 111, 124, 111];
  CastleMultiInfoBuildingLayer.FIVE_ICONS_POSITIONS = [46, 58, 124, 58, 46, 85, 124, 85, 80, 111];
  CastleMultiInfoBuildingLayer.SIX_ICONS_POSITIONS = [46, 58, 124, 58, 46, 85, 124, 85, 46, 111, 124, 111];
  CastleMultiInfoBuildingLayer.SEVEN_ICONS_POSITIONS = [80, 31, 46, 58, 124, 58, 46, 85, 124, 85, 46, 111, 124, 111];
  CastleMultiInfoBuildingLayer.EIGHT_ICONS_POSITIONS = [46, 31, 124, 31, 46, 58, 124, 58, 46, 85, 124, 85, 46, 111, 124, 111];
  CastleMultiInfoBuildingLayer.SPECIAL_LAYOUT_TWO_ICONS_STACKED = [80, 86, 80, 110];
  CastleMultiInfoBuildingLayer.SPECIAL_LAYOUT_START_POSITION = 7;
  CastleMultiInfoBuildingLayer.CONSTRUCTION_ITEM_SLOT_POSITION = [0, -32, 32];
  return CastleMultiInfoBuildingLayer;
}(o.FlashUIComponent);
exports.CastleMultiInfoBuildingLayer = h;
var g = require("./9.js");
var C = require("./1464.js");
var _ = require("./323.js");
var m = require("./357.js");
var f = require("./239.js");
var O = require("./1469.js");