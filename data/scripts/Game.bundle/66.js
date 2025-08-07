Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./16.js");
var l = require("./67.js");
var c = require("./19.js");
var u = require("./4.js");
var d = require("./52.js");
var p = createjs.TextField;
var h = createjs.Point;
var g = function () {
  function CostHelper() {}
  CostHelper.setCostColor = function (e, t) {
    e.textColor = t ? r.ClientConstColor.FONT_INSUFFICIENT_COLOR : r.ClientConstColor.FONT_DEFAULT_COLOR;
  };
  CostHelper.getAvailableGoods = function (e) {
    if (C.ClientConstCollectable.GROUP_LIST_RESOURCES.indexOf(e.type) >= 0) {
      return s.int(u.CastleModel.areaData.getActiveStorageItem(e.type).amount);
    } else {
      return s.int(u.CastleModel.currencyData.getAmountByType(e));
    }
  };
  CostHelper.getAvailableGoodsFromCollectableList = function (e, t) {
    if (e.containsTypeVO(t)) {
      return s.int(e.getAmountOrDefaultByTypeVO(t));
    } else if (C.ClientConstCollectable.GROUP_LIST_RESOURCES.indexOf(t.type) < 0) {
      return s.int(u.CastleModel.currencyData.getAmountByType(t));
    } else {
      return 0;
    }
  };
  CostHelper.getAvailableGoodsFromDetailedCastleVO = function (e, t) {
    if (C.ClientConstCollectable.GROUP_LIST_RESOURCES.indexOf(t.type) >= 0) {
      return s.int(e.getResource(t.type));
    } else {
      return s.int(u.CastleModel.currencyData.getAmountByType(t));
    }
  };
  CostHelper.canAfford = function (e) {
    for (var t = 0, i = e.getCostTypes(); t < i.length; t++) {
      var n = i[t];
      if (CostHelper.getAvailableGoods(n) < e.getCost(n)) {
        return false;
      }
    }
    return true;
  };
  CostHelper.canAffordByStorage = function (e, t) {
    if (!e) {
      return true;
    }
    if (!t) {
      return false;
    }
    for (var i = 0; i < e.length; ++i) {
      var n = e.getItemByIndex(i);
      var o = t.getItemByType(n.itemType);
      if (!o || n.amount > o.amount) {
        return false;
      }
    }
    return true;
  };
  CostHelper.initAsResources = function (e, t) {
    CostHelper.initCollectables(e, t, false, false, null);
  };
  CostHelper.initAsCosts = function (e, t, i = false, n = true, o = null, a = null) {
    CostHelper.initCollectables(e, t, false, true, null, i, n, o, a);
  };
  CostHelper.initAsRefund = function (e, t) {
    CostHelper.initCollectables(e, t, true, false, null);
  };
  CostHelper.initAsCostsFromOtherStorage = function (e, t, i = true, n = null) {
    CostHelper.initCollectables(e, t, false, i, n);
  };
  CostHelper.initCollectables = function (e, t, i = false, n = true, o = null, a = false, s = true, r = null, u = null) {
    u ||= new h(25, 25);
    var d = new c.CollectableRenderOptions(s ? c.CollectableRenderOptions.SET_COST_LIST : c.CollectableRenderOptions.SET_COST_LIST_NO_TOOLTIP, u);
    d.tooltip.useAmount = false;
    d.costTextfield.useOtherResourceStorage = o;
    d.costTextfield.usePlusOnPositiveValues = i;
    d.costTextfield.enableMarkOnNotEnough = n;
    d.costTextfield.useKiloAbbreviationForAmount = a;
    var p = t.txt_specialCost;
    if (p) {
      p.visible = false;
    }
    if (r != null) {
      r.destroyCollectableRenderList();
    }
    if (r) {
      L.CollectableRenderHelper.displayMultipleItemsComplete(r, new l.CollectableRenderClipsList(t, "txt_cost").addTextfields("txt_cost"), e, d);
    } else {
      L.CollectableRenderHelper.displayMultipleItems(new l.CollectableRenderClipsList(t, "txt_cost").addTextfields("txt_cost"), e, d, null, function afterRenderFunc(e) {
        if (r == null) {
          e.destroy();
        }
      });
    }
  };
  CostHelper.setCostC2TextFieldColor = function (e, t) {
    CostHelper.setCurrencyTextFieldColor(e, new f.CollectableTypeVO(_.CollectableEnum.C2), t);
  };
  CostHelper.setCurrencyTextFieldColor = function (e, t, i) {
    if (CostHelper.getAvailableGoods(t) < i) {
      e.color = r.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    } else {
      e.color = r.ClientConstColor.FONT_DEFAULT_COLOR;
    }
  };
  CostHelper.showNotEnoughSpecialCurrencyDialog = function (e) {
    var t = a.Localize.text("dialog_notEnoughSpecialCurrencyDialog_copy");
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var s = n[i];
        if (s !== undefined) {
          var r = m.CollectableHelper.createVO(_.CollectableEnum.GENERIC_CURRENCY, 1, s);
          t += "\n" + a.Localize.text(r.getNameTextId());
        }
      }
    }
    O.CastleDialogHandler.getInstance().registerDialogs(T.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(a.Localize.text("generic_alert_watchout"), t));
  };
  CostHelper.showGenericNotEnoughCurrencyDialog = function (e) {
    var t = a.Localize.text("dialog_notEnoughSpecialCurrencyDialog_copy");
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var s = n[i];
        if (s !== undefined) {
          var r = m.CollectableHelper.createVO(s.type, 1, s.id);
          t += "\n" + a.Localize.text(r.getNameTextId());
        }
      }
    }
    O.CastleDialogHandler.getInstance().registerDialogs(T.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(a.Localize.text("generic_alert_watchout"), t));
  };
  CostHelper.validateCostBuyCommand = function (e, t = null) {
    var a = new P.CollectablesCosts(e.getFilteredListByType(_.CollectableEnum.C2));
    var s = new P.CollectablesCosts(e.getFilteredListByType(_.CollectableEnum.C1));
    var r = new P.CollectablesCosts(e.getFilteredListByTypes(C.ClientConstCollectable.GROUP_LIST_RESOURCES));
    var l = new P.CollectablesCosts(e.getFilteredListByType(_.CollectableEnum.AQUAMARINE));
    var c = new P.CollectablesCosts(e.getFilteredListByType(_.CollectableEnum.GENERIC_CURRENCY));
    var p = new P.CollectablesCosts(e.getFilteredListByTypeVOs([new f.CollectableTypeVO(_.CollectableEnum.GENERIC_CURRENCY, d.ClientConstCurrency.ID_REFINED_LUMBER), new f.CollectableTypeVO(_.CollectableEnum.GENERIC_CURRENCY, d.ClientConstCurrency.ID_REFINED_STONE)]));
    if (CostHelper.canAfford(a)) {
      if (CostHelper.canAfford(l)) {
        if (CostHelper.canAfford(r)) {
          if (CostHelper.canAfford(p)) {
            if (CostHelper.canAfford(s)) {
              if (CostHelper.canAfford(c)) {
                if (t) {
                  u.CastleModel.smartfoxClient.sendCommandVO(t);
                }
                return true;
              }
              CostHelper.showGenericNotEnoughCurrencyDialog(c.getCostTypes());
            } else {
              O.CastleDialogHandler.getInstance().registerDefaultDialogs(E.CastleNoMoneyC1Dialog, new y.CastleNoMoneyC1DialogProperties());
            }
          } else {
            O.CastleDialogHandler.getInstance().registerDefaultDialogs(v.DarkOkDialog, new o.BasicStandardOkDialogProperties("dialog_refinedResources_insufficient_header", "dialog_refinedResources_insufficient_desc"));
          }
        } else {
          var h = new I.CastleResourceWaitDialogProperties(t.getCmdId());
          h.parseCosts(r.collectables);
          h.parseSkipCommand(t);
          var g = require("./872.js").CastleResourceWaitDialog;
          O.CastleDialogHandler.getInstance().registerDefaultDialogs(g, h);
        }
      } else {
        O.CastleDialogHandler.getInstance().registerDefaultDialogs(S.ModernPackageShopResourceTipDialog, new A.ModernPackageShopResourceTipDialogProperties(null, [new f.CollectableTypeVO(_.CollectableEnum.AQUAMARINE)]));
      }
    } else {
      O.CastleDialogHandler.getInstance().registerDefaultDialogs(b.CastleNoMoneyC2Dialog, new D.CastleNoMoneyC2DialogProperties(), true, n.BasicDialogHandler.PRIORITY_TOP);
    }
    return false;
  };
  CostHelper.modernizeAllCostTextFieldColors = function (e, t = r.ClientConstColor.MODERN_DEFAULT_BRIGHT, i = r.ClientConstColor.MODERN_RED2) {
    if (e.children) {
      e.children.forEach(function (e) {
        return CostHelper.modernizeAllCostTextFieldColors(e);
      });
    } else if (e instanceof p) {
      CostHelper.modernizeCostTextFieldColor(e, t, i);
    }
  };
  CostHelper.modernizeCostTextFieldColor = function (e, t = r.ClientConstColor.MODERN_DEFAULT_BRIGHT, i = r.ClientConstColor.MODERN_RED2) {
    var n = r.ClientConstColor.uint32toHexString(r.ClientConstColor.FONT_DEFAULT_COLOR);
    var o = r.ClientConstColor.uint32toHexString(r.ClientConstColor.FONT_INSUFFICIENT_COLOR);
    if (e.textColor == n) {
      e.textColor = t;
    } else if (e.textColor == o) {
      e.textColor = i;
    }
  };
  return CostHelper;
}();
exports.CostHelper = g;
var C = require("./86.js");
var _ = require("./12.js");
var m = require("./45.js");
var f = require("./74.js");
var O = require("./9.js");
var E = require("./352.js");
var y = require("./351.js");
var b = require("./138.js");
var D = require("./135.js");
var I = require("./981.js");
var T = require("./38.js");
var v = require("./215.js");
var S = require("./983.js");
var A = require("./985.js");
var L = require("./25.js");
var P = require("./367.js");