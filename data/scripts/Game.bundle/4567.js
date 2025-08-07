Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./18.js");
var s = require("./347.js");
var r = function (e) {
  function EventunitUnitVO() {
    return e.call(this) || this;
  }
  n.__extends(EventunitUnitVO, e);
  Object.defineProperty(EventunitUnitVO.prototype, "unitBuildingType", {
    get: function () {
      return a.ClientConstCastle.UNIT_BUILDINGTYPE_BARRACKS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.SoldierUnitVO.prototype, "unitBuildingType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return EventunitUnitVO;
}(s.SoldierUnitVO);
exports.EventunitUnitVO = r;
o.classImplementsInterfaces(r, "IInventoryVO", "IShopVO", "ICostVO");