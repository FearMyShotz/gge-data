Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./58.js");
var r = require("./39.js");
var l = require("./261.js");
var c = require("./4.js");
var u = require("./9.js");
var d = require("./430.js");
var p = require("./89.js");
var h = createjs.Point;
var g = function (e) {
  function GeneralsOverviewPanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GeneralsOverviewPanelButton, e);
  GeneralsOverviewPanelButton.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this.listenOnXPChanged();
    c.CastleModel.questData.addEventListener(l.CastleQuestDataEvent.GET_QUESTLIST, this.bindFunction(this.onQuestUpdate));
    c.CastleModel.questData.addEventListener(l.CastleQuestDataEvent.QUEST_START, this.bindFunction(this.onQuestUpdate));
    c.CastleModel.questData.addEventListener(l.CastleQuestDataEvent.QUEST_FINISHED, this.bindFunction(this.onQuestUpdate));
    c.CastleModel.generalsIntroductionData.onProgress.add(this.bindFunction(this.onQuestUpdate));
  };
  GeneralsOverviewPanelButton.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    c.CastleModel.questData.removeEventListener(l.CastleQuestDataEvent.GET_QUESTLIST, this.bindFunction(this.onQuestUpdate));
    c.CastleModel.questData.removeEventListener(l.CastleQuestDataEvent.QUEST_START, this.bindFunction(this.onQuestUpdate));
    c.CastleModel.questData.removeEventListener(l.CastleQuestDataEvent.QUEST_FINISHED, this.bindFunction(this.onQuestUpdate));
    c.CastleModel.generalsIntroductionData.onProgress.remove(this.bindFunction(this.onQuestUpdate));
  };
  GeneralsOverviewPanelButton.prototype.updateOnVisible = function () {};
  Object.defineProperty(GeneralsOverviewPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_Generals;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GeneralsOverviewPanelButton.prototype.isButtonEnabled = function () {
    return c.CastleModel.generalsIntroductionData.canAccessGenerals();
  };
  GeneralsOverviewPanelButton.prototype.getButtonTooltip = function () {
    if (this.isButtonEnabled()) {
      return "ringmenu_building_generals_overview";
    } else if (c.CastleModel.userData.level < s.ClientConstLevelRestrictions.MIN_LEVEL_GENERALS) {
      return a.Localize.text(r.ClientConstTextIds.LEVEL_NEEDED, [s.ClientConstLevelRestrictions.MIN_LEVEL_GENERALS]);
    } else {
      return "panel_action_generals_notAvailable_quest";
    }
  };
  Object.defineProperty(GeneralsOverviewPanelButton.prototype, "iconDimension", {
    get: function () {
      return new h(40, 40);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.APanelButton.prototype, "iconDimension").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GeneralsOverviewPanelButton.prototype.onButtonClicked = function () {
    u.CastleDialogHandler.getInstance().registerDefaultDialogs(d.GeneralsOverviewDialog);
  };
  GeneralsOverviewPanelButton.prototype.onQuestUpdate = function () {
    this.update();
  };
  return GeneralsOverviewPanelButton;
}(p.APanelButton);
exports.GeneralsOverviewPanelButton = g;
o.classImplementsInterfaces(g, "ICollectableRendererList");