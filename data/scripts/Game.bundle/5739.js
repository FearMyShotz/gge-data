Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./127.js");
var r = require("./728.js");
var l = function (e) {
  function RandomGemVO(t) {
    var i = e.call(this) || this;
    i._id = t.levelID;
    i._upgradeId = -1;
    i._levelInfos = t;
    i._lordType = s.BasicEquippableVO.LORD_TYPE_ALL;
    i._slotType = s.BasicEquippableVO.SLOT_TYPE_ALL;
    return i;
  }
  n.__extends(RandomGemVO, e);
  Object.defineProperty(RandomGemVO.prototype, "nameString", {
    get: function () {
      return a.Localize.text("gem_effect_name_gemRandom", [this.level]);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleGemVO.prototype, "nameString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RandomGemVO.prototype, "bonusDescriptionText", {
    get: function () {
      return a.Localize.text("gem_effect_description_gemRandom", [this.level]);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleGemVO.prototype, "bonusDescriptionText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return RandomGemVO;
}(r.CastleGemVO);
exports.RandomGemVO = l;
o.classImplementsInterfaces(l, "IEquippableVO");