Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./18.js");
var s = require("./181.js");
var r = function (e) {
  function WorkshopUnitVO() {
    return e.call(this) || this;
  }
  n.__extends(WorkshopUnitVO, e);
  Object.defineProperty(WorkshopUnitVO.prototype, "unitBuildingType", {
    get: function () {
      return a.ClientConstCastle.UNIT_BUILDINGTYPE_WORKSHOP;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ToolUnitVO.prototype, "unitBuildingType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorkshopUnitVO.prototype, "unitType", {
    get: function () {
      return a.ClientConstCastle.UNIT_TYPE_TOOL_ATTACK;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ToolUnitVO.prototype, "unitType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorkshopUnitVO.prototype, "isAvailableInPeaceMode", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ToolUnitVO.prototype, "isAvailableInPeaceMode").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return WorkshopUnitVO;
}(s.ToolUnitVO);
exports.WorkshopUnitVO = r;
o.classImplementsInterfaces(r, "IInventoryVO", "IShopVO", "ICostVO");