Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./23.js");
var c = require("./16.js");
var u = require("./288.js");
var d = require("./14.js");
var p = require("./20.js");
var h = require("./8.js");
var g = require("./362.js");
var C = require("./1806.js");
var _ = require("./1807.js");
var m = function (e) {
  function GachaComponentLevelRewards(t) {
    var i = e.call(this, t) || this;
    i._currentLevel = 0;
    h.ButtonHelper.initButtons([i.disp.btn_info], p.ClickFeedbackButtonHover);
    i.itxt_level = d.CastleComponent.textFieldManager.registerTextField(i.disp.mc_level.txt_level, new r.LocalizedNumberVO(0));
    i.itxt_progress = d.CastleComponent.textFieldManager.registerTextField(i.disp.mc_progress.txt_text, new s.LocalizedTextVO(""));
    i.disp.btn_info.toolTipText = "dialog_generals_inn_drawChances_header";
    return i;
  }
  n.__extends(GachaComponentLevelRewards, e);
  GachaComponentLevelRewards.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._currentLevel = this.getEventVO().getCurrentLevel();
    this.disp.mc_progress.mc_highlight.alpha = 0;
    this.disp.mc_level.mc_highlight.alpha = 0;
    this.disp.mc_level.scaleX = this.disp.mc_level.scaleY = 1;
    this.updateLevelProgress();
  };
  GachaComponentLevelRewards.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    this.destroyCollectableRenderList();
  };
  GachaComponentLevelRewards.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    d.CastleComponent.controller.addEventListener(u.GachaEvent.UPDATED, this.bindFunction(this.onGachaUpdate));
    d.CastleComponent.controller.addEventListener(u.GachaEvent.MULTIPULL_CHANGED, this.bindFunction(this.onMultiPullChange));
  };
  GachaComponentLevelRewards.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    d.CastleComponent.controller.removeEventListener(u.GachaEvent.UPDATED, this.bindFunction(this.onGachaUpdate));
    d.CastleComponent.controller.removeEventListener(u.GachaEvent.MULTIPULL_CHANGED, this.bindFunction(this.onMultiPullChange));
  };
  GachaComponentLevelRewards.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.disp.btn_info:
        this.showLevelRewardDialog();
    }
  };
  GachaComponentLevelRewards.prototype.onGachaUpdate = function (e) {
    if (e.eventVO.eventId == this.getEventVO().eventId) {
      this.updateLevelProgress();
    }
  };
  GachaComponentLevelRewards.prototype.onMultiPullChange = function (e) {
    if (e.eventVO.eventId == this.getEventVO().eventId) {
      this.fillProgressBar();
    }
  };
  GachaComponentLevelRewards.prototype.showLevelRewardDialog = function () {
    d.CastleComponent.dialogHandler.registerDefaultDialogs(C.GachaOfferingRewardsDialog, new _.GachaOfferingRewardsDialogProperies(this.getEventVO().eventId));
  };
  GachaComponentLevelRewards.prototype.updateLevelProgress = function () {
    if (this.getEventVO().getGachaVOs().length > 1) {
      this.disp.mc_level.visible = true;
      if (this.getEventVO().getCurrentLevel() > this._currentLevel) {
        this.playLevelUpAnimation();
      } else {
        this.fillProgressBar();
      }
    } else {
      this.disp.mc_level.visible = false;
      this.disp.mc_progress.progressbar.scaleX = 0;
      this.itxt_progress.textContentVO.textId = "rewards";
      this.itxt_progress.color = c.ClientConstColor.MODERN_DEFAULT_BRIGHT;
    }
  };
  GachaComponentLevelRewards.prototype.fillProgressBar = function () {
    if (this.getEventVO().getIsMaxLevel()) {
      this.disp.mc_progress.progressbar.scaleX = 1;
      this.itxt_progress.textContentVO.textId = "dialog_mainDonationEvent_maxLevel";
      this.itxt_progress.color = c.ClientConstColor.MODERN_DEFAULT;
    } else {
      this.disp.mc_progress.progressbar.scaleX = o.MathBase.clamp(this.getEventVO().getCurrentLevelProgress() / this.getEventVO().getCurrentLevelMaxPulls(), 0, 1);
      this.disp.mc_progress.mc_foreshadow.scaleX = o.MathBase.clamp(this.getEventVO().getCurrentLevelProgress(this.getEventVO().currentMultiPull) / this.getEventVO().getCurrentLevelMaxPulls(), 0, 1);
      this.itxt_progress.textContentVO.textId = a.GenericTextIds.VALUE_PROPORTIONAL_VALUE;
      this.itxt_progress.textContentVO.textReplacements = [this.getEventVO().getCurrentLevelProgress(), this.getEventVO().getCurrentLevelMaxPulls()];
      this.itxt_progress.color = c.ClientConstColor.MODERN_DEFAULT;
    }
    var e = this.getEventVO().getCurrentLevel();
    this.itxt_level.textContentVO.numberValue = e;
    this._currentLevel = e;
  };
  GachaComponentLevelRewards.prototype.playLevelUpAnimation = function () {
    var e = this;
    this.disp.mc_progress.progressbar.scaleX = 1;
    var t = this.getEventVO().getCurrentLevel();
    var i = this.getEventVO().getGachaVOByLevel(t - 1);
    var n = i.maxPulls - i.minPulls;
    this.itxt_progress.textContentVO.textId = a.GenericTextIds.VALUE_PROPORTIONAL_VALUE;
    this.itxt_progress.textContentVO.textReplacements = [n + 1, n + 1];
    this.itxt_progress.color = c.ClientConstColor.MODERN_DEFAULT;
    l.TweenMax.to(this.disp.mc_progress.mc_highlight, 0.33, {
      alpha: 0.5,
      onComplete: function () {
        l.TweenMax.to(e.disp.mc_progress.mc_highlight, 0.33, {
          alpha: 0
        });
      }
    });
    l.TweenMax.to(this.disp.mc_level.mc_highlight, 0.33, {
      alpha: 0.5,
      onComplete: function () {
        l.TweenMax.to(e.disp.mc_level.mc_highlight, 0.33, {
          alpha: 0
        });
      }
    });
    l.TweenMax.to(this.disp.mc_level, 0.33, {
      scaleX: 1.15,
      scaleY: 1.15,
      onComplete: function () {
        l.TweenMax.to(e.disp.mc_level, 0.33, {
          scaleX: 1,
          scaleY: 1
        });
        e.fillProgressBar();
      }
    });
  };
  GachaComponentLevelRewards.prototype.getEventVO = function () {
    return this._params[0];
  };
  return GachaComponentLevelRewards;
}(g.AGachaComponent);
exports.GachaComponentLevelRewards = m;