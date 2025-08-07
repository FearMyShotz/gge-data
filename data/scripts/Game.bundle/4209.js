Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = function (e) {
  function PopoverEnum(t, i, n) {
    var a = this;
    a._id = 0;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, o.BasicEnum.instantiationKey) || this)._id = i;
    a._veClass = n;
    return a;
  }
  n.__extends(PopoverEnum, e);
  PopoverEnum.getTypeById = function (e) {
    return this.getByProperty(PopoverEnum, "id", e, PopoverEnum.UNKNOWN);
  };
  Object.defineProperty(PopoverEnum.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PopoverEnum.prototype, "veClass", {
    get: function () {
      return this._veClass;
    },
    enumerable: true,
    configurable: true
  });
  PopoverEnum.__initialize_static_members = function () {
    PopoverEnum.UNKNOWN = new PopoverEnum("unknown", -1, null);
    PopoverEnum.AUTO_SELL_EQUIPMENT = new PopoverEnum("autoSellEquipment", a.PopoverConst.EQUIPMENT_SOLD, r.AutoSellEquipmentPopoverVE);
    PopoverEnum.AUTO_SELL_GEM = new PopoverEnum("autoSellGem", a.PopoverConst.GEM_SOLD, l.AutoSellGemPopoverVE);
    PopoverEnum.REWARD_HUB_NOTIFICATION = new PopoverEnum("rewardHubNotification", a.PopoverConst.GEM_SOLD, c.RewardHubPopoverVE);
  };
  return PopoverEnum;
}(require("./84.js").CastleEnum);
exports.PopoverEnum = s;
var r = require("./4210.js");
var l = require("./4211.js");
var c = require("./4212.js");
s.__initialize_static_members();