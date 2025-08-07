Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./4.js");
var u = require("./833.js");
var d = function (e) {
  function CastlePointEventHighscoreDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastlePointEventHighscoreDialog.ASSET_NAME) || this;
  }
  n.__extends(CastlePointEventHighscoreDialog, e);
  CastlePointEventHighscoreDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.dialogDisp.mc_header.gotoAndStop(1);
    this.dialogDisp.mc_scoreIcon.gotoAndStop(1);
    this.dialogDisp.mc_scoreIcon.toolTipText = "dialog_pointsEvent_nobilityPoints";
  };
  CastlePointEventHighscoreDialog.prototype.showLoaded = function (t = null) {
    this.updateEventVO();
    if (!this._eventVO) {
      this.hide();
    }
    e.prototype.showLoaded.call(this, t);
  };
  Object.defineProperty(CastlePointEventHighscoreDialog.prototype, "helpTextId", {
    get: function () {
      return "help_highscore_pointsEvent";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleGenericHighscoreDialog.prototype, "helpTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePointEventHighscoreDialog.prototype.onGetHighscoreData = function (t) {
    this.updateEventVO();
    var i = l.int(this._eventVO.leagueLevels(t.leagueId)[0]);
    var n = l.int(this._eventVO.leagueLevels(t.leagueId)[1]);
    if (n > s.PlayerConst.LEVEL_CAP) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_leagueRange, new r.LocalizedTextVO(i != n ? "dialog_ranking_legendFilter" : "legendaryLevel_placeholder", [Math.max(i - s.PlayerConst.LEVEL_CAP, 1), n - s.PlayerConst.LEVEL_CAP])).autoFitToBounds = true;
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_leagueRange, new r.LocalizedTextVO("levelrange_placeholder", [i, n])).autoFitToBounds = true;
    }
    e.prototype.onGetHighscoreData.call(this, t);
  };
  CastlePointEventHighscoreDialog.prototype.updateEventVO = function () {
    this._eventVO = c.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_POINT_EVENT);
  };
  CastlePointEventHighscoreDialog.__initialize_static_members = function () {
    CastlePointEventHighscoreDialog.NAME = "CastlePointEventHighscore";
    CastlePointEventHighscoreDialog.ASSET_NAME = "CastleGenericHighscore_D";
  };
  return CastlePointEventHighscoreDialog;
}(u.CastleGenericHighscoreDialog);
exports.CastlePointEventHighscoreDialog = d;
o.classImplementsInterfaces(d, "ICollectableRendererList");
d.__initialize_static_members();