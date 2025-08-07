Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./18.js");
var l = require("./1075.js");
var c = require("./1753.js");
var u = require("./26.js");
var d = require("./90.js");
var p = require("./4.js");
var h = require("./41.js");
var g = require("./89.js");
var C = function (e) {
  function SearchEnemyPanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SearchEnemyPanelButton, e);
  SearchEnemyPanelButton.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    p.CastleModel.specialEventData.addEventListener(u.CastleSpecialEventEvent.FACTION_EVENT_SPECTATOR_STATUS_CHANGE, this.bindFunction(this.onSpecStatusChanged));
    p.CastleModel.specialEventData.addEventListener(u.CastleSpecialEventEvent.FACTION_EVENT_LAST_MAN_STANDING_UPDATE, this.bindFunction(this.onLMSChanged));
    p.CastleModel.worldmapCameraData.addEventListener(d.CastleWorldmapEvent.SELECTED_CASTLELIST_ITEM_CHANGED, this.bindFunction(this.onChangeSelectedCastleListItem));
  };
  SearchEnemyPanelButton.prototype.removeEventListener = function () {
    p.CastleModel.specialEventData.removeEventListener(u.CastleSpecialEventEvent.FACTION_EVENT_SPECTATOR_STATUS_CHANGE, this.bindFunction(this.onSpecStatusChanged));
    p.CastleModel.specialEventData.removeEventListener(u.CastleSpecialEventEvent.FACTION_EVENT_LAST_MAN_STANDING_UPDATE, this.bindFunction(this.onLMSChanged));
    p.CastleModel.worldmapCameraData.removeEventListener(d.CastleWorldmapEvent.SELECTED_CASTLELIST_ITEM_CHANGED, this.bindFunction(this.onChangeSelectedCastleListItem));
    e.prototype.removeEventListener.call(this);
  };
  SearchEnemyPanelButton.prototype.updateOnVisible = function () {
    this.resetEnemySearchRadius();
  };
  SearchEnemyPanelButton.prototype.resetEnemySearchRadius = function () {
    this.iconMc.gotoAndStop(p.CastleModel.kingdomData.activeKingdomID == a.FactionConst.KINGDOM_ID ? 3 : 1);
    h.CastleMovieClipHelper.updateParentCache(this.iconMc);
  };
  Object.defineProperty(SearchEnemyPanelButton.prototype, "selectedWorldmapObjectVO", {
    get: function () {
      return p.CastleModel.worldmapCameraData.currentSelectedCastleInActionPanel;
    },
    enumerable: true,
    configurable: true
  });
  SearchEnemyPanelButton.prototype.isButtonVisible = function () {
    return _.CastleLayoutManager.STATE_WORLDMAP == m.CastleComponent.layoutManager.currentState || _.CastleLayoutManager.STATE_KINGDOMMAP == m.CastleComponent.layoutManager.currentState;
  };
  SearchEnemyPanelButton.prototype.isButtonEnabled = function () {
    if (p.CastleModel.kingdomData.activeKingdomID == a.FactionConst.KINGDOM_ID) {
      var e = this.getFactionEventVO();
      if (e && (e.isSpectator || e.isOtherFactionInLMS)) {
        return false;
      }
    }
    return _.CastleLayoutManager.STATE_WORLDMAP == m.CastleComponent.layoutManager.currentState && p.CastleModel.tutorialData.isTutorialFinished();
  };
  SearchEnemyPanelButton.prototype.getButtonTooltip = function () {
    if (p.CastleModel.kingdomData.activeKingdomID == a.FactionConst.KINGDOM_ID) {
      var e = this.getFactionEventVO();
      if (e) {
        if (e.isSpectator) {
          return "panel_action_castle_spectator";
        } else if (e.isOtherFactionInLMS) {
          return "questCondition_defeatedFactionCapitalOnMap";
        } else {
          return "panel_action_toFront";
        }
      }
    }
    return "panel_action_enemySearch";
  };
  SearchEnemyPanelButton.prototype.getFactionEventVO = function () {
    return p.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_FACTION);
  };
  Object.defineProperty(SearchEnemyPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_EnemySearch;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SearchEnemyPanelButton.prototype.onLMSChanged = function (e) {
    if (p.CastleModel.kingdomData.activeKingdomID == a.FactionConst.KINGDOM_ID) {
      this.update();
    }
  };
  SearchEnemyPanelButton.prototype.onSpecStatusChanged = function (e) {
    if (p.CastleModel.kingdomData.activeKingdomID == a.FactionConst.KINGDOM_ID) {
      this.update();
    }
  };
  SearchEnemyPanelButton.prototype.onChangeSelectedCastleListItem = function (e) {
    this.resetEnemySearchRadius();
  };
  SearchEnemyPanelButton.prototype.onButtonClicked = function () {
    if (p.CastleModel.kingdomData.activeKingdomID == a.FactionConst.KINGDOM_ID) {
      p.CastleModel.smartfoxClient.sendCommandVO(new l.C2SFindNextTowerVO());
    } else {
      p.CastleModel.smartfoxClient.sendCommandVO(new c.C2SFindNextEnemyCastleVO(this.selectedWorldmapObjectVO.absAreaPosX, this.selectedWorldmapObjectVO.absAreaPosY, p.CastleModel.questData.currentSearchEnemyCounter % r.ClientConstCastle.MAX_FINDABLE_ENEMY_COUNTER));
    }
    p.CastleModel.questData.increaseCurrentSearchEnemyCounter();
    this.iconMc.gotoAndStop(p.CastleModel.kingdomData.activeKingdomID == a.FactionConst.KINGDOM_ID ? 3 : 2);
  };
  return SearchEnemyPanelButton;
}(g.APanelButton);
exports.SearchEnemyPanelButton = C;
var _ = require("./17.js");
var m = require("./14.js");
o.classImplementsInterfaces(C, "ICollectableRendererList");