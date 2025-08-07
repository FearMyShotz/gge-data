Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./8.js");
var a = require("./11.js");
var s = require("./3531.js");
var r = require("./1.js");
var l = require("./36.js");
var c = require("./78.js");
var u = require("./77.js");
var d = require("./76.js");
var p = require("./3.js");
var h = require("./13.js");
var g = require("./3.js");
var C = function (e) {
  function CastleStormIslandsEventEndDialog() {
    return e.call(this, CastleStormIslandsEventEndDialog.NAME) || this;
  }
  n.__extends(CastleStormIslandsEventEndDialog, e);
  CastleStormIslandsEventEndDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    o.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], l.ClickFeedbackButton);
    this.dialogDisp.btn_close.toolTipText = "generic_btn_close";
    var i = new u.InfiniteScrollListOptions(s.CastleStormIslandsEventEndListItem, "CastleStormIslandsEventEnd_Item", CastleStormIslandsEventEndDialog.NAME);
    i.itemPaddingY = 9;
    i.useSmoothScroll = true;
    this._scrollList = new c.InfiniteScrollListComponent(new d.InfiniteScrollListClips(this.dialogDisp.mc_list).addMaskMc(this.dialogDisp.mc_list.mc_mask).addSliderMc(this.dialogDisp.mc_list.mc_slider), i);
  };
  CastleStormIslandsEventEndDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new g.TextVO(h.TextHelper.toUpperCaseLocaSafeTextId("dialog_island_end_title"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new p.LocalizedTextVO("dialog_island_end_desc"));
    this.prepareItemsList();
  };
  CastleStormIslandsEventEndDialog.prototype.prepareItemsList = function () {
    this._scrollList.onShow();
    var e = [];
    var t = {};
    if (this.dialogProperties.isAlliance) {
      t.rewards = this.allianceRewards;
      t.isInternalAlliance = false;
      t.isAlliance = this.dialogProperties.isAlliance;
      t.rank = this.dialogProperties.allianceRank;
      t.points = this.dialogProperties.alliancePoints;
      e.push(t);
      (t = {}).rewards = this.playerRewards;
      t.isInternalAlliance = true;
      t.isAlliance = this.dialogProperties.isAlliance;
      t.rank = this.dialogProperties.playerRank;
      t.points = this.dialogProperties.playerPoints;
      e.push(t);
    } else {
      (t = {}).rewards = this.playerRewards;
      t.isInternalAlliance = false;
      t.isAlliance = false;
      t.rank = -1;
      t.points = this.dialogProperties.playerPoints;
      e.push(t);
    }
    if (this.dialogProperties.titleVO) {
      (t = {
        allianceRewards: null,
        isInternalAlliance: false,
        isAlliance: false,
        hasTitle: true
      }).title = this.dialogProperties.titleVO;
      e.push(t);
    }
    this._scrollList.updateWithNewData(e);
  };
  CastleStormIslandsEventEndDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    this._scrollList.onHide();
  };
  CastleStormIslandsEventEndDialog.prototype.onClick = function (t) {
    if (o.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleStormIslandsEventEndDialog.prototype, "allianceRewards", {
    get: function () {
      return this.dialogProperties.allianceRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStormIslandsEventEndDialog.prototype, "playerRewards", {
    get: function () {
      return this.dialogProperties.playerRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStormIslandsEventEndDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleStormIslandsEventEndDialog.NAME = "CastleStormIslandsEventEnd_D";
  return CastleStormIslandsEventEndDialog;
}(a.CastleExternalDialog);
exports.CastleStormIslandsEventEndDialog = C;
r.classImplementsInterfaces(C, "ICollectableRendererList");