Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./12.js");
var d = require("./45.js");
var p = require("./13.js");
var h = require("./4.js");
var g = require("./24.js");
var C = require("./76.js");
var _ = require("./78.js");
var m = require("./77.js");
var f = require("./8.js");
var O = require("./11.js");
var E = require("./3461.js");
var y = require("./36.js");
var b = require("./9.js");
var D = require("./745.js");
var I = require("./744.js");
var T = function (e) {
  function CastleAllianceBattleGroundEventEndDialog() {
    return e.call(this, CastleAllianceBattleGroundEventEndDialog.NAME) || this;
  }
  n.__extends(CastleAllianceBattleGroundEventEndDialog, e);
  CastleAllianceBattleGroundEventEndDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    f.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ranking], y.ClickFeedbackButton);
    var i = new m.InfiniteScrollListOptions(E.CastleAllianceBattleGroundEventEndDialogListItem, "CastleABGEventEnd_Item", CastleAllianceBattleGroundEventEndDialog.NAME);
    i.itemPaddingY = 9;
    i.useSmoothScroll = true;
    this._scrollList = new _.InfiniteScrollListComponent(new C.InfiniteScrollListClips(this.dialogDisp.mc_list).addMaskMc(this.dialogDisp.mc_list.mc_mask).addItemContainerMc(this.dialogDisp.mc_list.mc_items).addSliderMc(this.dialogDisp.mc_list.mc_slider), i);
    this.textFieldManager.registerTextField(this.dialogDisp.btn_ranking.txt_label, new l.LocalizedTextVO("finalScore"));
  };
  CastleAllianceBattleGroundEventEndDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_end_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new l.LocalizedTextVO("dialog_beyondTheHorizon_end_desc"));
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_teaser);
    this.dialogDisp.mc_teaser.addChild(new g.CastleGoodgameExternalClip("ABGEventEnd_Teaser_" + this.scoring, a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(CastleAllianceBattleGroundEventEndDialog.NAME), null, 0, false));
    this._scrollList.onShow();
    var i = [];
    if (this.allianceRewards) {
      var n = {
        rewards: this.allianceRewards,
        isAlliance: true,
        rank: this.dialogProp.allianceRank,
        points: this.dialogProp.alliancePoints
      };
      n.pointsCollectableVO = this.createPointsCollectableVO(true);
      i.push(n);
    }
    if (this.playerRewards) {
      var s = {
        rewards: this.playerRewards,
        isAlliance: false,
        rank: this.dialogProp.playerRank,
        points: this.dialogProp.playerPoints
      };
      s.pointsCollectableVO = this.createPointsCollectableVO(false);
      i.push(s);
    }
    this._scrollList.updateWithNewData(i);
  };
  CastleAllianceBattleGroundEventEndDialog.prototype.createPointsCollectableVO = function (e) {
    var t = h.CastleModel.allianceBattlegroundData.getConfigVOByID(this.dialogProp.settingID);
    var i = c.int(e ? t.allianceCurrencyID : t.currencyID);
    return d.CollectableHelper.createVO(u.CollectableEnum.GENERIC_CURRENCY, 1, i);
  };
  CastleAllianceBattleGroundEventEndDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    this._scrollList.onHide();
  };
  CastleAllianceBattleGroundEventEndDialog.prototype.onClick = function (t) {
    if (f.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_ranking:
          b.CastleDialogHandler.getInstance().registerDefaultDialogs(D.CastleHighscoreDialog, new I.CastleHighscoreDialogProperties(D.CastleHighscoreDialog.SEARCH_ABG_PLAYER));
      }
    }
  };
  Object.defineProperty(CastleAllianceBattleGroundEventEndDialog.prototype, "playerRewards", {
    get: function () {
      return this.dialogProp.playerRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattleGroundEventEndDialog.prototype, "allianceRewards", {
    get: function () {
      return this.dialogProp.allianceRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattleGroundEventEndDialog.prototype, "scoring", {
    get: function () {
      var e = h.CastleModel.allianceBattlegroundData.getConfigVOByID(this.dialogProp.settingID);
      if (e) {
        return e.scoringSystemVO.scoring;
      } else {
        return "AllianceCollector";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattleGroundEventEndDialog.prototype, "dialogProp", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBattleGroundEventEndDialog.NAME = "CastleAllianceBattleGroundEventEnd_5";
  return CastleAllianceBattleGroundEventEndDialog;
}(O.CastleExternalDialog);
exports.CastleAllianceBattleGroundEventEndDialog = T;
s.classImplementsInterfaces(T, "ICollectableRendererList");