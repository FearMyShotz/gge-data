Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./37.js");
var h = require("./15.js");
var g = require("./4.js");
var C = function (e) {
  function CastleFactionInvasionEventTeaserDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleFactionInvasionEventTeaserDialog.NAME) || this;
  }
  n.__extends(CastleFactionInvasionEventTeaserDialog, e);
  CastleFactionInvasionEventTeaserDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.dialogDisp.btn_gotoCamp.basicButton = new o.BasicButton(this.dialogDisp.btn_gotoCamp, true);
    this.buttonArray.push(this.dialogDisp.btn_gotoCamp.basicButton);
  };
  CastleFactionInvasionEventTeaserDialog.prototype.setText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new d.LocalizedTextVO("message_header_berimondInvasion_start"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new d.LocalizedTextVO("message_berimondInvasion_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_gotoCamp.txt_gotoCamp, new d.LocalizedTextVO("panel_action_event")).autoFitToBounds = true;
  };
  CastleFactionInvasionEventTeaserDialog.prototype.getEventVO = function () {
    if (g.CastleModel.specialEventData.isEventActive(l.EventConst.EVENTTYPE_FACTION_INVASION)) {
      return g.CastleModel.specialEventData.getActiveEventByEventId(l.EventConst.EVENTTYPE_FACTION_INVASION);
    } else {
      return null;
    }
  };
  CastleFactionInvasionEventTeaserDialog.prototype.onClick = function (t) {
    if (t.target == this.dialogDisp.btn_gotoCamp) {
      this.gotoCamp();
    }
    e.prototype.onClick.call(this, t);
  };
  CastleFactionInvasionEventTeaserDialog.prototype.gotoCamp = function () {
    this.hide();
    if (g.CastleModel.specialEventData.isEventActive(l.EventConst.EVENTTYPE_FACTION_INVASION)) {
      this.openMainDialog(this.layoutManager.currentState != m.CastleLayoutManager.STATE_ISO || g.CastleModel.kingdomData.activeKingdomID != c.WorldClassic.KINGDOM_ID);
    } else {
      f.CastleExternalDialog.dialogHandler.registerDefaultDialogs(O.CastleStandardOkDialog, new a.BasicStandardOkDialogProperties(u.Localize.text("generic_alert_watchout"), u.Localize.text("alert_eventendet")));
    }
  };
  CastleFactionInvasionEventTeaserDialog.prototype.openMainDialog = function (e) {
    if (e) {
      h.CastleBasicController.getInstance().addEventListener(p.CastleServerMessageArrivedEvent.JAA_ARRIVED, function waitForJAA(e) {
        h.CastleBasicController.getInstance().removeEventListener(p.CastleServerMessageArrivedEvent.JAA_ARRIVED, waitForJAA);
        s.CommandController.instance.executeCommand(_.IngameClientCommands.OPEN_FACTION_INVASION_EVENT_MAIN_DIALOG);
      });
      s.CommandController.instance.executeCommand(_.IngameClientCommands.JOIN_AREA_AND_SAVE_POSITION_COMMAND, g.CastleModel.userData.castleList.getMainCastleByKingdomID(c.WorldClassic.KINGDOM_ID));
    } else {
      s.CommandController.instance.executeCommand(_.IngameClientCommands.OPEN_FACTION_INVASION_EVENT_MAIN_DIALOG);
    }
  };
  CastleFactionInvasionEventTeaserDialog.__initialize_static_members = function () {
    CastleFactionInvasionEventTeaserDialog.NAME = "CastleFactionInvasionEventTeaser";
  };
  return CastleFactionInvasionEventTeaserDialog;
}(require("./679.js").CastleBasicSpecialEventTeaserDialog);
exports.CastleFactionInvasionEventTeaserDialog = C;
var _ = require("./29.js");
var m = require("./17.js");
var f = require("./11.js");
var O = require("./38.js");
r.classImplementsInterfaces(C, "ICollectableRendererList");
C.__initialize_static_members();