Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./7.js");
var a = require("./516.js");
var s = function () {
  function CastleLuckyWheelDelayCommandHelper() {}
  CastleLuckyWheelDelayCommandHelper.startCommandDelay = function () {
    n.debug("starting command delay for lucky wheel");
    a.CommandDelayController.getInstance().addDelayCommandID(o.ClientConstSF.S2C_GET_CASTLE_RESOURCES, false);
    a.CommandDelayController.getInstance().addDelayCommandID(o.ClientConstSF.S2C_VIP_INFO_EVENT, false);
    a.CommandDelayController.getInstance().addDelayCommandID(o.ClientConstSF.S2C_ACHIEVEMENT_FINISHED);
    a.CommandDelayController.getInstance().addDelayCommandID(o.ClientConstSF.S2C_SHOW_MESSAGES);
    a.CommandDelayController.getInstance().addDelayCommandID(o.ClientConstSF.S2C_GET_UNIT_INVENTORY);
    a.CommandDelayController.getInstance().addDelayCommandID(o.ClientConstSF.S2C_GET_CASTLE_PRODUCTION_DATA, false);
    a.CommandDelayController.getInstance().addDelayCommandID(o.ClientConstSF.S2C_SHOW_POPUP);
    a.CommandDelayController.getInstance().addDelayCommandID(o.ClientConstSF.S2C_ARCHIVE_MESSAGE);
    a.CommandDelayController.getInstance().addDelayCommandID(o.ClientConstSF.S2C_GET_BASIC_DATA);
    a.CommandDelayController.getInstance().addDelayCommandID(o.ClientConstSF.S2C_BUY_EVENTPACKAGE);
    a.CommandDelayController.getInstance().addDelayCommandID(o.ClientConstSF.S2C_VIP_INFO_EVENT);
    a.CommandDelayController.getInstance().addDelayCommandID(o.ClientConstSF.S2C_DELETE_MESSAGE);
    a.CommandDelayController.getInstance().addDelayCommandID(o.ClientConstSF.S2C_EQUIPMENT_INVENTORY_SPACE_LEFT, false);
    a.CommandDelayController.getInstance().addDelayCommandID(o.ClientConstSF.S2C_SHOW_POPOVER);
    a.CommandDelayController.getInstance().addDelayCommandID(o.ClientConstSF.S2C_NEW_RELIC_FLAG_EVENT, false);
    a.CommandDelayController.getInstance().addDelayCommandID(o.ClientConstSF.S2C_QUEST_START);
    a.CommandDelayController.getInstance().addDelayCommandID(o.ClientConstSF.S2C_QUEST_PROGRES);
    a.CommandDelayController.getInstance().addDelayCommandID(o.ClientConstSF.S2C_QUEST_FINISHED);
    a.CommandDelayController.getInstance().addDelayCommandID(o.ClientConstSF.S2C_QUEST_LIST);
    a.CommandDelayController.getInstance().addDelayCommandID(o.ClientConstSF.S2C_DAILY_QUEST_LIST);
    a.CommandDelayController.getInstance().addDelayCommandID(o.ClientConstSF.S2C_ACHIEVEMENT_LIST);
    a.CommandDelayController.getInstance().addDelayCommandID(o.ClientConstSF.S2C_PRIVATE_OFFER_LIST);
    a.CommandDelayController.getInstance().addDelayCommandID(o.ClientConstSF.S2C_POINT_EVENT_POINTS);
    a.CommandDelayController.getInstance().addDelayCommandID(o.ClientConstSF.S2C_SHOW_INVENTORY);
  };
  CastleLuckyWheelDelayCommandHelper.stopCommandDelay = function () {
    a.CommandDelayController.getInstance().finishDelayOfAllCommands();
    n.debug("---ending command delay for lucky wheel");
  };
  return CastleLuckyWheelDelayCommandHelper;
}();
exports.CastleLuckyWheelDelayCommandHelper = s;