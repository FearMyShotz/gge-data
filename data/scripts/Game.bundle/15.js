Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleBasicController(t = null) {
    var i = e.call(this) || this;
    if (!t) {
      throw new Error("Singleton class! Please use CastleBasicController.getInstance()...");
    }
    return i;
  }
  n.__extends(CastleBasicController, e);
  CastleBasicController.getInstance = function () {
    CastleBasicController._instance ||= new CastleBasicController(new a());
    return CastleBasicController._instance;
  };
  CastleBasicController.CONNECT_TO_TEMPORARY_SERVER = "CONNECT_TO_TEMPORARY_SERVER";
  CastleBasicController.CONNECT_TO_ALLIANCE_BATTLE_GROUND_SERVER = "CONNECT_TO_ALLIANCE_BATTLE_GROUND_SERVER";
  CastleBasicController.TRACK_ATTACK_SCREEN_ACTION = "TRACK_ATTACK_SCREEN_ACTION";
  CastleBasicController.TRACK_ACCOUNT_DELETION_ACTION = "TRACK_ACCOUNT_DELETION_ACTION";
  CastleBasicController.TRACK_SOCIAL_BUTTON = "TRACK_SOCIAL_BUTTON";
  CastleBasicController.TRACK_SSO_USER_MOVE_ACTION = "TRACK_SSO_USER_MOVE_ACTION";
  CastleBasicController.TRACK_GENERALS_ATTACK_SCREEN = "TRACK_GENERALS_ATTACK_SCREEN";
  CastleBasicController.TRACK_DONATION_EVENT = "TRACK_DONATION_EVENT";
  CastleBasicController.OPEN_DISCORD = "OPEN_DISCORD";
  return CastleBasicController;
}(require("./72.js").CastleEventDispatcher);
exports.CastleBasicController = o;
var a = function () {
  return function SingletonEnforcer() {};
}();