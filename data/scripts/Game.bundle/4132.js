Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./6.js");
var c = require("./18.js");
var u = require("./4133.js");
var d = require("./71.js");
var p = require("./92.js");
var h = require("./15.js");
var g = require("./4.js");
var C = require("./458.js");
var _ = require("./20.js");
var m = require("./4134.js");
var f = createjs.MouseEvent;
var O = function (e) {
  function CastleBuildingListComponent(t, i) {
    var n = e.call(this, t, i, 3) || this;
    n._componentMC.addEventListener(f.CLICK, n.bindFunction(n.onClick));
    return n;
  }
  n.__extends(CastleBuildingListComponent, e);
  CastleBuildingListComponent.prototype.createBuildListItem = function () {
    var e = new v.CastleBuildingListItem(o.assetsPool.obtain(Library.CastleInterfaceElements.BuildListItem1));
    var t = e.disp;
    if (!D.ButtonHelper.hasBasicButton(t)) {
      D.ButtonHelper.initButton(t, 1, _.ClickFeedbackButtonHover);
    }
    return e;
  };
  CastleBuildingListComponent.prototype.initBuildListItem = function (t) {
    var i = a.castAs(t, "CastleBuildingListItem");
    if (i && i.constructionSlotVO && E.Iso.renderer) {
      i.targetBuilding = E.Iso.renderer.objects.provider.getObjectById(i.constructionSlotVO.objectId);
    }
    e.prototype.initBuildListItem.call(this, t);
  };
  CastleBuildingListComponent.prototype.onItemLockedClick = function (e) {
    if (!g.CastleModel.tutorialData.isTutorialActive) {
      var t = l.int(g.CastleModel.areaData.activeConstructionList.nextAllowedCraneLevelRequirement);
      var i = g.CastleModel.areaData.activeConstructionList.craneBuilding;
      var n = g.CastleModel.areaData.activeConstructionList.buildersBuilding;
      var o = l.int(g.CastleModel.areaData.activeConstructionList.nextAllowedBuildersLevelRequirement);
      if (e.slotVO.pos < g.CastleModel.areaData.activeConstructionList.numConstructionSlots) {
        if (n) {
          E.Iso.renderer.mouse.changeSelectedTarget(n);
          h.CastleBasicController.getInstance().dispatchEvent(new p.IsoEvent(p.IsoEvent.SHOW_PANEL_INFO, [n.buildingVO]));
        } else if (g.CastleModel.userData.userLevel >= o) {
          this.layoutManager.hideAllIngameUIComponents();
          E.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
          if (this.layoutManager.isInMyCastleBuildMode) {
            this.highlightBuildersQuarters();
          }
        }
      } else if (i) {
        E.Iso.renderer.mouse.changeSelectedTarget(i);
        h.CastleBasicController.getInstance().dispatchEvent(new p.IsoEvent(p.IsoEvent.SHOW_PANEL_INFO, [i.buildingVO]));
      } else if (g.CastleModel.userData.userLevel >= t) {
        if (g.CastleModel.areaData.activeConstructionList.isDiscountActive) {
          y.CastleDialogHandler.getInstance().registerDefaultDialogs(b.CastleCraneTeaserDialog, new m.CastleCraneTeaserDialogProperties(g.CastleModel.areaData.activeConstructionList.lastDiscountLevel, g.CastleModel.areaData.activeConstructionList.discount));
        } else {
          this.layoutManager.hideAllIngameUIComponents();
          E.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
          if (this.layoutManager.isInMyCastleBuildMode) {
            this.highlightCrane();
          }
        }
      }
    }
  };
  CastleBuildingListComponent.prototype.onClick = function (e) {
    switch (e.target) {
      case this._componentMC.btn_down:
        this.setCurrentIndex(1);
        break;
      case this._componentMC.btn_up:
        this.setCurrentIndex(-1);
    }
  };
  CastleBuildingListComponent.prototype.highlightCrane = function () {
    var e;
    e = g.CastleModel.areaData.activeAreaInfo.areaType == r.WorldConst.AREA_TYPE_TREASURE_CAMP ? c.ClientConstCastle.CATEGORY_SEASONEVENT : c.ClientConstCastle.CATEGORY_CIVIL;
    var t = this.layoutManager.getPanel(I.CastleDecoShopPanel);
    t.revertHighLightFilters();
    for (var i = T.CastleDecoShopItemArrayHelper.getBuildingsByCategory(e), n = 0; n < i.length; n++) {
      if (s.instanceOfClass(i[n], "CraneBuildingVO")) {
        t.changeCategory(e, l.int(n / I.CastleDecoShopPanel.ITEMS_PER_PAGE), true);
        t.highLightFilteredArrayIndex(n % I.CastleDecoShopPanel.ITEMS_PER_PAGE);
      }
    }
  };
  CastleBuildingListComponent.prototype.highlightBuildersQuarters = function () {
    var e = c.ClientConstCastle.CATEGORY_CIVIL;
    var t = this.layoutManager.getPanel(I.CastleDecoShopPanel);
    t.revertHighLightFilters();
    for (var i = T.CastleDecoShopItemArrayHelper.getBuildingsByCategory(e), n = 0; n < i.length; n++) {
      if (s.instanceOfClass(i[n], "BuildersQuartersBuildingVO")) {
        t.changeCategory(e, l.int(n / I.CastleDecoShopPanel.ITEMS_PER_PAGE), true);
        t.highLightFilteredArrayIndex(n % I.CastleDecoShopPanel.ITEMS_PER_PAGE);
      }
    }
  };
  CastleBuildingListComponent.prototype.requestMoveFromServer = function (e) {
    h.CastleBasicController.getInstance().addEventListener(d.AreaDataEvent.ON_CONSTRUCTION_LIST_CHANGED, this.bindFunction(this.onUpdated));
    g.CastleModel.smartfoxClient.sendCommandVO(new u.C2SMoveConstructionItemVO(e.slotVO.objectId, e.pos));
  };
  CastleBuildingListComponent.prototype.additionalBlockForSwitchItemPos = function (e, t) {
    return g.CastleModel.areaData.activeConstructionList.getSlotByPos(t).objectId <= 0;
  };
  CastleBuildingListComponent.prototype.onUpdated = function (e = null) {
    h.CastleBasicController.getInstance().removeEventListener(d.AreaDataEvent.ON_CONSTRUCTION_LIST_CHANGED, this.bindFunction(this.onUpdated));
    this.updateAllPositions();
  };
  return CastleBuildingListComponent;
}(C.BasicBuildListComponent);
exports.CastleBuildingListComponent = O;
var E = require("./34.js");
var y = require("./9.js");
var b = require("./4135.js");
var D = require("./8.js");
var I = require("./260.js");
var T = require("./627.js");
var v = require("./4136.js");