Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./3.js");
var c = require("./1234.js");
var u = require("./37.js");
var d = require("./13.js");
var p = require("./699.js");
var h = require("./8.js");
var g = require("./11.js");
var C = require("./425.js");
var _ = createjs.Point;
var m = function (e) {
  function CastleABGTowerDetailDialog() {
    return e.call(this, CastleABGTowerDetailDialog.NAME) || this;
  }
  n.__extends(CastleABGTowerDetailDialog, e);
  CastleABGTowerDetailDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    h.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_attack, this.dialogDisp.btn_bookmark, this.dialogDisp.btn_jumpTo], I.ClickFeedbackButtonHover);
  };
  CastleABGTowerDetailDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_AllianceTower_towerDetails_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_players, new l.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_AllianceTower_connectedPlayers_header")));
    new E.ABGTowerInfoComponent(this.dialogDisp, new _(90, 150)).updateTowerInfo(this.dialogProperties.targetTowerVO);
    this.dialogDisp.mc_pointIcon.toolTipText = "dialog_beyondTheHorizon_AllianceTower_tower_Statuette_tooltip";
    this.dialogDisp.btn_attack.toolTipText = "ringmenu_military_menu_attack";
    this.dialogDisp.btn_bookmark.toolTipText = "ringmenu_markLocation";
    this.dialogDisp.btn_jumpTo.toolTipText = "dialog_beyondTheHorizon_AllianceTower_tower_jumpTower_tooltip";
    this.towerAttackButton = new y.ButtonAttackComponent(this.dialogDisp.btn_attack.basicButton);
    r.BasicModel.smartfoxClient.sendCommandVO(new c.C2SAllianceBattleGroundGetTowerCastlesInfoVO(this.dialogProperties.targetTowerVO.absAreaPosX, this.dialogProperties.targetTowerVO.absAreaPosY));
    this.controller.addEventListener(u.CastleServerMessageArrivedEvent.ABG_TOWER_CASTLES_INFO, this.bindFunction(this.onCastleInfoGot));
  };
  CastleABGTowerDetailDialog.prototype.onCastleInfoGot = function (e) {
    this.castles = [];
    for (var t = 0; t < e.params.length; t++) {
      this.castles.push(e.params[t]);
    }
    this.fillList();
  };
  CastleABGTowerDetailDialog.prototype.fillList = function () {
    this.towerAttackButton.targetWMO = this.dialogProperties.targetTowerVO;
    this.towerAttackButton.initAttackButton(true);
    this.attackCastleButtons = [];
    for (var e = 0; e < 5; e++) {
      var t = this.dialogDisp["item" + e];
      if (this.castles.length > e) {
        a.MovieClipHelper.clearMovieClip(t.mc_castle);
        t.visible = true;
        t.mc_castle.addChild(b.WorldmapObjectIconHelper.drawMapObjectIcon(this.castles[e], new _(64, 46), true, false, true, "panel_action_jumpTo"));
        this.textFieldManager.registerTextField(t.txt_name, new l.TextVO(this.castles[e].ownerInfo.playerName));
        var i = new O.ABGTowerConnectionStateComponent(O.ABGTowerConnectionStateComponent.TYPE_DIALOG, O.ABGTowerConnectionStateComponent.SIZE_DIALOG_BIG, true);
        var n = new p.ABGTowerConnectionVO();
        n.fillFromConnectionValues([this.castles[e].absAreaPosX, this.castles[e].absAreaPosY, this.castles[e].ownerInfo.playerName, this.castles[e].isABGTowerAttackable ? 1 : 0]);
        i.setConnection(n);
        a.MovieClipHelper.clearMovieClip(t.mc_connect);
        t.mc_connect.addChild(i.disp);
        h.ButtonHelper.initButtons([t.btn_attack], I.ClickFeedbackButtonHover);
        var o = new y.ButtonAttackComponent(t.btn_attack.basicButton);
        o.targetWMO = this.castles[e];
        o.initAttackButton(true);
        this.attackCastleButtons.push(o);
      } else {
        t.visible = false;
      }
    }
  };
  CastleABGTowerDetailDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    if (this.attackCastleButtons) {
      this.attackCastleButtons.forEach(function (e) {
        var t = [];
        for (var i = 1; i < arguments.length; i++) {
          t[i - 1] = arguments[i];
        }
        e.destroy();
      });
    }
    this.towerAttackButton.destroy();
    this.controller.removeEventListener(u.CastleServerMessageArrivedEvent.ABG_TOWER_CASTLES_INFO, this.bindFunction(this.onCastleInfoGot));
  };
  CastleABGTowerDetailDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (h.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_bookmark:
          g.CastleExternalDialog.dialogHandler.registerDefaultDialogs(D.CastleWorldmapBookmarkSetDialog, new C.CastleWorldmapBookmarkSetDialogProperties(this.dialogProperties.targetTowerVO, D.CastleWorldmapBookmarkSetDialog.CAT_PERSONAL_BOOKMARK));
          break;
        case this.dialogDisp.btn_jumpTo:
          s.CommandController.instance.executeCommand(f.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, [this.dialogProperties.targetTowerVO.kingdomID, this.dialogProperties.targetTowerVO.absAreaPos.x, this.dialogProperties.targetTowerVO.absAreaPos.y]);
          break;
        case this.dialogDisp.btn_attack:
          this.towerAttackButton.onClick();
          break;
        case this.dialogDisp.item0.btn_attack:
          this.attackCastleButtons[0].onClick();
          break;
        case this.dialogDisp.item1.btn_attack:
          this.attackCastleButtons[1].onClick();
          break;
        case this.dialogDisp.item2.btn_attack:
          this.attackCastleButtons[2].onClick();
          break;
        case this.dialogDisp.item3.btn_attack:
          this.attackCastleButtons[3].onClick();
          break;
        case this.dialogDisp.item4.btn_attack:
          this.attackCastleButtons[4].onClick();
      }
    }
  };
  Object.defineProperty(CastleABGTowerDetailDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleABGTowerDetailDialog.NAME = "CastleABGTowerDetails";
  return CastleABGTowerDetailDialog;
}(g.CastleExternalDialog);
exports.CastleABGTowerDetailDialog = m;
var f = require("./29.js");
var O = require("./424.js");
var E = require("./580.js");
var y = require("./618.js");
var b = require("./70.js");
var D = require("./441.js");
var I = require("./20.js");
o.classImplementsInterfaces(m, "ICollectableRendererList");