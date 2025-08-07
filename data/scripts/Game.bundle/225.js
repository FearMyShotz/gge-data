Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./67.js");
var c = require("./19.js");
var u = require("./8.js");
var d = require("./11.js");
var p = createjs.Point;
var h = function (e) {
  function CastleGenericRewardDialog(t = null) {
    var i = this;
    i.wonFrame = CastleGenericRewardDialog.FRAME_WON;
    i.noRewardFrame = CastleGenericRewardDialog.FRAME_NOREWARD_POINT;
    i.headerFrame = CastleGenericRewardDialog.FRAME_HEADER_POINT;
    i.gotReward = CastleGenericRewardDialog.FRAME_GOT_REWARD;
    CONSTRUCTOR_HACK;
    return i = e.call(this, t || CastleGenericRewardDialog.ASSET_NAME) || this;
  }
  n.__extends(CastleGenericRewardDialog, e);
  CastleGenericRewardDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
  };
  CastleGenericRewardDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.initFrameVisuals();
    this.initDialog();
    this.updateRewards();
  };
  CastleGenericRewardDialog.prototype.initFrameVisuals = function () {
    if (this.dialogDisp.rewardContainer) {
      this.dialogDisp.rewardContainer.visible = true;
    }
    if (this.dialogDisp.mc_header) {
      this.dialogDisp.mc_header.gotoAndStop(this.headerFrame);
    }
    if (this.dialogDisp.noRewards) {
      this.dialogDisp.noRewards.gotoAndStop(this.noRewardFrame);
    }
  };
  CastleGenericRewardDialog.prototype.hideRewardItemMcs = function () {
    for (var e = 0; e < 3; ++e) {
      this.dialogDisp.rewardContainer["mc_item" + e].visible = false;
    }
  };
  Object.defineProperty(CastleGenericRewardDialog.prototype, "grantTypeSuffix", {
    get: function () {
      if (this.dialogProperties.grantType == s.RewardConst.ALLIANCE) {
        return "Alliancebank";
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleGenericRewardDialog.prototype.updateRewards = function () {
    this.hideRewardItemMcs();
    g.CollectableRenderHelper.displayMultipleItemsComplete(this, new l.CollectableRenderClipsList().createByItemMcList(this.getRewardItemMcs()).addItemMcs("mc_item").addEquipmentBgMcs("parent.mc_equipmentBackground").addInfoBtns("parent.btn_info"), this.rewardList, new c.CollectableRenderOptions(c.CollectableRenderOptions.SET_DEFAULT, this.getRewardIconDimension()), function onPreRenderFunc(e) {
      e.clips.itemMc.parent.visible = true;
    });
  };
  CastleGenericRewardDialog.prototype.initDialog = function () {
    var e;
    var t;
    if (this.dialogProperties.rewardList && this.dialogProperties.rewardList.length > 0) {
      this.dialogDisp.noRewards.visible = false;
      this.dialogDisp.rewardContainer.visible = true;
      if (this.dialogProperties.isFirstPrize) {
        this.dialogDisp.rewardContainer.mc_background.gotoAndStop(this.wonFrame);
        e = new r.LocalizedTextVO(this.firstPlaceTitleTextId);
        t = new r.LocalizedTextVO(this.firstPlaceCopyTextId, [this.dialogProperties.points]);
      } else if (this.dialogProperties.isTopX) {
        this.dialogDisp.rewardContainer.mc_background.gotoAndStop(this.wonFrame);
        e = new r.LocalizedTextVO(this.topXTitleTextId);
        t = new r.LocalizedTextVO(this.topXCopyTextId, this.topXCopyTextReplacements);
      } else {
        this.dialogDisp.rewardContainer.mc_background.gotoAndStop(this.gotReward);
        e = new r.LocalizedTextVO(this.gotRewardTitleTextId);
        t = new r.LocalizedTextVO(this.gotRewardCopyTextId, [this.dialogProperties.points]);
      }
    } else {
      this.dialogDisp.rewardContainer.visible = false;
      this.dialogDisp.noRewards.visible = true;
      this.dialogDisp.noRewards.gotoAndStop(this.noRewardFrame);
      e = new r.LocalizedTextVO(this.noRewardTitleTextId);
      t = this.makeSpecialRewardLocalizedTextVO(this.noRewardCopyTextId, this.dialogProperties.points, this.dialogProperties.ownRank);
    }
    var i = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, e);
    i.autoFitToBounds = true;
    i.verticalAlign = o.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, t).autoFitToBounds = true;
  };
  CastleGenericRewardDialog.prototype.makeSpecialRewardLocalizedTextVO = function (e, t, i) {
    return new r.LocalizedTextVO(e, [t, i]);
  };
  CastleGenericRewardDialog.prototype.onClick = function (t) {
    if (u.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleGenericRewardDialog.prototype, "firstPlaceTitleTextId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardDialog.prototype, "firstPlaceCopyTextId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardDialog.prototype, "topXTitleTextId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardDialog.prototype, "topXCopyTextId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardDialog.prototype, "topXCopyTextReplacements", {
    get: function () {
      return [this.dialogProperties.topXCount];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardDialog.prototype, "gotRewardTitleTextId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardDialog.prototype, "gotRewardCopyTextId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardDialog.prototype, "noRewardTitleTextId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardDialog.prototype, "noRewardCopyTextId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  CastleGenericRewardDialog.prototype.getRewardIconDimension = function () {
    if (this.rewardList.length > 1) {
      return new p(CastleGenericRewardDialog.IMAGE_WIDTH_DUAL, CastleGenericRewardDialog.IMAGE_HEIGHT_DUAL);
    } else {
      return new p(CastleGenericRewardDialog.IMAGE_WIDTH_SINGLE, CastleGenericRewardDialog.IMAGE_HEIGHT_SINGLE);
    }
  };
  CastleGenericRewardDialog.prototype.getRewardItemMcs = function () {
    var e = [];
    if (this.rewardList.length > 1) {
      e.push(this.dialogDisp.rewardContainer.mc_item1);
      e.push(this.dialogDisp.rewardContainer.mc_item2);
    } else if (this.rewardList.length == 1) {
      e.push(this.dialogDisp.rewardContainer.mc_item0);
    }
    return e;
  };
  Object.defineProperty(CastleGenericRewardDialog.prototype, "rewardList", {
    get: function () {
      return this.dialogProperties.rewardList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleGenericRewardDialog.ASSET_NAME = "CastleGenericEventReward";
  CastleGenericRewardDialog.FRAME_WINNING_START = 2;
  CastleGenericRewardDialog.FRAME_GOT_REWARD = 1;
  CastleGenericRewardDialog.FRAME_GOT_REWARD_SAMURAI = 7;
  CastleGenericRewardDialog.FRAME_GOT_REWARD_SAMURAI_ALLIANCE = 7;
  CastleGenericRewardDialog.FRAME_GOT_REWARD_RED_ALIEN = 9;
  CastleGenericRewardDialog.FRAME_WON = 2;
  CastleGenericRewardDialog.FRAME_WON_NOMAD = 5;
  CastleGenericRewardDialog.FRAME_WON_NOMAD_ALLIANCE = 5;
  CastleGenericRewardDialog.FRAME_WON_SAMURAI = 6;
  CastleGenericRewardDialog.FRAME_WON_SAMURAI_ALLIANCE = 6;
  CastleGenericRewardDialog.FRAME_HEADER_POINT = 1;
  CastleGenericRewardDialog.FRAME_HEADER_BEGGING = 2;
  CastleGenericRewardDialog.FRAME_HEADER_ALIEN = 3;
  CastleGenericRewardDialog.FRAME_HEADER_ALIEN_ALLIANCE = 3;
  CastleGenericRewardDialog.FRAME_HEADER_LUCKY = 4;
  CastleGenericRewardDialog.FRAME_HEADER_NOMAD = 5;
  CastleGenericRewardDialog.FRAME_HEADER_NOMAD_ALLIANCE = 5;
  CastleGenericRewardDialog.FRAME_HEADER_SAMURAI = 6;
  CastleGenericRewardDialog.FRAME_HEADER_SAMURAI_ALLIANCE = 6;
  CastleGenericRewardDialog.FRAME_HEADER_HALLOWEEN = 7;
  CastleGenericRewardDialog.FRAME_HEADER_RED_ALIEN = 8;
  CastleGenericRewardDialog.FRAME_COLLECTOR_HALLOWEEN = 9;
  CastleGenericRewardDialog.FRAME_COLLECTOR_CHRISTMAS = 10;
  CastleGenericRewardDialog.FRAME_COLLECTOR_CARNIVAL = 11;
  CastleGenericRewardDialog.FRAME_COLLECTOR_SPRING = 12;
  CastleGenericRewardDialog.FRAME_NOREWARD_POINT = 1;
  CastleGenericRewardDialog.FRAME_NOREWARD_BEGGING = 2;
  CastleGenericRewardDialog.FRAME_NOREWARD_ALIEN = 3;
  CastleGenericRewardDialog.FRAME_NOREWARD_ALIEN_ALLIANCE = 3;
  CastleGenericRewardDialog.FRAME_NOREWARD_RED_ALIEN_ALLIANCE = 3;
  CastleGenericRewardDialog.FRAME_NOREWARD_LUCKY = 4;
  CastleGenericRewardDialog.FRAME_NOREWARD_NOMAD = 5;
  CastleGenericRewardDialog.FRAME_NOREWARD_NOMAD_ALLIANCE = 5;
  CastleGenericRewardDialog.FRAME_NOREWARD_SAMURAI = 8;
  CastleGenericRewardDialog.FRAME_NOREWARD_SAMURAI_ALLIANCE = 8;
  CastleGenericRewardDialog.IMAGE_WIDTH_DUAL = 60;
  CastleGenericRewardDialog.IMAGE_HEIGHT_DUAL = 60;
  CastleGenericRewardDialog.IMAGE_WIDTH_SINGLE = 60;
  CastleGenericRewardDialog.IMAGE_HEIGHT_SINGLE = 60;
  return CastleGenericRewardDialog;
}(d.CastleExternalDialog);
exports.CastleGenericRewardDialog = h;
var g = require("./25.js");
a.classImplementsInterfaces(h, "ICollectableRendererList");