Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./18.js");
var d = require("./393.js");
var p = require("./241.js");
var h = require("./429.js");
var g = require("./511.js");
var C = require("./210.js");
var _ = require("./15.js");
var m = require("./4.js");
var f = require("./251.js");
var O = require("./1893.js");
var E = createjs.Point;
var y = function (e) {
  function CastleAllianceTournamentEventDialog() {
    return e.call(this, CastleAllianceTournamentEventDialog.NAME) || this;
  }
  n.__extends(CastleAllianceTournamentEventDialog, e);
  CastleAllianceTournamentEventDialog.prototype.initRankListComponent = function () {
    this._rankList = new T.CastleTournamentRankListComponent(this.dialogDisp.mc_rankList, v.CastleAllianceTournamentRankListItem, "dialog_highscore_search", "dialog_highscore_search_alliance");
  };
  CastleAllianceTournamentEventDialog.prototype.updateStaticText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_speachBubble, new l.LocalizedTextVO("dialog_alliancetournament_speachBubble"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copyBold, new l.LocalizedTextVO("dialog_tournament_boldText"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new l.LocalizedTextVO("dialog_alliancetournament_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_yourFameTitle, new l.LocalizedTextVO("dialog_allianceTournament_nobilityPoints"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_yourRankTitle, new l.LocalizedTextVO("dialog_tournament_yourCurrentRank"));
  };
  CastleAllianceTournamentEventDialog.prototype.updateDialog = function () {
    e.prototype.updateDialog.call(this);
    this.setOwnRankTexts(this.scoreBarData.ownRank, this.scoreBarData.ownPoints);
  };
  CastleAllianceTournamentEventDialog.prototype.requestHighscoreData = function (e) {
    if (!this.isWaitingForServerMessage) {
      this.isWaitingForServerMessage = true;
      m.CastleModel.smartfoxClient.sendCommandVO(new d.C2SGetHighscoreVO(e, u.ClientConstCastle.CATEGORY_ALLIANCE_TOURNAMENT_FAME));
    }
  };
  Object.defineProperty(CastleAllianceTournamentEventDialog.prototype, "defaultRewardIconDimension", {
    get: function () {
      return CastleAllianceTournamentEventDialog.DEFAULT_ICON_DIMENSION_0;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(O.ACastleTournamentEventDialog.prototype, "defaultRewardIconDimension").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceTournamentEventDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_ltpe]);
    this.dialogDisp.icon_ltpe_points.toolTipText = "dialog_longPointsEvent_seasonalPoints";
    this.dialogDisp.btn_ltpe.toolTipText = "dialog_alliancetournament_longPointsEvent_button";
    if (m.CastleModel.specialEventData.isEventActive(a.EventConst.EVENTTYPE_ALLIANCE_TOURNAMENT)) {
      m.CastleModel.smartfoxClient.sendCommandVO(new p.C2SPointEventGetPointsVO(a.EventConst.EVENTTYPE_ALLIANCE_TOURNAMENT));
    }
    this.pagination = new h.Pagination(this, CastleAllianceTournamentEventDialog.MAX_PAGES, false);
    this.pagination.addControl(new g.PaginationArrows(this, this.pagination));
    this.pagination.addControl(new b.PaginationMouseWheel(this.dialogDisp.mc_scoreBarComponent, this.pagination));
    if (this.scoreBar) {
      this.scoreBar.destroy();
    }
    this.scoreBar = new I.CastleScoreBarComponent(this.dialogDisp.mc_scoreBarComponent, new D.CastlePaginatedScoreEventScoreBarProperties(this.pagination, this.scoreBarData.rewardLists, "allianceTournament", this.tooltipValues, this.levelLabels, this.descriptions));
    _.CastleBasicController.getInstance().addEventListener(C.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
    this.pagination.enable();
    this.updateProgressBars();
    for (var i = 1; i < this.levelLabels.length; i++) {
      if (c.int(this.levelLabels[i]) > this.scoreBarData.ownPoints) {
        this.pagination.currentPage = i;
        break;
      }
    }
    if (c.int(this.levelLabels[this.levelLabels.length - 1 - this.scoreBar.numRankRewards]) <= this.scoreBarData.ownPoints) {
      this.pagination.currentPage = c.int(this.levelLabels.length - 1 - this.scoreBar.numRankRewards);
    }
  };
  CastleAllianceTournamentEventDialog.prototype.onUpdatePoints = function (e) {
    this.updateDialog();
    this.updateProgressBars();
  };
  CastleAllianceTournamentEventDialog.prototype.updateProgressBars = function () {
    this.scoreBar.update(new f.CastleScoreBarProgressVO(this.scoreBarData.ownPoints, this.scoreBarData.ownRank, this.scoreBarData.pointThresholds, this.scoreBarData.topX));
  };
  Object.defineProperty(CastleAllianceTournamentEventDialog.prototype, "dialogProperties_0", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceTournamentEventDialog.prototype.updatePages = function (e, t) {
    if (this.scoreBar) {
      this.scoreBar.executeFullUpdate();
    }
  };
  CastleAllianceTournamentEventDialog.prototype.changeArrow = function (e, t) {
    return false;
  };
  CastleAllianceTournamentEventDialog.prototype.getLeftArrow = function () {
    return this.dialogDisp.mc_scoreBarComponent.btn_left;
  };
  CastleAllianceTournamentEventDialog.prototype.getRightArrow = function () {
    return this.dialogDisp.mc_scoreBarComponent.btn_right;
  };
  Object.defineProperty(CastleAllianceTournamentEventDialog.prototype, "tooltipValues", {
    get: function () {
      var e = [];
      for (var t = 0; t < this.scoreBarData.pointThresholds.length && this.scoreBarData.pointThresholds[t] != 0; t++) {
        e.push(this.scoreBarData.pointThresholds[t]);
      }
      for (var i = 0; i < this.scoreBarData.topX.length; i++) {
        e.push(this.scoreBarData.topX[i]);
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceTournamentEventDialog.prototype, "levelLabels", {
    get: function () {
      var e = [];
      var t = 0;
      for (t = 0; t < this.scoreBarData.pointThresholds.length && this.scoreBarData.pointThresholds[t] != 0; t++) {
        e.push(this.scoreBarData.pointThresholds[t]);
      }
      for (t = 0; t < this.scoreBarData.topX.length; t++) {
        e.push(r.Localize.text("Ranking_TopX", [this.scoreBarData.topX[t]]));
      }
      e.push(r.Localize.text("Ranking_Winner"));
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceTournamentEventDialog.prototype, "descriptions", {
    get: function () {
      var e = [];
      for (var t = 0; t < this.scoreBarData.rewardLists.length; t++) {
        if (this.scoreBarData.rewardLists[t].grantType == s.RewardConst.ALLIANCE) {
          e.push("reward_forAllianceFunds");
        } else if (this.scoreBarData.rewardLists[t].grantType == s.RewardConst.ALLIANCE_MEMBER) {
          e.push("reward_forAllianceMembers");
        } else {
          e.push("forAllianceFundsAndMembers");
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceTournamentEventDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    _.CastleBasicController.getInstance().removeEventListener(C.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
    this.pagination.disable();
  };
  CastleAllianceTournamentEventDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    this.pagination.handleClick(t);
    if (t.target == this.dialogDisp.btn_ltpe) {
      var i = m.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT);
      if (i) {
        this.hide();
        i.openDialog();
      }
    }
  };
  Object.defineProperty(CastleAllianceTournamentEventDialog.prototype, "scoreBarData", {
    get: function () {
      return this.dialogProperties_0.eventVO.scoreEventVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceTournamentEventDialog.__initialize_static_members = function () {
    CastleAllianceTournamentEventDialog.DEFAULT_ICON_DIMENSION_0 = new E(36, 36);
  };
  CastleAllianceTournamentEventDialog.NAME = "CastleAllianceTournamentEvent_S";
  CastleAllianceTournamentEventDialog.MAX_PAGES = 1;
  return CastleAllianceTournamentEventDialog;
}(O.ACastleTournamentEventDialog);
exports.CastleAllianceTournamentEventDialog = y;
y.__initialize_static_members();
var b = require("./715.js");
var D = require("./1719.js");
var I = require("./331.js");
var T = require("./1894.js");
var v = require("./4370.js");
o.classImplementsInterfaces(y, "ICollectableRendererList", "IPaginationContainer", "IPaginationArrowsContainer");
y.__initialize_static_members();