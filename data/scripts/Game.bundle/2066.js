Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function IsoServerCommands() {}
  IsoServerCommands.prototype.requestWallUpgrade = function (e) {
    O.CastleModel.smartfoxClient.sendCommandVO(new C.C2SIsoUpgradeDefenceVO(e.objects.defences.wallInfo.objectId));
  };
  IsoServerCommands.prototype.requestMoatUpgrade = function (e) {
    var t = e.objects.defences.moat;
    O.CastleModel.smartfoxClient.sendCommandVO(new _.C2SIsoUpgradeObjectVO(t.objectId, O.CastleModel.primeSaleData.getBestDiscountPrivateOfferID(t.upgradeWodID, true)));
  };
  IsoServerCommands.prototype.buyObjectFromShop = function (e, t, i, n = -1) {
    O.CastleModel.smartfoxClient.sendCommandVO(new r.C2SIsoBuyObjectVO(e, t.x, t.y, i, O.CastleModel.privateOfferData.getPrivateOfferIDbyWodID(e, false), false, n));
  };
  IsoServerCommands.prototype.placeCustomInventoryObject = function (e, t, i) {
    O.CastleModel.smartfoxClient.sendCommandVO(new d.C2SIsoPlaceCustomInventoryObjectVO(e, t.x, t.y, i));
  };
  IsoServerCommands.prototype.buyMoat = function (e) {
    O.CastleModel.smartfoxClient.sendCommandVO(new r.C2SIsoBuyObjectVO(e, 0, 0, 0, O.CastleModel.primeSaleData.getBestDiscountPrivateOfferID(e, false)));
  };
  IsoServerCommands.prototype.buyExpansion = function (e, t, i) {
    O.CastleModel.smartfoxClient.sendCommandVO(new s.C2SIsoBuyExpansionVO(e.x, e.y, t, i.id));
  };
  IsoServerCommands.prototype.repairBuilding = function (e) {
    O.CastleModel.smartfoxClient.sendCommandVO(new p.C2SIsoRepairBuildingVO(e));
  };
  IsoServerCommands.prototype.demolishBuilding = function (e) {
    O.CastleModel.smartfoxClient.sendCommandVO(new l.C2SIsoDisassembleObjectVO(e));
  };
  IsoServerCommands.prototype.storeBuildingToLocalInventory = function (e) {
    O.CastleModel.smartfoxClient.sendCommandVO(new g.C2SIsoStoreObjectVO(e));
  };
  IsoServerCommands.prototype.fastCompleteBuilding = function (e) {
    O.CastleModel.smartfoxClient.sendCommandVO(new c.C2SIsoFastCompleteObjectVO(e.vo.objectId, O.CastleModel.specialEventData.hasSkipForFree(e) ? 1 : 0));
  };
  IsoServerCommands.prototype.upgradeBuilding = function (e, t) {
    var i;
    i = t >= E.CastleRubyWishingWellData.MIN_WOD_ID && t <= E.CastleRubyWishingWellData.MAX_WOD_ID ? new a.C2SWishingWellCommandVO(o.WishingWellConst.OPTION_UPGRADE_RUBY_WISHING_WELL) : new _.C2SIsoUpgradeObjectVO(e, O.CastleModel.primeSaleData.getBestDiscountPrivateOfferID(t, true));
    O.CastleModel.smartfoxClient.sendCommandVO(i);
  };
  IsoServerCommands.prototype.moveObject = function (e, t, i, n) {
    if (n) {
      O.CastleModel.smartfoxClient.sendCommandVO(new f.C2SRemoveFromDistrictVO(e, t.x, t.y, i));
    } else {
      O.CastleModel.smartfoxClient.sendCommandVO(new u.C2SIsoMoveObjectVO(e, t.x, t.y, i));
    }
  };
  IsoServerCommands.prototype.collectTax = function () {
    O.CastleModel.smartfoxClient.sendCommandVO(new m.C2SCollectTaxVO());
  };
  IsoServerCommands.prototype.collectResourcePool = function () {
    O.CastleModel.smartfoxClient.sendCommandVO(new h.C2SIsoResourceCitizenVO());
  };
  return IsoServerCommands;
}();
exports.IsoServerCommands = n;
var o = require("./5.js");
var a = require("./568.js");
var s = require("./2067.js");
var r = require("./867.js");
var l = require("./1194.js");
var c = require("./868.js");
var u = require("./2068.js");
var d = require("./2069.js");
var p = require("./869.js");
var h = require("./2070.js");
var g = require("./2071.js");
var C = require("./1195.js");
var _ = require("./870.js");
var m = require("./1196.js");
var f = require("./2072.js");
var O = require("./4.js");
var E = require("./569.js");