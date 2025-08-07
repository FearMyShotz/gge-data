Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./1234.js");
var p = require("./892.js");
var h = require("./37.js");
var g = require("./21.js");
var C = require("./13.js");
var _ = require("./4.js");
var m = require("./27.js");
var f = require("./701.js");
var O = require("./8.js");
var E = require("./11.js");
var y = require("./425.js");
var b = createjs.Point;
var D = function (e) {
  function CastleABGTowerDetailAllianceDialog() {
    return e.call(this, CastleABGTowerDetailAllianceDialog.NAME) || this;
  }
  n.__extends(CastleABGTowerDetailAllianceDialog, e);
  CastleABGTowerDetailAllianceDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    O.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_support, this.dialogDisp.btn_defence, this.dialogDisp.btn_jumpTo], M.ClickFeedbackButtonHover);
  };
  CastleABGTowerDetailAllianceDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_AllianceTower_towerDetails_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_players, new l.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_AllianceTower_connectedPlayers_header")));
    this.dialogDisp.icon_abg_tower_points_M.toolTipText = "dialog_beyondTheHorizon_AllianceTower_tower_Statuette_tooltip";
    this.dialogDisp.icon_soldiercount.toolTipText = "dialog_beyondTheHorizon_AllianceTower_tower_troopsStationed_tooltip";
    this.tx_buff = this.textFieldManager.registerTextField(this.dialogDisp.txt_buff, new l.TextVO(""));
    new v.ABGTowerInfoComponent(this.dialogDisp, new b(90, 150)).updateTowerInfo(this.dialogProperties.targetTowerVO);
    this.dialogDisp.btn_support.toolTipText = "dialog_beyondTheHorizon_AllianceTower_tower_stationTroops_tooltip";
    this.dialogDisp.btn_defence.toolTipText = "dialog_beyondTheHorizon_AllianceTower_tower_towerDefense_tooltip";
    this.dialogDisp.btn_jumpTo.toolTipText = "dialog_beyondTheHorizon_AllianceTower_tower_jumpTower_tooltip";
    this.buffInfo = null;
    this.towerSupportButton = new A.ButtonSupportDefenceComponent(this.dialogDisp.btn_support.basicButton);
    this.towerDefenceButton = new S.ButtonDefenceComponent(this.dialogDisp.btn_defence.basicButton);
    r.BasicModel.smartfoxClient.sendCommandVO(new d.C2SAllianceBattleGroundGetTowerCastlesInfoVO(this.dialogProperties.targetTowerVO.absAreaPosX, this.dialogProperties.targetTowerVO.absAreaPosY));
    r.BasicModel.smartfoxClient.sendCommandVO(new p.C2SGetAllianceTowerBuffInfoVO(new b(this.dialogProperties.targetTowerVO.absAreaPosX, this.dialogProperties.targetTowerVO.absAreaPosY), this.dialogProperties.targetTowerVO.ownerInfo.allianceID));
    this.controller.addEventListener(h.CastleServerMessageArrivedEvent.ABG_TOWER_CASTLES_INFO, this.bindFunction(this.onCastleInfoGot));
    this.controller.addEventListener(h.CastleServerMessageArrivedEvent.ABG_TOWERS_BUFF_INFO, this.bindFunction(this.onBuffInfoGot));
    _.CastleModel.timerData.addEventListener(g.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  CastleABGTowerDetailAllianceDialog.prototype.onBuffInfoGot = function (e) {
    this.buffInfo = e.params[0];
  };
  CastleABGTowerDetailAllianceDialog.prototype.onCastleInfoGot = function (e) {
    this.castles = [];
    for (var t = 0; t < e.params.length; t++) {
      this.castles.push(e.params[t]);
    }
    this.fillList();
  };
  CastleABGTowerDetailAllianceDialog.prototype.onTimer = function (e) {
    if (this.buffInfo) {
      if (this.buffInfo.isActive) {
        this.tx_buff.textContentVO = new c.LocalizedTextVO("dialog_beyondTheHorizon_AllianceTower_buffStatus_active", [m.CastleTimeStringHelper.getShortTimeString(_.CastleModel.allianceBattlegroundData.remainingSecondsTillRevive)]);
      } else {
        this.tx_buff.textContentVO = new c.LocalizedTextVO("dialog_beyondTheHorizon_AllianceTower_buffStatus_inactive");
      }
      this.tx_buff.color = this.buffInfo.isActive ? 15974986 : 15388850;
    }
  };
  CastleABGTowerDetailAllianceDialog.prototype.fillList = function () {
    this.towerSupportButton.targetWMO = this.dialogProperties.targetTowerVO;
    this.towerSupportButton.initAsDialogButton();
    this.towerDefenceButton.targetWMO = this.dialogProperties.targetTowerVO;
    this.towerDefenceButton.init();
    this.supportCastleButtons = [];
    for (var e = 0; e < 5; e++) {
      var t = this.dialogDisp["item" + e];
      if (this.dialogProperties.targetTowerVO.connections.length > e) {
        a.MovieClipHelper.clearMovieClip(t.mc_castle);
        t.visible = true;
        t.mc_castle.addChild(L.WorldmapObjectIconHelper.drawMapObjectIcon(this.castles[e], new b(64, 46), true, false, true, "panel_action_jumpTo"));
        this.textFieldManager.registerTextField(t.txt_name, new l.TextVO(this.castles[e].ownerInfo.playerName));
        this.textFieldManager.registerTextField(t.txt_points, new u.LocalizedNumberVO(this.castles[e].abgPlayerTowerPoints));
        t.mc_pointIcon.toolTipText = "stats_contributeAllianceStatuette";
        var i = new T.ABGTowerConnectionStateComponent(T.ABGTowerConnectionStateComponent.TYPE_DIALOG, T.ABGTowerConnectionStateComponent.SIZE_DIALOG_BIG, true);
        var n = new f.ABGTowerConnectionVO();
        n.fillFromConnectionValues([this.castles[e].absAreaPosX, this.castles[e].absAreaPosY, this.castles[e].ownerInfo.playerName, this.castles[e].isABGTowerAttackable ? 1 : 0]);
        i.setConnection(n);
        a.MovieClipHelper.clearMovieClip(t.mc_connection);
        t.mc_connection.addChild(i.disp);
        O.ButtonHelper.initButtons([t.btn_support], M.ClickFeedbackButtonHover);
        var o = new A.ButtonSupportDefenceComponent(t.btn_support.basicButton);
        o.targetWMO = this.castles[e];
        o.initAsDialogButton();
        this.supportCastleButtons.push(o);
        t.mc_pointIcon.tootTipText = "dialog_beyondTheHorizon_AllianceTower_connectedPlayers_header";
      } else {
        t.visible = false;
      }
    }
  };
  CastleABGTowerDetailAllianceDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    this.supportCastleButtons.forEach(function (e) {
      var t = [];
      for (var i = 1; i < arguments.length; i++) {
        t[i - 1] = arguments[i];
      }
      e.destroy();
    });
    this.towerSupportButton.destroy();
    _.CastleModel.timerData.removeEventListener(g.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this.controller.removeEventListener(h.CastleServerMessageArrivedEvent.ABG_TOWER_CASTLES_INFO, this.bindFunction(this.onCastleInfoGot));
    this.controller.removeEventListener(h.CastleServerMessageArrivedEvent.ABG_TOWERS_BUFF_INFO, this.bindFunction(this.onBuffInfoGot));
  };
  CastleABGTowerDetailAllianceDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (O.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_bookmark:
          E.CastleExternalDialog.dialogHandler.registerDefaultDialogs(P.CastleWorldmapBookmarkSetDialog, new y.CastleWorldmapBookmarkSetDialogProperties(this.dialogProperties.targetTowerVO, P.CastleWorldmapBookmarkSetDialog.CAT_PERSONAL_BOOKMARK));
          break;
        case this.dialogDisp.btn_jumpTo:
          s.CommandController.instance.executeCommand(I.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, [this.dialogProperties.targetTowerVO.kingdomID, this.dialogProperties.targetTowerVO.absAreaPos.x, this.dialogProperties.targetTowerVO.absAreaPos.y]);
          break;
        case this.dialogDisp.btn_support:
          this.towerSupportButton.onClick();
          break;
        case this.dialogDisp.btn_defence:
          this.towerDefenceButton.onClick();
          break;
        case this.dialogDisp.item0.btn_support:
          this.supportCastleButtons[0].onClick();
          break;
        case this.dialogDisp.item1.btn_support:
          this.supportCastleButtons[1].onClick();
          break;
        case this.dialogDisp.item2.btn_support:
          this.supportCastleButtons[2].onClick();
          break;
        case this.dialogDisp.item3.btn_support:
          this.supportCastleButtons[3].onClick();
          break;
        case this.dialogDisp.item4.btn_support:
          this.supportCastleButtons[4].onClick();
      }
    }
  };
  Object.defineProperty(CastleABGTowerDetailAllianceDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleABGTowerDetailAllianceDialog.NAME = "CastleABGTowerDetailsAlliance";
  return CastleABGTowerDetailAllianceDialog;
}(E.CastleExternalDialog);
exports.CastleABGTowerDetailAllianceDialog = D;
var I = require("./29.js");
var T = require("./424.js");
var v = require("./581.js");
var S = require("./1235.js");
var A = require("./1402.js");
var L = require("./70.js");
var P = require("./441.js");
var M = require("./20.js");
o.classImplementsInterfaces(D, "ICollectableRendererList");