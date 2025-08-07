Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./4.js");
var r = require("./407.js");
var l = require("./1149.js");
var c = function (e) {
  function ArmyattackMapmovement() {
    return e.call(this) || this;
  }
  n.__extends(ArmyattackMapmovement, e);
  Object.defineProperty(ArmyattackMapmovement.prototype, "arrowColor", {
    get: function () {
      if (this.mapMovementVO.isMyMovement) {
        return 16737792;
      }
      switch (this.armyAttackMapmovementVO.armyState) {
        case u.ArmyAttackMapmovementVO.ARMY_FULL:
          if (this.mapMovementVO.targetOwnerID == s.CastleModel.userData.playerID) {
            return 16711680;
          } else {
            return 7152959;
          }
        case u.ArmyAttackMapmovementVO.ARMY_SHORT:
          if (this.mapMovementVO.targetOwnerID == s.CastleModel.userData.playerID) {
            return 9326630;
          } else {
            return 8336235;
          }
      }
      return Object.getOwnPropertyDescriptor(l.BasicMapmovement.prototype, "arrowColor").get.call(this);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ArmyMapmovement.prototype, "arrowColor").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyattackMapmovement.prototype, "baseClipName", {
    get: function () {
      if (this.armyAttackMapmovementVO.isConquerOutpostMovement) {
        return "Army_Mapmovement_Baron";
      } else if (this.armyAttackMapmovementVO.isConquerCapitalMovement || this.armyAttackMapmovementVO.isConquerTradeCentralMovement) {
        return "Army_Mapmovement_Capital";
      } else if (a.instanceOfClass(this.armyAttackMapmovementVO.sourceArea, "NomadKhanCampMapObjectVO")) {
        return "Army_Mapmovement_NomadKhanCampAttack";
      } else if (a.instanceOfClass(this.armyAttackMapmovementVO.sourceArea, "DaimyoCastleMapObjectVO")) {
        return "Army_Mapmovement_DaimyoAttack";
      } else if (a.instanceOfClass(this.armyAttackMapmovementVO.sourceArea, "WolfkingCastleMapObjectVO")) {
        return "Army_Mapmovement_WolfkingAttack";
      } else if (this.armyAttackMapmovementVO.isNPCMovement) {
        return "Army_Mapmovement_Dungeon";
      } else {
        return Object.getOwnPropertyDescriptor(r.ArmyMapmovement.prototype, "baseClipName").get.call(this);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ArmyMapmovement.prototype, "baseClipName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyattackMapmovement.prototype, "kingdomAffix", {
    get: function () {
      if (this.armyAttackMapmovementVO.isNPCMovement) {
        return s.CastleModel.kingdomData.getKingdomVOByID(this.mapMovementVO.kingdomID).kingdomName;
      } else {
        return Object.getOwnPropertyDescriptor(r.ArmyMapmovement.prototype, "kingdomAffix").get.call(this);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ArmyMapmovement.prototype, "kingdomAffix").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyattackMapmovement.prototype, "armyAttackMapmovementVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return ArmyattackMapmovement;
}(r.ArmyMapmovement);
exports.ArmyattackMapmovement = c;
var u = require("./385.js");
o.classImplementsInterfaces(c, "IIngameUICapable", "IWorldmapTooltipData");