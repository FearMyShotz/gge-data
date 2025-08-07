Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleFightItemVO() {
    this.slotType = 0;
    this.itemLevel = 0;
    this.unlockLevel = -1;
    this.unlockSkillID = -1;
    this.locked = false;
    this.outline = 0;
  }
  CastleFightItemVO.prototype.isUnlocked = function () {
    if (this.unlockLevel >= 0) {
      return this.unlockLevel >= this.itemLevel;
    } else {
      return a.CastleModel.legendSkillData.isSkillActive(a.CastleModel.legendSkillData.getSkillByID(this.unlockSkillID));
    }
  };
  CastleFightItemVO.prototype.isLegendSlot = function () {
    return this.unlockSkillID >= 0;
  };
  CastleFightItemVO.prototype.isFree = function () {
    return this.unitVO == null;
  };
  CastleFightItemVO.prototype.isSameType = function (e) {
    return !!this.unitVO && this.unitVO.type == e.type;
  };
  CastleFightItemVO.prototype.getWodId = function () {
    return o.int(this.unitVO ? this.unitVO.wodId : -1);
  };
  CastleFightItemVO.prototype.getAmount = function () {
    return o.int(this.unitVO ? this.unitVO.inventoryAmount : 0);
  };
  Object.defineProperty(CastleFightItemVO.prototype, "unitVO", {
    get: function () {
      return this._unitVO;
    },
    set: function (e) {
      this._unitVO = e;
      this.outline = CastleFightItemVO.OUTLINE_NONE;
    },
    enumerable: true,
    configurable: true
  });
  CastleFightItemVO.__initialize_static_members = function () {
    CastleFightItemVO.OUTLINE_NONE = 0;
    CastleFightItemVO.OUTLINE_ORANGE = 1;
    CastleFightItemVO.OUTLINE_RED = 2;
  };
  return CastleFightItemVO;
}();
exports.CastleFightItemVO = n;
var o = require("./6.js");
var a = require("./4.js");
n.__initialize_static_members();