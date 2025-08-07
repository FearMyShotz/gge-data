Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./5.js");
var p = require("./3.js");
var h = require("./4.js");
var g = function () {
  function FlashBlockHelper() {}
  FlashBlockHelper.isAccessBlocked = function (e) {
    return (!o.EnvGlobalsHandler.globals.isTest || !FlashBlockHelper.ALLOW_ON_TEST) && FlashBlockHelper.BLOCK_ACCESS && (FlashBlockHelper.BLOCKED_KINGDOM_IDS.indexOf(e) > -1 || s.TreasureMapsConst.CRUSADE_MAP_IDS.indexOf(e) > -1);
  };
  FlashBlockHelper.checkFlashBlock = function (e) {
    return !!FlashBlockHelper.isAccessBlocked(e) && (C.CastleDialogHandler.getInstance().registerDefaultDialogs(_.CastleDarkOkLabeledDialog, new n.BasicStandardOkDialogProperties("dialog_clientVersion_switch_confirmDialog_header", FlashBlockHelper.getBlockerText(e), FlashBlockHelper.onConfirmSwitch, "dialog_clientVersion_confirmSwitch", FlashBlockHelper.onClose)), true);
  };
  FlashBlockHelper.getBlockerText = function (e) {
    var t;
    switch (e) {
      case r.FactionConst.KINGDOM_ID:
        t = [p.Localize.text("event_title_3")];
        break;
      case d.WorldIsland.KINGDOM_ID:
        t = [p.Localize.text("event_title_102")];
        break;
      case s.TreasureMapsConst.MAP_ID_SEAQUEEN_EASY:
      case s.TreasureMapsConst.MAP_ID_SEAQUEEN_HARD:
      case s.TreasureMapsConst.MAP_ID_SEAQUEEN_EXTRA_HARD:
        t = [p.Localize.text("event_title_4")];
        break;
      case s.TreasureMapsConst.MAP_ID_THORNKING_EASY:
      case s.TreasureMapsConst.MAP_ID_THORNKING_HARD:
        t = [p.Localize.text("event_title_2")];
        break;
      case s.TreasureMapsConst.MAP_ID_UNDERWORLD_EASY:
      case s.TreasureMapsConst.MAP_ID_UNDERWORLD_HARD:
        t = [p.Localize.text("event_title_64")];
        break;
      case u.WorldIce.KINGDOM_ID:
      case c.WorldDessert.KINGDOM_ID:
      case l.WorldVolcano.KINGDOM_ID:
        t = [h.CastleModel.kingdomData.getKingdomVOByID(e).kingdomNameString];
    }
    return p.Localize.text("dialog_clientVersion_switch_confirmDialog_genericFeature_mandatory_HTML5_copy", t);
  };
  FlashBlockHelper.onConfirmSwitch = function (e = null) {
    a.ExternalInterface.call("ggsChangeGameClient");
  };
  FlashBlockHelper.onClose = function (e = null) {};
  FlashBlockHelper.BLOCK_ACCESS = false;
  FlashBlockHelper.ALLOW_ON_TEST = true;
  FlashBlockHelper.BLOCKED_KINGDOM_IDS = [r.FactionConst.KINGDOM_ID, d.WorldIsland.KINGDOM_ID, u.WorldIce.KINGDOM_ID, c.WorldDessert.KINGDOM_ID, l.WorldVolcano.KINGDOM_ID];
  return FlashBlockHelper;
}();
exports.FlashBlockHelper = g;
var C = require("./9.js");
var _ = require("./1211.js");