Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./55.js");
var d = require("./47.js");
var p = require("./59.js");
var h = require("./42.js");
var g = require("./8.js");
var C = require("./11.js");
var _ = require("./413.js");
var m = function (e) {
  function CastleHelperDialog() {
    var t = this;
    t.fixedDialogSize = 0;
    t.sliderButtonSize = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleHelperDialog.NAME) || this;
  }
  n.__extends(CastleHelperDialog, e);
  CastleHelperDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.headerMC = this.dialogDisp.mc_header;
    this.helpTextBgMC = this.dialogDisp.mc_helpTextBG;
    this.helpBoxMC = this.dialogDisp.mc_helpBox;
    this.sliderLine = this.dialogDisp.mc_sliderLine;
    this.fixedDialogSize = this.headerMC.height + this.helpBoxMC.height;
    this.sliderButtonSize = this.dialogDisp.btn_minus.height;
    g.ButtonHelper.initButtons([this.headerMC.btn_close, this.dialogDisp.btn_minus, this.dialogDisp.btn_plus], E.ClickFeedbackButton, 1);
    g.ButtonHelper.initButton(this.dialogDisp.btn_slider, 1, _.ClickFeedBackSliderButton);
    g.ButtonHelper.initBasicButtons([this.helpBoxMC.btn_help]);
    this.itxt_help = this.textFieldManager.registerTextField(this.dialogDisp.txt_help, new s.HTMLTextCustomVO());
    this.itxt_help.mouseEnabled = false;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_helpBox.txt_helpBox, new r.LocalizedTextVO("dialog_helper_ingameHelpLink")).verticalAlign = h.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.scrollComponent = new f.SimpleScrollComponent(new d.SimpleScrollVO().initByParent(this.dialogDisp).addMouseWheelElements([this.dialogDisp]).addVisualElements([this.dialogDisp.sliderBG]), new p.DynamicSizeScrollStrategyVertical(true, 0));
    this.helpTextBgMC.mouseChildren = false;
  };
  CastleHelperDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    var i = s.Localize.text("help");
    this.textFieldManager.registerTextField(this.headerMC.txt_title, new l.TextVO(i.toUpperCase()));
    this.itxt_help.textContentVO.addLocalizedTextVO(new r.LocalizedTextVO(this.dialogProperties.copy));
    this.itxt_help = this.textFieldManager.registerTextField(this.dialogDisp.txt_help, this.itxt_help.textContentVO);
    this.setHelpTextSize();
    this.itxt_help.restoreTextContent();
    this.itxt_help.scrollV = this.itxt_help.maxScrollV;
    var n = c.int(u.ClientConstUtils.isTlfMode ? 20 : 2);
    this.scrollComponent.strategy.visibleValue = u.ClientConstUtils.isTlfMode ? this.itxt_help.height : this.itxt_help.numLines;
    this.scrollComponent.init(1, Math.ceil(this.itxt_help.maxScrollV), n, n);
    this.scrollComponent.setVisibility(o.MathBase.round(this.itxt_help.maxScrollV, 4) > 1);
    this.scrollComponent.show();
    this.scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChange));
    this.itxt_help.scrollV = 1;
  };
  CastleHelperDialog.prototype.onScrollValueChange = function () {
    this.itxt_help.scrollV = o.MathBase.clamp(this.scrollComponent.currentValue, 1, this.itxt_help.maxScrollV);
  };
  CastleHelperDialog.prototype.setHelpTextSize = function () {
    var e = CastleHelperDialog.MIN_BG_HEIGHT - this.fixedDialogSize;
    if (a.MobileHelper.isScreenTooSmall()) {
      CastleHelperDialog.TOP_BOTTOM_OFFSET = 5;
    }
    var t = this.dialogDisp.stage.stageHeight - CastleHelperDialog.TOP_BOTTOM_OFFSET * 2 - this.fixedDialogSize;
    var i = o.MathBase.clamp(this.itxt_help.textHeight, e, t);
    var n = this.itxt_help.textHeight / (this.itxt_help.numLines + Math.ceil(this.itxt_help.maxScrollV));
    i = Math.floor(i / n) * n;
    this.itxt_help.height = i;
    this.helpTextBgMC.height = i + CastleHelperDialog.TEXT_PADDING * 2;
    this.dialogDisp.sliderBG.height = this.helpTextBgMC.height;
    this.sliderLine.height = this.helpTextBgMC.height - (this.sliderButtonSize + CastleHelperDialog.SLIDER_GAP_OFFSET) * 2;
    this.helpBoxMC.y = this.helpTextBgMC.y + this.helpTextBgMC.height;
    this.dialogDisp.btn_plus.y = this.helpBoxMC.y;
  };
  CastleHelperDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
  };
  CastleHelperDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (g.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.helpBoxMC.btn_help:
          if (!this.layoutManager.tutorialPanel.isVisible()) {
            C.CastleExternalDialog.dialogHandler.registerDefaultDialogs(O.CastleIngameHelpDialog);
          }
          if (this.dialogProperties.functionOk) {
            this.dialogProperties.functionOk();
          }
      }
      if (t.target != this.scrollComponent.scrollVO.minusButton && t.target != this.scrollComponent.scrollVO.plusButton && t.target != this.scrollComponent.scrollVO.sliderLine && t.target != this.scrollComponent.scrollVO.sliderButton) {
        if (a.MobileHelper.isScreenTooSmall() && t.target == this.helpTextBgMC) {
          return;
        }
        this.hide();
      }
    }
  };
  CastleHelperDialog.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      var e = 1;
      if (this.disp.stage.stageWidth < this.dispBounds.width + 100) {
        e = this.disp.stage.stageWidth / this.dispBounds.width;
      }
      if (this.disp.stage.stageHeight < (this.dispBounds.height + 100) * e) {
        e = this.disp.stage.stageHeight / this.dispBounds.height;
      }
      this.disp.x = -this.dispBounds.right * e + this.disp.stage.stageWidth - 100;
      this.disp.y = -this.dispBounds.top * e + 100;
      this.disp.scaleX = this.disp.scaleY = e;
      if (a.MobileHelper.isScreenTooSmall()) {
        if (a.MobileHelper.isLandscape()) {
          this.disp.y -= 80;
        } else {
          this.disp.x += 100;
        }
      }
    }
  };
  Object.defineProperty(CastleHelperDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleHelperDialog.__initialize_static_members = function () {
    CastleHelperDialog.NAME = "CastleHelperEx";
    CastleHelperDialog.MIN_BG_HEIGHT = 400;
    CastleHelperDialog.TOP_BOTTOM_OFFSET = 100;
    CastleHelperDialog.SLIDER_GAP_OFFSET = 2;
    CastleHelperDialog.TEXT_PADDING = 2;
  };
  return CastleHelperDialog;
}(C.CastleExternalDialog);
exports.CastleHelperDialog = m;
var f = require("./95.js");
var O = require("./1075.js");
var E = require("./36.js");
a.classImplementsInterfaces(m, "ICollectableRendererList");
m.__initialize_static_members();