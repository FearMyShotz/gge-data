Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./17.js");
var l = require("./847.js");
var c = require("./1867.js");
var u = require("./334.js");
var d = function (e) {
  function ModernStartscreenComponent() {
    return e.call(this, new (a.getDefinitionByName("ModernStartscreenBackground"))()) || this;
  }
  n.__extends(ModernStartscreenComponent, e);
  ModernStartscreenComponent.prototype.init = function () {
    e.prototype.init.call(this);
    this.addStillFrontLogo();
  };
  ModernStartscreenComponent.prototype.addStillFrontLogo = function () {
    this._stillFrontLogo ||= new (a.getDefinitionByName("Logo_Stillfront"))();
    this.startScreen.mc_bg.addChild(this._stillFrontLogo);
  };
  ModernStartscreenComponent.prototype.onOverSupport = function (e) {
    r.CastleLayoutManager.getInstance().tooltipManager.show("support_GGS_tooltip", e.target);
  };
  ModernStartscreenComponent.prototype.onOutSupport = function (e) {
    r.CastleLayoutManager.getInstance().tooltipManager.hide();
  };
  ModernStartscreenComponent.prototype.updatePosition = function () {
    var e = this.disp.stage ? this.disp.stage.stageWidth : document.documentElement.clientWidth;
    var t = this.disp.stage ? this.disp.stage.stageHeight : document.documentElement.clientHeight;
    var i = s.int(document.getElementById("edgeStartscreenVideoReplacement").clientWidth) || 1920;
    var n = s.int(document.getElementById("edgeStartscreenVideoReplacement").clientHeight) || 1080;
    var a = s.int(Math.min(e, i));
    var r = s.int(Math.min(t, n));
    var l = o.MathBase.clamp(t / 820, c.ModernStartscreenPanel.MIN_SCALE, c.ModernStartscreenPanel.MAX_SCALE);
    var d = l * 35;
    this.backgroundView.mc_progressBar.x = e * 0.5;
    this.backgroundView.mc_progressBar.y = 375;
    this.supportBtn.y = r - d - this.supportBtn.height / 2;
    this.supportBtn.x = -a / 2 + d + this.supportBtn.width / 2;
    this.supportBtn.scaleX = this.supportBtn.scaleY = l;
    this.loginBackgroundDisp.scaleX = this.loginBackgroundDisp.scaleY = l;
    this.loginBackgroundDisp.x = 0;
    this.loginBackgroundDisp.y = l * 323;
    this.backgroundView.mc_bg.txt_version.x = -this.backgroundView.mc_bg.txt_version.width / 2;
    if (this.background) {
      this.background.x = e / 2;
      this.background.y = 0;
    }
    if (this.copyrightDisp.visible) {
      this.copyrightDisp.x = a / 2;
      this.copyrightDisp.y = r;
    }
    if (this._stillFrontLogo) {
      this._stillFrontLogo.scaleX = this._stillFrontLogo.scaleY = l;
      this._stillFrontLogo.x = a / 2 - 70;
      this._stillFrontLogo.y = r - 56;
      if (this.copyrightDisp.visible) {
        this._stillFrontLogo.y -= this.copyrightDisp.height;
      }
    }
    if (u.StartscreenHelper.hasBackgroundAnimation()) {
      u.StartscreenHelper.updateBackgroundAnimation(this.bgAnimationMP4Played);
    }
    if (this._backgroundSprite && this._backgroundSprite.stage) {
      this._backgroundSprite.width = e / this.disp.scaleX;
      this._backgroundSprite.height = t / this.disp.scaleY;
      this._backgroundSprite.x = -this.disp.x / this.disp.scaleX;
      this._backgroundSprite.y = -this.disp.y / this.disp.scaleY;
      window.renderBgStageOnNextTick = true;
    }
  };
  Object.defineProperty(ModernStartscreenComponent.prototype, "loginBackgroundDisp", {
    get: function () {
      return this.backgroundView.mc_bg.mc_panelBG;
    },
    enumerable: true,
    configurable: true
  });
  return ModernStartscreenComponent;
}(l.CastleStartscreenComponent);
exports.ModernStartscreenComponent = d;