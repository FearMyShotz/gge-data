Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./13.js");
var l = require("./4.js");
var c = require("./76.js");
var u = require("./78.js");
var d = require("./77.js");
var p = require("./8.js");
var h = require("./11.js");
var g = require("./36.js");
var C = require("./9.js");
var _ = require("./745.js");
var m = require("./744.js");
var f = require("./386.js");
var O = require("./3528.js");
var E = function (e) {
  function CastleTempServerEventEndDialog() {
    return e.call(this, CastleTempServerEventEndDialog.NAME) || this;
  }
  n.__extends(CastleTempServerEventEndDialog, e);
  CastleTempServerEventEndDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    p.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ranking], g.ClickFeedbackButton);
    var i = new d.InfiniteScrollListOptions(O.CastleTempServerEventEndDialogListItem, "CastleTempServerEventEnd_Item", CastleTempServerEventEndDialog.NAME);
    i.itemPaddingY = 9;
    i.useSmoothScroll = true;
    this._scrollList = new u.InfiniteScrollListComponent(new c.InfiniteScrollListClips(this.dialogDisp.mc_list).addMaskMc(this.dialogDisp.mc_list.mc_mask).addItemContainerMc(this.dialogDisp.mc_list.mc_items).addSliderMc(this.dialogDisp.mc_list.mc_slider), i);
    this.textFieldManager.registerTextField(this.dialogDisp.btn_ranking.txt_label, new s.LocalizedTextVO("finalScore"));
  };
  CastleTempServerEventEndDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_end_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO("dialog_tempServer_end_desc"));
    this.dialogDisp.mc_teaser.gotoAndStop(this.getAssetFrame());
    this._scrollList.onShow();
    var i = [];
    if (this.playerRewards) {
      var n = {
        rewards: this.playerRewards,
        rank: this.dialogProp.playerRank,
        points: this.dialogProp.playerPoints,
        scoring: this.scoring,
        isDaily: false
      };
      i.push(n);
    }
    if (this.dailyPlayerRewards) {
      var o = {
        rewards: this.dailyPlayerRewards,
        mandatoryPoints: this.dialogProp.dailyMandatoryPoints,
        rewardLevel: this.dialogProp.dailyRewardLevel,
        rewardLevelMax: l.CastleModel.tempServerData.dailyRewardLevels,
        isDaily: true
      };
      i.push(o);
    }
    this._scrollList.updateWithNewData(i);
  };
  CastleTempServerEventEndDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    this._scrollList.onHide();
  };
  CastleTempServerEventEndDialog.prototype.onClick = function (t) {
    if (p.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_ranking:
          C.CastleDialogHandler.getInstance().registerDefaultDialogs(_.CastleHighscoreDialog, new m.CastleHighscoreDialogProperties(_.CastleHighscoreDialog.SEARCH_TEMPSERVER_PLAYER));
      }
    }
  };
  Object.defineProperty(CastleTempServerEventEndDialog.prototype, "playerRewards", {
    get: function () {
      return this.dialogProp.playerRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTempServerEventEndDialog.prototype, "dailyPlayerRewards", {
    get: function () {
      return this.dialogProp.dailyPlayerRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTempServerEventEndDialog.prototype, "scoring", {
    get: function () {
      var e = l.CastleModel.tempServerData.getConfigVOByID(this.dialogProp.settingID);
      if (e) {
        return e.scoringSystem;
      } else {
        return "AllianceCollector";
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleTempServerEventEndDialog.prototype.getAssetFrame = function () {
    var e = l.CastleModel.tempServerData.getConfigVOByID(this.dialogProp.settingID);
    if (this.dialogProp.isCrossplay && e.isCastleTransportationOnly) {
      return 5;
    } else if (this.dialogProp.isCrossplay && this.scoring == f.TempServerConfigurationVO.SCORING_SYSTEM_RANK_SWAP) {
      return 4;
    } else if (this.dialogProp.isCrossplay && this.scoring == f.TempServerConfigurationVO.SCORING_SYSTEM_COLLECTOR) {
      return 3;
    } else {
      return 1;
    }
  };
  Object.defineProperty(CastleTempServerEventEndDialog.prototype, "dialogProp", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTempServerEventEndDialog.NAME = "CastleTempServerEventEnd";
  return CastleTempServerEventEndDialog;
}(h.CastleExternalDialog);
exports.CastleTempServerEventEndDialog = E;
o.classImplementsInterfaces(E, "ICollectableRendererList");