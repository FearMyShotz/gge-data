Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./1197.js");
var l = require("./4.js");
var c = require("./8.js");
var u = require("./98.js");
var d = createjs.Point;
var p = function (e) {
  function RingMenuButtonBuildingDistrictAdd() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonBuildingDistrictAdd, e);
  RingMenuButtonBuildingDistrictAdd.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_buildingDistrictAdd;
    this._disp.visible = this.isVisible;
    if (this._disp.visible) {
      var o = this.isEnabled;
      c.ButtonHelper.enableButton(this._disp, o);
      this._disp.toolTipText = o ? null : "alert_districtFull";
    }
    this._disp.gotoAndStop(s.int(n.buildingVO.districtTypeID));
    if (this.targetBuilding.buildingVO.storeable) {
      this._disp.x = RingMenuButtonBuildingDistrictAdd.POS_STORABLE.x;
      this._disp.y = RingMenuButtonBuildingDistrictAdd.POS_STORABLE.y;
    } else {
      this._disp.x = RingMenuButtonBuildingDistrictAdd.POS_DEFAULT.x;
      this._disp.y = RingMenuButtonBuildingDistrictAdd.POS_DEFAULT.y;
    }
  };
  Object.defineProperty(RingMenuButtonBuildingDistrictAdd.prototype, "isEnabled", {
    get: function () {
      var e = l.CastleModel.areaData.activeCommonInfo;
      var t = s.int(this.targetBuilding.buildingVO.districtTypeID);
      return !!e && !e.isDistrictFull(t);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RingMenuButtonBuildingDistrictAdd.prototype, "isVisible", {
    get: function () {
      var e = l.CastleModel.areaData.activeCommonInfo;
      var t = s.int(this.targetBuilding.buildingVO.districtTypeID);
      var i = h.Iso.data.objects.provider.getObjectById(e.getDistrictObjectId(t));
      return t > 0 && !this.targetBuilding.buildingVO.isDistrict && !this.targetBuilding.buildingVO.isInBuildingDistrict && !!e && e.hasDistrictOfType(t) && !this.isBuildingInProgress() && !i.isDisassembling();
    },
    enumerable: true,
    configurable: true
  });
  RingMenuButtonBuildingDistrictAdd.prototype.onClick = function (e, t) {
    if (c.ButtonHelper.isButtonEnabled(this._disp)) {
      var i = s.int(l.CastleModel.areaData.activeCommonInfo.getDistrictObjectId(this.targetBuilding.buildingVO.districtTypeID));
      l.CastleModel.smartfoxClient.sendCommandVO(new r.C2SMoveToDistrictVO(this.targetBuilding.vo.objectId, i));
      this.targetBuilding.elementContainer.parent.removeChild(this.targetBuilding.elementContainer);
      this.parent.hide();
    }
  };
  RingMenuButtonBuildingDistrictAdd.prototype.getInfoText = function () {
    return a.Localize.text("ringmenu_addToDistrict");
  };
  RingMenuButtonBuildingDistrictAdd.__initialize_static_members = function () {
    this.POS_DEFAULT = new d(58, -72);
    this.POS_STORABLE = new d(93, 27);
  };
  return RingMenuButtonBuildingDistrictAdd;
}(u.ARingMenuButton);
exports.RingMenuButtonBuildingDistrictAdd = p;
var h = require("./33.js");
o.classImplementsInterfaces(p, "IRingMenuButton");
p.__initialize_static_members();