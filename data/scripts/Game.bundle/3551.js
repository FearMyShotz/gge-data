Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./1431.js");
var d = require("./26.js");
var p = require("./4.js");
var h = require("./8.js");
var g = require("./588.js");
var C = require("./35.js");
var _ = function (e) {
  function FactionEventJoinSublayer(t, i) {
    var n = e.call(this, t) || this;
    n.sublayerSwitcher = i;
    n.initBasicButtons([t.btn_introduction, t.btn_rankings, t.mc_bottom.btn_join]);
    n.textFieldManager.registerTextField(t.txt_header, new l.LocalizedTextVO("dialog_factionJoin_header"));
    n.textFieldManager.registerTextField(t.txt_introduction, new l.LocalizedTextVO("dialog_factionJoin_tutorial"));
    n.textFieldManager.registerTextField(t.txt_rankings, new l.LocalizedTextVO("dialog_factionJoin_rewards"));
    n.textFieldManager.registerTextField(t.txt_chooseCamp, new l.LocalizedTextVO("dialog_factionJoin_chooseCamp"));
    n.textFieldManager.registerTextField(t.mc_bottom.btn_join.txt_name, new l.LocalizedTextVO("dialog_factionJoin_join_button"));
    n.textFieldManager.registerTextField(t.mc_warning.txt_title, new l.LocalizedTextVO("dialog_factionJoin_lastManStanding_header"));
    n.textFieldManager.registerTextField(t.mc_warning.txt_description, new l.LocalizedTextVO("dialog_factionJoin_lastManStanding_copy"));
    t.btn_introduction.toolTipText = "dialog_factionJoin_tutorial_tooltip";
    t.btn_rankings.toolTipText = "dialog_factionJoin_rewards_tooltip";
    n.campSelection = new y.PrebuiltCastleSelector(t.mc_factionCamps, "mc_castle", 3);
    return n;
  }
  n.__extends(FactionEventJoinSublayer, e);
  FactionEventJoinSublayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.campSelection.show(s.FactionConst.KINGDOM_ID);
    this.campSelection.selectionIndex = 1;
    h.ButtonHelper.enableButton(this.subLayerDisp.mc_bottom.btn_join, true);
    this.updateShowLMSWarning();
    p.CastleModel.specialEventData.addEventListener(d.CastleSpecialEventEvent.FACTION_EVENT_LAST_MAN_STANDING_UPDATE, this.bindFunction(this.onLMSChanged));
  };
  FactionEventJoinSublayer.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.campSelection.hide();
    p.CastleModel.specialEventData.removeEventListener(d.CastleSpecialEventEvent.FACTION_EVENT_LAST_MAN_STANDING_UPDATE, this.bindFunction(this.onLMSChanged));
  };
  FactionEventJoinSublayer.prototype.onLMSChanged = function (e) {
    this.updateShowLMSWarning();
  };
  FactionEventJoinSublayer.prototype.updateShowLMSWarning = function () {
    var e = p.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_FACTION).isOneLMSActive;
    this.subLayerDisp.mc_bottom.visible = !e;
    this.subLayerDisp.mc_warning.visible = e;
  };
  FactionEventJoinSublayer.prototype.onClick = function (e) {
    if (h.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.subLayerDisp.btn_introduction:
          this.sublayerSwitcher.switchTo(b.FactionEventMainDialog.SUBLAYER_INTRODUCTION);
          break;
        case this.subLayerDisp.btn_rankings:
          this.sublayerSwitcher.switchTo(b.FactionEventMainDialog.SUBLAYER_RANKINGS);
          break;
        case this.subLayerDisp.mc_bottom.btn_join:
          this.onJoinFactionEventButtonClicked();
      }
    }
  };
  FactionEventJoinSublayer.prototype.onJoinFactionEventButtonClicked = function () {
    if (!f.FlashBlockHelper.checkFlashBlock(s.FactionConst.KINGDOM_ID)) {
      if (this.haveEnoughResourcesToEnter()) {
        var e = p.CastleModel.userCastleListDetailed.getMainCastleByKingdomID(a.WorldClassic.KINGDOM_ID).getResourcesAsCollectableList();
        try {
          C.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(E.CastleConfirmCostsDialog, new g.CastleConfirmCostsDialogProperties(c.Localize.text("dialog_factionJoin_confirm_header"), c.Localize.text("dialog_factionJoin_confirmCamp" + this.campSelection.selectionData.id), this.campSelection.selectionData.primaryCosts, e, this.bindFunction(this.buyCamp)));
        } catch (e) {
          console.error("selectionData is null, selectedIndex: " + this.campSelection.selectionIndex);
        }
      } else {
        this.buyCamp();
      }
    }
  };
  FactionEventJoinSublayer.prototype.buyCamp = function (e = null) {
    h.ButtonHelper.delayEnableButton(this.subLayerDisp.mc_bottom.btn_join, true);
    p.CastleModel.smartfoxClient.sendCommandVO(new u.C2SSelectFactionCampVO(this.campSelection.selectionData.id, this.campSelection.selectionData.isPremium(), s.FactionConst.KINGDOM_ID, false));
  };
  FactionEventJoinSublayer.prototype.haveEnoughResourcesToEnter = function () {
    if (this.campSelection.selectionData) {
      for (var e = this.campSelection.selectionData.primaryCosts, t = 0; t < e.length; ++t) {
        var i = e.getItemByIndexSave(t);
        if (i) {
          var n = p.CastleModel.userCastleListDetailed.getMainCastleByKingdomID(a.WorldClassic.KINGDOM_ID);
          if (O.CostHelper.getAvailableGoodsFromDetailedCastleVO(n, new m.CollectableTypeVO().initByCollectable(i)) < i.amount) {
            return false;
          }
        }
      }
    }
    return true;
  };
  return FactionEventJoinSublayer;
}(C.CastleDialogSubLayer);
exports.FactionEventJoinSublayer = _;
var m = require("./74.js");
var f = require("./160.js");
var O = require("./66.js");
var E = require("./613.js");
var y = require("./1714.js");
var b = require("./662.js");
o.classImplementsInterfaces(_, "ICollectableRendererList", "ISublayer");