Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./58.js");
var p = require("./31.js");
var h = require("./19.js");
var g = require("./92.js");
var C = require("./13.js");
var _ = require("./4.js");
var m = require("./81.js");
var f = require("./8.js");
var O = require("./762.js");
var E = require("./1441.js");
var y = require("./1.js");
var b = createjs.Point;
var D = function (e) {
  function DecorationStorageDialogListItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(DecorationStorageDialogListItem, e);
  DecorationStorageDialogListItem.prototype.initLoaded = function () {
    e.prototype.initLoaded.call(this);
    var t = this.getItemMc();
    f.ButtonHelper.initButtons([t.btn_build, t.btn_sell], R.ClickFeedbackButtonBackground);
    f.ButtonHelper.initButtons([t.btn_buildSmall, t.btn_fusion], V.ClickFeedbackButton);
    v.CastleComponent.textFieldManager.registerTextField(t.btn_build.txt_text, new r.LocalizedTextVO("btn_place")).autoFitToBounds = true;
    t.mc_new.toolTipText = "new";
    t.btn_buildSmall.toolTipText = "btn_place";
    t.mc_local.toolTipText = "LocalBuildingIndicatorBubble_tooltip";
    t.mc_local.mouseChildren = false;
  };
  DecorationStorageDialogListItem.prototype.fill = function () {
    this.updateName();
    this.updateIcon();
    this.updateValues();
    this.updateButtons();
    this.updateNewIndicator();
    this.updateLocalIndicator();
  };
  DecorationStorageDialogListItem.prototype.updateName = function () {
    var e = this.getItemMc();
    if (this.vo.buildingVO.downgradeWodID > 0 || this.vo.buildingVO.upgradeWodID > 0) {
      v.CastleComponent.textFieldManager.registerTextField(e.txt_name, new r.LocalizedTextVO("ownername_level", [c.Localize.text(this.vo.buildingVO.getNameString()), this.vo.buildingVO.level])).autoFitToBounds = true;
    } else {
      v.CastleComponent.textFieldManager.registerTextField(e.txt_name, new r.LocalizedTextVO(this.vo.buildingVO.getNameString())).autoFitToBounds = true;
    }
  };
  DecorationStorageDialogListItem.prototype.updateIcon = function () {
    var e = this.getItemMc();
    var t = e.mc_item;
    var i = y.castAs(this.vo.buildingVO, "ADecoBuildingVO");
    var n = new I.CollectableItemBuildingVO();
    n.buildingVO = this.vo.buildingVO;
    S.CollectableRenderHelper.displaySingleItemComplete(this, new p.CollectableRenderClips(t).addInfoBtn(e.btn_info), n, new h.CollectableRenderOptions(h.CollectableRenderOptions.SET_BASIC, new b(124, 102)));
    var o = t.mc_amount;
    if (i && i.isUnique()) {
      o.visible = false;
    } else {
      o.visible = true;
      var a = u.int(M.instanceOfClass(this.vo.buildingVO, "CustomDecoBuildingVO") ? 1 : _.CastleModel.decoStorage.getCurrentStorage().getAmount(this.vo.buildingVO.wodId));
      v.CastleComponent.textFieldManager.registerTextField(o.txt_value, new l.LocalizedNumberVO(a)).autoFitToBounds = true;
    }
    var s = this.vo.getFusionInfoVO();
    t.mc_fusionTarget.visible = s && s.isFusionTarget;
    t.mc_fusionSource.visible = s && s.isFusionSource;
    t.mc_fusionUnique.visible = !!i && i.isUnique();
    t.mc_effect.visible = !!i && !!i.allBuildingEffects && i.allBuildingEffects.length > 0;
    t.mc_relic.visible = this.vo.buildingVO.isRelicBuilding;
    if (t.cacheCanvas) {
      t.uncache();
    }
  };
  DecorationStorageDialogListItem.prototype.updateButtons = function () {
    var e = this.getItemMc();
    var t = !!M.instanceOfClass(this.vo.buildingVO, "ADecoBuildingVO") && this.vo.buildingVO.fusionInfoVO.isFusionTarget;
    t = t && !a.EnvGlobalsHandler.globals.isCrossplay;
    e.btn_buildSmall.visible = t;
    e.btn_fusion.visible = t;
    e.btn_build.visible = !t;
    var i = _.CastleModel.userData.userLevel >= d.ClientConstLevelRestrictions.MIN_LEVEL_FUSION_FORGE;
    f.ButtonHelper.enableButton(e.btn_fusion, i);
    e.btn_fusion.toolTipText = i ? "fusionUpgrade_tt" : "requiresLevel70_tt";
    this.updateSellButton(e);
    v.CastleComponent.textFieldManager.registerTextField(e.btn_sell.txt_text, new s.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId("sell_tooltip"))).autoFitToBounds = true;
    e.btn_sell.toolTipText = this.vo.canBeSold() ? null : "notSellable";
    if (_.CastleModel.areaData.activeArea) {
      var n = this.vo.buildingVO.isAvailableInAreaType(_.CastleModel.areaData.activeArea.areaInfo.areaType);
      var o = this.vo.buildingVO.isAvailableByKingdomId(_.CastleModel.areaData.activeArea.areaInfo.kingdomID);
      var r = this.vo.buildingVO.canBeBuildByResourceFields();
      var l = n && o && r;
      var c = _.CastleModel.areaData.activeIsoData.objects.provider.hasMaxAmountOfObjectsByType(this.vo.buildingVO);
      f.ButtonHelper.enableButton(e.btn_build, l && !c);
      f.ButtonHelper.enableButton(e.btn_buildSmall, l && !c);
      var u = null;
      var p = "btn_place";
      if (o) {
        if (n && r) {
          if (c) {
            u = "panel_shop_maxBuildingAmount";
            p = "panel_shop_maxBuildingAmount";
          }
        } else {
          u = "alert_buildingNotPlacableInArea";
          p = "alert_buildingNotPlacableInArea";
        }
      } else {
        u = "errorCode_177";
        p = "errorCode_177";
      }
      e.btn_build.toolTipText = u;
      e.btn_buildSmall.toolTipText = p;
    }
    if (e.btn_sell.cacheCanvas) {
      e.btn_sell.updateCache();
    }
  };
  DecorationStorageDialogListItem.prototype.updateSellButton = function (e) {
    if (this.vo.getSellPrice() > 0) {
      e.btn_sell.visible = !a.EnvGlobalsHandler.globals.isCrossplay;
    } else {
      e.btn_sell.visible = false;
    }
    f.ButtonHelper.enableButton(e.btn_sell, this.vo.canBeSold());
  };
  DecorationStorageDialogListItem.prototype.updateValues = function () {
    for (var e = 0; e < 6; ++e) {
      this.getValueMc(e).visible = false;
    }
    var t = this.vo.buildingVO;
    if (t) {
      var i = t.storageDialogVO.items.length;
      this.fillItemsFromDialogueVO(t.storageDialogVO, 0, i);
      if (t.buildingGroundType != x.ClientConstCastle.BUILDINGGROUND_TYPE_DECO && !this.isRelicBuilding(t)) {
        this.fillItemsFromDialogueVO(t.infoDialogVO, i, DecorationStorageDialogListItem.NUMBER_OF_VALUE_ITEMS, true);
      }
    }
  };
  DecorationStorageDialogListItem.prototype.isRelicBuilding = function (e) {
    return M.instanceOfClass(e, "RelicFarmBuildingVO") || M.instanceOfClass(e, "RelicQuarryBuildingVO") || M.instanceOfClass(e, "RelicWoodcutterBuildingVO");
  };
  DecorationStorageDialogListItem.prototype.fillItemsFromDialogueVO = function (e, t, i, n) {
    var o;
    if (n === undefined) {
      n = false;
    }
    o = n ? e.items.filter(function (e) {
      return e.isVisibleInInfoDialog;
    }) : e.items;
    var s = 0;
    for (var r = t; r < i; ++r) {
      var l = this.getValueMc(r);
      if (l) {
        var c = o[s];
        s++;
        l.mouseChildren = false;
        if (c) {
          l.visible = true;
          v.CastleComponent.textFieldManager.registerTextField(l.txt_value, c.textVO).autoFitToBounds = true;
          l.toolTipText = c.tooltipText;
          a.MovieClipHelper.replaceMovieClip(l.mc_icon, c.iconClass);
          if (c.iconClass != null) {
            a.MovieClipHelper.scaleToFit(l.mc_icon, 30, 30);
          }
        }
      }
    }
  };
  DecorationStorageDialogListItem.prototype.updateNewIndicator = function () {
    if (this.vo) {
      this.getItemMc().mc_new.visible = _.CastleModel.decoStorage.getCurrentStorage().isNew(this.vo.buildingVO);
    }
  };
  DecorationStorageDialogListItem.prototype.updateLocalIndicator = function () {
    if (this.vo) {
      this.getItemMc().mc_local.visible = _.CastleModel.decoStorage.getCurrentStorage().isInLocalStorage(this.vo.buildingVO);
    }
  };
  DecorationStorageDialogListItem.prototype.getValueMc = function (e) {
    return this.getItemMc().getChildByName("mc_value" + e);
  };
  DecorationStorageDialogListItem.prototype.onClick = function (t) {
    if (f.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      var i = this.getItemMc();
      switch (t.target) {
        case i.btn_buildSmall:
        case i.btn_build:
          this.onBuildButtonClicked();
          break;
        case i.btn_fusion:
          this.onFusionButtonClicked();
          break;
        case i.btn_sell:
          this.onSellButtonClicked();
      }
    }
  };
  DecorationStorageDialogListItem.prototype.onBuildButtonClicked = function () {
    v.CastleComponent.controller.dispatchEvent(new g.IsoEvent(g.IsoEvent.ON_DRAG_STARTED_STORAGE_DECO, [this.vo.buildingVO]));
    T.Iso.renderer.mouse.startDraggingOfNewBuyObject(this.vo.buildingVO);
  };
  DecorationStorageDialogListItem.prototype.onFusionButtonClicked = function () {
    var e = new I.CollectableItemBuildingVO();
    e.buildingVO = this.vo.buildingVO;
    var t = new L.DecorationForgeSelectResultVO(e);
    v.CastleComponent.dialogHandler.registerDefaultDialogs(P.DecorationForgeMainDialog, new E.DecorationForgeMainDialogProperties(t));
  };
  DecorationStorageDialogListItem.prototype.onSellButtonClicked = function () {
    v.CastleComponent.dialogHandler.registerDefaultDialogs(A.CastleConstructionSellDialog, new O.CastleConstructionSellDialogProperties(this.vo.buildingVO));
  };
  Object.defineProperty(DecorationStorageDialogListItem.prototype, "vo", {
    get: function () {
      return this.data;
    },
    enumerable: true,
    configurable: true
  });
  DecorationStorageDialogListItem.NUMBER_OF_VALUE_ITEMS = 6;
  return DecorationStorageDialogListItem;
}(m.AInfiniteScrollListItem);
exports.DecorationStorageDialogListItem = D;
var I = require("./291.js");
var T = require("./33.js");
var v = require("./14.js");
var S = require("./25.js");
var A = require("./763.js");
var L = require("./624.js");
var P = require("./987.js");
o.classImplementsInterfaces(D, "ICollectableRendererList");
var M = require("./1.js");
var R = require("./121.js");
var V = require("./36.js");
var x = require("./18.js");