Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./5.js");
var o = require("./6.js");
var a = require("./18.js");
var s = require("./5356.js");
var r = require("./5357.js");
var l = require("./5358.js");
var c = require("./1951.js");
var u = require("./5359.js");
var d = require("./53.js");
var p = require("./15.js");
var h = require("./344.js");
var g = require("./176.js");
var C = require("./4.js");
var _ = function () {
  function CastleAttackData() {}
  CastleAttackData.prototype.parse_ACI = function (e) {
    if (!e) {
      return null;
    }
    var t = new m.CastleAttackInfoVO();
    t.targetActionType = a.ClientConstCastle.ACTION_TYPE_ATTACK;
    t.fillFromParamObject(e);
    if (d.ABGHelper.isOnABGAndCollector && (O.instanceOfClass(t.targetArea, "CastleMapobjectVO") || O.instanceOfClass(t.targetArea, "CapitalMapobjectVO"))) {
      t.targetCollectorCurrencyAmount = C.CastleModel.collectEventData.lastGotAmountForTarget;
    }
    return t;
  };
  CastleAttackData.prototype.parse_GTI = function (e) {
    if (!e) {
      return null;
    }
    var t = new m.CastleAttackInfoVO();
    t.targetActionType = a.ClientConstCastle.ACTION_TYPE_ATTACK;
    t.fillFromParamObject(e);
    return t;
  };
  CastleAttackData.prototype.parse_ABI = function (e) {
    if (!e) {
      return null;
    }
    var t = new m.CastleAttackInfoVO();
    t.targetActionType = a.ClientConstCastle.ACTION_TYPE_BOSSDUNGEONATTACK;
    t.fillFromParamObject(e);
    return t;
  };
  CastleAttackData.prototype.parse_ADI = function (e) {
    var t = new m.CastleAttackInfoVO();
    t.targetActionType = a.ClientConstCastle.ACTION_TYPE_DUNGEONATTACK;
    t.fillFromParamObject(e);
    return t;
  };
  CastleAttackData.prototype.parse_AVI = function (e) {
    var t = new m.CastleAttackInfoVO();
    t.targetActionType = a.ClientConstCastle.ACTION_TYPE_VILLAGE_ATTACK;
    t.fillFromParamObject(e);
    return t;
  };
  CastleAttackData.prototype.parse_AII = function (e) {
    var t = new m.CastleAttackInfoVO();
    t.targetActionType = a.ClientConstCastle.ACTION_TYPE_ISLAND_ATTACK;
    t.fillFromParamObject(e);
    return t;
  };
  CastleAttackData.prototype.parse_ALI = function (e) {
    var t = new m.CastleAttackInfoVO();
    t.targetActionType = a.ClientConstCastle.ACTION_TYPE_LANDMARK_ATTACK;
    t.fillFromParamObject(e);
    return t;
  };
  CastleAttackData.prototype.parse_COI = function (e) {
    var t = new f.CastleConquerInfoVO();
    t.targetActionType = a.ClientConstCastle.ACTION_TYPE_CONQUER;
    t.isCapital = false;
    t.isMetropol = false;
    t.fillFromParamObject(e);
    return t;
  };
  CastleAttackData.prototype.parse_CCI = function (e) {
    var t = new f.CastleConquerInfoVO();
    t.targetActionType = a.ClientConstCastle.ACTION_TYPE_CONQUER;
    t.isCapital = true;
    t.isMetropol = false;
    t.fillFromParamObject(e);
    return t;
  };
  CastleAttackData.prototype.parse_CTI = function (e) {
    var t = new f.CastleConquerInfoVO();
    t.targetActionType = a.ClientConstCastle.ACTION_TYPE_CONQUER;
    t.isMetropol = true;
    t.isCapital = false;
    t.fillFromParamObject(e);
    return t;
  };
  CastleAttackData.prototype.parse_ACC = function (e) {
    var t = new m.CastleAttackInfoVO();
    t.targetActionType = a.ClientConstCastle.ACTION_TYPE_COLLECTOR_ATTACK;
    t.isCollectorAttack = true;
    t.targetCollectorCurrencyAmount = e.CCA;
    t.fillFromParamObject(e);
    return t;
  };
  CastleAttackData.prototype.sendAttackPlayerAllianceBattleground = function (e, t, i, o, a, r, l, c) {
    if (e.isAttackComplete()) {
      var u = new s.C2SCreateAllianceBattleGroundCollectorArmyAttackMovementVO(e.sourceArea.absAreaPos, e.targetArea.absAreaPos, e.army.getArmyData(), e.waitTime, t, i, e.isConquerAttack ? n.CombatConst.ATTACK_TYPE_CONQUER : n.CombatConst.ATTACK_TYPE_ATTACK, o, a, r ? r.id : 0, false, e.sourceArea.kingdomID, l, c, e.isCollectorAttack ? 1 : 0, e.collecterBooster, e.toolsSupportWodIds, e.yardWaveContainer.getSlotList(true));
      g.CastleDataHolder.instance.commandVO = u;
      C.CastleModel.smartfoxClient.sendCommandVO(u);
      h.AttackDialogTrackingHelper.getInstance().endSessionAndTrack(true);
    }
  };
  CastleAttackData.prototype.sendAttackTempServer = function (e, t, i, o, a, s, r, c) {
    if (e.isAttackComplete()) {
      var u = new l.C2SCreateArmyAttackMovementTempServerVO(e.sourceArea.absAreaPos, e.targetArea.absAreaPos, e.army.getArmyData(), e.waitTime, t, i, e.isConquerAttack ? n.CombatConst.ATTACK_TYPE_CONQUER : n.CombatConst.ATTACK_TYPE_ATTACK, o, a, s ? s.id : 0, false, e.sourceArea.kingdomID, r, c, e.isCollectorAttack ? 1 : 0, e.collecterBooster, e.toolsSupportWodIds, e.yardWaveContainer.getSlotList(true));
      g.CastleDataHolder.instance.commandVO = u;
      C.CastleModel.smartfoxClient.sendCommandVO(u);
      h.AttackDialogTrackingHelper.getInstance().endSessionAndTrack(true);
    }
  };
  CastleAttackData.prototype.sendAttack = function (e, t, i, o, a, s, l, u) {
    if (e.isAttackComplete()) {
      var d = new (e.advisorAttacks > 0 ? r.C2SCreateArmyAttackMovementAdvisorVO : c.C2SCreateArmyAttackMovementVO)(e.sourceArea.absAreaPos, e.targetArea.absAreaPos, e.army.getArmyData(), e.waitTime, t, i, e.isConquerAttack ? n.CombatConst.ATTACK_TYPE_CONQUER : n.CombatConst.ATTACK_TYPE_ATTACK, o, a, s ? s.id : 0, false, e.sourceArea.kingdomID, l, u, e.isCollectorAttack ? 1 : 0, e.collecterBooster, e.toolsSupportWodIds, e.yardWaveContainer.getSlotList(true), e.autoSkipCooldownType);
      if (d instanceof r.C2SCreateArmyAttackMovementAdvisorVO) {
        d.setAdvisor(e.advisorAttacks, e.advisorAttacksBattlelog);
      }
      g.CastleDataHolder.instance.commandVO = d;
      C.CastleModel.smartfoxClient.sendCommandVO(d);
      h.AttackDialogTrackingHelper.getInstance().endSessionAndTrack(true);
    }
  };
  CastleAttackData.prototype.sendSupport = function (e, t, i, o, a, s) {
    if (e.targetArea.areaType == n.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER) {
      C.CastleModel.smartfoxClient.sendCommandVO(new E.C2SCreateAllianceTowerSupportMovementVO(e.sourceArea.objectId, e.targetArea.absAreaPosX, e.targetArea.absAreaPosY, e.getArmy(), e.waitTime, t, i, o ? o.id : 0, a, s));
    } else {
      C.CastleModel.smartfoxClient.sendCommandVO(new u.C2SCreateDefenceSupportMovementVO(e.sourceArea.objectId, e.targetArea.absAreaPosX, e.targetArea.absAreaPosY, e.getArmy(), e.waitTime, t, i, o ? o.id : 0, a, s));
    }
  };
  CastleAttackData.prototype.getNextFreeWaveLevel = function (e) {
    return o.int(n.CombatConst.WAVE_UNLOCK_LEVEL[n.CombatConst.getMaxWaveCount(e, false)]);
  };
  Object.defineProperty(CastleAttackData.prototype, "controller", {
    get: function () {
      return p.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleAttackData;
}();
exports.CastleAttackData = _;
var m = require("./830.js");
var f = require("./5360.js");
var O = require("./1.js");
var E = require("./5361.js");