Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./1.js");
var d = require("./1.js");
var p = require("./5.js");
var h = require("./5.js");
var g = require("./5.js");
var C = require("./3.js");
var _ = require("./3.js");
var m = require("./3.js");
var f = require("./3.js");
var O = require("./3.js");
var E = require("./3.js");
var y = require("./6.js");
var b = require("./18.js");
var D = require("./1383.js");
var I = require("./393.js");
var T = require("./172.js");
var v = require("./30.js");
var S = require("./4.js");
var A = require("./748.js");
var L = require("./223.js");
var P = require("./43.js");
var M = require("./379.js");
var R = require("./8.js");
var V = require("./149.js");
var x = require("./136.js");
var w = require("./11.js");
var B = require("./93.js");
var F = createjs.MouseEvent;
var N = createjs.Point;
var k = function (e) {
  function CastleHighscoreDialog() {
    var t = this;
    t.startRank = 0;
    t.searchName = "";
    t._defaultSearchText = "";
    t._currentSelectedLeague = 1;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleHighscoreDialog.NAME) || this;
  }
  n.__extends(CastleHighscoreDialog, e);
  CastleHighscoreDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.searchLists = new Map();
    this.searchLists.set(CastleHighscoreDialog.SEARCH_OVERALL, b.ClientConstCastle.CATEGORY_BUILDING_POINTS);
    this.searchLists.set(CastleHighscoreDialog.SEARCH_WEEKLY, b.ClientConstCastle.CATEGORY_LOOT);
    this.searchLists.set(CastleHighscoreDialog.SEARCH_ALLIANCE, b.ClientConstCastle.CATEGORY_BUILDING_POINTS);
    this.searchLists.set(CastleHighscoreDialog.SEARCH_TEMPSERVER_PLAYER, p.HighscoreConst.TEMPSERVER_PREVIOUS_RUN_PLAYER);
    this.searchLists.set(CastleHighscoreDialog.SEARCH_ABG_PLAYER, p.HighscoreConst.ALLIANCE_BATTLE_GROUND_PREVIOUS_RUN_PLAYER);
    this.searchLists.set(CastleHighscoreDialog.SEARCH_ABG_ALLIANCE, p.HighscoreConst.ALLIANCE_BATTLE_GROUND_PREVIOUS_RUN_ALLIANCE);
    this.currentSearchTime = CastleHighscoreDialog.SEARCH_OVERALL;
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.searchField ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_search, new m.LocalizedTextVO("dialog_highscore_search"));
    this.searchField.type = l.TextFieldType.INPUT;
    this.searchField.maxChars = 25;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_playerBG.txt_rank, new m.LocalizedTextVO("rank"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_playerBG.txt_name, new m.LocalizedTextVO("generic_name"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_playerBG.txt_alliance, new m.LocalizedTextVO("panel_multiinfo_alliance"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_playerBG.txt_level, new m.LocalizedTextVO("level")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_allianceBG.txt_rank, new m.LocalizedTextVO("rank"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_allianceBG.txt_name, new m.LocalizedTextVO("generic_name"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_allianceBG.txt_fameLevel, new m.LocalizedTextVO("level"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_allianceBG.txt_membercount, new m.LocalizedTextVO("dialog_alliance_member"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_playerBG_specialServer.txt_rank, new m.LocalizedTextVO("rank"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_playerBG_specialServer.txt_name, new m.LocalizedTextVO("generic_name"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_playerBG_specialServer.txt_alliance, new m.LocalizedTextVO("panel_multiinfo_alliance"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_allianceBG_specialServer.txt_rank, new m.LocalizedTextVO("rank"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_allianceBG_specialServer.txt_name, new m.LocalizedTextVO("generic_name"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_allianceBG_specialServer.txt_fameLevel, new m.LocalizedTextVO("level"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_allianceBG_specialServer.txt_membercount, new m.LocalizedTextVO("dialog_alliance_member"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_specialServer.txt_scoringDate, new m.LocalizedTextVO("scoringDate_colon"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_specialServer.txt_scoringTime, new m.LocalizedTextVO("time_colon"));
    this._defaultSearchText = this.searchField.text;
    this.dialogDisp.mc_playerBG_specialServer.icon_level.toolTipText = "level";
    this.dialogDisp.mc_playerBG_specialServer.icon_legendary_level.toolTipText = "legendLevel";
    R.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_player, this.dialogDisp.btn_alliance, this.dialogDisp.btn_tempserver, this.dialogDisp.btn_abg]);
    this.initBasicButtons([this.dialogDisp.btn_search, this.dialogDisp.btn_ok, this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_weeklyReward, this.dialogDisp.mc_playerBG.btn_categoryLeft, this.dialogDisp.mc_playerBG.btn_categoryRight, this.dialogDisp.mc_allianceBG.btn_categoryLeft, this.dialogDisp.mc_allianceBG.btn_categoryRight, this.dialogDisp.btn_timeLeft, this.dialogDisp.btn_timeRight, this.dialogDisp.btn_search, this.dialogDisp.btn_up, this.dialogDisp.btn_down, this.dialogDisp.btn_toTop, this.dialogDisp.mc_leagueBar.btn_leagueLeft, this.dialogDisp.mc_leagueBar.btn_leagueRight]);
  };
  CastleHighscoreDialog.prototype.changeHighscoreTab = function (e) {
    this.searchName = "";
    this.currentSearchTime = e;
    this.updateTabs();
    s.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_holder);
    this.requestHighscoreData(CastleHighscoreDialog.OWN_RANK);
    this.updateSearchTimeText();
    this.updateSearchCategoryIcon();
    this.updateGlobalServerInfoElements();
  };
  CastleHighscoreDialog.prototype.updateTabs = function () {
    var e = this.currentSearchTime;
    this.dialogDisp.mc_playerBG.visible = e == CastleHighscoreDialog.SEARCH_OVERALL || e == CastleHighscoreDialog.SEARCH_WEEKLY;
    this.dialogDisp.mc_allianceBG.visible = e == CastleHighscoreDialog.SEARCH_ALLIANCE;
    this.dialogDisp.mc_playerBG_specialServer.visible = e == CastleHighscoreDialog.SEARCH_TEMPSERVER_PLAYER || e == CastleHighscoreDialog.SEARCH_ABG_PLAYER;
    this.dialogDisp.mc_allianceBG_specialServer.visible = e == CastleHighscoreDialog.SEARCH_ABG_ALLIANCE;
    this.dialogDisp.mc_specialServer.visible = e == CastleHighscoreDialog.SEARCH_TEMPSERVER_PLAYER || e == CastleHighscoreDialog.SEARCH_ABG_PLAYER || e == CastleHighscoreDialog.SEARCH_ABG_ALLIANCE;
    R.ButtonHelper.setButtonSelected(this.dialogDisp.btn_player, e == CastleHighscoreDialog.SEARCH_OVERALL || e == CastleHighscoreDialog.SEARCH_WEEKLY);
    R.ButtonHelper.setButtonSelected(this.dialogDisp.btn_alliance, e == CastleHighscoreDialog.SEARCH_ALLIANCE);
    R.ButtonHelper.setButtonSelected(this.dialogDisp.btn_tempserver, e == CastleHighscoreDialog.SEARCH_TEMPSERVER_PLAYER);
    R.ButtonHelper.setButtonSelected(this.dialogDisp.btn_abg, e == CastleHighscoreDialog.SEARCH_ABG_PLAYER || e == CastleHighscoreDialog.SEARCH_ABG_ALLIANCE);
    this.dialogDisp.btn_search.toolTipText = e == CastleHighscoreDialog.SEARCH_ALLIANCE || e == CastleHighscoreDialog.SEARCH_ABG_ALLIANCE ? "dialog_highscore_search_alliance" : "dialog_highscore_search_player";
    this.dialogDisp.mc_leagueBar.visible = e == CastleHighscoreDialog.SEARCH_OVERALL;
  };
  CastleHighscoreDialog.prototype.updateSearchTimeText = function () {
    switch (this.currentSearchTime) {
      case CastleHighscoreDialog.SEARCH_OVERALL:
        this.timeSortField.textContentVO.textId = "dialog_highscore_searchOverall";
        this.dialogDisp.mc_playerBG.btn_categoryLeft.visible = true;
        this.dialogDisp.mc_playerBG.btn_categoryRight.visible = true;
        break;
      case CastleHighscoreDialog.SEARCH_WEEKLY:
        this.timeSortField.textContentVO.textId = "dialog_highscore_searchWeekly";
        this.dialogDisp.mc_playerBG.btn_categoryLeft.visible = true;
        this.dialogDisp.mc_playerBG.btn_categoryRight.visible = true;
        break;
      case CastleHighscoreDialog.SEARCH_ALLIANCE:
        this.timeSortField.textContentVO.textId = "dialog_highscore_searchAlliance";
        this.dialogDisp.mc_playerBG.btn_categoryLeft.visible = true;
        this.dialogDisp.mc_playerBG.btn_categoryRight.visible = true;
        break;
      case CastleHighscoreDialog.SEARCH_TEMPSERVER_PLAYER:
      case CastleHighscoreDialog.SEARCH_ABG_PLAYER:
        this.timeSortField.textContentVO.textId = "dialog_ranking_single_title";
        break;
      case CastleHighscoreDialog.SEARCH_ABG_ALLIANCE:
        this.timeSortField.textContentVO.textId = "dialog_ranking_alliance_title";
    }
    this.dialogDisp.mc_playerBG.btn_categoryLeft.visible = this.currentSearchTime != CastleHighscoreDialog.SEARCH_WEEKLY;
    this.dialogDisp.mc_playerBG.btn_categoryRight.visible = this.currentSearchTime != CastleHighscoreDialog.SEARCH_WEEKLY;
    this.dialogDisp.mc_allianceBG.btn_categoryLeft.visible = true;
    this.dialogDisp.mc_allianceBG.btn_categoryRight.visible = true;
    this.dialogDisp.btn_timeLeft.visible = this.currentSearchTime != CastleHighscoreDialog.SEARCH_ALLIANCE && this.currentSearchTime != CastleHighscoreDialog.SEARCH_TEMPSERVER_PLAYER;
    this.dialogDisp.btn_timeRight.visible = this.currentSearchTime != CastleHighscoreDialog.SEARCH_ALLIANCE && this.currentSearchTime != CastleHighscoreDialog.SEARCH_TEMPSERVER_PLAYER;
  };
  CastleHighscoreDialog.prototype.setLeagueTitle = function (e) {
    this.textFieldManager.registerTextField(this.dialogDisp.mc_leagueBar.txt_leagueSort, new m.LocalizedTextVO(e));
  };
  CastleHighscoreDialog.prototype.setLeagueTitleById = function (e) {
    var t = "";
    if (e > 0) {
      t = "dialog_highscore_league" + e;
    }
    this.setLeagueTitle(t);
  };
  CastleHighscoreDialog.prototype.switchLeague = function (e) {
    this.searchName = "";
    if (this._currentSelectedLeague <= 1 && e < 0) {
      this._currentSelectedLeague = 6;
    } else if (this._currentSelectedLeague >= 6 && e > 0) {
      this._currentSelectedLeague = 1;
    } else {
      this._currentSelectedLeague += e;
    }
    this.setLeague(this._currentSelectedLeague);
  };
  CastleHighscoreDialog.prototype.setLeague = function (e) {
    this._currentSelectedLeague = e;
    this.setLeagueTitleById(this._currentSelectedLeague);
    if (this.searchLists.get(this.currentSearchTime) == b.ClientConstCastle.CATEGORY_LEGEND_LEVEL && this._currentSelectedLeague != D.ClientConstHighscore.getLeagueIdByLevel(h.PlayerConst.LEVEL_CAP)) {
      this.searchLists.set(this.currentSearchTime, b.ClientConstCastle.CATEGORY_HONOR);
      this.updateSearchCategoryIcon();
    }
    var t = this._currentSelectedLeague == D.ClientConstHighscore.getLeagueIdByLevel(S.CastleModel.userData.userLevel);
    this.requestHighscoreData(t ? CastleHighscoreDialog.OWN_RANK : "1");
  };
  CastleHighscoreDialog.prototype.setLeagueBarVisibility = function (e) {
    this.dialogDisp.mc_leagueBar.visible = e;
  };
  CastleHighscoreDialog.prototype.updateSearchCategoryIcon = function () {
    this.dialogDisp.btn_weeklyReward.visible = false;
    switch (this.searchLists.get(this.currentSearchTime)) {
      case b.ClientConstCastle.CATEGORY_HONOR:
        this.dialogDisp.mc_playerBG.mc_sortBy.gotoAndStop(2);
        this.dialogDisp.mc_playerBG.mc_sortBy.toolTipText = "honorPoints";
        this.dialogDisp.mc_allianceBG.mc_sortBy.gotoAndStop(2);
        this.dialogDisp.mc_allianceBG.mc_sortBy.toolTipText = "allianceHonor";
        this.dialogDisp.btn_weeklyReward.visible = true;
        break;
      case b.ClientConstCastle.CATEGORY_LOOT:
        this.dialogDisp.mc_playerBG.mc_sortBy.gotoAndStop(3);
        this.dialogDisp.mc_playerBG.mc_sortBy.toolTipText = "dialog_battleLog_loot";
        break;
      case b.ClientConstCastle.CATEGORY_ACHIEVEMENT:
        this.dialogDisp.mc_playerBG.mc_sortBy.gotoAndStop(5);
        this.dialogDisp.mc_playerBG.mc_sortBy.toolTipText = "dialog_playerInfo_infoAchievements";
        break;
      case b.ClientConstCastle.CATEGORY_BUILDING_POINTS:
        this.dialogDisp.mc_playerBG.mc_sortBy.gotoAndStop(4);
        this.dialogDisp.mc_playerBG.mc_sortBy.toolTipText = "playerMight";
        this.dialogDisp.mc_allianceBG.mc_sortBy.gotoAndStop(4);
        this.dialogDisp.mc_allianceBG.mc_sortBy.toolTipText = "allianceMight";
        break;
      case b.ClientConstCastle.CATEGORY_MIGHT:
        this.dialogDisp.mc_allianceBG.mc_sortBy.gotoAndStop(6);
        this.dialogDisp.mc_allianceBG.mc_sortBy.toolTipText = "dominionPoints";
        break;
      case b.ClientConstCastle.CATEGORY_LEGEND_LEVEL:
        this.dialogDisp.mc_playerBG.mc_sortBy.gotoAndStop(6);
        this.dialogDisp.mc_playerBG.mc_sortBy.toolTipText = "legendLevel";
    }
    this.dialogDisp.mc_playerBG.mc_sortBy.mouseChildren = false;
    this.dialogDisp.mc_allianceBG.mc_sortBy.mouseChildren = false;
  };
  CastleHighscoreDialog.prototype.switchTimeSearch = function (e = 0) {
    switch (this.currentSearchTime) {
      case CastleHighscoreDialog.SEARCH_OVERALL:
        this.currentSearchTime = CastleHighscoreDialog.SEARCH_WEEKLY;
        this.searchName = "";
        this.setLeagueBarVisibility(false);
        break;
      case CastleHighscoreDialog.SEARCH_WEEKLY:
        this.currentSearchTime = CastleHighscoreDialog.SEARCH_OVERALL;
        this.searchName = "";
        this.setLeagueBarVisibility(true);
        break;
      case CastleHighscoreDialog.SEARCH_ABG_PLAYER:
        this.currentSearchTime = CastleHighscoreDialog.SEARCH_ABG_ALLIANCE;
        this.searchName = "";
        this.setLeagueBarVisibility(false);
        break;
      case CastleHighscoreDialog.SEARCH_ABG_ALLIANCE:
        this.currentSearchTime = CastleHighscoreDialog.SEARCH_ABG_PLAYER;
        this.searchName = "";
        this.setLeagueBarVisibility(false);
    }
    this.updateTabs();
    this.updateSearchTimeText();
    this.updateSearchCategoryIcon();
  };
  CastleHighscoreDialog.prototype.switchOverallCategory = function (e = 0) {
    if (e < 0) {
      switch (this.searchLists.get(this.currentSearchTime)) {
        case b.ClientConstCastle.CATEGORY_HONOR:
          if (this._currentSelectedLeague == D.ClientConstHighscore.getLeagueIdByLevel(h.PlayerConst.LEVEL_CAP)) {
            this.searchLists.set(this.currentSearchTime, b.ClientConstCastle.CATEGORY_LEGEND_LEVEL);
          } else {
            this.searchLists.set(this.currentSearchTime, b.ClientConstCastle.CATEGORY_BUILDING_POINTS);
          }
          break;
        case b.ClientConstCastle.CATEGORY_BUILDING_POINTS:
          this.searchLists.set(this.currentSearchTime, b.ClientConstCastle.CATEGORY_ACHIEVEMENT);
          break;
        case b.ClientConstCastle.CATEGORY_ACHIEVEMENT:
          this.searchLists.set(this.currentSearchTime, b.ClientConstCastle.CATEGORY_HONOR);
          break;
        case b.ClientConstCastle.CATEGORY_LEGEND_LEVEL:
          this.searchLists.set(this.currentSearchTime, b.ClientConstCastle.CATEGORY_BUILDING_POINTS);
      }
    } else {
      switch (this.searchLists.get(this.currentSearchTime)) {
        case b.ClientConstCastle.CATEGORY_ACHIEVEMENT:
          this.searchLists.set(this.currentSearchTime, b.ClientConstCastle.CATEGORY_BUILDING_POINTS);
          break;
        case b.ClientConstCastle.CATEGORY_BUILDING_POINTS:
          if (this._currentSelectedLeague == D.ClientConstHighscore.getLeagueIdByLevel(h.PlayerConst.LEVEL_CAP)) {
            this.searchLists.set(this.currentSearchTime, b.ClientConstCastle.CATEGORY_LEGEND_LEVEL);
          } else {
            this.searchLists.set(this.currentSearchTime, b.ClientConstCastle.CATEGORY_HONOR);
          }
          break;
        case b.ClientConstCastle.CATEGORY_HONOR:
          this.searchLists.set(this.currentSearchTime, b.ClientConstCastle.CATEGORY_ACHIEVEMENT);
          break;
        case b.ClientConstCastle.CATEGORY_LEGEND_LEVEL:
          this.searchLists.set(this.currentSearchTime, b.ClientConstCastle.CATEGORY_HONOR);
      }
    }
    this.updateSearchCategoryIcon();
  };
  CastleHighscoreDialog.prototype.switchOverallCategoryAlliance = function (e = 0) {
    if (e < 0) {
      switch (this.searchLists.get(this.currentSearchTime)) {
        case b.ClientConstCastle.CATEGORY_BUILDING_POINTS:
          this.searchLists.set(this.currentSearchTime, b.ClientConstCastle.CATEGORY_HONOR);
          break;
        case b.ClientConstCastle.CATEGORY_HONOR:
          this.searchLists.set(this.currentSearchTime, b.ClientConstCastle.CATEGORY_MIGHT);
          break;
        case b.ClientConstCastle.CATEGORY_MIGHT:
          this.searchLists.set(this.currentSearchTime, b.ClientConstCastle.CATEGORY_BUILDING_POINTS);
      }
    } else {
      switch (this.searchLists.get(this.currentSearchTime)) {
        case b.ClientConstCastle.CATEGORY_BUILDING_POINTS:
          this.searchLists.set(this.currentSearchTime, b.ClientConstCastle.CATEGORY_MIGHT);
          break;
        case b.ClientConstCastle.CATEGORY_MIGHT:
          this.searchLists.set(this.currentSearchTime, b.ClientConstCastle.CATEGORY_HONOR);
          break;
        case b.ClientConstCastle.CATEGORY_HONOR:
          this.searchLists.set(this.currentSearchTime, b.ClientConstCastle.CATEGORY_BUILDING_POINTS);
      }
    }
    this.updateSearchCategoryIcon();
  };
  CastleHighscoreDialog.prototype.onGetHighscoreDataError = function (e) {
    this.isWaitingForServerMessage = false;
    this.searchName = "";
  };
  CastleHighscoreDialog.prototype.onGetHighscoreData = function (e) {
    this.isWaitingForServerMessage = false;
    this.setLeagueTitleById(e.leagueId);
    this._currentSelectedLeague = e.leagueId;
    if (e.params.length != 0) {
      s.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_holder);
      var t = y.int(e.params[0].LT);
      if (t && t > 0) {
        this.setSearchListByListType(t);
      }
      var i = y.int(e.params[0].LR);
      var n = e.params[0].L;
      var o = y.int(n.length);
      if (!(o < 1)) {
        this.startRank = y.int(n[0][0]);
        var r = y.int(n[o - 1][0]);
        var l = v.CachedTimer.getCachedTimer();
        var c = false;
        for (var d = 0; d < Math.min(CastleHighscoreDialog.ITEMS_PER_PAGE, o); d++) {
          var p;
          var h = n.shift();
          var C = y.int(h.shift());
          var m = y.int(h.shift());
          if (t == 10 || t == 11 || t == 12) {
            var E = new A.AllianceHighscoreInfoVO();
            E.fillFromParamObject(h.shift());
            switch (C) {
              case 1:
                c = true;
                (p = new Library.CastleInterfaceElements.CastleHighscoreAllianceItemRank1_D()).txt_name.getTextFormat().bold = true;
                break;
              case 2:
                (p = new Library.CastleInterfaceElements.CastleHighscoreAllianceItemRank2_D()).txt_name.getTextFormat().bold = true;
                break;
              case 3:
                (p = new Library.CastleInterfaceElements.CastleHighscoreAllianceItemRank3_D()).txt_name.getTextFormat().bold = true;
                break;
              default:
                p = new Library.CastleInterfaceElements.CastleHighscoreAllianceItem_D();
            }
            if (E.allianceId == S.CastleModel.userData.allianceID) {
              p.gotoAndStop(2);
            } else {
              p.gotoAndStop(1);
            }
            p.mc_search.mouseEnabled = false;
            p.mc_search.visible = this.searchName && this.searchName.toLowerCase() == E.allianceName.toLowerCase() || parseInt(this.searchName) == C;
            if (p.itxt_rank) {
              p.itxt_rank.textContentVO.stringValue = String(C);
            } else {
              p.itxt_rank = this.textFieldManager.registerTextField(p.txt_rank, new f.NumberVO(C), new a.InternalGGSTextFieldConfigVO(true));
            }
            if (p.itxt_name) {
              p.itxt_name.textContentVO.stringValue = String(E.allianceName);
            } else {
              p.itxt_name = this.textFieldManager.registerTextField(p.txt_name, new O.TextVO(String(E.allianceName)), new a.InternalGGSTextFieldConfigVO(true));
              p.itxt_name.autoFitToBounds = true;
            }
            if (p.itxt_fameLevel) {
              p.itxt_fameLevel.textContentVO.stringValue = String(S.CastleModel.allianceFameData.getLevelFromFamePoints(E.allianceCurrentFame));
            } else {
              p.itxt_fameLevel = this.textFieldManager.registerTextField(p.txt_fameLevel, new f.NumberVO(S.CastleModel.allianceFameData.getLevelFromFamePoints(E.allianceCurrentFame)), new a.InternalGGSTextFieldConfigVO(true));
            }
            if (p.itxt_membercount) {
              p.itxt_membercount.textContentVO.stringValue = String(E.memberAmount);
            } else {
              p.itxt_membercount = this.textFieldManager.registerTextField(p.txt_membercount, new f.NumberVO(E.memberAmount), new a.InternalGGSTextFieldConfigVO(true));
            }
            if (p.itxt_amount) {
              p.itxt_amount.textContentVO.numberValue = m;
            } else {
              p.itxt_amount = this.textFieldManager.registerTextField(p.txt_amount, new _.LocalizedNumberVO(m), new a.InternalGGSTextFieldConfigVO(true));
            }
            p.properties = E;
            this.dialogDisp.mc_holder.addChild(p);
            p.y = d * CastleHighscoreDialog.ITEMS_HEIGHT + d * CastleHighscoreDialog.ITEMS_SPACE;
          } else if (t == 77) {
            var b = h.shift();
            b[0];
            var D = b[1];
            var I = b[2];
            var T = b[3];
            switch (C) {
              case 1:
                c = true;
                (p = new Library.CastleInterfaceElements.CastleHighscoreAllianceItemRank1_D()).txt_name.getTextFormat().bold = true;
                break;
              case 2:
                (p = new Library.CastleInterfaceElements.CastleHighscoreAllianceItemRank2_D()).txt_name.getTextFormat().bold = true;
                break;
              case 3:
                (p = new Library.CastleInterfaceElements.CastleHighscoreAllianceItemRank3_D()).txt_name.getTextFormat().bold = true;
                break;
              default:
                p = new Library.CastleInterfaceElements.CastleHighscoreAllianceItem_D();
            }
            p.mc_search.mouseEnabled = false;
            p.mc_search.visible = this.searchName.toLowerCase() == D.toLowerCase() || parseInt(this.searchName) == C;
            p.gotoAndStop(1);
            this.textFieldManager.registerTextField(p.txt_rank, new f.NumberVO(C), new a.InternalGGSTextFieldConfigVO(true));
            this.textFieldManager.registerTextField(p.txt_name, new O.TextVO(D), new a.InternalGGSTextFieldConfigVO(true));
            this.textFieldManager.registerTextField(p.txt_fameLevel, new f.NumberVO(T), new a.InternalGGSTextFieldConfigVO(true));
            this.textFieldManager.registerTextField(p.txt_membercount, new f.NumberVO(I), new a.InternalGGSTextFieldConfigVO(true));
            this.textFieldManager.registerTextField(p.txt_amount, new _.LocalizedNumberVO(m), new a.InternalGGSTextFieldConfigVO(true));
            this.dialogDisp.mc_holder.addChild(p);
            p.y = d * CastleHighscoreDialog.ITEMS_HEIGHT + d * CastleHighscoreDialog.ITEMS_SPACE;
            p.mouseEnabled = false;
          } else if (t == 76 || t == 78) {
            var P = h.shift();
            var M = h.length > 1 ? y.int(h[1]) : C;
            var V = new Y.WorldMapOwnerInfoVO();
            V.fillFromParamObject(P, l);
            switch (M) {
              case 1:
                (p = new (u.getDefinitionByName("CastleHighscorePlayerItemRank1_D"))()).txt_name.getTextFormat().bold = true;
                c = true;
                break;
              case 2:
                (p = new (u.getDefinitionByName("CastleHighscorePlayerItemRank2_D"))()).txt_name.getTextFormat().bold = true;
                break;
              case 3:
                (p = new (u.getDefinitionByName("CastleHighscorePlayerItemRank3_D"))()).txt_name.getTextFormat().bold = true;
                break;
              default:
                p = new (u.getDefinitionByName("CastleHighscorePlayerItem_D"))();
            }
            p.mc_search.mouseEnabled = false;
            p.mc_search.visible = this.searchName.toLowerCase() == V.playerName.toLowerCase() || parseInt(this.searchName) == M;
            p.gotoAndStop(1);
            this.textFieldManager.registerTextField(p.txt_rank, new f.NumberVO(M), new a.InternalGGSTextFieldConfigVO(true));
            this.textFieldManager.registerTextField(p.txt_name, new O.TextVO(V.playerName), new a.InternalGGSTextFieldConfigVO(true));
            this.textFieldManager.registerTextField(p.txt_alliance, new O.TextVO(V.allianceName), new a.InternalGGSTextFieldConfigVO(true));
            this.textFieldManager.registerTextField(p.txt_level, new f.NumberVO(V.playerLevel), new a.InternalGGSTextFieldConfigVO(true));
            this.textFieldManager.registerTextField(p.txt_amount, new _.LocalizedNumberVO(m), new a.InternalGGSTextFieldConfigVO(true));
            if (V.playerLegendLevel > 0) {
              this.textFieldManager.registerTextField(p.txt_distance, new _.LocalizedNumberVO(V.playerLegendLevel), new a.InternalGGSTextFieldConfigVO(true));
            } else {
              this.textFieldManager.registerTextField(p.txt_distance, new O.TextVO("-"), new a.InternalGGSTextFieldConfigVO(true));
            }
            this.dialogDisp.mc_holder.addChild(p);
            p.y = d * CastleHighscoreDialog.ITEMS_HEIGHT + d * CastleHighscoreDialog.ITEMS_SPACE;
            p.mouseEnabled = false;
          } else {
            var x = S.CastleModel.otherPlayerData.parseOwnerInfo(h.shift(), l);
            switch (C) {
              case 1:
                (p = new (u.getDefinitionByName("CastleHighscorePlayerItemRank1_D"))()).txt_name.getTextFormat().bold = true;
                c = true;
                break;
              case 2:
                (p = new (u.getDefinitionByName("CastleHighscorePlayerItemRank2_D"))()).txt_name.getTextFormat().bold = true;
                break;
              case 3:
                (p = new (u.getDefinitionByName("CastleHighscorePlayerItemRank3_D"))()).txt_name.getTextFormat().bold = true;
                break;
              default:
                p = new (u.getDefinitionByName("CastleHighscorePlayerItem_D"))();
            }
            if (x.isOwnOwnerInfo) {
              p.gotoAndStop(2);
            } else {
              p.gotoAndStop(1);
            }
            p.mc_search.mouseEnabled = false;
            p.mc_search.visible = this.searchName.toLowerCase() == x.playerName.toLowerCase() || parseInt(this.searchName) == C || this.searchName.toLowerCase() == x.playerName.toLowerCase();
            if (p.itxt_rank) {
              p.itxt_rank.textContentVO.stringValue = String(C);
            } else {
              p.itxt_rank = this.textFieldManager.registerTextField(p.txt_rank, new f.NumberVO(C), new a.InternalGGSTextFieldConfigVO(true));
            }
            if (p.itxt_name) {
              p.itxt_name.textContentVO.stringValue = String(x.playerName);
            } else {
              p.itxt_name = this.textFieldManager.registerTextField(p.txt_name, new O.TextVO(String(x.playerName)), new a.InternalGGSTextFieldConfigVO(true));
              p.itxt_name.autoFitToBounds = true;
            }
            if (p.itxt_alliance) {
              p.itxt_name.textContentVO.stringValue = String(x.allianceName);
            } else {
              p.itxt_alliance = this.textFieldManager.registerTextField(p.txt_alliance, new O.TextVO(String(x.allianceName)), new a.InternalGGSTextFieldConfigVO(true));
              p.itxt_alliance.autoFitToBounds = true;
            }
            if (p.itxt_level) {
              p.itxt_fameLevel.textContentVO.stringValue = String(x.playerLevel);
            } else {
              p.itxt_level = this.textFieldManager.registerTextField(p.txt_level, new f.NumberVO(x.playerLevel), new a.InternalGGSTextFieldConfigVO(true));
            }
            if (p.itxt_amount) {
              p.itxt_amount.textContentVO.numberValue = m;
            } else {
              p.itxt_amount = this.textFieldManager.registerTextField(p.txt_amount, new _.LocalizedNumberVO(m), new a.InternalGGSTextFieldConfigVO(true));
            }
            var w = S.CastleModel.userData.castleList.getMainCastleByKingdomID(g.WorldClassic.KINGDOM_ID);
            var B = x.getMainCastlePositionByKingdomID(g.WorldClassic.KINGDOM_ID);
            var F = 0;
            F = w && B ? Math.round(L.MapHelper.getShortestDistance(B, new N(w.absAreaPosX, w.absAreaPosY))) : 0;
            if (p.itxt_distance) {
              p.itxt_distance.textContentVO.numberValue = F == 0 ? "" : F;
            } else {
              p.itxt_distance = this.textFieldManager.registerTextField(p.txt_distance, new f.NumberVO(F == 0 ? "" : F), new a.InternalGGSTextFieldConfigVO(true));
            }
            p.properties = x;
            this.dialogDisp.mc_holder.addChild(p);
            p.y = d * CastleHighscoreDialog.ITEMS_HEIGHT + d * CastleHighscoreDialog.ITEMS_SPACE;
          }
          p.mouseChildren = false;
        }
        R.ButtonHelper.enableButton(this.dialogDisp.btn_toTop, !c);
        R.ButtonHelper.enableButton(this.dialogDisp.btn_up, !c);
        R.ButtonHelper.enableButton(this.dialogDisp.btn_down, r != i);
        var k = this.dialogDisp.stage;
        k._mouseOverX = 0;
        k._testMouseOver();
      }
    }
  };
  CastleHighscoreDialog.prototype.onCursorOver = function (t) {
    e.prototype.onCursorOver.call(this, t);
    if (d.instanceOfClass(t.target, "CastleHighscorePlayerItem_D") || d.instanceOfClass(t.target, "CastleHighscorePlayerItemRank1_D") || d.instanceOfClass(t.target, "CastleHighscorePlayerItemRank2_D") || d.instanceOfClass(t.target, "CastleHighscorePlayerItemRank3_D") || d.instanceOfClass(t.target, "CastleHighscoreAllianceItem_D") || d.instanceOfClass(t.target, "CastleHighscoreAllianceItemRank1_D") || d.instanceOfClass(t.target, "CastleHighscoreAllianceItemRank2_D") || d.instanceOfClass(t.target, "CastleHighscoreAllianceItemRank3_D")) {
      this.layoutManager.customCursor.setCursorType(o.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  CastleHighscoreDialog.prototype.inputKeyDown = function (e) {
    if (e.key == r.Keyboard.ENTER) {
      this.onOKButton();
    }
  };
  CastleHighscoreDialog.prototype.onOKButton = function () {
    if (this.searchField.text != "" && this.searchField.text != this._defaultSearchText) {
      document.activeElement.blur();
      this.searchName = this.searchField.text.trim();
      this.requestHighscoreData(this.searchName);
    }
  };
  CastleHighscoreDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (d.instanceOfClass(t.target, "CastleHighscorePlayerItem_D") || d.instanceOfClass(t.target, "CastleHighscorePlayerItemRank1_D") || d.instanceOfClass(t.target, "CastleHighscorePlayerItemRank2_D") || d.instanceOfClass(t.target, "CastleHighscorePlayerItemRank3_D")) {
      U.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(W.CastlePlayerInfoDialog, new B.CastlePlayerInfoDialogProperties(t.target.properties.playerID), P.CastleDialogConsts.DIALOG_TYPE_SINGLE);
    }
    if (d.instanceOfClass(t.target, "CastleHighscoreAllianceItem_D") || d.instanceOfClass(t.target, "CastleHighscoreAllianceItemRank1_D") || d.instanceOfClass(t.target, "CastleHighscoreAllianceItemRank2_D") || d.instanceOfClass(t.target, "CastleHighscoreAllianceItemRank3_D")) {
      if (t.target.properties.allianceId == S.CastleModel.userData.allianceID) {
        U.CastleDialogHandler.getInstance().registerDefaultDialogs(H.CastleAllianceDialog, new x.CastleAllianceDialogProperties());
      } else {
        U.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(G.CastleAllianceInfoDialog, new V.CastleAllianceInfoDialogProperties(t.target.properties.allianceId), P.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      }
    }
    if (R.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_player:
          this.changeHighscoreTab(CastleHighscoreDialog.SEARCH_OVERALL);
          break;
        case this.dialogDisp.btn_alliance:
          this.changeHighscoreTab(CastleHighscoreDialog.SEARCH_ALLIANCE);
          break;
        case this.dialogDisp.btn_tempserver:
          this.changeHighscoreTab(CastleHighscoreDialog.SEARCH_TEMPSERVER_PLAYER);
          break;
        case this.dialogDisp.btn_abg:
          this.changeHighscoreTab(CastleHighscoreDialog.SEARCH_ABG_PLAYER);
          break;
        case this.dialogDisp.btn_search:
          this.onOKButton();
          break;
        case this.dialogDisp.btn_ok:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          if (this.currentSearchTime == CastleHighscoreDialog.SEARCH_TEMPSERVER_PLAYER) {
            U.CastleDialogHandler.getInstance().showHelper("", C.Localize.text("help_rankingGlobal_tempServer"));
          } else if (this.currentSearchTime == CastleHighscoreDialog.SEARCH_ABG_PLAYER || this.currentSearchTime == CastleHighscoreDialog.SEARCH_ABG_ALLIANCE) {
            U.CastleDialogHandler.getInstance().showHelper("", C.Localize.text("help_rankingGlobal_beyondTheHorizon"));
          } else {
            U.CastleDialogHandler.getInstance().showHelper("", C.Localize.text("help_highscore"));
          }
          break;
        case this.dialogDisp.btn_weeklyReward:
          U.CastleDialogHandler.getInstance().registerDefaultDialogs(j.CastleWeeklyHighscoreRewardDialog);
      }
      if (!this.isWaitingForServerMessage) {
        switch (t.target) {
          case this.dialogDisp.mc_playerBG.btn_categoryLeft:
            this.switchOverallCategory(-1);
            this.requestHighscoreData(this.getRequestValueOnChangeCategory());
            break;
          case this.dialogDisp.mc_playerBG.btn_categoryRight:
            this.switchOverallCategory(1);
            this.requestHighscoreData(this.getRequestValueOnChangeCategory());
            break;
          case this.dialogDisp.mc_allianceBG.btn_categoryLeft:
            this.switchOverallCategoryAlliance(1);
            this.requestHighscoreData(this.getRequestValueOnChangeCategory());
            break;
          case this.dialogDisp.mc_allianceBG.btn_categoryRight:
            this.switchOverallCategoryAlliance(-1);
            this.requestHighscoreData(this.getRequestValueOnChangeCategory());
            break;
          case this.dialogDisp.btn_timeLeft:
            this.switchTimeSearch(-1);
            this.requestHighscoreData(CastleHighscoreDialog.OWN_RANK);
            break;
          case this.dialogDisp.btn_timeRight:
            this.switchTimeSearch(1);
            this.requestHighscoreData(CastleHighscoreDialog.OWN_RANK);
            break;
          case this.dialogDisp.btn_search:
            if (this.searchField.text != "" && this.searchField.text != this._defaultSearchText) {
              this.searchName = this.searchField.text;
              this.requestHighscoreData(this.searchName);
            }
            break;
          case this.dialogDisp.btn_up:
            this.scrollUp();
            break;
          case this.dialogDisp.btn_down:
            this.scrollDown();
            break;
          case this.dialogDisp.btn_toTop:
            this.scrollToTop();
            break;
          case this.dialogDisp.mc_leagueBar.btn_leagueLeft:
            this.switchLeague(-1);
            break;
          case this.dialogDisp.mc_leagueBar.btn_leagueRight:
            this.switchLeague(1);
        }
      }
    }
  };
  CastleHighscoreDialog.prototype.getRequestValueOnChangeCategory = function () {
    var e = this._currentSelectedLeague == D.ClientConstHighscore.getLeagueIdByLevel(S.CastleModel.userData.userLevel);
    if (this.searchName == "") {
      if (e) {
        return CastleHighscoreDialog.OWN_RANK;
      } else {
        return CastleHighscoreDialog.ON_CHANGE_CATEGORY;
      }
    } else {
      return this.searchName;
    }
  };
  CastleHighscoreDialog.prototype.scrollUp = function () {
    if (!this.isWaitingForServerMessage) {
      if (this.startRank > 1) {
        this.requestHighscoreData(Math.max(this.startRank - 1 - CastleHighscoreDialog.ITEMS_PER_PAGE / 2, 1).toString());
      }
    }
  };
  CastleHighscoreDialog.prototype.scrollDown = function () {
    if (!this.isWaitingForServerMessage) {
      this.requestHighscoreData((this.startRank - 1 + CastleHighscoreDialog.ITEMS_PER_PAGE + CastleHighscoreDialog.ITEMS_PER_PAGE / 2).toString());
    }
  };
  CastleHighscoreDialog.prototype.scrollToTop = function () {
    if (!this.isWaitingForServerMessage) {
      this.requestHighscoreData("1");
    }
  };
  CastleHighscoreDialog.prototype.onMouseWheel = function (e) {
    if (e.delta < 0) {
      this.scrollUp();
    } else if (e.delta > 0) {
      this.scrollDown();
    }
  };
  CastleHighscoreDialog.prototype.onFocusInSearchText = function (e) {
    if (this.searchField.text == this._defaultSearchText) {
      this.searchField.clearText();
    }
  };
  CastleHighscoreDialog.prototype.onFocusOutSearchText = function (e) {
    if (this.searchField.text == "") {
      this.searchField.textContentVO = new m.LocalizedTextVO("dialog_highscore_search");
      this.searchName = "";
    }
  };
  CastleHighscoreDialog.prototype.requestHighscoreData = function (e) {
    this.isWaitingForServerMessage = true;
    S.CastleModel.smartfoxClient.sendCommandVO(new I.C2SGetHighscoreVO(e, this.currentListType(), this._currentSelectedLeague));
  };
  CastleHighscoreDialog.prototype.currentListType = function () {
    if (this.searchLists.get(this.currentSearchTime) == b.ClientConstCastle.CATEGORY_HONOR && this.currentSearchTime == CastleHighscoreDialog.SEARCH_OVERALL) {
      return y.int(p.HighscoreConst.PLAYER_HONOR);
    } else if (this.searchLists.get(this.currentSearchTime) == b.ClientConstCastle.CATEGORY_ACHIEVEMENT && this.currentSearchTime == CastleHighscoreDialog.SEARCH_OVERALL) {
      return y.int(p.HighscoreConst.PLAYER_ACHIEVEMENT_POINTS);
    } else if (this.searchLists.get(this.currentSearchTime) == b.ClientConstCastle.CATEGORY_LOOT && this.currentSearchTime == CastleHighscoreDialog.SEARCH_WEEKLY) {
      return y.int(p.HighscoreConst.PLAYER_WEEKLY_LOOT);
    } else if (this.searchLists.get(this.currentSearchTime) == b.ClientConstCastle.CATEGORY_BUILDING_POINTS && this.currentSearchTime == CastleHighscoreDialog.SEARCH_OVERALL) {
      return y.int(p.HighscoreConst.PLAYER_BUILDINGS);
    } else if (this.searchLists.get(this.currentSearchTime) == b.ClientConstCastle.CATEGORY_LEGEND_LEVEL && this.currentSearchTime == CastleHighscoreDialog.SEARCH_OVERALL) {
      return y.int(p.HighscoreConst.PLAYER_LEGEND);
    } else if (this.searchLists.get(this.currentSearchTime) == b.ClientConstCastle.CATEGORY_BUILDING_POINTS && this.currentSearchTime == CastleHighscoreDialog.SEARCH_ALLIANCE) {
      return y.int(p.HighscoreConst.ALLIANCE_BUILDINGS);
    } else if (this.searchLists.get(this.currentSearchTime) == b.ClientConstCastle.CATEGORY_HONOR && this.currentSearchTime == CastleHighscoreDialog.SEARCH_ALLIANCE) {
      return y.int(p.HighscoreConst.ALLIANCE_HONOR);
    } else if (this.searchLists.get(this.currentSearchTime) == b.ClientConstCastle.CATEGORY_MIGHT && this.currentSearchTime == CastleHighscoreDialog.SEARCH_ALLIANCE) {
      return y.int(p.HighscoreConst.ALLIANCE_LANDMARKS);
    } else {
      return this.searchLists.get(this.currentSearchTime);
    }
  };
  CastleHighscoreDialog.prototype.setSearchListByListType = function (e) {
    switch (e) {
      case p.HighscoreConst.PLAYER_HONOR:
        this.currentSearchTime = CastleHighscoreDialog.SEARCH_OVERALL;
        this.searchLists.set(this.currentSearchTime, b.ClientConstCastle.CATEGORY_HONOR);
        break;
      case p.HighscoreConst.PLAYER_ACHIEVEMENT_POINTS:
        this.currentSearchTime = CastleHighscoreDialog.SEARCH_OVERALL;
        this.searchLists.set(this.currentSearchTime, b.ClientConstCastle.CATEGORY_ACHIEVEMENT);
        break;
      case p.HighscoreConst.PLAYER_WEEKLY_LOOT:
        this.currentSearchTime = CastleHighscoreDialog.SEARCH_WEEKLY;
        this.searchLists.set(this.currentSearchTime, b.ClientConstCastle.CATEGORY_LOOT);
        break;
      case p.HighscoreConst.PLAYER_BUILDINGS:
        this.currentSearchTime = CastleHighscoreDialog.SEARCH_OVERALL;
        this.searchLists.set(this.currentSearchTime, b.ClientConstCastle.CATEGORY_BUILDING_POINTS);
        break;
      case p.HighscoreConst.PLAYER_LEGEND:
        this.currentSearchTime = CastleHighscoreDialog.SEARCH_OVERALL;
        this.searchLists.set(this.currentSearchTime, b.ClientConstCastle.CATEGORY_LEGEND_LEVEL);
        break;
      case p.HighscoreConst.ALLIANCE_BUILDINGS:
        this.currentSearchTime = CastleHighscoreDialog.SEARCH_ALLIANCE;
        this.searchLists.set(this.currentSearchTime, b.ClientConstCastle.CATEGORY_BUILDING_POINTS);
        break;
      case p.HighscoreConst.ALLIANCE_HONOR:
        this.currentSearchTime = CastleHighscoreDialog.SEARCH_ALLIANCE;
        this.searchLists.set(this.currentSearchTime, b.ClientConstCastle.CATEGORY_HONOR);
        break;
      case p.HighscoreConst.ALLIANCE_LANDMARKS:
        this.currentSearchTime = CastleHighscoreDialog.SEARCH_ALLIANCE;
        this.searchLists.set(this.currentSearchTime, b.ClientConstCastle.CATEGORY_MIGHT);
    }
    this.updateSearchCategoryIcon();
  };
  CastleHighscoreDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.dialogDisp.mc_playerBG.icon_distance.toolTipText = "distance";
    this.timeSortField = this.textFieldManager.registerTextField(this.dialogDisp.txt_timeSort, new m.LocalizedTextVO("dialog_highscore_searchOverall"));
    this.dialogDisp.btn_search.toolTipText = "dialog_highscore_search_player";
    this.dialogDisp.btn_player.toolTipText = "dialog_highscore_searchOverall";
    this.dialogDisp.btn_alliance.toolTipText = "dialog_highscore_searchAlliance";
    this.dialogDisp.btn_tempserver.toolTipText = "dialog_highscore_finalTempServer_tooltip";
    this.dialogDisp.btn_abg.toolTipText = "dialog_highscore_finalBeyondTheHorizon_tooltip";
    this.dialogDisp.btn_weeklyReward.toolTipText = "dialog_rankreward_title";
    this.updateSearchTimeText();
    this.updateSearchCategoryIcon();
    this.searchLists.set(CastleHighscoreDialog.SEARCH_OVERALL, b.ClientConstCastle.CATEGORY_BUILDING_POINTS);
    S.CastleModel.highscoreData.addEventListener(T.CastleHighscoreEvent.GET_HIGHSCORE_DATA, this.bindFunction(this.onGetHighscoreData));
    S.CastleModel.highscoreData.addEventListener(T.CastleHighscoreEvent.GET_HIGHSCORE_DATA_ERROR, this.bindFunction(this.onGetHighscoreDataError));
    this.searchField.keyDown.add(this.bindFunction(this.inputKeyDown));
    this.searchField.focusIn.add(this.bindFunction(this.onFocusInSearchText));
    this.searchField.focusOut.add(this.bindFunction(this.onFocusOutSearchText));
    this.searchField = this.textFieldManager.registerTextField(this.dialogDisp.txt_search, new m.LocalizedTextVO("dialog_highscore_search"));
    this.dialogDisp.addEventListener(F.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    this.searchName = "";
    this.changeHighscoreTab(this.highscoreProperties.startTimeSpan);
    new M.CastleFullScreenInputBlocker(this.dialogDisp.mc_block);
    this._currentSelectedLeague = y.int(D.ClientConstHighscore.getLeagueIdByLevel(S.CastleModel.userData.userLevel));
    this.setLeagueTitleById(this._currentSelectedLeague);
    this.getGlobalServerInfo();
    this.dialogDisp.btn_tempserver.visible = !$.SpecialServerHelper.isOnSpecialServer;
    this.dialogDisp.btn_abg.visible = !$.SpecialServerHelper.isOnSpecialServer;
  };
  CastleHighscoreDialog.prototype.hideLoaded = function (t = null) {
    this.searchField.keyDown.remove(this.bindFunction(this.inputKeyDown));
    this.searchField.focusIn.remove(this.bindFunction(this.onFocusInSearchText));
    this.searchField.focusOut.remove(this.bindFunction(this.onFocusOutSearchText));
    this.dialogDisp.removeEventListener(F.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    S.CastleModel.highscoreData.removeEventListener(T.CastleHighscoreEvent.GET_HIGHSCORE_DATA, this.bindFunction(this.onGetHighscoreData));
    S.CastleModel.highscoreData.removeEventListener(T.CastleHighscoreEvent.GET_HIGHSCORE_DATA_ERROR, this.bindFunction(this.onGetHighscoreDataError));
    this.controller.removeEventListener(K.GlobalServerPreviousRunInfoEvent.GLOBAL_SERVER_PREVIOUS_RUN_INFO_RECEIVED, this.bindFunction(this.onGlobalServerInfoReceived));
    e.prototype.hideLoaded.call(this, t);
  };
  Object.defineProperty(CastleHighscoreDialog.prototype, "highscoreProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleHighscoreDialog.prototype.getGlobalServerInfo = function () {
    S.CastleModel.smartfoxClient.sendCommandVO(new z.C2SGlobalServerPreviousRunInfoVO());
    this.controller.addEventListener(K.GlobalServerPreviousRunInfoEvent.GLOBAL_SERVER_PREVIOUS_RUN_INFO_RECEIVED, this.bindFunction(this.onGlobalServerInfoReceived));
  };
  CastleHighscoreDialog.prototype.onGlobalServerInfoReceived = function (e) {
    this.globalServerInfo = e.globalServerInfo;
    this.updateGlobalServerInfoElements();
  };
  CastleHighscoreDialog.prototype.updateGlobalServerInfoElements = function () {
    var e = new J.CollectableRenderOptions(J.CollectableRenderOptions.SET_ICON, new N(40, 30));
    e.tooltip.useAmount = false;
    if (this.currentSearchTime == CastleHighscoreDialog.SEARCH_ABG_PLAYER || this.currentSearchTime == CastleHighscoreDialog.SEARCH_ABG_ALLIANCE) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_specialServer.txt_title, new O.TextVO(q.TextHelper.toUpperCaseLocaSafeTextId("event_title_113")));
      s.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_playerBG_specialServer.mc_pointsIcon);
      s.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_playerBG_specialServer.mc_pointsIcon);
      if (this.globalServerInfo && this.globalServerInfo.abgServerSettingVO) {
        this.textFieldManager.registerTextField(this.dialogDisp.mc_specialServer.txt_scoring, new m.LocalizedTextVO("dialog_beyondTheHorizon_introduction_section1_title_" + this.globalServerInfo.abgServerSettingVO.scoringSystemVO.scoring));
        this.textFieldManager.registerTextField(this.dialogDisp.mc_specialServer.txt_scoringDate_val, new O.TextVO(C.Localize.datetime(this.globalServerInfo.abgServerTimeStamp, E.DateTimeStyle.SHORT, E.DateTimeStyle.NONE)));
        this.textFieldManager.registerTextField(this.dialogDisp.mc_specialServer.txt_scoringTime_val, new O.TextVO(C.Localize.datetime(this.globalServerInfo.abgServerTimeStamp, E.DateTimeStyle.NONE, E.DateTimeStyle.SHORT)));
        s.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_playerBG_specialServer.mc_pointsIcon);
        var t = new X.CollectableItemGenericCurrencyVO(this.globalServerInfo.abgServerSettingVO.currencyID);
        if (t.id > 0) {
          Q.CollectableRenderHelper.displaySingleItem(new Z.CollectableRenderClips().addIconMc(this.dialogDisp.mc_playerBG_specialServer.mc_pointsIcon), t, e);
        }
        s.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_allianceBG_specialServer.mc_pointsIcon);
        var i = new X.CollectableItemGenericCurrencyVO(this.globalServerInfo.abgServerSettingVO.allianceCurrencyID);
        if (i.id > 0) {
          Q.CollectableRenderHelper.displaySingleItem(new Z.CollectableRenderClips().addIconMc(this.dialogDisp.mc_allianceBG_specialServer.mc_pointsIcon), i, e);
        }
      } else {
        this.textFieldManager.registerTextField(this.dialogDisp.mc_specialServer.txt_scoring, new O.TextVO("-"));
        this.textFieldManager.registerTextField(this.dialogDisp.mc_specialServer.txt_scoringDate_val, new O.TextVO("-"));
        this.textFieldManager.registerTextField(this.dialogDisp.mc_specialServer.txt_scoringTime_val, new O.TextVO("-"));
      }
    } else if (this.currentSearchTime == CastleHighscoreDialog.SEARCH_TEMPSERVER_PLAYER) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_specialServer.txt_title, new O.TextVO(q.TextHelper.toUpperCaseLocaSafeTextId("temp_server_name")));
      s.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_playerBG_specialServer.mc_pointsIcon);
      if (this.globalServerInfo && this.globalServerInfo.tempServerSettingVO) {
        this.textFieldManager.registerTextField(this.dialogDisp.mc_specialServer.txt_scoring, new m.LocalizedTextVO("dialog_tempServer_scoring_header_" + this.globalServerInfo.tempServerSettingVO.scoringSystem));
        this.textFieldManager.registerTextField(this.dialogDisp.mc_specialServer.txt_scoringDate_val, new O.TextVO(C.Localize.datetime(this.globalServerInfo.tempServerTimeStamp, E.DateTimeStyle.SHORT, E.DateTimeStyle.NONE)));
        this.textFieldManager.registerTextField(this.dialogDisp.mc_specialServer.txt_scoringTime_val, new O.TextVO(C.Localize.datetime(this.globalServerInfo.tempServerTimeStamp, E.DateTimeStyle.NONE, E.DateTimeStyle.SHORT)));
        var n = new (u.getDefinitionByName("CastleHighscore_Tempserver_PointsIcon"))();
        this.dialogDisp.mc_playerBG_specialServer.mc_pointsIcon.toolTipText = "dialog_tempServer_rankingPoints_tooltip";
        this.dialogDisp.mc_playerBG_specialServer.mc_pointsIcon.mouseChildren = false;
        this.dialogDisp.mc_playerBG_specialServer.mc_pointsIcon.addChild(n);
      } else {
        this.textFieldManager.registerTextField(this.dialogDisp.mc_specialServer.txt_scoring, new O.TextVO("-"));
        this.textFieldManager.registerTextField(this.dialogDisp.mc_specialServer.txt_scoringDate_val, new O.TextVO("-"));
        this.textFieldManager.registerTextField(this.dialogDisp.mc_specialServer.txt_scoringTime_val, new O.TextVO("-"));
      }
    }
  };
  CastleHighscoreDialog.NAME = "CastleHighscoreEx_T";
  CastleHighscoreDialog.OWN_RANK = "-1";
  CastleHighscoreDialog.ON_CHANGE_CATEGORY = "1";
  CastleHighscoreDialog.ITEMS_PER_PAGE = 10;
  CastleHighscoreDialog.ITEMS_HEIGHT = 22;
  CastleHighscoreDialog.ITEMS_SPACE = 5;
  CastleHighscoreDialog.SEARCH_OVERALL = "overAll";
  CastleHighscoreDialog.SEARCH_WEEKLY = "weekly";
  CastleHighscoreDialog.SEARCH_ALLIANCE = "alliance";
  CastleHighscoreDialog.SEARCH_TEMPSERVER_PLAYER = "tempserver_player";
  CastleHighscoreDialog.SEARCH_ABG_PLAYER = "abg_player";
  CastleHighscoreDialog.SEARCH_ABG_ALLIANCE = "abg_alliance";
  return CastleHighscoreDialog;
}(w.CastleExternalDialog);
exports.CastleHighscoreDialog = k;
var U = require("./9.js");
var G = require("./132.js");
var H = require("./125.js");
var j = require("./1384.js");
var W = require("./94.js");
var Y = require("./316.js");
var K = require("./1385.js");
var z = require("./2466.js");
var q = require("./13.js");
var X = require("./155.js");
var Q = require("./25.js");
var J = require("./19.js");
var Z = require("./31.js");
var $ = require("./44.js");
c.classImplementsInterfaces(k, "ICollectableRendererList");