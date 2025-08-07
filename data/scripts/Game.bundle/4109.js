Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./58.js");
var r = require("./39.js");
var l = require("./21.js");
var c = require("./179.js");
var u = require("./261.js");
var d = require("./32.js");
var p = require("./15.js");
var h = require("./4.js");
var g = require("./164.js");
var C = require("./89.js");
var _ = createjs.Point;
var m = function (e) {
  function GeneralsHubPanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GeneralsHubPanelButton, e);
  GeneralsHubPanelButton.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this.listenOnXPChanged();
    h.CastleModel.questData.addEventListener(u.CastleQuestDataEvent.GET_QUESTLIST, this.bindFunction(this.onQuestUpdate));
    h.CastleModel.questData.addEventListener(u.CastleQuestDataEvent.QUEST_START, this.bindFunction(this.onQuestUpdate));
    h.CastleModel.questData.addEventListener(u.CastleQuestDataEvent.QUEST_FINISHED, this.bindFunction(this.onQuestUpdate));
    h.CastleModel.generalsIntroductionData.onProgress.add(this.bindFunction(this.onQuestUpdate));
    h.CastleModel.generalsData.addEventListener(c.GeneralsEvent.GENERALS_HUB_UPDATED, this.bindFunction(this.onHubUpdated));
    h.CastleModel.generalsData.addEventListener(c.GeneralsEvent.GENERALS_HUB_REWARDS, this.bindFunction(this.onHubUpdated));
    p.CastleBasicController.getInstance().addEventListener(d.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    h.CastleModel.timerData.addEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  GeneralsHubPanelButton.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    h.CastleModel.questData.removeEventListener(u.CastleQuestDataEvent.GET_QUESTLIST, this.bindFunction(this.onQuestUpdate));
    h.CastleModel.questData.removeEventListener(u.CastleQuestDataEvent.QUEST_START, this.bindFunction(this.onQuestUpdate));
    h.CastleModel.questData.removeEventListener(u.CastleQuestDataEvent.QUEST_FINISHED, this.bindFunction(this.onQuestUpdate));
    h.CastleModel.generalsIntroductionData.onProgress.remove(this.bindFunction(this.onQuestUpdate));
    h.CastleModel.generalsData.removeEventListener(c.GeneralsEvent.GENERALS_HUB_UPDATED, this.bindFunction(this.onHubUpdated));
    h.CastleModel.generalsData.removeEventListener(c.GeneralsEvent.GENERALS_HUB_REWARDS, this.bindFunction(this.onHubUpdated));
    p.CastleBasicController.getInstance().removeEventListener(d.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    h.CastleModel.timerData.removeEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  GeneralsHubPanelButton.prototype.updateOnVisible = function () {
    var e = h.CastleModel.generalsData.getTotalAmountOfAvailableDraws();
    this.setAmount(e > 0, e);
  };
  Object.defineProperty(GeneralsHubPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_GeneralsHUB;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(C.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GeneralsHubPanelButton.prototype.isButtonEnabled = function () {
    return h.CastleModel.generalsIntroductionData.canAccessGenerals();
  };
  GeneralsHubPanelButton.prototype.getButtonTooltip = function () {
    if (this.isButtonEnabled()) {
      return "ringmenu_building_generals_inn";
    } else if (h.CastleModel.userData.level < s.ClientConstLevelRestrictions.MIN_LEVEL_GENERALS) {
      return a.Localize.text(r.ClientConstTextIds.LEVEL_NEEDED, [s.ClientConstLevelRestrictions.MIN_LEVEL_GENERALS]);
    } else {
      return "panel_action_generals_notAvailable_quest";
    }
  };
  Object.defineProperty(GeneralsHubPanelButton.prototype, "iconDimension", {
    get: function () {
      return new _(40, 40);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(C.APanelButton.prototype, "iconDimension").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GeneralsHubPanelButton.prototype.onButtonClicked = function () {
    g.GeneralsHelper.showGeneralsHubDialog();
  };
  GeneralsHubPanelButton.prototype.onQuestUpdate = function () {
    this.update();
  };
  GeneralsHubPanelButton.prototype.onHubUpdated = function (e) {
    this.update();
  };
  GeneralsHubPanelButton.prototype.onCurrenciesUpdated = function (e) {
    this.update();
  };
  GeneralsHubPanelButton.prototype.onTimerUpdate = function (e) {
    if (this.isVisible && this.isButtonEnabled) {
      h.CastleModel.generalsData.checkHubQuestCooldowns();
    }
  };
  return GeneralsHubPanelButton;
}(C.APanelButton);
exports.GeneralsHubPanelButton = m;
o.classImplementsInterfaces(m, "ICollectableRendererList");