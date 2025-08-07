Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./13.js");
var c = require("./29.js");
var u = require("./580.js");
var d = require("./8.js");
var p = require("./11.js");
var h = createjs.Point;
var g = require("./20.js");
var C = function (e) {
  function CastleABGTowerReassignmentDialog() {
    return e.call(this, CastleABGTowerReassignmentDialog.NAME) || this;
  }
  n.__extends(CastleABGTowerReassignmentDialog, e);
  CastleABGTowerReassignmentDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    d.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_jumpTo], g.ClickFeedbackButtonHover);
  };
  CastleABGTowerReassignmentDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_AllianceTower_towerReshuffle_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO("dialog_beyondTheHorizon_AllianceTower_towerReshuffle_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_players, new s.LocalizedTextVO("players"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_points_copy, new s.LocalizedTextVO("dialog_beyondTheHorizon_AllianceTower_towerReshuffle_statuette"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_units_copy, new s.LocalizedTextVO("dialog_beyondTheHorizon_AllianceTower_towerReshuffle_troopLimit"));
    this.dialogDisp.btn_jumpTo.toolTipText = "dialog_beyondTheHorizon_AllianceTower_tower_jumpTower_tooltip";
    this.towerInfo = new u.ABGTowerInfoComponent(this.dialogDisp, new h(166, 260));
    this.towerInfo.updateTowerInfo(this.dialogProperties.targetTowerVO);
    this.towerInfo.onShow();
  };
  CastleABGTowerReassignmentDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    if (this.towerInfo) {
      this.towerInfo.onHide();
    }
  };
  CastleABGTowerReassignmentDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
        break;
      case this.dialogDisp.btn_jumpTo:
        o.CommandController.instance.executeCommand(c.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, [this.dialogProperties.targetTowerVO.kingdomID, this.dialogProperties.targetTowerVO.absAreaPos.x, this.dialogProperties.targetTowerVO.absAreaPos.y]);
    }
  };
  Object.defineProperty(CastleABGTowerReassignmentDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleABGTowerReassignmentDialog.NAME = "CastleABGTowerReassignment";
  return CastleABGTowerReassignmentDialog;
}(p.CastleExternalDialog);
exports.CastleABGTowerReassignmentDialog = C;
a.classImplementsInterfaces(C, "ICollectableRendererList");