Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3882.js");
var r = require("./3900.js");
var l = require("./3901.js");
var c = require("./3902.js");
var u = require("./3903.js");
var d = require("./3904.js");
var p = require("./3905.js");
var h = require("./3906.js");
var g = require("./3907.js");
var C = require("./3908.js");
var _ = require("./3909.js");
var m = require("./3910.js");
var f = require("./3911.js");
var O = require("./3912.js");
var E = require("./3913.js");
var y = require("./3914.js");
var b = require("./3915.js");
var D = require("./20.js");
var I = require("./76.js");
var T = require("./78.js");
var v = require("./77.js");
var S = require("./8.js");
var A = require("./11.js");
var L = require("./3916.js");
var P = function (e) {
  function CheatBotCollectionDialog() {
    var t = this;
    t.currentTab = "";
    CONSTRUCTOR_HACK;
    return t = e.call(this, CheatBotCollectionDialog.NAME) || this;
  }
  n.__extends(CheatBotCollectionDialog, e);
  CheatBotCollectionDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    var i = new v.InfiniteScrollListOptions(L.CheatBotCollectionDialogItem, "CheatBotCollection_Item", CheatBotCollectionDialog.NAME);
    i.itemPaddingY = 6;
    i.useSmoothScroll = true;
    this._scrollList = new T.InfiniteScrollListComponent(new I.InfiniteScrollListClips(this.dialogDisp.mc_list).addMaskMc(this.dialogDisp.mc_list.mc_mask).addItemContainerMc(this.dialogDisp.mc_list.mc_items).addSliderMc(this.dialogDisp.mc_list.mc_slider).addMouseWheelAreaMc(this.dialogDisp), i);
    S.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_bots, this.dialogDisp.btn_clientCheats], D.ClickFeedbackButtonHover, 1);
    this.dialogDisp.btn_bots.visible = false;
  };
  CheatBotCollectionDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.TextVO("           CHEATS"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_bots.txt_label, new a.TextVO("Bots"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_bots.mc_selected.txt_label, new a.TextVO("Bots"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_clientCheats.txt_label, new a.TextVO("Client Cheats"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_clientCheats.mc_selected.txt_label, new a.TextVO("Client Cheats"));
    this._scrollList.onShow();
    if (this.currentTab == "") {
      this.updateItems(CheatBotCollectionDialog.TAB_CLIENT_CHEAT);
    }
  };
  CheatBotCollectionDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this._scrollList.onHide();
  };
  CheatBotCollectionDialog.prototype.updateItems = function (e) {
    this.currentTab = e;
    this.dialogDisp.btn_bots.mc_selected.visible = e == CheatBotCollectionDialog.TAB_BOT;
    this.dialogDisp.btn_clientCheats.mc_selected.visible = e == CheatBotCollectionDialog.TAB_CLIENT_CHEAT;
    var t = [];
    CheatBotCollectionDialog.BOT_ITEMS.forEach(function (i) {
      if (i.tab == e) {
        t.push(i);
      }
    });
    this._scrollList.updateWithNewData(t);
  };
  CheatBotCollectionDialog.prototype.onClick = function (e) {
    if (S.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_bots:
          this.updateItems(CheatBotCollectionDialog.TAB_BOT);
          break;
        case this.dialogDisp.btn_clientCheats:
          this.updateItems(CheatBotCollectionDialog.TAB_CLIENT_CHEAT);
      }
    }
  };
  CheatBotCollectionDialog.__initialize_static_members = function () {
    CheatBotCollectionDialog.NAME = "CheatBotCollection";
    CheatBotCollectionDialog.TAB_CLIENT_CHEAT = "cheat";
    CheatBotCollectionDialog.TAB_BOT = "bot";
    CheatBotCollectionDialog.BOT_ITEMS = [{
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "toggleShowCiIDs",
      description: "Toggles the visibility of ConstructionItemIDs",
      command: O.CheatToggleShowCIIDCommand
    }, {
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "toggleShowEffectTypeIDs",
      description: "Toggles the visibility of EffectTypeIDs for effects",
      command: E.CheatToggleShowEffectTypeIDCommand
    }, {
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "welcome {rewardID}",
      description: "Opens the 'Welcome Back'-Dialog",
      command: b.CheatWelcomeCommand
    }, {
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "mysteryBoxChance",
      description: "Shows the dropchances in the mysteryboxes dialog",
      command: p.CheatMysteryBoxChancesCommand
    }, {
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "textID {textID} {replacements}",
      description: "Tests TextID IG",
      command: f.CheatTextIDCommand
    }, {
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "pipesOn / pipesOff",
      description: "Shows Pipes '|' at the end of texts (saved in local storage)",
      command: c.CheatEndOfTextPipesCommand
    }, {
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "toggleOfferIDsInMessageSubject",
      description: "Shows OfferIDs in the message headers",
      command: h.CheatOfferIDsInHeaderCommand
    }, {
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "showQuestIDs on|off",
      description: "Shows QuestIDs in the quest book",
      command: g.CheatQuestIDsCommand
    }, {
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "lifetimeSpent",
      description: "C2 Spent Lifetime for this account",
      command: u.CheatLifetimeSpentC2Command
    }, {
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "noConnection",
      description: "Shows Maintenance (careful, its not closeable)",
      command: d.CheatMaintenanceDialogCommand
    }, {
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "toggleShowDialogName",
      description: "Toggles Dialogs Name above the Dialog",
      command: l.CheatDialogNamesCommand
    }, {
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "showRelicIDS",
      description: "Toggles Showing Relic Equipment IDs",
      command: C.CheatRelicIDsCommand
    }, {
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "addNPCGeneral",
      description: "Add a general as NPC",
      command: s.CheatAddNPCGeneralCommand
    }, {
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "buildingInfo",
      description: "Show a BuildingInfo dialog for buildingWOD",
      command: r.CheatBuildingInfoCommand
    }, {
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "toggleUnitWodID",
      description: "Shows WODID for units",
      command: y.CheatUnitWODCommand
    }, {
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "showResearchIDs",
      description: "Show or hide researchIDs",
      command: m.CheatShowResearchIDsCommand
    }, {
      tab: CheatBotCollectionDialog.TAB_CLIENT_CHEAT,
      name: "showResearchGrid",
      description: "Show or hide research grid",
      command: _.CheatShowResearchGridCommand
    }];
  };
  return CheatBotCollectionDialog;
}(A.CastleExternalDialog);
exports.CheatBotCollectionDialog = P;
o.classImplementsInterfaces(P, "ICollectableRendererList");
P.__initialize_static_members();