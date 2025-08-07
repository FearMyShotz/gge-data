Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./18.js");
var l = require("./4.js");
var c = require("./3762.js");
var u = require("./3763.js");
var d = require("./3764.js");
var p = require("./3765.js");
var h = require("./3766.js");
var g = function (e) {
  function OpenPostAttackDialogCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OpenPostAttackDialogCommand, e);
  OpenPostAttackDialogCommand.prototype.execute = function (e = null) {
    var t = s.int(s.int(e[0]));
    var i = e[1];
    var n = e[2];
    var o = e[3];
    if (!n) {
      throw new Error("Missing parameter in OpenPostAttackDialogCommand");
    }
    switch (t) {
      case r.ClientConstCastle.ACTION_TYPE_TREASUREATTACK:
        C.CastleDialogHandler.getInstance().registerDefaultDialogs(O.CastlePostAttackTreasureDialog, new c.CastlePostAttackDialogProperties(i, n, o));
        break;
      case r.ClientConstCastle.SPYTYPE_SABOTAGE:
        if (l.CastleModel.userData.userLevel < r.ClientConstCastle.MIN_USERLEVEL_HORSE_VISIBLE_IN_POSTATTACK) {
          C.CastleDialogHandler.getInstance().registerDefaultDialogs(b.CastlePostSpyDialog, new d.CastlePostSpyDialogProperties(n, i));
        } else {
          C.CastleDialogHandler.getInstance().registerDefaultDialogs(D.CastlePostSpyHorseDialog, new d.CastlePostSpyDialogProperties(n, i));
        }
        break;
      case r.ClientConstCastle.ACTION_TYPE_SENDGOODS:
        if (l.CastleModel.userData.userLevel < r.ClientConstCastle.MIN_USERLEVEL_HORSE_VISIBLE_IN_POSTATTACK) {
          C.CastleDialogHandler.getInstance().registerDefaultDialogs(v.CastlePostSendGoodsDialog, new p.CastlePostSendGoodsDialogProperties(n, i));
        } else {
          C.CastleDialogHandler.getInstance().registerDefaultDialogs(S.CastlePostSendGoodsHorseDialog, new p.CastlePostSendGoodsDialogProperties(n, i));
        }
        break;
      case r.ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE_TOWNSHIP:
        var a = n;
        l.CastleModel.smartfoxClient.sendCommandVO(new h.C2SCreateDaimyoDefenseMovementVO(a.sourceArea.objectId, a.targetArea.absAreaPosX, a.targetArea.absAreaPosY, a.getArmy()));
        i();
        break;
      default:
        if (l.CastleModel.userData.userLevel < r.ClientConstCastle.MIN_USERLEVEL_HORSE_VISIBLE_IN_POSTATTACK && t != r.ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE) {
          C.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastlePostAttackDialog, new c.CastlePostAttackDialogProperties(i, n, o));
        } else {
          var g = n;
          if (A.instanceOfClass(g.targetArea, "DaimyoCastleMapObjectVO") && g.openSelectBoosterDialog) {
            C.CastleDialogHandler.getInstance().registerDefaultDialogs(y.SamuraiDaimyoBoosterSelectDialog, new u.PostAttackSelectBoosterDialogProperties(t, i, n, o));
          } else if (g.isTempServerCollectorAttack && g.openSelectBoosterDialog) {
            C.CastleDialogHandler.getInstance().registerDefaultDialogs(T.CollectorTempServerEventBoosterSelectDialog, new u.PostAttackSelectBoosterDialogProperties(t, i, n, o));
          } else if (g.isAllianceBattleGroundPlayerPointsAttack && g.openSelectBoosterDialog) {
            C.CastleDialogHandler.getInstance().registerDefaultDialogs(I.AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog, new u.PostAttackSelectBoosterDialogProperties(t, i, n, o));
          } else if (g.isAllianceBattleGroundTowerAttack && g.openSelectBoosterDialog) {
            C.CastleDialogHandler.getInstance().registerDefaultDialogs(L.AllianceBattleGroundTowerCollectorEventBoosterSelectDialog, new u.PostAttackSelectBoosterDialogProperties(t, i, n, o));
          } else if (g.isCollectorAttack && g.openSelectBoosterDialog) {
            C.CastleDialogHandler.getInstance().registerDefaultDialogs(E.CollectorEventBoosterSelectDialog, new u.PostAttackSelectBoosterDialogProperties(t, i, n, o));
          } else {
            C.CastleDialogHandler.getInstance().registerDefaultDialogs(f.CastlePostAttackHorseDialog, new c.CastlePostAttackDialogProperties(i, n, o));
          }
        }
    }
  };
  Object.defineProperty(OpenPostAttackDialogCommand.prototype, "layoutManager", {
    get: function () {
      return _.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return OpenPostAttackDialogCommand;
}(o.SimpleCommand);
exports.OpenPostAttackDialogCommand = g;
var C = require("./9.js");
var _ = require("./17.js");
var m = require("./1102.js");
var f = require("./3772.js");
var O = require("./3774.js");
var E = require("./3775.js");
var y = require("./1779.js");
var b = require("./1105.js");
var D = require("./3779.js");
var I = require("./3780.js");
var T = require("./3781.js");
var v = require("./945.js");
var S = require("./1353.js");
a.classImplementsInterfaces(g, "ISimpleCommand");
var A = require("./1.js");
var L = require("./3782.js");