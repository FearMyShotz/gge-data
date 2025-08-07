Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./389.js");
var l = require("./4.js");
var c = require("./265.js");
var u = require("./211.js");
var d = require("./374.js");
var p = require("./10.js");
var h = function (e) {
  function AIICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AIICommand, e);
  Object.defineProperty(AIICommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_ATTACK_INFO_ISLAND;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AIICommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        this.controller.removeEventListener(r.CastlePlayerInfoEvent.GET_PLAYERINFO, this.bindFunction(this.onPlayerInfoGained));
        this.paramObj = JSON.parse(t[1]);
        var i = l.CastleModel.attackData.parse_AII(this.paramObj);
        if (i.targetArea && !i.targetArea.ownerInfo && i.targetArea.occupierPId > 0) {
          this.controller.addEventListener(r.CastlePlayerInfoEvent.GET_PLAYERINFO, this.bindFunction(this.onPlayerInfoGained));
          l.CastleModel.smartfoxClient.sendCommandVO(new d.C2SGetDetailPlayerInfo(i.targetArea.occupierPId));
          return true;
        }
        this.openDialog(i);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  AIICommand.prototype.onPlayerInfoGained = function () {
    this.controller.removeEventListener(r.CastlePlayerInfoEvent.GET_PLAYERINFO, this.bindFunction(this.onPlayerInfoGained));
    var e = l.CastleModel.attackData.parse_AII(this.paramObj);
    this.openDialog(e);
  };
  AIICommand.prototype.openDialog = function (e) {
    g.CastleDialogHandler.getInstance().registerDefaultDialogs(u.AttackDialog, new c.CastleAttackDialogProperties(e));
  };
  return AIICommand;
}(p.CastleCommand);
exports.AIICommand = h;
var g = require("./9.js");
o.classImplementsInterfaces(h, "IExecCommand");