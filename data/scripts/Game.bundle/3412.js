Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./4.js");
var c = function (e) {
  function CastleFactionInvasionEventHighscoreFactionSublayer(t, i, n, o) {
    var a = this;
    a._isBlue = false;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t) || this)._isBlue = o;
    a.initBasicButtons([a.subLayerDisp.mc_listContainer.btn_search, a.subLayerDisp.mc_listContainer.btn_leagueDown, a.subLayerDisp.mc_listContainer.btn_leagueUp, a.subLayerDisp.mc_listContainer.btn_top, a.subLayerDisp.mc_listContainer.btn_up, a.subLayerDisp.mc_listContainer.btn_down]);
    a.ownPointsGGSTF = a.textFieldManager.registerTextField(a.subLayerDisp.txt_nobilityPoints, new r.NumberVO(0));
    a.textFieldManager.registerTextField(a.subLayerDisp.txt_header, new s.LocalizedTextVO(i));
    a._rankingList = new u.CastleSingleplayerRankingComponent(a.subLayerDisp.mc_listContainer, d.CastleSingleplayerRankingItem, n, a.eventVO);
    return a;
  }
  n.__extends(CastleFactionInvasionEventHighscoreFactionSublayer, e);
  CastleFactionInvasionEventHighscoreFactionSublayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this._rankingList.show(t);
    this.updatePoints();
  };
  CastleFactionInvasionEventHighscoreFactionSublayer.prototype.hide = function () {
    e.prototype.hide.call(this);
    this._rankingList.hide();
  };
  CastleFactionInvasionEventHighscoreFactionSublayer.prototype.updatePoints = function () {
    this.ownPointsGGSTF.textContentVO.numberValue = this.eventVO.ownPoints;
  };
  Object.defineProperty(CastleFactionInvasionEventHighscoreFactionSublayer.prototype, "eventVO", {
    get: function () {
      return l.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_FACTION_INVASION).singleEventVO(this._isBlue);
    },
    enumerable: true,
    configurable: true
  });
  return CastleFactionInvasionEventHighscoreFactionSublayer;
}(require("./35.js").CastleDialogSubLayer);
exports.CastleFactionInvasionEventHighscoreFactionSublayer = c;
var u = require("./3413.js");
var d = require("./3414.js");
o.classImplementsInterfaces(c, "ICollectableRendererList", "ISublayer");