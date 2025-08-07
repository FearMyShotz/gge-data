Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./23.js");
var u = require("./16.js");
var d = require("./278.js");
var p = require("./1254.js");
var h = require("./2233.js");
var g = require("./1256.js");
var C = require("./179.js");
var _ = require("./29.js");
var m = require("./4.js");
var f = require("./1266.js");
var O = require("./9.js");
var E = require("./17.js");
var y = require("./14.js");
var b = require("./40.js");
var D = require("./20.js");
var I = require("./8.js");
var T = require("./2234.js");
var v = require("./902.js");
var S = createjs.Shape;
var A = function (e) {
  function GeneralHubIntroductionHandler(t, i, n) {
    var o = e.call(this, t) || this;
    o._timeout = -1;
    o._characterAnimationHandler = i;
    o._questComponent = n;
    return o;
  }
  n.__extends(GeneralHubIntroductionHandler, e);
  GeneralHubIntroductionHandler.prototype.initGeneralIntroductionElements = function () {
    I.ButtonHelper.initButtons([this.disp.mc_introduction.mc_introduction_quest_ludwig.btn_goto, this.disp.mc_introduction.mc_introduction_quest_horatio.btn_goto, this.disp.mc_introduction.mc_introduction_quest_horatio.btn_skip], D.ClickFeedbackButtonHover);
    y.CastleComponent.textFieldManager.registerTextField(this.disp.mc_introduction.mc_introduction_quest_horatio.txt_name, new r.LocalizedTextVO("generals_characters_104_name"));
    y.CastleComponent.textFieldManager.registerTextField(this.disp.mc_introduction.mc_introduction_quest_horatio.txt_desc, new r.LocalizedTextVO("generals_introduction_guidance_01"));
    y.CastleComponent.textFieldManager.registerTextField(this.disp.mc_introduction.mc_introduction_quest_horatio.btn_goto.btn_label, new r.LocalizedTextVO("dialog_generals_inn_introduction_worldMap_button"));
    y.CastleComponent.textFieldManager.registerTextField(this.disp.mc_introduction.mc_introduction_quest_horatio.btn_skip.txt_label, new r.LocalizedTextVO("dialog_generals_inn_introduction_skip_button"));
    y.CastleComponent.textFieldManager.registerTextField(this.disp.mc_introduction.mc_introduction_quest_ludwig.txt_name, new r.LocalizedTextVO("dialog_generals_inn_character_fatKing"));
    y.CastleComponent.textFieldManager.registerTextField(this.disp.mc_introduction.mc_introduction_quest_ludwig.txt_desc, new r.LocalizedTextVO("generals_introduction_guidance_08"));
    y.CastleComponent.textFieldManager.registerTextField(this.disp.mc_introduction.mc_introduction_quest_ludwig.btn_goto.btn_label, new r.LocalizedTextVO("dialog_generals_inn_gachaPayout_freeDraw_button"));
  };
  GeneralHubIntroductionHandler.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this.handleGeneralIntroduction();
  };
  GeneralHubIntroductionHandler.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    if (this._timeout != -1) {
      window.clearTimeout(this._timeout);
    }
  };
  GeneralHubIntroductionHandler.prototype.handleGeneralIntroduction = function () {
    this.disp.mc_introduction.mc_introduction_character_horatio.visible = false;
    this.disp.mc_introduction.mc_introduction_quest_horatio.visible = false;
    this.disp.mc_introduction.mc_introduction_quest_ludwig.visible = false;
    if (this._inputBlocker) {
      this._inputBlocker.visible = false;
    }
    this.updateCinematicPlaylist();
    if (m.CastleModel.generalsIntroductionData.activeIntroductionQuest) {
      var e = m.CastleModel.generalsIntroductionData.activeIntroductionQuest.conditions[0];
      switch (e.conditionType) {
        case d.ClientConstQuestCondition.QUESTTYPE_VISIT_GENERALS_INN:
          switch (e.conditionData[0]) {
            case 1:
              this.handleCinematic1();
              break;
            case 2:
              this.handleCinematic2();
          }
          break;
        case d.ClientConstQuestCondition.QUESTTYPE_GENERAL_ASSIGN_TO_COMMANDER:
        case d.ClientConstQuestCondition.QUESTTYPE_GENERAL_ASSIGN_TO_BARON:
        case d.ClientConstQuestCondition.QUESTTYPE_DEFEAT_WOLFKING:
        case d.ClientConstQuestCondition.QUESTTYPE_DEFEND_WOLFKING:
          this.handleHoratioQuest();
          break;
        case d.ClientConstQuestCondition.QUESTTYPE_GACHA_DRAW:
          this.handleFatKingQuest();
          break;
        default:
          this.enableUIComponents(true);
      }
    } else {
      this.enableUIComponents(true);
    }
  };
  GeneralHubIntroductionHandler.prototype.handleCinematic1 = function () {
    var e = this;
    this.hideCharacters();
    this._questComponent.hide();
    this.enableUIComponents(false);
    c.TweenMax.fromTo(this.disp.mc_door_opened, 0, {
      visible: false
    }, {
      visible: true,
      delay: 0.5
    });
    c.TweenMax.fromTo(this.disp.mc_silhouette, 0, {
      visible: false
    }, {
      visible: true,
      delay: 0.5
    });
    c.TweenMax.fromTo(this.disp.mc_silhouette, 1, {
      alpha: 0,
      scaleX: 0.9,
      scaleY: 0.9
    }, {
      alpha: 1,
      scaleX: 1,
      scaleY: 1,
      delay: 0.5
    });
    this._timeout = window.setTimeout(function () {
      e._timeout = -1;
      p.CinematicController.getInstance().playCinematic(new f.GeneralCinematicVO(1));
      m.CastleModel.smartfoxClient.sendCommandVO(new g.C2SFinishQuestConditionVO(d.ClientConstQuestCondition.QUESTTYPE_VISIT_GENERALS_INN, e.currentQuestConditionTargetID));
      e.handleHoratioQuest();
    }, 3000);
  };
  GeneralHubIntroductionHandler.prototype.handleCinematic2 = function () {
    var e = this;
    this.createInputBlocker();
    this._questComponent.hide();
    this.enableUIComponents(false);
    this._timeout = window.setTimeout(function () {
      e._timeout = -1;
      p.CinematicController.getInstance().playCinematic(new f.GeneralCinematicVO(2));
      m.CastleModel.smartfoxClient.sendCommandVO(new g.C2SFinishQuestConditionVO(d.ClientConstQuestCondition.QUESTTYPE_VISIT_GENERALS_INN, e.currentQuestConditionTargetID));
      e.disp.mc_introduction.mc_introduction_character_horatio.visible = true;
      e.handleFatKingQuest();
    }, 3000);
  };
  GeneralHubIntroductionHandler.prototype.handleHoratioQuest = function () {
    this.hideCharacters();
    this._questComponent.hide();
    this.enableUIComponents(false);
    this.disp.mc_introduction.mc_introduction_character_horatio.visible = true;
    this.disp.mc_introduction.mc_introduction_quest_horatio.visible = true;
  };
  GeneralHubIntroductionHandler.prototype.handleFatKingQuest = function () {
    this.createInputBlocker();
    this._questComponent.hide();
    this._characterAnimationHandler.removeEventListener();
    this.enableUIComponents(false);
    this.disp.mc_introduction.mc_introduction_quest_ludwig.visible = true;
    this.disp.mc_introduction.mc_introduction_character_horatio.visible = false;
    m.CastleModel.generalsData.addEventListener(C.GeneralsEvent.GENERALS_HUB_REWARDS, this.bindFunction(this.onRewardsGained));
  };
  GeneralHubIntroductionHandler.prototype.onRewardsGained = function () {
    m.CastleModel.generalsData.removeEventListener(C.GeneralsEvent.GENERALS_HUB_REWARDS, this.bindFunction(this.onRewardsGained));
    this._questComponent.show();
    this._characterAnimationHandler.addEventListener();
    this.enableUIComponents(true);
    this.disp.mc_introduction.mc_introduction_quest_ludwig.visible = false;
    this._inputBlocker.visible = true;
  };
  GeneralHubIntroductionHandler.prototype.hideCharacters = function () {
    var e = this;
    if (this._characterAnimationHandler.isLoaded) {
      this._characterAnimationHandler.reset();
    } else {
      this._characterAnimationHandler.animationsLoadedSignal.addOnce(function () {
        e._characterAnimationHandler.reset();
      });
    }
  };
  GeneralHubIntroductionHandler.prototype.updateCinematicPlaylist = function () {
    this.disp.btn_cinematics.visible = m.CastleModel.generalsIntroductionData.getAvailableCinematics().length > 0;
  };
  GeneralHubIntroductionHandler.prototype.enableUIComponents = function (e) {
    this.disp.item_rubies.visible = e;
    this.disp.mc_offerings.visible = e;
    this.disp.btn_info.visible = e;
  };
  GeneralHubIntroductionHandler.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.disp.mc_introduction.mc_introduction_quest_ludwig.btn_goto:
        this.disp.mc_introduction.mc_introduction_quest_ludwig.visible = false;
        this.disp.mc_introduction.mc_introduction_character_horatio.visible = false;
        this.enableUIComponents(true);
        this._questComponent.show();
        this._questComponent.performIntroductionDraw();
        break;
      case this.disp.mc_introduction.mc_introduction_quest_horatio.btn_goto:
        if (m.CastleModel.generalsIntroductionData.activeIntroductionQuest.conditions[0].conditionType == d.ClientConstQuestCondition.QUESTTYPE_GENERAL_ASSIGN_TO_BARON) {
          E.CastleLayoutManager.getInstance().hideDialog(v.GeneralsHubDialog);
          o.CommandController.instance.executeCommand(_.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, m.CastleModel.userData.castleList.getHomeCastle());
        } else {
          m.CastleModel.generalsIntroductionData.executeShowMeOfCurrentQuest();
        }
        break;
      case this.disp.mc_introduction.mc_introduction_quest_horatio.btn_skip:
        O.CastleDialogHandler.getInstance().registerDialogs(T.ModernYesNoLabeledDialog, new s.BasicStandardYesNoDialogProperties("dialog_generals_inn_SkipIntroduction_header", "dialog_generals_inn_SkipIntroduction_desc", this.bindFunction(this.onSkipIntroduction), null, null, "dialog_generals_inn_SkipIntroduction_Skip_button", "dialog_generals_inn_SkipIntroduction_dontSkip_button"));
    }
  };
  GeneralHubIntroductionHandler.prototype.onSkipIntroduction = function () {
    E.CastleLayoutManager.getInstance().hideDialog(v.GeneralsHubDialog);
    a.ClientFunnelTrackingController.getInstance().trackState("skip_intro_manually");
    m.CastleModel.smartfoxClient.sendCommandVO(new h.C2SSkipGeneralsIntroductionVO());
    m.CastleModel.generalsIntroductionData.removeGeneralIntroductionGuidance();
  };
  Object.defineProperty(GeneralHubIntroductionHandler.prototype, "currentQuestConditionTargetID", {
    get: function () {
      return l.int(m.CastleModel.generalsIntroductionData.activeIntroductionQuest.conditions[0].conditionData[0]) || -1;
    },
    enumerable: true,
    configurable: true
  });
  GeneralHubIntroductionHandler.prototype.createInputBlocker = function () {
    if (!this._inputBlocker) {
      this._inputBlocker = new S();
      this._inputBlocker.graphics.beginFill(u.ClientConstColor.GENERIC_BLACK, 0.01);
      this._inputBlocker.graphics.drawRect(0, 0, 1200, 800);
      this._inputBlocker.graphics.endFill();
      this._inputBlocker.setBounds(0, 0, 1200, 800);
      this._inputBlocker.x = -600;
      this._inputBlocker.y = -400;
      this.disp.mc_introduction.addChild(this._inputBlocker);
      this.disp.mc_introduction.setChildIndex(this._inputBlocker, 0);
    }
    this._inputBlocker.visible = true;
  };
  return GeneralHubIntroductionHandler;
}(b.CastleItemRenderer);
exports.GeneralHubIntroductionHandler = A;