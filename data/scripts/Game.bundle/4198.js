Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./148.js");
var d = require("./26.js");
var p = require("./13.js");
var h = require("./4.js");
var g = require("./42.js");
var C = require("./8.js");
var _ = require("./11.js");
var m = createjs.Point;
var f = function (e) {
  function SamuraiDaimyoTauntDialog() {
    return e.call(this, SamuraiDaimyoTauntDialog.NAME) || this;
  }
  n.__extends(SamuraiDaimyoTauntDialog, e);
  SamuraiDaimyoTauntDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(p.TextHelper.toUpperCaseLocaSafe(c.Localize.text("dialog_tauntDaimyo_header"))));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new l.LocalizedTextVO("dialog_tauntDaimyo_desc"));
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    C.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel], I.ClickFeedbackButton);
  };
  SamuraiDaimyoTauntDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.showSourceCastle();
    this.showTargetCastle();
    h.CastleModel.specialEventData.addEventListener(d.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventEnd));
  };
  SamuraiDaimyoTauntDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    h.CastleModel.specialEventData.removeEventListener(d.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventEnd));
  };
  SamuraiDaimyoTauntDialog.prototype.showSourceCastle = function () {
    this.itxtNameSourceCastle = this.textFieldManager.registerTextField(this.dialogDisp.info_sourceCastle.txt_castleName, new r.TextVO(""));
    this.itxtNameSourceCastle.autoFitToBounds = true;
    this.itxtNameSourceCastle.verticalAlign = g.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    var e = h.CastleModel.daimyoCastleXmlData.getDaimyoCastle(this.dialogProperties.townshipMapObjectVO.daimyoXmlVO.rank, -1, this.dialogProperties.townshipMapObjectVO.eventAutoScalingCampID);
    var t = new O.DaimyoCastleMapObjectVO();
    t.daimyoXmlVO = e;
    t.ownerInfo = h.CastleModel.otherPlayerData.getOwnerInfoVO(u.ClientConstNPCs.NPC_ID_DAIMYO_CASTLE);
    this.itxtNameSourceCastle.textContentVO.stringValue = t.areaNameString;
    this.itxtNameSourceCastle.verticalAlign = g.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.icon_sourceCastle);
    this.dialogDisp.icon_sourceCastle.addChild(b.WorldmapObjectIconHelper.drawMapObjectIcon(t, SamuraiDaimyoTauntDialog.CASTLE_SIZE, true, false, false, "", null));
    y.CrestHelper.setCrestGraphics(this.dialogDisp.mc_crest_source, t.ownerInfo.crest, null, true);
  };
  SamuraiDaimyoTauntDialog.prototype.showTargetCastle = function () {
    this.itxtNameTargetCastle = this.textFieldManager.registerTextField(this.dialogDisp.info_targetCastle.txt_castleName, new r.TextVO(""));
    this.itxtNameTargetCastle.autoFitToBounds = true;
    this.itxtNameTargetCastle.verticalAlign = g.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.itxtNameTargetCastle.textContentVO.stringValue = this.dialogProperties.townshipMapObjectVO.areaNameString;
    this.itxtNameTargetCastle.verticalAlign = g.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.icon_targetCastle);
    this.dialogDisp.icon_targetCastle.addChild(b.WorldmapObjectIconHelper.drawMapObjectIcon(this.dialogProperties.townshipMapObjectVO, SamuraiDaimyoTauntDialog.CASTLE_SIZE, true, false, false, "", null));
    y.CrestHelper.setCrestGraphics(this.dialogDisp.mc_crest_target, this.dialogProperties.townshipMapObjectVO.ownerInfo.crest, null, true);
  };
  SamuraiDaimyoTauntDialog.prototype.onEventEnd = function (e) {
    if (e.specialEventVO.eventId == s.EventConst.EVENTTYPE_SAMURAI_INVASION) {
      this.hide();
    }
  };
  SamuraiDaimyoTauntDialog.prototype.onClick = function (t) {
    if (C.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          E.CastleDialogHandler.getInstance().showHelper("", c.Localize.text("help_tauntDaimyo"));
          break;
        case this.dialogDisp.btn_ok:
          this.tauntDaimyo();
      }
      e.prototype.onClick.call(this, t);
    }
  };
  SamuraiDaimyoTauntDialog.prototype.tauntDaimyo = function () {
    _.CastleExternalDialog.dialogHandler.registerDefaultDialogs(D.SamuraiDaimyoBoosterSelectDialog, this.properties);
    this.hide();
  };
  Object.defineProperty(SamuraiDaimyoTauntDialog.prototype, "eventVO", {
    get: function () {
      return h.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_SAMURAI_INVASION);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoTauntDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  SamuraiDaimyoTauntDialog.__initialize_static_members = function () {
    SamuraiDaimyoTauntDialog.CASTLE_SIZE = new m(80, 70);
  };
  SamuraiDaimyoTauntDialog.NAME = "SamuraiDaimyoTaunt";
  return SamuraiDaimyoTauntDialog;
}(_.CastleExternalDialog);
exports.SamuraiDaimyoTauntDialog = f;
var O = require("./527.js");
var E = require("./9.js");
var y = require("./61.js");
var b = require("./70.js");
var D = require("./1779.js");
var I = require("./36.js");
a.classImplementsInterfaces(f, "ICollectableRendererList");
f.__initialize_static_members();