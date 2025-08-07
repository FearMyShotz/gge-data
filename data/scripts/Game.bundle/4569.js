Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./18.js");
var s = require("./181.js");
var r = function (e) {
  function SceatToolsUnitVO() {
    return e.call(this) || this;
  }
  n.__extends(SceatToolsUnitVO, e);
  Object.defineProperty(SceatToolsUnitVO.prototype, "unitBuildingType", {
    get: function () {
      return a.ClientConstCastle.UNIT_BUILDINGTYPE_SCEAT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ToolUnitVO.prototype, "unitBuildingType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SceatToolsUnitVO.prototype, "unitType", {
    get: function () {
      if (this.attackType == a.ClientConstCastle.ATTACK_TOOL) {
        return a.ClientConstCastle.UNIT_TYPE_TOOL_ATTACK;
      } else {
        return a.ClientConstCastle.UNIT_TYPE_TOOL_DEFENCE;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ToolUnitVO.prototype, "unitType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SceatToolsUnitVO.prototype, "isAvailableInPeaceMode", {
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ToolUnitVO.prototype, "isAvailableInPeaceMode").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return SceatToolsUnitVO;
}(s.ToolUnitVO);
exports.SceatToolsUnitVO = r;
o.classImplementsInterfaces(r, "IInventoryVO", "IShopVO", "ICostVO");