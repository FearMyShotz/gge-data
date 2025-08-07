Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./23.js");
var a = require("./23.js");
var s = require("./91.js");
var r = require("./131.js");
var l = createjs.MouseEvent;
var c = function (e) {
  function CastleSublayerPanel(t) {
    var i = e.call(this, t) || this;
    i.sublayers = [];
    return i;
  }
  n.__extends(CastleSublayerPanel, e);
  CastleSublayerPanel.prototype.hideAllSublayer = function () {
    if (this.sublayers != null) {
      for (var e = 0, t = this.sublayers; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          this.hideSubLayer(i, false);
        }
      }
    }
  };
  CastleSublayerPanel.prototype.addSublayer = function (e) {
    this.sublayers.push(e);
    e.initPosY = e.y;
    this.hideAllSublayer();
  };
  CastleSublayerPanel.prototype.showSubLayer = function (e) {
    if (!e.visible) {
      this.hideAllSublayer();
      e.visible = true;
      a.TweenMax.fromTo(e, 0.3, {
        alpha: 0
      }, {
        alpha: 1,
        ease: o.Linear.easeOut
      });
      a.TweenMax.fromTo(e, 0.3, {
        y: e.initPosY + 10
      }, {
        y: e.initPosY,
        ease: o.Linear.easeIn
      });
      this.controller.dispatchEvent(new s.CastleLayoutManagerEvent(s.CastleLayoutManagerEvent.SHOW_SUBLAYER_PANEL, [e.name]));
      this.disp.addEventListener(l.ROLL_OUT, this.bindFunction(this.onSublayerRollOut));
    }
  };
  CastleSublayerPanel.prototype.hideSubLayer = function (e, t = true) {
    e.visible = false;
    this.disp.removeEventListener(l.ROLL_OUT, this.bindFunction(this.onSublayerRollOut));
    this.controller.dispatchEvent(new s.CastleLayoutManagerEvent(s.CastleLayoutManagerEvent.HIDE_SUBLAYER_PANEL, [e.name]));
    if (this.dispToCache.cacheCanvas && t) {
      this.dispToCache.updateCache();
    }
  };
  CastleSublayerPanel.prototype.onSublayerRollOut = function (e) {
    this.hideAllSublayer();
    if (this.dispToCache.cacheCanvas) {
      this.dispToCache.updateCache();
    }
  };
  return CastleSublayerPanel;
}(r.CastlePanel);
exports.CastleSublayerPanel = c;