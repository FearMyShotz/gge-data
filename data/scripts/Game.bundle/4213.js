Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MovieClip;
var o = createjs.Shape;
var a = function () {
  function CastleTieredPrimeDayProgressBar(e, t, i) {
    this._progressBars = [];
    this._disp = e;
    this._progressDisplays = t;
    this._eventVO = i;
    this.checkInitBars();
    this.resizeBar();
    this.positionSegmentDisplays();
    this.initProgressBars();
    this.initText();
  }
  CastleTieredPrimeDayProgressBar.prototype.initText = function () {
    for (var e = 0; e < this._progressDisplays.length; e++) {
      var t = this._disp["mc_display" + e];
      CastleTieredPrimeDayProgressBar.textFieldManager.registerTextField(t.txt_title, new l.LocalizedTextVO("buy_imperative"));
      CastleTieredPrimeDayProgressBar.textFieldManager.registerTextField(t.txt_amount, new l.LocalizedTextVO("xRubies", [this._eventVO.rewards[e].c2ForReward]));
    }
    this._itxt_progress = CastleTieredPrimeDayProgressBar.textFieldManager.registerTextField(this._disp.txt_progress, new l.LocalizedTextVO("dialog_factionOverview_nextReward_points", [this._eventVO.c2BoughtInCurrentCycle, this._eventVO.c2ForComplete]));
  };
  CastleTieredPrimeDayProgressBar.prototype.checkInitBars = function () {
    var e = this.getGuideWithInitPosition();
    if (e.numChildren > 0) {
      r.MovieClipHelper.clearMovieClip(e);
    }
  };
  CastleTieredPrimeDayProgressBar.prototype.resizeBar = function () {
    var e = this._disp.mc_bar;
    var t = this.getWidthFromTiers(this._progressDisplays.length - 1);
    e.width = t + CastleTieredPrimeDayProgressBar.BORDER_OFFSET * 2;
  };
  CastleTieredPrimeDayProgressBar.prototype.initProgressBars = function () {
    var e = this.getGuideWithInitPosition();
    for (var t = 0; t < this._progressDisplays.length; t++) {
      var i = this._progressDisplays[t];
      var a = new n();
      var s = new o();
      s.graphics.beginFill(11121231);
      s.graphics.drawRect(0, 0, i.width - CastleTieredPrimeDayProgressBar.TIER_BOX_SHADOW_LENGTH, CastleTieredPrimeDayProgressBar._BAR_HEIGHT);
      s.graphics.endFill();
      s.setBounds(0, 0, i.width - CastleTieredPrimeDayProgressBar.TIER_BOX_SHADOW_LENGTH, CastleTieredPrimeDayProgressBar._BAR_HEIGHT);
      a.addChild(s);
      var r = t > 0 ? this.getWidthFromTiers(t - 1) : 0;
      a.x += r;
      a.name = "mc_progressBar" + t;
      a.scaleX = 0;
      e.addChild(a);
      this._progressBars.push(a);
    }
  };
  CastleTieredPrimeDayProgressBar.prototype.getWidthFromTiers = function (e) {
    var t = 0;
    for (; e >= 0; e--) {
      t += this._progressDisplays[e].width - CastleTieredPrimeDayProgressBar.TIER_BOX_SHADOW_LENGTH;
    }
    return t;
  };
  CastleTieredPrimeDayProgressBar.prototype.positionSegmentDisplays = function () {
    var e = this.getGuideWithInitPosition();
    for (var t = 0; t < this._progressDisplays.length; t++) {
      var i = this._progressDisplays[t];
      var n = this._disp["mc_display" + t];
      var o = this._disp["mc_arrow" + t];
      var a = t > 0 ? this.getWidthFromTiers(t - 1) : 0;
      var s = e.x + a;
      n.x = s + i.width * 0.5 - CastleTieredPrimeDayProgressBar.TIER_BOX_SHADOW_LENGTH;
      o.x = s + i.width - CastleTieredPrimeDayProgressBar.TIER_BOX_SHADOW_LENGTH;
      if (t != this._progressDisplays.length - 1) {
        this._disp["mc_line" + t].x = o.x;
      }
    }
  };
  CastleTieredPrimeDayProgressBar.prototype.getGuideWithInitPosition = function () {
    var e = this._disp.mc_guide;
    var t = this._disp.mc_bar;
    e.x = -t.width * 0.5 + CastleTieredPrimeDayProgressBar.HOLDER_MC_BORDER_OFFSET;
    return e;
  };
  CastleTieredPrimeDayProgressBar.prototype.setProgressForBar = function (e, t) {
    this._progressBars[e].scaleX = t;
  };
  CastleTieredPrimeDayProgressBar.prototype.updateProgress = function (e = null) {
    var t = this._eventVO.c2BoughtInCurrentCycle;
    for (var i = 0; i < this._eventVO.rewards.length; i++) {
      var n = 0;
      var o = c.int(i > 0 ? this._eventVO.rewards[i - 1].c2ForReward : 0);
      if (t > o) {
        n = (n = (t - o) / (this._eventVO.rewards[i].c2ForReward - o)) > 1 ? 1 : n;
      }
      this.setProgressForBar(i, n);
    }
    this._itxt_progress.textContentVO.textReplacements = [this._eventVO.c2BoughtInCurrentCycle, this._eventVO.c2ForComplete];
  };
  Object.defineProperty(CastleTieredPrimeDayProgressBar, "textFieldManager", {
    get: function () {
      return s.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleTieredPrimeDayProgressBar.__initialize_static_members = function () {
    CastleTieredPrimeDayProgressBar._BAR_HEIGHT = 16;
    CastleTieredPrimeDayProgressBar.TIER_BOX_SHADOW_LENGTH = 3;
    CastleTieredPrimeDayProgressBar.BORDER_OFFSET = 10;
    CastleTieredPrimeDayProgressBar.HOLDER_MC_BORDER_OFFSET = 8;
  };
  return CastleTieredPrimeDayProgressBar;
}();
exports.CastleTieredPrimeDayProgressBar = a;
var s = require("./2.js");
var r = require("./2.js");
var l = require("./3.js");
var c = require("./6.js");
a.__initialize_static_members();