Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./3.js");
var s = require("./23.js");
var r = require("./23.js");
var l = require("./8.js");
var c = require("./20.js");
var u = require("./40.js");
var d = require("./4.js");
var p = require("./21.js");
var h = require("./14.js");
var g = require("./27.js");
var C = require("./627.js");
var _ = require("./2.js");
var m = require("./993.js");
var f = require("./2.js");
var O = require("./478.js");
var E = require("./2678.js");
var y = function (e) {
  function CastleLegendSkillSceatBottomMenu(t) {
    var i = e.call(this, t) || this;
    i._isExpanded = true;
    l.ButtonHelper.initButtons([t.btn_dropdown, t.btn_rubyskip, t.btn_minuteskip], c.ClickFeedbackButtonHover);
    i._expandY = t.y;
    i._collapseY = i._expandY + (t.height - t.btn_dropdown.height);
    i._itxtTime = h.CastleComponent.textFieldManager.registerTextField(i.disp.mc_timer.txt_time, new a.TextVO(""));
    i.collapse();
    i.disp.btn_minuteskip.visible = false;
    return i;
  }
  n.__extends(CastleLegendSkillSceatBottomMenu, e);
  CastleLegendSkillSceatBottomMenu.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    if (this._isExpanded) {
      l.ButtonHelper.delayEnableButton(this.disp.btn_rubyskip, true, 2000);
    }
  };
  CastleLegendSkillSceatBottomMenu.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    d.CastleModel.timerData.addEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    if (this._skillInProgressItem) {
      this._skillInProgressItem.show();
    }
  };
  CastleLegendSkillSceatBottomMenu.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    d.CastleModel.timerData.removeEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    if (this._skillInProgressItem) {
      this.removeSkillItem();
      this._skillInProgress = null;
    }
  };
  CastleLegendSkillSceatBottomMenu.prototype.update = function (e) {
    this._sublayerID = e;
    var t = d.CastleModel.legendSkillData.sceatTreeTabMap.get(e);
    var i = false;
    for (var n = 0, o = d.CastleModel.legendSkillData.sceatSkillsInProgress; n < o.length; n++) {
      var a = o[n];
      if (t.indexOf(a.skillTreeID) > -1 && a instanceof C.CastleSceatSkillVO) {
        i = true;
        if (!this._skillInProgress && !this._isExpanded) {
          this.expand();
        }
        this._skillInProgress = a;
        l.ButtonHelper.enableButton(this.disp.btn_dropdown, true);
        this.disp.btn_dropdown.toolTipText = null;
        this.fillSkillInfo();
        break;
      }
    }
    if (!i) {
      if (this._isExpanded) {
        this.collapse();
      }
      this._skillInProgress = null;
      l.ButtonHelper.enableButton(this.disp.btn_dropdown, false);
      this.disp.btn_dropdown.toolTipText = "noSkillactivationOngoing";
    }
  };
  CastleLegendSkillSceatBottomMenu.prototype.fillSkillInfo = function () {
    h.CastleComponent.textFieldManager.registerTextField(this.disp.txt_skillName, new o.LocalizedTextVO(this._skillInProgress.nameTextID));
    h.CastleComponent.textFieldManager.registerTextField(this.disp.txt_oldLevel, new o.LocalizedTextVO("ci_level", [this._skillInProgress.level - 1]));
    h.CastleComponent.textFieldManager.registerTextField(this.disp.txt_newLevel, new o.LocalizedTextVO("ci_level", [this._skillInProgress.level]));
    var e = this._skillInProgress.isActive && this._skillInProgress.level == d.CastleModel.legendSkillData.getMaxSkillLevelInGroup(this._skillInProgress.skillTreeID, this._skillInProgress.tier, this._skillInProgress.skillGroupID) ? O.ClientConstLegendSkills.COLORCODE_YELLOW : O.ClientConstLegendSkills.COLORCODE_LIGHTWHITE;
    var t = this._skillInProgress.composeSkillTextVO(e, this._skillInProgress.getUnlockLevel());
    h.CastleComponent.textFieldManager.registerTextField(this.disp.txt_desc, t);
    this.removeSkillItem();
    this._skillInProgressItem = new m.CastleLegendSkillItem(this._skillInProgress, false, true);
    this._skillInProgressItem.show();
    this.disp.component_container_hol_basic.addChild(this._skillInProgressItem.dispContainer);
    this.onTimer(null);
  };
  CastleLegendSkillSceatBottomMenu.prototype.removeSkillItem = function () {
    if (this._skillInProgressItem) {
      f.MovieClipHelper.clearMovieClip(this.disp.component_container_hol_basic);
      this._skillInProgressItem.hide();
      this._skillInProgressItem = null;
    }
  };
  CastleLegendSkillSceatBottomMenu.prototype.onTimer = function (e) {
    if (this._skillInProgress) {
      this._itxtTime.textContentVO.stringValue = g.CastleTimeStringHelper.getEventTimeString(this._skillInProgress.getRemainingActivationTime());
      this.disp.mc_timer.progress.scaleX = 1 - _.MathBase.clamp(this._skillInProgress.getRemainingActivationTime() / this._skillInProgress.activationTime, 0, 1);
      var t = this._skillInProgress.getSkipCosts();
      switch (t) {
        case 0:
          this.disp.btn_rubyskip.toolTipText = {
            t: "freeSkipButton_tooltip",
            p: [t]
          };
          break;
        case 1:
          this.disp.btn_rubyskip.toolTipText = {
            t: "fullSkipButtonCooldown_tooltip_singular",
            p: [t]
          };
          break;
        default:
          this.disp.btn_rubyskip.toolTipText = {
            t: "fullSkipButtonCooldown_tooltip",
            p: [t]
          };
      }
      if (this._skillInProgress.getRemainingActivationTime() < 0) {
        this._skillInProgress = null;
        this.removeSkillItem();
        if (this._isExpanded) {
          this.collapse();
        }
        l.ButtonHelper.enableButton(this.disp.btn_dropdown, false);
      }
    }
  };
  CastleLegendSkillSceatBottomMenu.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (l.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.disp.btn_rubyskip:
          d.CastleModel.smartfoxClient.sendCommandVO(new E.C2SSkipSceatSkillActivationVO(this._sublayerID));
          break;
        case this.disp.btn_dropdown:
          this.toggleExpansion();
      }
    }
  };
  CastleLegendSkillSceatBottomMenu.prototype.toggleExpansion = function () {
    if (this._isExpanded) {
      this.collapse();
    } else {
      this.expand();
    }
  };
  CastleLegendSkillSceatBottomMenu.prototype.expand = function () {
    if (!this._isExpanded) {
      this._isExpanded = true;
      r.TweenMax.killTweensOf(this.disp);
      r.TweenMax.to(this.disp, 0.2, {
        y: this._expandY,
        ease: s.Linear.easeOut,
        onComplete: this.bindFunction(this.onExpandComplete)
      });
      l.ButtonHelper.delayEnableButton(this.disp.btn_rubyskip, true, 2000);
    }
  };
  CastleLegendSkillSceatBottomMenu.prototype.collapse = function () {
    if (this._isExpanded) {
      this._isExpanded = false;
      r.TweenMax.killTweensOf(this.disp);
      r.TweenMax.to(this.disp, 0.2, {
        y: this._collapseY,
        ease: s.Linear.easeOut,
        onComplete: this.bindFunction(this.onExpandComplete)
      });
    }
  };
  CastleLegendSkillSceatBottomMenu.prototype.onExpandComplete = function () {
    this.disp.btn_dropdown.arrow_down.visible = this._isExpanded;
    this.disp.btn_dropdown.arrow_up.visible = !this._isExpanded;
  };
  return CastleLegendSkillSceatBottomMenu;
}(u.CastleItemRenderer);
exports.CastleLegendSkillSceatBottomMenu = y;