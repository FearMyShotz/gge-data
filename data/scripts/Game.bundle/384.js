Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./207.js");
var u = require("./517.js");
var d = createjs.Point;
var p = function () {
  function AMovementRenderStrategy() {}
  AMovementRenderStrategy.prototype.renderData = function (e, t) {
    throw new C.AbstractMethodError();
  };
  AMovementRenderStrategy.prototype.reset = function (e, t) {
    h.ButtonHelper.initBasicButtons([e.btn_destination, e.btn_spyInfo, e.btn_armyInfo, e.btn_retreat, e.btn_sendHome, e.btn_goods]);
    e.btn_destination.movementVO = t;
    u.KingdomCrestsAndSymbolsHelper.addSymbolToMC(e.btn_destination.mc_kingdomBG.mc_icon, e.btn_destination.mc_kingdomBG.mc_bg, this.getKingdomID(t), new d(15, 15));
    e.btn_destination.mc_kingdomBG.mouseEnabled = false;
    e.btn_spyInfo.movementVO = t;
    e.btn_armyInfo.movementVO = t;
    e.btn_retreat.movementVO = t;
    e.btn_sendHome.movementVO = t;
    e.btn_goods.movementVO = t;
    e.mc_progress.toolTipText = "travelTime";
    e.mc_progress.mouseChildren = false;
    e.mc_progress.mouseEnabled = true;
    e.btn_spyInfo.toolTipText = "dialog_moveOverview_details";
    e.btn_goods.toolTipText = "dialog_moveOverview_details";
    e.btn_armyInfo.toolTipText = "dialog_moveOverview_details";
    e.fieldCastle = this.textFieldManager.registerTextField(e.btn_destination.txt_castleName, new l.TextVO(""), new a.InternalGGSTextFieldConfigVO(true));
    e.fieldAction = this.textFieldManager.registerTextField(e.txt_action, new r.LocalizedTextVO("dialog_moveOverview_TreasureHuntAttack"), new a.InternalGGSTextFieldConfigVO(true));
    e.fieldDestination = this.textFieldManager.registerTextField(e.txt_destination, new r.LocalizedTextVO("dialog_moveOverview_destination"), new a.InternalGGSTextFieldConfigVO(true));
    e.fieldArrival = this.textFieldManager.registerTextField(e.txt_arival, new r.LocalizedTextVO("dialog_moveOverview_arival"), new a.InternalGGSTextFieldConfigVO(true));
    e.fieldUnitCount = this.textFieldManager.registerTextField(e.btn_armyInfo.txt_units, new l.TextVO(""), new a.InternalGGSTextFieldConfigVO(true));
    e.fieldToolCount = this.textFieldManager.registerTextField(e.btn_armyInfo.txt_tools, new l.TextVO(""), new a.InternalGGSTextFieldConfigVO(true));
    e.fieldSpyCount = this.textFieldManager.registerTextField(e.btn_spyInfo.txt_spyAmount, new l.TextVO(""), new a.InternalGGSTextFieldConfigVO(true));
    e.fieldSpyRisk = this.textFieldManager.registerTextField(e.btn_spyInfo.txt_spyRisk, new r.LocalizedTextVO(s.GenericTextIds.VALUE_PERCENTAGE), new a.InternalGGSTextFieldConfigVO(true));
    e.fieldSpyEffect = this.textFieldManager.registerTextField(e.btn_spyInfo.txt_spyEffect, new r.LocalizedTextVO(s.GenericTextIds.VALUE_PERCENTAGE), new a.InternalGGSTextFieldConfigVO(true));
    if (t.targetAreaPos.x != -1 && t.targetAreaPos.y != -1) {
      e.fieldCoords = this.textFieldManager.registerTextField(e.btn_destination.txt_coords, new r.LocalizedTextVO(s.GenericTextIds.VALUE_COORDS, [t.targetAreaPos.x, t.targetAreaPos.y]), new a.InternalGGSTextFieldConfigVO(true));
    } else {
      e.fieldCoords = this.textFieldManager.registerTextField(e.btn_destination.txt_coords, new l.TextVO("-"), new a.InternalGGSTextFieldConfigVO(true));
    }
    e.fieldCastle.text = t.targetArea.areaNameString;
    e.fieldCastle.autoFitToBounds = true;
    e.btn_sendHome.visible = t.canBeSendHome;
    e.btn_sendHome.toolTipText = "dialog_moveOverview_sendHome";
    e.btn_retreat.visible = t.canBeRetreated;
    this.initRetreatButton(e.btn_retreat, t);
    e.fieldDestination.color = _.ClientConstColor.GENERIC_BROWN;
    e.fieldAction.color = _.ClientConstColor.GENERIC_BROWN;
    e.fieldArrival.color = _.ClientConstColor.GENERIC_BROWN;
    e.btn_spyInfo.visible = false;
    e.btn_armyInfo.visible = false;
    e.btn_goods.visible = false;
    if (g.CastleModel.kingdomData.getKingdomVOByID(t.kingdomID).isPaid) {
      e.btn_destination.toolTipText = "panel_action_jumpTo";
      h.ButtonHelper.enableButton(e.btn_destination, true);
    } else {
      e.btn_destination.toolTipText = "not_unlocked";
      h.ButtonHelper.enableButton(e.btn_destination, false);
    }
    var i = c.AdvisorAttackHelper.getAdvisorTypeByAreaType(t.targetArea.areaType);
    e.icon_advisor.visible = t.advisorType;
    e.icon_advisor.toolTipText = "title_advisor_" + c.AdvisorAttackHelper.getTextIDSuffix(i);
  };
  AMovementRenderStrategy.prototype.getKingdomID = function (e) {
    return e.kingdomID;
  };
  AMovementRenderStrategy.prototype.initRetreatButton = function (e, t) {
    if (!t.canBeRetreated || t.tooLateToBeRetreated || t.sourceArea.isUnderConquerControl) {
      h.ButtonHelper.enableButton(e, false);
      e.toolTipText = "ringmenu_building_cantRetreat";
    } else {
      h.ButtonHelper.enableButton(e, true);
      e.toolTipText = "dialog_moveOverview_retreat";
    }
  };
  AMovementRenderStrategy.prototype.updateContainer = function (e, t) {
    if (t) {
      e.mc_progress.bar.scaleX = t.currentProgress;
      var i = o.TimeStringHelper.getShortTimeStringBySeconds(t.currentEndTimeInSeconds(), o.TimeStringHelper.HOURS_MINUTES_SECONDS_FORMAT);
      if (i) {
        this.textFieldManager.registerTextField(e.mc_progress.txt_progress, new l.TextVO(i));
      }
      if (e.btn_retreat.visible && e.btn_retreat.enabled) {
        this.initRetreatButton(e.btn_retreat, t);
      }
    }
  };
  AMovementRenderStrategy.setDecoFrame = function (e, t) {
    e.deco.gotoAndStop(t);
    switch (t) {
      case 6:
      case 5:
      case 4:
      case 1:
        e.fieldDestination.color = _.ClientConstColor.GENERIC_BLACK;
        e.fieldAction.color = _.ClientConstColor.GENERIC_BLACK;
        e.fieldArrival.color = _.ClientConstColor.GENERIC_BLACK;
        break;
      case 9:
      case 8:
      case 7:
      case 3:
      case 2:
        e.fieldDestination.color = _.ClientConstColor.GENERIC_WHITE;
        e.fieldAction.color = _.ClientConstColor.GENERIC_WHITE;
        e.fieldArrival.color = _.ClientConstColor.GENERIC_WHITE;
    }
  };
  Object.defineProperty(AMovementRenderStrategy.prototype, "textFieldManager", {
    get: function () {
      return n.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AMovementRenderStrategy.__initialize_static_members = function () {
    AMovementRenderStrategy.FRAME_MY_ATTACK = 1;
    AMovementRenderStrategy.FRAME_ENEMY_ATTACK_CLOSE = 2;
    AMovementRenderStrategy.FRAME_ENEMY_ATTACK = 7;
    AMovementRenderStrategy.FRAME_ALLIED_ATTACK = 1;
    AMovementRenderStrategy.FRAME_OTHER_ATTACK_CLOSE = 8;
    AMovementRenderStrategy.FRAME_OTHER_ATTACK = 9;
    AMovementRenderStrategy.FRAME_TRAVEL = 4;
    AMovementRenderStrategy.FRAME_MARKET = 6;
    AMovementRenderStrategy.FRAME_SPY = 3;
    AMovementRenderStrategy.FRAME_SUPPORT_DEFENSE = 5;
  };
  AMovementRenderStrategy.FRAME_MY_ATTACK = 1;
  AMovementRenderStrategy.FRAME_ENEMY_ATTACK_CLOSE = 2;
  AMovementRenderStrategy.FRAME_ENEMY_ATTACK = 7;
  AMovementRenderStrategy.FRAME_ALLIED_ATTACK = 1;
  AMovementRenderStrategy.FRAME_OTHER_ATTACK_CLOSE = 8;
  AMovementRenderStrategy.FRAME_OTHER_ATTACK = 9;
  AMovementRenderStrategy.FRAME_TRAVEL = 4;
  AMovementRenderStrategy.FRAME_MARKET = 6;
  AMovementRenderStrategy.FRAME_SPY = 3;
  AMovementRenderStrategy.FRAME_SUPPORT_DEFENSE = 5;
  return AMovementRenderStrategy;
}();
exports.AMovementRenderStrategy = p;
var h = require("./8.js");
var g = require("./4.js");
var C = require("./69.js");
var _ = require("./16.js");
p.__initialize_static_members();