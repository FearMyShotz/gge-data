Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./34.js");
var a = function () {
  function TrackingEventIds() {}
  TrackingEventIds.CONNECTION = i.Connection.ID;
  TrackingEventIds.IMPRESSION = i.Impression.ID;
  TrackingEventIds.AB_TEST_TIMEOUT_TRACKING = 39;
  TrackingEventIds.SHOP_BACK_BUTTON = 40;
  TrackingEventIds.WORLD_ASSIGNMENT = i.WorldAssignment.ID;
  TrackingEventIds.PROFILING = i.Profiling.ID;
  TrackingEventIds.SHOP_LOADED = 66;
  TrackingEventIds.GAME_PAYMENT_SHOP_CLICK = i.GamePaymentshopClick.ID;
  TrackingEventIds.PSP_LOADED = 74;
  TrackingEventIds.SHOP_CHECKOUT = 79;
  TrackingEventIds.DESKTOP_DEVICE_INFORMATION = 86;
  TrackingEventIds.BROWSER_STATE = 1252;
  TrackingEventIds.ASSETS_LOADING_SPEED = 92;
  TrackingEventIds.LP_JOURNEY = 93;
  TrackingEventIds.IN_GAME_PERFORMANCE = i.InGamePerformance.ID;
  TrackingEventIds.INVITATION = i.Invitation.ID;
  TrackingEventIds.FACEBOOK_CONNECTION = i.FacebookConnection.ID;
  TrackingEventIds.FACEBOOK_USER_DATA = 99;
  TrackingEventIds.FACBOOK_USER_EMAIL = 1256;
  TrackingEventIds.CLIENT_FUNNEL = i.ClientFunnel.ID;
  return TrackingEventIds;
}();
exports.TrackingEventIds = a;