Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./18.js");
var c = require("./51.js");
var u = require("./58.js");
var d = require("./207.js");
var p = require("./29.js");
var h = require("./4.js");
var g = require("./9.js");
var C = require("./238.js");
var _ = require("./236.js");
var m = require("./352.js");
var f = require("./351.js");
var O = require("./38.js");
var E = require("./151.js");
var y = require("./117.js");
var b = function () {
  function AttackDialogStartAttackCheck() {}
  AttackDialogStartAttackCheck.onAttack = function () {
    var e = this.attackInfoVO.advisorAttacks > 0 ? d.AdvisorAttackHelper.getCharacterByAdvisorType(y.AttackDialogController.getInstance().attackAdvisorType) : c.ClientConstCharacter.CHAR_ID_GENERAL;
    if (this.attackInfoVO.getSumOfUnits() != 0) {
      if (this.attackInfoVO.army.isAnyWaveSoldiersButNoTools()) {
        g.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleCharacterYesNoOKDialog, new _.CastleCharacterYesNoOKDialogProperties(s.Localize.text("generic_alert_watchout"), s.Localize.text("dialog_attack_onlyToolsInWave"), e, null, null, false));
      } else {
        var t = this.getSelectedLordVO();
        if (this.attackInfoVO.getTravelCost(t) > h.CastleModel.currencyData.c1Amount) {
          g.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastleNoMoneyC1Dialog, new f.CastleNoMoneyC1DialogProperties());
        } else {
          var i = 0;
          i = this.attackInfoVO.targetArea.areaType == a.WorldConst.AREA_TYPE_CAPITAL ? r.int(Math.max(h.CastleModel.landmark.capitalLandmark.minDefenseLevel, this.attackInfoVO.targetOwnerLevel)) : this.attackInfoVO.targetArea.areaType == a.WorldConst.AREA_TYPE_METROPOL ? r.int(Math.max(h.CastleModel.landmark.metroLandmark.minDefenseLevel, this.attackInfoVO.targetOwnerLevel)) : this.attackInfoVO.targetArea.areaType == a.WorldConst.AREA_TYPE_KINGS_TOWER ? r.int(a.OutpostConst.KINGS_TOWER_DEFAULT_LEVEL) : this.attackInfoVO.targetArea.areaType == a.WorldConst.AREA_TYPE_MONUMENT ? r.int(a.OutpostConst.MONUMENT_DEFAULT_LEVEL) : this.attackInfoVO.targetArea.areaType == a.WorldConst.AREA_TYPE_LABORATORY ? r.int(a.OutpostConst.LABORATORY_DEFAULT_LEVEL) : r.int(this.attackInfoVO.targetOwnerLevel);
          var o = a.CombatConst.getMinSoldiers(i);
          if (o > this.attackInfoVO.getSumOfUnits()) {
            g.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleCharacterYesNoOKDialog, new _.CastleCharacterYesNoOKDialogProperties(s.Localize.text("generic_alert_watchout"), s.Localize.text("errorCode_100", [o]), e, null, null, false));
          } else {
            if (h.CastleModel.userData.userLevel <= u.ClientConstLevelRestrictions.MAX_LEVEL_ATTACK_WARNING_NOT_ENOUGH_ATTACKPOWER) {
              if (!this.isAttackStrongEnoughOnAllFlanks()) {
                g.CastleDialogHandler.getInstance().registerDefaultDialogs(E.CastleStandardYesNoDialog, new n.BasicStandardYesNoDialogProperties(s.Localize.text("generic_alert_watchout"), s.Localize.text("alert_attackScreen_notEnoughTroops"), this.bindFunction(this.startAttack)));
                return;
              }
            }
            var l = this.attackInfoVO.army.waves.some(function (e) {
              return e.exceedsUnitLimit();
            });
            if (l = l || this.attackInfoVO.yardWaveContainer.exceedsLimit()) {
              g.CastleDialogHandler.getInstance().registerDefaultDialogs(O.CastleStandardOkDialog, new n.BasicStandardYesNoDialogProperties(s.Localize.text("generic_alert_watchout"), s.Localize.text("errorCode_313")));
            } else {
              this.startAttack();
            }
          }
        }
      }
    } else if (this.attackInfoVO.getSumOfTools() > 0) {
      g.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleCharacterYesNoOKDialog, new _.CastleCharacterYesNoOKDialogProperties(s.Localize.text("generic_alert_watchout"), s.Localize.text("dialog_attack_onlyTools"), e, null, null, false));
    } else {
      g.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleCharacterYesNoOKDialog, new _.CastleCharacterYesNoOKDialogProperties(s.Localize.text("generic_alert_watchout"), s.Localize.text("dialog_attack_noUnits"), e, null, null, false));
    }
  };
  AttackDialogStartAttackCheck.isAttackStrongEnoughOnAllFlanks = function () {
    if (!this.attackInfoVO.spyInfo || !this.attackInfoVO.spyInfo.itemsLeft || !this.attackInfoVO.spyInfo.itemsMiddle || !this.attackInfoVO.spyInfo.itemsRight) {
      return true;
    }
    var e;
    var t = r.int(this.getTotalAttackValue(this.attackInfoVO.spyInfo.itemsLeft.getSoldiers()));
    var i = r.int(this.getTotalAttackValue(this.attackInfoVO.spyInfo.itemsMiddle.getSoldiers()));
    var n = r.int(this.getTotalAttackValue(this.attackInfoVO.spyInfo.itemsRight.getSoldiers()));
    var o = 0;
    var a = 0;
    var s = 0;
    for (var l = 0; l < this.attackInfoVO.army.getWaveCount(); l++) {
      e = this.attackInfoVO.army.getWaveByID(l);
      var c = this.getSelectedLordVO();
      o += r.int(e.itemsLeftWall_units.getAttackMeleeValue(c, this.attackInfoVO.targetArea) + e.itemsLeftWall_units.getAttackRangeValue(c, this.attackInfoVO.targetArea));
      a += r.int(e.itemsMiddleWall_units.getAttackMeleeValue(c, this.attackInfoVO.targetArea) + e.itemsMiddleWall_units.getAttackRangeValue(c, this.attackInfoVO.targetArea));
      s += r.int(e.itemsRightWall_units.getAttackMeleeValue(c, this.attackInfoVO.targetArea) + e.itemsRightWall_units.getAttackRangeValue(c, this.attackInfoVO.targetArea));
    }
    return o + a + s >= t + i + n;
  };
  AttackDialogStartAttackCheck.startAttack = function (e = null) {
    var t = o.instanceOfClass(this.attackInfoVO.targetArea, "DaimyoCastleMapObjectVO");
    t = (t = (t = (t = t || this.attackInfoVO.targetActionType == l.ClientConstCastle.ACTION_TYPE_COLLECTOR_ATTACK) || this.attackInfoVO.isTempServerCollectorAttack) || this.attackInfoVO.isAllianceBattleGroundPlayerPointsAttack) || this.attackInfoVO.isAllianceBattleGroundTowerAttack;
    this.attackInfoVO.openSelectBoosterDialog = t;
    n.CommandController.instance.executeCommand(p.IngameClientCommands.OPEN_POSTATTACK_DIALOG_COMMAND, [this.attackInfoVO.targetActionType, this.bindFunction(this.hideDialog), this.attackInfoVO, this.getSelectedLordVO()]);
  };
  AttackDialogStartAttackCheck.getTotalAttackValue = function (e) {
    var t = 0;
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          t += o.buffedMeleeAttack + o.buffedRangeAttack;
        }
      }
    }
    return t;
  };
  AttackDialogStartAttackCheck.getSelectedLordVO = function () {
    return y.AttackDialogController.getInstance().selectedLord;
  };
  Object.defineProperty(AttackDialogStartAttackCheck, "attackInfoVO", {
    get: function () {
      return y.AttackDialogController.getInstance().attackVO;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogStartAttackCheck.hideDialog = function () {
    y.AttackDialogController.getInstance().hideDialog.dispatch();
  };
  AttackDialogStartAttackCheck.__initialize_static_members = function () {};
  return AttackDialogStartAttackCheck;
}();
exports.AttackDialogStartAttackCheck = b;
o.classImplementsInterfaces(b, "ICollectableRendererList");
b.__initialize_static_members();