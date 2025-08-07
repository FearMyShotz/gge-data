Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./60.js");
var l = require("./4.js");
var c = require("./5288.js");
var u = require("./5309.js");
var d = require("./5310.js");
var p = require("./5311.js");
var h = require("./5312.js");
var g = require("./5313.js");
var C = require("./5314.js");
var _ = require("./5315.js");
var m = require("./5316.js");
var f = require("./5318.js");
var O = require("./5319.js");
var E = require("./5320.js");
var y = require("./5322.js");
var b = require("./5323.js");
var D = function (e) {
  function CastlePrivateOfferData() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastlePrivateOfferData, e);
  CastlePrivateOfferData.prototype.initOfferDescriptions = function () {
    e.prototype.initOfferDescriptions.call(this);
    this.registerOfferDescription(new f.OfferDescriptionCostResources());
    this.registerOfferAdditionalParameter(new _.OfferDescriptionAdditionalPackageIDs());
    this.registerOfferAdditionalParameter(new T.OfferDescriptionAdditionalPrimeSale());
    this.registerOfferAdditionalParameter(new v.OfferDescriptionAdditionalPrimeSaleUpgrade());
    this.registerOfferAdditionalParameter(new m.OfferDescriptionAdditionalPrimeSaleSkipBuilding());
    this.registerOfferAdditionalParameter(new d.OfferDescriptionAdditionalBuildingID());
    this.registerOfferAdditionalParameter(new C.OfferDescriptionAdditionalIsTimeless());
    this.registerOfferAdditionalParameter(new h.OfferDescriptionAdditionalIsInviteeConversionOffer());
    this.registerOfferAdditionalParameter(new p.OfferDescriptionAdditionalClientTracking());
    this.registerOfferAdditionalParameter(new u.OfferDescriptionAdditionalABTestDependency());
    this.registerOfferAdditionalParameter(new g.OfferDescriptionAdditionalIsOneTimeOffer());
    this.registerOfferAdditionalParameter(new N.OfferDescriptionAdditionalCosts());
    this.registerOfferRewardParameter(new S.OfferDescriptionRewardStandard());
    this.registerOfferVisualParameter(new R.OfferDescriptionVisualIsoObject());
    this.registerOfferVisualParameter(new B.OfferDescriptionVisualTreasureChestObject());
    this.registerOfferVisualParameter(new L.OfferDescriptionVisualFinishDialog());
    this.registerOfferVisualParameter(new M.OfferDescriptionVisualInterfaceButton());
    this.registerOfferVisualParameter(new V.OfferDescriptionVisualOfferDialog());
    this.registerOfferVisualParameter(new x.OfferDescriptionVisualQuestAcceptDialog());
    this.registerOfferVisualParameter(new w.OfferDescriptionVisualQuestDialog());
    this.registerOfferVisualParameter(new A.OfferDescriptionVisualFailedDialog());
    this.registerOfferVisualParameter(new P.OfferDescriptionVisualHideEvent());
    this.registerOfferVisualParameter(new O.OfferDescriptionVisualEuroAmount());
    this.registerOfferVisualParameter(new k.OfferDescriptionVisualSubOffer());
  };
  CastlePrivateOfferData.prototype.initOfferQuestConditions = function () {
    e.prototype.initOfferQuestConditions.call(this);
    this.registerOfferQuestCondition(new E.OfferQuestConditionIntegerPlayerLevel());
    this.registerOfferQuestCondition(new y.OfferQuestConditionPaymentMinWithUpdate());
    this.registerOfferQuestCondition(new b.OfferQuestConditionPayUser());
    this.registerOfferQuestCondition(new F.OfferQuestConditionVoucherCode());
    this.registerOfferQuestCondition(new U.OfferQuestConditionBoughtOfferReward());
  };
  CastlePrivateOfferData.prototype.getPrivateOfferIDbyWodID = function (e, t) {
    var i = s.int(l.CastleModel.primeSaleData.getBestDiscountPrivateOfferID(e, t));
    if (i == -1) {
      for (var n = this.getActivePrivateOffersByDescription(r.ClientConstOffer.ADDITIONAL_COMPONENT_CONTAINER), o = 0; o < n.length; o++) {
        var c = n[o];
        var u = c.getAdditionalComponentByName(r.ClientConstOffer.OFFER_ADDITIONAL_BUILDING_ID);
        if (a.instanceOfClass(u, "OfferDescriptionAdditionalBuildingID") && u.ID == e) {
          i = c.id;
        }
      }
    }
    return i;
  };
  CastlePrivateOfferData.prototype.getPrivateOfferMerchantID = function () {
    var e = null;
    for (var t = this.getPrivateOffersWithVisualParamter(r.ClientConstOffer.OFFER_VISUAL_OFFER_DIALOG), i = 0; i < t.length; i++) {
      var n = t[i];
      var o = n.getVisualComponentByName(r.ClientConstOffer.OFFER_VISUAL_OFFER_DIALOG);
      if (a.instanceOfClass(o, "OfferDescriptionVisualOfferDialog") && o.dialogName == I.CastleResourceMerchantEventDialog.NAME) {
        e = n;
      }
    }
    return s.int(e ? e.id : -1);
  };
  return CastlePrivateOfferData;
}(c.BasicPrivateOfferData);
exports.CastlePrivateOfferData = D;
var I = require("./699.js");
var T = require("./5324.js");
var v = require("./5325.js");
var S = require("./5327.js");
var A = require("./5328.js");
var L = require("./5329.js");
var P = require("./5330.js");
var M = require("./5331.js");
var R = require("./5333.js");
var V = require("./5335.js");
var x = require("./5336.js");
var w = require("./5337.js");
var B = require("./5338.js");
var F = require("./5339.js");
var N = require("./5340.js");
var k = require("./5341.js");
var U = require("./5342.js");
o.classImplementsInterfaces(D, "IUpdatable");