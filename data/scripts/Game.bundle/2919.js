Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./58.js");
var c = require("./4.js");
var u = require("./624.js");
var d = require("./1441.js");
var p = require("./8.js");
var h = function (e) {
  function RingMenuButtonFusionForge() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonFusionForge, e);
  RingMenuButtonFusionForge.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_fusionForge;
    this._disp.visible = this.visible;
    p.ButtonHelper.enableButton(this._disp, c.CastleModel.userData.userLevel >= l.ClientConstLevelRestrictions.MIN_LEVEL_FUSION_FORGE);
  };
  Object.defineProperty(RingMenuButtonFusionForge.prototype, "visible", {
    get: function () {
      return !this.isBuildingInProgress() && !!s.instanceOfClass(this.targetBuilding, "ADecoBuildingVE") && this.targetBuilding.decoBuildingVO.fusionInfoVO.isFusionTarget && !this.targetBuilding.buildingVO.isDamaged && !o.EnvGlobalsHandler.globals.isCrossplay;
    },
    enumerable: true,
    configurable: true
  });
  RingMenuButtonFusionForge.prototype.onClick = function (e, t) {
    var i = new g.CollectableItemBuildingVO();
    i.buildingVO = this.targetBuilding.buildingVO;
    var n = c.CastleModel.areaData.activeArea;
    var o = new u.DecorationForgeSelectResultVO(i, n.areaInfo.kingdomID, n.areaId);
    C.CastleDialogHandler.getInstance().registerDefaultDialogs(_.DecorationForgeMainDialog, new d.DecorationForgeMainDialogProperties(o));
  };
  RingMenuButtonFusionForge.prototype.getInfoText = function () {
    return r.Localize.text(p.ButtonHelper.isButtonEnabled(this._disp) ? "ringmenu_fusion" : "requiresLevel70_tt");
  };
  return RingMenuButtonFusionForge;
}(require("./98.js").ARingMenuButton);
exports.RingMenuButtonFusionForge = h;
var g = require("./291.js");
var C = require("./9.js");
var _ = require("./987.js");
a.classImplementsInterfaces(h, "IRingMenuButton");