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
var d = require("./3.js");
var p = require("./6.js");
var h = require("./3714.js");
var g = require("./26.js");
var C = require("./4.js");
var _ = require("./42.js");
var m = require("./8.js");
var f = require("./11.js");
var O = createjs.Point;
var E = function (e) {
  function CastleNomadInvasionTauntDialog() {
    var t = this;
    t.khanLevel = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleNomadInvasionTauntDialog.NAME) || this;
  }
  n.__extends(CastleNomadInvasionTauntDialog, e);
  CastleNomadInvasionTauntDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new u.LocalizedTextVO("dialog_nomadInvasion_khanContest_tauntDialog_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_showToAlliance, new u.LocalizedTextVO("dialog_nomadInvasion_khanContest_tauntDialog_showAttack_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_taunt.txt_label, new u.LocalizedTextVO("dialog_nomadInvasion_khanContest_tauntDialog_taunt_button")).verticalAlign = _.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this._itxt_rage = this.textFieldManager.registerTextField(this.dialogDisp.txt_rage, new u.LocalizedTextVO(o.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0, 0]));
    this._itxt_rage.autoFitToBounds = true;
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.mc_rage.toolTipText = "rage";
    m.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_taunt]);
    m.ButtonHelper.initCheckBox(this.dialogDisp.checkbox_showToAlliance);
    this.showToAllianceCheckbox = m.ButtonHelper.getBasicButton(this.dialogDisp.checkbox_showToAlliance);
  };
  CastleNomadInvasionTauntDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.khanLevel = p.int(this.eventVO.khanCampLevel);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new u.LocalizedTextVO("dialog_nomadInvasion_khanContest_tauntDialog_desc", [this.khanLevel])).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_khanLevel, new u.LocalizedTextVO("kingdom_khanCamp_castleName_0"));
    this._itxt_rage.textContentVO.textReplacements = [this.eventVO.playerRage, this.eventVO.neededPlayerRage];
    this._itxt_rage.verticalAlign = _.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.showToAllianceCheckbox.deselected();
    this.showTargetCastle();
    C.CastleModel.specialEventData.addEventListener(g.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventEnd));
  };
  CastleNomadInvasionTauntDialog.prototype.showTargetCastle = function () {
    this.itxtNameSourceCastle = this.textFieldManager.registerTextField(this.dialogDisp.info_targetCastle.txt_castleName, new d.TextVO(""));
    this.itxtNameSourceCastle.autoFitToBounds = true;
    this.itxtNameSourceCastle.verticalAlign = _.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    var e = C.CastleModel.userData.castleList.getMainCastleByKingdomID(l.WorldClassic.KINGDOM_ID);
    this.itxtNameSourceCastle.textContentVO.stringValue = e.areaNameString;
    this.itxtNameSourceCastle.verticalAlign = _.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.info_targetCastle.icon_castle);
    this.dialogDisp.info_targetCastle.icon_castle.addChild(b.WorldmapObjectIconHelper.drawMapObjectIcon(e, CastleNomadInvasionTauntDialog.CASTLE_SIZE, true, false, false, "", null));
  };
  CastleNomadInvasionTauntDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    C.CastleModel.specialEventData.removeEventListener(g.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventEnd));
  };
  CastleNomadInvasionTauntDialog.prototype.onEventEnd = function (e) {
    if (e.specialEventVO.eventId == r.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE) {
      this.hide();
    }
  };
  CastleNomadInvasionTauntDialog.prototype.onClick = function (t) {
    if (m.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.checkbox_showToAlliance:
          this.showToAllianceCheckbox.toggleSelected();
          break;
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          y.CastleDialogHandler.getInstance().showHelper("", c.Localize.text("help_nomadInvasion_khanContest_tauntDialog"));
          break;
        case this.dialogDisp.btn_taunt:
          this.tauntKhan();
      }
      e.prototype.onClick.call(this, t);
    }
  };
  CastleNomadInvasionTauntDialog.prototype.tauntKhan = function () {
    C.CastleModel.smartfoxClient.sendCommandVO(new h.C2SLaunchTauntAttackVO(this.showToAllianceCheckbox.isSelected, this.eventVO.eventId));
    this.hide();
  };
  Object.defineProperty(CastleNomadInvasionTauntDialog.prototype, "eventVO", {
    get: function () {
      return C.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
    },
    enumerable: true,
    configurable: true
  });
  CastleNomadInvasionTauntDialog.__initialize_static_members = function () {
    CastleNomadInvasionTauntDialog.NAME = "CastleNomadInvasionTaunt";
    CastleNomadInvasionTauntDialog.CASTLE_SIZE = new O(70, 70);
  };
  return CastleNomadInvasionTauntDialog;
}(f.CastleExternalDialog);
exports.CastleNomadInvasionTauntDialog = E;
var y = require("./9.js");
var b = require("./70.js");
s.classImplementsInterfaces(E, "ICollectableRendererList");
E.__initialize_static_members();