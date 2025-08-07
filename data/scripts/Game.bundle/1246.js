Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./57.js");
var l = require("./715.js");
var c = require("./40.js");
var u = require("./42.js");
var d = require("./8.js");
var p = function (e) {
  function FightDialogAutoFillComponent(t) {
    var i = this;
    i._isActive = false;
    i._useSimpleState = false;
    i._options = new l.AutoFillOptions();
    i._onFillCurrentWaveButtonClicked = new r.Signal();
    i._onFillAllWavesButtonClicked = new r.Signal();
    i._onClearButtonClicked = new r.Signal();
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).init();
    return i;
  }
  n.__extends(FightDialogAutoFillComponent, e);
  FightDialogAutoFillComponent.prototype.init = function () {
    d.ButtonHelper.initButtons([this.disp.btn_clear, this.disp.btn_optionsNormal, this.disp.btn_optionsActive, this.disp.btn_fillCurrentWave, this.disp.btn_fillAllWaves, this.disp.mc_options.btn_close], C.ClickFeedbackButton);
    d.ButtonHelper.initBasicButtons([this.disp.mc_check_flankLeft, this.disp.mc_check_flankMiddle, this.disp.mc_check_flankRight, this.disp.btn_autoFill]);
    for (var e = 0, t = l.AutoFillOptions.TOOL_FILTER_TYPES; e < t.length; e++) {
      var i = t[e];
      if (i !== undefined) {
        var n = this.getOptionsCheckboxMc(i);
        if (n) {
          d.ButtonHelper.initBasicButton(n);
        }
      }
    }
    this.disp.btn_clear.toolTipText = "dialog_attack_autofill_clearSelected_tt";
    h.CastleComponent.textFieldManager.registerTextField(this.disp.mc_optionsTooltip.txt_title, new s.LocalizedTextVO("dialog_attack_autofill_options_tt")).autoFitToBounds = true;
    h.CastleComponent.textFieldManager.registerTextField(this.disp.mc_optionsTooltip.txt_desc, new s.LocalizedTextVO("dialog_attack_autofill_enabledToolTypes_tt")).autoFitToBounds = true;
    h.CastleComponent.textFieldManager.registerTextField(this.disp.mc_options.txt_title, new s.LocalizedTextVO("dialog_attack_autofill_toolTypes_tt")).autoFitToBounds = true;
    for (var o = 0, a = l.AutoFillOptions.TOOL_FILTER_TYPES; o < a.length; o++) {
      i = a[o];
      if (n = g.castAs(this.disp.mc_options.getChildByName("mc_icon_" + i), "MovieClip")) {
        n.toolTipText = "toolType_" + i;
      }
    }
    var r = h.CastleComponent.textFieldManager.registerTextField(this.disp.btn_autoFill.txt_name, new s.LocalizedTextVO("dialog_attack_autofill"));
    r.autoFitToBounds;
    r.verticalAlign = u.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
  };
  FightDialogAutoFillComponent.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this.disp.mc_options.visible = false;
    this.disp.mc_optionsTooltip.visible = false;
    this.applyActiveState();
    this.applyCurrentOptionsToVisuals();
  };
  FightDialogAutoFillComponent.prototype.applyCurrentOptionsToVisuals = function () {
    if (!this.useSimpleState) {
      this.disp.mc_check_flankLeft.mc_check.visible = this.options.fillLeftFlank;
      this.disp.mc_check_flankMiddle.mc_check.visible = this.options.fillMiddleFlank;
      this.disp.mc_check_flankRight.mc_check.visible = this.options.fillRightFlank;
      for (var e = 0, t = l.AutoFillOptions.TOOL_FILTER_TYPES; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          var n = this.getOptionsCheckboxMc(i);
          if (n) {
            n.gotoAndStop(this.options.isToolFilterActive(i) ? 2 : 1);
          }
        }
      }
      this.disp.mc_check_flankLeft.toolTipText = this.getCheckboxTooltipText("dialog_attack_autofill_leftFlank_tt", this.options.fillLeftFlank);
      this.disp.mc_check_flankMiddle.toolTipText = this.getCheckboxTooltipText("dialog_attack_autofill_front_tt", this.options.fillMiddleFlank);
      this.disp.mc_check_flankRight.toolTipText = this.getCheckboxTooltipText("dialog_attack_autofill_rightFlank_tt", this.options.fillRightFlank);
      var o = this.options.getActiveToolFilter();
      for (var a = 0; a < FightDialogAutoFillComponent.NUMBER_OF_OPTIONS_TOOLTIP_ICONS; ++a) {
        var s = this.disp.mc_optionsTooltip.getChildByName("mc_icon" + a);
        i = a < o.length ? o[a] : null;
        if (s) {
          s.visible = i != null;
          s.gotoAndStop(FightDialogAutoFillComponent.getOptionsTooltipIconFrame(i));
        }
      }
      var r = this.options.isAnyFlankActive();
      d.ButtonHelper.enableButton(this.disp.btn_fillCurrentWave, r);
      d.ButtonHelper.enableButton(this.disp.btn_fillAllWaves, r);
      this.updateOptionButtons();
    }
  };
  FightDialogAutoFillComponent.prototype.setActive = function (e, t = false, i = true, n = true) {
    this._isActive = e;
    this._useSimpleState = t;
    d.ButtonHelper.enableButton(this.disp.btn_autoFill, true);
    d.ButtonHelper.enableButton(this.disp.btn_fillCurrentWave, true);
    d.ButtonHelper.enableButton(this.disp.btn_fillAllWaves, true);
    this.disp.btn_fillCurrentWave.toolTipText = "dialog_attack_autofill_selected_tt";
    this.disp.btn_fillAllWaves.toolTipText = "dialog_attack_autofill_all_tt";
    this.disp.btn_autoFill.toolTipText = null;
    if (!i) {
      d.ButtonHelper.enableButton(this.disp.btn_autoFill, false);
      this.disp.btn_autoFill.toolTipText = "dialog_attack_autofill_noDefenseTroops_tt";
    }
    if (!n) {
      d.ButtonHelper.enableButton(this.disp.btn_autoFill, false);
      d.ButtonHelper.enableButton(this.disp.btn_fillCurrentWave, false);
      d.ButtonHelper.enableButton(this.disp.btn_fillAllWaves, false);
      this.disp.btn_autoFill.toolTipText = "dialog_attack_autofill_noAttackTroops_tt";
      this.disp.btn_fillCurrentWave.toolTipText = "dialog_attack_autofill_noAttackTroops_tt";
      this.disp.btn_fillAllWaves.toolTipText = "dialog_attack_autofill_noAttackTroops_tt";
    }
    this.applyActiveState();
  };
  FightDialogAutoFillComponent.prototype.applyActiveState = function () {
    if (this.useSimpleState) {
      this.disp.mc_spaceDecoLeft.visible = true;
      this.disp.mc_spaceDecoRight.visible = false;
      this.disp.mc_check_flankLeft.visible = false;
      this.disp.mc_check_flankMiddle.visible = false;
      this.disp.mc_check_flankRight.visible = false;
      this.disp.btn_clear.visible = false;
      this.disp.btn_optionsNormal.visible = false;
      this.disp.btn_optionsActive.visible = false;
      this.disp.btn_fillCurrentWave.visible = false;
      this.disp.btn_fillAllWaves.visible = false;
      this.disp.btn_autoFill.visible = this.isActive;
    } else {
      this.disp.mc_spaceDecoLeft.visible = !this.isActive;
      this.disp.mc_spaceDecoRight.visible = !this.isActive;
      this.disp.mc_check_flankLeft.visible = this.isActive;
      this.disp.mc_check_flankMiddle.visible = this.isActive;
      this.disp.mc_check_flankRight.visible = this.isActive;
      this.disp.btn_clear.visible = this.isActive;
      this.disp.btn_optionsNormal.visible = this.isActive;
      this.disp.btn_optionsActive.visible = this.isActive;
      this.disp.btn_fillCurrentWave.visible = this.isActive;
      this.disp.btn_fillAllWaves.visible = this.isActive;
      this.disp.btn_autoFill.visible = false;
    }
    this.updateOptionButtons();
  };
  FightDialogAutoFillComponent.prototype.showOptions = function (e) {
    if (!this.useSimpleState) {
      this.disp.mc_options.visible = e;
      this.showOptionsTooltip(false);
      this.updateOptionButtons();
    }
  };
  FightDialogAutoFillComponent.prototype.showOptionsTooltip = function (e) {
    if (!this.useSimpleState) {
      this.disp.mc_optionsTooltip.visible = !this.areOptionsVisible() && e;
    }
  };
  FightDialogAutoFillComponent.prototype.updateOptionButtons = function () {
    if (!this.useSimpleState) {
      var e = !this.options.isAnyToolFilterInactive();
      this.disp.btn_optionsNormal.visible = this.isActive && !e;
      this.disp.btn_optionsActive.visible = this.isActive && e;
    }
  };
  FightDialogAutoFillComponent.prototype.getAutoFillButtonMc = function () {
    if (this.useSimpleState) {
      return this.disp.btn_autoFill;
    } else {
      return this.disp.btn_fillAllWaves;
    }
  };
  FightDialogAutoFillComponent.prototype.areOptionsVisible = function () {
    return this.disp.mc_options.visible;
  };
  FightDialogAutoFillComponent.prototype.getCheckboxTooltipText = function (e, t) {
    return a.Localize.text(e, [a.Localize.text(t ? "dialog_attack_autofill_enabled_tt" : "dialog_attack_autofill_disabled_tt")]);
  };
  FightDialogAutoFillComponent.prototype.getOptionsCheckboxMc = function (e) {
    return this.disp.mc_options.getChildByName("mc_check_" + e);
  };
  FightDialogAutoFillComponent.getOptionsTooltipIconFrame = function (e) {
    switch (e) {
      case l.AutoFillOptions.TOOL_FILTER_BASIC:
        return 1;
      case l.AutoFillOptions.TOOL_FILTER_PREMIUM:
        return 2;
      case l.AutoFillOptions.TOOL_FILTER_ELITE:
        return 3;
      case l.AutoFillOptions.TOOL_FILTER_EVENT:
        return 4;
      case l.AutoFillOptions.TOOL_FILTER_COMBO:
        return 5;
      default:
        return 1;
    }
  };
  FightDialogAutoFillComponent.prototype.onClick = function (t) {
    if (d.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.disp.btn_clear:
          this.onClearButtonClicked.dispatch();
          break;
        case this.disp.btn_optionsNormal:
        case this.disp.btn_optionsActive:
          this.showOptions(!this.areOptionsVisible());
          break;
        case this.disp.btn_fillCurrentWave:
          this.onFillCurrentWaveButtonClicked.dispatch();
          break;
        case this.disp.btn_fillAllWaves:
        case this.disp.btn_autoFill:
          this.onFillAllWavesButtonClicked.dispatch();
          break;
        case this.disp.mc_check_flankLeft:
          this.options.fillLeftFlank = !this.options.fillLeftFlank;
          this.applyCurrentOptionsToVisuals();
          break;
        case this.disp.mc_check_flankMiddle:
          this.options.fillMiddleFlank = !this.options.fillMiddleFlank;
          this.applyCurrentOptionsToVisuals();
          break;
        case this.disp.mc_check_flankRight:
          this.options.fillRightFlank = !this.options.fillRightFlank;
          this.applyCurrentOptionsToVisuals();
          break;
        case this.disp.mc_options.btn_close:
          this.showOptions(false);
      }
      for (var i = 0, n = l.AutoFillOptions.TOOL_FILTER_TYPES; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = this.getOptionsCheckboxMc(o);
          if (t.target == a) {
            this.options.setToolFilter(o, !this.options.isToolFilterActive(o));
            this.applyCurrentOptionsToVisuals();
          }
        }
      }
    }
  };
  FightDialogAutoFillComponent.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    switch (t.target) {
      case this.disp.btn_optionsNormal:
      case this.disp.btn_optionsActive:
        this.showOptionsTooltip(true);
    }
  };
  FightDialogAutoFillComponent.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    switch (t.target) {
      case this.disp.btn_optionsNormal:
      case this.disp.btn_optionsActive:
        this.showOptionsTooltip(false);
    }
  };
  Object.defineProperty(FightDialogAutoFillComponent.prototype, "isActive", {
    get: function () {
      return this._isActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightDialogAutoFillComponent.prototype, "onFillCurrentWaveButtonClicked", {
    get: function () {
      return this._onFillCurrentWaveButtonClicked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightDialogAutoFillComponent.prototype, "onFillAllWavesButtonClicked", {
    get: function () {
      return this._onFillAllWavesButtonClicked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightDialogAutoFillComponent.prototype, "options", {
    get: function () {
      return this._options;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightDialogAutoFillComponent.prototype, "onClearButtonClicked", {
    get: function () {
      return this._onClearButtonClicked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightDialogAutoFillComponent.prototype, "useSimpleState", {
    get: function () {
      return this._useSimpleState;
    },
    enumerable: true,
    configurable: true
  });
  FightDialogAutoFillComponent.NUMBER_OF_OPTIONS_TOOLTIP_ICONS = 5;
  return FightDialogAutoFillComponent;
}(c.CastleItemRenderer);
exports.FightDialogAutoFillComponent = p;
o.classImplementsInterfaces(p, "ICollectableRendererList");
var h = require("./14.js");
var g = require("./1.js");
var C = require("./36.js");