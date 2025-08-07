Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./4.js");
var s = require("./1883.js");
var r = require("./5.js");
var l = function (e) {
  function CastleConnectToAllianceBattleGroundServerCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleConnectToAllianceBattleGroundServerCommand, e);
  CastleConnectToAllianceBattleGroundServerCommand.prototype.setConnectFlag = function () {
    a.CastleModel.userData.connectToABGServer = true;
  };
  Object.defineProperty(CastleConnectToAllianceBattleGroundServerCommand.prototype, "externalServerID", {
    get: function () {
      return r.GlobalServerConst.ALLIANCE_BATTLE_GROUND_SERVER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleConnectToSpecialServerCommand.prototype, "externalServerID").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleConnectToAllianceBattleGroundServerCommand.prototype, "blockerTextID", {
    get: function () {
      return "dialog_clientVersion_switch_confirmDialog_beyondTheHorizon_mandatory_HTML5_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleConnectToSpecialServerCommand.prototype, "blockerTextID").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleConnectToAllianceBattleGroundServerCommand;
}(s.CastleConnectToSpecialServerCommand);
exports.CastleConnectToAllianceBattleGroundServerCommand = l;
o.classImplementsInterfaces(l, "ISimpleCommand");