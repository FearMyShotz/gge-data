Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./159.js");
var p = require("./37.js");
var h = require("./4.js");
var g = require("./11.js");
var C = require("./468.js");
var _ = function (e) {
  function LongTermPointEventHardModeDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, LongTermPointEventHardModeDialog.NAME) || this;
  }
  n.__extends(LongTermPointEventHardModeDialog, e);
  LongTermPointEventHardModeDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.dialogDisp.btn_showMe.mouseChildren = false;
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_showMe, this.dialogDisp.btn_yes]);
    this.registerTextFields(this.dialogDisp.txt_title, "dialog_longPointsEvent_hardMode_header");
    this.registerTextFields(this.dialogDisp.btn_showMe.txt_showMe, "dialog_questInfo_showMe");
    this.setMessageId();
  };
  LongTermPointEventHardModeDialog.prototype.setMessageId = function () {
    var e = "dialog_longPointsEvent_hardMode_info";
    var t = h.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT);
    var i = C.LongTermPointEventSkin.getTypeById(t.skinId);
    if (i != C.LongTermPointEventSkin.DEFAULT) {
      e += "_" + i.name;
    }
    this.registerTextFields(this.dialogDisp.txt_message, e);
  };
  LongTermPointEventHardModeDialog.prototype.registerTextFields = function (e, t) {
    this.textFieldManager.registerTextField(e, new u.LocalizedTextVO(t));
  };
  LongTermPointEventHardModeDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_showMe:
        this.openLongTermPointEventDialogOnISOMap();
        break;
      case this.dialogDisp.btn_yes:
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  LongTermPointEventHardModeDialog.prototype.openLongTermPointEventDialogOnISOMap = function () {
    if (h.CastleModel.specialEventData.isEventActive(r.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT)) {
      if (m.IsoHelper.view.isInIsoScreen && f.Iso.data.areaData.isMyHomeCastle) {
        a.CommandController.instance.executeCommand(O.IngameClientCommands.OPEN_LONGTERM_POINT_EVENT_DIALOG);
      } else {
        this.controller.addEventListener(p.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onServerMessageArrived));
        h.CastleModel.smartfoxClient.sendCommandVO(new d.C2SJoinCastleVO(d.C2SJoinCastleVO.MY_CASTLE, l.WorldClassic.KINGDOM_ID));
      }
    } else {
      this.showNoLongTermPointEventRunningError();
      this.hide();
    }
  };
  LongTermPointEventHardModeDialog.prototype.onServerMessageArrived = function (e) {
    this.controller.removeEventListener(p.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onServerMessageArrived));
    if (h.CastleModel.specialEventData.isEventActive(r.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT)) {
      a.CommandController.instance.executeCommand(O.IngameClientCommands.OPEN_LONGTERM_POINT_EVENT_DIALOG);
    } else {
      this.showNoLongTermPointEventRunningError();
    }
    this.hide();
  };
  LongTermPointEventHardModeDialog.prototype.showNoLongTermPointEventRunningError = function () {
    g.CastleExternalDialog.dialogHandler.registerDefaultDialogs(E.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(c.Localize.text("generic_alert_watchout"), c.Localize.text("alert_eventendet")));
  };
  LongTermPointEventHardModeDialog.__initialize_static_members = function () {
    LongTermPointEventHardModeDialog.NAME = "LongTermPointEventHardModeDialog";
  };
  return LongTermPointEventHardModeDialog;
}(g.CastleExternalDialog);
exports.LongTermPointEventHardModeDialog = _;
var m = require("./46.js");
var f = require("./34.js");
var O = require("./29.js");
var E = require("./38.js");
s.classImplementsInterfaces(_, "ICollectableRendererList");
_.__initialize_static_members();