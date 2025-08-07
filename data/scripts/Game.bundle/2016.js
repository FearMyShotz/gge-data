Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./6.js");
var l = function (e) {
  function CollectableRendererEquipmentBackground() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableRendererEquipmentBackground, e);
  CollectableRendererEquipmentBackground.prototype.reset = function () {
    if (this.clips.equipmentBackgroundMc) {
      this.clips.equipmentBackgroundMc.visible = false;
    }
  };
  CollectableRendererEquipmentBackground.prototype.update = function () {
    if (this.clips.equipmentBackgroundMc) {
      if (a.instanceOfClass(this.itemVO, "ACollectableItemEquipmentVO")) {
        this.setEquipmentBackground();
      } else {
        this.clips.equipmentBackgroundMc.visible = false;
      }
    }
  };
  CollectableRendererEquipmentBackground.prototype.setVisibility = function (e) {
    if (this.clips.equipmentBackgroundMc) {
      this.clips.equipmentBackgroundMc.visible = false;
    }
  };
  CollectableRendererEquipmentBackground.prototype.setEquipmentBackground = function () {
    if (a.instanceOfClass(this.itemVO, "CollectableItemEquipmentRarenessVO") || a.instanceOfClass(this.itemVO, "CollectableItemHeroRandomVO")) {
      this.clips.equipmentBackgroundMc.visible = false;
    } else {
      var e = 1;
      var t = r.int(this.itemVO.equipmentVO.visualRareID);
      if (t >= 1 && t <= 4) {
        e = t;
      }
      switch (this.itemVO.equipmentVO.rareID) {
        case s.EquipmentConst.RARENESS_UNIQUE:
        case s.EquipmentConst.RARENESS_HERO_UNIQUE:
          e = 5;
      }
      this.clips.equipmentBackgroundMc.visible = false;
      this.clips.equipmentBackgroundMc.gotoAndStop(e);
    }
  };
  return CollectableRendererEquipmentBackground;
}(require("./242.js").ACollectableRenderComponent);
exports.CollectableRendererEquipmentBackground = l;
o.classImplementsInterfaces(l, "ICollectableRendererList");