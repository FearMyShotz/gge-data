Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./14.js");
var s = require("./113.js");
var r = require("./120.js");
var l = require("./63.js");
var c = require("./19.js");
var u = require("./195.js");
var d = require("./4.js");
var p = function (e) {
  function CollectableItemUnitVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemUnitVE, e);
  CollectableItemUnitVE.prototype.init = function (t, i) {
    e.prototype.init.call(this, t, i);
    this.triggerOnAllIconDispLoadedManually = true;
    this.scaleManually = true;
  };
  CollectableItemUnitVE.prototype.iconCreate = function () {
    var e = this.renderer.getRenderer(c.CollectableRenderOptions.ICON_TRANSFORM);
    var t = 1;
    if (e) {
      t = e.transform.scale;
      e.transform.scale = 1;
    }
    l.WodPicHelper.addUnitPic(this.unitItemVO.unitVO, this.dispCreator.dispContainer, this.options.icon.dimension.x * t, this.options.icon.dimension.y * t, d.CastleModel.userData.playerCrest.colorsTwo[0], d.CastleModel.userData.playerCrest.colorsTwo[1], this.options.icon.unitLevelDimension.x, this.options.icon.unitLevelOffset, true, true, true, this.bindFunction(this.onAllDispClipsLoaded), this.renderer.clips.unitLevelMC, this.options.icon.selfLoadlevelIndicator);
  };
  CollectableItemUnitVE.prototype.textfieldUpdate = function () {
    this.textfieldSetTextAsNumber(this.vo.amount);
  };
  CollectableItemUnitVE.prototype.textfieldBackgroundVisible = function () {
    return true;
  };
  CollectableItemUnitVE.prototype.tooltipCreate = function () {
    if (this.renderer.options.tooltip.useSimpleTooltips) {
      return this.unitItemVO.unitVO.getNameString();
    } else {
      return this.tooltipCreateByAmount(this.unitItemVO.unitVO.getNameString());
    }
  };
  CollectableItemUnitVE.prototype.onInfoButtonClicked = function () {
    if (this.unitItemVO.unitVO) {
      a.CastleComponent.layoutManager.showDialog(s.CastleRecruitInfoDialog, new r.CastleRecruitInfoDialogProperties(this.unitItemVO.unitVO));
    }
  };
  Object.defineProperty(CollectableItemUnitVE.prototype, "unitItemVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemUnitVE;
}(u.ACollectableItemSimpleIconVE);
exports.CollectableItemUnitVE = p;
o.classImplementsInterfaces(p, "ICollectableRendererList");