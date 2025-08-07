Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./5.js");
var p = require("./5.js");
var h = require("./3.js");
var g = require("./3.js");
var C = require("./6.js");
var _ = require("./438.js");
var m = require("./390.js");
var f = require("./85.js");
var O = require("./4.js");
var E = require("./35.js");
var y = require("./8.js");
var b = require("./141.js");
var D = require("./439.js");
var I = function (e) {
  function CastleListDetailOverviewItemEconomy(t) {
    var i = e.call(this, t) || this;
    i.offset = 0;
    i.itxt_wood = i.textFieldManager.registerTextField(t.txt_wood, new g.TextVO(""));
    i.itxt_woodProd = i.textFieldManager.registerTextField(t.txt_woodProd, new g.TextVO(""));
    i.itxt_stone = i.textFieldManager.registerTextField(t.txt_stone, new g.TextVO(""));
    i.itxt_stoneProd = i.textFieldManager.registerTextField(t.txt_stoneProd, new g.TextVO(""));
    i.itxt_food = i.textFieldManager.registerTextField(t.txt_food, new g.TextVO(""));
    i.itxt_foodProd = i.textFieldManager.registerTextField(t.txt_foodProd, new g.TextVO(""));
    i.itxt_coal = i.textFieldManager.registerTextField(t.txt_coal, new g.TextVO(""));
    i.itxt_coalProd = i.textFieldManager.registerTextField(t.txt_coalProd, new g.TextVO(""));
    i.itxt_oil = i.textFieldManager.registerTextField(t.txt_oil, new g.TextVO(""));
    i.itxt_oilProd = i.textFieldManager.registerTextField(t.txt_oilProd, new g.TextVO(""));
    i.itxt_glass = i.textFieldManager.registerTextField(t.txt_glass, new g.TextVO(""));
    i.itxt_glassProd = i.textFieldManager.registerTextField(t.txt_glassProd, new g.TextVO(""));
    i.itxt_iron = i.textFieldManager.registerTextField(t.txt_iron, new g.TextVO(""));
    i.itxt_ironProd = i.textFieldManager.registerTextField(t.txt_ironProd, new g.TextVO(""));
    i.itxt_storageCapacity = i.textFieldManager.registerTextField(t.mc_storageCapacity.txt_storageCapacity, new f.CastleLocalizedNumberVO(0));
    i.itxt_productivity = i.textFieldManager.registerTextField(t.mc_productivity.txt_productivity, new h.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [0]));
    t.icon_storage.toolTipText = "dialog_listOverview_tabResourceCurrentlyStored_tt";
    t.icon_productionPerHour.toolTipText = "dialog_listOverview_tabResourceProduction_tt";
    t.mc_storageCapacity.toolTipText = "dialog_listOverview_tabResourceStoragen_tt";
    t.mc_productivity.toolTipText = "dialog_listOverview_tabResourceProductivity_tt";
    t.mc_storageCapacity.mouseChildren = false;
    t.mc_productivity.mouseChildren = false;
    y.ButtonHelper.initBasicButtons([t.btn_visitCastle, t.btn_trade]);
    t.btn_trade.toolTipText = "dialog_monument_sendResources_tooltip";
    return i;
  }
  n.__extends(CastleListDetailOverviewItemEconomy, e);
  CastleListDetailOverviewItemEconomy.prototype.setOffSet = function (e) {
    this.offset = e;
    this.customFillItem();
  };
  CastleListDetailOverviewItemEconomy.prototype.customFillItem = function () {
    e.prototype.customFillItem.call(this);
    var t = [T.CollectableEnum.WOOD, T.CollectableEnum.STONE, T.CollectableEnum.FOOD, T.CollectableEnum.COAL, T.CollectableEnum.OIL, T.CollectableEnum.GLASS, T.CollectableEnum.IRON, T.CollectableEnum.HONEY, T.CollectableEnum.MEAD, T.CollectableEnum.BEEF];
    var i = O.CastleModel.userCastleListDetailed.getVObyCastleID(this.wmo.objectId, this.wmo.kingdomID);
    this.setResourceText(this.itxt_wood, i, t[this.offset], false);
    this.setResourceText(this.itxt_woodProd, i, t[this.offset], true);
    this.setResourceText(this.itxt_stone, i, t[1 + this.offset], false);
    this.setResourceText(this.itxt_stoneProd, i, t[1 + this.offset], true);
    this.setResourceText(this.itxt_food, i, t[2 + this.offset], false);
    this.setResourceText(this.itxt_foodProd, i, t[2 + this.offset], true);
    this.setResourceText(this.itxt_coal, i, t[3 + this.offset], false);
    this.setResourceText(this.itxt_coalProd, i, t[3 + this.offset], true);
    this.setResourceText(this.itxt_oil, i, t[4 + this.offset], false);
    this.setResourceText(this.itxt_oilProd, i, t[4 + this.offset], true);
    this.setResourceText(this.itxt_glass, i, t[5 + this.offset], false);
    this.setResourceText(this.itxt_glassProd, i, t[5 + this.offset], true);
    this.setResourceText(this.itxt_iron, i, t[6 + this.offset], false);
    this.setResourceText(this.itxt_ironProd, i, t[6 + this.offset], true);
    if (i) {
      this.disp.mc_storageCapacity.visible = true;
      this.disp.mc_productivity.visible = true;
      var n = i.maxResourceStorageAmount;
      this.itxt_storageCapacity.textContentVO = new f.CastleLocalizedNumberVO(n, {
        compactThreshold: 1000000,
        compactFractionalDigits: 0
      }, 0);
      var o = S.CastleTitleSystemHelper.returnTitleEffectValue(E.EffectTypeEnum.EFFECT_TYPE_PUBLIC_ORDER_BOOST, -1, this.wmo.areaType, this.wmo.spaceID).strength;
      var a = C.int(O.CastleModel.researchData.getResearchEffectValue(E.EffectTypeEnum.EFFECT_TYPE_PUBLIC_ORDER_BONUS, this.wmo.areaType, this.wmo.spaceID).strength);
      var s = l.LawAndOrderConst.calculateLawAndOrderFactorWithEffect(i.neutralDeco + a, i.sickness, i.riot, r.EffectConst.boostToModifier(o));
      this.itxt_productivity.textContentVO.textReplacements = [Math.round(s * 100)];
    } else {
      this.disp.mc_storageCapacity.visible = false;
      this.disp.mc_productivity.visible = false;
    }
    this.disp.btn_trade.visible = this.isTradeable;
    y.ButtonHelper.enableButton(this.disp.btn_trade, this.canTrade);
  };
  CastleListDetailOverviewItemEconomy.prototype.setResourceText = function (e, t, i, n) {
    if (this.isResourceUnlocked(i)) {
      if (t) {
        var o = C.int(n ? t.getEffectiveResourceProduction(i) : t.getResource(i));
        if (s.instanceOfClass(e.textContentVO, "CastleLocalizedNumberVO")) {
          e.textContentVO.numberValue = o;
        } else {
          e.textContentVO = new f.CastleLocalizedNumberVO(o, {
            compactThreshold: 1000000,
            compactFractionalDigits: 0
          }, 0);
        }
      } else {
        b.CastleTextFieldHelper.safeSetText(e, "-");
      }
    } else {
      b.CastleTextFieldHelper.safeSetText(e, "");
    }
    if (!O.CastleModel.userData.foodFrozen || i != T.CollectableEnum.FOOD && i != T.CollectableEnum.MEAD && i != T.CollectableEnum.BEEF) {
      e.color = L.ClientConstColor.FONT_DEFAULT_COLOR;
    } else {
      e.color = L.ClientConstColor.FONT_FROZEN;
    }
  };
  CastleListDetailOverviewItemEconomy.prototype.isResourceUnlocked = function (e) {
    var t = O.CastleModel.userData.isLegend;
    switch (e) {
      case T.CollectableEnum.COAL:
        return t || O.CastleModel.kingdomData.isKingdomUnlocked(d.WorldIce.KINGDOM_ID);
      case T.CollectableEnum.OIL:
        return t || O.CastleModel.kingdomData.isKingdomUnlocked(u.WorldDessert.KINGDOM_ID);
      case T.CollectableEnum.GLASS:
        return t || O.CastleModel.kingdomData.isKingdomUnlocked(p.WorldVolcano.KINGDOM_ID);
      case T.CollectableEnum.IRON:
        return t;
      default:
        return true;
    }
  };
  Object.defineProperty(CastleListDetailOverviewItemEconomy.prototype, "isTradeable", {
    get: function () {
      switch (this.wmo.areaType) {
        case c.WorldConst.AREA_TYPE_KINGS_TOWER:
        case c.WorldConst.AREA_TYPE_VILLAGE:
          return false;
        case c.WorldConst.AREA_TYPE_MONUMENT:
        case c.WorldConst.AREA_TYPE_LABORATORY:
          return !this.wmo.hasReachedMaxLevel;
        case c.WorldConst.AREA_TYPE_METROPOL:
        case c.WorldConst.AREA_TYPE_CAPITAL:
          return true;
        case c.WorldConst.AREA_TYPE_OUTPOST:
          return !this.wmo.isUnderConquerControl;
        default:
          return O.CastleModel.userData.castleList.getFilteredList(this.wmo.kingdomID).length > 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListDetailOverviewItemEconomy.prototype, "canTrade", {
    get: function () {
      switch (this.wmo.areaType) {
        case c.WorldConst.AREA_TYPE_MONUMENT:
          return !this.wmo.hasReachedMaxLevel;
        default:
          return true;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleListDetailOverviewItemEconomy.prototype.onMouseClick = function (t) {
    e.prototype.onMouseClick.call(this, t);
    switch (t.target) {
      case this.disp.btn_trade:
        O.CastleModel.smartfoxClient.sendCommandVO(new _.C2SMarketInfoVO());
        O.CastleModel.tradeData.addEventListener(m.CastleTradeDataEvent.GET_MARKET_INFOS, this.bindFunction(this.onGetMarketInfos));
    }
  };
  CastleListDetailOverviewItemEconomy.prototype.onGetMarketInfos = function (e) {
    if (e.openDialog) {
      v.CastleDialogHandler.getInstance().registerDefaultDialogs(A.CastleSendGoodsDialog, new D.CastleSendGoodsDialogProperties(this.wmo, e.tradeInfoVO));
      O.CastleModel.tradeData.removeEventListener(m.CastleTradeDataEvent.GET_MARKET_INFOS, this.bindFunction(this.onGetMarketInfos));
    }
  };
  return CastleListDetailOverviewItemEconomy;
}(require("./1041.js").CastleListDetailOverviewItem);
exports.CastleListDetailOverviewItemEconomy = I;
var T = require("./12.js");
var v = require("./9.js");
var S = require("./106.js");
var A = require("./440.js");
var L = require("./16.js");
a.classImplementsInterfaces(I, "MovieClip");