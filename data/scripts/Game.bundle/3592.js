Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./51.js");
var p = require("./21.js");
var h = require("./139.js");
var g = require("./15.js");
var C = require("./4.js");
var _ = require("./24.js");
var m = require("./106.js");
var f = require("./11.js");
var O = createjs.Point;
var E = function (e) {
  function CastlePlaguemonkInfoDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastlePlaguemonkInfoDialog.NAME) || this;
  }
  n.__extends(CastlePlaguemonkInfoDialog, e);
  CastlePlaguemonkInfoDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close, this.dialogDisp.btn_help]);
    this._movementDetails = new b.CastleMovementDetailsComponent(this.dialogDisp.mc_movementInfo);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new u.LocalizedTextVO("dialog_plagueMonkInfo_description"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new u.LocalizedTextVO("dialog_spy_titlePlague")).verticalAlign = a.GGSVerticalAlign.MIDDLE;
    this.itxt_spyCount = this.textFieldManager.registerTextField(this.dialogDisp.mc_spyCount.txt_value, new c.LocalizedNumberVO(0));
    this.itxt_spyRisk = this.textFieldManager.registerTextField(this.dialogDisp.mc_spyRisk.txt_value, new u.LocalizedTextVO(s.GenericTextIds.VALUE_PERCENTAGE));
    this.itxt_spyEffect = this.textFieldManager.registerTextField(this.dialogDisp.mc_spyEffect.txt_value, new u.LocalizedTextVO(s.GenericTextIds.VALUE_PERCENTAGE));
    this.dialogDisp.mc_spyCount.toolTipText = "spy_dialog_plagueMonkCount";
    this.dialogDisp.mc_spyRisk.toolTipText = "spy_dialog_spyRisk";
    this.dialogDisp.mc_char.gotoAndStop(2);
    this.plagueIconSize = new O(this.dialogDisp.mc_spyCount.mc_icon.width, this.dialogDisp.mc_spyCount.mc_icon.height);
    this.dialogDisp.mc_spyCount.mc_icon.gotoAndStop(2);
    var i = new _.CastleGoodgameExternalClip("Icon_PlaqueC2R", o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Icon_PlaqueC2R"), null, 0, false);
    this.dialogDisp.mc_spyCount.mc_icon.addChild(i);
    i.doWhenLoaded(this.bindFunction(this.setIconSizeWhenLoaded));
    this.dialogDisp.mc_movementInfo.btn_retreat.visible = false;
    this.dialogDisp.btn_help.visible = false;
    this.dialogDisp.btn_help.toolTipText = "generic_help";
  };
  CastlePlaguemonkInfoDialog.prototype.setIconSizeWhenLoaded = function () {
    var e = this.dialogDisp.mc_spyCount.mc_icon.getChildAt(0);
    e.width = this.plagueIconSize.x;
    e.height = this.plagueIconSize.y;
    e.doCache();
  };
  CastlePlaguemonkInfoDialog.prototype.applyPropertiesLoaded = function (e = null) {
    m.CharacterHelper.createCharacterBig(d.ClientConstCharacter.CHAR_ID_PLAGUE_MONK, this.dialogDisp.mc_char, 300, 160);
    this.itxt_spyCount.textContentVO.numberValue = this.spyMapmovementVO.plagueMonkCount;
    this.itxt_spyRisk.textContentVO.textReplacements = [this.spyMapmovementVO.plagueMonkRisk];
    this.dialogDisp.mc_spyEffect.mc_icon.gotoAndStop(2);
    this.itxt_spyEffect.textContentVO.textReplacements = [this.spyMapmovementVO.plagueDamage];
    this.dialogDisp.mc_spyEffect.toolTipText = "spy_dialog_sabotageDamage";
    C.CastleModel.timerData.addEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onArmyDataUpdated));
    g.CastleBasicController.getInstance().addEventListener(h.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onArmyRemoved));
    this._movementDetails.initComponent(this.spyMapmovementVO, this.bindFunction(this.hide));
  };
  CastlePlaguemonkInfoDialog.prototype.onArmyRemoved = function (e) {
    if (e.mapmovementVO.objectId == this.spyMapmovementVO.objectId) {
      this.hide();
    }
  };
  CastlePlaguemonkInfoDialog.prototype.onArmyDataUpdated = function (e) {
    if (this.spyMapmovementVO.getTimeUnitMovmentReachTargetInSeconds() < 2) {
      this.hide();
    } else {
      this._movementDetails.updateComponent();
    }
  };
  CastlePlaguemonkInfoDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        y.CastleDialogHandler.getInstance().showHelper("", l.Localize.text("help_spyMove"));
    }
  };
  CastlePlaguemonkInfoDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this._movementDetails.destroy();
    C.CastleModel.timerData.removeEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onArmyDataUpdated));
    g.CastleBasicController.getInstance().removeEventListener(h.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onArmyRemoved));
  };
  Object.defineProperty(CastlePlaguemonkInfoDialog.prototype, "spyMapmovementVO", {
    get: function () {
      return this.dialogProperties.mapMovementVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePlaguemonkInfoDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePlaguemonkInfoDialog.__initialize_static_members = function () {
    CastlePlaguemonkInfoDialog.NAME = "CastleSpyInfoEx";
  };
  return CastlePlaguemonkInfoDialog;
}(f.CastleExternalDialog);
exports.CastlePlaguemonkInfoDialog = E;
var y = require("./9.js");
var b = require("./469.js");
r.classImplementsInterfaces(E, "ICollectableRendererList");
E.__initialize_static_members();