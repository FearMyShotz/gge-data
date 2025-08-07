Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./12.js");
var s = require("./17.js");
var r = require("./307.js");
var o = require("./5.js");
var l = require("./155.js");
var u = require("./114.js");
var c = require("./117.js");
var _ = require("./4.js");
var d = require("./156.js");
var m = require("./25.js");
var h = require("./2.js");
var p = require("./29.js");
var g = require("./56.js");
var E = require("./38.js");
var C = createjs.EventDispatcher;
var f = h.getLogger(p.BASIC_CONTROLLER);
var T = function (e) {
  function BasicController() {
    var t = e !== null && e.apply(this, arguments) || this;
    t.paymentHashRefresher = new r.PaymentHashRefresher();
    t.waitForServerMessage = [];
    return t;
  }
  i.__extends(BasicController, e);
  Object.defineProperty(BasicController.prototype, "soundController", {
    get: function () {
      return this._soundController;
    },
    set: function (e) {
      this._soundController = e;
    },
    enumerable: true,
    configurable: true
  });
  BasicController.getInstance = function () {
    BasicController._basicController ||= new BasicController();
    return BasicController._basicController;
  };
  BasicController.prototype.onLogIn = function () {
    _.BasicModel.smartfoxClient.startGameServerErrorDelayTimer(_.BasicModel.smartfoxClient.onLoginResponseFailed);
  };
  BasicController.prototype.onLoggedIn = function () {
    this.paymentHashRefresher.resetAndStartRefreshing();
    f.debug("onLoggedIn()-> env.isIdentityManagementActive: " + o.EnvGlobalsHandler.globals.isIdentityManagementActive);
    u.BasicContextMenuController.instance.enableContextMenuItem(u.BasicContextMenuController.FORUM_LABEL);
  };
  BasicController.prototype.onLogOut = function () {
    f.debug("onLogOut()");
    d.ConnectionTrackingUtil.instance.dispose();
    if (this.soundController) {
      this.soundController.stopMusic();
      this.soundController.stopAllLoopedSoundEffects();
    }
    u.BasicContextMenuController.instance.disableContextMenuItem(u.BasicContextMenuController.FORUM_LABEL);
    this.paymentHashRefresher.stopRefreshing();
    this.disposeLicenseRefresher();
    g.ClientFunnelTrackingController.getInstance().dispose();
    s.TrackingCache.getInstance().trackingVerifier.dispose();
  };
  BasicController.prototype.onDestroyGame = function () {
    f.debug("onDestroyGame()");
    if (this.soundController) {
      this.soundController.stopMusic();
      this.soundController.stopAllLoopedSoundEffects();
    }
    this.disposeLicenseRefresher();
    g.ClientFunnelTrackingController.getInstance().dispose();
    f.warn("ClientFunnelPlayTimeController.dispose?");
  };
  BasicController.prototype.disposeLicenseRefresher = function () {
    if (_.BasicModel.identityManagement) {
      _.BasicModel.identityManagement.stopLicenseRefresher();
    }
  };
  BasicController.prototype.connectClient = function (e, t) {
    g.ClientFunnelTrackingController.getInstance().trackState(E.ClientFunnelGameStates.SERVER_CONNECT);
    _.BasicModel.smartfoxClient.roundTripResponseSignal.addOnce(this.bindFunction(this.handleSmartfoxClientOnRoundTripResponse));
    _.BasicModel.smartfoxClient.addEventListener(c.SmartfoxEvent.CONNECT_SUCCESS, this.bindFunction(this.onConnectSuccess));
    _.BasicModel.smartfoxClient.addEventListener(c.SmartfoxEvent.CONNECT_FAILED, this.bindFunction(this.onConnectFailed));
    _.BasicModel.smartfoxClient.addEventListener(c.SmartfoxEvent.CONNECT_TIMEOUT, this.bindFunction(this.onConnectTimeout));
    _.BasicModel.smartfoxClient.executeConnection(e, t);
  };
  BasicController.prototype.handleSmartfoxClientOnRoundTripResponse = function (e, t) {
    a.CommandController.instance.executeCommand(BasicController.COMMAND_TRACK_CONNECTION_TRACKING_EVENT, new l.ConnectionTrackingCommandVO(0, e.toString(), t));
  };
  BasicController.prototype.sendServerMessageVOAndWait = function (e, t = "") {
    this.waitForServerMessage.push(e.getCmdId());
    _.BasicModel.smartfoxClient.sendCommandVO(e);
  };
  BasicController.prototype.waitForMessage = function (e) {
    this.waitForServerMessage.push(e);
  };
  BasicController.prototype.onConnectTimeout = function (e) {
    g.ClientFunnelTrackingController.getInstance().trackState(E.ClientFunnelGameStates.SERVER_CONNECT_ERROR);
    a.CommandController.instance.executeCommand(BasicController.COMMAND_CONNECTION_TIMEOUT);
  };
  BasicController.prototype.onConnectFailed = function (e) {
    g.ClientFunnelTrackingController.getInstance().trackState(E.ClientFunnelGameStates.SERVER_CONNECT_ERROR);
    a.CommandController.instance.executeCommand(BasicController.COMMAND_CONNECTION_FAILED);
  };
  BasicController.prototype.onConnectSuccess = function (e) {
    f.debug("[BasicController]: getting signal -- onConnection Success");
    a.CommandController.instance.executeCommand(BasicController.COMMAND_TRACK_WORLD_ASSIGNMENT);
    g.ClientFunnelTrackingController.getInstance().trackState(E.ClientFunnelGameStates.SERVER_CONNECT_SUCCESS);
    _.BasicModel.smartfoxClient.removeEventListener(c.SmartfoxEvent.CONNECT_SUCCESS, this.bindFunction(this.onConnectSuccess));
    _.BasicModel.smartfoxClient.addEventListener(c.SmartfoxEvent.JOINED_ROOM, this.bindFunction(this.onJoinedRoom));
    _.BasicModel.smartfoxClient.addEventListener(c.SmartfoxEvent.EXTENSION_RESPONSE, this.bindFunction(this.onExtensionResponse));
    _.BasicModel.smartfoxClient.addEventListener(c.SmartfoxEvent.CONNECTION_LOST, this.bindFunction(this.onConnectionLost));
  };
  BasicController.prototype.onConnectionLost = function (e) {
    f.debug("onConnectionLost()");
    _.BasicModel.sessionData.loggedIn = false;
    g.ClientFunnelTrackingController.getInstance().dispose();
    this.paymentHashRefresher.stopRefreshing();
    a.CommandController.instance.executeCommand(BasicController.COMMAND_CONNECTION_LOST);
  };
  BasicController.prototype.onJoinedRoom = function (e) {
    a.CommandController.instance.executeCommand(BasicController.COMMAND_JOINED_ROOM, e);
  };
  BasicController.prototype.onExtensionResponse = function (e) {
    if (o.EnvGlobalsHandler.globals.useLaggyClientEmulation) {
      var t = Number((o.EnvGlobalsHandler.globals.laggyClientMaxDelay - o.EnvGlobalsHandler.globals.laggyClientMinDelay) * Math.random() + o.EnvGlobalsHandler.globals.laggyClientMinDelay);
      setTimeout(function () {
        f.info("delaying incoming event by: " + t + "ms");
        a.CommandController.instance.executeCommand(BasicController.COMMAND_EXTENSION_RESPONSE, e);
      }, t);
    } else {
      a.CommandController.instance.executeCommand(BasicController.COMMAND_EXTENSION_RESPONSE, e);
    }
  };
  BasicController.prototype.serverMessageArrived = function (e) {
    if (this.waitForServerMessage.indexOf(e) >= 0) {
      this.layoutManager.checkWaitingAnimState(e);
      var t = new Array();
      for (var n = 0; n < this.waitForServerMessage.length; n++) {
        if (this.waitForServerMessage[n] != e) {
          t.push(this.waitForServerMessage[n]);
        }
      }
      this.waitForServerMessage = t;
    }
  };
  BasicController.prototype.saveSoundSettings = function () {
    _.BasicModel.localData.saveSoundSettings([this.soundController.isMusicMuted, 1, this.soundController.isEffectsMuted, 1]);
  };
  BasicController.prototype.loginJson = function (e) {
    a.CommandController.instance.executeCommand(BasicController.COMMAND_LOGIN_JSON, e);
  };
  BasicController.prototype.registerJSON = function (e, t, n) {
    a.CommandController.instance.executeCommand(BasicController.COMMAND_REGISTER_USER_JSON, [e, t, n]);
  };
  BasicController.prototype.onClickMoreMoney = function (e) {
    a.CommandController.instance.executeCommand(BasicController.COMMAND_ON_CLICK_MORE_CURRENY, e);
  };
  BasicController.prototype.onStartRegisterDialog = function () {
    a.CommandController.instance.executeCommand(BasicController.COMMAND_SHOW_REGISTER_DIALOG);
  };
  BasicController.prototype.addExtraGold = function () {
    a.CommandController.instance.executeCommand(BasicController.COMMAND_ADD_EXTRA_CURRENCY, this.paymentHash);
  };
  BasicController.prototype.inviteFriend = function (e) {
    a.CommandController.instance.executeCommand(BasicController.COMMAND_INVITE_FRIEND, e);
  };
  BasicController.prototype.inviteFriendJSON = function (e) {
    a.CommandController.instance.executeCommand(BasicController.COMMAND_INVITE_FRIEND_JSON, e);
  };
  Object.defineProperty(BasicController.prototype, "layoutManager", {
    get: function () {
      return m.BasicLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  BasicController.prototype.sendServerMessageAndWait = function (e, t, n) {
    this.waitForServerMessage.push(n);
    _.BasicModel.smartfoxClient.sendMessage(e, t);
  };
  BasicController.prototype.sendCommandVOAndWait = function (e) {
    this.waitForServerMessage.push(e.getCmdId());
    _.BasicModel.smartfoxClient.sendCommandVO(e);
  };
  Object.defineProperty(BasicController, "hasBeenInitialized", {
    get: function () {
      return BasicController._basicController != null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicController.prototype, "awayFromKeyboardController", {
    set: function (e) {
      this._awayFromKeyboardController = e;
    },
    enumerable: true,
    configurable: true
  });
  BasicController.VERSION = "$Id$";
  BasicController.NAME = "BasicController";
  BasicController.COMMAND_GET_DOORMAN_SERVER_INSTANCES = "COMMAND_GET_DOORMAN_SERVER_INSTANCES";
  BasicController.SELECT_INITIAL_INSTANCEVO = "SELECT_INITIAL_INSTANCEVO";
  BasicController.COMMAND_HANDLE_SERVER_ERROR = "COMMAND_HANDLE_SERVER_ERROR";
  BasicController.COMMAND_INIT_LOGGER = "COMMAND_INIT_LOGGER";
  BasicController.COMMAND_INIT_SERVERCOMMANDS = "COMMAND_INIT_SERVERCOMMANDS";
  BasicController.COMMAND_EXTENSION_RESPONSE = "COMMAND_EXTENSION_RESPONSE";
  BasicController.COMMAND_SOCIAL_LOGIN = "COMMAND_SOCIAL_LOGIN";
  BasicController.COMMAND_LOGIN = "COMMAND_LOGIN";
  BasicController.COMMAND_LOGOUT = "COMMAND_LOGOUT";
  BasicController.COMMAND_CHECK_MAINTENANCE = "COMMAND_CHECK_MAINTENANCE";
  BasicController.COMMAND_CONNECT_CLIENT = "COMMAND_CONNECT_CLIENT";
  BasicController.COMMAND_CONNECTION_LOST = "COMMAND_CONNECTION_LOST";
  BasicController.COMMAND_CONNECTION_FAILED = "COMMAND_CONNECTION_FAILED";
  BasicController.COMMAND_CONNECTION_TIMEOUT = "COMMAND_CONNECTION_TIMEOUT";
  BasicController.COMMAND_JOINED_ROOM = "COMMAND_JOINED_ROOM";
  BasicController.COMMAND_VERSION_CHECK = "COMMAND_VERSION_CHECK";
  BasicController.COMMAND_INITALIZE_CONTROLLER = "COMMAND_INITALIZE_CONTROLLER";
  BasicController.COMMAND_REGISTER_USER = "COMMAND_REGISTER_USER";
  BasicController.COMMAND_RECONNECT = "COMMAND_RECONNECT";
  BasicController.COMMAND_OPEN_FORUM = "COMMAND_OPEN_FORUM";
  BasicController.COMMAND_DESTROY_GAME = "DESTROY_GAME";
  BasicController.COMMAND_PREPARE_RECONNECT = "COMMAND_PREPARE_RECONNECT";
  BasicController.COMMAND_SHOW_REGISTER_DIALOG = "COMMAND_SHOW_REGISTER_DIALOG";
  BasicController.COMMAND_SHOW_COMA_TEASER = "COMMAND_SHOW_COMA_TEASER";
  BasicController.COMMAND_CONNECT_TO_INSTANCEVO = "COMMAND_SELECT_INSTANCEVO_COMMAND";
  BasicController.COMMAND_INIT_COUNTRIES = "COMMAND_INIT_COUNTRIES";
  BasicController.COMMAND_PARSE_AVAILABLE_COUNTRIES = "COMMAND_PARSE_AVAILABLE_COUNTRIES";
  BasicController.COMMAND_LOGIN_JSON = "COMMAND_LOGIN_JSON";
  BasicController.COMMAND_REGISTER_USER_JSON = "COMMAND_REGISTER_USER_JSON";
  BasicController.COMMAND_INVITE_FRIEND = "COMMAND_INVITE_FRIEND";
  BasicController.COMMAND_INVITE_FRIEND_JSON = "COMMAND_INVITE_FRIEND_JSON";
  BasicController.COMMAND_CHANGE_COUNTRY = "COMMAND_CHANGE_COUNTRY_COMMAND";
  BasicController.COMMAND_INIT_ABTEST = "COMMAND_INIT_ABTEST";
  BasicController.COMMAND_INIT_SERVERLIST = "COMMAND_INIT_SERVERLIST";
  BasicController.COMMAND_INIT_ZONE_CAPACITY = "COMMAND_INIT_ZONE_CAPACITY";
  BasicController.COMMAND_ADD_EXTRA_CURRENCY = "COMMAND_ADD_EXTRA_CURRENCY";
  BasicController.COMMAND_ON_CLICK_MORE_CURRENY = "COMMAND_ON_CLICK_MORE_CURRENY";
  BasicController.COMMAND_RELOAD_NETWORK = "COMMAND_RELOAD_NETWORK";
  BasicController.COMMAND_UPDATE_NETWORK = "COMMAND_UPDATE_NETWORK";
  BasicController.COMMAND_FACEBOOK_INITIALIZE = "COMMAND_FACEBOOK_INITIALIZE";
  BasicController.COMMAND_FACEBOOK_CONNECT_LOGIN = "COMMAND_FACEBOOK_CONNECT_LOGIN";
  BasicController.COMMAND_TEST_CDN = "COMMAND_TEST_CDN";
  BasicController.COMMAND_REPLACE_AVAILABLE_COUNTRIES_BY_INSTANCE_COUNTRIES = "COMMAND_REPLACE_AVAILABLE_COUNTRIES_BY_INSTANCE_COUNTRIES";
  BasicController.COMMAND_CHANGE_LANGUAGE = "COMMAND_CHANGE_LANGUAGE";
  BasicController.COMMAND_SERVER_INFO = "COMMAND_SERVER_INFO";
  BasicController.COMMAND_SHOW_INGAME_HELP = "COMMAND_SHOW_INGAME_HELP";
  BasicController.COMMAND_REPORT_SURVEY = "COMMAND_REPORT_SURVEY";
  BasicController.COMMAND_VERIFY_PLAYER_MAIL = "COMMAND_VERIFY_PLAYER_MAIL";
  BasicController.COMMAND_LOST_PASSWORD = "COMMAND_LOST_PASSWORD";
  BasicController.COMMAND_CHILD_PROTECTION_SHUTDOWN_ALERT = "COMMAND_CHILD_PROTECTION_SHUTDOWN_ALERT";
  BasicController.COMMAND_IDENTITY_MANAGEMENT = "COMMAND_IDENTITY_MANAGEMENT";
  BasicController.COMMAND_HANDLE_IDENTITY_MANAGEMENT_ERROR = "COMMAND_HANDLE_IDENTITY_MANAGEMENT_ERROR";
  BasicController.COMMAND_TEST_CASE_INFO = "COMMAND_TEST_CASE_INFO";
  BasicController.COMMAND_CHECK_AGE_GATE_ACTIVITY = "COMMAND_CHECK_AGE_GATE_ACTIVITY";
  BasicController.COMMAND_VALIDATE_AGE = "COMMAND_VALIDATE_AGE";
  BasicController.COMMAND_TRACK_LOGIN = "COMMAND_TRACK_LOGIN";
  BasicController.COMMAND_TRACK_PROFILING = "COMMAND_TRACK_PROFILING";
  BasicController.COMMAND_TRACK_REGISTRATION_DATA = "COMMAND_TRACK_REGISTRATION_DATA";
  BasicController.COMMAND_TRACK_GOOGLE_PIXEL = "COMMAND_TRACK_GOOGLE_PIXEL";
  BasicController.COMMAND_TRACK_WORLD_ASSIGNMENT = "COMMAND_TRACK_WORLD_ASSIGNMENT";
  BasicController.COMMAND_TRACK_CONNECTION_TRACKING_EVENT = "COMMAND_TRACK_CONNECTION_TRACKING_EVENT";
  BasicController.COMMAND_TRACK_GAME_PAYMENT_SHOP_CLICK_EVENT = "COMMAND_TRACK_GAME_PAYMENT_SHOP_CLICK_EVENT";
  BasicController.COMMAND_TRACK_DESKTOP_DEVICE_INFORMATION_EVENT = "COMMAND_TRACK_DESKTOP_DEVICE_INFORMATION_EVENT";
  BasicController.COMMAND_TRACK_BROWSER_STATE_EVENT = "COMMAND_TRACK_BROWSER_STATE_EVENT";
  BasicController.COMMAND_VERIFY_TRACKING = "COMMAND_VERIFY_TRACKING";
  BasicController.COMMAND_TRACK_INVITATION = "COMMAND_TRACK_INVITATION";
  BasicController.COMMAND_TRACK_FACEBOOK_CONNECTION = "COMMAND_TRACK_FACEBOOK_CONNECTION";
  BasicController.COMMAND_TRACK_FACEBOOK_USERDATA = "COMMAND_TRACK_FACEBOOK_USERDATA";
  BasicController.COMMAND_TRACK_FACEBOOK_EMAIL = "COMMAND_TRACK_FACEBOOK_EMAIL";
  BasicController.PRIVATE_OFFER_VISUAL_ISO_OBJECT = "PRIVATE_OFFER_VISUAL_ISO_OBJECT";
  BasicController.PRIVATE_OFFER_VISUAL_ACCEPT_DIALOG = "PRIVATE_OFFER_VISUAL_ACCEPT_DIALOG";
  BasicController.PRIVATE_OFFER_QUEST_DIALOG = "PRIVATE_OFFER_QUEST_DIALOG";
  BasicController.PRIVATE_OFFER_FAILED_DIALOG = "PRIVATE_OFFER_FAILED_DIALOG";
  BasicController.PRIVATE_OFFER_FINISH_DIALOG = "PRIVATE_OFFER_FINISH_DIALOG";
  BasicController.PRIVATE_OFFER_INTERFACE_BUTTON = "PRIVATE_OFFER_INTERFACE_BUTTON";
  BasicController.PRIVATE_OFFER_OFFER_DIALOG = "PRIVATE_OFFER_OFFER_DIALOG";
  BasicController.REQUEST_SOCIAL_LOGIN_KEYS = "REQUEST_SOCIAL_LOGIN_KEYS";
  BasicController.CHOOSE_LOGIN_METHOD = "CHOOSE_LOGIN_METHOD";
  BasicController.COMMAND_GENERATE_INVITE_CODE = "COMMAND_GENERATE_INVITE_CODE";
  BasicController.COMMAND_SET_INVITE_CODE = "COMMAND_SET_INVITE_CODE";
  BasicController.GTM_CALL_GGS_TRACK_EVENT = "GTM_CALL_GGS_TRACK_EVENT";
  BasicController.GAMESIGHT_CALL_GGS_TRACK_EVENT = "GAMESIGHT_CALL_GGS_TRACK_EVENT";
  BasicController.COMMAND_RELOAD_PAGE_WITH_ZONE_ID = "COMMAND_RELOAD_PAGE_WITH_ZONE_ID";
  BasicController.commandDict = new Map();
  return BasicController;
}(C);
exports.BasicController = T;