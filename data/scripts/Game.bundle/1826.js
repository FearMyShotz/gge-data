Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./265.js");
var c = require("./14.js");
var u = require("./20.js");
var d = require("./8.js");
var p = require("./1629.js");
var h = require("./1630.js");
var g = function (e) {
  function GachaComponentMilestones(t) {
    var i = e.call(this, t) || this;
    d.ButtonHelper.initButtons([i.disp.btn_info], u.ClickFeedbackButtonHover);
    i.itxt_points = c.CastleComponent.textFieldManager.registerTextField(i.disp.txt_points, new r.LocalizedNumberVO(0));
    i.itxt_pointsLabel = c.CastleComponent.textFieldManager.registerTextField(i.disp.txt_pointsLabel, new s.LocalizedTextVO(""));
    return i;
  }
  n.__extends(GachaComponentMilestones, e);
  GachaComponentMilestones.prototype.onShow = function () {
    var t = this.getEventVO().pointThresholds.length > 0;
    this.setVisibility(t);
    if (t) {
      e.prototype.onShow.call(this);
      this.updateMilestones();
    }
  };
  GachaComponentMilestones.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    this.destroyCollectableRenderList();
  };
  GachaComponentMilestones.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    c.CastleComponent.controller.addEventListener(l.GachaEvent.UPDATED, this.bindFunction(this.onGachaUpdate));
    c.CastleComponent.controller.addEventListener(l.GachaEvent.MULTIPULL_CHANGED, this.bindFunction(this.onMultiPullChange));
  };
  GachaComponentMilestones.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    c.CastleComponent.controller.removeEventListener(l.GachaEvent.UPDATED, this.bindFunction(this.onGachaUpdate));
    c.CastleComponent.controller.removeEventListener(l.GachaEvent.MULTIPULL_CHANGED, this.bindFunction(this.onMultiPullChange));
  };
  GachaComponentMilestones.prototype.onGachaUpdate = function (e) {
    if (e.eventVO.eventId == this.getEventVO().eventId) {
      this.updateMilestones();
    }
  };
  GachaComponentMilestones.prototype.onMultiPullChange = function (e) {
    if (e.eventVO.eventId == this.getEventVO().eventId) {
      this.updateMilestones();
    }
  };
  GachaComponentMilestones.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    var i = t.target.name;
    if (i && i.startsWith("reward")) {
      this.showRewardTooltip(t.target);
    }
  };
  GachaComponentMilestones.prototype.updateMilestones = function () {
    this.itxt_points.textContentVO.numberValue = this.getEventVO().ownPoints || 0;
    this.itxt_pointsLabel.textContentVO.textId = "gachaPull_milestone_" + this.getEventVO().assetName();
    var e = this.updateProgressBar(this.disp.mc_progress.progressbar, this.getEventVO().ownPoints);
    this.updateProgressBar(this.disp.mc_progress.mc_foreshadow, this.getEventVO().ownPoints + this.getEventVO().currentMultiPull);
    for (var t = 0; t < GachaComponentMilestones.MILESTONES; t++) {
      this.disp["reward" + t].gotoAndStop(t < e ? 2 : 1);
      this.disp["reward" + t].mouseChildren = false;
    }
  };
  GachaComponentMilestones.prototype.updateProgressBar = function (e, t) {
    if (e) {
      var i = this.getEventVO().pointThresholds;
      var n = 0;
      for (var a = 0; a < GachaComponentMilestones.MILESTONES; a++) {
        if (t >= i[a]) {
          n++;
        }
      }
      if (n >= GachaComponentMilestones.MILESTONES) {
        e.scaleY = 1;
      } else {
        var s = n / GachaComponentMilestones.MILESTONES;
        var r = n > 0 ? i[n - 1] : 0;
        var l = (t - r) / (i[n] - r) / GachaComponentMilestones.MILESTONES;
        e.scaleY = o.MathBase.clamp(s + l, 0, 1);
      }
      return n;
    }
  };
  GachaComponentMilestones.prototype.showRewardTooltip = function (e) {
    var t = parseInt(e.name.replace("reward", ""));
    var i = this.getEventVO().rewardLists[t];
    var n = [];
    if (this.getEventVO().ownPoints >= this.getEventVO().pointThresholds[t]) {
      n.push(a.Localize.text("Completed"));
    } else {
      n.push(a.Localize.text("gachaPull_milestone_tooltip_amount_" + this.getEventVO().assetName(), [this.getEventVO().ownPoints, this.getEventVO().pointThresholds[t]]));
      n.push(a.Localize.text("gachaPull_milestone_tooltip_amountLeft_" + this.getEventVO().assetName(), [this.getEventVO().pointThresholds[t] - this.getEventVO().ownPoints]));
    }
    p.GachaMilestoneTooltipHelper.showToolTip(e, n, i, h.GachaMilestoneTooltip.TARGET_RIGHT);
  };
  GachaComponentMilestones.prototype.getEventVO = function () {
    return this._params[0];
  };
  GachaComponentMilestones.MILESTONES = 4;
  return GachaComponentMilestones;
}(require("./362.js").AGachaComponent);
exports.GachaComponentMilestones = g;