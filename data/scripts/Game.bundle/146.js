Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./118.js");
var l = require("./491.js");
var c = require("./4.js");
var u = require("./9.js");
var d = require("./492.js");
var p = require("./215.js");
var h = require("./875.js");
var g = require("./493.js");
var C = require("./2090.js");
var _ = require("./108.js");
var m = r.getLogger("CastleOpenShopExecutor");
var f = function () {
  function CastleOpenShopExecutor() {}
  CastleOpenShopExecutor.open = function (e, t, i) {
    var r = this;
    if (e === undefined) {
      e = CastleOpenShopExecutor.SOURCE_UNKNOWN;
    }
    if (t === undefined) {
      t = _.CXFSourceTrackingConstants.SOURCE_UNKNOWN;
    }
    if (i === undefined) {
      i = CastleOpenShopExecutor.SHOP_TAB_DEFAULT;
    }
    if ((!o.instanceOfClass(n.EnvironmentProvider.instance.globals, "CastleEnvironmentGlobals") || !n.EnvironmentProvider.instance.globals.isClosedBeta) && !l.ClientBetaHelper.isOnOpenBeta) {
      if (c.CastleModel.deleteAccountData.isAccountDeletionStarted) {
        u.CastleDialogHandler.getInstance().registerDefaultDialogs(p.DarkOkDialog, new d.CastleStandardYesNoDialogProperties("attention", s.Localize.text("dialog_options_deleteAccount_shopAccessDenied", [c.CastleModel.deleteAccountData.getDateForDelete()])));
      } else if (c.CastleModel.userData.disableRubyShop) {
        u.CastleDialogHandler.getInstance().registerDefaultDialogs(p.DarkOkDialog, new d.CastleStandardYesNoDialogProperties("generic_alert_information", "alert_C2PurchaseNotEnabled"));
      } else {
        var C = false;
        if (n.GoodgamePartners.isSpilNetwork(n.EnvGlobalsHandler.globals.networkId)) {
          if (n.BasicModel.sessionData.loggedIn) {
            C = true;
          }
        } else if (n.EnvGlobalsHandler.globals.loginIsKeyBased) {
          C = true;
        } else if (n.BasicModel.sessionData.loggedIn) {
          C = true;
        }
        if (C) {
          var m = c.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_SHOPPING_CART_PRIMEDAY);
          if (m) {
            if (!(m.shoppingCartOptionIds.length >= 9) && c.CastleModel.localData.readShoppingCartWarning()) {
              u.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleShoppingCartPrimeDayConfirmDialog, new d.CastleStandardYesNoDialogProperties("", "", function () {
                u.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastleShoppingCartPrimeDayDialog);
              }, function () {
                r.openShop(e);
              }, null, "", "", [m.endTimestamp]));
              return;
            }
          }
          this.openShop(e);
        }
      }
    }
  };
  CastleOpenShopExecutor.openShop = function (e) {
    var t = {
      page: "hardCurrency",
      sourceId: e
    };
    t = c.CastleModel.userData.splitRunData.handleHCShopABTestPayload(t);
    m.info("CXFSourceTracking", t);
    o.ExternalInterface.call("UIButtonClicked", ["btn_webshop", t]);
    c.CastleModel.smartfoxClient.sendCommandVO(new C.C2SVisitedShopVO());
    n.CommandController.instance.executeCommand(n.BasicController.GTM_CALL_GGS_TRACK_EVENT, "shop_visit");
  };
  CastleOpenShopExecutor.SOURCE_UNKNOWN = 0;
  CastleOpenShopExecutor.SOURCE_USER_STATE_PANEL = 1;
  CastleOpenShopExecutor.SOURCE_NO_MONEY_C2 = 2;
  CastleOpenShopExecutor.SOURCE_FIGHTSCREEN = 3;
  CastleOpenShopExecutor.SOURCE_SPECIAL_OFFER = 4;
  CastleOpenShopExecutor.SOURCE_SPECIAL_OFFER_BETTER = 5;
  CastleOpenShopExecutor.SOURCE_PREMIUM_MARKET_PLACE = 6;
  CastleOpenShopExecutor.SOURCE_DYNAMIC_PAYMENT_REWARD = 7;
  CastleOpenShopExecutor.SOURCE_PAYMENT_REWARD = 8;
  CastleOpenShopExecutor.SOURCE_PRIVATE_OFFER_DECORATION = 9;
  CastleOpenShopExecutor.SOURCE_PRIVATE_PRIME_TIME_OFFER = 10;
  CastleOpenShopExecutor.SOURCE_ALLIANCE_PAYMENT_BONUS = 11;
  CastleOpenShopExecutor.SOURCE_PRIVATE_OFFER_COINMINE = 12;
  CastleOpenShopExecutor.SOURCE_PAYMENT_REWARD_LOTTERY = 13;
  CastleOpenShopExecutor.SOURCE_PRIME_ALLIANCE_BONUS = 14;
  CastleOpenShopExecutor.SOURCE_PREMIUM_PAYMENT = 15;
  CastleOpenShopExecutor.SOURCE_PAYMENT_REWARD_SPECIAL_OFFER = 16;
  CastleOpenShopExecutor.SOURCE_NETWORK_PANEL = 17;
  CastleOpenShopExecutor.SOURCE_PRIME_TIME_WORLDCUP = 18;
  CastleOpenShopExecutor.SOURCE_QUEST_BUY_RUBIES = 19;
  CastleOpenShopExecutor.SOURCE_TIMELESS_SPECIAL_OFFER = 20;
  CastleOpenShopExecutor.SOURCE_PAYMENT_REWARD_CURRENCY_SPECIAL_OFFER = 21;
  CastleOpenShopExecutor.SOURCE_PRIVATE_PRIME_DAY_OFFER = 22;
  CastleOpenShopExecutor.SOURCE_QUEST_VISIT_SHOP = 23;
  CastleOpenShopExecutor.SOURCE_RELIC_UPGRADE = 24;
  CastleOpenShopExecutor.SOURCE_GENERAL_HUB = 25;
  CastleOpenShopExecutor.SHOP_TAB_DEFAULT = 0;
  CastleOpenShopExecutor.SHOP_TAB_RUBIES = 1;
  CastleOpenShopExecutor.SHOP_TAB_PACKS = 2;
  CastleOpenShopExecutor.SHOP_TAB_ONE_TIME_SPECIAL_OFFER = 3;
  return CastleOpenShopExecutor;
}();
exports.CastleOpenShopExecutor = f;