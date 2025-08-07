Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./49.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./277.js");
var p = require("./1255.js");
var h = require("./1256.js");
var g = require("./278.js");
var C = require("./179.js");
var _ = require("./32.js");
var m = require("./15.js");
var f = require("./4.js");
var O = require("./24.js");
var E = require("./20.js");
var y = require("./237.js");
var b = require("./8.js");
var D = require("./11.js");
var I = require("./718.js");
var T = require("./719.js");
var v = require("./164.js");
var S = require("./2199.js");
var A = require("./2231.js");
var L = require("./2232.js");
var P = function (e) {
  function GeneralsOverviewDialog() {
    var t = e.call(this, GeneralsOverviewDialog.NAME) || this;
    t._preventFlagReset = false;
    t.level100LoadedCount = 0;
    return t;
  }
  n.__extends(GeneralsOverviewDialog, e);
  GeneralsOverviewDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.dialogDisp.changeTextFieldCacheScale(2);
    b.ButtonHelper.initButtons([this.dialogDisp.mc_right2.btn_close, this.dialogDisp.mc_right2.btn_help, this.dialogDisp.mc_left.btn_tavern, this.dialogDisp.mc_left.btn_ui_hide, this.dialogDisp.mc_left.btn_ui_show, this.dialogDisp.btn_unlock], E.ClickFeedbackButtonHover);
    b.ButtonHelper.initButtons([this.dialogDisp.mc_right.btn_info, this.dialogDisp.mc_right.btn_story, this.dialogDisp.mc_left.mc_selection.btn_player, this.dialogDisp.mc_left.mc_selection.btn_npc], r.BasicButton, 1);
    var i = new y.ClickFeedbackHoverBehaviour(this.dialogDisp.mc_right.btn_info);
    var n = new y.ClickFeedbackHoverBehaviour(this.dialogDisp.mc_right.btn_story);
    var o = new y.ClickFeedbackHoverBehaviour(this.dialogDisp.mc_left.mc_selection.btn_player);
    var s = new y.ClickFeedbackHoverBehaviour(this.dialogDisp.mc_left.mc_selection.btn_npc);
    i.addEventListener();
    n.addEventListener();
    o.addEventListener();
    s.addEventListener();
    this._sublayerSwitcher = new g.SublayerSwitcher(this.bindFunction(this.createSublayerProperties));
    this._sublayerSwitcher.add(GeneralsOverviewDialog.TAB_INFO, this.dialogDisp.mc_right.btn_info, new S.GeneralsOverviewDialogInfo(this.dialogDisp.mc_right.tab_info, this));
    this._sublayerSwitcher.add(GeneralsOverviewDialog.TAB_STORY, this.dialogDisp.mc_right.btn_story, new A.GeneralsOverviewDialogStory(this.dialogDisp.mc_right.tab_story));
    this._sublayerSwitcher.add(GeneralsOverviewDialog.TAB_STORY_NPC, this.dialogDisp.mc_right.btn_story_npc, new A.GeneralsOverviewDialogStory(this.dialogDisp.mc_right.tab_story_npc));
    this.dialogDisp.mc_right.btn_info.mc_icon.gotoAndStop(1);
    this.dialogDisp.mc_right.btn_story.mc_icon.gotoAndStop(2);
    this.dialogDisp.mc_right.btn_story_npc.mc_icon.gotoAndStop(2);
    this.dialogDisp.mc_left.mc_selection.btn_player.mc_icon.gotoAndStop(10);
    this.dialogDisp.mc_left.mc_selection.btn_npc.mc_icon.gotoAndStop(11);
    this.dialogDisp.mc_right.btn_info.toolTipText = "dialog_generals_overview_tab_skills_tooltip";
    this.dialogDisp.mc_right.btn_story.toolTipText = "dialog_generals_overview_tab_misc_tooltip";
    this.dialogDisp.mc_right.btn_story_npc.toolTipText = "dialog_generals_overview_tab_misc_tooltip";
    this.dialogDisp.mc_left.btn_tavern.toolTipText = "panel_action_generals_inn";
    this.dialogDisp.mc_left.mc_selection.btn_player.toolTipText = "dialog_generals_overview_selectGeneral_tab";
    this.dialogDisp.mc_left.mc_selection.btn_npc.toolTipText = "dialog_generals_overview_selectPvEGeneral_tab";
    this.dialogDisp.mc_left.btn_ui_hide.toolTipText = "dialog_generals_overview_vieGeneralOnly_hideUI_tootlip";
    this.dialogDisp.mc_left.btn_ui_show.toolTipText = "dialog_generals_overview_vieGeneralOnly_showUI_tootlip";
    this.itxt_tavernCounter = a.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.mc_left.btn_tavern.mc_bubble.txt_number, new l.LocalizedNumberVO(0));
    this.itxt_selectionHeader = a.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.mc_left.mc_selection.txt_title, new c.LocalizedTextVO("dialog_generals_overview_selectGeneral_tab"));
    a.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.mc_loading.txt_copy, new c.LocalizedTextVO("dialog_difficultyScaling_loading_desc"));
    a.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.btn_unlock.txt_label, new c.LocalizedTextVO("unlock"));
    this.dialogDisp.mc_loading.visible = false;
    var u = new T.GeneralSelectionProperties();
    u.textColor = 15921906;
    this._generalSelection = new I.GeneralSelection(this.dialogDisp.mc_left.mc_selection, u);
  };
  GeneralsOverviewDialog.prototype.onGeneralStarUp = function (e = null) {
    if (this._generalSelection.selectedGeneralVO.currentStarLevel == this._generalSelection.selectedGeneralVO.maxStarLevel) {
      this.playLevel100Animation();
    } else {
      this.playUnlockAnimation();
    }
  };
  GeneralsOverviewDialog.prototype.onGeneralsUpdated = function (e = null) {
    this.updateUnlockButton();
    b.ButtonHelper.enableButton(this.dialogDisp.mc_right.btn_info, this._generalSelection.selectedGeneralVO.isUnlocked);
    if (this.externalClip.cacheCanvas) {
      this.externalClip.updateCache();
    }
    if (this.dialogDisp.cacheCanvas) {
      this.dialogDisp.updateCache();
    }
    if (this._isPreviewBG && this._generalSelection.selectedGeneralVO && this._generalSelection.selectedGeneralVO.isUnlocked) {
      this.updateGeneralBackground();
    }
    if (this._generalSelection.selectedGeneralVO) {
      b.ButtonHelper.enableButton(this.dialogDisp.mc_right.btn_info, this._generalSelection.selectedGeneralVO.isUnlocked);
      if (this._generalSelection.selectedGeneralVO.hasLevelUp && this._generalSelection.selectedGeneralVO.getSkillPointsAvailable() <= 0) {
        this._generalSelection.selectedGeneralVO.resetFlags();
      }
    }
  };
  GeneralsOverviewDialog.prototype.onGeneralUnlocked = function (e = null) {
    this._sublayerSwitcher.switchTo(GeneralsOverviewDialog.TAB_INFO);
    this.playUnlockAnimation();
  };
  GeneralsOverviewDialog.prototype.playUnlockAnimation = function () {
    this.dialogDisp.mc_unlock_front.visible = true;
    this.dialogDisp.mc_unlock_front.gotoAndPlay(2);
    this.dialogDisp.mc_unlock_bg.visible = true;
    this.dialogDisp.mc_unlock_bg.gotoAndPlay(2);
  };
  GeneralsOverviewDialog.prototype.playLevel100Animation = function () {
    if (this.dialogDisp.mc_lvl100_front.numChildren > 0) {
      this.hideLevel100Animation();
    }
    this.dialogDisp.mc_lvl100_front.visible = true;
    this.dialogDisp.mc_lvl100_back.visible = true;
    this.dialogDisp.mc_lvl100_front.scaleX = this.dialogDisp.mc_lvl100_front.scaleY = 0.5;
    this.dialogDisp.mc_lvl100_back.scaleX = this.dialogDisp.mc_lvl100_back.scaleY = 0.5;
    this.level100LoadedCount = 0;
    var e = "Generals_Level100_" + this._generalSelection.selectedGeneralVO.generalXmlVO.rarity.name + "_front";
    var t = "Generals_Level100_" + this._generalSelection.selectedGeneralVO.generalXmlVO.rarity.name + "_back";
    var i = new O.CastleGoodgameExternalClip(e, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e), null, 30, false);
    var n = new O.CastleGoodgameExternalClip(t, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(t), null, 30, false);
    this.dialogDisp.mc_lvl100_front.addChild(i);
    this.dialogDisp.mc_lvl100_back.addChild(n);
    if (i.isLoaded) {
      this.level100AnimationLoaded();
    } else {
      i.doWhenLoaded(this.bindFunction(this.level100AnimationLoaded));
    }
    if (n.isLoaded) {
      this.level100AnimationLoaded();
    } else {
      n.doWhenLoaded(this.bindFunction(this.level100AnimationLoaded));
    }
  };
  GeneralsOverviewDialog.prototype.level100AnimationLoaded = function () {
    this.level100LoadedCount++;
    if (!(this.level100LoadedCount < 2)) {
      s.MovieClipHelper.playAllMovies(this.dialogDisp.mc_lvl100_front.getChildAt(0).currentshownDisplayObject);
      s.MovieClipHelper.playAllMovies(this.dialogDisp.mc_lvl100_back.getChildAt(0).currentshownDisplayObject);
    }
  };
  GeneralsOverviewDialog.prototype.hideUnlockAnimation = function () {
    this.dialogDisp.mc_unlock_front.visible = false;
    this.dialogDisp.mc_unlock_front.gotoAndStop(1);
    this.dialogDisp.mc_unlock_bg.visible = false;
    this.dialogDisp.mc_unlock_bg.gotoAndStop(1);
  };
  GeneralsOverviewDialog.prototype.hideLevel100Animation = function () {
    s.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_lvl100_front);
    s.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_lvl100_back);
    this.dialogDisp.mc_unlock_front.visible = false;
    this.dialogDisp.mc_unlock_bg.visible = false;
  };
  GeneralsOverviewDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._preventFlagReset = true;
    this.currentCategory = null;
    this.setSelectionCategory(GeneralsOverviewDialog.SELECTION_PLAYER);
    f.CastleModel.generalsData.addEventListener(C.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.onGeneralsUpdated));
    f.CastleModel.generalsData.addEventListener(C.GeneralsEvent.GENERAL_UNLOCKED, this.bindFunction(this.onGeneralUnlocked));
    f.CastleModel.generalsData.addEventListener(C.GeneralsEvent.GENERAL_STAR_UP, this.bindFunction(this.onGeneralStarUp));
    f.CastleModel.generalsData.addEventListener(C.GeneralsEvent.GENERALS_HUB_UPDATED, this.bindFunction(this.updateTavernButton));
    m.CastleBasicController.getInstance().addEventListener(_.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.updateTavernButton));
    if (f.CastleModel.generalsIntroductionData.activeIntroductionQuest && f.CastleModel.generalsIntroductionData.activeIntroductionQuest.conditions[0].conditionType == d.ClientConstQuestCondition.QUESTTYPE_VISIT_GENERALS_OVERVIEW) {
      f.CastleModel.smartfoxClient.sendCommandVO(new h.C2SFinishQuestConditionVO(d.ClientConstQuestCondition.QUESTTYPE_VISIT_GENERALS_OVERVIEW));
    }
    this.hideUnlockAnimation();
    this.hideLevel100Animation();
    if (this._generalSelection.selectedGeneralVO && this._generalSelection.selectedGeneralVO.currentStarLevel == this._generalSelection.selectedGeneralVO.maxStarLevel) {
      this.playLevel100Animation();
    } else {
      this.hideLevel100Animation();
    }
    this.updateUIVisibility(true);
    this.updateTavernButton(null);
  };
  GeneralsOverviewDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    f.CastleModel.generalsData.removeEventListener(C.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.onGeneralsUpdated));
    f.CastleModel.generalsData.removeEventListener(C.GeneralsEvent.GENERAL_UNLOCKED, this.bindFunction(this.onGeneralUnlocked));
    f.CastleModel.generalsData.removeEventListener(C.GeneralsEvent.GENERAL_STAR_UP, this.bindFunction(this.onGeneralStarUp));
    f.CastleModel.generalsData.removeEventListener(C.GeneralsEvent.GENERALS_HUB_UPDATED, this.bindFunction(this.updateTavernButton));
    m.CastleBasicController.getInstance().removeEventListener(_.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.updateTavernButton));
    if (this._generalSelection) {
      this._generalSelection.onHide();
      this._generalSelection.onSelectSignal.remove(this.bindFunction(this.onSelectGeneral));
    }
    if (this._sublayerSwitcher) {
      this._sublayerSwitcher.hide();
    }
    f.CastleModel.generalsData.playerGenerals.forEach(function (e) {
      if (e.isNew) {
        e.resetFlags();
      }
    });
  };
  GeneralsOverviewDialog.prototype.updateGeneralBackground = function () {
    s.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_general);
    var e = this._generalSelection.selectedGeneralVO.generalID;
    this.showLoadingAnimation();
    this._isPreviewBG = !this._generalSelection.selectedGeneralVO.isImplemented;
    if (this.currentBGClip) {
      this.currentBGClip.clipLoaded.removeAll();
    }
    this.currentBGClip = v.GeneralsHelper.getGeneralsBackground(e, this._isPreviewBG, 1, this.bindFunction(this.onBGLoaded));
    if (!this._isPreviewBG) {
      var t = v.GeneralsHelper.getGeneralClip(e, true);
      if (t) {
        this.dialogDisp.mc_general.addChild(t);
      }
    }
  };
  GeneralsOverviewDialog.prototype.showLoadingAnimation = function () {
    this.lockDialog();
    this.dialogDisp.mc_loading.visible = true;
  };
  GeneralsOverviewDialog.prototype.onBGLoaded = function (e) {
    if (e) {
      this.unLockDialog();
      s.MovieClipHelper.clearMovieClip(this.dialogDisp.bg);
      this.dialogDisp.bg.addChild(e.currentshownDisplayObject);
      this.dialogDisp.mc_loading.visible = false;
      if (this._generalSelection.selectedGeneralVO.currentStarLevel == this._generalSelection.selectedGeneralVO.maxStarLevel) {
        this.playLevel100Animation();
      } else {
        this.hideLevel100Animation();
      }
    }
  };
  GeneralsOverviewDialog.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      var e = 1;
      if (this.disp.stage.stageHeight < e * 1096) {
        e = this.disp.stage.stageHeight / 1096;
      }
      if (this.disp.stage.stageWidth / this.disp.stage.stageHeight < 4 / 3) {
        e = Math.min(e, this.disp.stage.stageWidth / 1452);
      }
      this.disp.x = this.disp.stage.stageWidth * 0.5;
      this.disp.y = this.disp.stage.stageHeight * 0.5;
      this.disp.scaleX = this.disp.scaleY = e;
      this.disp.x = this.disp.x | 0;
      this.disp.y = this.disp.y | 0;
      var t = Math.min(this.disp.stage.stageWidth, e * 1936) * 0.5 / e;
      this.dialogDisp.mc_left.x = 22 - t;
      this.dialogDisp.mc_right.x = t - 22;
      this.dialogDisp.mc_right2.x = t - 22;
    }
  };
  GeneralsOverviewDialog.prototype.createSublayerProperties = function (e) {
    return new L.GeneralsOverviewDialogSublayerProperties(this._generalSelection.selectedGeneralVO);
  };
  GeneralsOverviewDialog.prototype.onSelectGeneral = function () {
    if (this._generalSelection.selectedGeneralVO && this._generalSelection.selectedGeneralVO.isImplemented) {
      this.dialogDisp.mc_right.visible = true;
      var e = this._generalSelection.selectedGeneralVO.isUnlocked;
      if (e) {
        this._sublayerSwitcher.switchTo(GeneralsOverviewDialog.TAB_INFO);
      } else if (this._generalSelection.selectedGeneralVO.isNPCGeneral) {
        this._sublayerSwitcher.switchTo(GeneralsOverviewDialog.TAB_STORY_NPC);
      } else {
        this._sublayerSwitcher.switchTo(GeneralsOverviewDialog.TAB_STORY);
      }
      b.ButtonHelper.enableButton(this.dialogDisp.mc_right.btn_info, e);
      this.dialogDisp.mc_right.btn_info.visible = !this._generalSelection.selectedGeneralVO.isNPCGeneral;
      this.dialogDisp.mc_right.btn_story.visible = !this._generalSelection.selectedGeneralVO.isNPCGeneral;
      this.dialogDisp.mc_right.btn_story_npc.visible = this._generalSelection.selectedGeneralVO.isNPCGeneral;
      if (this._preventFlagReset) {
        this._preventFlagReset = false;
      } else if (this._generalSelection.selectedGeneralVO.isNew || this._generalSelection.selectedGeneralVO.hasLevelUp) {
        this._generalSelection.selectedGeneralVO.resetFlags();
      }
      this._sublayerSwitcher.show();
    } else {
      this.dialogDisp.mc_right.visible = false;
    }
    this.updateGeneralBackground();
    this.updateUnlockButton();
    this.hideUnlockAnimation();
    if (this._generalSelection.selectedGeneralVO.currentStarLevel == this._generalSelection.selectedGeneralVO.maxStarLevel) {
      this.playLevel100Animation();
    } else {
      this.hideLevel100Animation();
    }
  };
  GeneralsOverviewDialog.prototype.updateUnlockButton = function () {
    this.dialogDisp.addChild(this.dialogDisp.btn_unlock);
    this.dialogDisp.btn_unlock.visible = this._generalSelection.selectedGeneralVO.canBeUnlocked;
  };
  GeneralsOverviewDialog.prototype.updateTavernButton = function (e) {
    var t = f.CastleModel.generalsData.getTotalAmountOfAvailableDraws();
    this.dialogDisp.mc_left.btn_tavern.mc_bubble.visible = t > 0;
    this.itxt_tavernCounter.textContentVO.numberValue = Math.min(t, 99);
  };
  GeneralsOverviewDialog.prototype.updateUIVisibility = function (e) {
    this.dialogDisp.mc_left.btn_ui_show.visible = !e;
    this.dialogDisp.mc_left.btn_ui_hide.visible = e;
    this.dialogDisp.mc_left.mc_selection.visible = e;
    this.dialogDisp.mc_right.visible = e && this._generalSelection.selectedGeneralVO && this._generalSelection.selectedGeneralVO.isImplemented;
  };
  GeneralsOverviewDialog.prototype.setSelectionCategory = function (e) {
    if (this.currentCategory != e) {
      this.currentCategory = e;
      var t = [];
      switch (e) {
        case GeneralsOverviewDialog.SELECTION_PLAYER:
          t = Array.from(f.CastleModel.generalsData.playerGenerals.values());
          this.itxt_selectionHeader.textContentVO.textId = "dialog_generals_overview_selectGeneral_tab";
          break;
        case GeneralsOverviewDialog.SELECTION_NPC:
          t = Array.from(f.CastleModel.generalsData.npcGenerals.values());
          this.itxt_selectionHeader.textContentVO.textId = "dialog_generals_overview_selectPvEGeneral_tab";
      }
      this.dialogDisp.mc_left.mc_selection.btn_player.gotoAndStop(e == GeneralsOverviewDialog.SELECTION_PLAYER ? 2 : 1);
      this.dialogDisp.mc_left.mc_selection.btn_npc.gotoAndStop(e == GeneralsOverviewDialog.SELECTION_NPC ? 2 : 1);
      this._generalSelection.init(t);
      this._generalSelection.onShow();
      this._generalSelection.onSelectSignal.add(this.bindFunction(this.onSelectGeneral));
      this._generalSelection.selectIndex(0, true);
    }
  };
  GeneralsOverviewDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.mc_right2.btn_close:
        this.hide();
        break;
      case this.dialogDisp.mc_left.btn_tavern:
        this.hide();
        v.GeneralsHelper.showGeneralsHubDialog();
        break;
      case this.dialogDisp.mc_right2.btn_help:
        D.CastleExternalDialog.dialogHandler.showHelper("", u.Localize.text("help_generals_overview_01"));
        break;
      case this.dialogDisp.btn_unlock:
        o.BasicModel.smartfoxClient.sendCommandVO(new p.C2SGeneralUnlockVO(this._generalSelection.selectedGeneralVO.generalID));
        break;
      case this.dialogDisp.mc_left.btn_ui_show:
        this.updateUIVisibility(true);
        break;
      case this.dialogDisp.mc_left.btn_ui_hide:
        this.updateUIVisibility(false);
        break;
      case this.dialogDisp.mc_left.mc_selection.btn_player:
        this.setSelectionCategory(GeneralsOverviewDialog.SELECTION_PLAYER);
        break;
      case this.dialogDisp.mc_left.mc_selection.btn_npc:
        this.setSelectionCategory(GeneralsOverviewDialog.SELECTION_NPC);
    }
  };
  GeneralsOverviewDialog.NAME = "GeneralsOverviewExt6";
  GeneralsOverviewDialog.TAB_INFO = 0;
  GeneralsOverviewDialog.TAB_STORY = 1;
  GeneralsOverviewDialog.TAB_STORY_NPC = 2;
  GeneralsOverviewDialog.SELECTION_PLAYER = 0;
  GeneralsOverviewDialog.SELECTION_NPC = 1;
  return GeneralsOverviewDialog;
}(D.CastleExternalDialog);
exports.GeneralsOverviewDialog = P;