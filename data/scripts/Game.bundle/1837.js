Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./3984.js");
var g = require("./264.js");
var C = require("./1838.js");
var _ = require("./37.js");
var m = require("./139.js");
var f = require("./207.js");
var O = require("./13.js");
var E = require("./29.js");
var y = require("./4.js");
var b = require("./9.js");
var D = require("./20.js");
var I = require("./76.js");
var T = require("./78.js");
var v = require("./77.js");
var S = require("./8.js");
var A = require("./11.js");
var L = require("./602.js");
var P = require("./603.js");
var M = require("./1839.js");
var R = require("./3985.js");
var V = require("./3986.js");
var x = function (e) {
  function AdvisorAttackOverviewDialog() {
    return e.call(this, AdvisorAttackOverviewDialog.NAME) || this;
  }
  n.__extends(AdvisorAttackOverviewDialog, e);
  AdvisorAttackOverviewDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    S.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_cancelAll, this.dialogDisp.mc_idle.btn_selectOnMap], D.ClickFeedbackButtonHover);
    a.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.txt_title, new u.TextVO(O.TextHelper.toUpperCaseLocaSafeTextId("title_advisor_AttackOverview")));
    a.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.mc_idle.txt_title, new u.TextVO(O.TextHelper.toUpperCaseLocaSafeTextId("attack_setUp")));
    a.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.btn_cancelAll.txt_label, new u.TextVO(O.TextHelper.toUpperCaseLocaSafeTextId("button_advisorCancelAll")));
    a.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.mc_speechBubble.txt_copy, new p.LocalizedTextVO("advisor_speechBubble_nomad")).autoFitToBounds = true;
    this.attackSummaryComponent = new M.AdvisorAttackOverviewComponent(this.dialogDisp.mc_summary, false);
    var i = new I.InfiniteScrollListClips(this.dialogDisp.mc_active).addMaskMc(this.dialogDisp.mc_active.mc_items.mask);
    var n = new v.InfiniteScrollListOptions(R.AdvisorAttackOverviewScrollItem, "NomadAdvisorOverviewAttackItem", AdvisorAttackOverviewDialog.NAME);
    this.scrollComponent = new T.InfiniteScrollListComponent(i, n);
    this.dialogDisp.mc_char.mouseChildren = false;
  };
  AdvisorAttackOverviewDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    a.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.mc_idle.btn_selectOnMap.txt_label, new u.TextVO(O.TextHelper.toUpperCaseLocaSafeTextId("button_SelectCamp_" + f.AdvisorAttackHelper.getTextIDSuffix(this.advisorType))));
    this.controller.addEventListener(C.AdvisorAttackOverviewEvent.ADVISOR_ATTACK_OVERVIEW_UPDATE, this.bindFunction(this.onAdvisorOverviewReceived));
    this.controller.addEventListener(m.CastleArmyDataEvent.MOVEMENTS_CHANGED, this.bindFunction(this.onMovementsUpdated));
    this.onMovementsUpdated();
    this.dialogDisp.mc_speechBubble.visible = false;
    this.dialogDisp.mc_char.mc_selected.visible = false;
  };
  AdvisorAttackOverviewDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.controller.removeEventListener(C.AdvisorAttackOverviewEvent.ADVISOR_ATTACK_OVERVIEW_UPDATE, this.bindFunction(this.onAdvisorOverviewReceived));
    this.controller.removeEventListener(m.CastleArmyDataEvent.MOVEMENTS_CHANGED, this.bindFunction(this.onMovementsUpdated));
    this.controller.removeEventListener(_.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onGAAarrived));
    if (this.scrollComponent) {
      this.scrollComponent.onHide();
    }
    if (this.attackSummaryComponent) {
      this.attackSummaryComponent.onHide();
    }
  };
  AdvisorAttackOverviewDialog.prototype.onAdvisorOverviewReceived = function (e) {
    this.attackSummaryComponent.update(e.advisorAttackOverviewVO);
  };
  AdvisorAttackOverviewDialog.prototype.onMovementsUpdated = function (e = null) {
    var t = this.getAdvisorMovements();
    if (t.length == 0) {
      this.dialogDisp.mc_active.visible = false;
      this.dialogDisp.mc_idle.visible = true;
      this.dialogDisp.btn_cancelAll.visible = false;
      this.scrollComponent.onHide();
    } else {
      this.dialogDisp.mc_active.visible = true;
      this.dialogDisp.mc_idle.visible = false;
      this.dialogDisp.btn_cancelAll.visible = this.getCancellableAdvisorMovements().length > 0;
      this.scrollComponent.onShow();
      var i = t.map(function (e) {
        return new V.AdvisorAttackOverviewScrollItemVO(e);
      });
      this.scrollComponent.updateWithNewData(i, !!e);
    }
    y.CastleModel.smartfoxClient.sendCommandVO(new h.C2SAdvisorAttackOverviewVO());
  };
  AdvisorAttackOverviewDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (S.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          A.CastleExternalDialog.dialogHandler.showHelper("", d.Localize.text("description_advisorInformation_" + f.AdvisorAttackHelper.getTextIDSuffix(this.advisorType)));
          break;
        case this.dialogDisp.btn_cancelAll:
          this.cancelAll();
          break;
        case this.dialogDisp.mc_idle.btn_selectOnMap:
          this.selectOnMap();
      }
    }
  };
  AdvisorAttackOverviewDialog.prototype.cancelAll = function () {
    b.CastleDialogHandler.getInstance().registerDefaultDialogs(L.AdvisorAttackOverviewCancelDialog, new P.AdvisorAttackOverviewCancelDialogProperties(this.getCancellableAdvisorMovements()));
  };
  AdvisorAttackOverviewDialog.prototype.selectOnMap = function () {
    var e = y.CastleModel.userData.castleList.getMainCastleByKingdomID(c.WorldClassic.KINGDOM_ID);
    o.CommandController.instance.executeCommand(E.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, [e.kingdomID, e.absAreaPosX, e.absAreaPosY]);
    this.controller.addEventListener(_.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onGAAarrived));
  };
  AdvisorAttackOverviewDialog.prototype.onGAAarrived = function (e) {
    this.controller.removeEventListener(_.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onGAAarrived));
    y.CastleModel.smartfoxClient.sendCommandVO(new g.C2SFindNextMapObjectVO(l.WorldConst.AREA_TYPE_NOMAD_CAMP, c.WorldClassic.KINGDOM_ID, -1, -1, r.DungeonConst.BASIC_NOMAD_CAMP_PLAYER_ID));
  };
  AdvisorAttackOverviewDialog.prototype.getAdvisorMovements = function () {
    return y.CastleModel.armyData.getAdvisorMovements(this.advisorType);
  };
  AdvisorAttackOverviewDialog.prototype.getCancellableAdvisorMovements = function () {
    return this.getAdvisorMovements().filter(function (e) {
      return !e.advisorIsLastAttack;
    });
  };
  AdvisorAttackOverviewDialog.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (t.target == this.dialogDisp.mc_char) {
      this.dialogDisp.mc_speechBubble.visible = !this.dialogDisp.mc_speechBubble.visible;
      this.dialogDisp.mc_char.mc_selected.visible = this.dialogDisp.mc_speechBubble.visible;
    }
  };
  AdvisorAttackOverviewDialog.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    if (t.target == this.dialogDisp.mc_char) {
      this.dialogDisp.mc_speechBubble.visible = false;
      this.dialogDisp.mc_char.mc_selected.visible = false;
    }
  };
  AdvisorAttackOverviewDialog.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      var e = 1;
      if (this.disp.stage.stageHeight < e * 600) {
        e = this.disp.stage.stageHeight / 600;
      }
      e = Math.min(e, 1);
      this.disp.x = this.disp.stage.stageWidth * 0.5;
      this.disp.y = this.disp.stage.stageHeight * 0.5;
      this.disp.scaleX = this.disp.scaleY = e;
      this.disp.x = this.disp.x | 0;
      this.disp.y = this.disp.y | 0;
      this.dialogDisp.mc_speechBubble.x = Math.max(-570, -this.disp.stage.stageWidth / 2 + 160);
      this.dialogDisp.mc_char.x = Math.max(-570, -this.disp.stage.stageWidth / 2 + 157);
      this.dialogDisp.mc_char.visible = this.disp.stage.stageWidth >= 1350;
      this.dialogDisp.mc_char.mc_selected.visible &= this.dialogDisp.mc_speechBubble.visible &= this.dialogDisp.mc_char.visible;
    }
  };
  Object.defineProperty(AdvisorAttackOverviewDialog.prototype, "advisorType", {
    get: function () {
      return this.dialogProperties.advisorType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvisorAttackOverviewDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AdvisorAttackOverviewDialog.NAME = "NomadAdvisorOverviewExt";
  return AdvisorAttackOverviewDialog;
}(A.CastleExternalDialog);
exports.AdvisorAttackOverviewDialog = x;
s.classImplementsInterfaces(x, "ICollectableRendererList");