Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./3.js");
var s = require("./19.js");
var r = require("./24.js");
var l = require("./14.js");
var c = require("./652.js");
var u = require("./47.js");
var d = require("./189.js");
var p = require("./1628.js");
var h = createjs.MovieClip;
var g = createjs.Point;
var C = function (e) {
  function GachaMilestoneTooltip() {
    var t = e.call(this) || this;
    t._disp = new h();
    t._clip = new r.CastleGoodgameExternalClip(GachaMilestoneTooltip.ASSET_NAME, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(GachaMilestoneTooltip.ASSET_NAME), null, 0, false);
    t._disp.addChild(t._clip);
    return t;
  }
  n.__extends(GachaMilestoneTooltip, e);
  Object.defineProperty(GachaMilestoneTooltip.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaMilestoneTooltip.prototype, "tooltipDisp", {
    get: function () {
      return this._clip.currentshownDisplayObject;
    },
    enumerable: true,
    configurable: true
  });
  GachaMilestoneTooltip.prototype.show = function (t, i, n, o) {
    var r = this;
    if (o === undefined) {
      o = GachaMilestoneTooltip.TARGET_DOWN;
    }
    if (this._clip.isLoaded) {
      this.destroyCollectableRenderList();
      this.rewardComponent ||= new c.SimpleCollectableScrollComponent(this.tooltipDisp, new u.SimpleScrollVO().initByParent(this.tooltipDisp).addMouseWheelElements([this.tooltipDisp]), new d.SimpleScrollStrategyHorizontal(), 3, 3);
      l.CastleComponent.textFieldManager.registerTextField(this.tooltipDisp.txt_0, new a.TextVO(i[0] ? i[0] : ""));
      l.CastleComponent.textFieldManager.registerTextField(this.tooltipDisp.txt_1, new a.TextVO(i[1] ? i[1] : ""));
      this.rewardComponent.show(n, new s.CollectableRenderOptions(s.CollectableRenderOptions.SET_DEFAULT, new g(65, 63)));
      this.updatePosition(t, o);
      e.prototype.onShow.call(this);
    } else {
      this._clip.doWhenLoaded(function () {
        r.show(t, i, n, o);
      });
    }
  };
  GachaMilestoneTooltip.prototype.updatePosition = function (e, t) {
    this.tooltipDisp.arrow_up.visible = t == GachaMilestoneTooltip.TARGET_UP;
    this.tooltipDisp.arrow_down.visible = t == GachaMilestoneTooltip.TARGET_DOWN;
    this.tooltipDisp.arrow_left.visible = t == GachaMilestoneTooltip.TARGET_LEFT;
    this.tooltipDisp.arrow_right.visible = t == GachaMilestoneTooltip.TARGET_RIGHT;
    var i = e.localToGlobal(new g(0, 0));
    switch (t) {
      case GachaMilestoneTooltip.TARGET_UP:
        this._disp.x = i.x;
        this._disp.y = i.y - e.height / 2;
        this.tooltipDisp.x = 0;
        this.tooltipDisp.y = this.tooltipDisp.height;
        break;
      case GachaMilestoneTooltip.TARGET_DOWN:
        this._disp.x = i.x;
        this._disp.y = i.y + e.height / 2;
        this.tooltipDisp.x = 0;
        this.tooltipDisp.y = 0;
        break;
      case GachaMilestoneTooltip.TARGET_LEFT:
        this._disp.x = i.x + e.width / 2;
        this._disp.y = i.y;
        this.tooltipDisp.x = this.tooltipDisp.width / 2;
        this.tooltipDisp.y = this.tooltipDisp.height / 2;
        break;
      case GachaMilestoneTooltip.TARGET_RIGHT:
        this._disp.x = i.x - e.width / 2;
        this._disp.y = i.y;
        this.tooltipDisp.x = -this.tooltipDisp.width / 2;
        this.tooltipDisp.y = this.tooltipDisp.height / 2;
    }
  };
  GachaMilestoneTooltip.prototype.hide = function () {
    e.prototype.hide.call(this);
    if (this.rewardComponent) {
      this.rewardComponent.hide();
    }
  };
  GachaMilestoneTooltip.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.rewardComponent.destroy();
    this.rewardComponent = null;
  };
  Object.defineProperty(GachaMilestoneTooltip.prototype, "fadeDuration", {
    get: function () {
      return GachaMilestoneTooltip.FADE_DURATION;
    },
    enumerable: true,
    configurable: true
  });
  GachaMilestoneTooltip.ASSET_NAME = "GachaMilestoneTooltipExt";
  GachaMilestoneTooltip.FADE_DURATION = 0.1;
  GachaMilestoneTooltip.TARGET_UP = "up";
  GachaMilestoneTooltip.TARGET_DOWN = "down";
  GachaMilestoneTooltip.TARGET_LEFT = "left";
  GachaMilestoneTooltip.TARGET_RIGHT = "right";
  return GachaMilestoneTooltip;
}(p.InteractiveTooltip);
exports.GachaMilestoneTooltip = C;