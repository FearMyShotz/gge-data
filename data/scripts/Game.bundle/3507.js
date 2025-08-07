Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./26.js");
var u = require("./4.js");
var d = require("./8.js");
var p = require("./11.js");
var h = createjs.Point;
var g = function (e) {
  function CastleNomadInvasionAllianceCampRewardDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleNomadInvasionAllianceCampRewardDialog.NAME) || this;
  }
  n.__extends(CastleNomadInvasionAllianceCampRewardDialog, e);
  CastleNomadInvasionAllianceCampRewardDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.LocalizedTextVO("dialog_nomadInvasion_khanRewards_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rewards, new l.LocalizedTextVO("dialog_nomadInvasion_khanRewards_yourReward_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_gotoShop.txt_label, new l.LocalizedTextVO("dialog_nomadInvasion_khanRewards_visitStore_desc"));
    this.itxt_desc = this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new l.LocalizedTextVO("dialog_nomadInvasion_khanRewards_desc"));
    this.itxt_desc.autoFitToBounds = true;
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.centeredRewardList = new m.CastleCenteredRewardRendererListComponent(this.dialogDisp.rewards, CastleNomadInvasionAllianceCampRewardDialog.ITEM_DIMENSION);
    d.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_ok, this.dialogDisp.btn_gotoShop]);
  };
  CastleNomadInvasionAllianceCampRewardDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.dialogDisp.btn_gotoShop.visible = this.eventVO != null;
    this.showRewards();
    u.CastleModel.specialEventData.addEventListener(c.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
  };
  CastleNomadInvasionAllianceCampRewardDialog.prototype.showRewards = function () {
    var e = new _.ALeagueTypeScoreEventVO(s.EventConst.LEAGUETYPE_EVENT_SUBTYPE_ALLIANCE_CAMP_INVASION);
    e.eventId = s.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE;
    e.parseData(null, u.CastleModel.specialEventData.configXml, this.dialogProperties.params);
    var t = new C.CollectableList();
    for (var i = 0; i < e.rewardsReceived; i++) {
      var n = e.rewardLists[i];
      t.addList(n, true);
    }
    this.centeredRewardList.showRewards(t);
    this.itxt_desc.textContentVO.textReplacements = [e.ownPoints];
    this.dialogDisp.mc_singleRewardDeco.visible = t.length == 1;
  };
  CastleNomadInvasionAllianceCampRewardDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    u.CastleModel.specialEventData.removeEventListener(c.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
  };
  CastleNomadInvasionAllianceCampRewardDialog.prototype.onRemoveEvent = function (e) {
    if (a.instanceOfClass(e.specialEventVO, "NomadInvasionVendorEventVO")) {
      this.dialogDisp.btn_gotoShop.visible = false;
    }
  };
  CastleNomadInvasionAllianceCampRewardDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        p.CastleExternalDialog.dialogHandler.showHelper("", r.Localize.text("help_khanRewardDialog"));
        break;
      case this.dialogDisp.btn_gotoShop:
        this.hide();
        this.eventVO.openDialog();
    }
  };
  Object.defineProperty(CastleNomadInvasionAllianceCampRewardDialog.prototype, "eventVO", {
    get: function () {
      return u.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_NOMADINVASION_VENDOR);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleNomadInvasionAllianceCampRewardDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleNomadInvasionAllianceCampRewardDialog.__initialize_static_members = function () {
    CastleNomadInvasionAllianceCampRewardDialog.NAME = "CastleNomadInvasionAllianceCampReward";
    CastleNomadInvasionAllianceCampRewardDialog.ITEM_DIMENSION = new h(88, 82);
  };
  return CastleNomadInvasionAllianceCampRewardDialog;
}(p.CastleExternalDialog);
exports.CastleNomadInvasionAllianceCampRewardDialog = g;
var C = require("./48.js");
var _ = require("./327.js");
var m = require("./400.js");
o.classImplementsInterfaces(g, "ICollectableRendererList");
g.__initialize_static_members();