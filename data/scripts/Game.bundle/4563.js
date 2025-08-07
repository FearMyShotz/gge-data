Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./18.js");
var s = require("./588.js");
var r = require("./181.js");
var l = function (e) {
  function ElitetoolUnitVO() {
    return e.call(this) || this;
  }
  n.__extends(ElitetoolUnitVO, e);
  Object.defineProperty(ElitetoolUnitVO.prototype, "unitType", {
    get: function () {
      if (this.attackType == a.ClientConstCastle.ATTACK_TOOL) {
        return a.ClientConstCastle.UNIT_TYPE_TOOL_ATTACK;
      } else {
        return a.ClientConstCastle.UNIT_TYPE_TOOL_DEFENCE;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ToolUnitVO.prototype, "unitType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ElitetoolUnitVO.prototype.getInstantBuyInfoByUnitsVO = function (e) {
    var t = new s.InstantBuyInfoVO(false, false, "dialog_fight_instantBuy");
    var i = e.eventTools;
    var n = e.getAssociatedEventPackage(this.wodId);
    if ((this.costC2 > 0 || n && n.basicPriceC2 > 0) && i != null) {
      for (var o = 0, a = i; o < a.length; o++) {
        var r = a[o];
        if (r !== undefined && r.wodId == this.wodId) {
          t.isEnabled = true;
          t.isVisible = true;
          break;
        }
      }
    }
    return t;
  };
  return ElitetoolUnitVO;
}(r.ToolUnitVO);
exports.ElitetoolUnitVO = l;
o.classImplementsInterfaces(l, "IInventoryVO", "IShopVO", "ICostVO");