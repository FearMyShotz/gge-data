Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./4.js");
var a = require("./422.js");
var s = require("./3.js");
var r = createjs.Event;
var o = createjs.TimerEvent;
var l = function () {
  function ExtendedAwayFromKeyboardController(e) {
    this._userIsActive = true;
    e.addEventListener(r.ACTIVATE, this.activateHandler);
    e.addEventListener(r.DEACTIVATE, this.deactivateHandler);
    this._afkTimer = new s.Timer(ExtendedAwayFromKeyboardController.AFK_TIME, ExtendedAwayFromKeyboardController.AFK_COUNTER);
    this._afkTimer.addEventListener(o.TIMER_COMPLETE, this.bindFunction(this.afkTimerHandler));
    this._afkTimer.start();
  }
  ExtendedAwayFromKeyboardController.prototype.activateHandler = function (e) {
    this.stopAndResetTimer();
    if (!this._userIsActive && i.BasicModel.smartfoxClient.isConnected) {
      this._userIsActive = true;
      a.BasicDebugHud.updateAwayFromKeyboardPixelVisibility(this._userIsActive);
      this.sendActivityStatusToServer();
    }
  };
  ExtendedAwayFromKeyboardController.prototype.deactivateHandler = function (e) {
    this._afkTimer.start();
  };
  ExtendedAwayFromKeyboardController.prototype.afkTimerHandler = function (e) {
    this.stopAndResetTimer();
    if (this._userIsActive && i.BasicModel.smartfoxClient.isConnected) {
      this._userIsActive = false;
      a.BasicDebugHud.updateAwayFromKeyboardPixelVisibility(this._userIsActive);
      this.sendActivityStatusToServer();
    }
  };
  ExtendedAwayFromKeyboardController.prototype.stopAndResetTimer = function () {
    this._afkTimer.stop();
    this._afkTimer.reset();
  };
  ExtendedAwayFromKeyboardController.prototype.sendActivityStatusToServer = function () {
    i.BasicModel.smartfoxClient.sendMessage(ExtendedAwayFromKeyboardController.SERVER_COMMAND_ID, [this._userIsActive]);
  };
  ExtendedAwayFromKeyboardController.AFK_TIME = 300000;
  ExtendedAwayFromKeyboardController.AFK_COUNTER = 1;
  ExtendedAwayFromKeyboardController.SERVER_COMMAND_ID = "core_afk";
  return ExtendedAwayFromKeyboardController;
}();
exports.ExtendedAwayFromKeyboardController = l;