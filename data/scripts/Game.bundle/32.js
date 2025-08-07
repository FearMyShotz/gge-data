Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleUserDataEvent(t, i = null, n = false, o = false) {
    var a = e.call(this, t, n, o) || this;
    a.params = i;
    return a;
  }
  n.__extends(CastleUserDataEvent, e);
  CastleUserDataEvent.CHANGE_USERDATA = "changeUserdata";
  CastleUserDataEvent.CHANGE_USER_AQUAPOINTS = "changeUserAquaPoints";
  CastleUserDataEvent.CHANGE_USER_CURRENCY = "changeUserCurrency";
  CastleUserDataEvent.CHANGE_USER_AVATAR = "changeUserAvatar";
  CastleUserDataEvent.CHANGE_USER_MIGHT = "changeUserMight";
  CastleUserDataEvent.CHANGE_CASTLELIST = "changeCastleList";
  CastleUserDataEvent.CHANGE_KINGSTOWERLIST = "changeKingstowerList";
  CastleUserDataEvent.CHANGE_MONUMENTLIST = "changeMonumentList";
  CastleUserDataEvent.CHANGE_LABORATORYLIST = "changeLaboratoryList";
  CastleUserDataEvent.CHANGE_VILLAGELIST = "changeVillageList";
  CastleUserDataEvent.CHANGE_PAYUSER_INFO = "changePayuserInfo";
  CastleUserDataEvent.CHANGE_USER_LIFETIME_SPENT = "changeUserLifeTimeSpent";
  CastleUserDataEvent.CHANGE_USER_NAME = "changeUserName";
  CastleUserDataEvent.LEVEL_UP = "userdatalevelUp";
  CastleUserDataEvent.VALIDATED_EMAIL = "Validatedemail";
  CastleUserDataEvent.ALLIANCE_STATUS_CHANGED = "allianceStatusChanged";
  CastleUserDataEvent.GPI_UPDATE = "GPI_UPDATE";
  CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED = "onSpecialCurrenciesUpdated";
  CastleUserDataEvent.NOOB_PROTECTION = "noobprotection";
  CastleUserDataEvent.NOOBTIME_FINISHED = "noobtimefinished";
  CastleUserDataEvent.PEACE_PROTECTION = "peaceprotection";
  CastleUserDataEvent.PEACETIME_FINISHED = "peacetimefinished";
  CastleUserDataEvent.ATTACKPROTECTION_UPDATED = "attackprotectionupdated";
  CastleUserDataEvent.RELOCATE_INFO_UPDATED = "relocateinfoupdated";
  CastleUserDataEvent.MAIL_VERIFICATION_SENT = "mailVerifyComplete";
  CastleUserDataEvent.FRIEND_INVITE_INFO_UPDATED = "inviteFriendInfosUpdated";
  CastleUserDataEvent.PREMIUM_FLAG_CHANGED = "premiumFlagChanged";
  CastleUserDataEvent.FACEBOOK_DATA_UPDATED = "facebookDataUpdated";
  CastleUserDataEvent.DOWNTIME_STATUS_UPDATED = "";
  CastleUserDataEvent.CAP_TOOL_NOTIFICATIONS_UPDATED = "capToolNotificationsUpdated";
  return CastleUserDataEvent;
}(createjs.Event);
exports.CastleUserDataEvent = o;