Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./58.js");
var r = require("./39.js");
var l = require("./812.js");
var c = require("./4.js");
var u = require("./89.js");
var d = function (e) {
  function RewardHubPanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RewardHubPanelButton, e);
  RewardHubPanelButton.prototype.addEventListener = function () {
    c.CastleModel.rewardHubData.addEventListener(C.RewardHubEvent.PENDING_REWARDS_AMOUNT_UPDATED, this.bindFunction(this.onDataUpdated));
    c.CastleModel.lootBoxData.addEventListener(l.CastleLootBoxDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onDataUpdated));
    e.prototype.addEventListener.call(this);
    this.listenOnXPChanged();
  };
  RewardHubPanelButton.prototype.removeEventListener = function () {
    c.CastleModel.rewardHubData.removeEventListener(C.RewardHubEvent.PENDING_REWARDS_AMOUNT_UPDATED, this.bindFunction(this.onDataUpdated));
    c.CastleModel.lootBoxData.removeEventListener(l.CastleLootBoxDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onDataUpdated));
    e.prototype.removeEventListener.call(this);
  };
  RewardHubPanelButton.prototype.updateOnVisible = function () {
    e.prototype.updateOnVisible.call(this);
    this.setMark(this.markForLostAndFound);
    this.setAmount(this.pendingRewards > 0 && !this.markForLostAndFound, this.pendingRewards);
  };
  RewardHubPanelButton.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    this.setMark(false);
    this.setAmount(this.pendingRewards > 0, this.pendingRewards);
  };
  RewardHubPanelButton.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    this.updateOnVisible();
  };
  Object.defineProperty(RewardHubPanelButton.prototype, "pendingRewards", {
    get: function () {
      return c.CastleModel.rewardHubData.getAmountOfPendingRewards() + c.CastleModel.lootBoxData.allLootBoxAmount();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubPanelButton.prototype, "markForLostAndFound", {
    get: function () {
      return c.CastleModel.lostAndFoundData.getItemAmount() > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_RewardHub;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RewardHubPanelButton.prototype.isButtonEnabled = function () {
    return c.CastleModel.userData.userLevel >= s.ClientConstLevelRestrictions.MIN_LEVEL_LOST_AND_FOUND;
  };
  RewardHubPanelButton.prototype.getButtonTooltip = function () {
    if (this.isButtonEnabled()) {
      return "hud_rewardHub_hudButton_tt";
    } else {
      return a.Localize.text(r.ClientConstTextIds.LEVEL_NEEDED, [s.ClientConstLevelRestrictions.MIN_LEVEL_LOST_AND_FOUND]);
    }
  };
  RewardHubPanelButton.prototype.onButtonClicked = function () {
    p.CastleComponent.dialogHandler.registerDefaultDialogs(h.RewardHubMainDialog, new g.RewardHubDialogProperties(false));
  };
  RewardHubPanelButton.prototype.onDataUpdated = function (e) {
    this.update();
  };
  return RewardHubPanelButton;
}(u.APanelButton);
exports.RewardHubPanelButton = d;
var p = require("./14.js");
var h = require("./404.js");
var g = require("./550.js");
var C = require("./1663.js");
o.classImplementsInterfaces(d, "ICollectableRendererList");