Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function (e) {
  function CollectableRendererBuildingLevelMC() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableRendererBuildingLevelMC, e);
  CollectableRendererBuildingLevelMC.prototype.reset = function () {
    if (this.clips.buildingLevelMC) {
      this.clips.buildingLevelMC.visible = false;
    }
  };
  CollectableRendererBuildingLevelMC.prototype.update = function () {
    if (this.clips.buildingLevelMC) {
      this.clips.buildingLevelMC.visible = this.canShowButton();
      if (this.clips.buildingLevelMC.visible) {
        if (this.clips.buildingLevelMC.txt_value_small) {
          if (this.buildingVO.level > 99) {
            r.CastleComponent.textFieldManager.registerTextField(this.clips.buildingLevelMC.txt_value, new a.TextVO(""));
            r.CastleComponent.textFieldManager.registerTextField(this.clips.buildingLevelMC.txt_value_small, new a.TextVO(this.buildingVO.level.toString())).autoFitToBounds = true;
          } else {
            r.CastleComponent.textFieldManager.registerTextField(this.clips.buildingLevelMC.txt_value, new a.TextVO(this.buildingVO.level.toString()));
            r.CastleComponent.textFieldManager.registerTextField(this.clips.buildingLevelMC.txt_value_small, new a.TextVO(""));
          }
        } else {
          r.CastleComponent.textFieldManager.registerTextField(this.clips.buildingLevelMC.txt_value, new a.TextVO(this.buildingVO.level.toString())).autoFitToBounds;
        }
      }
    }
  };
  CollectableRendererBuildingLevelMC.prototype.setVisibility = function (e) {
    if (this.clips.buildingLevelMC) {
      this.clips.buildingLevelMC.visible = e;
    }
  };
  Object.defineProperty(CollectableRendererBuildingLevelMC.prototype, "buildingVO", {
    get: function () {
      if (!this.itemVO) {
        return null;
      }
      if (l.instanceOfClass(this.itemVO, "CollectableItemBuildingVO")) {
        var e = this.itemVO.buildingVO;
        if (e && !l.instanceOfClass(e, "DecoBuildingVO")) {
          return e;
        }
      }
      return null;
    },
    enumerable: true,
    configurable: true
  });
  CollectableRendererBuildingLevelMC.prototype.canShowButton = function () {
    return !!this.itemVO && !!this.buildingVO;
  };
  return CollectableRendererBuildingLevelMC;
}(require("./242.js").ACollectableRenderComponent);
exports.CollectableRendererBuildingLevelMC = s;
var r = require("./14.js");
o.classImplementsInterfaces(s, "ICollectableRendererList");
var l = require("./1.js");