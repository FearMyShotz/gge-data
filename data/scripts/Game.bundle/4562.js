Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./18.js");
var s = require("./181.js");
var r = function (e) {
  function DworkshopUnitVO() {
    return e.call(this) || this;
  }
  n.__extends(DworkshopUnitVO, e);
  Object.defineProperty(DworkshopUnitVO.prototype, "unitBuildingType", {
    get: function () {
      return a.ClientConstCastle.UNIT_BUILDINGTYPE_DWORKSHOP;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ToolUnitVO.prototype, "unitBuildingType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DworkshopUnitVO.prototype, "unitType", {
    get: function () {
      return a.ClientConstCastle.UNIT_TYPE_TOOL_DEFENCE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ToolUnitVO.prototype, "unitType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return DworkshopUnitVO;
}(s.ToolUnitVO);
exports.DworkshopUnitVO = r;
o.classImplementsInterfaces(r, "IInventoryVO", "IShopVO", "ICostVO");