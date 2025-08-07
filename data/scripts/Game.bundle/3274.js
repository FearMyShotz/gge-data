Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./18.js");
var s = require("./197.js");
var r = require("./14.js");
var l = require("./307.js");
var c = require("./445.js");
var u = require("./444.js");
var d = require("./63.js");
var p = function (e) {
  function CollectableItemBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemBuildingVE, e);
  CollectableItemBuildingVE.prototype.init = function (t, i) {
    e.prototype.init.call(this, t, i);
    this.triggerOnAllIconDispLoadedManually = true;
    this.scaleManually = true;
  };
  CollectableItemBuildingVE.prototype.textfieldUpdate = function () {
    this.textfieldSetTextAsNumber(this.vo.amount);
  };
  CollectableItemBuildingVE.prototype.textfieldBackgroundVisible = function () {
    return this.itemBuildingVO.amount > 1;
  };
  CollectableItemBuildingVE.prototype.iconCreate = function () {
    d.WodPicHelper.addWodPic(this.itemBuildingVO.buildingVO, this.dispCreator.dispContainer, this.options.icon.dimension.x, this.options.icon.dimension.y, "", true, this.bindFunction(this.onAllDispClipsLoaded));
  };
  CollectableItemBuildingVE.prototype.tooltipCreate = function () {
    if (this.renderer.options.tooltip.useSimpleTooltips) {
      if (this.itemBuildingVO.buildingVO.buildingGroundType == a.ClientConstCastle.BUILDINGGROUND_TYPE_DECO) {
        return this.itemBuildingVO.buildingVO.getNameString();
      } else {
        return "building_with_level" + s.CastleToolTipManager.ID_PARAM_SEPERATOR + [this.itemBuildingVO.buildingVO.getNameString(), this.itemBuildingVO.buildingVO.level].toString();
      }
    } else {
      return e.prototype.tooltipCreate.call(this);
    }
  };
  CollectableItemBuildingVE.prototype.tooltipShowAdvanced = function () {
    if (this.itemBuildingVO.buildingVO) {
      l.DecoBuildingToolTipManager.showToolTip(this.renderer.clips.getTooltipTargetMc(), this.itemBuildingVO.buildingVO, 0, -11);
    }
  };
  CollectableItemBuildingVE.prototype.onInfoButtonClicked = function () {
    if (this.itemBuildingVO.buildingVO) {
      r.CastleComponent.layoutManager.showDialog(c.CastleBuildingInfoDialog, new u.CastleBuildingInfoDialogProperties(this.itemBuildingVO.buildingVO));
    }
  };
  Object.defineProperty(CollectableItemBuildingVE.prototype, "itemBuildingVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemBuildingVE;
}(require("./195.js").ACollectableItemSimpleIconVE);
exports.CollectableItemBuildingVE = p;
o.classImplementsInterfaces(p, "ICollectableRendererList");