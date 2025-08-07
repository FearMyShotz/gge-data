Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./18.js");
var s = require("./22.js");
var r = require("./589.js");
var l = require("./181.js");
var c = function (e) {
  function EventtoolUnitVO() {
    var t = this;
    t.usedForEvent = [];
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(EventtoolUnitVO, e);
  EventtoolUnitVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    var i = s.CastleXMLUtils.getValueOrDefault("clientUsageEventID", t, "-1");
    if (i != "-1") {
      this.usedForEvent = s.CastleXMLUtils.getIntArrayFromString(i, ",");
    }
  };
  Object.defineProperty(EventtoolUnitVO.prototype, "unitType", {
    get: function () {
      if (this.attackType == a.ClientConstCastle.ATTACK_TOOL) {
        return a.ClientConstCastle.UNIT_TYPE_TOOL_ATTACK;
      } else {
        return a.ClientConstCastle.UNIT_TYPE_TOOL_DEFENCE;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ToolUnitVO.prototype, "unitType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  EventtoolUnitVO.prototype.getInstantBuyInfoByUnitsVO = function (e) {
    var t = new r.InstantBuyInfoVO(false, false, "dialog_fight_instantBuy");
    var i = e.eventTools;
    var n = e.getAssociatedEventPackage(this.wodId);
    if ((this.costC2 > 0 || n && n.basicPriceC2 > 0) && i != null) {
      for (var o = 0, a = i; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined && s.wodId == this.wodId) {
          t.isEnabled = true;
          t.isVisible = true;
          break;
        }
      }
    }
    return t;
  };
  return EventtoolUnitVO;
}(l.ToolUnitVO);
exports.EventtoolUnitVO = c;
o.classImplementsInterfaces(c, "IInventoryVO", "IShopVO", "ICostVO");