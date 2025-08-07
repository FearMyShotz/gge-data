Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./572.js");
var r = require("./32.js");
var l = require("./15.js");
var c = require("./4.js");
var u = require("./519.js");
var d = require("./292.js");
var p = function (e) {
  function StartCampSeasonMapScreenItem(t, i) {
    return e.call(this, t, i) || this;
  }
  n.__extends(StartCampSeasonMapScreenItem, e);
  StartCampSeasonMapScreenItem.prototype.setItem = function () {
    this._disp.gotoAndStop(1);
    this.onChangeCrest(null);
    l.CastleBasicController.getInstance().addEventListener(r.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onChangeCrest));
  };
  StartCampSeasonMapScreenItem.prototype.onChangeCrest = function (e) {
    if (this._disp.flag0) {
      d.FlagHelper.colorFlag(this._disp.flag0, c.CastleModel.userData.playerCrest);
    } else if (this._disp.mc_camp) {
      d.FlagHelper.colorFlag(this._disp.mc_camp.house0.mc_flag, c.CastleModel.userData.playerCrest);
      d.FlagHelper.colorFlag(this._disp.mc_camp.house1.mc_flag, c.CastleModel.userData.playerCrest);
      d.FlagHelper.colorFlag(this._disp.mc_camp.house2.mc_flag, c.CastleModel.userData.playerCrest);
    }
  };
  StartCampSeasonMapScreenItem.prototype.setToolTip = function () {
    this._line1Content = {
      t: "",
      p: []
    };
    this._line1Content.t = "dialog_seasonEvent_2_Camp";
  };
  StartCampSeasonMapScreenItem.prototype.isMouseInteractive = function () {
    return !!this._tMapNodeVO.isStartNode || e.prototype.isMouseInteractive.call(this);
  };
  StartCampSeasonMapScreenItem.prototype.onClickMapItem = function (t) {
    e.prototype.onClickMapItem.call(this, null);
    c.CastleModel.smartfoxClient.sendCommandVO(new s.C2SJoinCampVO(c.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.mapID));
  };
  Object.defineProperty(StartCampSeasonMapScreenItem.prototype, "line1Content", {
    get: function () {
      return new a.LocalizedTextVO(this._line1Content.t);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.BasicSimpleWorldMapItem.prototype, "line1Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return StartCampSeasonMapScreenItem;
}(u.BasicSimpleWorldMapItem);
exports.StartCampSeasonMapScreenItem = p;
o.classImplementsInterfaces(p, "ITreasureMapItem", "IIngameUICapable", "IWorldmapTooltipData");