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
var u = require("./5.js");
var d = require("./5.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./3.js");
var C = require("./6.js");
var _ = require("./57.js");
var m = require("./18.js");
var f = require("./39.js");
var O = require("./325.js");
var E = require("./4.js");
var y = require("./35.js");
var b = require("./68.js");
var D = require("./8.js");
var I = require("./14.js");
var T = createjs.MouseEvent;
var v = function (e) {
  function DecoShopPanelItemComponent(t) {
    var i = e.call(this) || this;
    i._disp = t;
    i._disp.addEventListener(T.MOUSE_DOWN, i.bindFunction(i.onMouseDown));
    i._disp.addEventListener(T.MOUSE_OVER, i.bindFunction(i.onMouseOver));
    i._disp.addEventListener(T.MOUSE_OUT, i.bindFunction(i.onMouseOut));
    i._disp.addEventListener(T.CLICK, i.bindFunction(i.onClick));
    i._onMouseDownItem = new _.Signal(DecoShopPanelItemComponent);
    i._onClickUpgrade = new _.Signal(DecoShopPanelItemComponent);
    i._onClickItem = new _.Signal(DecoShopPanelItemComponent);
    i._onClickInfo = new _.Signal(DecoShopPanelItemComponent);
    i._onClickSell = new _.Signal(DecoShopPanelItemComponent);
    i._onClickJumpTo = new _.Signal(DecoShopPanelItemComponent);
    i._onMouseOverItem = new _.Signal(DecoShopPanelItemComponent);
    i._onMouseOverSell = new _.Signal(DecoShopPanelItemComponent);
    i._onMouseOutItem = new _.Signal(DecoShopPanelItemComponent);
    i._onMouseOutSell = new _.Signal(DecoShopPanelItemComponent);
    i._onLoaded = new _.Signal(DecoShopPanelItemComponent);
    return i;
  }
  n.__extends(DecoShopPanelItemComponent, e);
  DecoShopPanelItemComponent.prototype.clearListeners = function () {
    if (this._disp) {
      this._disp.removeEventListener(T.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this._disp.removeEventListener(T.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      this._disp.removeEventListener(T.MOUSE_OUT, this.bindFunction(this.onMouseOut));
      this._disp.removeEventListener(T.CLICK, this.bindFunction(this.onClick));
      this._onMouseDownItem.removeAll();
      this._onClickUpgrade.removeAll();
      this._onClickItem.removeAll();
      this._onClickInfo.removeAll();
      this._onClickSell.removeAll();
      this._onClickJumpTo.removeAll();
      this._onMouseOverItem.removeAll();
      this._onMouseOverSell.removeAll();
      this._onMouseOutItem.removeAll();
      this._onMouseOutSell.removeAll();
      this._onLoaded.removeAll();
    }
  };
  DecoShopPanelItemComponent.prototype.destroy = function () {
    this.clearListeners();
    e.prototype.destroy.call(this);
  };
  DecoShopPanelItemComponent.prototype.onMouseDown = function (e) {
    if (this._disp == e.target && this._onMouseDownItem) {
      this._onMouseDownItem.dispatch(this);
    }
  };
  DecoShopPanelItemComponent.prototype.onMouseOver = function (e) {
    if (this._disp.btn_sell == e.target) {
      if (this._onMouseOverSell) {
        this._onMouseOverSell.dispatch(this);
      }
    } else if (e.target == this._disp.bg && this._onMouseOverItem) {
      this._onMouseOverItem.dispatch(this);
    }
  };
  DecoShopPanelItemComponent.prototype.onMouseOut = function (e) {
    if (this._disp.btn_sell == e.target) {
      if (this._onMouseOutSell) {
        this._onMouseOutSell.dispatch(this);
      }
    } else if (e.target == this._disp.bg && this._onMouseOutItem) {
      this._onMouseOutItem.dispatch(this);
    }
  };
  DecoShopPanelItemComponent.prototype.onClick = function (e) {
    if (D.ButtonHelper.isButtonEnabled(e.target)) {
      if (this._disp.btn_upgrade == e.target) {
        if (this._onClickUpgrade) {
          this._onClickUpgrade.dispatch(this);
        }
      } else if (this._disp.btn_info == e.target) {
        if (this._onClickInfo) {
          this._onClickInfo.dispatch(this);
        }
      } else if (this._disp.btn_sell == e.target) {
        if (this._onClickSell) {
          this._onClickSell.dispatch(this);
        }
      } else if (this.disp.btn_jump_to == e.target) {
        if (this._onClickJumpTo) {
          this._onClickJumpTo.dispatch(this);
        }
      } else if (this._onClickItem) {
        this._onClickItem.dispatch(this, e);
      }
    }
  };
  DecoShopPanelItemComponent.prototype.changeToMaxAmountReached = function (e) {
    this.disp.mc_contentHolder.icon_lock_unreachable.visible = true;
    this.disp.mc_contentHolder.icon_lock.visible = false;
    this.disp.bg.actLikeButton = true;
    this.triggerLock();
    this.disp.mc_contentHolder.icon_lock_unreachable.itxt_text = a.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_contentHolder.icon_lock_unreachable.txt_text, new h.LocalizedTextVO(e), new s.InternalGGSTextFieldConfigVO(true));
  };
  DecoShopPanelItemComponent.prototype.triggerLock = function () {
    var e = this.disp.mc_contentHolder;
    var t = this.disp.shopVO.isAvailableByLevelAndEffect && !this.disp.mc_contentHolder.icon_lock_unreachable.visible;
    e.icon_amount.visible = false;
    for (var i = 0; i < 4; i++) {
      e.getChildByName("txt_cost" + i).visible = t;
    }
    e.txt_specialCost.visible = t;
    this.disp.btn_upgrade.visible = t;
  };
  DecoShopPanelItemComponent.prototype.fillAmountInfo = function (e) {
    var t = E.CastleModel.decoStorage.getCurrentStorage();
    var i = 0;
    i = e == m.ClientConstCastle.CATEGORY_STORAGE ? C.int(this.disp.shopVO.inventoryAmount) : C.int(t.getAmountForBuildMenu(this.disp.shopVO.wodId));
    a.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_contentHolder.icon_amount.txt_amount, new g.NumberVO(i), new s.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    this.disp.mc_contentHolder.icon_amount.visible = i > 0;
    if (i > 0) {
      this.disp.bg.gotoAndStop(DecoShopPanelItemComponent.BG_FRAME_AVAILABLE_IN_STORAGE);
    }
    var n = t.getRelevantWodIdListForBuildMenu(this.disp.shopVO.wodId).reduce(function (e, i) {
      return e + t.getNewAmountByWodID(i);
    }, 0);
    this.disp.mc_contentHolder.marker_new.visible = n > 0;
    this.disp.mc_contentHolder.marker_new.toolTipText = "new";
  };
  DecoShopPanelItemComponent.prototype.fillPriceInfo = function () {
    var e = E.CastleModel.areaData.activeCommonInfo.builderDiscount;
    var t = E.CastleModel.subscriptionData.isEffectTypeActive(y.EffectTypeEnum.EFFECT_TYPE_BUILDING_COSTS_BONUS);
    if (t) {
      e += E.CastleModel.subscriptionData.getEffectValue(y.EffectTypeEnum.EFFECT_TYPE_BUILDING_COSTS_BONUS) * -1 / 100;
    }
    if (E.CastleModel.kingdomData.activeKingdomID == d.FactionConst.KINGDOM_ID) {
      var i = r.castAs(E.CastleModel.specialEventData.getActiveEventByEventId(u.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
      if (i && !i.isOneLMSActive) {
        e = i.ownFaction == d.FactionConst.BLUE_FACTION ? Math.max(e, d.FactionConst.getCostReductionBonus(1 - i.factionBalanceRed)) : Math.max(e, d.FactionConst.getCostReductionBonus(i.factionBalanceRed));
      }
    }
    var n = new P.CollectableList();
    if (C.int(E.CastleModel.decoStorage.getCurrentStorage().getAmountForBuildMenu(this.disp.shopVO.wodId)) == 0) {
      var o = this.disp.shopVO;
      for (var a = 0, s = o.costs.getContainingTypes(); a < s.length; a++) {
        var l = s[a];
        var c = C.int(o.getCost(l));
        if (l.type == A.CollectableEnum.C2 && o.discountedCostC2 > 0) {
          c = o.discountedCostC2;
        }
        var p = S.ClientConstCollectable.GROUP_LIST_RESOURCES.indexOf(l.type) >= 0;
        if (p) {
          c *= 1 - e;
        }
        n.addItem(L.CollectableHelper.createVO(l.type, c, l.id, t && p));
      }
    }
    R.CostHelper.initAsCosts(n, this.disp.mc_contentHolder, false, true, this);
  };
  DecoShopPanelItemComponent.prototype.updateItemUnlockState = function (e, t) {
    var i;
    var n = e.isAvailableByLevelAndEffect;
    if (e.sceatSkillLocked > 0) {
      var o = E.CastleModel.legendSkillData.getSceatSkillByID(e.sceatSkillLocked);
      i = n && E.CastleModel.legendSkillData.isSkillActive(o);
    } else {
      i = n;
    }
    if (t && !i && e.sceatSkillLocked) {
      this.disp.btn_upgrade.visible = false;
      this.disp.mc_contentHolder.icon_lock.visible = false;
      this.disp.mc_contentHolder.icon_lock_small.visible = true;
      if (this.disp.btn_jump_to) {
        this.disp.btn_jump_to.visible = true;
      }
    }
  };
  DecoShopPanelItemComponent.prototype.fillShopIcon = function () {
    var e = E.CastleModel.decoStorage.getCurrentStorage();
    var t = e.getAmountForBuildMenu(this.disp.shopVO.wodId);
    var i = t > 0 ? e.getHighestBuildingLevel(this.disp.shopVO.wodId) : this.disp.shopVO;
    V.WodPicHelper.addWodPic(i, this.disp.mc_contentHolder.mc_content, DecoShopPanelItemComponent.MAX_WIDTH, DecoShopPanelItemComponent.MAX_HEIGHT, "", true, this.bindFunction(this.onBuildingLoaded));
    this.disp.mc_contentHolder.mc_buildingLevel.visible = t > 0 && !(i instanceof O.ADecoBuildingVO);
    if (this.disp.mc_contentHolder.mc_buildingLevel.visible) {
      var n = i.level;
      var o = a.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_contentHolder.mc_buildingLevel.txt_value, new p.LocalizedNumberVO(n));
      o.autoFitToBounds = true;
      o.y = n > 99 ? -7 : -9;
      o.x = n > 99 ? -12 : -11;
    }
    this.disp.shownShopVO = i;
  };
  DecoShopPanelItemComponent.prototype.fillItem = function (e, t) {
    this._loaded = false;
    this.disp.bg.gotoAndStop(DecoShopPanelItemComponent.BG_FRAME_STANDARD);
    this.disp.mc_contentHolder.marker_new.visible = false;
    this.disp.mc_contentHolder.mc_buildingLevel.visible = false;
    this.disp.btn_sell.visible = false;
    this.disp.btn_sell.toolTipText = "constructionMode_sellDeco";
    var i = -1;
    if (E.CastleModel.areaData.activeSlum) {
      i = C.int(E.CastleModel.areaData.activeSlum.slumLevel);
    }
    this.disp.visible = true;
    this.disp.bg.actLikeButton = true;
    this.disp.bg.mouseChildren = false;
    this.disp.mc_contentHolder.mouseChildren = false;
    this.disp.mc_contentHolder.mouseEnabled = false;
    this.disp.mc_banner.visible = false;
    this.disp.mc_banner.mouseChildren = false;
    this.disp.mc_contentHolder.mouseEnabled = false;
    this.disp.mc_banner.toolTipText = null;
    this.disp.mc_contentHolder.mc_relic.visible = false;
    this.disp.shopVO = e;
    this.primeSaleComponent = E.CastleModel.primeSaleData.getBestDiscountPrimeSaleComponentByShopVO(e, true);
    this.primeSaleComponent ||= E.CastleModel.primeSaleData.getBestDiscountPrimeSaleComponentByShopVO(e, false);
    this.fillShopIcon();
    var n = C.int(E.CastleModel.decoStorage.getCurrentStorage().getAmountForBuildMenu(e.wodId));
    var s = !e.isAvailableByLevelAndEffect && t != m.ClientConstCastle.CATEGORY_STORAGE && n == 0;
    if (this.disp.mc_contentHolder.icon_lock_small) {
      this.disp.mc_contentHolder.icon_lock_small.visible = false;
    }
    if (this.disp.btn_jump_to) {
      D.ButtonHelper.initButtons([this.disp.btn_jump_to], x.ClickFeedbackButtonHover);
      this.disp.btn_jump_to.icon.removeAllChildren();
      this.disp.btn_jump_to.icon.addChild(new Library.CastleInterfaceElements_Icons.icon_arrow_show_me_2());
      this.disp.btn_jump_to.visible = false;
    }
    this.disp.mc_contentHolder.icon_lock.visible = s;
    this.disp.bg.actLikeButton = !s;
    this.disp.mc_contentHolder.icon_lock_unreachable.visible = false;
    this.disp.btn_info.visible = e.objectType != M.IsoObjectEnum.DECO && e.objectType != M.IsoObjectEnum.FACTION_DECO && e.objectType != M.IsoObjectEnum.CUSTOM_DECO && e.objectType != M.IsoObjectEnum.ALLIANCE_DECO;
    this.disp.btn_info.enableButton = !E.CastleModel.tutorialData.isTutorialActive;
    if (E.CastleModel.areaData.activeIsoData.objects.provider.hasMaxAmountOfObjectsByType(this.disp.shopVO)) {
      this.changeToMaxAmountReached("panel_shop_maxBuildingAmount");
    }
    e.discountedCostC2 = -100;
    if (this.primeSaleComponent && this.primeSaleComponent.buildingVO.wodId == e.wodId) {
      e.discountedCostC2 = C.int(this.primeSaleComponent.getFinalPriceForShopVO(e));
      this.disp.mc_banner.visible = true;
      this.disp.mc_banner.toolTipText = {
        t: "dialog_primeday_primesale_saveCosts",
        p: [this.primeSaleComponent.discount]
      };
      a.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_banner.txt_discount, new h.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [this.primeSaleComponent.discount]));
    }
    if (t == m.ClientConstCastle.CATEGORY_STORAGE) {
      this.disp.btn_upgrade.visible = t == m.ClientConstCastle.CATEGORY_DEFENCE;
      this.disp.btn_upgrade.toolTipText = "upgrade";
      this.fillAmountInfo(t);
      this.disp.mc_contentHolder.txt_cost0.visible = false;
      this.disp.mc_contentHolder.txt_cost1.visible = false;
      this.disp.mc_contentHolder.txt_cost2.visible = false;
      this.disp.mc_contentHolder.txt_cost3.visible = false;
      this.disp.mc_contentHolder.toolTipText = null;
    } else if (e.isAvailableByLevelAndEffect && !this.disp.mc_contentHolder.icon_lock_unreachable.visible || n > 0 && !E.CastleModel.areaData.activeIsoData.objects.provider.hasMaxAmountOfObjectsByType(e)) {
      this.disp.btn_upgrade.visible = t == m.ClientConstCastle.CATEGORY_DEFENCE;
      this.disp.btn_upgrade.toolTipText = "upgrade";
      this.fillAmountInfo(t);
      this.fillPriceInfo();
      this.disp.mc_contentHolder.toolTipText = null;
      this.disp.mc_contentHolder.mc_relic.visible = c.instanceOfClass(this.disp.shownShopVO, "ABasicBuildingVO") && this.disp.shownShopVO.isRelicBuilding;
    } else {
      this.triggerLock();
      if (this.disp.mc_contentHolder.icon_lock_unreachable.visible) {
        this.disp.mc_contentHolder.toolTipText = null;
        this.disp.actLikeButton = false;
      } else if (e.sceatSkillLocked > 0) {
        var r = E.CastleModel.legendSkillData.getSceatSkillByID(e.sceatSkillLocked);
        this.disp.mc_contentHolder.toolTipText = {
          t: "needLegendTemple_skill",
          p: [r.nameTextID, r.level]
        };
      } else {
        this.disp.mc_contentHolder.toolTipText = {
          t: e.requiredLegendLevel > 0 ? f.ClientConstTextIds.LEGEND_LEVEL_NEEDED : f.ClientConstTextIds.LEVEL_NEEDED,
          p: [e.getRequiredLevel()]
        };
      }
    }
    if (i > -1 && !this.disp.mc_contentHolder.icon_lock_unreachable.visible && e.slumLevelNeeded > i) {
      this.disp.mc_contentHolder.icon_lock_unreachable.visible = true;
      this.triggerLock();
      a.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_contentHolder.icon_lock_unreachable.txt_text, new h.LocalizedTextVO("panel_shop_needQuestProgress"));
    }
    if (c.instanceOfClass(e, "CastlewallDefenceVO") && !e.isAvailableByBuildOrder) {
      this.disp.mc_contentHolder.toolTipText = "needWallUpgrade";
    }
    this.disp.mc_contentHolder.mouseEnabled = !!this.disp.mc_contentHolder.toolTipText;
    if (t == m.ClientConstCastle.CATEGORY_DEFENCE) {
      this.updateItemUnlockState(e, E.CastleModel.legendSkillData.hasLegendTemple());
    }
  };
  DecoShopPanelItemComponent.prototype.bgStopDrag = function () {
    this.disp.bg.alpha = 1;
  };
  DecoShopPanelItemComponent.prototype.bgStartDrag = function () {
    this.disp.bg.alpha = 0.4;
  };
  DecoShopPanelItemComponent.prototype.isStorageStatus = function (e) {
    return this.disp.bg.currentFrame == e - 1;
  };
  Object.defineProperty(DecoShopPanelItemComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  DecoShopPanelItemComponent.prototype.addOnMouseDownItem = function (e) {
    this._onMouseDownItem.add(e);
  };
  DecoShopPanelItemComponent.prototype.addOnClickUpgrade = function (e) {
    this._onClickUpgrade.add(e);
  };
  DecoShopPanelItemComponent.prototype.addOnClickItem = function (e) {
    this._onClickItem.add(e);
  };
  DecoShopPanelItemComponent.prototype.addOnClickInfo = function (e) {
    this._onClickInfo.add(e);
  };
  DecoShopPanelItemComponent.prototype.addOnClickSell = function (e) {
    this._onClickSell.add(e);
  };
  DecoShopPanelItemComponent.prototype.addOnClickJumpTo = function (e) {
    this._onClickJumpTo.add(e);
  };
  DecoShopPanelItemComponent.prototype.addOnMouseOverItem = function (e) {
    this._onMouseOverItem.add(e);
  };
  DecoShopPanelItemComponent.prototype.addOnMouseOverSell = function (e) {
    this._onMouseOverSell.add(e);
  };
  DecoShopPanelItemComponent.prototype.addOnMouseOutItem = function (e) {
    this._onMouseOutItem.add(e);
  };
  DecoShopPanelItemComponent.prototype.addOnMouseOutSell = function (e) {
    this._onMouseOutSell.add(e);
  };
  DecoShopPanelItemComponent.prototype.addOnLoaded = function (e) {
    this._onLoaded.add(e);
  };
  DecoShopPanelItemComponent.prototype.useHighlightFilter = function () {
    this._filters = b.BitmapFilterHelper.FILTER_GLOW_DECO_HIGHLIGHT;
    if (this._loaded) {
      this.onBuildingLoaded(null);
    }
  };
  DecoShopPanelItemComponent.prototype.removeHighlightFilter = function () {
    this._filters = b.BitmapFilterHelper.NO_FILTER;
    this.disp.mc_contentHolder.mc_content.useFilters(this._filters);
  };
  DecoShopPanelItemComponent.prototype.onBuildingLoaded = function (e) {
    this._loaded = true;
    if (this._filters && this._filters.length > 0) {
      this.disp.mc_contentHolder.mc_content.useFilters(b.BitmapFilterHelper.NO_FILTER);
      this.disp.mc_contentHolder.mc_content.useFilters(this._filters, false, 1);
    }
    this._onLoaded.dispatch(this);
  };
  DecoShopPanelItemComponent.BG_FRAME_AVAILABLE_IN_STORAGE = 2;
  DecoShopPanelItemComponent.BG_FRAME_NEW_IN_STORAGE = 3;
  DecoShopPanelItemComponent.BG_FRAME_STANDARD = 1;
  DecoShopPanelItemComponent.MAX_WIDTH = 70;
  DecoShopPanelItemComponent.MAX_HEIGHT = 90;
  return DecoShopPanelItemComponent;
}(I.CastleComponent);
exports.DecoShopPanelItemComponent = v;
var S = require("./86.js");
var A = require("./12.js");
var L = require("./45.js");
var P = require("./48.js");
var M = require("./80.js");
var R = require("./66.js");
var V = require("./63.js");
var x = require("./20.js");
l.classImplementsInterfaces(v, "ICollectableRendererList");