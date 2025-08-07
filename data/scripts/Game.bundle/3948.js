Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./3.js");
var s = require("./23.js");
var r = require("./1818.js");
var l = require("./1819.js");
var c = require("./1118.js");
var u = createjs.Container;
var d = createjs.MouseEvent;
var p = function (e) {
  function CastleOfferHubStatusBar(t) {
    var i = e.call(this, c.StatusBarExpansionDirectionEnum.EXPAND_UP) || this;
    i._hubDisp = new u();
    i._hubDisp.y = -h.CastleStatusPanel.BOTTOM_SPACE_ACTIONPANEL;
    i._hubSubPanel = new Library.CastleInterfaceElements.OfferHubSubPanel();
    i._hubSubPanel.y = CastleOfferHubStatusBar.BORDER_OFFSET;
    i._hubSubPanel.x = -CastleOfferHubStatusBar.ICON_WIDTH / 2;
    i._hubDisp.addChild(i._hubSubPanel);
    i._disp.addChild(i._hubDisp);
    i._hubDisp.visible = false;
    i._hubDisp.scaleX = i._hubDisp.scaleY = CastleOfferHubStatusBar.FADE_SCALE;
    o.GoodgameTextFieldManager.getInstance().registerTextField(i._hubSubPanel.header.txt_header, new a.LocalizedTextVO(t));
    i._disp.addEventListener(d.ROLL_OVER, i.bindFunction(i.onMouseOver));
    i._disp.addEventListener(d.ROLL_OUT, i.bindFunction(i.onMouseOut));
    _.CastleBasicController.getInstance().addEventListener(C.SettingsEvent.EVENT_BOOKMARK_CHANGED, i.bindFunction(i.onEventBookmarkChanged));
    i._disp.addEventListener(d.CLICK, i.bindFunction(i.toggleHub));
    return i;
  }
  n.__extends(CastleOfferHubStatusBar, e);
  CastleOfferHubStatusBar.prototype.dispose = function () {
    this._disp.removeEventListener(d.ROLL_OVER, this.bindFunction(this.onMouseOver));
    this._disp.removeEventListener(d.ROLL_OUT, this.bindFunction(this.onMouseOut));
    _.CastleBasicController.getInstance().removeEventListener(C.SettingsEvent.EVENT_BOOKMARK_CHANGED, this.bindFunction(this.onEventBookmarkChanged));
    this._disp.removeEventListener(d.CLICK, this.bindFunction(this.toggleHub));
    e.prototype.dispose.call(this);
  };
  CastleOfferHubStatusBar.prototype.addIcon = function (e) {
    this._icons.push(e);
    var t = g.instanceOfClass(e, "StatusIconOfferHub") ? this._disp : this._hubDisp;
    e.addToContainer(t);
    e.changedVisibilityCallback = this.bindFunction(this.onIconChangeVisibility);
    this._icons.sort(this.bindFunction(this.compareIcons));
  };
  CastleOfferHubStatusBar.prototype.removeIcon = function (e) {
    var t = this._icons.indexOf(e);
    if (!(t < 0)) {
      e.changedVisibilityCallback = null;
      this._icons.splice(t, 1);
      var i = g.instanceOfClass(e, "StatusIconOfferHub") ? this._disp : this._hubDisp;
      e.removeFromContainer(i);
      this._icons.sort(this.bindFunction(this.compareIcons));
    }
  };
  CastleOfferHubStatusBar.prototype.repositioningIcons = function () {
    var e;
    var t = 0;
    var i = null;
    var n = false;
    this._icons.sort(this.bindFunction(this.compareIcons));
    this._anchorItem = null;
    if (this._icons != null) {
      for (var o = 0, a = this._icons; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined) {
          if (g.instanceOfClass(s, "StatusIconOfferHub")) {
            s.setPosition(0, 0);
            e = s;
          } else if (s.visible) {
            i ||= s;
            s.setPosition(t % CastleOfferHubStatusBar.ICONS_PER_ROW * CastleOfferHubStatusBar.ICON_WIDTH, -Math.floor(t / CastleOfferHubStatusBar.ICONS_PER_ROW) * CastleOfferHubStatusBar.ICON_HEIGHT_0 - CastleOfferHubStatusBar.ICON_HEIGHT_0 / 2);
            n = n || s.isNew;
            t++;
          }
        }
      }
    }
    if (e) {
      e.mirrorFirstHubIcon(i);
      e.iconCount = t;
      e.isAnyNewOffer = n;
      if (t > 0) {
        this._anchorItem = e;
      }
    }
    var r = Math.ceil(t / CastleOfferHubStatusBar.ICONS_PER_ROW) * CastleOfferHubStatusBar.ICON_HEIGHT_0;
    this._hubSubPanel.header.y = -r - CastleOfferHubStatusBar.BORDER_OFFSET;
    this._hubSubPanel.bg.height = r;
    this._hubSubPanel.bg.y = -r - CastleOfferHubStatusBar.BORDER_OFFSET;
    this.dispatchEvent(new l.CastleStatusBarEvent(l.CastleStatusBarEvent.ICONS_REPOSITIONED));
  };
  CastleOfferHubStatusBar.prototype.onMouseOver = function (e) {
    this._hubDisp.visible = true;
    s.TweenLite.killTweensOf(this._hubDisp);
    s.TweenLite.to(this._hubDisp, CastleOfferHubStatusBar.FADE_DURATION, {
      alpha: 1,
      scaleX: 1,
      scaleY: 1
    });
  };
  CastleOfferHubStatusBar.prototype.onMouseOut = function (e) {
    s.TweenLite.killTweensOf(this._hubDisp);
    s.TweenLite.to(this._hubDisp, CastleOfferHubStatusBar.FADE_DURATION, {
      alpha: 0,
      scaleX: CastleOfferHubStatusBar.FADE_SCALE,
      scaleY: CastleOfferHubStatusBar.FADE_SCALE,
      onComplete: this.bindFunction(this.hideHub)
    });
  };
  CastleOfferHubStatusBar.prototype.onEventBookmarkChanged = function (e) {
    this.repositioningIcons();
  };
  CastleOfferHubStatusBar.prototype.toggleHub = function (e) {
    if (g.currentBrowserInfo.isTouchEvent(e)) {
      if (this._hubDisp.visible) {
        this.onMouseOut(e);
      } else {
        this.onMouseOver(e);
      }
    }
  };
  CastleOfferHubStatusBar.prototype.hideHub = function () {
    this._hubDisp.visible = false;
    if (this.statusIconOfferHub) {
      if (this._icons != null) {
        for (var e = 0, t = this._icons; e < t.length; e++) {
          var i = t[e];
          if (i !== undefined && i.visible && g.instanceOfClass(i, "AOfferHubItemStatusIcon")) {
            i.setAsSeen();
          }
        }
      }
      this.statusIconOfferHub.isAnyNewOffer = false;
      this.statusIconOfferHub.updateCounter();
    }
  };
  Object.defineProperty(CastleOfferHubStatusBar.prototype, "statusIconOfferHub", {
    get: function () {
      return this._anchorItem;
    },
    enumerable: true,
    configurable: true
  });
  CastleOfferHubStatusBar.ICON_WIDTH = 80;
  CastleOfferHubStatusBar.ICON_HEIGHT_0 = 96;
  CastleOfferHubStatusBar.ICONS_PER_ROW = 5;
  CastleOfferHubStatusBar.BORDER_OFFSET = 2;
  CastleOfferHubStatusBar.FADE_SCALE = 0.95;
  CastleOfferHubStatusBar.FADE_DURATION = 0.2;
  return CastleOfferHubStatusBar;
}(r.CastleStatusBar);
exports.CastleOfferHubStatusBar = p;
var h = require("./472.js");
var g = require("./1.js");
var C = require("./463.js");
var _ = require("./15.js");