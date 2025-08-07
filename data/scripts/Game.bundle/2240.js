Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./179.js");
var o = require("./4.js");
var a = require("./1268.js");
var s = require("./1269.js");
var r = require("./2241.js");
var l = function () {
  function GeneralsHubQuestsComponent(e) {
    this._disp = e;
  }
  GeneralsHubQuestsComponent.prototype.show = function () {
    this._kingQuestComponent = new r.GeneralsHubQuestComponent(this.dispClip.king_bounds.mc_quest_king, a.GeneralsHubQuestVO.ID_FAT_KING);
    this._knightQuestComponent = new r.GeneralsHubQuestComponent(this.dispClip.knight_bounds.mc_quest_knight, a.GeneralsHubQuestVO.ID_KNIGHT);
    this._princessQuestComponent = new r.GeneralsHubQuestComponent(this.dispClip.princess_bounds.mc_quest_princess, a.GeneralsHubQuestVO.ID_PRINCESS);
    this.hideQuestBoxes();
    o.CastleModel.generalsData.addEventListener(n.GeneralsEvent.GENERALS_HUB_UPDATED, this.bindFunction(this.onQuestsUpdated));
    o.CastleModel.generalsData.addEventListener(n.GeneralsEvent.GENERALS_HUB_REWARDS, this.bindFunction(this.onQuestsUpdated));
    this.onQuestsUpdated();
  };
  GeneralsHubQuestsComponent.prototype.hideQuestBoxes = function () {
    this._kingQuestComponent.hide();
    this._knightQuestComponent.hide();
    this._princessQuestComponent.hide();
  };
  GeneralsHubQuestsComponent.prototype.toggleShowHideElement = function (e, t) {
    var i;
    if (t) {
      this.hideQuestBoxes();
    }
    switch (e) {
      case s.CharactersAnimationsHandler.KING_ANIMATION:
        i = this._kingQuestComponent;
        break;
      case s.CharactersAnimationsHandler.KNIGHT_ANIMATION:
        i = this._knightQuestComponent;
        break;
      case s.CharactersAnimationsHandler.PRINCESS_ANIMATION:
        i = this._princessQuestComponent;
    }
    if (i) {
      if (t) {
        i.show();
      } else {
        i.hide();
      }
    }
  };
  GeneralsHubQuestsComponent.prototype.onQuestsUpdated = function (e = null) {
    this.dispClip.mc_quests.info_king.visible = this._kingQuestComponent.questVO.availableQuests > 0;
    this.dispClip.mc_quests.info_knight.visible = this._knightQuestComponent.questVO.availableQuests > 0;
    this.dispClip.mc_quests.info_princess.visible = this._princessQuestComponent.questVO.availableQuests > 0;
    this._kingQuestComponent.updateDisp();
    this._knightQuestComponent.updateDisp();
    this._princessQuestComponent.updateDisp();
  };
  GeneralsHubQuestsComponent.prototype.hide = function () {
    this.hideQuestBoxes();
    this.dispClip.mc_quests.info_king.visible = false;
    this.dispClip.mc_quests.info_knight.visible = false;
    this.dispClip.mc_quests.info_princess.visible = false;
    o.CastleModel.generalsData.removeEventListener(n.GeneralsEvent.GENERALS_HUB_UPDATED, this.bindFunction(this.onQuestsUpdated));
    o.CastleModel.generalsData.removeEventListener(n.GeneralsEvent.GENERALS_HUB_REWARDS, this.bindFunction(this.onQuestsUpdated));
  };
  Object.defineProperty(GeneralsHubQuestsComponent.prototype, "dispClip", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  GeneralsHubQuestsComponent.prototype.performIntroductionDraw = function () {
    this._kingQuestComponent.onFreeQuest();
  };
  return GeneralsHubQuestsComponent;
}();
exports.GeneralsHubQuestsComponent = l;