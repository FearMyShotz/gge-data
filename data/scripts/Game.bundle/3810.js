Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./4.js");
var p = require("./24.js");
var h = require("./833.js");
var g = require("./1787.js");
var C = function (e) {
  function LongTermPointEventHighScoreDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, LongTermPointEventHighScoreDialog.NAME) || this;
  }
  n.__extends(LongTermPointEventHighScoreDialog, e);
  LongTermPointEventHighScoreDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.leagueRangeGGSTF = this.textFieldManager.registerTextField(this.dialogDisp.txt_leagueRange, new l.LocalizedTextVO(""));
    this.ownPointsGGSTF = this.textFieldManager.registerTextField(this.dialogDisp.txt_nobilityPoints, new c.NumberVO(0));
    this.dialogDisp.mc_scoreIcon.toolTipText = "dialog_longPointsEvent_seasonalPoints";
  };
  LongTermPointEventHighScoreDialog.prototype.loadingComplete = function (e) {
    this.dialogDisp.backgroundMC.addChild(e.currentshownDisplayObject);
  };
  LongTermPointEventHighScoreDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    var i = LongTermPointEventHighScoreDialog.SKIN_ASSET_PREFIX + LongTermPointEventHighScoreDialog.eventVO.skin.assetName + LongTermPointEventHighScoreDialog.SKIN_ASSET_SUFFIX;
    var n = new p.CastleGoodgameExternalClip(i, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(i), null, 0, true);
    if (n.isLoaded) {
      this.loadingComplete(n);
    } else {
      n.clipLoaded.addOnce(this.bindFunction(this.loadingComplete));
    }
    if (!LongTermPointEventHighScoreDialog.eventVO) {
      this.hide();
    }
  };
  Object.defineProperty(LongTermPointEventHighScoreDialog.prototype, "helpTextId", {
    get: function () {
      return "help_highscore_longPointsEvent";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.CastleGenericHighscoreDialog.prototype, "helpTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  LongTermPointEventHighScoreDialog.prototype.onGetHighscoreData = function (e) {
    var t = u.int(LongTermPointEventHighScoreDialog.eventVO.leagueLevels(e.leagueId)[0]);
    var i = u.int(LongTermPointEventHighScoreDialog.eventVO.leagueLevels(e.leagueId)[1]);
    if (i > r.PlayerConst.LEVEL_CAP) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_leagueRange, new l.LocalizedTextVO(t != i ? "dialog_ranking_legendFilter" : "legendaryLevel_placeholder", [Math.max(t - r.PlayerConst.LEVEL_CAP, 1), i - r.PlayerConst.LEVEL_CAP])).autoFitToBounds = true;
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_leagueRange, new l.LocalizedTextVO("levelrange_placeholder", [t, i])).autoFitToBounds = true;
    }
    this.isWaitingForServerMessage = false;
    this._currentLeagueId = e.leagueId;
    this.initItemRenderers();
    var n = e.params[0].L;
    var o = 0;
    for (var a = 0; a < h.CastleGenericHighscoreDialog.NUMBER_OF_VISIBLE_RANK_ITEMS; ++a) {
      var s = this._itemRenderers[a];
      var c = null;
      if (a < n.length) {
        var d = n[a];
        c = new g.CastlePointEventHighscoreItemVO();
        var p = new _.WorldMapOwnerInfoVO();
        p.fillFromParamObject(d[1]);
        c.ownerInfo = p;
        o = u.int(c.rank = u.int(d[0]));
        c.amount = u.int(d[1]);
      }
      s.itemVO = c;
      s.updateItem(this._currentSearchName);
    }
    this.updateScrollButtons(o, e.params[0].LR);
    this._currentSearchName = "";
    this.ownPointsGGSTF.textContentVO.numberValue = LongTermPointEventHighScoreDialog.eventVO.ownPoints;
  };
  LongTermPointEventHighScoreDialog.prototype.onRemoveSpecialEvent = function (e) {
    if (e.specialEventVO.eventId == s.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT) {
      this.hide();
    }
  };
  Object.defineProperty(LongTermPointEventHighScoreDialog, "eventVO", {
    get: function () {
      return d.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT);
    },
    enumerable: true,
    configurable: true
  });
  LongTermPointEventHighScoreDialog.__initialize_static_members = function () {
    LongTermPointEventHighScoreDialog.NAME = "LongTermPeHighScoreDialog_D";
    LongTermPointEventHighScoreDialog.SKIN_ASSET_PREFIX = "LongTermPeHighScoreDialog";
    LongTermPointEventHighScoreDialog.SKIN_ASSET_SUFFIX = "Skin";
  };
  return LongTermPointEventHighScoreDialog;
}(h.CastleGenericHighscoreDialog);
exports.LongTermPointEventHighScoreDialog = C;
var _ = require("./316.js");
a.classImplementsInterfaces(C, "ICollectableRendererList");
C.__initialize_static_members();