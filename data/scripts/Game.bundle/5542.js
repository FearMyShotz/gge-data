Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./31.js");
var p = require("./19.js");
var h = require("./8.js");
var g = require("./11.js");
var C = createjs.Point;
var _ = function (e) {
  function CastleTournamentEventFinishDialog() {
    var t = this;
    t.TOP3_MIN_RANK = 3;
    t.TOP100_MIN_RANK = 100;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleTournamentEventFinishDialog.NAME) || this;
  }
  n.__extends(CastleTournamentEventFinishDialog, e);
  CastleTournamentEventFinishDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new c.LocalizedTextVO("dialog_messageHeader_tournamentOver"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new c.LocalizedTextVO("dialog_tournamentOver_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_ranking.txt_yourRankTitle, new c.LocalizedTextVO("dialog_tournament_yourRank"));
    this.i_rank_txt_txt_rank = this.textFieldManager.registerTextField(this.dialogDisp.mc_ranking.txt_rank, new u.TextVO(""), new o.InternalGGSTextFieldConfigVO(true));
  };
  CastleTournamentEventFinishDialog.prototype.initComponents = function () {
    this.updateRanking();
    this.updateRewards();
  };
  CastleTournamentEventFinishDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.initComponents();
  };
  CastleTournamentEventFinishDialog.prototype.updateRanking = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.mc_ranking.txt_yourRankTitle, new c.LocalizedTextVO("dialog_tournament_yourRank"));
    if (this.isNothing || this.isBooby || this.isTop100) {
      this.dialogDisp.mc_ranking.gotoAndStop(1);
      this.i_rank_txt_txt_rank = this.textFieldManager.registerTextField(this.dialogDisp.mc_ranking.txt_rank, new l.LocalizedNumberVO(this.dialogProperties.ownRank), new o.InternalGGSTextFieldConfigVO(true));
    } else if (this.dialogProperties.ownRank == 3) {
      this.dialogDisp.mc_ranking.gotoAndStop(2);
    } else if (this.dialogProperties.ownRank == 2) {
      this.dialogDisp.mc_ranking.gotoAndStop(3);
    } else if (this.dialogProperties.ownRank == 1) {
      this.dialogDisp.mc_ranking.gotoAndStop(4);
    }
  };
  CastleTournamentEventFinishDialog.prototype.updateRewards = function () {
    this.destroyCollectableRenderList();
    a.MovieClipHelper.clearMovieClip(this.rewardComponentContainerMovieClip);
    if (this.dialogProperties.rewardsList && this.dialogProperties.rewardsList.length > 0) {
      this.setupRewardBackgroundComponent("PriceCount" + this.dialogProperties.rewardsList.length);
    } else {
      this.setupRewardBackgroundComponent("PriceCount0");
    }
  };
  CastleTournamentEventFinishDialog.prototype.setupRewardBackgroundComponent = function (e) {
    var t = new (r.getDefinitionByName(e))();
    this.rewardComponentContainerMovieClip.addChild(t);
    if (this.dialogProperties.rewardsList) {
      for (var i = 0; i < this.dialogProperties.rewardsList.length; i++) {
        var n = i;
        var o = "mc_price_" + (i + 1);
        this.fillRewardSlotComponent(t, o, n, this.dialogProperties.rewardsList[i]);
      }
    }
  };
  CastleTournamentEventFinishDialog.prototype.fillRewardSlotComponent = function (e, t, i, n) {
    var o;
    var a = n;
    var s = e[t];
    this.setupRewardComponentLabel(s.txt_title, this.dialogProperties.rewardsList.length - i);
    if (a.containsAnyTypeOf(m.ClientConstCollectable.GROUP_LIST_EQUIPMENT)) {
      o = a.getFirstItemOfTypes(m.ClientConstCollectable.GROUP_LIST_EQUIPMENT);
      this.setupAndRenderSingleItem(s.mc_equipment, o, 5, CastleTournamentEventFinishDialog.ICON_EQUIPMENT_DIMENSION);
      s.mc_reward_item_1.visible = false;
      s.mc_reward_item_2.visible = false;
      s.btn_info_0.visible = false;
      s.btn_info_1.visible = false;
      s.mc_bcg.visible = false;
    } else if (a.containsType(f.CollectableEnum.BUILDING)) {
      o = a.getItemByType(f.CollectableEnum.BUILDING);
      this.setupAndRenderSingleItem(s.mc_equipment, o, 6, CastleTournamentEventFinishDialog.ICON_DECO_DIMENSION);
      s.mc_reward_item_1.visible = false;
      s.mc_reward_item_2.visible = false;
      s.btn_info_0.visible = false;
      s.btn_info_1.visible = false;
      s.mc_bcg.visible = false;
    } else {
      a = a.getFilteredListWithoutTypes([f.CollectableEnum.BUILDING].concat(m.ClientConstCollectable.GROUP_LIST_EQUIPMENT));
      s.mc_equipment.visible = false;
      for (var r = 0; r < 2; ++r) {
        o = a.getItemByIndex(r);
        this.setupAndRenderItemFromDoubleSet(s["mc_reward_item_" + (r + 1)], s["btn_info_" + r], o);
      }
    }
  };
  CastleTournamentEventFinishDialog.prototype.setupAndRenderSingleItem = function (e, t, i, n) {
    e.gotoAndStop(i);
    var o = new d.CollectableRenderClips(e).addIconMc(e.mc_equipmentHolder);
    O.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, o, t, new p.CollectableRenderOptions(p.CollectableRenderOptions.SET_DEFAULT, n));
  };
  CastleTournamentEventFinishDialog.prototype.setupAndRenderItemFromDoubleSet = function (e, t, i) {
    this.collectableRenderList.push(O.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new d.CollectableRenderClips(e).addIconMc(e.mc_icon).addColorBgMc(e.mc_background).addInfoBtn(t), i, new p.CollectableRenderOptions(p.CollectableRenderOptions.SET_TOURNAMENT_DEFAULT)));
  };
  CastleTournamentEventFinishDialog.prototype.setupRewardComponentLabel = function (e, t) {
    switch (t) {
      case 1:
        this.textFieldManager.registerTextField(e, new c.LocalizedTextVO("dialog_tournament_boobyprice"));
        break;
      case 2:
        this.textFieldManager.registerTextField(e, new c.LocalizedTextVO("dialog_tournament_priceTop", [this.TOP100_MIN_RANK.toString()]));
        break;
      case 3:
        this.textFieldManager.registerTextField(e, new c.LocalizedTextVO("dialog_tournament_priceTop", [this.TOP3_MIN_RANK.toString()]));
    }
  };
  CastleTournamentEventFinishDialog.prototype.onClick = function (t) {
    if (h.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleTournamentEventFinishDialog.prototype, "isTop3", {
    get: function () {
      return this.dialogProperties.ownRank <= this.TOP3_MIN_RANK;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTournamentEventFinishDialog.prototype, "isTop100", {
    get: function () {
      return this.dialogProperties.ownRank > this.TOP3_MIN_RANK && this.dialogProperties.ownRank <= this.TOP100_MIN_RANK;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTournamentEventFinishDialog.prototype, "isBooby", {
    get: function () {
      return !this.isTop3 && !this.isTop100 && !!this.dialogProperties.rewardsList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTournamentEventFinishDialog.prototype, "isNothing", {
    get: function () {
      return !this.isTop3 && !this.isTop100 && !this.dialogProperties.rewardsList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTournamentEventFinishDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTournamentEventFinishDialog.prototype, "rewardComponentContainerMovieClip", {
    get: function () {
      return this.dialogDisp.mc_rewardsPosition;
    },
    enumerable: true,
    configurable: true
  });
  CastleTournamentEventFinishDialog.__initialize_static_members = function () {
    CastleTournamentEventFinishDialog.NAME = "CastleTournamentFinished";
    CastleTournamentEventFinishDialog.ICON_DECO_DIMENSION = new C(65, 65);
    CastleTournamentEventFinishDialog.ICON_EQUIPMENT_DIMENSION = new C(50, 50);
  };
  return CastleTournamentEventFinishDialog;
}(g.CastleExternalDialog);
exports.CastleTournamentEventFinishDialog = _;
var m = require("./86.js");
var f = require("./12.js");
var O = require("./25.js");
s.classImplementsInterfaces(_, "ICollectableRendererList");
_.__initialize_static_members();