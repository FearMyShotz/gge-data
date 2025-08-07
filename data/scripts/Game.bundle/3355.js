Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./6.js");
var c = require("./7.js");
var u = require("./4.js");
var d = require("./135.js");
var p = require("./1349.js");
var h = require("./1644.js");
var g = require("./1645.js");
var C = require("./1201.js");
var _ = function (e) {
  function BuyBoosterCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(BuyBoosterCommand, e);
  BuyBoosterCommand.prototype.execute = function (e = null) {
    var t = e;
    var i = l.int(t.finalCostsC2);
    if (u.CastleModel.currencyData.c2Amount < i) {
      f.CastleDialogHandler.getInstance().registerDefaultDialogs(O.CastleNoMoneyC2Dialog, new d.CastleNoMoneyC2DialogProperties());
    } else {
      switch (t.id) {
        case r.BoosterConst.INSTRUCTOR:
          u.CastleModel.smartfoxClient.sendCommandVO(new h.C2SInstructorStartVO(u.CastleModel.boosterSaleData.getOfferId(r.BoosterConst.INSTRUCTOR)));
          break;
        case r.BoosterConst.MARAUDER:
          u.CastleModel.smartfoxClient.sendCommandVO(new g.C2SMarauderStartVO(u.CastleModel.boosterSaleData.getOfferId(r.BoosterConst.MARAUDER)));
          break;
        case r.BoosterConst.OVERSEER_FOOD:
          u.CastleModel.smartfoxClient.sendCommandVO(new C.C2SOverseerStartVO(m.CastlePremiumBoostData.BOOST_FOOD, u.CastleModel.boosterSaleData.getOfferId(r.BoosterConst.OVERSEER_FOOD)));
          break;
        case r.BoosterConst.OVERSEER_STONE:
          u.CastleModel.smartfoxClient.sendCommandVO(new C.C2SOverseerStartVO(m.CastlePremiumBoostData.BOOST_STONE, u.CastleModel.boosterSaleData.getOfferId(r.BoosterConst.OVERSEER_STONE)));
          break;
        case r.BoosterConst.OVERSEER_WOOD:
          u.CastleModel.smartfoxClient.sendCommandVO(new C.C2SOverseerStartVO(m.CastlePremiumBoostData.BOOST_WOOD, u.CastleModel.boosterSaleData.getOfferId(r.BoosterConst.OVERSEER_WOOD)));
          break;
        case r.BoosterConst.OVERSEER_MEAD:
          u.CastleModel.smartfoxClient.sendCommandVO(new C.C2SOverseerStartVO(m.CastlePremiumBoostData.BOOST_MEAD, u.CastleModel.boosterSaleData.getOfferId(r.BoosterConst.OVERSEER_MEAD)));
          break;
        case r.BoosterConst.OVERSEER_BEEF:
          u.CastleModel.smartfoxClient.sendCommandVO(new C.C2SOverseerStartVO(m.CastlePremiumBoostData.BOOST_BEEF, u.CastleModel.boosterSaleData.getOfferId(r.BoosterConst.OVERSEER_BEEF)));
          break;
        case r.BoosterConst.OVERSEER_HONEY:
          u.CastleModel.smartfoxClient.sendCommandVO(new C.C2SOverseerStartVO(m.CastlePremiumBoostData.BOOST_HONEY, u.CastleModel.boosterSaleData.getOfferId(r.BoosterConst.OVERSEER_HONEY)));
          break;
        case r.BoosterConst.TAX:
          var n = JSON.stringify({
            PO: u.CastleModel.boosterSaleData.getOfferId(r.BoosterConst.TAX)
          });
          o.BasicController.getInstance().sendServerMessageAndWait(c.ClientConstSF.C2S_BRIBE_TAX_COLLECTOR, [n], c.ClientConstSF.S2C_BRIBE_TAX_COLLECTOR);
          break;
        case r.BoosterConst.CARAVAN_OVERLOADER:
          u.CastleModel.smartfoxClient.sendCommandVO(new p.C2SCaravanOverloaderStartVO(u.CastleModel.boosterSaleData.getOfferId(r.BoosterConst.CARAVAN_OVERLOADER)));
      }
    }
  };
  return BuyBoosterCommand;
}(a.SimpleCommand);
exports.BuyBoosterCommand = _;
var m = require("./402.js");
var f = require("./9.js");
var O = require("./138.js");
s.classImplementsInterfaces(_, "ISimpleCommand");