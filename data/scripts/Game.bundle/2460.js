Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./6.js");
var g = require("./18.js");
var C = require("./53.js");
var _ = require("./4.js");
var m = require("./35.js");
var f = require("./2461.js");
var O = require("./43.js");
var E = require("./737.js");
var y = require("./738.js");
var b = require("./8.js");
var D = require("./34.js");
var I = require("./744.js");
var T = require("./93.js");
var v = require("./946.js");
var S = require("./947.js");
var A = require("./1382.js");
var L = require("./2462.js");
var P = function (e) {
  function CastleAllianceDialogMemberlist(t) {
    var i = this;
    i._tableSorter = new y.CastleTableSorter();
    i._legendXPShown = false;
    i._honorShown = false;
    i._coinShown = true;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).textFieldManager.registerTextField(i.subLayerDisp.txt_member, new p.LocalizedTextVO("dialog_alliance_member"));
    i.textFieldManager.registerTextField(i.subLayerDisp.txt_rank, new p.LocalizedTextVO("rank"));
    i.textFieldManager.registerTextField(i.subLayerDisp.txt_playerName, new p.LocalizedTextVO("generic_name"));
    i.itxt_honorOverall = i.textFieldManager.registerTextField(i.subLayerDisp.txt_honorOverall, new d.LocalizedNumberVO(0));
    i.itxt_memberAmount = i.textFieldManager.registerTextField(i.subLayerDisp.txt_memberAmount, new p.LocalizedTextVO(s.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0]));
    i.itxt_label = i.textFieldManager.registerTextField(i.subLayerDisp.btn_searchMember.mc_counter.txt_label, new c.TextVO(""));
    if (i._legendXPShown) {
      i.subLayerDisp.icon_xp.gotoAndStop(2);
      i.subLayerDisp.icon_xp.toolTipText = "legendlevel";
    } else {
      i.subLayerDisp.icon_xp.gotoAndStop(1);
      i.subLayerDisp.icon_xp.toolTipText = "level";
    }
    if (i._honorShown) {
      i.subLayerDisp.icon_honor.gotoAndStop(1);
      i.subLayerDisp.icon_honor.toolTipText = "honor";
    } else {
      i.subLayerDisp.icon_honor.gotoAndStop(2);
      i.subLayerDisp.icon_honor.toolTipText = "playerMight";
    }
    if (i._coinShown) {
      i.subLayerDisp.icon_coin_res.gotoAndStop(1);
      i.subLayerDisp.icon_coin_res.toolTipText = "dialog_alliance_donatedC1";
    } else {
      i.subLayerDisp.icon_coin_res.gotoAndStop(2);
      i.subLayerDisp.icon_coin_res.toolTipText = "dialog_alliance_donatedRes";
    }
    i.subLayerDisp.icon_fame.toolTipText = "dialog_dailyglory_tooltip";
    i.subLayerDisp.icon_activity.toolTipText = "dialog_alliance_loginActivity";
    i.subLayerDisp.icon_doantedc2.toolTipText = "dialog_alliance_donatedC2";
    i.subLayerDisp.btn_allianceHighscore.toolTipText = "dialog_highscore_searchAlliance";
    i.subLayerDisp.mc_allianceMight.toolTipText = "allianceMight";
    i.subLayerDisp.icon_distance.toolTipText = "distance";
    i.subLayerDisp.btn_searchMember.toolTipText = "dialog_alliance_getNewMember";
    i.subLayerDisp.btn_landmarks.toolTipText = "dialog_landmarkList_Header";
    b.ButtonHelper.initBasicButtons([i.subLayerDisp.btn_allianceHighscore, i.subLayerDisp.btn_increaseMember, i.subLayerDisp.btn_searchMember, i.subLayerDisp.btn_landmarks, i.subLayerDisp.btn_up, i.subLayerDisp.btn_down, i.subLayerDisp.btn_slider, i.subLayerDisp.btn_left_level, i.subLayerDisp.btn_right_level, i.subLayerDisp.btn_left_honor, i.subLayerDisp.btn_right_honor, i.subLayerDisp.btn_sort_rank, i.subLayerDisp.btn_sort_name, i.subLayerDisp.btn_sort_level, i.subLayerDisp.btn_sort_distance, i.subLayerDisp.btn_sort_honor, i.subLayerDisp.btn_sort_donated_ruby, i.subLayerDisp.btn_sort_donated_coin_res, i.subLayerDisp.btn_left_coin_res, i.subLayerDisp.btn_right_coin_res, i.subLayerDisp.btn_sort_fame, i.subLayerDisp.btn_sort_activity]);
    return i;
  }
  n.__extends(CastleAllianceDialogMemberlist, e);
  CastleAllianceDialogMemberlist.prototype.calculateTotalMightPoints = function () {
    var e = 0;
    for (var t = 0, i = this.allianceInfoVO.memberList; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        e += n.might;
      }
    }
    return e;
  };
  CastleAllianceDialogMemberlist.prototype.updateLists = function () {
    this._tableSorter.init(this._itemScrollList.voList, this.bindFunction(this.onMemberListSortingChanged), this.createSorters());
    this._tableSorter.show();
  };
  CastleAllianceDialogMemberlist.prototype.onMemberListSortingChanged = function (e) {
    this.resetAllTriangles();
    e.sortingTrigger.gotoAndStop(e.isInAscendingOrder ? 2 : 1);
    this._itemScrollList.initList();
  };
  CastleAllianceDialogMemberlist.prototype.resetAllTriangles = function () {
    if (this._sorters != null) {
      for (var e = 0, t = this._sorters; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.sortingTrigger.gotoAndStop(1);
        }
      }
    }
  };
  CastleAllianceDialogMemberlist.prototype.createSorters = function () {
    this._sorters = [];
    this._sorters.push(new E.CastleColumnSortingVO(this.subLayerDisp.btn_sort_rank, v.AllianceMemberScrollItemComparer.comparePrimaryRank));
    this._sorters.push(new E.CastleColumnSortingVO(this.subLayerDisp.btn_sort_name, v.AllianceMemberScrollItemComparer.comparePrimaryName));
    this._sorters.push(new E.CastleColumnSortingVO(this.subLayerDisp.btn_sort_level, this.bindFunction(this.handleXPSorting)));
    this._sorters.push(new E.CastleColumnSortingVO(this.subLayerDisp.btn_sort_distance, v.AllianceMemberScrollItemComparer.comparePrimaryDistance));
    this._sorters.push(new E.CastleColumnSortingVO(this.subLayerDisp.btn_sort_honor, this.bindFunction(this.handleHonorMightSorting)));
    this._sorters.push(new E.CastleColumnSortingVO(this.subLayerDisp.btn_sort_donated_ruby, this.bindFunction(this.handleRubySorting)));
    this._sorters.push(new E.CastleColumnSortingVO(this.subLayerDisp.btn_sort_fame, this.bindFunction(this.handleFameSorting)));
    this._sorters.push(new E.CastleColumnSortingVO(this.subLayerDisp.btn_sort_donated_coin_res, this.bindFunction(this.handleCoinResSorting)));
    this._sorters.push(new E.CastleColumnSortingVO(this.subLayerDisp.btn_sort_activity, this.bindFunction(this.handleActivitySorting)));
    return this._sorters;
  };
  CastleAllianceDialogMemberlist.prototype.handleActivitySorting = function (e, t) {
    var i = h.int(this.allianceInfoVO.getAdditionalMemberInfos(e.ownerInfoVO.playerID).loginActivity);
    var n = h.int(this.allianceInfoVO.getAdditionalMemberInfos(t.ownerInfoVO.playerID).loginActivity);
    var o = h.int(v.AllianceMemberScrollItemComparer.compareInt(i, n));
    if (o == 0) {
      o = h.int(v.AllianceMemberScrollItemComparer.compareRank(e.ownerInfoVO, t.ownerInfoVO));
    }
    if (o == 0) {
      o = h.int(v.AllianceMemberScrollItemComparer.compareName(e.ownerInfoVO, t.ownerInfoVO));
    }
    return o;
  };
  CastleAllianceDialogMemberlist.prototype.handleRubySorting = function (e, t) {
    var i = h.int(this.allianceInfoVO.getAdditionalMemberInfos(e.ownerInfoVO.playerID).givenC2);
    var n = h.int(this.allianceInfoVO.getAdditionalMemberInfos(t.ownerInfoVO.playerID).givenC2);
    var o = h.int(v.AllianceMemberScrollItemComparer.compareInt(i, n));
    if (o == 0) {
      o = h.int(v.AllianceMemberScrollItemComparer.compareRank(e.ownerInfoVO, t.ownerInfoVO));
    }
    if (o == 0) {
      o = h.int(v.AllianceMemberScrollItemComparer.compareName(e.ownerInfoVO, t.ownerInfoVO));
    }
    return o;
  };
  CastleAllianceDialogMemberlist.prototype.handleCoinResSorting = function (e, t) {
    if (this._coinShown) {
      return h.int(this.handleCoinSorting(e, t));
    } else {
      return h.int(this.handleRessourceSorting(e, t));
    }
  };
  CastleAllianceDialogMemberlist.prototype.handleRessourceSorting = function (e, t) {
    var i = h.int(this.allianceInfoVO.getAdditionalMemberInfos(e.ownerInfoVO.playerID).givenResources);
    var n = h.int(this.allianceInfoVO.getAdditionalMemberInfos(t.ownerInfoVO.playerID).givenResources);
    var o = h.int(v.AllianceMemberScrollItemComparer.compareInt(i, n));
    if (o == 0) {
      o = h.int(v.AllianceMemberScrollItemComparer.compareRank(e.ownerInfoVO, t.ownerInfoVO));
    }
    if (o == 0) {
      o = h.int(v.AllianceMemberScrollItemComparer.compareName(e.ownerInfoVO, t.ownerInfoVO));
    }
    return o;
  };
  CastleAllianceDialogMemberlist.prototype.handleCoinSorting = function (e, t) {
    var i = h.int(this.allianceInfoVO.getAdditionalMemberInfos(e.ownerInfoVO.playerID).givenC1);
    var n = h.int(this.allianceInfoVO.getAdditionalMemberInfos(t.ownerInfoVO.playerID).givenC1);
    var o = h.int(v.AllianceMemberScrollItemComparer.compareInt(i, n));
    if (o == 0) {
      o = h.int(v.AllianceMemberScrollItemComparer.compareRank(e.ownerInfoVO, t.ownerInfoVO));
    }
    if (o == 0) {
      o = h.int(v.AllianceMemberScrollItemComparer.compareName(e.ownerInfoVO, t.ownerInfoVO));
    }
    return o;
  };
  CastleAllianceDialogMemberlist.prototype.handleFameSorting = function (e, t) {
    var i = h.int(this.allianceInfoVO.getAdditionalMemberInfos(e.ownerInfoVO.playerID).dailyFame);
    var n = h.int(this.allianceInfoVO.getAdditionalMemberInfos(t.ownerInfoVO.playerID).dailyFame);
    var o = h.int(v.AllianceMemberScrollItemComparer.compareInt(i, n));
    if (o == 0) {
      o = h.int(v.AllianceMemberScrollItemComparer.compareRank(e.ownerInfoVO, t.ownerInfoVO));
    }
    if (o == 0) {
      o = h.int(v.AllianceMemberScrollItemComparer.compareName(e.ownerInfoVO, t.ownerInfoVO));
    }
    return o;
  };
  CastleAllianceDialogMemberlist.prototype.handleHonorMightSorting = function (e, t) {
    if (this._honorShown) {
      return h.int(v.AllianceMemberScrollItemComparer.compareHonorValue(e, t));
    } else {
      return h.int(v.AllianceMemberScrollItemComparer.compareMightValue(e, t));
    }
  };
  CastleAllianceDialogMemberlist.prototype.handleXPSorting = function (e, t) {
    if (this._legendXPShown) {
      return h.int(v.AllianceMemberScrollItemComparer.compareLegendLevelValue(e, t));
    } else {
      return h.int(v.AllianceMemberScrollItemComparer.comparePrimaryLevel(e, t));
    }
  };
  CastleAllianceDialogMemberlist.prototype.showHelp = function () {
    R.CastleDialogHandler.getInstance().showHelper("", u.Localize.text("help_allianceMemberlist"));
  };
  CastleAllianceDialogMemberlist.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.initScrollList();
    this.updateLists();
    this.updateCoin();
    this.updateHonor();
    this.updateXP();
    this.subLayerDisp.btn_sort_rank.gotoAndStop(2);
    this.itxt_memberAmount.textContentVO.textReplacements = [this.allianceInfoVO.memberAmount, this.allianceInfoVO.memberMax];
    this.itxt_honorOverall.textContentVO.numberValue = this.calculateTotalMightPoints();
    this.itxt_label.textContentVO.stringValue = String(this.allianceInfoVO.applicationAmount);
    this.subLayerDisp.btn_searchMember.mc_counter.visible = this.allianceInfoVO.applicationAmount > 0;
    this.subLayerDisp.btn_searchMember.visible = _.CastleModel.allianceData.hasRight(_.CastleModel.userData.allianceRank, l.AllianceConst.RIGHT_INVITE);
    if (C.ABGHelper.isOnABGServer) {
      this.subLayerDisp.btn_increaseMember.toolTipText = "dialog_alliance_maxUpgradeLevel";
      b.ButtonHelper.enableButton(this.subLayerDisp.btn_increaseMember, false);
      b.ButtonHelper.enableButton(this.subLayerDisp.btn_searchMember, false);
    } else if (this.allianceInfoVO.isBoostUpgradeable(l.AllianceConst.TYPE_MEMBERS)) {
      if (_.CastleModel.allianceData.hasRight(_.CastleModel.userData.allianceRank, l.AllianceConst.RIGHT_UPGRADE)) {
        this.subLayerDisp.btn_increaseMember.toolTipText = "dialog_alliance_raiseMemberLimit";
        b.ButtonHelper.enableButton(this.subLayerDisp.btn_increaseMember, true);
      } else {
        this.subLayerDisp.btn_increaseMember.toolTipText = "dialog_alliance_rankToLow";
        b.ButtonHelper.enableButton(this.subLayerDisp.btn_increaseMember, false);
      }
    } else {
      this.subLayerDisp.btn_increaseMember.toolTipText = "dialog_alliance_maxUpgradeLevel";
      b.ButtonHelper.enableButton(this.subLayerDisp.btn_increaseMember, false);
    }
  };
  CastleAllianceDialogMemberlist.prototype.hide = function () {
    this.resetAllTriangles();
    this.disposeScrollList();
    this._tableSorter.hide();
    e.prototype.hide.call(this);
  };
  CastleAllianceDialogMemberlist.prototype.onMouseUp = function (e) {
    if (b.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.subLayerDisp.btn_editAnouncement:
          break;
        case this.subLayerDisp.btn_allianceHighscore:
          R.CastleDialogHandler.getInstance().registerDefaultDialogs(x.CastleHighscoreDialog, new I.CastleHighscoreDialogProperties(x.CastleHighscoreDialog.SEARCH_ALLIANCE, g.ClientConstCastle.CATEGORY_BUILDING_POINTS));
          break;
        case this.subLayerDisp.btn_searchMember:
          R.CastleDialogHandler.getInstance().registerDefaultDialogs(N.CastleSearchMemberDialog, new A.CastleSearchMemberDialogProperties(this.allianceInfoVO));
          break;
        case this.subLayerDisp.btn_increaseMember:
          a.CommandController.instance.executeCommand(M.IngameClientCommands.OPEN_ALLIANCE_BUY_BOOSTER_COMMAND, [this.allianceInfoVO, l.AllianceConst.TYPE_MEMBERS, m.EffectTypeEnum.EFFECT_TYPE_MEMBER]);
          break;
        case this.subLayerDisp.btn_landmarks:
          R.CastleDialogHandler.getInstance().registerDefaultDialogs(F.CastleAllianceLandmarksDialog);
          break;
        case this.subLayerDisp.btn_left_level:
        case this.subLayerDisp.btn_right_level:
          this.toggleShownXP();
          break;
        case this.subLayerDisp.btn_left_honor:
        case this.subLayerDisp.btn_right_honor:
          this.toggleHonorMight();
          break;
        case this.subLayerDisp.btn_left_coin_res:
        case this.subLayerDisp.btn_right_coin_res:
          this.toggleShownResCoin();
      }
      if (this.isButtonChangeRank(e.target)) {
        R.CastleDialogHandler.getInstance().registerDefaultDialogs(k.CastleAllianceMemberSettingsDialog, new L.CastleAllianceMemberSettingsDialogProperties(e.target.memberVO));
      } else if (this.isButtonMemberName(e.target)) {
        R.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(w.CastlePlayerInfoDialog, new T.CastlePlayerInfoDialogProperties(e.target.playerID), O.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      }
    }
  };
  CastleAllianceDialogMemberlist.prototype.toggleHonorMight = function () {
    this._honorShown = !this._honorShown;
    this.updateHonor();
  };
  CastleAllianceDialogMemberlist.prototype.toggleShownXP = function () {
    this._legendXPShown = !this._legendXPShown;
    this.updateXP();
  };
  CastleAllianceDialogMemberlist.prototype.toggleShownResCoin = function () {
    this._coinShown = !this._coinShown;
    this.updateCoin();
  };
  CastleAllianceDialogMemberlist.prototype.isButtonMemberName = function (e) {
    return !!b.ButtonHelper.hasBasicButton(e) && !!e.playerID && typeof e.playerID == "number";
  };
  CastleAllianceDialogMemberlist.prototype.isButtonChangeRank = function (e) {
    return !!b.ButtonHelper.hasBasicButton(e) && !!e.memberVO && f.instanceOf_IWorldMapOwnerInfoVO(e.memberVO);
  };
  Object.defineProperty(CastleAllianceDialogMemberlist.prototype, "allianceInfoVO", {
    get: function () {
      return this._params[0];
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceDialogMemberlist.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.disposeScrollList();
    this._tableSorter.destroy();
  };
  CastleAllianceDialogMemberlist.prototype.initScrollList = function () {
    this.disposeScrollList();
    this._itemScrollList = new V.SliderItemScrollList(this.disp, this.disp);
    this._itemScrollList.scrollItemClass = B.AllianceMemberScrollItem;
    this.populateScrollList(this._itemScrollList);
    this._itemScrollList.initList();
  };
  CastleAllianceDialogMemberlist.prototype.populateScrollList = function (e) {
    for (var t = 0, i = this.allianceInfoVO.memberList; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        e.pushContent(new S.AllianceMemberScrollItemVO(n, this.allianceInfoVO.getAdditionalMemberInfos(n.playerID), _.CastleModel.userData.castleList.getHomeCastle().absAreaPos, r.WorldClassic.KINGDOM_ID));
      }
    }
  };
  CastleAllianceDialogMemberlist.prototype.disposeScrollList = function () {
    if (this._itemScrollList) {
      this._itemScrollList.clear();
      this._itemScrollList.remove();
      this._itemScrollList = null;
    }
  };
  CastleAllianceDialogMemberlist.prototype.updateCoin = function () {
    if (this._coinShown) {
      this.subLayerDisp.icon_coin_res.gotoAndStop(1);
      this.subLayerDisp.icon_coin_res.toolTipText = "dialog_alliance_donatedC1";
    } else {
      this.subLayerDisp.icon_coin_res.gotoAndStop(2);
      this.subLayerDisp.icon_coin_res.toolTipText = "dialog_alliance_donatedRes";
    }
    for (var e = h.int(this._itemScrollList.voList.length), t = 0; t < e; ++t) {
      this._itemScrollList.voList[t].coinShown = this._coinShown;
      if (this._itemScrollList.veList.length > t) {
        this._itemScrollList.veList[t].updateCoin(this._coinShown);
      }
    }
  };
  CastleAllianceDialogMemberlist.prototype.updateXP = function () {
    if (this._legendXPShown) {
      this.subLayerDisp.icon_xp.gotoAndStop(2);
      this.subLayerDisp.icon_xp.toolTipText = "legendlevel";
    } else {
      this.subLayerDisp.icon_xp.gotoAndStop(1);
      this.subLayerDisp.icon_xp.toolTipText = "level";
    }
    for (var e = h.int(this._itemScrollList.voList.length), t = 0; t < e; ++t) {
      this._itemScrollList.voList[t].legendXPShown = this._legendXPShown;
      if (this._itemScrollList.veList.length > t) {
        this._itemScrollList.veList[t].updateLegendXP(this._legendXPShown);
      }
    }
  };
  CastleAllianceDialogMemberlist.prototype.updateHonor = function () {
    if (this._honorShown) {
      this.subLayerDisp.icon_honor.gotoAndStop(1);
      this.subLayerDisp.icon_honor.toolTipText = "honor";
    } else {
      this.subLayerDisp.icon_honor.gotoAndStop(2);
      this.subLayerDisp.icon_honor.toolTipText = "playerMight";
    }
    for (var e = h.int(this._itemScrollList.voList.length), t = 0; t < e; ++t) {
      this._itemScrollList.voList[t].honorShown = this._honorShown;
      if (this._itemScrollList.veList.length > t) {
        this._itemScrollList.veList[t].updateHonor(this._honorShown);
      }
    }
  };
  return CastleAllianceDialogMemberlist;
}(D.CastleDialogSubLayer);
exports.CastleAllianceDialogMemberlist = P;
o.classImplementsInterfaces(P, "ICollectableRendererList", "ISublayer");
var M = require("./29.js");
var R = require("./9.js");
var V = require("./314.js");
var x = require("./745.js");
var w = require("./94.js");
var B = require("./2466.js");
var F = require("./2468.js");
var N = require("./2470.js");
var k = require("./2483.js");