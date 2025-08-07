Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./34.js");
exports.validateTrackingEvent = function validateTrackingEvent(e) {
  var t;
  switch (e.eventId) {
    case i.AllianceCreate.ID:
      t = i.AllianceCreate.validateEvent;
      break;
    case i.AllianceDiplomacy.ID:
      t = i.AllianceDiplomacy.validateEvent;
      break;
    case i.AllianceDelete.ID:
      t = i.AllianceDelete.validateEvent;
      break;
    case i.AllianceMemberChange.ID:
      t = i.AllianceMemberChange.validateEvent;
      break;
    case i.AlliancePayment.ID:
      t = i.AlliancePayment.validateEvent;
      break;
    case i.AreaRuin.ID:
      t = i.AreaRuin.validateEvent;
      break;
    case i.AreaAbandon.ID:
      t = i.AreaAbandon.validateEvent;
      break;
    case i.AreaRelocate.ID:
      t = i.AreaRelocate.validateEvent;
      break;
    case i.BattleMeta.ID:
      t = i.BattleMeta.validateEvent;
      break;
    case i.BattleShadow.ID:
      t = i.BattleShadow.validateEvent;
      break;
    case i.ColossusDepositEvent.ID:
      t = i.ColossusDepositEvent.validateEvent;
      break;
    case i.CraftingEquipment.ID:
      t = i.CraftingEquipment.validateEvent;
      break;
    case i.CrusadeDungeon.ID:
      t = i.CrusadeDungeon.validateEvent;
      break;
    case i.DailyQuests.ID:
      t = i.DailyQuests.validateEvent;
      break;
    case i.DisassembleRubyBuilding.ID:
      t = i.DisassembleRubyBuilding.validateEvent;
      break;
    case i.FinishedEvents.ID:
      t = i.FinishedEvents.validateEvent;
      break;
    case i.GlobalFactionState.ID:
      t = i.GlobalFactionState.validateEvent;
      break;
    case i.LongTermPointEventTotalPoints.ID:
      t = i.LongTermPointEventTotalPoints.validateEvent;
      break;
    case i.LuckyWheelSpin.ID:
      t = i.LuckyWheelSpin.validateEvent;
      break;
    case i.MessageSent.ID:
      t = i.MessageSent.validateEvent;
      break;
    case i.MinuteSkips.ID:
      t = i.MinuteSkips.validateEvent;
      break;
    case i.PaymentRewardGrant.ID:
      t = i.PaymentRewardGrant.validateEvent;
      break;
    case i.PlayerVIP.ID:
      t = i.PlayerVIP.validateEvent;
      break;
    case i.PrimeDaySeen.ID:
      t = i.PrimeDaySeen.validateEvent;
      break;
    case i.ResourcesOnLogout.ID:
      t = i.ResourcesOnLogout.validateEvent;
      break;
    case i.SentPlayerGift.ID:
      t = i.SentPlayerGift.validateEvent;
      break;
    case i.Sabotage.ID:
      t = i.Sabotage.validateEvent;
      break;
    case i.UnitsDismissed.ID:
      t = i.UnitsDismissed.validateEvent;
      break;
    case i.UnitsStarving.ID:
      t = i.UnitsStarving.validateEvent;
      break;
    case i.WishingWellCoins.ID:
      t = i.WishingWellCoins.validateEvent;
      break;
    case i.ClientFunnel.ID:
      t = i.ClientFunnel.validateEvent;
      break;
    case i.GuestRegistration.ID:
      t = i.GuestRegistration.validateEvent;
      break;
    case i.MvTestDisplay.ID:
      t = i.MvTestDisplay.validateEvent;
      break;
    case i.Connection.ID:
      t = i.Connection.validateEvent;
      break;
    case i.MvTestConversion.ID:
      t = i.MvTestConversion.validateEvent;
      break;
    case i.ForumRegistration.ID:
      t = i.ForumRegistration.validateEvent;
      break;
    case i.ClientLoad.ID:
      t = i.ClientLoad.validateEvent;
      break;
    case i.WorldAssignment.ID:
      t = i.WorldAssignment.validateEvent;
      break;
    case i.Profiling.ID:
      t = i.Profiling.validateEvent;
      break;
    case i.GamePaymentshopClick.ID:
      t = i.GamePaymentshopClick.validateEvent;
      break;
    case i.Impression.ID:
      t = i.Impression.validateEvent;
      break;
    case i.RUMPerformance.ID:
      t = i.RUMPerformance.validateEvent;
      break;
    case i.LPJourney.ID:
      t = i.LPJourney.validateEvent;
      break;
    case i.InGamePerformance.ID:
      t = i.InGamePerformance.validateEvent;
      break;
    case i.Invitation.ID:
      t = i.Invitation.validateEvent;
      break;
    case i.FacebookConnection.ID:
      t = i.FacebookConnection.validateEvent;
      break;
    default:
      return {
        success: false,
        message: "No validator for given event."
      };
  }
  return t(e);
};