Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./60.js");
var o = require("./226.js");
var a = function () {
  function CastlePrivateOfferDialogCreator() {}
  CastlePrivateOfferDialogCreator.getPrivateOfferDialogClass = function (e) {
    switch (e) {
      case C.CastleDungeonTreasureChestDialog.NAME:
        return C.CastleDungeonTreasureChestDialog;
      case _.CastleDungeonTreasureChestOpenDialog.NAME:
        return _.CastleDungeonTreasureChestOpenDialog;
      case m.CastleKongregateNotificationDialog.NAME:
        return m.CastleKongregateNotificationDialog;
      case f.CastleKongregateRatingDialog.NAME:
        return f.CastleKongregateRatingDialog;
      case O.CastleMultiChestDialog.NAME:
        return O.CastleMultiChestDialog;
      case y.CastlePrivateOfferBrandDialog.NAME:
        return y.CastlePrivateOfferBrandDialog;
      case b.CastlePrivateOfferCoinmineDialog.NAME:
        return b.CastlePrivateOfferCoinmineDialog;
      case D.CastlePrivateOfferCoinmineDoneDialog.NAME:
        return D.CastlePrivateOfferCoinmineDoneDialog;
      case I.CastlePrivateOfferDecorationDialog.NAME:
        return I.CastlePrivateOfferDecorationDialog;
      case T.CastlePrivateOfferDecorationFinishDialog.NAME:
        return T.CastlePrivateOfferDecorationFinishDialog;
      case v.CastlePrivateOfferPremiumSmsDialog.NAME:
        return v.CastlePrivateOfferPremiumSmsDialog;
      case S.CastlePrivateOfferRubymineDialog.NAME:
        return S.CastlePrivateOfferRubymineDialog;
      case A.CastlePrivateOfferRubymineDoneDialog.NAME:
        return A.CastlePrivateOfferRubymineDoneDialog;
      case L.CastlePrivateOfferTimeChallengeDialog.NAME:
        return L.CastlePrivateOfferTimeChallengeDialog;
      case P.CastlePrivateOfferTimeChallengeFinishDialog.NAME:
        return P.CastlePrivateOfferTimeChallengeFinishDialog;
      case M.CastlePrivateOfferTutorialCompletedDialog.NAME:
        return M.CastlePrivateOfferTutorialCompletedDialog;
      case s.PrivateOfferFailedStandardDialog.NAME:
        return s.PrivateOfferFailedStandardDialog;
      case V.CastlePrivatePrimeTimeOfferDialog.NAME:
        return V.CastlePrivatePrimeTimeOfferDialog;
      case x.CastleWhaleChestFinishDialog.NAME:
        return x.CastleWhaleChestFinishDialog;
      case c.CastlePrimeDayPODialog.NAME:
        return c.CastlePrimeDayPODialog;
      case u.CastlePrimeDayPOSMSDialog.NAME:
        return u.CastlePrimeDayPOSMSDialog;
      case d.CastlePrimeSaleDialog.NAME:
        return d.CastlePrimeSaleDialog;
      case x.CastleWhaleChestFinishDialog.PO_NAME:
        return x.CastleWhaleChestFinishDialog;
      case g.CastleChestDialog.NAME:
        return g.CastleChestDialog;
      case p.CastleTreasureChestDialog.NAME:
        return p.CastleTreasureChestDialog;
      case h.CastleTreasureChestOpenDialog.NAME:
        return h.CastleTreasureChestOpenDialog;
      case l.CastlePaymentRewardSpecialOfferFinishDialog.NAME:
        return l.CastlePaymentRewardSpecialOfferFinishDialog;
      case r.CastleResourceMerchantEventDialog.NAME:
        return r.CastleResourceMerchantEventDialog;
      case R.CastlePrivatePrimeDayOfferDynamicDialog.OFFER_NAME:
        return R.CastlePrivatePrimeDayOfferDynamicDialog;
      case E.CastlePOFurysBladeMessageDialog.OFFER_NAME:
        return E.CastlePOFurysBladeMessageDialog;
      case w.CastlePrivateBestsellerShopDialog.OFFER_NAME:
        return w.CastlePrivateBestsellerShopDialog;
    }
    return null;
  };
  CastlePrivateOfferDialogCreator.getPrivateOfferDialogName = function (e) {
    var t;
    var i = e.getDescriptionByName(n.ClientConstOffer.VISUAL_COMPONENT_CONTAINER);
    if (o.PrivateOfferStateEnum.isFailedState(e.offerState) && i.visuals.get(n.ClientConstOffer.OFFER_VISUAL_FAILED_DIALOG) !== undefined) {
      t = i.visuals.get(n.ClientConstOffer.OFFER_VISUAL_FAILED_DIALOG).dialogName;
    } else {
      switch (e.offerState) {
        case o.PrivateOfferStateEnum.QUEST_PENDING:
          if (i.visuals.get(n.ClientConstOffer.OFFER_VISUAL_QUEST_ACCEPT_DIALOG) !== undefined) {
            t = i.visuals.get(n.ClientConstOffer.OFFER_VISUAL_QUEST_ACCEPT_DIALOG).dialogName;
          }
          break;
        case o.PrivateOfferStateEnum.QUEST_STARTED:
          if (i.visuals.get(n.ClientConstOffer.OFFER_VISUAL_QUEST_DIALOG) !== undefined) {
            t = i.visuals.get(n.ClientConstOffer.OFFER_VISUAL_QUEST_DIALOG).dialogName;
          }
          break;
        case o.PrivateOfferStateEnum.OFFER_READY:
        case o.PrivateOfferStateEnum.OFFER_PENDING:
          if (i.visuals.get(n.ClientConstOffer.OFFER_VISUAL_OFFER_DIALOG) !== undefined) {
            t = i.visuals.get(n.ClientConstOffer.OFFER_VISUAL_OFFER_DIALOG).dialogName;
          } else if (i.visuals.get(n.ClientConstOffer.OFFER_VISUAL_QUEST_DIALOG) !== undefined) {
            t = i.visuals.get(n.ClientConstOffer.OFFER_VISUAL_QUEST_DIALOG).dialogName;
          }
          break;
        case o.PrivateOfferStateEnum.OFFER_SUCCEEDED:
        case o.PrivateOfferStateEnum.ITERATION_SUCCEEDED:
          if (i.visuals.get(n.ClientConstOffer.OFFER_VISUAL_FINISH_DIALOG) !== undefined) {
            t = i.visuals.get(n.ClientConstOffer.OFFER_VISUAL_FINISH_DIALOG).dialogName;
          }
          break;
        default:
          console.log("DO NOT SHOW IN THIS STATE");
      }
    }
    return t;
  };
  return CastlePrivateOfferDialogCreator;
}();
exports.CastlePrivateOfferDialogCreator = a;
var s = require("./563.js");
var r = require("./697.js");
var l = require("./1079.js");
var c = require("./1081.js");
var u = require("./1739.js");
var d = require("./1082.js");
var p = require("./3646.js");
var h = require("./798.js");
var g = require("./1083.js");
var C = require("./3649.js");
var _ = require("./3650.js");
var m = require("./1742.js");
var f = require("./3651.js");
var O = require("./1743.js");
var E = require("./3652.js");
var y = require("./3653.js");
var b = require("./3654.js");
var D = require("./1536.js");
var I = require("./1745.js");
var T = require("./3655.js");
var v = require("./3656.js");
var S = require("./3657.js");
var A = require("./1537.js");
var L = require("./1084.js");
var P = require("./3658.js");
var M = require("./3659.js");
var R = require("./1746.js");
var V = require("./814.js");
var x = require("./3664.js");
var w = require("./1748.js");