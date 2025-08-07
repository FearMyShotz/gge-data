Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./44.js");
var s = require("./27.js");
var r = require("./195.js");
var l = function (e) {
  function CollectableItemDungeonProtectionVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemDungeonProtectionVE, e);
  CollectableItemDungeonProtectionVE.prototype.tooltipCreate = function () {
    return {
      t: a.SpecialServerHelper.checkTextIDForSkinText("dungeonProtection"),
      p: [s.CastleTimeStringHelper.getLongEventTimeString(this.itemDungeonProtectionVO.duration)]
    };
  };
  Object.defineProperty(CollectableItemDungeonProtectionVE.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_NoDungeonAttacks;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ACollectableItemSimpleIconVE.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemDungeonProtectionVE.prototype, "itemDungeonProtectionVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemDungeonProtectionVE;
}(r.ACollectableItemSimpleIconVE);
exports.CollectableItemDungeonProtectionVE = l;
o.classImplementsInterfaces(l, "ICollectableRendererList");