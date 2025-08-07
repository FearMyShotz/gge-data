Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./148.js");
var s = require("./4.js");
var r = require("./276.js");
var l = require("./1921.js");
var c = function (e) {
  function AlienAttackMapmovement() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AlienAttackMapmovement, e);
  AlienAttackMapmovement.prototype.initVisualRep = function () {
    e.prototype.initVisualRep.call(this);
    if (!this.mapMovementVO.isAttackingMovement) {
      var t = this.mapMovementVO.sourceArea.getDisplayObjectClipContainer(false, null);
      t.asDisplayObject().scaleX = t.asDisplayObject().scaleY /= r.CastleWorldmapConst.ZOOM_MAX;
      this.baseCampLayer.addChild(t.asDisplayObject());
    }
  };
  Object.defineProperty(AlienAttackMapmovement.prototype, "baseClipName", {
    get: function () {
      var e;
      switch (this.mapMovementVO.movementOwnerID) {
        case a.ClientConstNPCs.NPC_ID_RED_ALIEN_INVASION:
          e = "Army_Mapmovement_RedAlienInvasion";
          break;
        default:
          e = "Army_Mapmovement_UserInvasion";
      }
      return e;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ArmyattackMapmovement.prototype, "baseClipName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AlienAttackMapmovement.prototype, "kingdomAffix", {
    get: function () {
      return s.CastleModel.kingdomData.getKingdomVOByID(this.mapMovementVO.kingdomID).kingdomName;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ArmyattackMapmovement.prototype, "kingdomAffix").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return AlienAttackMapmovement;
}(l.ArmyattackMapmovement);
exports.AlienAttackMapmovement = c;
o.classImplementsInterfaces(c, "IIngameUICapable", "IWorldmapTooltipData");